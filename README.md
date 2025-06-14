# WestFord Test Project

A modern, fully responsive React web application for WestFord, built with Vite and Tailwind CSS. The project features a clean, modular codebase and pixel-perfect UI matching provided design references.

## 🚀 Features

- **React 19** with React Router for seamless navigation
- **Vite** for fast development and builds
- **Tailwind CSS** for utility-first, responsive styling
- **Component-based architecture** for maintainability
- **Mobile-first responsive design**
- **Academic Partners, Programs Dropdown, and Course Details** sections
- **Custom modals, forms, and scroll animations (AOS)**
- **Sticky header and animated dropdown menus**

## 📋 Prerequisites

- Node.js (v14.x or higher)
- npm or yarn

## 🛠️ Installation

1. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
2. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## 📁 Project Structure

```
/
├── public/              # Static assets (images, icons, etc.)
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── common/      # Header, Footer, HeroSection, etc.
│   │   └── ui/          # Button, Card, InputField, etc.
│   ├── pages/           # Page components (CoursePage, etc.)
│   ├── styles/          # Global styles and Tailwind config
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # App entry point (AOS init, etc.)
│   └── Routes.jsx       # Application routes
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
├── postcss.config.js    # PostCSS config for Tailwind
├── tailwind.config.js   # Tailwind CSS config
├── vite.config.js       # Vite config
```

## 🧩 Adding Routes

To add new routes, update `Routes.jsx` and import your page components as needed.

## 🎨 Styling

- Tailwind CSS utility classes for all layout and design
- Custom theme colors and breakpoints
- Responsive and accessible by default

## 📦 Deployment

Build the app for production:

```bash
npm run build
```

## 🙏 Acknowledgments

- Powered by React, Vite, and Tailwind CSS
- UI and layout inspired by provided design references
