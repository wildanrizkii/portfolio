# Refactor to TypeScript Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refactor the entire codebase from JavaScript/JSX to TypeScript/TSX without changing existing functionality or UI styling.

**Architecture:** Install TypeScript toolchain and type definitions in Next.js 16. Convert utility hooks, context, UI components, page routes, and layout incrementally while strictly adhering to `antislop-code` guidelines for clean and minimal comments. Verify each phase with `npm run build` to ensure type safety and zero regressions.

**Tech Stack:** Next.js 16 (App Router, Turbopack), React 19, TypeScript, Tailwind CSS, Framer Motion, Lucide React, Lenis.

**Spec:** User request: "Refactor seluruh code ke Typescript tanpa mengubah fungsinya itu sendiri, lakukan dengan rapi /using-superpowers /antislop-code".

## Global Constraints

- Preserve 100% of existing behavior, props, exported components, animation variants, and markup.
- Preserve existing unstaged accessibility fixes in `src/app/globals.css`, `src/app/layout.jsx`, `src/components/ClientLayoutWrapper.jsx`, and `src/components/Home/BroadsheetHome.jsx`.
- Strict comment hygiene via `antislop-code`: zero decorative comments, zero banner/box separators, zero line-by-line narration, zero obvious restatements.
- Type definitions must be accurate and clean (`interface`/`type`), avoiding unnecessary `any` where reasonable while preserving React 19 types.

## Review Focus

1. Event handlers (`MouseEvent`, `TouchEvent`, `ChangeEvent`) correctly typed without breaking runtime execution.
2. React children and component props properly typed (`ReactNode`, `PropsWithChildren`).
3. Next.js App Router metadata, viewport, and page component typing matching Next.js 16 standards.
4. Dynamic imports and third-party libraries (`lenis`, `framer-motion`) properly typed.
5. All old `.js` and `.jsx` files removed after replacement with `.ts` and `.tsx` to prevent duplicate modules.

---

### Task 1: TypeScript Environment Setup

**Files:**
- Modify: `package.json`
- Create: `tsconfig.json`
- Delete: `jsconfig.json`

- [ ] **Step 1: Install TypeScript devDependencies**
Run `npm install -D typescript @types/node @types/react @types/react-dom`

- [ ] **Step 2: Create `tsconfig.json` and remove `jsconfig.json`**
Configure Next.js 16 compatible compilerOptions with `@/*` path alias.

- [ ] **Step 3: Verify TypeScript setup with build**
Run `npm run build` to confirm compiler runs.

---

### Task 2: Refactor Custom Hooks to TypeScript

**Files:**
- `src/hooks/useDebounce.ts` (replace `useDebounce.js`)
- `src/hooks/useHover.ts` (replace `useHover.js`)
- `src/hooks/useScrollPosition.ts` (replace `useScrollPosition.js`)
- `src/hooks/useWindowSize.ts` (replace `useWindowSize.js`)

- [ ] **Step 1: Convert hooks to `.ts` with generic and DOM types**
- [ ] **Step 2: Delete corresponding `.js` files**
- [ ] **Step 3: Run build/typecheck**

---

### Task 3: Refactor Context and Shared Utility Components

**Files:**
- `src/context/AestheticContext.tsx`
- `src/components/BroadsheetHelpers.tsx`
- `src/components/ClientLayoutWrapper.tsx`
- `src/components/HalamanTidakAda.tsx`
- `src/components/ThemeProvider.tsx`
- `src/components/ThemeToggle/index.tsx`
- `src/components/PageTransition/index.tsx`
- `src/components/CustomCursor/index.tsx`
- `src/components/Constraction/index.tsx`
- `src/components/AnimatedScrollMouse/index.tsx`
- `src/components/AnimatedBackground/*.tsx`

- [ ] **Step 1: Convert files to `.tsx` with clean types and antislop comments**
- [ ] **Step 2: Delete original `.jsx` files**
- [ ] **Step 3: Verify with build**

---

### Task 4: Refactor Navbar and TechTools Components

**Files:**
- `src/components/Navbar/*`
- `src/components/TechTools/*`

- [ ] **Step 1: Convert navbar variants (Broadsheet, Hallmark, Original, Index) to `.tsx`**
- [ ] **Step 2: Convert TechTools variants to `.tsx`**
- [ ] **Step 3: Delete original `.jsx` files**
- [ ] **Step 4: Verify with build**

---

### Task 5: Refactor Home, About, and Parallax Components

**Files:**
- `src/components/Home/*`
- `src/components/About/*`
- `src/components/Parallax/*`

- [ ] **Step 1: Convert Home variants to `.tsx` preserving unstaged fixes**
- [ ] **Step 2: Convert About and Parallax variants to `.tsx`**
- [ ] **Step 3: Delete original `.jsx` files**
- [ ] **Step 4: Verify with build**

---

### Task 6: Refactor Project Components

**Files:**
- `src/components/Projects/About/*`
- `src/components/Projects/List/*`
- `src/components/Projects/Home/index.tsx`
- `src/components/Projects/ProjectPage/index.tsx`
- `src/components/Projects/AdoraSaaS/*`
- `src/components/Projects/AdoraSaaSNew/*`
- `src/components/Projects/CashFlow/*`
- `src/components/Projects/Sparepart/*`

- [ ] **Step 1: Convert project showcase and list components to `.tsx`**
- [ ] **Step 2: Convert detail project components (Adora, CashFlow, Sparepart) to `.tsx`**
- [ ] **Step 3: Delete original `.jsx` files**
- [ ] **Step 4: Verify with build**

---

### Task 7: Refactor App Pages and Layout

**Files:**
- `src/app/layout.tsx`
- `src/app/not-found.tsx`
- `src/app/page.tsx`
- `src/app/about/page.tsx`
- `src/app/projects/page.tsx`
- `src/app/projects/adora/page.tsx`
- `src/app/projects/adora-saas/page.tsx`
- `src/app/projects/cashflow/page.tsx`
- `src/app/projects/sparepart/page.tsx`

- [ ] **Step 1: Convert layout and root pages to `.tsx` preserving metadata and viewport**
- [ ] **Step 2: Convert all subroute pages to `.tsx`**
- [ ] **Step 3: Delete original `.jsx` files**
- [ ] **Step 4: Full production build verification with `npm run build`**

---

### Task 8: Antislop Delivery Gate and Verification

- [ ] **Step 1: Verify zero `.js`/`.jsx` files remain in `src/`**
- [ ] **Step 2: Verify `npm run build` completes with zero errors**
- [ ] **Step 3: Run antislop code comment checklist and Delivery Gate**
