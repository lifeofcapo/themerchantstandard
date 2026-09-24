# The Merchant Standard

Marketing site and membership funnel for The Merchant Standard, built with Next.js App Router.

## Stack

- Next.js 15 (App Router, Server Components, Turbopack)
- TypeScript
- Prisma ORM with Supabase Postgres
- Stripe Checkout and Billing (subscriptions, webhooks)
- Resend for transactional and sequence email
- Cloudflare R2 for video and media storage
- Tailwind CSS
- Vercel for hosting, cron jobs, and preview deployments
- Vitest for testing

## Features

**Checkout and billing**
Stripe Checkout with monthly and yearly plans, webhook-driven fulfillment, idempotent event handling to prevent duplicate processing on retries, automatic Discord invite generation on successful payment.

**Lead capture**
Web forms for free training signups and newsletter subscriptions, with server-side validation covering email format, disposable domains, blocklisted test values, phone number length, and input sanitization against XSS and spreadsheet formula injection.

**Email automation**
Multi-step follow-up sequences sent through Resend, tracking each contact's position in the sequence, automatic exit on conversion, one-click unsubscribe, DKIM/SPF/DMARC configured for deliverability.

**Admin panel**
Session-authenticated dashboard for viewing purchases, leads, and newsletter subscribers, with per-row deletion, Excel export, and clipboard copy for bulk email lists. Authentication uses signed session tokens rather than plaintext comparison.

**Vitest**
Testing admin-auth, email, phone and user name validation with vitest

**Video delivery**
Self-hosted video streaming from Cloudflare R2 with a custom player that blocks seeking past the furthest watched point, lazy loading, and poster fallback.

**Other**
Dynamic Open Graph image generation, structured data for SEO, country code resolution from IP geolocation and Stripe billing data, responsive design with reduced-motion support.

## Getting started

```bash
npm install
cp .env.example .env
npx prisma generate
npm run dev
```

## Environment variables

See `.env.example` for the full list. At minimum you need a Postgres connection string, Stripe API keys, a Resend API key, and admin session secrets.

## Database

Schema is managed with Prisma. Apply changes with:

```bash
npx prisma db push
npx prisma generate
```

If direct database connections are blocked on your network, generate SQL manually and apply it through the Supabase SQL editor:

```bash
npx prisma migrate diff --from-empty --to-schema prisma/schema.prisma --script
```

## License

Private and proprietary. All rights reserved.