# 🗑️ QUICK CLEANUP CHECKLIST

## SAFE TO DELETE (No Risk)

### Build & Cache Folders
- [ ] `node_modules/` folder (regenerate with: npm install)
- [ ] `dist/` folder (regenerate with: npm run build)
- [ ] `build/` folder
- [ ] `.vite/` folder
- [ ] `.cache/` folder
- [ ] `.parcel-cache/` folder
- [ ] `.next/` folder

### Backup & Old Files
- [ ] `*-old.jsx` (old React files)
- [ ] `*-backup.jsx` (backup files)
- [ ] `*-old.css` (old stylesheets)
- [ ] `*-backup.css` (backup CSS)
- [ ] `*.bak` (backup files)
- [ ] `projects-dark-theme-SIMPLE.css` (if not using)
- [ ] `OLD_README.md` (if have README.md)
- [ ] `HELP_ME.txt`
- [ ] `SETUP_GUIDE_OLD.md`
- [ ] `NOTES.md`
- [ ] `TODO.md`

### Log & Temporary Files
- [ ] `*.log` (log files)
- [ ] `npm-debug.log`
- [ ] `yarn-error.log`
- [ ] `debug.log`
- [ ] `error.log`
- [ ] `*.tmp` (temporary files)
- [ ] `*.swp` (Vim swap)
- [ ] `*.swo` (Vim swap)

### System Files
- [ ] `.DS_Store` (Mac metadata)
- [ ] `Thumbs.db` (Windows metadata)
- [ ] `*.orig` (merge conflict)

### Duplicate Headshots (Keep only these 3)
- [ ] Delete: `varuna-headshot-professional-blue.jpg`
- [ ] Delete: `varuna-headshot-professional-gray.jpg`
- [ ] Delete: `varuna-headshot-professional-white.jpg`
- [ ] Keep: `varuna-headshot-professional-dark.jpg` ✓
- [ ] Keep: `varuna-headshot-square-linkedin.jpg` ✓
- [ ] Keep: `varuna-headshot-enhanced-blue.jpg` ✓

### Unused Test/Example Files
- [ ] `example-data.json` (if have real data)
- [ ] `sample-*.json`
- [ ] `demo-*.jsx`
- [ ] `test-data.json` (if not using)
- [ ] `mock-data.json` (if not using)

---

## ⚠️ DELETE WITH CAUTION

- [ ] Old component files (only if not using)
- [ ] Old CSS versions (only if not using)
- [ ] Unused documentation (keep README.md)
- [ ] `.vscode/` (only if not using VS Code)
- [ ] `.idea/` (only if not using IntelliJ)

---

## 🔴 DO NOT DELETE (CRITICAL!)

- ✓ `.env.local` (has FORMSPREE_ID=myknpnzn) - **IF DELETED, CONTACT FORM BREAKS!**
- ✓ `package.json` (dependency list)
- ✓ `package-lock.json` (usually keep)
- ✓ `.gitignore` (Git rules)
- ✓ `README.md` (documentation)
- ✓ `vite.config.js` (build config)
- ✓ `.eslintrc.json` (linting)
- ✓ `.prettierrc` (formatting)
- ✓ `src/` folder (all your code)
- ✓ `public/` folder (all images)
- ✓ `components/` folder (React components)
- ✓ `styles/` folder (CSS files)
- ✓ All `.jsx` files (React components)
- ✓ All `.css` files (stylesheets)
- ✓ `data/` folder (JSON data)

---

## 📊 QUICK REFERENCE

| File/Folder | Safe to Delete? | Notes |
|------------|-----------------|-------|
| `node_modules/` | ✅ YES | Regenerate: npm install |
| `dist/` | ✅ YES | Regenerate: npm run build |
| `build/` | ✅ YES | Regenerate: npm run build |
| `.cache/` | ✅ YES | Auto-regenerated |
| `*.log` | ✅ YES | Always safe |
| `*.bak` | ✅ YES | Backup files |
| `*-old.jsx` | ✅ YES | Old versions |
| `.DS_Store` | ✅ YES | Mac metadata |
| `Thumbs.db` | ✅ YES | Windows metadata |
| Duplicate headshots | ✅ YES | Keep only 3 versions |
| `.env.local` | ❌ NO | **CRITICAL! Has FORMSPREE_ID** |
| `package.json` | ❌ NO | Dependency list |
| `src/` folder | ❌ NO | All your code |
| `public/` folder | ❌ NO | All your images |
| All `.jsx` files | ❌ NO | React components |
| All `.css` files | ❌ NO | Stylesheets |

---

## 🚀 CLEANUP IN ORDER

### Priority 1: Delete Big Folders (Saves Space)
```bash
# Delete node_modules (can regenerate)
rm -r node_modules/

# Delete build output
rm -r dist/
rm -r build/
```

### Priority 2: Delete Duplicate Headshots
```bash
# Keep: dark, square, enhanced
# Delete the others:
rm varuna-headshot-professional-blue.jpg
rm varuna-headshot-professional-gray.jpg
rm varuna-headshot-professional-white.jpg
```

### Priority 3: Delete Log/Temp Files
```bash
# Delete all log files
rm *.log
rm npm-debug.log

# Delete temp files
rm -r .cache/
rm .DS_Store
rm Thumbs.db
```

### Priority 4: Delete Old Code Files
```bash
# Delete old/backup files
rm *-old.jsx
rm *-backup.jsx
rm *-old.css
```

### Priority 5: Regenerate node_modules
```bash
# After deletion, regenerate:
npm install
```

---

## ✅ AFTER CLEANUP

Verify:
- [ ] `node_modules/` regenerated successfully (npm install worked)
- [ ] `dist/` folder deleted
- [ ] No more `*.log` files
- [ ] No duplicate headshots
- [ ] No `*-old.*` or `*-backup.*` files
- [ ] `.env.local` still exists
- [ ] All important files present
- [ ] Run `npm run build` - works correctly
- [ ] Run `npm run dev` - works correctly
- [ ] Website still functions properly

---

## 🎯 SEND TO ANTIGRAVITY

```
Before organizing files, please clean up:

DELETE (Safe):
✓ node_modules/ (regenerate with: npm install)
✓ dist/ folder
✓ *.log files
✓ .DS_Store
✓ Thumbs.db
✓ Duplicate headshots (keep dark + square + enhanced)
✓ *-old.* files
✓ *-backup.* files
✓ Unused documentation

DO NOT DELETE:
✓ .env.local (CRITICAL - has FORMSPREE_ID)
✓ package.json
✓ All src/ files
✓ All public/images/ files
✓ All components and styles

After cleanup:
1. Run: npm install
2. Test: npm run dev
3. Then reorganize into proper structure

Let me know when done!
```

---

## 💾 BEFORE CLEANUP - BACKUP!

Before deleting anything:
1. **Backup your project folder**
2. **Commit to Git** (git add . && git commit -m "before cleanup")
3. **Then delete**

If something goes wrong:
- Restore from backup
- Or: git reset (undo recent changes)

---

**Safe cleanup checklist ready! ✨**

For detailed information: See CLEANUP_UNWANTED_FILES_GUIDE.md
