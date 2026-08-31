# Youssef Ben Ghorbel - Portfolio

Phase 1: Foundation of a modernized Constructivist portfolio for a Game / VR Developer.

## Overview
This is a React-based single-page application built with Vite. It features a bold, high-contrast Constructivist design system (implemented in plain CSS) inspired by Game UI. 

## Requirements
- Node.js (v18+)
- npm

## Installation
1. Clone the repository.
2. Run `npm install` to install dependencies.

## Running Locally
Run `npm run dev` to start the development server. 
The app will be available at `http://localhost:3000` (or as assigned by Vite).

## Building for Production
Run `npm run build` to compile the application. The output will be inside the `dist/` directory.

## Project Structure & Content Management
- **Routing:** Top-level routes are configured in `src/App.jsx`.
- **Pages:** The main views are located in `src/pages/` (`Home.jsx`, `Projects.jsx`, `ProjectDetail.jsx`).
- **Components:** Modular UI pieces go in `src/components/`, categorized by functional area (hero, layout, projects, etc.).
- **Data & Content:** All text, skills, and project list data should be managed in `src/data/` (e.g., creating a `projects.js` file for dynamic rendering).
- **Media Assets:** 
  - Images should be placed into `src/assets/images/{profile,projects,activities}`.
  - Videos should go into `src/assets/videos/`.
  - Downloadable documents (like resumes or PDFs) go into `src/assets/documents/`.
- **Styling:** We are using plain CSS. Global styles and CSS variables are found in `src/index.css`. Modular CSS or additional stylesheets can be placed in `src/styles/` or alongside components.

## Getting Started
If you are learning React and want to understand this project, you should read these files in order:
1. `index.html` - The entry point for the browser.
2. `src/main.jsx` - The React initialization code.
3. `src/App.jsx` - The layout and routing structure.
4. `src/pages/Home.jsx` - An example of a basic UI page.
