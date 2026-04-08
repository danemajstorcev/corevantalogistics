// ─── Page Types ───────────────────────────────────────────────────────────────
export type PageName = 'home' | 'about' | 'services' | 'blog' | 'contact';

// ─── Navigation ───────────────────────────────────────────────────────────────
export interface NavProps {
  page: PageName;
  setPage: (page: PageName) => void;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

// ─── Services ─────────────────────────────────────────────────────────────────
export interface Service {
  icon: string;
  name: string;
  desc: string;
}

// ─── Pricing ──────────────────────────────────────────────────────────────────
export interface PricingPlan {
  name: string;
  price: string;
  unit: string;
  features: string[];
  featured: boolean;
}

// ─── Blog ─────────────────────────────────────────────────────────────────────
export interface BlogPost {
  img: string;
  tag: string;
  title: string;
  excerpt: string;
  date: string;
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
export interface Testimonial {
  stars: number;
  text: string;
  author: string;
  company: string;
}

// ─── Resources ────────────────────────────────────────────────────────────────
export interface Resource {
  icon: string;
  name: string;
  url: string;
  cat: string;
}

// ─── Contact Form ─────────────────────────────────────────────────────────────
export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  trucks: string;
  message: string;
}

// ─── Stat ─────────────────────────────────────────────────────────────────────
export interface Stat {
  num: string;
  label: string;
}
