# Next.js TypeScript Template

This is a template repository for kickstarting Next.js applications with TypeScript. It provides a structured setup to accelerate development and maintainability.

## Features

- **Next.js**: Utilize the power of Next.js for server-side rendering, static site generation, and more.
- **TypeScript**: Enjoy the benefits of static typing with TypeScript.
- **Styling**: Supports zero runtime CSS-in-js with [panda-css](https://panda-css.com/).
- **Testing**: Working setup for running unit tests with jest and playwright for e2e tests.
- **Pre-configured**: Comes with pre-configured settings for TypeScript, Github Actions, ESLint, Prettier, and Husky.
- **Routing**: Easy-to-use routing with Next.js's built-in routing system.
- **API Routes**: Create API endpoints with ease using Next.js API routes.
- **Environment Variables**: Support for environment variables management.
- **Code Quality**: Maintain code quality with linting and formatting tools.
- **Deployment**: Simple deployment to Vercel or any other hosting provider.

## Getting Started

To get started with this template, simply click on "Use this template" to create a new repository based on this template. Alternatively, you can clone this repository locally:

```bash
# yarn
yarn create next-app -e https://github.com/nickrosendo/nexjs14-ts-dev-setup-template
# npm
npx create-next-app -e https://github.com/nickrosendo/nexjs14-ts-dev-setup-template
# pnpm
pnpm create next-app -e https://github.com/nickrosendo/nexjs14-ts-dev-setup-template

```

## Once cloned, navigate to the project directory and install dependencies:

```bash
cd nexjs14-ts-dev-setup-template
npm install
# or
yarn install
```

## After installing dependencies, you can start the development server:

```bash
npm run dev
# or
yarn dev
```

This will start the development server at http://localhost:3000.

## Commands

    dev: Start the development server.
    build: Build the application for production.
    test:all: Run all tests (unit and e2e).
    test:e2e: Run e2e tests with playwright.
    test: Run unit tests.
    test:coverage: Run unit tests showing their coverage.
    start: Start the production server.
    lint: Lint TypeScript files.
    lint:fix: Lint TypeScript files and attempt to fix linting errors.
    format: Format TypeScript files using Prettier.
    format-check: Check TypeScript files using Prettier.
    standardize:  Run lint validations and formatting using Prettier.

Feel free to customize this structure based on your project's needs.

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.
License

## This project is licensed under the MIT License.
