# Droply

Droply is a simple file storage application inspired by Dropbox, built with Next.js, Clerk authentication, Neon PostgreSQL, Drizzle ORM, and ImageKit for file storage.

## Features

- User authentication with Clerk
- Upload, view, and manage files and folders
- Star, trash, and permanently delete files
- Responsive dashboard UI with HeroUI components
- ImageKit integration for file storage
- PostgreSQL database with Drizzle ORM

## Getting Started

### Prerequisites

- Node.js 18+
- Clerk account (for authentication)
- Neon PostgreSQL database
- ImageKit account (for file storage)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/droply.git
   cd droply
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables:**
   - Copy `.env.sample` to `.env` and fill in the required values for Clerk, Neon, and ImageKit.

4. **Set up the database:**
   ```bash
   npm run db:generate
   npm run db:push
   ```

5. **Run the development server:**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

- `app/` - Next.js app directory (pages, layouts, API routes)
- `components/` - Reusable UI components
- `schemas/` - Drizzle ORM database schemas
- `lib/` - Utility libraries and helpers
- `config/` - Configuration files
- `public/` - Static assets

## Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm start` - Start the production server
- `npm run db:generate` - Generate Drizzle ORM types
- `npm run db:push` - Push schema changes to the database

## Deployment

Deploy easily on [Vercel](https://vercel.com/) or your preferred platform. See [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

This project is licensed under the MIT License.
