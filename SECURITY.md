# Security Policy

Shree Hari Hardware Mart is built with privacy and security as the default operating model.

## Protecting Project Edits

Code-level files cannot stop someone who already has direct write access to the repository. To prevent unapproved edits, configure repository permissions in GitHub or your Git provider:

1. Keep the repository private unless it must be public.
2. Give write access only to trusted maintainers.
3. Enable branch protection for `main`.
4. Require pull requests before merging.
5. Require at least one approval before merge.
6. Require status checks to pass before merge.
7. Disable force pushes and branch deletion on protected branches.

## Application Security

- Security headers are configured in `next.config.ts`.
- The contact form validates and limits input with Zod.
- The contact API includes a honeypot, body size limit, basic rate limiting, and safe email subject handling.
- Secrets must live in `.env.local` or Vercel environment variables and must never be committed.

## Reporting Issues

Report security concerns privately at `shreeharihardwaremart@gmail.com`.
