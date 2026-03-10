# 🚀 Step-by-Step Guide to Run Your Portfolio Locally

## 📋 Prerequisites Check

Before starting, make sure you have:
- ✅ Node.js installed (v14 or higher)
- ✅ npm installed (comes with Node.js)
- ✅ A code editor (VS Code recommended)
- ✅ Your profile image (profile.png)

### Check if Node.js is installed:
```bash
node --version
npm --version
```

If not installed, download from: https://nodejs.org/

---

## 🎯 Complete Setup Steps

### STEP 1: Create a New React Project (if you don't have one)

If you already have a React project, skip to **STEP 2**.

#### Option A: Create with Vite (Fastest - Recommended)
```bash
# Open terminal/command prompt and run:
npm create vite@latest my-portfolio -- --template react

# Navigate into the project
cd my-portfolio

# Install dependencies
npm install
```

#### Option B: Create with Create React App
```bash
# Open terminal/command prompt and run:
npx create-react-app my-portfolio

# Navigate into the project
cd my-portfolio
```

#### Option C: Using Next.js
```bash
# Open terminal/command prompt and run:
npx create-next-app@latest my-portfolio

# Navigate into the project
cd my-portfolio

# Install dependencies
npm install
```

---

### STEP 2: Prepare the Folder Structure

In your project root, create the necessary folders:

```
my-portfolio/
├── public/
│   └── images/
│       └── (place profile.png here)
├── src/
│   └── components/
│       └── (place portfolio-with-image.jsx here)
├── package.json
└── ... other files
```

#### Create folders via terminal:
```bash
# Navigate to your project
cd my-portfolio

# Create the images folder if it doesn't exist
mkdir -p public/images

# Create components folder if it doesn't exist
mkdir -p src/components
```

---

### STEP 3: Add Your Profile Image

#### Method 1: Copy File Directly (Easiest)
1. Find your `profile.png` image file
2. Copy it
3. Navigate to your project: `my-portfolio/public/images/`
4. Paste the image there

**Make sure the filename is exactly:** `profile.png`

#### Method 2: Using Terminal
```bash
# From your project root, copy the image
cp /path/to/your/profile.png public/images/

# Verify it's there:
ls public/images/
# Should show: profile.png
```

---

### STEP 4: Add the Portfolio Component

#### Method 1: Copy-Paste (Easiest)
1. Open `portfolio-with-image.jsx` in your code editor
2. Copy all the code
3. Create a new file: `src/components/Portfolio.jsx`
4. Paste the code into that file
5. Save

#### Method 2: Using Terminal
```bash
# From your project root
cp /path/to/portfolio-with-image.jsx src/components/Portfolio.jsx
```

---

### STEP 5: Update Your App Component

Now you need to import and use the Portfolio component in your main App.

#### Find your App.jsx file (or App.js):
- Usually located at: `src/App.jsx`

#### Replace the content with:
```jsx
import Portfolio from './components/Portfolio';

function App() {
  return <Portfolio />;
}

export default App;
```

#### Or if you have existing content, just import at the top:
```jsx
import Portfolio from './components/Portfolio';

// Then use it in your JSX:
<Portfolio />
```

---

### STEP 6: Install Dependencies (if needed)

Your portfolio uses React hooks (which come built-in). No additional npm packages needed!

If you get any missing dependency errors later, install them:
```bash
npm install lucide-react
```

---

### STEP 7: Start Your Development Server

Now run the development server:

```bash
npm run dev
```

Or if using Create React App:
```bash
npm start
```

Or if using Next.js:
```bash
npm run dev
```

---

### STEP 8: Open in Browser

After running the command above, you should see output like:

```
  VITE v4.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

**Open this link in your browser:**
```
http://localhost:5173/
```

Or if using Create React App, it usually opens automatically at:
```
http://localhost:3000/
```

---

## ✅ What You Should See

When you open the portfolio in your browser:

### Desktop View:
- Profile image appears on the RIGHT side of the Hero section
- Text content on the LEFT side
- Image has rounded corners and a subtle glow
- When you hover over the image, it animates upward

### Mobile View (resize browser window to test):
- Image appears BELOW the text content
- Full width of the screen
- Still has all animations

---

## 🐛 Troubleshooting

### Problem: "Cannot find module 'Portfolio'"

**Solution:**
```bash
# Check that the file exists:
ls -la src/components/Portfolio.jsx

# Or on Windows:
dir src\components\Portfolio.jsx

# If not there, copy it again:
cp portfolio-with-image.jsx src/components/Portfolio.jsx
```

---

### Problem: Image not showing

**Step 1: Verify image file exists**
```bash
# Check the public/images folder:
ls -la public/images/

# Or on Windows:
dir public\images

# Should show: profile.png
```

**Step 2: Verify correct path in code**
In `src/components/Portfolio.jsx`, look for line ~285:
```jsx
src="/images/profile.png"
```

Make sure it matches your folder structure.

**Step 3: Hard refresh browser**
- Press: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)

---

### Problem: Styling looks wrong

**Solution:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Restart dev server
npm run dev
```

