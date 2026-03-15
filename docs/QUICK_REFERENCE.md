# Profile Image Components - Quick Reference

## 🎯 Component Cheat Sheet

### 1️⃣ ProfileImage
**Use for:** Standalone images, avatars, gallery items
```jsx
<ProfileImage 
  src="/images/profile.png" 
  size="medium"  // small | medium | large
/>
```
**Props:**
- `src` - Image path (required)
- `alt` - Alt text (default: "Profile")
- `size` - small/medium/large (default: "medium")

---

### 2️⃣ ProfileCard
**Use for:** Team pages, profile sections, about pages
```jsx
<ProfileCard
  imageSrc="/images/profile.png"
  name="Sarah Johnson"
  title="Product Designer"
  description="5+ years of UX/UI experience"
  email="sarah@example.com"
/>
```
**Props:**
- `imageSrc` - Image path (required)
- `name` - Person's name (default: "Profile Name")
- `title` - Job title (default: "Job Title")
- `description` - Short bio (default: "Brief description")
- `email` - Email address (default: "email@example.com")

---

### 3️⃣ ProfileHeroSection
**Use for:** About page, welcome page, intro section
```jsx
<ProfileHeroSection
  imageSrc="/images/profile.png"
  name="Sarah Johnson"
  headline="Creative Product Designer"
  bio="I specialize in creating beautiful, intuitive digital experiences with 5+ years of industry experience."
/>
```
**Props:**
- `imageSrc` - Image path (required)
- `name` - Person's name (default: "Your Name")
- `headline` - Subtitle (default: "Creative Professional")
- `bio` - Longer description (default: "Your bio goes here")

---

### 4️⃣ ProfileGallery
**Use for:** Team galleries, multiple team members
```jsx
<ProfileGallery
  title="Our Team"
  images={[
    { src: "/images/person1.png", alt: "Person 1", caption: "Sarah Johnson" },
    { src: "/images/person2.png", alt: "Person 2", caption: "John Smith" },
  ]}
  columns={3}
/>
```
**Props:**
- `images` - Array of image objects (required)
  - `src` - Image path
  - `alt` - Alt text
  - `caption` - Text overlay on hover
- `title` - Gallery title (default: "Gallery")
- `columns` - Number of columns (default: 3)

---

## 📂 File Setup

```
your-project/
├── public/
│   └── images/
│       └── profile.png          ← Place your image here
├── src/
│   ├── components/
│   │   └── ProfileImageComponent.jsx  ← Paste component file here
│   └── pages/
│       └── about.jsx
```

---

## 🔧 Usage in Different Frameworks

### Next.js
```jsx
import { ProfileCard } from '@/components/ProfileImageComponent';

export default function About() {
  return <ProfileCard imageSrc="/images/profile.png" name="..." />;
}
```

### Vue 3
```vue
<script setup>
import { ProfileCard } from '@/components/ProfileImageComponent';
</script>

<template>
  <ProfileCard image-src="/images/profile.png" name="..." />
</template>
```

### Vite + React
```jsx
import { ProfileCard } from './components/ProfileImageComponent';

function About() {
  return <ProfileCard imageSrc="/images/profile.png" name="..." />;
}
```

---

## 🎨 Quick Customization

### Change Colors
Find and replace in component:
```
blue-600      → your-color-600
slate-900     → your-color-900
```

### Change Sizes
Modify these values:
```jsx
const sizeClasses = {
  small: "w-20 h-28",   // Smaller
  medium: "w-32 h-40",  // Default
  large: "w-56 h-72",   // Larger
};
```

### Change Border Radius
```jsx
rounded-lg      // Current (8px)
rounded-xl      // More rounded (12px)
rounded-2xl     // Very rounded (16px)
rounded-full    // Circle
```

### Change Shadow
```jsx
shadow-lg       // Current
shadow-sm       // Subtle
shadow-2xl      // Heavy
shadow-none     // No shadow
```

---

## 🚀 Quick Start (3 steps)

1. **Save component file**
   - Copy `ProfileImageComponent.jsx` to `src/components/`

2. **Place your image**
   - Save profile image to `public/images/profile.png`

3. **Import & use**
   ```jsx
   import { ProfileCard } from '@/components/ProfileImageComponent';
   
   <ProfileCard imageSrc="/images/profile.png" name="Your Name" ... />
   ```

---

## 📋 Common Patterns

### Hero + Gallery Combo
```jsx
<ProfileHeroSection imageSrc="/images/main.png" name="..." />
<ProfileGallery images={[...]} />
```

### Team Grid
```jsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <ProfileCard imageSrc="/images/person1.png" name="..." />
  <ProfileCard imageSrc="/images/person2.png" name="..." />
  <ProfileCard imageSrc="/images/person3.png" name="..." />
</div>
```

### About Section
```jsx
<section>
  <ProfileImage src="/images/profile.png" size="large" />
  <h1>About Me</h1>
  <p>Your bio here...</p>
</section>
```

---

## ✅ Checklist

- [ ] Copied `ProfileImageComponent.jsx` to components folder
- [ ] Placed image in `public/images/` folder
- [ ] Updated image path in component
- [ ] Tailwind CSS is installed (`npm install -D tailwindcss`)
- [ ] lucide-react is installed (`npm install lucide-react`)
- [ ] Imported component in your page
- [ ] Customized colors/styles to match your brand

---

## 🐛 Debug Tips

| Problem | Solution |
|---------|----------|
| Image not showing | Check path: `/images/profile.png` not `images/profile.png` |
| Styling looks off | Clear cache (Ctrl+Shift+Delete) and restart dev server |
| Component not found | Verify import path matches your project structure |
| Text looks blurry | Check Tailwind config, ensure CSS is compiled |

---

## 📚 Tailwind Classes Reference

**Spacing:** w-4, w-8, w-12... (4px increments)
**Text:** text-xs, text-sm, text-base, text-lg, text-xl...
**Colors:** color-50 to color-900 (blue, slate, gray, etc.)
**Shadows:** shadow-sm, shadow, shadow-lg, shadow-2xl
**Radius:** rounded-sm, rounded, rounded-lg, rounded-xl, rounded-full
**Hover:** hover:opacity-75, hover:scale-110, hover:shadow-2xl

---

Done? You're ready to go! 🎉
