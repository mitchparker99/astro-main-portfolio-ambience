Simple portfolio made in `Astro` and `Solidjs`

you can view a demo [here](https://astro-main-portfolio-ambience.netlify.app)

<img src="https://" width="80%" />

## Features 🔥

- [x] SSG
- [x] Responsive
- [x] Sitemap
- [x] Good lighthouse Score
- [x] Blog RSS feed
- [x] Work projects page
- [x] Smooth page transition (this might not work since it use browser API)

In order to disable a pages you need to prefix the file name with an `_` (e.g.: `about.astro` -> `_about.astro`)

## Structure

```
/
├── public/
│   ├── fonts/
│   ├── favicon.ico
│   ├── logo.svg
│   └── robots.txt
├── src/
│   ├── components/
│   ├── content/
│   │   |  blog/
│   │   |    └── some-blog-posts.md
│   │   └── config.ts
│   ├── layouts/
│   └── pages/
│   └── utils/
│   └── config.ts
└── config.ts // you can set all social links, email and other info here
└── package.json
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |
