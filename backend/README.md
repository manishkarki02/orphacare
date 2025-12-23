# OrphaCare Backend

This is the backend API for the OrphaCare application, built with Node.js, Express, TypeScript, and PostgreSQL (via Prisma).

## Prerequisites

- **Node.js** (v18 or higher)
- **pnpm** (preferred package manager)
- **PostgreSQL** database running locally or continuously.

## Installation

1. Clone the repository and navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

## Configuration

1. Copy the sample environment file:
   ```bash
   cp .env.sample .env
   ```

2. Open `.env` and configure the following variables:
   - `PORT`: Server port (default: 8000)
   - `DATABASE_URL`: Your PostgreSQL connection string
   - `JWT_SECRET`: Secret key for JWT tokens
   - `CORS_ORIGIN`: Frontend URL (e.g., http://localhost:5173)

## Database Setup

1. Generate Prisma client:
   ```bash
   pnpm prisma:generate
   ```

2. Run database migrations:
   ```bash
   pnpm prisma:migrate
   ```

## Running the Application

- **Development Mode** (with hot reload):
  ```bash
  pnpm dev
  ```

- **Production Build**:
  ```bash
  pnpm build
  pnpm start
  ```

## API Documentation

Once the server is running, you can access the Swagger API documentation at:

```
http://localhost:8000/api-docs
```

## Folder Structure

- `src/common`: Shared utilities, middlewares, and types.
- `src/config`: Configuration files (Env, Swagger, Multer).
- `src/features`: Feature-based modules (Auth, Adoption, Donation, Reports, Volunteers).
- `src/generated`: Generated artifacts (Prisma).
