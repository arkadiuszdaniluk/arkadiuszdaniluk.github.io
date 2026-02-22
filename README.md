# Modern Portfolio Website

A stunning, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Vite. Features multilingual support (English & Polish) and a modern, professional design.

## Features

✨ **Modern Design** - Clean and professional UI with Tailwind CSS
📱 **Fully Responsive** - Works beautifully on all devices
🌐 **Multilingual** - English and Polish language support
⚡ **Fast Performance** - Built with Vite for optimal speed
🎨 **Tailwind CSS** - Utility-first CSS framework
🛣️ **React Router** - Smooth navigation between pages
🌍 **i18n Ready** - Easy to add more languages

## Pages

- **Home** - Hero section with call-to-action and featured skills
- **About** - Personal background, skills, and experience
- **Portfolio** - Showcase of projects with details
- **Services** - Services offered and process overview
- **Contact** - Contact form and contact information

## Tech Stack

- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Styling
- **Vite** - Build tool and development server
- **React Router** - Client-side routing
- **i18next** - Internationalization

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/        # Reusable components
│   ├── Navigation.tsx
│   └── Footer.tsx
├── pages/            # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Portfolio.tsx
│   ├── Services.tsx
│   └── Contact.tsx
├── locales/          # Translation files
│   ├── en.json
│   └── pl.json
├── App.tsx           # Main app component
├── i18n.ts           # i18n configuration
├── index.css         # Global styles
└── main.tsx          # Entry point
```

## Language Switching

Click the language toggle button in the navigation bar to switch between English and Polish. The selected language is saved in localStorage.

## Customization

### Update Content
Edit the respective page files in `src/pages/` to customize content.

### Add Translations
To add a new language:
1. Create a new JSON file in `src/locales/` (e.g., `de.json` for German)
2. Add translations for all keys
3. Update `src/i18n.ts` to include the new language

### Modify Colors
Edit the `tailwind.config.js` file to change the color scheme.

## Built with ❤️ for modern web development
