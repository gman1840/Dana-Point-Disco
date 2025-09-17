# Dana Point Disco — Next.js + Tailwind (Ready for Vercel)

A fast, modern landing site with a working Request a Quote form (Formspree-ready).

## Quick start
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Configure the form
- Create a Formspree form and copy the endpoint (looks like `https://formspree.io/f/xxxxxx`).
- In Vercel (or locally), set an env var:
  - `NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxx`
- Or edit `app/page.tsx` and replace the default action URL.

## Deploy to Vercel
1) Push this repo to GitHub.2) Import into Vercel → Deploy.3) Set the env var in **Vercel → Project → Settings → Environment Variables** and redeploy.

## Customize
- Edit text in `app/page.tsx`.- Colors & styles in `tailwind.config.ts` and `app/globals.css`.- Icons from lucide-react.- Animations via framer-motion.

## Notes
- No shadcn/ui required. Pure Tailwind + simple components.- App Router (Next 14).- SEO title/description in `app/layout.tsx`.
