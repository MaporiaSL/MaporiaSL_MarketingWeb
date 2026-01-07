# Maporia Marketing Website - Implementation Plan

## Project Overview
**Goal:** Create a modern, high-performance marketing landing page for the "Maporia" mobile app (Sri Lanka Travel Portfolio).
**Tech Stack:** Next.js (App Router), Tailwind CSS, Framer Motion (for animations/live components).
**Design Aesthetic:** "Glassmorphism", modern, premium, video background loops, dynamic interactions.
**Target Audience:** Sri Lankan travelers and explorers.

## Key Sections
1.  **Hero Section**:
    -   Background: Looping video of beautiful Sri Lankan scenery.
    -   Glassy overlay with Headline: "Unlock Sri Lanka, One District at a Time".
    -   Call to Action (CTA): "Join Waitlist".
2.  **About / Vision**:
    -   Brief explanation of the "Gamified Travel" concept (Clouds, Unlocking districts).
3.  **Features List**:
    -   Interactive cards showing: Map Unlocking, Achievements, Trip Planning, Social Sharing.
4.  **Building Team**:
    -   Showcase the "Maporia" team members.
5.  **Survey / Help Request**:
    -   "Help us build better" CTA connecting to a Google Form.
6.  **Waitlist / Questionnaire**:
    -   Email subscription form.
    -   Mini Q&A about travel preferences.
7.  **FAQ**:
    -   Common questions (Is it free? Android/iOS? etc.).
8.  **Contact & Footer**:
    -   Social links, copyright, contact info.

## Technical Requirements
-   **Framework**: Next.js 14+ (App Router).
-   **Styling**: Tailwind CSS + Custom "Glass" utilities.
-   **Animations**: Framer Motion for scroll reveals and hover effects.
-   **Icons**: Lucide React or similar.
-   **Forms**: Simple state management for the waitlist (mockup or local storage for now, unless backend specified).

## Step-by-Step Implementation

### Phase 1: Setup & Design System
- [ ] Install dependencies (`framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`).
- [ ] Configure Tailwind for custom colors (Sri Lankan inspired palettes) and "glass" utilities.
- [ ] Set up global layout and fonts (modern sans-serif).

### Phase 2: Core Components
- [ ] Create `Hero` component with video background.
- [ ] Create `GlassCard` reusable component.
- [ ] Create `Section` wrapper for consistent spacing.

### Phase 3: Section Implementation
- [ ] **Hero**: Implement video loop and main text.
- [ ] **About**: creating the "Gamification" visual explanation.
- [ ] **Features**: Grid of glass cards describing app features.
- [ ] **Team**: Avatar/Profile cards for the team.
- [ ] **Survey/Waitlist**: Interactive forms/buttons.
- [ ] **FAQ/Footer**: Accordion for FAQs and standard footer.

### Phase 4: Polish & SEO
- [ ] Add smooth scrolling and entrance animations.
- [ ] Update Metadata (Title, Description, OpenGraph).
- [ ] responsive check (Mobile view is critical).

## Questions for User
-   Do you have the specific video file for the background? (I can use a placeholder)
-   Do you have the team member details (Names, Roles, Images)?
-   Google Form URL for the survey?
