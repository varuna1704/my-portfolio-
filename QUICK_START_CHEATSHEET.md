# ⚡ QUICK START CHEAT SHEET

## 🚀 The Fastest Way to Run Your Portfolio

### IN 5 MINUTES - Copy & Paste Commands

**Open Terminal/Command Prompt and run these commands one at a time:**

```bash
# 1. Create new React project
npm create vite@latest my-portfolio -- --template react

# 2. Enter the project
cd my-portfolio

# 3. Install dependencies
npm install

# 4. Create image folder
mkdir -p public/images

# 5. Create components folder
mkdir -p src/components
```

**Then:**
1. Copy `profile.png` → `my-portfolio/public/images/`
2. Copy `portfolio-with-image.jsx` → `my-portfolio/src/components/Portfolio.jsx`
3. Edit `my-portfolio/src/App.jsx` - Replace with:

```jsx
import Portfolio from './components/Portfolio';

function App() {
  return <Portfolio />;
}

export default App;
```

**Finally:**
```bash
npm run dev
```

**Open browser:** `http://localhost:5173/`

---

## 📋 CHECKLIST

- [ ] Node.js installed? (Check: `node -v`)
- [ ] Project created? (`npm create vite...`)
- [ ] Folders created? (`mkdir -p public/images`)
- [ ] `profile.png` copied to `public/images/`?
- [ ] `portfolio-with-image.jsx` copied to `src/components/Portfolio.jsx`?
- [ ] `App.jsx` updated?
- [ ] Dev server running? (`npm run dev`)
- [ ] Browser opened? (`http://localhost:5173/`)
- [ ] Portfolio visible with image?

---

## 🚨 QUICK FIXES

| Problem | Fix |
|---------|-----|
| Image won't show | Check: `public/images/profile.png` exists |
| Port in use | Run: `npm run dev -- --port 3000` |
| Component not found | Check file at: `src/components/Portfolio.jsx` |
| Styling broken | Press: `Ctrl + Shift + R` (hard refresh) |
| Can't install | Delete `node_modules`, run: `npm install` |

---

## 📁 FILE LOCATIONS

```
public/images/profile.png           ← Your photo
src/components/Portfolio.jsx        ← Copy portfolio-with-image.jsx here
src/App.jsx                         ← Import Portfolio component
```

---

## 🎯 SUCCESS = See This

✅ Terminal shows: `Local: http://localhost:5173/`
✅ Browser loads portfolio page
✅ Image visible on right side (desktop)
✅ Image animates on hover
✅ No errors in terminal

---

## 💾 COMMANDS CHEAT SHEET

```bash
# Create project
npm create vite@latest my-portfolio -- --template react

# Enter project
cd my-portfolio

# Install dependencies
npm install

# Create folders
mkdir -p public/images src/components

# Copy files (from Downloads, for example)
cp ~/Downloads/profile.png public/images/
cp ~/Downloads/portfolio-with-image.jsx src/components/Portfolio.jsx

# Start development server
npm run dev

# Stop server
Ctrl + C

# Build for production
npm run build

# Delete and reinstall
rm -rf node_modules package-lock.json
npm install
```

---

## 🔗 IMPORTANT LINKS

- **Node.js:** https://nodejs.org/
- **Vite Docs:** https://vitejs.dev/
- **React Docs:** https://react.dev/
- **Your Portfolio File:** `portfolio-with-image.jsx`

---

## 🎨 AFTER SETUP - CUSTOMIZATION

Once running, customize in `src/components/Portfolio.jsx`:

### Change Colors
Find these values and replace:
- `#ff6b35` = Orange → Your color
- `#7c3aed` = Purple → Your color

### Change Text
Find these sections:
- "Varuna Nikam" → Your name
- "Shopify Developer" → Your title
- Update email, links, content

### Change Image
Change this line (in Portfolio.jsx):
```jsx
src="/images/profile.png"
```
To your image path.

---

## 🆘 IF SOMETHING GOES WRONG

1. **Read the error** in terminal carefully
2. **Google the error** (copy exact text)
3. **Close terminal** (Ctrl + C)
4. **Delete node_modules:** `rm -rf node_modules package-lock.json`
5. **Start fresh:** `npm install` then `npm run dev`

---

## 📞 HELP RESOURCES

- **Official React Docs:** https://react.dev/
- **Vite Troubleshooting:** https://vitejs.dev/guide/troubleshooting.html
- **Stack Overflow:** Search your error there
- **ChatGPT:** Paste your error message

---

## ✨ YOU'RE READY!

Just follow the 5-minute setup above and your portfolio will be running!

**Questions?** Check `STEP_BY_STEP_SETUP.md` or `VISUAL_SETUP_GUIDE.md`

**Good luck! 🚀**

---

## 📱 TESTING

**Desktop:** Browser at full width (1200px+)
**Mobile:** Resize browser window to <640px width

**Image should:**
- Appear right side (desktop) / below text (mobile)
- Have rounded corners and shadow
- Move up on hover
- Show glow effect

---

## 🎁 BONUS: Deploy to Internet

Once working locally, deploy free:

### Vercel (Easiest)
```bash
npm install -g vercel
vercel
# Follow prompts, your site is live!
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy
# Follow prompts, your site is live!
```

### GitHub Pages
1. Create GitHub account
2. Create repository
3. Push code to GitHub
4. Enable GitHub Pages in settings
5. Your site is at: `yourusername.github.io`

---

**This is your complete quick-start guide!**
**Save this file for reference.**
