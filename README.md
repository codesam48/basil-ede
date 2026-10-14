# Basil Chinogonum Ede, portfolio

One-page portfolio built with React 18 and Vite. Dark charcoal theme with a green primary color.

## Run it

You need Node.js 20.19 or newer (22 LTS works too).

```bash
npm install
npm run dev      # local preview at http://localhost:5173
npm run build    # production build in /dist
```

Upload the contents of `dist/` to any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages).

## Where things are

- `src/data.js` holds all the text: bio, details, skills, contact info. Edit here first.
- `src/components/` has one file per section (Header, Hero, About, Skills, Contact, Footer).
- `src/styles.css` has all styling. Colors are the variables at the top (`--primary` is the green).
- `src/assets/basil.jpg` is the profile photo. Replace it with another square image to change it.

## Adding projects later

1. Fill the `projects` array in `src/data.js` (title, description, tech, GitHub and demo links).
2. Create `src/components/Projects.jsx`, modelled on `Skills.jsx`.
3. Render `<Projects />` in `src/App.jsx` between Skills and Contact, and add it to `links` in `Header.jsx` and `SECTIONS` in `App.jsx`.

The same steps apply to Achievements and Certifications.

## Contact form

The form does not send email yet. It builds a message to copy. To receive messages, connect it to a
form service such as Formspree or Web3Forms inside `submit()` in `src/components/Contact.jsx`.
