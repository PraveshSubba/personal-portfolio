# Personal Portfolio — Next.js + TypeScript

Professional, accessible, and responsive personal portfolio built with Next.js (App Router), TypeScript and Tailwind CSS. This repository contains a modular component library and page sections that make it simple to personalize content, showcase projects, and deploy to any Next.js-compatible hosting platform.

## Highlights

- Clean, responsive design with sections for Hero, About, Projects, Skills and Contact.
- Reusable UI primitives in `components/ui/` and higher-level page sections in `components/`.
- Theme toggle (light / dark) and accessible interaction patterns.
- Built with modern Next.js conventions (App Router) and TypeScript.

## Live Demo

Add your deployment URL here when available (e.g., Vercel):

> https://your-portfolio-url.example

## Quick Start

### Prerequisites

- Node.js 16+ (LTS recommended)
- npm, pnpm or yarn

### Install dependencies

```bash
npm install
# or
pnpm install
# or
yarn install
```

### Run (development)

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

### Build (production)

```bash
npm run build
npm run start
```

## Project Structure (overview)

- `app/` — Next.js App Router entry, global layout and pages
- `components/` — Page sections (`HeroSection`, `ProjectsSection`, etc.)
- `components/ui/` — Design system primitives and shared UI components
- `hooks/` — Custom React hooks (e.g., `use-mobile`, `use-toast`)
- `lib/` — Utility helpers and small shared utilities
- `public/` — Static assets (images, fonts)

## Key files

- `app/page.tsx` — Home page composition
- `app/layout.tsx` — Global layout and metadata
- `components/ProjectsSection.tsx` — Projects listing and cards
- `components/HeroSection.tsx` — Landing hero section

## Development Notes

- Replace placeholder content in `app/page.tsx` and components to personalize copy and projects.
- Add project images to `public/images/` and reference them from `components/ProjectsSection.tsx`.
- This project uses Tailwind CSS. Adjust theme tokens in `tailwind.config.ts` as needed.

## Deployment

Recommended: Vercel (native Next.js support). Steps:

1. Push your repository to GitHub/GitLab/Bitbucket.
2. Create a new project in Vercel and link the repository.
3. Use the default build command `npm run build` and output directory.

Other hosts that support Next.js are also compatible (Netlify, Render, etc.).

## Contributing

Contributions are welcome — open an issue or submit a pull request with improvements. If you submit changes, please:

- Keep changes focused and document any new configuration.
- Run formatting (Prettier) and type checks before opening a PR.

## Suggested scripts (package.json)

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit"
  }
}
```

## Accessibility & Performance

- Aim to keep semantic HTML, keyboard navigation and ARIA where appropriate.
- Use Next.js built-in image optimization for performance (`next/image`).

## License

This repository is provided under the MIT License. Replace or update the license to reflect your preferences.

## Contact

Include your preferred contact method or social links here (email, LinkedIn, GitHub).

## Acknowledgements

- Built with Next.js, Tailwind CSS and small open-source UI primitives.

## Next steps I can take for you

- Add CI/CD and badge placeholders (build, license, code coverage)
- Populate `components/ProjectsSection.tsx` with example project entries
- Add a short deployment guide for Vercel with environment variable notes

If you'd like any of the above, tell me which one to do next and I will proceed.
