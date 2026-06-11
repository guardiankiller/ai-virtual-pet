# Architecture

## Current Architecture (Phase 1 – Web Foundation)

Client (Browser)
    ↓
Next.js App (App Router)
    ↓
Server Components / API Routes
    ↓
Future: Prisma ORM
    ↓
Future: PostgreSQL

---

## Stack (Current)

Frontend + Backend:
- Next.js 15
- TypeScript (strict)
- App Router
- ESLint
- Tailwind CSS

---

## Planned Architecture Evolution

Phase 2:
- Prisma integration
- PostgreSQL
- Auth system

Phase 3:
- Domain-based structure (auth, pet, economy, ai)
- Service layer separation

Phase 4:
- Dockerization
- VPS deployment
- Nginx reverse proxy
- HTTPS
- Firewall
- CI/CD

---

## Structural Decision

Next.js is located in:

/app

Documentation remains in root.

This enables future:
- mobile/
- infra/
- scripts/
- monorepo-style expansion