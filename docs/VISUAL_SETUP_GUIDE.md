# 📊 Visual Setup Guide

## 🎯 Quick Overview Diagram

```
┌─────────────────────────────────────────────────────┐
│                   YOUR JOURNEY                       │
└─────────────────────────────────────────────────────┘

STEP 1: Install Node.js
    ↓
STEP 2: Create React Project
    ↓
STEP 3: Create Folders (public/images, src/components)
    ↓
STEP 4: Copy Profile Image → public/images/profile.png
    ↓
STEP 5: Copy Portfolio Component → src/components/Portfolio.jsx
    ↓
STEP 6: Update App.jsx to import Portfolio
    ↓
STEP 7: Run "npm run dev"
    ↓
STEP 8: Open http://localhost:5173/
    ↓
🎉 DONE! Portfolio is running with your image!
```

---

## 📁 Folder Structure (Visual)

```
my-portfolio/
│
├── 📁 public/
│   ├── index.html
│   ├── favicon.ico
│   └── 📁 images/
│       └── 🖼️  profile.png          ← YOUR IMAGE GOES HERE
│
├── 📁 src/
│   ├── App.jsx                       ← EDIT THIS FILE
│   ├── 📁 components/
│   │   └── 📄 Portfolio.jsx          ← COPY portfolio-with-image.jsx HERE
│   └── main.jsx
│
├── package.json
├── vite.config.js
├── .gitignore
└── README.md
```

---

## ⌨️ Command Line Guide

### What is a "Terminal"?
A terminal is where you type commands. Open it:
- **Windows:** Press `Win + R`, type `cmd`, press Enter
- **Mac:** Press `Cmd + Space`, type `terminal`, press Enter
- **Linux:** Press `Ctrl + Alt + T`

### Basic Commands Explained

```bash
# Create a folder
mkdir folder-name

# Navigate into a folder
cd folder-name

# Go back one folder level
cd ..

# List all files in current folder
ls              # Mac/Linux
dir             # Windows

# Copy a file
cp source.txt destination/
cp profile.png public/images/

# Show current location
pwd

# Clear the screen
clear           # Mac/Linux
cls             # Windows
```

---

## 🔧 Option A: Quick Setup (Vite + Recommended)

### Copy-Paste This Into Terminal (Line by Line):

```bash
# Step 1: Create project
npm create vite@latest my-portfolio -- --template react

# Step 2: Enter project folder
cd my-portfolio

# Step 3: Install dependencies
npm install

# Step 4: Create folders
mkdir -p public/images
mkdir -p src/components
```

Then:
1. Copy `profile.png` to `public/images/` folder
2. Copy `portfolio-with-image.jsx` to `src/components/Portfolio.jsx`
3. Update `src/App.jsx` with code below:

```jsx
import Portfolio from './components/Portfolio';

function App() {
  return <Portfolio />;
}

export default App;
```

4. Run server:
```bash
npm run dev
```

5. Open browser: `http://localhost:5173/`

---

## 🔧 Option B: Create React App

### Copy-Paste This Into Terminal:

```bash
# Step 1: Create project
npx create-react-app my-portfolio

# Step 2: Enter project folder
cd my-portfolio

# Step 3: Create folders
mkdir -p public/images
mkdir -p src/components
```

Then:
1. Copy `profile.png` to `public/images/` folder
2. Copy `portfolio-with-image.jsx` to `src/components/Portfolio.jsx`
3. Update `src/App.js`:

```jsx
import Portfolio from './components/Portfolio';

function App() {
  return <Portfolio />;
}

export default App;
```

4. Run server:
```bash
npm start
```

5. Browser opens automatically (usually `http://localhost:3000/`)

---

## 📋 Step-by-Step Checklist

### ✅ Pre-Setup
- [ ] Download profile image (profile.png)
- [ ] Download portfolio-with-image.jsx
- [ ] Install Node.js from nodejs.org
- [ ] Verify Node.js: Open terminal, type `node -v`

### ✅ Project Creation
- [ ] Open terminal in desired location
- [ ] Run: `npm create vite@latest my-portfolio -- --template react`
- [ ] Run: `cd my-portfolio`
- [ ] Run: `npm install`

### ✅ File Setup
- [ ] Create `public/images/` folder
- [ ] Copy `profile.png` into `public/images/`
- [ ] Create `src/components/` folder
- [ ] Copy `portfolio-with-image.jsx` to `src/components/Portfolio.jsx`

### ✅ Code Update
- [ ] Open `src/App.jsx`
- [ ] Replace with Portfolio import code (see above)
- [ ] Save file

### ✅ Verification
- [ ] Terminal still open in project folder
- [ ] Run: `npm run dev`
- [ ] No errors in terminal
- [ ] Open browser to `http://localhost:5173/`
- [ ] Portfolio loads with profile image

### ✅ Testing
- [ ] Image visible in Hero section
- [ ] Image on right side (desktop)
- [ ] Image below text (mobile/narrow window)
- [ ] Hover animation works (image moves up)
- [ ] All navigation links work
- [ ] All sections visible (Skills, Experience, etc.)

---

## 🖥️ Windows Step-by-Step (Screenshots)

### 1. Open Command Prompt
```
Press: Win + R
Type: cmd
Press: Enter
```

### 2. Check Node.js
```
Type: node -v
Press: Enter
Should show: v16.x.x (or higher)
```

### 3. Navigate to Desktop
```
Type: cd Desktop
Press: Enter
```

