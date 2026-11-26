# Learn Hub — SIETK Study

A polished, installable Progressive Web App (PWA) for SIETK students to learn
their subjects unit-wise, with clear explanations, Q&A, one-shot previews,
question bank answers, study plans, progress tracking, themes and notifications.

**Live site:** https://learn-hub-sietk.vercel.app

## Features

- **Subject-wise, unit-wise learning** — content aligned to SIETK's R23 syllabus
  and question banks (www.sietk.org).
- **586 real question-bank questions** with a clear answer, explanation and
  one-shot preview for each — extracted from the official SIETK question bank PDFs.
- **Visual diagrams** for diagram-based questions (ER, B+ Tree, Gantt, V-Model,
  Law of Demand, break-even, design-thinking double diamond, and more).
- **Labs flagged "Coming Soon"**; theory subjects fully teachable.
- **Role-based access**: Student, Teacher, Professor, Engineer, Designer, Admin.
- **First-login instructions modal** for every new user.
- **Profile setup in Settings** (after login) — name, branch, semester.
- **Themes & colors**: Light / Dark / System theme + 8 accent palettes, applied instantly.
- **Notifications**: enable study reminders (daily / every 3 days / weekly) with
  a test button; delivered via PWA service worker.
- **Editable roadmaps / study plans** per subject.
- **Admin dashboard** to monitor other users' progress.
- **PWA**: installable as an app with a premium icon set and offline caching.

## Subjects (CSE, Semester 2, R23)

Operating Systems, Database Management Systems, Software Engineering,
Probability & Statistics, Managerial Economics & Financial Analysis,
Design Thinking & Innovation, Organizational Behavior, Business Environment,
plus labs (Coming Soon).

## Run

```bash
npm install
npm run dev      # development (http://localhost:5173)
npm run build    # production build -> dist/
npm run preview  # preview production build (http://localhost:4173)
```

## Renaming the app

Everything is driven by one config value:

```bash
node rename.cjs "Your New Name"
npm run build
```

## Deploy

Deployed on Vercel as a Vite static app with SPA rewrites (`vercel.json`).

Built with React + Vite + Tailwind CSS v4.

## Credits

The unslop design pass followed the methodology from
[unslop](https://github.com/heydamir/unslop) by Damir Sokolovsky
([@heydamir](https://x.com/heydamir)), licensed CC BY 4.0.

## Data source

Subject codes, names, faculty, question-bank PDF URLs and all 586 questions are
sourced from SIETK's official website and R23 question banks (www.sietk.org).
Teaching explanations and curated Q&A are authored study content aligned to the
JNTUA R23 syllabus.
