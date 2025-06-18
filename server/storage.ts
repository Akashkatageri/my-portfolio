import { users, contactMessages, projects, type User, type InsertUser, type ContactMessage, type InsertContactMessage, type Project, type InsertProject } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getProjects(): Promise<Project[]>;
  getFeaturedProjects(): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactMessages: Map<number, ContactMessage>;
  private projects: Map<number, Project>;
  private currentUserId: number;
  private currentMessageId: number;
  private currentProjectId: number;

  constructor() {
    this.users = new Map();
    this.contactMessages = new Map();
    this.projects = new Map();
    this.currentUserId = 1;
    this.currentMessageId = 1;
    this.currentProjectId = 1;
    
    // Initialize with sample projects
    this.initializeProjects();
  }

  private initializeProjects() {
    const sampleProjects: InsertProject[] = [
      {
        title: "E-commerce Platform",
        description: "A full-stack e-commerce solution built with React, Node.js, and Stripe integration for seamless payments.",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/example/ecommerce",
        featured: "true"
      },
      {
        title: "Task Management App",
        description: "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/example/taskmanager",
        featured: "true"
      },
      {
        title: "Weather Forecast App",
        description: "A beautiful weather application with location-based forecasts, interactive maps, and personalized weather alerts.",
        image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        technologies: ["React Native", "TypeScript", "API Integration", "Geolocation"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/example/weather",
        featured: "true"
      },
      {
        title: "Analytics Dashboard",
        description: "A comprehensive analytics dashboard with interactive charts, real-time data visualization, and detailed reporting features.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        technologies: ["React", "D3.js", "Python", "Redis"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/example/analytics",
        featured: "true"
      },
      {
        title: "Fitness Tracking App",
        description: "A mobile fitness application with workout plans, progress tracking, social features, and integration with wearable devices.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        technologies: ["Flutter", "Firebase", "ML Kit", "HealthKit"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/example/fitness",
        featured: "true"
      },
      {
        title: "Crypto Portfolio Tracker",
        description: "A real-time cryptocurrency portfolio tracker with advanced charting, price alerts, and portfolio analysis tools.",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        technologies: ["Next.js", "Chart.js", "WebSocket", "Crypto APIs"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/example/crypto",
        featured: "true"
      }
    ];

    sampleProjects.forEach(project => {
      this.createProject(project);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentMessageId++;
    const message: ContactMessage = {
      ...insertMessage,
      id,
      createdAt: new Date(),
    };
    this.contactMessages.set(id, message);
    return message;
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async getFeaturedProjects(): Promise<Project[]> {
    return Array.from(this.projects.values()).filter(
      (project) => project.featured === "true"
    );
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = this.currentProjectId++;
    const project: Project = { ...insertProject, id };
    this.projects.set(id, project);
    return project;
  }
}

export const storage = new MemStorage();
