# ProDispatch — Remote Truck Dispatching Portfolio

A professional portfolio site for a remote truck dispatcher, built with **React + TypeScript**.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The app will open at `http://localhost:5173`.

---

## 📁 Project Structure

```
prodispatch/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Nav.tsx          # Fixed navigation + mobile menu
│   │   ├── Nav.css
│   │   ├── Footer.tsx       # Footer with links
│   │   └── Footer.css
│   ├── pages/
│   │   ├── HomePage.tsx     # Hero, features, testimonials
│   │   ├── AboutPage.tsx    # Bio, skills, stats
│   │   ├── ServicesPage.tsx # Services, pricing, resources
│   │   ├── BlogPage.tsx     # Blog posts + resource links
│   │   └── ContactPage.tsx  # Contact form
│   ├── data/
│   │   └── index.ts         # All content (services, pricing, blog, etc.)
│   ├── types/
│   │   └── index.ts         # TypeScript interfaces
│   ├── styles/
│   │   ├── global.css       # CSS variables, reset, shared utilities
│   │   └── Nav.css
│   ├── App.tsx              # Root component + router logic
│   └── index.tsx            # Entry point
├── package.json
└── tsconfig.json
```

---

## ✏️ Customization

### Update Your Info
Edit `src/data/index.ts` to change:
- Services offered
- Pricing plans
- Blog posts
- Testimonials
- Resource links

### Update Contact Details
Edit `src/pages/ContactPage.tsx` — replace email, phone, and location.

### Change Colors / Fonts
Edit the CSS variables in `src/styles/global.css`:
```css
:root {
  --orange: #f97316;   /* Brand accent color */
  --dark: #111318;     /* Background */
  --white: #f4f1eb;    /* Text */
}
```

### Hero Background Image
In `src/pages/HomePage.css`, update the `.hero__bg` background URL.

---

## 🌐 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero + features + testimonials |
| About | `/about` | Bio, skills, performance stats |
| Services | `/services` | Services, pricing tiers, resource links |
| Blog | `/blog` | Articles + industry links |
| Contact | `/contact` | Contact form |

---

## 📦 Deploy

```bash
npm run build
```

Then deploy the `build/` folder to:
- **Netlify** — drag and drop the `build` folder
- **Vercel** — `vercel deploy`
- **GitHub Pages** — use `gh-pages` package

---

## 🔗 External Links Included
- [FMCSA Safety](https://www.fmcsa.dot.gov/)
- [DAT Loadboard](https://www.dat.com/)
- [Truckstop.com](https://truckstop.com/)
- [SAFER Web](https://safer.fmcsa.dot.gov/)
- [OOIDA](https://www.ooida.com/)
- [PC*Miler](https://www.pcmiler.com/)
- And more in `src/data/index.ts`
