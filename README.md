# Dinesh — Next.js Portfolio

A separate Next.js App Router portfolio with a cobalt blue / warm ivory theme. Includes the supplied portrait and outdoor photo, all six projects, experience, a contact form, and a link to the React.js edition.

## Run locally

Use Node.js 20.9+ (a recent LTS is recommended).

```bash
npm ci
npm run dev
```

Visit http://localhost:3000. For production:

```bash
npm run build
```

This is a static export. Deploy the generated `out` directory to a static host. `next start` is not used with static export.

## Structure

- `app/layout.jsx`: metadata and global layout
- `app/page.jsx`: App Router page
- `app/globals.css`: responsive layout, artwork, theme and animations
- `components/Portfolio.jsx`: sections and navigation
- `components/Motion.jsx`: scroll-linked project stacking, text highlighting and rotating markers
- `components/ProjectVisual.jsx`: illustrative project artwork
- `components/ContactForm.jsx`: FormSubmit email form
- `data/portfolio.js`: profile and project content
- `public/`: both photos

## Customize

Update projects and email in `data/portfolio.js`. Change `REACT_URL` in `components/Portfolio.jsx` for your React deployment. Angular remains Coming soon. Edit the CSS variables at the top of `app/globals.css` for colors. Mobile uses normal flowing project cards; desktop uses stacked sticky chapters. Reduced-motion settings remove animation and stacking.

The form forwards submissions through FormSubmit to dineshsenthil02@gmail.com. Recipient activation is required; follow the Activate Form email and test inbox delivery on your deployment. Changing domains may require reactivation. A successful API response indicates acceptance, not proof of inbox delivery. Inputs are retained on errors. No email secrets are bundled.

Google Fonts is optional at runtime; system fonts provide fallback. Project illustrations are concepts, not employer screenshots. The archive includes source, photos, lockfile, instructions and the static production output, but excludes dependencies, hosting identity and credentials.
