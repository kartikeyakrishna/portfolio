# Portfolio Website 🚀

> A modern, responsive portfolio website showcasing technical skills, projects, and professional experience.

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)]()
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue)]()
[![React](https://img.shields.io/badge/React-19.1.1-blue)]()
[![Vite](https://img.shields.io/badge/Vite-7.1.2-purple)]()
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.0-blue)]()

## ✨ Features

- 🎨 **Modern Dark Theme** - Elegant black background with purple/blue gradient accents
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- ⚡ **High Performance** - Built with Vite for lightning-fast loading
- 🎭 **Smooth Animations** - Custom CSS animations for enhanced UX
- 🔧 **Type Safety** - Full TypeScript implementation
- 🎯 **Interactive UI** - Icon-based navigation with hover effects
- 🌙 **Dark Mode Support** - Tailwind's dark mode implementation
- ♿ **Accessible** - ARIA labels and semantic HTML

## 🛠️ Tech Stack

### Frontend
- **Framework:** React 19.1.1 with TypeScript 5.8.3
- **Build Tool:** Vite 7.1.2
- **Styling:** Tailwind CSS 3.4.0 + Custom CSS animations
- **Icons:** React Icons 5.5.0 + Lucide React 0.539.0
- **Typography:** Google Fonts (Inter)

### Development Tools
- **Linting:** ESLint 9.33.0 with TypeScript rules
- **Package Manager:** npm
- **Version Control:** Git

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kartikeyakrishna/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── profile.jpg         # Profile image
│   └── vite.svg           # Vite icon
├── src/
│   ├── components/        # React components
│   │   ├── About.tsx     # About section
│   │   ├── Contact.tsx   # Contact form
│   │   ├── Experience.tsx # Work experience
│   │   ├── Footer.tsx    # Page footer
│   │   ├── Header.tsx    # Navigation header
│   │   ├── Hero.tsx      # Landing section
│   │   ├── Projects.tsx  # Project showcase
│   │   └── Skills.tsx    # Technical skills
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # React entry point
│   ├── index.css         # Global styles
│   └── vite-env.d.ts     # Vite type definitions
├── dist/                 # Production build (generated)
├── node_modules/         # Dependencies (generated)
├── .eslintrc.js          # ESLint configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.ts        # Vite configuration
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```

## 🌐 Deployment

### Netlify (Recommended)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Deploy settings:
     ```
     Build command: npm run build
     Publish directory: dist
     Node version: 18 or higher
     ```

### Other Platforms

- **Vercel:** Connect GitHub repo, auto-detects Vite configuration
- **GitHub Pages:** Use `npm run build` and deploy `dist` folder
- **Surge.sh:** `npm install -g surge`, then `surge dist`

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to modify the color scheme:

```js
colors: {
  primary: {
    // Your custom color palette
  }
}
```

### Animations
Custom animations are defined in `tailwind.config.js`:

```js
animation: {
  'fade-in': 'fadeIn 0.5s ease-in-out',
  'slide-up': 'slideUp 0.5s ease-out',
}
```

### Content
- Update personal information in each component
- Replace `public/profile.jpg` with your photo
- Modify project data in `Projects.tsx`
- Update skills in `Skills.tsx`

## 🔧 Configuration Files

| File | Purpose |
|------|--------|
| `vite.config.ts` | Vite build configuration |
| `tailwind.config.js` | Tailwind CSS customization |
| `tsconfig.json` | TypeScript compiler options |
| `eslint.config.js` | Code linting rules |
| `postcss.config.js` | PostCSS configuration |

## 🧪 Testing

Run quality checks before deployment:

```bash
# Check TypeScript compilation
npm run build

# Run linting
npm run lint

# Preview production build
npm run preview
```

## 📱 Browser Support

- Chrome 88+
- Firefox 87+
- Safari 14+
- Edge 88+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email:** kartikeya.chintala@gmail.com
- **LinkedIn:** [kartikeya-krishna](https://linkedin.com/in/kartikeya-krishna-6986b3231)
- **GitHub:** [kartikeyakrishna](https://github.com/kartikeyakrishna)

---

⭐ **Star this repository if you found it helpful!**

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
