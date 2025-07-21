# Mercury Valves - Industrial Web Application

## Overview

Mercury Valves is a full-stack web application for A.N.D Valves and Castings Pvt. Ltd., a leading manufacturer of industrial valves, pipes, and fittings. The application serves as a comprehensive business website featuring product catalogs, client showcases, and company information.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack Query (React Query) for server state management
- **Styling**: Tailwind CSS with custom Mercury Valves color scheme
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Pattern**: RESTful API with JSON responses
- **Session Management**: PostgreSQL-based session storage with connect-pg-simple

### Project Structure
```
├── client/           # React frontend application
├── server/           # Express.js backend
├── shared/           # Shared TypeScript types and schemas
├── migrations/       # Database migration files
└── dist/            # Production build output
```

## Key Components

### Database Schema
- **Users**: Authentication and user management
- **Products**: Industrial valve and pipe product catalog
- **Clients**: Customer/client information and testimonials
- **Schema Validation**: Drizzle-Zod integration for type-safe database operations

### API Endpoints
- `GET /api/products` - Retrieve all products
- `GET /api/products/:id` - Get product by ID
- `GET /api/products/slug/:slug` - Get product by URL slug
- `GET /api/clients` - Retrieve all clients
- Additional CRUD operations for product and client management

### Frontend Pages
- **Home**: Hero section, about preview, featured products, and contact form
- **Products**: Searchable and filterable product catalog
- **About**: Company history, mission, and team information
- **Clients**: Customer testimonials and client showcase
- **Infrastructure**: Infrastructure development services and project showcase
- **Revathika Groups**: Business conglomerate information and partnership details
- **Contact**: Contact form and company information

### UI Components
- **Product Cards**: Responsive product display with hover effects
- **Client Cards**: Customer information display with industry icons
- **Navigation**: Responsive navbar with active state indicators
- **Form Components**: Contact forms with validation and toast notifications

## Data Flow

1. **Client Request**: Browser makes HTTP request to Express server
2. **API Layer**: Express routes handle requests and interact with storage layer
3. **Storage Layer**: Abstracted storage interface (currently in-memory, designed for PostgreSQL)
4. **Database Operations**: Drizzle ORM manages database queries and migrations
5. **Response**: JSON data returned to client and cached by React Query
6. **UI Updates**: React components re-render with new data

## External Dependencies

### Core Technologies
- **Database**: Neon Database (serverless PostgreSQL)
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **UI Library**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React for consistent iconography

### Development Tools
- **Build**: Vite with React plugin and TypeScript support
- **Linting**: TypeScript compiler for type checking
- **Development**: Hot module replacement and error overlay
- **Production**: ESBuild for server bundling

## Deployment Strategy

### Development
- **Dev Server**: Vite development server with HMR
- **API Server**: Express server with hot reload via tsx
- **Database**: Development database with push migrations

### Production
- **Build Process**: 
  1. Vite builds optimized client bundle
  2. ESBuild bundles server code for Node.js
  3. Static assets served from Express
- **Database**: Production PostgreSQL with proper migrations
- **Environment**: NODE_ENV=production with optimized settings

### Configuration
- **Environment Variables**: DATABASE_URL for database connection
- **Build Commands**: Separate build process for client and server
- **Static Serving**: Express serves built client files in production

## Changelog

Changelog:
- July 03, 2025: Initial setup with Mercury Valves website content
- July 03, 2025: Added Infrastructure and Revathika Groups navigation sections between Clients and Contact
- July 03, 2025: Updated Products and Infrastructure pages to exactly match original Mercury Valves website content with authentic images and text
- July 03, 2025: Successfully integrated authentic Mercury Valves content for butterfly valve subcategories:
  - Fetched real content from mercuryvalves.in including images, parts & materials, technical drawings
  - Added Wafer (DI/CI), Concentric Flanged, and Double Eccentric Flanged product details
  - Integrated dimension PDF viewers matching original website functionality
  - Fixed all React duplicate key warnings and TypeScript errors
  - Product detail pages now display authentic technical specifications, drawings, and dimension tables
- July 03, 2025: Expanded product catalog with complete Mercury Valves content integration:
  - Added 6 major product categories: HDPE Pipes & Fittings, Galvanized Iron Pipes & Fittings, House Service Connection, Manhole Cover, Ductile Iron Grating, UPVC Agriculture Pipes
  - Integrated comprehensive product data including specifications, features, applications tables, fitting images, pipe sizes, and dimension PDFs
  - Enhanced product detail UI with specialized components for displaying fittings galleries, technical specifications, and dimension tables
  - Fixed TypeScript interface definitions to support all new product data structures
  - Maintained authentic Mercury Valves branding and content structure throughout integration
