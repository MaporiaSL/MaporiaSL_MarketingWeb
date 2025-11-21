# MaporiaSL Marketing Website — Implementation Plan & Task List

This document contains **two sections**:

1. **Implementation Starter (Actual Build Begins Here)**
2. **Task List (Markdown Format, No Developer Separation)**

---

# 1. IMPLEMENTATION STARTER

Below is the complete scaffold + step-by-step implementation structure for beginning the build of the MaporiaSL marketing site using **Vite + React (JSX) + CSS** with the **Sunset Coastline** palette.

---

## 🔧 Project Setup

### 1. Create Vite Project

```bash
npm create vite@latest maporia-marketing --template react
cd maporia-marketing
npm install
```

### 2. Project Structure

```
/src
  /assets
  /components
    Navbar.jsx
    Footer.jsx
    Hero.jsx
    FeaturesGrid.jsx
    FeatureCard.jsx
    MockupsShowcase.jsx
    TeamSection.jsx
    CTASection.jsx
    WaitlistForm.jsx
    GoTopButton.jsx
    NotFound404.jsx
  /pages
    Home.jsx
  App.jsx
  main.jsx
  index.css
```

### 3. Add Global CSS Variables (Sunset Coastline Palette)

**index.css**:

```css
:root{
  --color-deep-navy: #0A1A2F;
  --color-sunrise-orange: #F78A1D;
  --color-coral-peach: #FFAD90;
  --color-sand-beige: #F3E5D8;
  --color-ocean-teal: #1CA8A9;

  --text-default: var(--color-deep-navy);
  --bg-default: var(--color-sand-beige);
  --radius: 12px;
  --shadow-soft: 0 10px 30px rgba(10,26,47,0.08);
}
```

### 4. Base Layout

* Create `Navbar.jsx`, `Footer.jsx` with empty placeholders
* App.jsx should render:

```jsx
<Navbar />
<main>
  <Home />
</main>
<Footer />
<GoTopButton />
```

---

# 2. TASK LIST (MARKDOWN FORMAT)

Below is the **complete build task list** formatted as a Markdown file — clean, standalone, no developer assignment.

---

# MaporiaSL Marketing Website — Task List

## 📁 Sprint 0 — Setup

* [ ] Initialize Vite React project
* [ ] Add global CSS variables (Sunset Coastline palette)
* [ ] Add fonts, CSS reset, layout containers
* [ ] Configure routing (if used)
* [ ] Create base folder structure

---

## 🧭 Sprint 1 — Header & Footer

* [ ] Implement Navbar (desktop + mobile)
* [ ] Sticky header with scroll shadow
* [ ] Smooth scroll navigation
* [ ] Placeholder Logo
* [ ] Implement Footer structure (links + project email + GitHub link)
* [ ] Add waitlist subscription placeholder in footer

---

## 🎨 Sprint 2 — Hero Section

* [ ] Create Hero component (title, subtitle, CTAs)
* [ ] Add mockup placeholder
* [ ] Fade-in animation for hero text
* [ ] Parallax small motion for mockup
* [ ] Ensure mobile-first layout

---

## 🧩 Sprint 3 — Features Overview

* [ ] Build FeatureCard component
* [ ] Build FeaturesGrid section
* [ ] Add 6–10 feature cards from the app feature list
* [ ] Add scroll reveal animation (fade-up)

---

## 📱 Sprint 4 — App Mockups Showcase

* [ ] Add 4 screens of application (placeholders)
* [ ] Build MockupsShowcase grid/carousel
* [ ] Add modal view to enlarge images
* [ ] Add mobile swipe interaction

---

## 🧑‍🚀 Sprint 5 — Team Section

* [ ] Add team member JSON data
* [ ] Build card layout
* [ ] Add GitHub + LinkedIn icons
* [ ] Add hover effects and accessibility labels

---

## 📨 Sprint 6 — Footer Subscription & CTA

* [ ] Build WaitlistForm component
* [ ] Add email validation
* [ ] Add success + error UI
* [ ] Add project email + GitHub prominently
* [ ] Add final CTA section above footer

---

## ⬆️ Sprint 7 — Go‑to‑Top Button

* [ ] Add floating button bottom‑right
* [ ] Appear after scrolling 300px
* [ ] Smooth scroll to top
* [ ] Keyboard + screen reader accessible

---

## ⚙️ Sprint 8 — Animations & Polishing

* [ ] Add scroll reveal for all sections
* [ ] Add hover transitions for all interactive elements
* [ ] Add shadow + micro‑interaction improvements
* [ ] Optimize all images to WebP
* [ ] Add basic SEO meta tags

---

## 🚨 Sprint 9 — Error / Utility Pages

* [ ] Create 404 page with link to Home
* [ ] Create simple Privacy Policy page
* [ ] Create simple Terms page
* [ ] Add robots.txt and sitemap.xml

---

## 🚀 Sprint 10 — Final QA + Deployment

* [ ] Cross-device mobile testing
* [ ] Check contrast accessibility
* [ ] Validate all outgoing links
* [ ] Confirm CTAs scroll correctly
* [ ] Deploy to Vercel/Netlify
* [ ] Run Lighthouse report
* [ ] Publish final production URL

---

# ✔️ This MD can be copy-pasted into your GitHub repo directly

If you'd like, I can also generate:

* A **README.md** for your marketing repo
* A GitHub **CONTRIBUTING.md** file
* A GitHub **Issue Template + PR Template**
* Full code scaffolding for each component next

Tell me what you want next!
