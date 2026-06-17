# Orion Tech

A production-ready marketing website for Orion Tech, built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, shadcn-style primitives, Resend, Zod, and React Hook Form.

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

Create `.env.local` and add:

```bash
RESEND_API_KEY=your_resend_api_key
```

The contact form posts to `app/api/contact/route.ts` and sends submissions to `oriontech.glob@gmail.com`. The default Resend sender is `onboarding@resend.dev`; replace it with a verified domain sender before production use.

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run format:check
```

## Pages

- `/` - Home
- `/about` - About Us
- `/contact` - Contact form and FAQ
- `/privacy-policy` - Privacy Policy
