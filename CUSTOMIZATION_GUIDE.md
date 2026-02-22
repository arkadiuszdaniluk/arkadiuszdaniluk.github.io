# Customization Quick Reference

## 🎨 Color Customization

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: '#007AFF',        // Blue (main brand)
  secondary: '#5AC8FA',      // Light blue
  dark: '#1a1a1a',          // Dark background
  light: '#f5f5f5',         // Light background
}
```

Common colors to try:
- Professional: `#1E40AF` (dark blue), `#0891B2` (teal)
- Creative: `#D946EF` (magenta), `#EC4899` (pink)
- Corporate: `#0F172A` (slate), `#475569` (slate-600)

## ✍️ Text Content

### Update Home Page
File: `src/pages/Home.tsx`
- Update hero title and subtitle
- Modify featured skills
- Change CTA text

### Update About Page
File: `src/pages/About.tsx`
- Upload profile image
- Update bio text
- Add/remove skills
- Modify experience timeline

### Update Portfolio
File: `src/pages/Portfolio.tsx`
- Replace project titles and descriptions
- Update project images
- Add/remove technologies
- Modify stats (projects, clients, years)

### Update Services
File: `src/pages/Services.tsx`
- Change service descriptions
- Modify process steps
- Update feature lists

### Update Contact
File: `src/pages/Contact.tsx`
- Update email address
- Change phone number
- Modify location
- Update social media links

## 🖼️ Images

Replace placeholder URLs (Unsplash):

```javascript
// Current format
src="https://images.unsplash.com/photo-..."

// Options:
// 1. Use your own images
// 2. Use free services: Unsplash, Pexels, Pixabay
// 3. Optimize with tools like TinyPNG
```

For best performance, optimize images to:
- Portfolio items: 500x300px
- Profile picture: 500x500px
- Hero section: 1200x600px

## 🌐 Multilingual Content

### Add New Language

1. Create `src/locales/[lang].json`:
```json
{
  "navigation": {
    "home": "Your translation",
    "about": "Your translation"
  }
}
```

2. Update `src/i18n.ts`:
```typescript
import newLangTranslation from './locales/[lang].json';

const resources = {
  en: { translation: enTranslation },
  pl: { translation: plTranslation },
  [lang]: { translation: newLangTranslation },  // Add this
};
```

3. Test in navigation bar - new language should appear

## 📝 Contact Form Integration

Currently logs to console. To use with backend:

### Option 1: Formspree
```typescript
const handleSubmit = async (e) => {
  e.preventDefault();
  await fetch('https://formspree.io/f/YOUR_ID', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: { 'Content-Type': 'application/json' }
  });
};
```

### Option 2: EmailJS
```bash
npm install @emailjs/browser
```

### Option 3: Firebase
```bash
npm install firebase
```

## 🎨 Custom Components

### Add a New Page

1. Create `src/pages/NewPage.tsx`:
```typescript
import { useTranslation } from 'react-i18next';

export default function NewPage() {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('newpage.title')}</h1>
    </div>
  );
}
```

2. Add to `src/App.tsx`:
```typescript
import NewPage from './pages/NewPage';

// In Routes:
<Route path="/newpage" element={<NewPage />} />
```

3. Add to navigation in `src/components/Navigation.tsx`

## 🎯 Key Files to Modify

| File | Purpose | What to Change |
|------|---------|-----------------|
| `src/pages/*.tsx` | Page content | Text, images, structure |
| `src/locales/*.json` | Translations | All visible text |
| `tailwind.config.js` | Colors & fonts | Brand colors |
| `src/App.tsx` | Navigation | Routes and pages |
| `public/` | Static assets | Favicon, manifest |

## 🚀 Performance Tips

1. **Optimize Images**: Use WebP format when possible
2. **Lazy Loading**: Add loading="lazy" to images below fold
3. **Code Splitting**: Split large pages into components
4. **Minify**: Vite handles this automatically in build
5. **Cache**: Deploy with proper cache headers

## 🔐 SEO Optimization

Update `index.html`:
```html
<meta name="description" content="Your description">
<meta name="keywords" content="your, keywords">
<meta name="author" content="Your Name">
```

Add to each page component:
```typescript
useEffect(() => {
  document.title = "Page Title - Your Name";
}, []);
```

## 📱 Mobile Testing

Test breakpoints with browser DevTools:
- Mobile: 375px - 667px
- Tablet: 768px - 1024px
- Desktop: 1200px+

## 🔗 Social Links

Update in `src/components/Footer.tsx`:
```typescript
<a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
<a href="https://github.com/yourprofile">GitHub</a>
<a href="https://twitter.com/yourhandle">Twitter</a>
```

## 💡 Common Customizations

### Change Font
In `tailwind.config.js`:
```javascript
theme: {
  fontFamily: {
    sans: ['Inter', 'sans-serif'],
    serif: ['Georgia', 'serif'],
  }
}
```

### Add Animation
In `tailwind.config.js`:
```javascript
extend: {
  animation: {
    fade: 'fadeIn 0.5s ease-in',
  },
  keyframes: {
    fadeIn: {
      from: { opacity: '0' },
      to: { opacity: '1' },
    }
  }
}
```

### Create Dark Mode
Add to `tailwind.config.js`:
```javascript
darkMode: 'class',
```

## 🆘 Need Help?

1. Check browser console for errors
2. Review component imports
3. Verify file paths
4. Clear cache and rebuild: `npm run build`
5. Check translation keys match between files

---

Start customizing and make it yours! 🎉
