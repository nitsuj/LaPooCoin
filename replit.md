# LaPooPoo Token - Meme Coin Landing Page

## Overview

This is a full-stack web application for LaPooPoo Token, a humorous meme cryptocurrency project. The application features a modern, responsive landing page showcasing the token's branding, statistics, and community engagement features. Built with React on the frontend and Express.js on the backend, it provides a professional yet playful presentation for the meme coin.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The client-side application is built using **React 18** with **TypeScript** for type safety. The frontend follows a component-based architecture using:

- **Vite** as the build tool and development server for fast hot module replacement
- **Wouter** for lightweight client-side routing instead of React Router
- **TanStack Query (React Query)** for server state management and caching
- **Tailwind CSS** with **shadcn/ui** components for consistent, modern styling
- **Radix UI** primitives for accessible, unstyled UI components

The styling system uses a dark theme with custom CSS variables for the LaPooPoo brand colors (browns, golds, oranges). The component library includes comprehensive UI elements like buttons, cards, dialogs, and form controls.

### Backend Architecture
The server uses **Express.js** with TypeScript in ESM format. Key architectural decisions include:

- **Modular route organization** with a centralized route registration system
- **Middleware-based request logging** that captures API performance metrics
- **Storage abstraction layer** using interfaces to allow switching between different storage implementations
- **In-memory storage** as the default implementation with easy migration path to database storage
- **Development-focused error handling** with detailed error responses

### Build and Development System
The project uses a **monorepo structure** with shared code between client and server:

- **Shared schema definitions** using Drizzle ORM with Zod validation
- **TypeScript path mapping** for clean imports across the application
- **Vite integration** with Express for seamless development experience
- **ESBuild** for production server bundling with external package handling

### Database Design
The application is configured for **PostgreSQL** with **Drizzle ORM**:

- **Users table** with UUID primary keys, unique usernames, and password fields
- **Type-safe schema definitions** using Drizzle's TypeScript integration
- **Zod validation schemas** generated from database schema for runtime validation
- **Migration system** configured for database schema evolution

The storage layer uses an interface-based approach allowing easy switching from the current in-memory implementation to the configured PostgreSQL database.

## External Dependencies

### Database and ORM
- **Neon Database** (@neondatabase/serverless) - Serverless PostgreSQL database
- **Drizzle ORM** (drizzle-orm) - Type-safe database operations and migrations
- **Drizzle Zod** (drizzle-zod) - Runtime validation from database schema

### UI and Styling
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible, unstyled UI component primitives
- **shadcn/ui** - Pre-built component library built on Radix UI
- **Lucide React** - Icon library for consistent iconography
- **class-variance-authority** - Type-safe CSS class generation

### Development and Build Tools
- **Vite** - Fast build tool and development server
- **TypeScript** - Static type checking
- **ESBuild** - Fast JavaScript bundler for production
- **PostCSS** with **Autoprefixer** - CSS processing pipeline

### React Ecosystem
- **React Hook Form** - Form state management and validation
- **TanStack React Query** - Server state management
- **Wouter** - Lightweight routing library
- **React Day Picker** - Date selection components

### Session and State Management
- **connect-pg-simple** - PostgreSQL session store for Express sessions

The application is designed to be easily deployable on platforms like Replit, with environment-based configuration and database URL management through environment variables.