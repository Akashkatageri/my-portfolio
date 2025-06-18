import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all projects
  app.get("/api/projects", async (req, res) => {
    try {
      const projects = await storage.getProjects();
      res.json(projects);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch projects" });
    }
  });

  // Get featured projects
  app.get("/api/projects/featured", async (req, res) => {
    try {
      const projects = await storage.getFeaturedProjects();
      res.json(projects);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch featured projects" });
    }
  });

  // Submit contact form
  app.post("/api/contact", async (req, res) => {
    try {
      const validation = insertContactMessageSchema.safeParse(req.body);
      
      if (!validation.success) {
        return res.status(400).json({ 
          message: "Invalid form data",
          errors: validation.error.flatten().fieldErrors
        });
      }

      const message = await storage.createContactMessage(validation.data);
      
      // Here you would typically send an email notification
      // For now, we'll just log it and return success
      console.log("New contact message:", message);
      
      res.json({ 
        message: "Thank you for your message! I will get back to you soon.",
        success: true 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ message: "Failed to send message. Please try again." });
    }
  });

  // Download resume endpoint
  app.get("/api/resume/download", async (req, res) => {
    try {
      // For now, just return a placeholder response
      // In a real app, you would serve an actual PDF file
      res.json({ 
        message: "Resume download would be triggered here",
        url: "/resume.pdf"
      });
    } catch (error) {
      res.status(500).json({ message: "Failed to download resume" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
