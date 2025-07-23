# Express Server Boilerplate

This project is a boilerplate for building RESTful APIs using Express.js and TypeScript. It provides a clean structure, essential middleware, authentication, file uploading, and utility functions to help you get started quickly.

## Features

- Express.js server setup
- TypeScript support
- JWT authentication middleware
- Cloudinary integration for file uploads
- Centralized error handling
- Modular route and model structure
- Utility functions for common tasks
- Plop generators for scaffolding code

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- pnpm (or npm/yarn)

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd server-express
   ```
2. Install dependencies:
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```
3. Copy the environment template and configure your variables:
   ```bash
   cp template.env .env
   # Edit .env with your credentials
   ```

### Running the Server

```bash
pnpm start
# or
npm start
# or
yarn start
```

### Development Mode

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

## Project Structure

```
src/
  app.ts                # Express app setup
  index.ts              # Server entry point
  config/               # Configuration files (Cloudinary, etc.)
  db/                   # Database connection
  error-handling/       # Error handling middleware
  middleware/           # Custom middleware (JWT, etc.)
  models/               # Mongoose models
  routes/               # API route definitions
  types/                # TypeScript types
  utils/                # Utility functions
```


## Scripts

- `pnpm serve` — Run the server
- `pnpm dev` — Run in development mode (with hot reload)
- `pnpm plop` — Run Plop generators for scaffolding (e.g., create new routes, models, etc.)

## Plop Generators

Plop is used to quickly scaffold new files (routes, models, etc.) with consistent structure.

To use Plop:

```bash
pnpm plop
# or
npx plop
```

Follow the prompts to generate new code components.

## Environment Variables

See `template.env` for required variables (e.g., JWT secret, Cloudinary credentials).

## License

MIT

## Author

[Julien Sebag](https://julien-sebag.com)
