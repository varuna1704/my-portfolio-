# 🛍️ Varuna Nikam - Professional Portfolio

A high-performance, modern, and conversion-focused professional portfolio website. This project is built specifically to highlight expertise as a **Shopify Developer, Frontend Developer, and AI-Assisted Developer**, detailing real-world experience managing production e-commerce stores, custom theme development, and prompt/agent prototyping.

---

## 🎯 Positioning Mandate & Primary Identity

Unlike generic software engineering portfolios, this site is engineered from the ground up to project a strong **Shopify-first** and **E-commerce optimization** identity:
*   **Core Message:** *"Experienced Shopify Developer managing real production stores, with strong frontend and AI development skills."*
*   **Tagline:** *"Building modern e-commerce experiences, scalable web apps, and AI-powered solutions."*

---

## 🚀 Key Features & Interactive Sections

### 1. Dynamic Hero & Typewriter Intro
*   **Liquid-smooth Typewriter:** Transitions dynamically through core titles: `Shopify Developer`, `Frontend Developer`, `AI-Assisted Developer`, and `E-commerce Specialist`.
*   **Quick Action Navigation:** Instantly scrolls users to `#contact` or `#resume` sections with smooth interactive button indicators.

### 2. Shopify Experience & Production Stores
*   **Store Management Timeline:** Details store administration, product listings, conversion-optimized copy, Dawn Theme modifications, and Liquid code snippets.
*   **Live Store Catalog Grid:** Displays cards representing real production stores:
    *   **Mavena** (`https://mavenaco.com/`) - Women's Fashion (direct external link ↗)
    *   **MidFox** (`https://midfox.com/`) - Pet Products (direct external link ↗)
    *   **Pawfully** - Pet Products
    *   **Retromedy** - Lifestyle Products
*   **Freelance Custom Build:** Highlights building custom Liquid sections, catalogs, responsive layout structures, and navigation flows.

### 3. Detailed Projects Grid (7 Active Projects)
Displays a full, responsive grid showing all 7 featured projects without pagination or truncation:
1.  **AI Powered Review Generator** - Node.js & React app translating reviews into analytics.
2.  **Vastra Bharat Legacy** - High-conversion Shopify store showcase.
3.  **Nashik Kumbh Mela Website** - Informational hub with high concurrent user capacity.
4.  **Online System For Farm** - Agri-tech tool for listing crops and checking real-time demand.
5.  **The Photowala** - Digital photographer portfolio and service portal.
6.  **Sales Dashboard** - Visualized metrics, customer retention graphs, and cohort charts.
7.  **Stock Predictor** - Historical dataset modeling using custom prediction lines.

### 4. Categorized Skills Toolkit
Structured progress indicators divided into 7 distinct categories with color-coded theme tags:
*   **Shopify:** Dawn Theme, Custom Liquid, Store Setup, Admin Management
*   **Frontend:** React, HTML5/CSS3, JavaScript (ES6+), Responsive Design
*   **Programming:** Java, Python, C++, Data Structures & Algorithms
*   **Databases:** MySQL, MongoDB, Firebase Firestore
*   **Cloud/AWS:** EC2, S3, IAM, CloudWatch, AWS Systems Manager
*   **AI & GenAI:** Prompt Engineering, ChatGPT API, Claude, Agent Frameworks
*   **Tools:** Git & GitHub, VS Code, Postman, Vercel

### 5. Build-Time GitHub Showcase
*   Queries the GitHub REST API during production builds (`npm run build`) using `scripts/fetch-repos.js` and writes the results to a static database file (`src/data/repos.json`).
*   Eliminates client-side runtime API calls and rate-limiting issues for search crawlers, with automated fallback recovery if the build-time call fails.

### 6. Generative AI Integration Workflow
*   Highlights prompt design patterns, context boundary management, code interpreter workflows, and rapid prototyping processes.

### 7. Status-Aware Certification Dashboard
Provides visual badges dynamically colored based on progress states:
*   `In Progress` (Amber) - *AWS Certified Cloud Practitioner*
*   `Completed` (Emerald) - *AWS re/Start Graduate*, *AWS Solutions Architecture Simulation*, *Accenture UK Tech Apprenticeship*, *Deloitte Australia Tech Job Simulation*, *Tata GenAI Powered Data Analytics*
*   `Planned` (Blue) - *Shopify Developer Certification*

### 8. Custom Interactions & Navigation
*   **Dual-Ring Custom Cursor:** An interactive cursor that expands and reacts dynamically when hovering over clickable links, buttons, and form inputs.
*   **Formspree Contact Form:** A validation-enabled form for custom queries, project requests, and email deliveries.
*   **Scrollspy Section Navigation:** A sticky header that monitors scroll position and underlines active navigation items in real-time.

---

## 🛠️ Technology Stack & Architecture

