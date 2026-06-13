# Architecture

## ✅ Current Architecture (Phase 1 – Web Foundation Stabilized)

Client (Browser)
    ↓
Next.js 16 App (App Router)
    ↓
Server Components / API Routes
    ↓
Prisma ORM
    ↓
PostgreSQL (Docker container)

---

## ✅ Phase 1 – Web Foundation (Completed)

Phase 1 focused on establishing a clean, scalable frontend and server-ready foundation.

Scope of Phase 1:

- Initialize Next.js project
- Enable TypeScript (strict mode)
- Configure ESLint
- Configure Tailwind CSS
- Enable App Router
- Introduce domain-based folder structure
- Clean default template
- Stabilize root layout
- Apply dark-first base styling
- Establish documentation-first workflow
- Verify development server runs successfully

Outcome:

We now have a clean, production-ready web foundation prepared for backend integration.

---

## ✅ Current Stack

Frontend + Backend:
- Next.js 16.x
- TypeScript (strict mode)
- App Router
- ESLint
- Tailwind CSS
- Turbopack (development)

---

## ✅ Project Structure

The repository is organized as follows:

ai-virtual-pet/
├── app/                → Next.js application
│   └── src/
│       ├── app/        → Routing & layouts (Next.js App Router)
│       ├── components/ → Reusable UI components
│       ├── lib/        → Shared utilities & helpers
│       └── domains/    → Business logic (auth, pet, economy, ai)
│
├── architecture.md
├── build-plan.md
├── code-standards.md
├── library-docs.md
├── progress-tracker.md
├── project-overview.md
└── SESSION_STATE.md

---

## ✅ Architectural Decisions Implemented

- Documentation lives in project root
- Application code is isolated inside `/app`
- Domain-based structure introduced early
- Clear separation between:
  - UI layer (components)
  - Routing layer (app)
  - Utility layer (lib)
  - Business logic layer (domains)
- Root layout simplified and stabilized
- Dark-first base styling applied
- Clean and conventional commit strategy enforced

---

## ✅ Phase 2 – Backend Foundation (In Progress)

Backend layer successfully integrated:

- Dockerized PostgreSQL (network + volume)
- Prisma ORM (v6.x)
- Initial database migration applied
- Service-layer pattern implemented in `domains/`
- Prisma singleton configured in `lib/`

Current backend data flow:

Browser  
↓  
Next.js Server Component  
↓  
Service Layer (`domains/`)  
↓  
Prisma Client  
↓  
PostgreSQL (Docker container)

---

## 🚧 Next Architectural Step

Phase 2 – Backend Foundation

Planned actions:
- Install Prisma
- Configure database (Local PostgreSQL planned)
- Define initial schema:
  - User
  - Pet
- Introduce service-layer pattern inside `domains/`

---

## 🔮 Future Architecture Evolution

Phase 3 – Application Logic
- Auth domain implementation
- Pet state engine
- XP & economy system
- AI integration layer

Phase 4 – Infrastructure Layer
- Dockerization
- VPS deployment
- Nginx reverse proxy
- HTTPS (Let's Encrypt)
- Firewall configuration
- CI/CD (GitHub Actions)