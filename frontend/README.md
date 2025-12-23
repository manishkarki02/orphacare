# OrphaCare Frontend

This is the frontend for the OrphaCare application, built with React, Vite, TypeScript, and Tailwind CSS.

## Prerequisites

- **Node.js** (v18 or higher)
- **pnpm** (preferred package manager)

## Installation

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

## Configuration

1. Create a `.env` file in the `frontend` directory (if not present) and add your backend API URL and other configs:
   ```env
   VITE_API_URL=http://localhost:8000/api
   ```

## Running the Application

- **Development Mode**:
  ```bash
  pnpm dev
  ```
  The app will typically run at `http://localhost:5173`.

- **Build for Production**:
  ```bash
  pnpm build
  ```

- **Preview Production Build**:
  ```bash
  pnpm preview
  ```

## Key Technologies

- **Vite**: Build tool and dev server.
- **TanStack Router**: File-based routing.
- **Zustand**: State management.
- **Shadcn UI / Radix primitives**: UI components.
- **Tailwind CSS**: Styling.
