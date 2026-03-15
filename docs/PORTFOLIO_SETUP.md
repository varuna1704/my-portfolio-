# Portfolio with Profile Image - Setup Guide

## 📸 What's New

Your portfolio has been enhanced with a **professional profile image display** in the Hero section. The image appears on the right side with:

- ✨ Smooth hover animations and glow effects
- 📱 Fully responsive design (stacks on mobile)
- 🎨 Matching color scheme with orange (#ff6b35) and purple (#7c3aed) accents
- ⚡ Performance optimized with lazy loading support

---

## 🚀 Quick Setup (3 Steps)

### Step 1: Place Your Image
Save your profile image to your project's public folder:

```
/public/images/profile.png
```

**Important:** The file must be named `profile.png` and placed in a `/public/images/` folder for the path `/images/profile.png` to work.

### Step 2: Replace Portfolio File
Replace your existing `portfolio.jsx` with the new `portfolio-with-image.jsx` file:

```bash
# Option A: Direct replacement
cp portfolio-with-image.jsx portfolio.jsx

# Option B: Rename it
mv portfolio-with-image.jsx src/components/portfolio.jsx
```

### Step 3: Test It
Run your development server and navigate to the About section. You should see:
- Your profile image on the right side (desktop)
- Below the text content (mobile)
- Smooth animations on hover

---

## 📁 File Structure

```
your-project/
├── public/
│   └── images/
│       └── profile.png          ← Place your image here
├── src/
│   └── components/
│       └── portfolio.jsx         ← Updated file
└── package.json
```

---

## 🔧 Customization

### Change Image Path
If your image is in a different location, update line **285**:

```jsx
// Current (default):
src="/images/profile.png"

// If image is elsewhere:
src="/assets/profile.png"           // From public/assets folder
src="/photos/varuna.png"             // From public/photos folder
import profileImg from '@/assets/...' // Import from src
```

### Adjust Image Container Size
Find the image container styles (around line **310**) and modify:

```jsx
maxWidth: 400,  // Change this to make image wider/narrower
aspectRatio: "1/1.3",  // Adjust height ratio (1/1.2, 1/1.5, etc.)
```

### Change Glow Colors
The glow effects use the brand colors. To change them:

```jsx
// Line ~311: Glow circles
background: "radial-gradient(circle, #ff6b3510 0%, transparent 70%)"
// #ff6b35 = orange, change to any hex color

// Line ~320: Animated border glow
background: "linear-gradient(135deg, #ff6b35 0%, #7c3aed 50%, #00d4aa 100%)"
// Change the hex values to your brand colors
```

### Adjust Hover Animation
The image moves up on hover. To change this effect:

```jsx
// Line ~316: Hover movement
onMouseEnter={e => {
  e.currentTarget.style.transform = "translateY(-8px)"; // Change -8px
}}
```

### Modify Responsive Breakpoint
The layout switches from 2 columns to 1 column at 968px. To change:

```jsx
// Line ~326: Media query
@media (max-width: 968px) {  // Change this value
```

---

## 📱 Responsive Behavior

### Desktop (> 968px)
- Profile image appears on the right side
- Text content and image side-by-side
- Full hover animations enabled

### Tablet/Mobile (≤ 968px)
- Profile image stacks below text
- Takes full width of container
- Hover animations still work

---

## 🎨 Design Elements Added

### Image Container
- 24px border radius
- 2px border (#1e293b)
- Smooth shadow effect
- Hover lift animation (-8px)

### Background Glow
- Two radial gradients for depth
- 40px blur for soft effect
- Positioned absolutely

### Border Animation
- Gradient border with opacity
- Colors: orange → purple → cyan
- Subtle visual accent

---

## ✨ Features Breakdown

### Hover Effects
```javascript
// When hovering over the image:
1. Image moves up: translateY(-8px)
2. Shadow intensifies: boxShadow increases
3. Glow becomes more prominent
4. Smooth transition: 0.4s ease
```

### Mobile Optimization
```javascript
// On screens < 968px:
1. Layout changes from grid to flex (column)
2. Gap adjusts from 60px to 40px
3. Image takes full width
4. Text stays responsive
```

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Image not showing | Check file path: `/images/profile.png` exists in public folder |
| Image looks distorted | Verify `objectFit: "cover"` and `objectPosition: "center"` |
| Layout broken | Ensure CSS grid is supported (modern browsers) |
| Styling not applied | Clear browser cache and restart dev server |
| Image quality poor | Compress image to <200KB (use TinyPNG) |

---

## 🔗 Image Format Tips

### Recommended Specs
- **Format:** PNG or JPG
- **Size:** 400px × 520px (aspect ratio 1:1.3)
- **File Size:** < 200KB
- **Resolution:** 72 DPI for web

### How to Prepare Your Image
1. **Crop to 1:1.3 ratio** (taller than wide)
2. **Compress:** Use TinyPNG or ImageOptim
3. **Save as:** profile.png in public/images/
4. **Test:** Verify it displays correctly

---

## 📊 What Changed from Original

### Added to Hero Section
- Grid layout (2 columns on desktop)
- Profile image container with animations
- Glow background effects
- Responsive media query

### No Changes To
- Navigation
- Skills section
- Experience section
- Education section
- Certifications section
- Contact form
- Overall styling and theme

---

## 🌟 Pro Tips

1. **Image Quality Matters**
   - Professional headshot works best
   - Good lighting, clear background
   - Aspect ratio: slightly taller than wide

2. **Performance**
   - Compress images before upload
   - Consider WebP format for newer browsers
   - Use lazy loading for faster initial load

3. **Responsive Testing**
   - Test on mobile (< 640px)
   - Test on tablet (640px - 1024px)
   - Test on desktop (> 1024px)

4. **Browser Compatibility**
   - Works on all modern browsers
   - Supports Chrome, Firefox, Safari, Edge
   - IE11 not supported

---

## 💻 Code Example: Using Different Image Paths

### Public Folder Images
```jsx
// If image is at public/images/profile.png
src="/images/profile.png"

// If image is at public/assets/photos/profile.png
src="/assets/photos/profile.png"
```

### Imported Images
```jsx
// If using import (requires bundler support)
import profilePic from '@/public/images/profile.png';

// Then use:
src={profilePic}
```

### External URLs
```jsx
// From external server:
src="https://example.com/images/profile.png"
```

---

## 🎯 Next Steps

1. ✅ Place image in `/public/images/profile.png`
2. ✅ Replace `portfolio.jsx` with new file
3. ✅ Run dev server: `npm run dev`
4. ✅ Test hero section displays correctly
5. ✅ Check responsive design on mobile
6. ✅ Customize colors/sizing if needed

---

## 📞 Need Help?

Check these files for reference:
- **Component:** `portfolio-with-image.jsx`
- **Original guide:** `INTEGRATION_GUIDE.md`
- **Quick reference:** `QUICK_REFERENCE.md`

All sections of your portfolio are fully functional. The image integration is purely additive—nothing has been removed or broken.

Good luck! 🚀
