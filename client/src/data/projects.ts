import type { Project } from "@shared/schema";

export const projectsData: Project[] = [
  {
    id: 1,
    title: "MongoDB JSON Stream Importer",
    description: "A high-performance Python utility for memory-efficiently streaming and bulk-inserting multi-gigabyte JSON files into MongoDB. Features include ijson parsing, optimized pymongo writes, and automatic resume capability for handling massive data imports.",
    image: "/client/src/mongodb-importer-flow.png",
    technologies: ["Python", "MongoDB", "JSON", "Data Streaming", "PyMongo"],
    featured: "true", 
    liveUrl: null, 
    githubUrl: "https://github.com/Akashkatageri/mongodb-json-stream-importer",
  },
  {
    id: 2,
    title: "Python Network Recon & Vulnerability Scanner",
    description: "A multithreaded network scanning script built with Python & Socket programming to detect open ports, service banners, and potential misconfigurations across target IPs.",
    image: "",
    technologies: ["Python", "Sockets", "Network Recon", "Linux", "Threading"],
    featured: "true",
    liveUrl: null,
    githubUrl: "https://github.com/Akashkatageri",
  },
  {
    id: 3,
    title: "Web Security & CTF Labs Environment",
    description: "A collection of solved security challenges, writeups, and payload POCs demonstrating SQL injection, XSS analysis, and authentication bypass techniques.",
    image: "",
    technologies: ["Burp Suite", "Web Security", "OWASP", "CTF Writeups"],
    featured: "true",
    liveUrl: null,
    githubUrl: "https://github.com/Akashkatageri",
  }
];
