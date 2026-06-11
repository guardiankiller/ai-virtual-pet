# Code Standards

## General

- TypeScript strict mode
- No `any`
- No business logic inside components
- Domain separation required
- Clean commit messages (Conventional Commits)

---

## Commit Convention

Examples:

chore: project setup
fix(docs): correct markdown file extensions
feat(init): initialize Next.js project
feat(auth): implement register endpoint

---

## Structure Rule

Root:
- Documentation only

/app:
- Application code only

Inside src:
- app/
- components/
- lib/
- domains/ (future)