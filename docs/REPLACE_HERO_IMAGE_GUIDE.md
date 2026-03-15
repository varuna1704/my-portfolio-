# 🖼️ REPLACE HERO IMAGE - IMPLEMENTATION GUIDE

## CURRENT STATE
Your portfolio hero section currently shows a placeholder/stock image.

## WHAT YOU NEED TO DO
Replace it with your professional headshot: **varuna-headshot-professional-dark.jpg**

---

## 📸 IMAGE SPECIFICATIONS

**File:** `varuna-headshot-professional-dark.jpg`
**Size:** 400x500 pixels
**Format:** JPEG (high quality - 95%)
**Use:** Hero section right side
**Position:** Right side of hero (next to text)

---

## 🎯 PROMPT FOR ANTIGRAVITY

Copy and send this to antigravity:

```
Replace Hero Section Image

TASK: Replace the current placeholder image in the hero section 
with Varuna's professional headshot.

CURRENT: There's a stock/placeholder image on the right side
NEW: Replace with: varuna-headshot-professional-dark.jpg

LOCATION:
- File to use: public/images/headshots/varuna-headshot-professional-dark.jpg
- Position: Hero section, right side
- Component: Hero.jsx or HeroImage.jsx

IMPLEMENTATION:

1. Update the image path in Hero component:
   OLD: <img src="/images/placeholder.jpg" />
   NEW: <img src="/images/headshots/varuna-headshot-professional-dark.jpg" />

2. Image styling should:
   ✓ Display as rounded rectangle (keep current styling)
   ✓ Width: ~400px
   ✓ Height: ~500px
   ✓ Add subtle shadow/depth
   ✓ Responsive on mobile (adjust size)
   ✓ Match dark theme

3. Alternative approach (React component):
   ```jsx
   import heroImage from '@/images/headshots/varuna-headshot-professional-dark.jpg';
   
   <div className={styles.heroImage}>
     <img src={heroImage} alt="Varuna Nikam" />
   </div>
   ```

4. CSS styling should include:
   - Border radius: 12-16px (rounded corners)
   - Box shadow: subtle depth
   - Max width: 400px
   - Height: auto (responsive)
   - Object-fit: cover (if needed)

5. Testing:
   ✓ Image loads correctly
   ✓ Shows on desktop (right side)
   ✓ Responsive on tablet
   ✓ Shows on mobile (adjust position if needed)
   ✓ No broken image errors
   ✓ Proper aspect ratio maintained

6. Optimization:
   ✓ Image is already optimized (46KB)
   ✓ No further compression needed
   ✓ Use webp version if available
   ✓ Lazy load if performance needed

DELIVERABLE:
- Hero section displays Varuna's professional headshot
- Image properly sized and styled
- Mobile responsive
- No broken images or errors
```

---

## 📋 STEP-BY-STEP FOR ANTIGRAVITY

### Step 1: Locate Files
```
Current image location: Wherever placeholder currently points to
New image location: public/images/headshots/varuna-headshot-professional-dark.jpg
```

### Step 2: Find Hero Component
```javascript
// Location: src/components/Hero/Hero.jsx

// Find the image element:
<img src={currentImage} alt="..." />

// OR in HTML/JSX:
<section className="hero">
  <div className="hero-content">
    {/* Text content */}
  </div>
  <div className="hero-image">
    <img src="/path/to/image" />  // <- This line
  </div>
</section>
```

### Step 3: Update Image Path
```javascript
// OLD (current):
<img src="/images/placeholder.jpg" alt="Professional" />

// NEW (updated):
<img src="/images/headshots/varuna-headshot-professional-dark.jpg" alt="Varuna Nikam" />
```

### Step 4: Verify Styling
```css
/* CSS should have: */
.hero-image img {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 16px;  /* Rounded corners */
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);  /* Depth */
  object-fit: cover;
}

/* Mobile responsive: */
@media (max-width: 768px) {
  .hero-image img {
    max-width: 100%;
    width: 90%;
  }
}
```

### Step 5: Test
```
1. Load portfolio locally: npm run dev
2. Check hero image displays
3. Check size is correct
4. Check styling looks good
5. Check mobile responsive
6. Check console for errors
7. Check browser DevTools for image loading
```

---

## 🎨 STYLING RECOMMENDATIONS

```css
/* Hero Image Container */
.heroImage {
  display: flex;
  align-items: center;
  justify-content: center;
}

.heroImage img {
  /* Size */
  width: 100%;
  max-width: 400px;
  height: auto;
  aspect-ratio: 4/5;
  
  /* Shape */
  border-radius: 16px;
  
  /* Shadow/Depth */
  box-shadow: 
    0 4px 6px rgba(0, 0, 0, 0.1),
    0 10px 20px rgba(0, 0, 0, 0.15),
    0 20px 40px rgba(0, 0, 0, 0.2);
  
  /* Content fit */
  object-fit: cover;
  object-position: center;
  
  /* Animation (optional) */
  transition: transform 0.3s ease;
  
  /* Hover effect (optional) */
  &:hover {
    transform: scale(1.02);
  }
}

/* Responsive */
@media (max-width: 1024px) {
  .heroImage img {
    max-width: 350px;
  }
}

@media (max-width: 768px) {
  .heroImage img {
    max-width: 300px;
  }
}

@media (max-width: 480px) {
  .heroImage {
    margin-top: 40px;
    padding: 0 20px;
  }
  
  .heroImage img {
    max-width: 100%;
    width: 100%;
  }
}
```

---

## ✅ VERIFICATION CHECKLIST

After replacing image, verify:

- [ ] Image displays correctly in hero section
- [ ] Image is on the right side (desktop view)
- [ ] Image has proper rounded corners
- [ ] Image has subtle shadow/depth effect
- [ ] Image is responsive (mobile/tablet)
- [ ] No broken image errors in console
- [ ] Image loads quickly (already optimized)
- [ ] Alt text is correct ("Varuna Nikam")
- [ ] Styling matches rest of portfolio
- [ ] Dark theme compatibility ✓

---

## 🚀 QUICK COMMAND FOR ANTIGRAVITY

```bash
# If using React:
# 1. Place image in: public/images/headshots/varuna-headshot-professional-dark.jpg
# 2. Update src/components/Hero/Hero.jsx:
#    <img src="/images/headshots/varuna-headshot-professional-dark.jpg" alt="Varuna Nikam" />
# 3. Test:
npm run dev
# 4. Build:
npm run build
# 5. Deploy
```

---

## 📸 IMAGE DETAILS

**File Name:** `varuna-headshot-professional-dark.jpg`
**Dimensions:** 400x500 pixels (4:5 aspect ratio)
**File Size:** 46KB (already optimized)
**Format:** JPEG (high quality)
**Background:** Dark gradient (matches portfolio theme)
**Quality:** Professional 95% JPEG

---

## 🎯 FINAL RESULT

After replacement:
✅ Hero section shows your professional headshot
✅ Image looks professional with proper styling
✅ Responsive on all devices
✅ Matches portfolio dark theme
✅ Creates strong first impression
✅ Increases trust and credibility

---

**Send this guide to antigravity and your hero image will be updated! 🎉**
