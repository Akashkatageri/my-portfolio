// client/src/data/projects.ts

// 1. IMPORT STATEMENT MUST BE AT THE TOP
import type { Project } from "@shared/schema";

// 2. EXPORT THE CONSTANT ONCE, DEFINING THE ARRAY CONTENTS
export const projectsData: Project[] = [
  // --- NEW PROJECT: MongoDB JSON Stream Importer ---
  {
    id: "mongodb-json-importer",
    title: "MongoDB JSON Stream Importer",
    description: "A high-performance Python utility for memory-efficiently streaming and bulk-inserting multi-gigabyte JSON files into MongoDB. Features include ijson parsing, optimized pymongo writes, and automatic resume capability for handling massive data imports.",
    image: "/images/project-placeholders/data-importer.jpg", // Ensure you add this image file
    technologies: ["Python", "MongoDB", "JSON", "Data Streaming"],
    featured: "true", 
    liveUrl: "", 
    githubUrl: "https://github.com/Akashkatageri/mongodb-json-stream-importer",
  },
  
  // All previous projects have been removed from this array.
];
