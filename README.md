# MAPORIA Web (Refactored)

MAPORIA is a gamified travel companion concept for exploring Sri Lanka. This refactored web landing experience introduces a light green exploration theme and modular component architecture.

## What Changed In The Refactor
- Light Green Theme: New semantic design tokens in `src/theme.css` replace previous dark teal palette.
- Modular Components: `Navbar`, `Hero`, `FeaturesSection`, `TeamSection`, `Footer`, and `MapPhoneMockup` extracted to `src/components/` for clarity and reuse.
- Simplified Global Styles: `App.css` now focuses on semantic classes; `index.css` reduced to a minimal reset.
- Map Mockup: Phone + map visualization updated to match light palette and softer shadows.
- Feature Cards & Team Carousel: Updated colors, hover interactions, and accessibility labels.

## Project Structure
```
src/
	App.jsx            # Composes page layout
	App.css            # Main component/class styles (light theme variants)
	theme.css          # Design tokens (CSS variables)
	index.css          # Minimal reset
	components/
		Navbar.jsx
		Hero.jsx
		FeaturesSection.jsx
		FeatureCard.jsx
		MapPhoneMockup.jsx
		TeamSection.jsx
		TeamMember.jsx
		Footer.jsx
```

## Design Tokens (theme.css)
Tokens are prefixed with `--color-` for palette and `--shadow-*`, `--radius-*` for shape/elevation.
Update or extend by editing `src/theme.css`.

## Running Locally
```bash
npm install
npm run dev
```
Visit the reported local URL (usually `http://localhost:5173`).

## Next Steps / Roadmap Placeholders
- Integrate real feature data from the attached features list (pending details).
- Add responsive mobile menu slide-out.
- Replace inline styles with utility classes or CSS modules for remaining components.
- Consider theming toggle (light/dark) using token layering.

## Contributing
Keep changes focused and align with existing semantic class patterns. Prefer modifying tokens over scattering new hex codes.

---
If you provide the exact Features list from the attachment, placeholders can be expanded with richer copy or dynamic loading.
