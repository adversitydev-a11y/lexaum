# Lexaum LLP — Integrated Legal Solutions

A modern, high-performance web platform designed and engineered for **Lexaum LLP**, a premier Legal Process Outsourcing (LPO) and legal operations consultancy based in Bangalore, India, serving law firms, corporate legal teams, and property clients across India, the United Kingdom, the United States, and Europe.

Built and maintained by **[Adversity Solutions](https://adversitysolutions.in)**.

---

## 🏛️ Project Overview

Lexaum LLP bridges the gap between high-level legal advisory and operational execution. The platform is crafted to reflect the authority, precision, and sophistication of a white-shoe international legal practice while providing frictionless lead capture and intuitive user pathways.

### Key Pillars
- **Dual-Market Practice Architecture:** Clearly segmented user journeys for:
  - **Legal Operations Support (India & International):** Legal research, drafting, contract lifecycle management, compliance, litigation support, and paralegal assistance.
  - **Property Legal Services:** Property due diligence, title verification, registration assistance, EC, and e-Khata procurement.
- **Editorial Luxury Design System:** A custom warm ivory (`#FFFDF8`), metallic bronze (`#B8875C`), and deep espresso (`#2A1E17`) aesthetic styled with `Playfair Display` serif typography and `Inter` sans-serif body copy.
- **Automated Client Intake:** Validated inquiry capture integrated with **EmailJS** for instant delivery to the legal operations desk and direct WhatsApp consultation routing.
- **Performance & Accessibility First:** Built on React 18, Vite, and Tailwind CSS v4 with accessible Radix UI primitives.

---

## 🛠️ Tech Stack

- **Framework & Core:** React 18, TypeScript, Vite 6
- **Routing:** React Router v7
- **Styling:** Tailwind CSS v4, Custom Theme Tokens (`theme.css`, `globals.css`)
- **UI & Accessibility Primitives:** Radix UI (`accordion`, `dialog`, `drawer`, `popover`, `tabs`, `tooltip`), Lucide React Icons
- **Motion & Interactions:** Framer Motion (`motion`)
- **Forms & Integration:** EmailJS Browser SDK, React Hook Form
- **Package Manager:** npm / pnpm

---

## 📂 Project Structure

```
Lexaum LLP/
├── public/                 # Static public assets
├── src/
│   ├── app/
│   │   ├── components/     # Reusable UI components & layouts
│   │   │   ├── ui/         # Radix-based accessible UI elements
│   │   │   ├── Header.tsx  # Sticky luxury navigation header
│   │   │   ├── Footer.tsx  # Global footer & legal disclaimers
│   │   │   └── ...
│   │   ├── content/        # Centralized site copy & structured data
│   │   ├── pages/          # Application routes (Home, About, Services, Contact, etc.)
│   │   ├── App.tsx         # Root application component
│   │   └── routes.ts       # React Router 7 route definitions
│   ├── imports/            # High-resolution brand assets & photography
│   ├── services/           # External service clients (e.g. EmailJS)
│   ├── styles/             # Global design tokens, fonts, & Tailwind setup
│   └── main.tsx            # Application entry point
├── .env.example            # Environment configuration template
├── package.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm or pnpm

### 1. Clone the repository
```bash
git clone https://github.com/adversitydev-a11y/lexaum.git
cd lexaum
```

### 2. Install dependencies
```bash
npm install
# or
pnpm install
```

### 3. Configure environment variables
Create a `.env` file in the project root based on `.env.example`:
```bash
cp .env.example .env
```
Fill in the required EmailJS and CMS API parameters:
```env
VITE_CMS_API_BASE_URL=https://global-blog-cms-api.onrender.com/api
VITE_CMS_API_KEY=your_cms_api_key
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

### 4. Run development server
```bash
npm run dev
```

### 5. Build for production
```bash
npm run build
```

---

## 📄 License & Credits

- **Client:** Lexaum LLP
- **Design & Engineering:** [Adversity Solutions](https://adversitysolutions.in)
- **Copyright:** © 2026 Lexaum LLP. All rights reserved.