- July 04, 2025: Completed Gun Metal Valves and SS Valves integration:
  - Fetched authentic content from Mercury Valves website for Gun Metal Valves (6 products) and SS Valves (3 products)
  - Added complete product specifications including GM Ball Valve, GM Gate Valve, GM Globe Valve, Pressure Reducing Check Valve, Horizontal Check Valve, and Vertical Check Valve
  - Integrated SS Ball Valve, CP Ball Valve, and Cast Iron Ball Valve Screwed with authentic images and technical drawings
  - All products include authentic specifications: size ranges (15mm to 100mm), materials (Gun metal & Iron, SS valve & Iron), and home applications
  - Added routing support for all new product URLs with proper slug-based navigation
  - Fixed workflow restart issue and ensured all TypeScript errors are resolved
- July 04, 2025: Successfully integrated M.S Pipes & Fittings and Water Meter categories:
  - Fetched authentic content from Mercury Valves website for all 8 M.S Pipes & Fittings subcategories and 6 Water Meter subcategories
  - Added comprehensive M.S Pipes & Fittings: Square, Round, Rectangle, Round Bar, TMT Bar, Flat Bar, Angle, and M.S Fittings with authentic images, conversion tables, and dimension PDFs
  - Integrated complete Water Meter range: Multi Jet Magnetic Drive, Single Jet Magnetic Drive, Horizontal Woltman, Electro Magnetic Flow, AMR, and Ultrasonic with technical specifications, performance data, and flow error curves
  - All products include authentic specifications, features, technical drawings, and dimension PDFs from mercuryvalves.in
  - Added 14 new products (8 M.S + 6 Water Meter) to product catalog with proper routing and navigation
  - Enhanced product detail pages with specialized components for displaying fitting galleries, technical specifications, and embedded PDF viewers
  - Maintained authentic Mercury Valves branding and content structure throughout integration
- July 04, 2025: Completed authentic content integration for Butterfly Valve, Air Valve, Foot Valve, and Strainer Valve categories:
  - Fetched authentic content from mercuryvalves.in for Double Eccentric Flanged butterfly valve, 6 Air Valve subcategories, 2 Foot Valve subcategories, and 2 Strainer Valve subcategories  
  - Updated existing product entries with authentic images and specifications from Mercury Valves website
  - Integrated complete parts & materials tables, technical drawings, and dimension PDFs for all valve types
  - Air Valve products: Single Chamber Flanged, Single Chamber Screwed, Single Chamber Ball Type, Double Chamber, H40 Isolating, Double Kinetic
  - Foot Valve products: Ball Type Flanged, Ball Type Screwed with authentic materials and specifications
  - Strainer Valve products: Y-Type Flanged & Screwed, Basket Type with proper filtration specifications
  - Fixed routing conflicts and ensured all product pages display authentic Mercury Valves content
  - All valve categories now have complete technical documentation matching the original Mercury Valves website
- July 04, 2025: Successfully completed comprehensive Gate Valve, Check Valve, and Control Valve integration:
  - Fetched authentic content from mercuryvalves.in for complete Gate Valve and Check Valve categories
  - Added 5 Gate Valve subcategories: Rising Stern Seated, Non Rising Stern Seated, Metal Seated, Actuator Type, CI Sluice Valve
  - Integrated 8 Check Valve subcategories: Single Wafer, Dual Plate Wafer, Dual Plate Flanged, Swing, Swing With Rubber Disc, Ball, NRV Reflux Valve, Tilting Disc
  - Added 4 Control Valve categories: Float Control Valve, Flow Control Valve, Pressure Relief Valve, Pressure Reducing Valve
  - All products include authentic parts & materials tables, technical drawings, and dimension PDFs from Mercury Valves website
  - Enhanced product detail pages with comprehensive specifications matching original website structure
  - Total of 17 new valve products integrated with complete authentic technical documentation
  - Fixed all product routing and navigation for seamless user experience
- July 04, 2025: Fixed routing issues and cleaned up duplicate products:
  - Updated Double Eccentric Flanged with authentic content from Mercury Valves website including parts & materials table, technical drawings, and dimension PDF
  - Integrated Gun Metal Valves and SS Valves into main "Gun Metal Valves & SS Valves" category with proper subcategory routing
  - Removed duplicate M.S Pipes & Fittings and Water Meter entries with generic images, keeping only authentic products
  - Fixed product filtering logic to handle category, subcategory, and parent-child relationships properly
  - Removed standalone "Gun Metal Valves" and "SS Valves" categories, consolidating them under main category
  - Enhanced dropdown navigation to route directly to specific subcategory products instead of showing "no products found"
  - Resolved TypeScript errors in product filtering and ensured proper routing for all DI, CI Valves subcategories

## User Preferences

Preferred communication style: Simple, everyday language.