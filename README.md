# Personal Portfolio (Next.js)

## 🚀 Features

- **Next.js**: A powerful React framework for server-side rendering and static site generation.
- **TypeScript**: Ensures type safety and scalability in the codebase.
- **Chakra UI**: A modular and accessible component library for a modern UI.
- **Firebase Integration**: Used for backend and data storage.
- **Linting and Formatting**: Enforced with ESLint and Prettier.

---

## 📂 Project Structure

The project has the following structure:

```plaintext
.
├── .next/                  # Next.js build directory
├── node_modules/           # Node.js modules
├── public/                 # Public assets (images, static files, etc.)
├── src/
│   ├── app/                # Next.js App Router
│   ├── components/         # Reusable React components
│   │   ├── custom/         # Custom UI components (e.g., cards, layouts, gallery)
│   │   └── ui/             # Basic UI components
│   ├── interfaces/         # TypeScript interfaces and types
│   ├── recipes/            # Recipes or data for components
│   ├── utils/              # Utility functions and helpers
│   ├── provider.tsx        # Context providers for global state
│   └── theme.js            # Theme configuration for Chakra UI
├── .env.local              # Environment variables
├── .eslintrc.json          # ESLint configuration
├── .prettierrc             # Prettier configuration
├── jest.config.ts          # Jest configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Project metadata and scripts
└── README.md               # Documentation file
```

---

## 🛠️ Installation and Setup

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS recommended)
- [Yarn](https://yarnpkg.com/) or npm

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/ErnestaP/personal-portfolio-next-js.git
   cd personal-portfolio-next-js
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:3000
   ```

---

## 📜 Available Scripts

- `dev`: Start the development server.
- `build`: Build the application for production.
- `start`: Start the production server.
- `lint`: Lint the codebase with ESLint.
- `format`: Format the code with Prettier.
- `test`: Run tests with Jest.

## 🎨 Styling

The project uses **Chakra UI** for styling, with a custom theme configured in `src/theme.js`. This includes custom colors, typography, and dark mode support.

---

## 🖥️ Deployment

The project is production-ready and can be deployed using platforms like [Vercel](https://vercel.com/) (recommended for Next.js projects).

1. Build the application:

   ```bash
   npm run build
   ```

2. Deploy the `.next` build directory to your hosting provider.
