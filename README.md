# NovaBoard — Project Management Dashboard

A premium Kanban-style project management dashboard built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS 4**, and **Framer Motion**.

## 🎯 Overview

NovaBoard is a pixel-perfect implementation of a Kanban board design, featuring a fully responsive layout, smooth animations, and a clean component architecture. The dashboard allows teams to visualize and manage tasks across four workflow stages: **To Do**, **In Progress**, **In Review**, and **Completed**.

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 16.2.7 | React framework with App Router & API routes |
| React | 19.2.4 | UI component library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Utility-first styling |
| Framer Motion | 12.40.0 | Animations & micro-interactions |
| Lucide React | 1.17.0 | Icon system |

## 📁 Project Structure

```
src/
├── app/
│   ├── api/tasks/route.ts     # RESTful API endpoint
│   ├── globals.css            # Global styles & design tokens
│   ├── layout.tsx             # Root layout with Inter font
│   └── page.tsx               # Main page composition
├── components/
│   ├── Header.tsx             # Search, tabs, filters, profile
│   ├── KanbanBoard.tsx        # Board layout with column grid
│   ├── KanbanColumn.tsx       # Themed column containers
│   ├── Sidebar.tsx            # Navigation sidebar
│   └── TaskCard.tsx           # Interactive task cards
└── types/
    └── kanban.ts              # TypeScript type definitions
```

## ✨ Features

### UI & Design
- Pixel-perfect match to the provided design mockup
- Custom branded SVG logo
- Colour-coded columns (pink, orange, blue, purple)
- Priority badges with semantic colours
- Animated progress bars
- Avatar stacks with overflow counter
- Bell + profile grouped in a shared container

### Responsiveness
- **Mobile**: Sidebar hidden, horizontal scroll for tabs and columns, icon-only action buttons
- **Tablet**: 2-column layout with visible labels
- **Desktop**: Full 4-column grid with all features visible
- Tab bar scrolls horizontally on small screens
- Avatar stack adapts to screen size

### Animations
- Card hover lift effect with shadow
- Card tap press feedback
- Animated progress bar fills
- Staggered column entrance animations
- Staggered card entrance animations

### Architecture
- Component-based with strict TypeScript interfaces
- RESTful API route for data fetching
- Client/Server component separation
- Theme objects for maintainable styling
- Reusable component patterns

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The app runs at [http://localhost:3000](http://localhost:3000).

## 📋 Design Decisions

1. **Inter font at 14px base** — Clean, modern typography optimised for dashboard readability
2. **Framer Motion over CSS transitions** — Enables spring physics, staggered animations, and layout animations
3. **Tailwind utility classes** — Rapid iteration with consistent spacing, colours, and responsive breakpoints
4. **TypeScript union types** — `Priority` and `colorTheme` are strict unions, preventing invalid values at compile time
5. **Horizontal scroll on mobile** — Preserves card width and readability instead of stacking into an unreadable single column