---

### Problem: Port 5173 already in use

**Solution:**
```bash
# Use a different port:
npm run dev -- --port 3000

# Or on Create React App:
PORT=3000 npm start
```

---

### Problem: "ReferenceError: React is not defined"

**Solution:**
Make sure your Portfolio.jsx has the import at the top:
```jsx
import { useState, useEffect, useRef } from "react";
```

---

## 📱 Testing Your Portfolio

### Test Desktop View:
1. Open browser at full width (> 968px)
2. Should see text on LEFT, image on RIGHT
3. Hover over image - it should move up

### Test Mobile View:
1. Press `F12` to open developer tools
2. Click the phone icon in the toolbar
3. Select iPhone 12 or similar device
4. Image should now appear BELOW text content
5. Hover/tap should still animate

### Test All Sections:
1. Click "About" in navigation - should scroll to Hero
2. Click "Skills" - should show skill bars
3. Click "Experience" - should show work history
4. Click "Education" - should show education
5. Click "Contact" - should show contact form

---

## 🎨 Customizing Colors (Optional)

If you want to change the orange/purple theme:

1. Open `src/components/Portfolio.jsx`
2. Find these color codes and replace:
   - `#ff6b35` = Orange (primary color)
   - `#7c3aed` = Purple (secondary color)
   - `#00d4aa` = Cyan (accent color)

Example: Change orange to blue
```jsx
// Find: color: "#ff6b35"
// Replace with: color: "#3b82f6"  (blue)
```

---

## 📦 Building for Production

When you're ready to deploy, build a production version:

### With Vite:
```bash
npm run build
```

### With Create React App:
```bash
npm run build
```

### With Next.js:
```bash
npm run build
npm start
```

This creates an optimized version in the `dist/` or `build/` folder.

---

## 🌐 Deployment Options

### Option 1: Vercel (Easiest for Next.js/Vite)
```bash
npm install -g vercel
vercel
# Follow the prompts
```

### Option 2: Netlify
```bash
npm install -g netlify-cli
netlify deploy
# Follow the prompts
```

### Option 3: GitHub Pages
1. Create a GitHub repository
2. Push your code to GitHub
3. Configure GitHub Pages in settings
4. Your portfolio is live at `yourusername.github.io`

---

## 📝 File Checklist

Before starting, make sure you have:

- [ ] `profile.png` image file ready
- [ ] `portfolio-with-image.jsx` downloaded
- [ ] Node.js installed (v14+)
- [ ] Code editor ready (VS Code, etc.)

After setup, verify:

- [ ] `public/images/profile.png` exists
- [ ] `src/components/Portfolio.jsx` exists
- [ ] `src/App.jsx` imports Portfolio component
- [ ] Dev server runs without errors
- [ ] Browser shows portfolio with image
- [ ] Image is visible in Hero section
- [ ] Hover animation works on image

---

## 🎯 Quick Command Reference

### Create new project:
```bash
npm create vite@latest my-portfolio -- --template react
cd my-portfolio
npm install
```

### Create folders:
```bash
mkdir -p public/images src/components
```

### Copy files:
```bash
cp profile.png public/images/
cp portfolio-with-image.jsx src/components/Portfolio.jsx
```

### Start dev server:
```bash
npm run dev
```

### Open browser:
```
http://localhost:5173/
```

---

## 💡 Pro Tips

1. **Use VS Code** - Install "ES7+ React/Redux/React-Native snippets" extension
2. **Keep terminal open** - Dev server needs to stay running
3. **Hot reload** - Changes save automatically
4. **Check console** - Press F12 to see any errors
5. **Test on mobile** - Use DevTools device simulation

---

## 🚨 Common Issues & Quick Fixes

| Issue | Quick Fix |
|-------|-----------|
| Image won't show | Check `/public/images/profile.png` exists |
| Port already in use | Kill process or use different port |
| Style looks broken | Clear browser cache (`Ctrl+Shift+R`) |
| Component not found | Make sure file is in `src/components/` |
| Server won't start | Delete node_modules and reinstall |

---

## ✨ You're All Set!

Once you see your portfolio running with the profile image:

1. 🎉 Celebrate - Your portfolio is live locally!
2. 📸 Test thoroughly on desktop and mobile
3. 🎨 Customize colors and content as needed
4. 🚀 Deploy to the internet when ready

### Next Steps:
1. Customize content (update text, links, etc.)
2. Add more images or sections
3. Test on real mobile devices
4. Deploy to Vercel, Netlify, or GitHub Pages

---

## 📞 Need More Help?

If you get stuck:

1. **Check error message** - Read the terminal error carefully
2. **Google the error** - Copy-paste the error into Google
3. **Check the files** - Verify all files are in correct locations
4. **Restart everything** - Close terminal and start fresh

Good luck! 🚀 Your portfolio will be amazing!
