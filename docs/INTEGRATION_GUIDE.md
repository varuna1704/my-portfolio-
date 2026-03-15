# Profile Image Integration Guide

## Quick Start

You now have a complete React component library for displaying your profile image on your website. Here's how to use it:

---

## 📦 What You Have

### Component Variations

1. **ProfileImage** - Simple responsive image wrapper
   - Available sizes: small, medium, large
   - Great for: Avatars, sidebars, gallery items

2. **ProfileCard** - Profile info card with image
   - Includes: Name, title, description, email link
   - Great for: Team pages, about sections

3. **ProfileHeroSection** - Full-width hero with image and text
   - Includes: Large image, headline, bio, call-to-action buttons
   - Great for: About/welcome pages, portfolio intro

4. **ProfileGallery** - Multiple image gallery with hover effects
   - Customizable columns and captions
   - Great for: Team galleries, portfolio collections

---

## 🚀 Integration Steps

### Step 1: Save Your Image
Place your image file in your project:

```
/public/images/profile.png
```

Or if using a src/assets structure:
```
/src/assets/images/profile.png
```

### Step 2: Copy the Component File
Copy `ProfileImageComponent.jsx` into your components folder:

```
/src/components/ProfileImageComponent.jsx
```

### Step 3: Import the Component
In the page or component where you want to use it:

```jsx
import { ProfileCard, ProfileImage, ProfileHeroSection, ProfileGallery } from '@/components/ProfileImageComponent';
```

### Step 4: Use the Component
Add it to your page with your data:

```jsx
<ProfileCard
  imageSrc="/images/profile.png"
  name="Your Name"
  title="Your Title"
  description="Your description"
  email="you@example.com"
/>
```

---

## 💡 Usage Examples

### Simple Image (3 sizes)

```jsx
<ProfileImage 
  src="/images/profile.png" 
  alt="Profile" 
  size="small"    // small, medium, or large
/>
```

### Team Page with Multiple Cards

```jsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <ProfileCard
    imageSrc="/images/profile.png"
    name="Sarah Johnson"
    title="Product Designer"
    description="5+ years of UX/UI experience"
    email="sarah@example.com"
  />
  {/* More cards... */}
</div>
```

### About Page Hero Section

```jsx
<ProfileHeroSection
  imageSrc="/images/profile.png"
  name="Sarah Johnson"
  headline="Creative Product Designer"
  bio="I specialize in creating beautiful, intuitive digital experiences..."
/>
```

### Team Gallery

```jsx
<ProfileGallery
  title="Our Team"
  images={[
    { src: "/images/profile1.png", alt: "Team member 1", caption: "Sarah Johnson" },
    { src: "/images/profile2.png", alt: "Team member 2", caption: "John Smith" },
    { src: "/images/profile3.png", alt: "Team member 3", caption: "Emily Davis" },
  ]}
  columns={3}
/>
```

---

## 🎨 Customization

All components use **Tailwind CSS** classes, so you can easily customize:

### Colors
Find these Tailwind classes and update them:
- `blue-600` → Change to any Tailwind color
- `slate-900` → Background/text colors
- `shadow-lg` → Shadow intensity

### Sizes
Modify the size constants in the component:
```jsx
const sizeClasses = {
  small: "w-24 h-32",      // 96px × 128px
  medium: "w-32 h-40",     // 128px × 160px
  large: "w-48 h-64",      // 192px × 256px
};
```

### Styling
Edit CSS classes directly in the JSX:
```jsx
// Change border radius
<div className="rounded-lg">  // rounded-xl, rounded-full, etc.

// Change shadow
className="shadow-lg hover:shadow-2xl"  // shadow-sm, shadow-md, etc.

// Change text size
<h3 className="text-2xl">  // text-xl, text-3xl, etc.
```

---

## 🔗 File Paths

### Relative Paths (if image is in public folder)
```jsx
imageSrc="/images/profile.png"
```

### Alias Paths (Next.js/Vue with tsconfig.json alias)
```jsx
imageSrc="@/public/images/profile.png"
```

### Absolute Asset Imports
```jsx
import profileImage from '@/assets/images/profile.png';

<ProfileCard imageSrc={profileImage} ... />
```

---

## ⚡ Performance Tips

1. **Optimize Image Size**
   - Compress your PNG before use (use TinyPNG or ImageOptim)
   - Consider converting to WebP format
   - Aim for image < 200KB

2. **Use Next.js Image Component** (if using Next.js)
   ```jsx
   import Image from 'next/image';
   
   <Image 
     src={IMAGE_PATH}
     width={300}
     height={400}
     alt="Profile"
   />
   ```

3. **Lazy Loading**
   - Components support lazy loading with the loading prop:
   ```jsx
   <img src={src} loading="lazy" />
   ```

---

## 🎯 Common Use Cases

### Portfolio Website
Use `ProfileHeroSection` on your home page with `ProfileGallery` for your work samples.

### Team Directory
Use `ProfileCard` in a grid layout for your team page.

### About Page
Combine `ProfileHeroSection` with additional text sections.

### Business Card/Profile
Use `ProfileCard` as a standalone component.

---

## 🛠️ Troubleshooting

### Image not showing?
- Check file path is correct
- Verify image file exists in public folder
- Check browser console for 404 errors
- Try absolute path: `/images/profile.png`

### Styling looks wrong?
- Ensure Tailwind CSS is installed: `npm install tailwindcss`
- Check Tailwind is configured in your `tailwind.config.js`
- Clear browser cache (Ctrl+Shift+Delete)

### Component not importing?
- Verify file path matches your project structure
- Check for typos in import statement
- Ensure component is exported as default or named export

---

## 📱 Responsive Design

All components are fully responsive:
- **Mobile**: Single column, optimized for small screens
- **Tablet**: 2-column grid
- **Desktop**: 3-column grid

Customize breakpoints in Tailwind:
```jsx
grid-cols-1 md:grid-cols-2 lg:grid-cols-3
//  ↑ mobile  ↑ tablet    ↑ desktop
```

---

## 📚 Dependencies

The components require:
- **React** (any recent version)
- **Tailwind CSS** (v3.0+)
- **lucide-react** (for icons, included in the component)

Make sure these are installed:
```bash
npm install -D tailwindcss
npm install lucide-react
```

---

## ✨ Need Help?

- Check the demo component at the bottom of `ProfileImageComponent.jsx`
- Review usage examples above
- Inspect Tailwind documentation: https://tailwindcss.com/docs

Good luck! 🚀
