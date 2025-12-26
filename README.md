<div align="center">

  <br />
  <img src="./public/images/logo.png" alt="Pravesh Subba" width="100" height="100" style="border-radius: 20%; box-shadow: 0px 4px 10px rgba(0,0,0,0.15);">

  <h1 align="center">Pravesh Subba</h1>

  <p align="center">
    <strong>MSc Data Science Student • Machine Learning • Full Stack Developer</strong>
  </p>
  
  <p align="center">
    Welcome to the source code of my personal portfolio. <br />
    This platform acts as a central hub for my data science projects, technical articles, and professional experience.
    <br />
    <br />
    <a href="https://portfolio-one-fawn-77.vercel.app/"><strong>View Live Site »</strong></a>
    <br />
    <br />
    <a href="https://www.linkedin.com/in/praveshsubba">Connect on LinkedIn</a>
    ·
    <a href="mailto:praveshsubba81@gmail.com">Email Me</a>
  </p>

  <p align="center">
    <a href="https://nextjs.org">
      <img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
    </a>
    <a href="https://www.typescriptlang.org/">
      <img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    </a>
    <a href="https://tailwindcss.com/">
      <img src="https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
    </a>
  </p>
</div>

<br />

---

## 👨‍💻 About The Project

As a **Data Science student**, I needed a platform that was more than just a static resume. I built this site to bridge the gap between my analytical backend skills (Python, ML) and modern frontend engineering.

The goal was to create a high-performance, accessible web experience that allows me to showcase interactive data visualizations and detailed case studies without relying on rigid CMS platforms.

---

## 🛠 Tech Stack

I chose this stack to ensure the site is fast, type-safe, and SEO-friendly.

| Category | Technologies |
| :--- | :--- |
| **Framework** | Next.js 14 (App Router), React 18 |
| **Styling** | Tailwind CSS, Lucide Icons, Shadcn/UI |
| **Language** | TypeScript |
| **Data/Content** | JSON / MDX (for project case studies) |
| **Deployment** | Vercel |

---

## ⚡️ Key Highlights

* **Performance First:** Utilizing React Server Components to minimize client-side JavaScript, ensuring the site loads instantly even on slow networks.
* **Responsive Architecture:** A mobile-first approach that adapts layout and typography for readable case studies on any device.
* **Type Safety:** Strict TypeScript implementation to prevent runtime errors and ensure code quality.
* **Accessibility:** Semantic HTML structure and ARIA labels to ensure the portfolio is navigable by all users.

---

## 📂 Project Structure

This is how I organized the codebase for scalability:

```text
.
├── app/                   # App Router pages (Home, Projects, About)
├── components/            # React Components
│   ├── ui/                # Small atomic components (Buttons, Cards)
│                          # Major page blocks (Hero, Skills Grid)
├── lib/                   # Utility functions
├── hooks/                 # Global styles and Tailwind config
└── public/                # Static assets (Profile images, Project thumbnails)