### 4. Create Project
```
Type: npm create vite@latest my-portfolio -- --template react
Press: Enter
When asked "Need to install...?" type: y
Press: Enter
```

### 5. Go Into Project
```
Type: cd my-portfolio
Press: Enter
```

### 6. Install Dependencies
```
Type: npm install
Press: Enter
Wait for it to finish (takes 2-3 minutes)
```

### 7. Create Folders
```
Type: mkdir public\images
Press: Enter

Type: mkdir src\components
Press: Enter
```

### 8. Copy Files (Using File Explorer)
- Open File Explorer
- Navigate to Downloads (where profile.png is)
- Copy `profile.png`
- Go to: `Desktop/my-portfolio/public/images/`
- Paste it
- Copy `portfolio-with-image.jsx`
- Go to: `Desktop/my-portfolio/src/components/`
- Paste it and rename to `Portfolio.jsx`

### 9. Edit App.jsx (Using Notepad or VS Code)
- Open: `Desktop/my-portfolio/src/App.jsx`
- Replace entire content with:
```jsx
import Portfolio from './components/Portfolio';

function App() {
  return <Portfolio />;
}

export default App;
```
- Save

### 10. Start Server (Back in Command Prompt)
```
Type: npm run dev
Press: Enter
```

### 11. Open Browser
- Copy the URL shown in terminal (usually `http://localhost:5173/`)
- Open browser
- Paste URL in address bar
- Press Enter

---

## 🍎 Mac Step-by-Step

### 1. Open Terminal
```
Press: Cmd + Space
Type: terminal
Press: Enter
```

### 2. Check Node.js
```
Type: node -v
Press: Enter
Should show: v16.x.x (or higher)
```

### 3. Navigate to Desktop
```
Type: cd Desktop
Press: Enter
```

### 4. Create Project
```
Type: npm create vite@latest my-portfolio -- --template react
Press: Enter
When asked "Need to install...?" type: y
Press: Enter
```

### 5. Continue from Step 5 (Windows guide above)

---

## 🐧 Linux Step-by-Step

Same as Mac, but open terminal with:
```
Press: Ctrl + Alt + T
```

---

## 🚨 Error Messages & Fixes

### Error: "npm: command not found"
**Solution:** Node.js not installed
```bash
# Visit nodejs.org and install
# Then restart terminal
node -v  # Should show version
```

### Error: "Port 5173 already in use"
**Solution:** Use different port
```bash
npm run dev -- --port 3000
```

### Error: "Cannot find module Portfolio"
**Solution:** Check file location
```bash
# Verify file exists:
ls src/components/Portfolio.jsx   # Mac/Linux
dir src\components\Portfolio.jsx  # Windows

# If not there, copy it:
cp portfolio-with-image.jsx src/components/Portfolio.jsx
```

### Error: "Image not loading"
**Solution:** Check image path
```bash
# Verify file exists:
ls public/images/profile.png      # Mac/Linux
dir public\images\profile.png     # Windows

# Filename must be exactly: profile.png
# Location must be: public/images/
```

---

## 💡 Useful Keyboard Shortcuts

### In Terminal:
- `Up Arrow` - Shows previous command
- `Ctrl + C` - Stop running process (kills dev server)
- `Ctrl + L` - Clear screen
- `Tab` - Auto-complete path

### In Browser (DevTools):
- `F12` - Open developer tools
- `Ctrl + Shift + I` - Open inspector
- `Ctrl + Shift + R` - Hard refresh (clears cache)
- `Cmd + Shift + R` - Hard refresh (Mac)

### In Code Editor (VS Code):
- `Ctrl + S` - Save file
- `Ctrl + K + W` - Close all tabs
- `Ctrl + /` - Comment/uncomment
- `Alt + Up/Down` - Move line up/down

---

## 📚 File Descriptions

### App.jsx
- **What it is:** Main component of your app
- **What to do:** Import Portfolio component here
- **Location:** `src/App.jsx`

### Portfolio.jsx
- **What it is:** Your entire portfolio website
- **What to do:** Copy from portfolio-with-image.jsx
- **Location:** `src/components/Portfolio.jsx`

### profile.png
- **What it is:** Your profile photo
- **What to do:** Place in public/images folder
- **Location:** `public/images/profile.png`

### package.json
- **What it is:** Project configuration
- **What to do:** DON'T EDIT (unless you know what you're doing)
- **Location:** Project root

### vite.config.js
- **What it is:** Vite configuration
- **What to do:** DON'T EDIT (unless you know what you're doing)
- **Location:** Project root

---

## ✨ Success Indicators

You'll know it's working when:

1. ✅ Terminal shows: `Local: http://localhost:5173/`
2. ✅ No error messages in terminal
3. ✅ Browser opens with portfolio page
4. ✅ Your profile image visible on the right (desktop)
5. ✅ Image has rounded corners and glow effect
6. ✅ Hovering over image makes it move up
7. ✅ Navigation menu works
8. ✅ All sections scrollable

---

## 🎯 Next: Customization

Once it's running, you can:
1. Change colors (orange to your color)
2. Edit text content
3. Add more sections
4. Deploy to the internet

---

## 📞 Getting Help

If stuck:
1. **Read error message** in terminal carefully
2. **Google the error** (copy exact error text)
3. **Check file paths** are correct
4. **Restart everything** - close terminal, start fresh
5. **Ask ChatGPT** - paste your error message

---

Good luck! You're almost there! 🚀
