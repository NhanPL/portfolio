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

- [x] common.ts
- [x] vi.ts
- [x] en.ts
- [x] ja.ts

Acceptance Criteria

All language files have identical structure.

---

## TASK-007

### Create Main Layout

Checklist

- [x] Layout
- [x] Header
- [x] Footer
- [x] Main Container

---

# Milestone 3 - Reusable Components

## TASK-008

Button Component

- [x] Primary
- [x] Secondary
- [x] Outline
- [x] Icon

---

## TASK-009

Card Component

- [x] Glass
- [x] Hover
- [x] Gradient Border

---

## TASK-010

Section Title

- [x] Subtitle
- [x] Title
- [x] Description

---

## TASK-011

Social Icons

- [x] Github
- [x] LinkedIn
- [x] Facebook
- [x] Email

---

## TASK-012

Progress Bar

Animated Skill Bar - DONE

---

## TASK-013

Timeline

Experience Timeline - DONE

---

## TASK-014

Project Card

- [x] Image
- [x] Title
- [x] Description
- [x] Tags
- [x] Github
- [x] Demo

---

## TASK-015

Certificate Card - DONE

---

## TASK-016

Contact Form UI - DONE

---

# Milestone 4 - Website Sections

## TASK-017

Header

Features

- [x] Sticky
- [x] Blur
- [x] Active Menu
- [x] Mobile Menu
- [x] Language Switch

---

## TASK-018

Hero Section

- [x] Greeting
- [x] Name
- [x] Job Title
- [x] Description
- [x] CTA
- [x] Download CV
- [x] Hero Image

---

## TASK-019

About Section

- [x] Description
- [x] Avatar
- [x] Statistics

---

## TASK-020

Skills Section

- [x] Skill Cards
- [x] Progress
- [x] Hover Effect

---

## TASK-021

Experience Section

Timeline Layout - DONE

---

## TASK-022

Projects Section

- [x] Grid
- [x] Project Cards
- [x] Hover Animation

---

## TASK-023

Certificates Section

Grid Layout - DONE

---

## TASK-024

Contact Section

- [x] Contact Info
- [x] Contact Form

---

## TASK-025

Footer

- [x] Social Links
- [x] Quick Links
- [x] Back To Top

---

# Milestone 5 - Animation

## TASK-026

Scroll Reveal - DONE

---

## TASK-027

Hover Animation - DONE

---

## TASK-028

Floating Background - DONE

---

## TASK-029

Button Animation - DONE

---

## TASK-030

Section Transition - DONE

---

# Milestone 6 - Responsive

## TASK-031

Mobile

Status

```text
DONE
```

---

## TASK-032

Tablet

Status

```text
DONE
```

---

## TASK-033

Laptop

Status

```text
DONE
```

---

## TASK-034

Desktop

Status

```text
DONE
```

---

# Milestone 7 - SEO

## TASK-035

Metadata

Status

```text
DONE
```

---

## TASK-036

Open Graph

Status

```text
DONE
```

---

## TASK-037

Robots

Status

```text
DONE
```

---

## TASK-038

Sitemap

Status

```text
DONE
```

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
