# Portfolio Website

> Project Description & Development Specification

---

# 1. Project Overview

## Purpose

Xây dựng một website Portfolio hiện đại dành cho Full-stack Developer.

Website được xây dựng theo kiến trúc **Data Driven**.

Mục tiêu:

- Dễ mở rộng.
- Dễ thay đổi nội dung.
- Không cần chỉnh sửa source code khi cập nhật thông tin.
- Hỗ trợ nhiều ngôn ngữ.
- Responsive trên mọi thiết bị.
- Animation hiện đại nhưng tối ưu hiệu năng.

Website **không sử dụng Backend hoặc Database**.

---

# 2. Technology Stack

## Framework

- React
- Vite
- TypeScript

## Styling

- TailwindCSS

## Animation

- Framer Motion

## Icons

- Lucide React

## Language

- Custom Language Provider

## Deploy

- Vercel

---

# 3. Development Principles

Toàn bộ project phải tuân thủ các nguyên tắc sau.

## 3.1 UI và Data phải tách biệt

Component chỉ render giao diện.

Không hard-code bất kỳ nội dung nào.

Ví dụ KHÔNG được:

```tsx
<h1>About Me</h1>
```

Phải sử dụng:

```tsx
<h1>{t.about.title}</h1>
```

---

## 3.2 Không sửa Component khi thay đổi nội dung

Muốn thay đổi:

- tên
- kỹ năng
- kinh nghiệm
- dự án
- chứng chỉ
- giới thiệu

=> chỉ sửa file trong thư mục `data`.

---

## 3.3 Component phải có tính tái sử dụng

Ví dụ:

- Button
- Card
- Section Title
- Progress Bar
- Timeline
- Social Icon

Không được viết trùng lặp.

---

# 4. Folder Structure

```text
src
│
├── assets
│
├── components
│   ├── common
│   ├── layout
│   └── sections
│
├── data
│   ├── common.ts
│   ├── vi.ts
│   ├── en.ts
│   └── ja.ts
│
├── hooks
│
├── i18n
│
├── styles
│
├── utils
│
├── App.tsx
└── main.tsx
```

---

# 5. Website Structure

Website gồm các section:

1. Hero

2. About

3. Skills

4. Experience

5. Projects

6. Certificates

7. Contact

8. Footer

Mỗi section gần như chiếm toàn màn hình.

Scroll giữa các section phải mượt.

---

# 6. Multi-language

Website hỗ trợ:

- Vietnamese
- English
- Japanese

Không sử dụng react-i18next.

Sử dụng Custom Language Provider.

Language Provider có nhiệm vụ:

- lưu ngôn ngữ hiện tại
- đọc localStorage
- đổi toàn bộ text
- cập nhật CV tương ứng

---

# 7. Data Management

## common.ts

Chứa dữ liệu không cần dịch.

Ví dụ:

- Avatar
- Project Images
- Github URL
- LinkedIn
- Facebook
- Email
- Phone
- CV Files

---

## vi.ts

Chứa toàn bộ text tiếng Việt.

---

## en.ts

Chứa toàn bộ text tiếng Anh.

---

## ja.ts

Chứa toàn bộ text tiếng Nhật.

Ba file phải có cùng cấu trúc dữ liệu.

---

# 8. Responsive

Thiết kế theo Mobile First.

Hỗ trợ:

- Mobile
- Tablet
- Laptop
- Desktop
- Ultra Wide

---

# 9. Animation

Sử dụng Framer Motion.

Ưu tiên:

- Fade
- Slide
- Zoom
- Hover
- Glow
- Floating
- Scroll Reveal

Không sử dụng animation gây ảnh hưởng hiệu năng.

---

# 10. Theme

Dark Theme.

Primary

- Purple

Secondary

- Blue

Accent

- Pink

Background

- Dark Navy

Có thể sử dụng:

- Glassmorphism
- Gradient Border
- Neon Glow

---

# 11. Performance

- Lazy Load Images
- Dynamic Import
- SVG Icons
- Memo Component khi cần
- Tối ưu bundle

---

# 12. SEO

Chuẩn bị sẵn:

- title
- description
- favicon
- robots
- sitemap
- Open Graph

Metadata thay đổi theo từng ngôn ngữ.

---

# 13. Accessibility

Website phải hỗ trợ:

- Keyboard Navigation
- Semantic HTML
- aria-label
- alt image
- focus state

---

# 14. Future Expansion

Kiến trúc phải đủ linh hoạt để bổ sung:

- Blog
- CMS
- Admin
- GitHub API
- Visitor Analytics
- Theme Switch
- Contact Backend
- AI Assistant
- Loading Screen
- Three.js Background
- Project Filter
- Search

Không cần thay đổi kiến trúc hiện tại khi mở rộng.

---

# 15. Coding Convention

- Sử dụng TypeScript Strict Mode.
- Không sử dụng `any` nếu không thực sự cần.
- Component chỉ đảm nhiệm một trách nhiệm (Single Responsibility).
- Mỗi component nằm trong file riêng.
- Ưu tiên reusable component.
- Không hard-code text trong component.
- Không hard-code màu sắc, spacing hoặc animation nếu có thể cấu hình.
- Mọi dữ liệu hiển thị đều lấy từ `data/`.
- Code phải dễ đọc, dễ bảo trì và dễ mở rộng.

---

# 16. Project Goal

Website phải đạt các tiêu chí:

- Hiện đại.
- Mượt mà.
- Dễ bảo trì.
- Dễ mở rộng.
- Dễ thay đổi nội dung.
- Chuẩn responsive.
- Chuẩn SEO.
- Chuẩn accessibility.
- Sẵn sàng tích hợp backend trong tương lai nếu cần.
