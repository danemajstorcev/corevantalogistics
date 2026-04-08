import type { Service, PricingPlan, BlogPost, Testimonial, Resource, Stat } from '../types';

export const SERVICES: Service[] = [
  {
    icon: '🛣️',
    name: 'Load Booking',
    desc: 'I find the best-paying loads on all major boards — DAT, Truckstop, and direct brokers — negotiating top rates for your trucks.',
  },
  {
    icon: '📋',
    name: 'Paperwork & Invoicing',
    desc: 'Rate confirmations, BOLs, invoicing, and carrier packet submissions handled quickly and accurately.',
  },
  {
    icon: '📡',
    name: '24/7 Driver Support',
    desc: 'Your drivers are never alone on the road. I stay reachable around the clock for lumper codes, check calls, and emergencies.',
  },
  {
    icon: '🗺️',
    name: 'Route Planning',
    desc: 'Efficient, HOS-compliant routing that maximizes miles and minimizes deadhead runs.',
  },
  {
    icon: '💰',
    name: 'Rate Negotiation',
    desc: 'Aggressive negotiation with brokers to secure the highest possible rate per mile for every load.',
  },
  {
    icon: '📊',
    name: 'Carrier Setup Support',
    desc: "Need help getting set up with brokers or on load boards? I'll walk you through the process from A to Z.",
  },
];

export const PRICING: PricingPlan[] = [
  {
    name: 'Starter',
    price: '6%',
    unit: 'per load',
    features: [
      'Up to 2 trucks',
      'Load booking',
      'Rate confirmation',
      'Email support',
      'Mon–Fri coverage',
    ],
    featured: false,
  },
  {
    name: 'Growth',
    price: '5%',
    unit: 'per load',
    features: [
      '3–7 trucks',
      'Full paperwork handling',
      'Invoicing & BOLs',
      '24/7 driver support',
      'Priority response',
    ],
    featured: true,
  },
  {
    name: 'Fleet',
    price: '4%',
    unit: 'per load',
    features: [
      '8+ trucks',
      'Dedicated dispatch lane',
      'Carrier setup included',
      'Rate negotiation focus',
      'Monthly performance report',
    ],
    featured: false,
  },
];

export const RESOURCES: Resource[] = [
  { icon: '🏛️', name: 'FMCSA Safety', url: 'https://www.fmcsa.dot.gov/', cat: 'Regulatory' },
  { icon: '📦', name: 'DAT Loadboard', url: 'https://www.dat.com/', cat: 'Load Board' },
  { icon: '🚚', name: 'Truckstop.com', url: 'https://truckstop.com/', cat: 'Load Board' },
  { icon: '📜', name: 'SAFER Web', url: 'https://safer.fmcsa.dot.gov/', cat: 'Carrier Lookup' },
  { icon: '📡', name: 'Trucking Truth', url: 'https://www.truckingtruth.com/', cat: 'Education' },
  { icon: '⛽', name: 'Fuel Finder', url: 'https://www.gasbuddy.com/', cat: 'Fuel' },
  { icon: '🗺️', name: 'PC*Miler', url: 'https://www.pcmiler.com/', cat: 'Routing' },
  { icon: '📑', name: 'OOIDA', url: 'https://www.ooida.com/', cat: 'Association' },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    img: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=600&q=70',
    tag: 'Industry Tips',
    title: 'How to Negotiate Higher Rates with Freight Brokers',
    excerpt:
      'Brokers have more room than they let on. Learn the phrases and timing that consistently land better rates per mile.',
    date: 'Feb 10, 2025',
  },
  {
    img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=70',
    tag: 'Regulations',
    title: 'ELD Compliance: What Every Small Carrier Must Know',
    excerpt:
      "Electronic Logging Device mandates can be confusing. Here's a plain-English breakdown of the rules that matter most.",
    date: 'Jan 28, 2025',
  },
  {
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=70',
    tag: 'Business Growth',
    title: '5 Ways Remote Dispatching Saves You Money',
    excerpt:
      'Hiring an in-house dispatcher costs $40k+ per year. A remote dispatcher can give you the same — for a fraction of that.',
    date: 'Jan 12, 2025',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    stars: 5,
    text: "I was skeptical about a remote dispatcher but after 3 months I can't imagine going back. My revenue went up 22% and I spend zero time chasing loads.",
    author: 'Marcus T.',
    company: 'Owner-Operator, Texas',
  },
  {
    stars: 5,
    text: 'Very professional, always picks up the phone when my driver needs help, and the rate negotiation is top-notch. Highly recommended.',
    author: 'Elena V.',
    company: 'Fleet Owner (4 trucks), Florida',
  },
  {
    stars: 5,
    text: 'Best value I found in dispatching. The percentage fee is low and the quality of loads is genuinely better than what I was finding myself.',
    author: 'James K.',
    company: 'OTR Carrier, Ohio',
  },
];

export const HERO_STATS: Stat[] = [
  { num: '4–6%', label: 'Per-Load Fee' },
  { num: '24/7', label: 'Driver Support' },
  { num: '50+', label: 'Brokers Connected' },
  { num: '100%', label: 'Dedicated to You' },
];

export const ABOUT_STATS: Stat[] = [
  { num: '$0.20+', label: 'Average RPM Increase' },
  { num: '48hr', label: 'Avg Broker Onboarding' },
  { num: '98%', label: 'On-Time Load Coverage' },
  { num: '50+', label: 'Broker Relationships' },
];

export const NAV_PAGES = ['home', 'about', 'services', 'blog', 'contact'] as const;
