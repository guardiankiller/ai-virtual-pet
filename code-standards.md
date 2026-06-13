# Code Standards

## General

- TypeScript strict mode enabled
- No `any` types allowed
- No business logic inside React components
- Domain separation required
- Clean commit messages (Conventional Commits)
- Always commit from project root
- Service-layer pattern required for database access

---

## Commit Convention

Examples:

chore: project setup  
fix(docs): correct markdown file extensions  
feat(init): initialize Next.js project  
docs(session): refine session state after Phase 1 stabilization  
feat(database): integrate Prisma with Docker PostgreSQL  
feat(auth): implement register endpoint  

---

## Structure Rules

Root:
- Documentation files only
- No application logic

/app:
- Next.js application only

Inside `/app/src`:

- `app/` → Routing & layouts only (no business logic)
- `components/` → UI components only
- `lib/` → Shared utilities & infrastructure helpers (e.g., Prisma singleton)
- `domains/` → Business logic layer (service layer + domain logic)

---

## Database Access Rules

- All database access must go through the service layer inside `domains/`
- No direct Prisma calls inside:
  - React components
  - Routing layer (`app/`)
- Prisma singleton must be defined inside `lib/`

---

## Folder Discipline

- Empty structural folders must contain `.gitkeep`
- Business logic must live inside `domains/`
- Routing layer must remain thin
- UI layer must remain presentation-only