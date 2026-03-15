# Varuna Nikam - Professional Portfolio

A high-performance, modern, and data-driven portfolio website built for showcase and conversion. 

## 🚀 Overview
This portfolio is designed to highlight expertise in Shopify development, e-commerce optimization, and data analytics. It features a sleek dark-themed design with interactive animations and a fully functional contact system.

## ✨ Key Features
- **Modern Dark Theme**: Professional aesthetic using a customized color palette.
- **Dynamic Content**: Data-driven sections (Projects, Services, Testimonials) powered by structured JSON.
- **Interactive UI**: Staggered animations, hover effects, and responsive glassmorphism components.
- **Formspree Integration**: Fully functional contact form with automated validation and submission.
- **Responsive Design**: Optimized for mobile, tablet, and desktop viewing.

## 📁 Project Structure
```text
my-portfolio/
├── docs/               # Detailed setup & development guides
├── public/
│   └── images/         # Optimized assets (headshots, projects, case-studies)
├── src/
│   ├── components/     # Modular React components
│   ├── data/           # JSON data files for content management
│   ├── services/       # API and backend service logic (Formspree)
│   ├── styles/         # Global variables and animations
│   ├── config/         # Application-level configuration
│   └── App.jsx         # Main application entry
├── .env.local          # Environment secrets (FORMSPREE_ID)
└── vite.config.js      # Build configuration
```

## 🛠️ Getting Started

### Prerequisites
- Node.js (v16+)
- npm

### Installation
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create your `.env.local` file:
   ```env
   VITE_FORMSPREE_ID=your_id_here
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## 📦 Build & Deploy
To create a production-ready build:
```bash
npm run build
```
The output will be in the `dist/` folder, ready to be deployed to Vercel, Netlify, or GH Pages.

## 📞 Contact
For inquiries, please reach out via the contact form on the site or at **nikamvaruna@gmail.com**.

---
*Created with ❤️ by Varuna Nikam*
