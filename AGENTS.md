# AGENTS.md

# Turborepo Monorepo Development Rules

This repository is a STRICT Turborepo monorepo.

Tech stack:

- Turborepo
- TypeScript
- React
- Next.js
- Tailwind CSS v4
- ESLint
- Prettier
- RTK Query
- npm

These rules are mandatory for ALL generated code.

---

# 0. Mandatory Workflow

After EVERY code change you MUST:

1. Run lint
2. Run type-check
3. Run prettier check
4. Run build
5. Fix ALL issues before finishing

Required commands:

```bash
npx turbo run lint
npx turbo run type-check
npx turbo run format:check
npx turbo run build
```
