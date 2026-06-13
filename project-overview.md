# AI Virtual Pet – Project Overview

## Vision

AI-powered web-based virtual pet game featuring:

- Game economy system
- XP & level progression
- AI personality engine
- Optional battle pass system
- Full-stack + infrastructure-grade architecture

This project is designed as a portfolio-level showcase for modern full-stack and infrastructure engineering (2026-ready).

---

## ✅ Current Status

### Phase 1 – Web Foundation (Completed)

The project now includes:

- Git repository initialized
- Documentation-first architecture
- Clean commit history strategy
- Next.js 16.x initialized inside `/app`
- TypeScript (strict mode)
- Tailwind CSS
- App Router
- ESLint configuration
- Domain-based folder structure
- Root layout stabilization
- Verified development server

The web foundation is fully stabilized and production-ready.

---

### Phase 2 – Backend Foundation (In Progress)

The backend layer is now operational:

- Dockerized PostgreSQL (network + volume)
- Prisma ORM (v6.x)
- Initial schema (User + Pet) defined
- Migration successfully applied
- Prisma Client generated
- Service-layer database read implemented

The application now has a fully working database connection and structured backend architecture.

---

## 🧱 Current High-Level Structure

ai-virtual-pet/
│
├── app/                → Next.js application
│   └── src/
│       ├── app/        → Routing & layouts
│       ├── components/ → UI layer
│       ├── lib/        → Infrastructure & utilities (Prisma singleton)
│       └── domains/    → Business logic & service layer
│
├── architecture.md
├── build-plan.md
├── code-standards.md
├── library-docs.md
├── progress-tracker.md
├── SESSION_STATE.md
└── project-overview.md

---

## 🚧 Current Focus

Strengthening backend foundation:

- Implement create operations
- Implement Auth domain
- Expand service-layer logic
- Prepare for application-level game logic

---

## 🎯 Long-Term Goal

Build a scalable AI-powered game platform with:

- Clean domain separation
- Strong service-layer architecture
- Containerized infrastructure
- VPS deployment with reverse proxy
- HTTPS configuration
- CI/CD automation