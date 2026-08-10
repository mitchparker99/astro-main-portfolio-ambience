# Mitchell Parker — Portfolio

Personal portfolio for Mitchell Parker, Technology Executive (AI & Data Architecture).
Built with [Astro](https://astro.build) and [SolidJS](https://www.solidjs.com), styled with Tailwind CSS,
with an animated gradient background.

## Pages

- `/` — name, title and focus areas
- `/work` — work and leadership experience timeline
- `/projects` — platforms designed, built and operated end-to-end
- `/about` — profile, leadership scope, education and certifications
- `/now` — what I'm working on at the moment
- `/contact` — email and socials

## Content

All content lives in `src/config.tsx` — work history, projects, socials, email,
site URL, nav routes and the about-me copy. Editing that one file updates every page.

## Structure

```
/
├── public/
│   ├── fonts/
│   ├── images/
│   ├── favicon.ico
│   ├── gradient.css
│   ├── gradient.js
│   ├── logo.svg
│   └── robots.txt
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── utils/
│   └── config.tsx
├── astro.config.mjs
└── package.json
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `pnpm install`    | Install dependencies                          |
| `pnpm dev`        | Start the local dev server at `localhost:3000`|
| `pnpm build`      | Build the production site to `./dist/`        |
| `pnpm preview`    | Preview the build locally before deploying    |

## Deployment

Deployed on Vercel as a static Astro build (`dist/`).