*   **Core:** React (JS) + Vite (Superfast HMR, code-splitting, and optimized production assets).
*   **Styling:** Custom Vanilla CSS inline styling system combined with `src/index.css` global animations, custom scrollbars, and media queries.
*   **Animations:** Framer Motion (page transitions, scroll reveals, and hover responses).
*   **Icons:** Lucide React (clean, lightweight vector icons).
*   **Data Generation:** Custom Node.js HTTPS build script (`scripts/fetch-repos.js`) executing during `prebuild`.

---

## ⚡ Performance, SEO & Accessibility Upgrades

This project implements modern web standards to maximize search engine indexing and ensure high-speed delivery on slow connections:

### 1. Accessibility (WCAG 2.1 AA Compliant)
*   **Color Contrast Enhancements**: Darkened primary orange buttons to `#d9531b` (`rgb(217, 83, 27)`) with white text and `fontWeight: 600`. Adjusted purple links/metadata headers to `#a78bfa`, and slate/grays to `#cbd5e1` / `#94a3b8` to pass contrast checks.
*   **Screen Reader Labels**: Added descriptive `aria-label` labels to all live links and GitHub repository code links, distinguishing them for screen reader users.

### 2. SEO & Pre-Rendering
*   **Build-time Pre-rendering**: Injected static HTML structures directly into the output `index.html` file using `vite-plugin-prerender` to display content instantly to crawlers without requiring JS execution.
*   **Static Search Helpers**: Integrated dynamic XML sitemap generation, structured `robots.txt`, Google Site Console verification head tags, and `vercel.json` SPA configurations.
*   **llms.txt**: Provided a standard `/public/llms.txt` file listing essential page directories, portfolios, and details for LLM-based crawlers.

### 3. Loading Speed & LCP (Largest Contentful Paint)
*   **Code Splitting**: Implemented route-based lazy loading inside `App.jsx` utilizing `React.lazy` and `Suspense` to split bundle sizes and prevent non-critical assets from delaying home page renders.
*   **Fetch Priority**: Appended `fetchPriority="high"` to the professional headshot image to instruct browsers to load above-the-fold media elements first.
*   **System Fonts Fallback**: Applied system font lists in CSS (`system-ui`, `-apple-system`, etc.) to prevent text flicker during font downloads.

---

## 📁 Project Structure

```text
my-portfolio/
├── public/
│   ├── images/               # Optimized WebP assets and project thumbnails
│   ├── llms.txt              # LLM crawler directory/index file
│   ├── sitemap.xml           # SEO Sitemap
│   └── robots.txt            # Search engine directives
├── scripts/
│   └── fetch-repos.js        # Build-time GitHub API fetch script
├── src/
│   ├── components/           # Modular React components
│   │   ├── Cursor.jsx        # Dual-ring cursor tracker
│   │   ├── AboutSection.jsx  # Personal bio, stats, and What I Do cards
│   │   ├── Portfolio.jsx     # Experience, Stores, Projects, Skills, Certifications
│   │   ├── ContactSection.jsx# Contact form and Formspree integration
│   │   └── ServicesSection.jsx# Shopify development services catalog
│   ├── data/
│   │   ├── projects.json     # Content database for the 7 projects
│   │   └── repos.json        # Static GitHub repository cache (built pre-compilation)
│   ├── styles/
│   │   └── projects.css      # Core grid styles for projects
│   ├── App.jsx               # Route lazy-loading, Navigation bar, and page composition
│   ├── main.jsx              # Application mount and rendering bootstrap
│   └── index.css             # Base styles, global animations, system font fallbacks
├── vercel.json               # SPA routing rewrite rule configs
├── vite.config.js            # Vite bundler options
├── package.json              # Project dependencies, prebuild script declarations
└── README.md                 # Detailed documentation
```

---

## ⚡ Getting Started & Installation

### Prerequisites
*   **Node.js** (v18 or higher recommended)
*   **npm** (bundled with Node)

### Local Development Setup

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/varuna1704/my-portfolio-.git
    cd my-portfolio-
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env.local` file in the root directory and add your Formspree ID:
    ```env
    VITE_FORMSPREE_ID=your_formspree_endpoint_id
    ```

4.  **Start Development Server:**
    ```bash
    npm run dev
    ```
    Open `http://localhost:5173/` in your browser.

---

## 📦 Build & Deployment

To build the project for production deployment:

```bash
npm run build
```

The output build files will be generated in the `dist/` directory. These assets are static and can be deployed directly to hosts like **GitHub Pages**, **Vercel**, **Netlify**, or **Hostinger**.

---

## ✉️ Contact & Inquiries

For project collaboration or e-commerce development requests, reach out via the contact form on the website or directly at:
*   **Email:** nikamvaruna@gmail.com
*   **LinkedIn:** [linkedin.com/in/varunanikam-200255255](https://linkedin.com/in/varunanikam-200255255)

---
*Developed with focus and precision by Varuna Nikam*
