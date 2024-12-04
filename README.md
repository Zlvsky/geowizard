# Geowizard frontend demo

## How to Run Locally

To run the project locally, follow these steps:

1. Clone the repository:

   ```sh
   git clone git@github.com:Zlvsky/geowizard.git
   cd geowizard-frontend
   ```

2. Install pnpm globally (if not already installed):

   ```sh
   npm install -g pnpm
   ```

3. Install dependencies:

   ```sh
   pnpm i
   ```

4. Start the development server:

   ```sh
   pnpm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`.

## How to Run Using Docker

To run the project using Docker, follow these steps:

1. Build the Docker image:

   ```sh
   pnpm run docker:build
   ```

2. Run the Docker container:

   ```sh
   pnpm run docker:run
   ```

3. Open your browser and navigate to `http://localhost`.

## How to Run E2E Tests

To run end-to-end tests using Cypress, follow these steps:

1. Open Cypress test runner:

   ```sh
   pnpm run cypress:open
   ```

2. Choose E2E Testing:

3. Choose Chrome

4. Enter wizard.cy.js e2e test

## Technologies and Libraries Used

This project uses the following technologies and libraries:

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Vite**: A fast build tool for modern web projects.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Radix UI**: A set of accessible and customizable UI components.
- **React Query**: A library for fetching, caching, and updating asynchronous data in React.
- **Cypress**: A JavaScript end-to-end testing framework.
- **Husky**: A tool for managing Git hooks.
- **Prettier**: An opinionated code formatter.
- **ESLint**: A pluggable linting utility for JavaScript and TypeScript.
- **Docker**: A platform for developing, shipping, and running applications in containers.
- **Nginx**: A high-performance web server used as a reverse proxy and load balancer.
- **Framer Motion**: A library for animations in React.
- **OpenLayers**: A high-performance library for rendering maps.
- **Zod**: A TypeScript-first schema declaration and validation library.
- **React Hook Form**: A library for managing form state in React.
- **React Quill**: A rich text editor component for React.

For a complete list of dependencies, refer to the [package.json](package.json) file.
