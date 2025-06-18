# Portfolio Website

## Overview

This is a professional portfolio website for John Smith, a Full Stack Developer. The application is built as a modern web application using React for the frontend and Express.js for the backend, with a focus on showcasing projects, skills, and providing a contact form for potential clients or employers.

## System Architecture

The application follows a full-stack architecture with clear separation between frontend and backend concerns:

- **Frontend**: React-based SPA with modern UI components
- **Backend**: Express.js REST API server
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with shadcn/ui components
- **Build System**: Vite for frontend bundling and development
- **Deployment**: Configured for Replit with autoscale deployment

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **Forms**: React Hook Form with Zod validation
- **Icons**: Font Awesome for iconography

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon serverless)
- **Session Management**: Express sessions with PostgreSQL storage
- **API Design**: RESTful endpoints for projects and contact messages

### Database Schema
The application uses three main database tables:
- **users**: User authentication (username, password)
- **contact_messages**: Contact form submissions with timestamps
- **projects**: Portfolio projects with metadata (title, description, technologies, URLs, featured status)

### UI Components
The application uses a comprehensive set of UI components from shadcn/ui including:
- Form components (Input, Textarea, Button, etc.)
- Layout components (Card, Sheet, Dialog, etc.)
- Navigation components (Navigation Menu, Breadcrumb, etc.)
- Feedback components (Toast, Alert, Progress, etc.)

## Data Flow

1. **Project Display**: Frontend fetches project data from `/api/projects` and `/api/projects/featured` endpoints
2. **Contact Form**: Form submissions are validated client-side with Zod, then sent to `/api/contact` endpoint
3. **Error Handling**: Comprehensive error handling with user-friendly toast notifications
4. **Loading States**: Loading indicators for all async operations

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **@tanstack/react-query**: Server state management
- **@hookform/resolvers**: Form validation integration
- **drizzle-orm**: Type-safe database ORM
- **drizzle-zod**: Schema validation integration

### UI Dependencies
- **@radix-ui/***: Unstyled, accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **clsx**: Conditional className utility

### Development Dependencies
- **vite**: Frontend build tool and dev server
- **tsx**: TypeScript execution for development
- **esbuild**: Backend bundling for production

## Deployment Strategy

The application is configured for deployment on Replit with the following setup:

- **Development**: `npm run dev` runs both frontend (Vite) and backend (tsx) in development mode
- **Build**: `npm run build` creates optimized frontend bundle and backend build
- **Production**: `npm run start` runs the production server
- **Database**: Uses PostgreSQL module in Replit environment
- **Port Configuration**: Backend runs on port 5000, exposed as port 80

### Environment Configuration
- **NODE_ENV**: Controls development/production behavior
- **DATABASE_URL**: PostgreSQL connection string (required)
- **Build Process**: Frontend assets are built to `dist/public`, backend to `dist/index.js`

## Deployment Strategy

The application supports two deployment modes:

### Full-Stack Deployment (Replit)
- **Development**: `npm run dev` runs both frontend (Vite) and backend (tsx) in development mode
- **Build**: `npm run build` creates optimized frontend bundle and backend build
- **Production**: `npm run start` runs the production server
- **Database**: Uses PostgreSQL module in Replit environment
- **Port Configuration**: Backend runs on port 5000, exposed as port 80

### Static Deployment (GitHub Pages)
- **Configuration**: `vite.static.config.ts` for static build
- **GitHub Actions**: Automated deployment workflow in `.github/workflows/deploy.yml`
- **Custom Domain**: Configured via `public/CNAME` file
- **DNS Setup**: A records pointing to GitHub Pages IPs
- **SSL**: Automatic HTTPS via GitHub Pages
- **Data**: Uses embedded project data instead of API calls

### Environment Configuration
- **NODE_ENV**: Controls development/production behavior
- **DATABASE_URL**: PostgreSQL connection string (required for full-stack)
- **Build Process**: Frontend assets are built to `dist/public`, backend to `dist/index.js`

## Changelog

Changelog:
- June 18, 2025. Initial setup - Created complete portfolio website with navigation, hero, about, skills, projects, contact, and footer sections
- June 18, 2025. Updated social media links - Replaced blog link with Instagram and added email contact across all sections (hero, contact, footer)
- June 18, 2025. GitHub Pages deployment - Added static build configuration, GitHub Actions workflow, custom domain setup, and deployment documentation

## User Preferences

Preferred communication style: Simple, everyday language.