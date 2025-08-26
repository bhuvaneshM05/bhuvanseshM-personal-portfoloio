# Overview

This is a full-stack web application built as a personal portfolio website for Bhuvanesh, a Computer Science student. The project showcases his education, skills, experience, and contact information through a modern, responsive single-page application. The architecture follows a monorepo structure with separate client and server directories, built using React for the frontend and Express.js for the backend, with PostgreSQL database support via Drizzle ORM.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: React Router DOM for client-side navigation with a simple route structure (Index page and 404 handler)
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, modern UI components
- **State Management**: TanStack React Query for server state management and caching
- **UI Components**: Comprehensive shadcn/ui component system with Radix UI primitives for accessibility
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Framework**: Express.js server with TypeScript for API endpoints
- **Database ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Storage Layer**: Abstracted storage interface with in-memory implementation for development and production-ready database integration
- **Development Setup**: Custom Vite integration for full-stack development with HMR support
- **Request Logging**: Built-in request/response logging middleware for API monitoring

## Data Storage Solutions
- **Database**: PostgreSQL as the primary database (configured via Drizzle)
- **ORM**: Drizzle ORM for schema definition and database queries
- **Migrations**: Drizzle Kit for database schema migrations and management
- **Development Storage**: In-memory storage implementation for local development
- **Schema**: User management system with username/password authentication structure

## Authentication and Authorization
- **User Schema**: Basic user model with username and password fields
- **Validation**: Zod schema validation integrated with Drizzle for type-safe data validation
- **Session Management**: Infrastructure in place for PostgreSQL-based session storage using connect-pg-simple

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL database (@neondatabase/serverless) for cloud-hosted database solution
- **PostgreSQL**: Primary database system with connection pooling and transaction support

## UI and Component Libraries
- **Radix UI**: Complete set of accessible, unstyled UI primitives for building the component system
- **shadcn/ui**: Pre-built component library with consistent design system
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **Lucide React**: Icon library for consistent iconography throughout the application

## Development and Build Tools
- **Vite**: Modern build tool with fast HMR and optimized bundling
- **TypeScript**: Static type checking for both frontend and backend code
- **ESBuild**: Fast JavaScript bundler for server-side code compilation
- **Replit Integration**: Development environment integration with cartographer and runtime error handling

## Runtime Dependencies
- **TanStack React Query**: Server state management and caching for API calls
- **React Hook Form**: Form state management with validation
- **Date-fns**: Date manipulation and formatting utilities
- **Class Variance Authority**: Utility for managing CSS class variants in components