# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Vite. Features a clean dark theme with smooth animations and interactive components.

## Features

- 🎨 Modern dark theme with black background and accent colors
- 📱 Fully responsive design
- ⚡ Fast and optimized with Vite
- 🎭 Smooth animations with Framer Motion
- 🔧 Built with TypeScript for type safety
- 🎯 Icon-based navigation and UI elements

## Tech Stack

- **Framework:** React 19 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons (react-icons) and Lucide React
- **Typography:** Tailwind Typography

## Recent Changes

### Latest Update: Dark Theme Refactor
- ✅ Removed category-based organization in favor of icon-based UI
- ✅ Switched to react-icons for consistent iconography
- ✅ Implemented black dark-mode theme with purple/blue accents
- ✅ Updated color scheme across all components for better contrast and readability

## Dependencies

### New Dependency: React Icons
- **Package:** `react-icons@^5.5.0`
- **Purpose:** Provides a comprehensive set of icons for the user interface
- **Usage:** Replaces custom icons and category-based navigation with standardized icon components

### Color Scheme Updates
- **Background:** Deep black (#000000) for main sections
- **Cards:** Dark gray (#1a1a1a) with subtle borders
- **Text:** White primary text with gray secondary text
- **Accents:** Purple and blue gradients for highlights and buttons
- **Hover Effects:** Smooth transitions with color and scale changes

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
