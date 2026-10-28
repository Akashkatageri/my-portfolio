import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Check, Copy, Github, Linkedin, ArrowUpRight, Clock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { insertContactMessageSchema } from "@shared/schema";
import type { ContactFormData } from "@/lib/types";
import { PROFILE } from "@/data/studentData";

const WEB3FORMS_ACCESS_KEY = "989e3cbd-1648-41f0-a0c0-b50f31f52e88";
const RATE_LIMIT_MS = 10 * 60 * 1000; // 10 minutes in milliseconds

export default function Contact() {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [cooldownRemaining, setCooldownRemaining] = useState<number>(0);

  // Check rate limit on load and tick countdown
  useEffect(() => {
    const checkRateLimit = () => {
      const lastSent = localStorage.getItem("contact_last_sent");
      if (lastSent) {
        const elapsed = Date.now() - parseInt(lastSent, 10);
        if (elapsed < RATE_LIMIT_MS) {
          setCooldownRemaining(Math.ceil((RATE_LIMIT_MS - elapsed) / 1000));
        } else {
          setCooldownRemaining(0);
        }
      }
    };

    checkRateLimit();
    const timer = setInterval(checkRateLimit, 1000);
    return () => clearInterval(timer);
  }, []);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      // Client-side 10-minute rate limit check
      const lastSent = localStorage.getItem("contact_last_sent");
      if (lastSent) {
        const elapsed = Date.now() - parseInt(lastSent, 10);
        if (elapsed < RATE_LIMIT_MS) {
          const remainingMinutes = Math.ceil((RATE_LIMIT_MS - elapsed) / 60000);
          throw new Error(
            `Rate limit active: Please wait ${remainingMinutes} minute(s) before sending another message.`
          );
        }
      }

      // Submit to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: data.name,
          email: data.email,
          subject: data.subject || "New Message from Portfolio",
          message: data.message,
          from_name: data.name,
        }),
      });

      const resData = await response.json();
      if (!response.ok || !resData.success) {
        throw new Error(resData.message || "Failed to send message via Web3Forms.");
      }

      return resData;
    },
    onSuccess: () => {
      // Record submission timestamp for 10-minute cooldown
      localStorage.setItem("contact_last_sent", Date.now().toString());
      setCooldownRemaining(RATE_LIMIT_MS / 1000);
      setSubmitted(true);
      form.reset();
      toast({
        title: "Message Delivered",
        description: "Your message was sent directly to kletaq.dev@gmail.com.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Submission Blocked",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    toast({
      title: "Email Copied",
      description: PROFILE.email,
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const formatCooldown = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs < 10 ? "0" : ""}${secs}s`;
  };

  return (
    <section id="contact" className="py-20 px-6 bg-transparent border-t border-zinc-900/80">
      <div className="max-w-4xl mx-auto space-y-12">
        
        <div className="space-y-2">
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
            Contact
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="text-sm text-zinc-400">
            Reach out regarding Kletaq, collaborations, or tech opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Direct channels */}
          <div className="space-y-4">
            {/* Copy Email Card */}
            <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-800 space-y-3">
              <span className="text-xs font-mono text-zinc-500">Email Directly:</span>
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-mono text-white font-medium truncate">
                  {PROFILE.email}
                </span>
                <button
                  onClick={copyEmail}
                  className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-xs font-mono text-zinc-300 border border-zinc-800 flex items-center gap-1.5 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-2 pt-2">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Github className="w-4 h-4 text-zinc-400" />
                  <span>GitHub Profile</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-600" />
              </a>

              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Linkedin className="w-4 h-4 text-zinc-400" />
                  <span>LinkedIn</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-600" />
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800">
            {submitted ? (
              <div className="py-10 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center mx-auto text-emerald-400">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white">Message Delivered</h4>
                <p className="text-xs text-zinc-400 max-w-xs mx-auto">
                  Your message has been sent directly to {PROFILE.email}.
                </p>
                <div className="pt-2 text-[11px] font-mono text-zinc-500">
                  Rate limit: 1 message per 10 minutes ({formatCooldown(cooldownRemaining)} remaining)
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-mono text-zinc-400 hover:text-white underline underline-offset-4"
                >
                  Write another note
                </button>
              </div>
            ) : (
              <form onSubmit={form.handleSubmit((d) => contactMutation.mutate(d))} className="space-y-4">
                
                {cooldownRemaining > 0 && (
                  <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 font-mono flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>Rate limit active: Next message in {formatCooldown(cooldownRemaining)}</span>
                  </div>
                )}

                <div className="space-y-1">
                  <label className="text-xs font-mono text-zinc-400">Name</label>
                  <Input
                    {...form.register("name")}
                    placeholder="Your name"
                    className="bg-black border-zinc-800 rounded-lg text-xs text-white placeholder:text-zinc-600"
                  />
                  {form.formState.errors.name && (
                    <span className="text-[11px] text-red-400 font-mono">
                      {form.formState.errors.name.message}
                    </span>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-zinc-400">Email</label>
                  <Input
                    {...form.register("email")}
                    type="email"
                    placeholder="your@email.com"
                    className="bg-black border-zinc-800 rounded-lg text-xs text-white placeholder:text-zinc-600"
                  />
                  {form.formState.errors.email && (
                    <span className="text-[11px] text-red-400 font-mono">
                      {form.formState.errors.email.message}
                    </span>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-zinc-400">Subject</label>
                  <Input
                    {...form.register("subject")}
                    placeholder="Regarding Kletaq / Project"
                    className="bg-black border-zinc-800 rounded-lg text-xs text-white placeholder:text-zinc-600"
                  />
                  {form.formState.errors.subject && (
                    <span className="text-[11px] text-red-400 font-mono">
                      {form.formState.errors.subject.message}
                    </span>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-zinc-400">Message</label>
                  <Textarea
                    {...form.register("message")}
                    rows={4}
                    placeholder="Your note..."
                    className="bg-black border-zinc-800 rounded-lg text-xs text-white placeholder:text-zinc-600 resize-none"
                  />
                  {form.formState.errors.message && (
                    <span className="text-[11px] text-red-400 font-mono">
                      {form.formState.errors.message.message}
                    </span>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={contactMutation.isPending || cooldownRemaining > 0}
                  className="w-full bg-white text-black hover:bg-zinc-200 text-xs font-medium py-5 rounded-lg transition-colors disabled:opacity-50"
                >
                  {contactMutation.isPending
                    ? "Sending..."
                    : cooldownRemaining > 0
                    ? `Cooldown (${formatCooldown(cooldownRemaining)})`
                    : "Send Message"}
                </Button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
