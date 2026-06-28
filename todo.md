# TODO.md

> Portfolio Website Development Roadmap

---

# Progress

| Milestone                | Status |
| ------------------------ | ------ |
| M1 - Project Setup       | ⬜     |
| M2 - Core Architecture   | ⬜     |
| M3 - Reusable Components | ⬜     |
| M4 - Website Sections    | ⬜     |
| M5 - Animation           | ⬜     |
| M6 - Responsive          | ⬜     |
| M7 - SEO                 | ⬜     |
| M8 - Performance         | ⬜     |
| M9 - Testing             | ⬜     |
| M10 - Deployment         | ⬜     |

---

# Milestone 1 - Project Setup

## TASK-001

### Initialize Project

Priority: High

Checklist

- [x] Create React + Vite + TypeScript
- [x] Install TailwindCSS
- [x] Install Framer Motion
- [x] Install Lucide React
- [x] Install React Router
- [x] Configure ESLint
- [x] Configure Prettier
- [x] Configure Path Alias (@)

Acceptance Criteria

- Project runs successfully.
- No TypeScript errors.
- Alias is working.

Status

```
DONE
```

---

## TASK-002

### Create Project Structure

Priority

High

Checklist

- [x] assets
- [x] components
- [x] layouts
- [x] hooks
- [x] utils
- [x] styles
- [x] sections
- [x] data
- [x] i18n

Acceptance Criteria

Project folder structure matches describe.md.

Status

```
DONE
```

---

## TASK-003

### Configure Global Theme

Checklist

- [x] Colors
- [x] Typography
- [x] Container
- [x] Breakpoints
- [x] Scrollbar
- [x] Global CSS

---

# Milestone 2 - Core Architecture

## TASK-004

### Theme Configuration

Checklist

- [x] Color Palette
- [x] Font
- [x] Radius
- [x] Shadow
- [x] Transition

---

## TASK-005

### Language Provider

Checklist

- [x] Context
- [x] Provider
- [x] Hook
- [x] Switch Language
- [x] Save Language
- [x] Read LocalStorage

Acceptance Criteria

Language changes without page reload.

---

## TASK-006

### Create Data Structure

Checklist

- [ ] common.ts
- [ ] vi.ts
- [ ] en.ts
- [ ] ja.ts

Acceptance Criteria

All language files have identical structure.

---

## TASK-007

### Create Main Layout

Checklist

- [ ] Layout
- [ ] Header
- [ ] Footer
- [ ] Main Container

---

# Milestone 3 - Reusable Components

## TASK-008

Button Component

- [ ] Primary
- [ ] Secondary
- [ ] Outline
- [ ] Icon

---

## TASK-009

Card Component

- [ ] Glass
- [ ] Hover
- [ ] Gradient Border

---

## TASK-010

Section Title

- [ ] Subtitle
- [ ] Title
- [ ] Description

---

## TASK-011

Social Icons

- [ ] Github
- [ ] LinkedIn
- [ ] Facebook
- [ ] Email

---

## TASK-012

Progress Bar

Animated Skill Bar

---

## TASK-013

Timeline

Experience Timeline

---

## TASK-014

Project Card

- [ ] Image
- [ ] Title
- [ ] Description
- [ ] Tags
- [ ] Github
- [ ] Demo

---

## TASK-015

Certificate Card

---

## TASK-016

Contact Form UI

---

# Milestone 4 - Website Sections

## TASK-017

Header

Features

- [ ] Sticky
- [ ] Blur
- [ ] Active Menu
- [ ] Mobile Menu
- [ ] Language Switch

---

## TASK-018

Hero Section

- [ ] Greeting
- [ ] Name
- [ ] Job Title
- [ ] Description
- [ ] CTA
- [ ] Download CV
- [ ] Hero Image

---

## TASK-019

About Section

- [ ] Description
- [ ] Avatar
- [ ] Statistics

---

## TASK-020

Skills Section

- [ ] Skill Cards
- [ ] Progress
- [ ] Hover Effect

---

## TASK-021

Experience Section

Timeline Layout

---

## TASK-022

Projects Section

- [ ] Grid
- [ ] Project Cards
- [ ] Hover Animation

---

## TASK-023

Certificates Section

Grid Layout

---

## TASK-024

Contact Section

- [ ] Contact Info
- [ ] Contact Form

---

## TASK-025

Footer

- [ ] Social Links
- [ ] Quick Links
- [ ] Back To Top

---

# Milestone 5 - Animation

## TASK-026

Scroll Reveal

---

## TASK-027

Hover Animation

---

## TASK-028

Floating Background

---

## TASK-029

Button Animation

---

## TASK-030

Section Transition

---

# Milestone 6 - Responsive

## TASK-031

Mobile

---

## TASK-032

Tablet

---

## TASK-033

Laptop

---

## TASK-034

Desktop

---

# Milestone 7 - SEO

## TASK-035

Metadata

---

## TASK-036

Open Graph

---

## TASK-037

Robots

---

## TASK-038

Sitemap

---

# Milestone 8 - Performance

## TASK-039

Lazy Loading

---

## TASK-040

Dynamic Import

---

## TASK-041

Bundle Optimization

---

## TASK-042

Lighthouse Optimization

Target

- Performance > 90
- Accessibility > 90
- SEO > 90
- Best Practice > 90

---

# Milestone 9 - Testing

## TASK-043

Responsive Testing

---

## TASK-044

Browser Testing

- Chrome
- Edge
- Firefox
- Safari

---

## TASK-045

Language Testing

- Vietnamese
- English
- Japanese

---

# Milestone 10 - Deployment

## TASK-046

Deploy Vercel

---

## TASK-047

README

Project documentation.

---

# Future Tasks

- [ ] Dark / Light Mode
- [ ] Theme Switch
- [ ] Loading Screen
- [ ] Page Transition
- [ ] Scroll Progress Bar
- [ ] Mouse Cursor Effect
- [ ] GitHub Contribution Graph
- [ ] GitHub API
- [ ] Visitor Analytics
- [ ] Blog
- [ ] CMS
- [ ] AI Chat Assistant
- [ ] Three.js Background
- [ ] Interactive Timeline
- [ ] Skill Radar Chart

---

# Definition of Done (DoD)

Một task được xem là hoàn thành khi đáp ứng đầy đủ các tiêu chí sau:

- [ ] Hoàn thành toàn bộ checklist.
- [ ] Không có lỗi TypeScript.
- [ ] Không có lỗi ESLint.
- [ ] Responsive trên Mobile, Tablet và Desktop.
- [ ] Hỗ trợ đầy đủ VI / EN / JA (nếu có nội dung).
- [ ] Không hard-code dữ liệu trong component.
- [ ] Dữ liệu được lấy từ `src/data`.
- [ ] Đã kiểm tra animation hoạt động đúng.
- [ ] Không ảnh hưởng tới các tính năng hiện có.
- [ ] Được review trước khi chuyển sang task tiếp theo.
