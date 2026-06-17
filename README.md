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

## Security & Permissions

The app includes security headers, strict contact form validation, a honeypot field, body size limits, and basic contact API rate limiting.

To prevent people from editing the project without permission, enable these controls in GitHub or your Git provider:

- Keep the repository private.
- Protect the `main` branch.
- Require pull requests before merging.
- Require review approval before merging.
- Require `npm run lint` and `npm run build` checks before merging.
- Disable force pushes and branch deletion on protected branches.

## Pages

- `/` - Home
- `/about` - About Us
- `/contact` - Contact form and FAQ
- `/privacy-policy` - Privacy Policy
