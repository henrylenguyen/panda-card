# Design Document - Panda Card Landing Page

## Overview

Landing page cho dịch vụ cho thuê thẻ Visa/Master Card được xây dựng bằng Next.js 14 với App Router và Server-Side Rendering. Kiến trúc tách biệt các section thành components riêng, page chính import và render các section theo thứ tự. Sử dụng Tailwind CSS cho styling, Heebo font từ Google Fonts, và Framer Motion cho animations.

**Key Features:**
- Testimonials Carousel với auto-play và navigation
- FAQ Accordion với màu xanh (đóng) / trắng (mở)
- Framer Motion animations cho scroll reveal, hover effects, và transitions

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Next.js App Router                    │
├─────────────────────────────────────────────────────────┤
│                      app/page.tsx                        │
│  ┌─────────────────────────────────────────────────────┐│
│  │                    <Header />                        ││
│  │                    <Hero />                          ││
│  │                    <Services />                      ││
│  │                    <Process />                       ││
│  │                    <Benefits />                      ││
│  │                    <Testimonials />                  ││
│  │                    <FAQ />                           ││
│  │                    <Contact />                       ││
│  │                    <Footer />                        ││
│  └─────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────┘
```

### Folder Structure

```
panda-card-landing/
├── app/
│   ├── layout.tsx          # Root layout với font config
│   ├── page.tsx            # Main page - import all sections
│   └── globals.css         # Global styles + Tailwind
├── components/
│   └── sections/
│       ├── Header.tsx      # Navigation header
│       ├── Hero.tsx        # Hero banner section
│       ├── Services.tsx    # Card services section
│       ├── Process.tsx     # Process steps section
│       ├── Benefits.tsx    # Benefits section
│       ├── Testimonials.tsx # Customer feedback
│       ├── FAQ.tsx         # FAQ accordion
│       ├── Contact.tsx     # Contact form
│       └── Footer.tsx      # Footer section
├── public/
│   └── images/             # Static images
├── lib/
│   └── animations.ts      # Framer Motion animation variants
├── tailwind.config.ts
├── next.config.js
└── package.json

## Dependencies

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "framer-motion": "^10.0.0"
  },
  "devDependencies": {
    "tailwindcss": "^3.0.0",
    "typescript": "^5.0.0"
  }
}
```

## Design Specifications (from Figma Analysis)

### Color Palette
- Primary Dark Blue: `#0A193D` (header, hero background)
- Primary Blue: `#007bff` / `#42A5F5` (accents, icons)
- Teal/Green (FAQ collapsed): `#14B8A6` / `bg-teal-500`
- White: `#FFFFFF` (backgrounds, text)
- Dark Gray: `#333333` (headings)
- Gray: `#666666` (body text)
- Light Gray: `#F0F0F0` (stat cards background)
- Black: `#000000` (buttons, section badges)
- Red (MasterCard accent): `#eb001b`

### Typography
- Font Family: Heebo (Google Fonts)
- Hero Title: 48px, bold, white
- Section Titles: 20px, bold, dark gray
- Body Text: 14-16px, regular, gray
- Button Text: 16-18px, bold

### Component Specifications

#### Header (70px height)
- Fixed position, white background
- Logo: "Panda" (light blue) + "Card" (dark) with panda icon
- Navigation: Homepage, Service, Process, Benefits, Contact
- Search icon + "Follow us" text on right

#### Hero Section (500px height)
- Dark blue gradient background with geometric pattern
- Left: Panda mascot holding VISA card
- Right: Tagline, main heading, description, "Register Now" button (black, rounded)

#### Service Cards
- White background, rounded corners (10px), subtle shadow
- Left border: Blue (VISA) / Red (MasterCard)
- Contains: Logo, card image, title, description

#### FAQ Accordion
- Collapsed: Teal/green background (`#14B8A6`)
- Expanded: White background
- Arrow icon: Blue, rotates on toggle
- Spring animation for expand/collapse

#### Testimonials Carousel
- Auto-play: 5 second interval
- Pause on hover
- Navigation arrows for prev/next
- Slide transition animation

### Images Available
- `hero-bg.png` - Hero section background
- `panda-mascot.png`, `panda-mascot-2.png` - Mascot images
- `visa-card.png`, `card-visa-silver.png` - Card images
- `logo-visa.png`, `logo-mastercard.png` - Card logos
- `faq-illustration.png` - FAQ section illustration
- `testimonial-avatar.png`, `testimonial-bg.png` - Testimonial assets
- `contact-bg.png` - Contact section background
- `social-fb.png`, `social-ig.png`, `social-x.png` - Social icons
- `search-icon.png` - Search icon
```

## Components and Interfaces

### Section Components

Mỗi section là một Server Component (default trong App Router), được export từ `components/sections/`:

```typescript
// Header.tsx
interface NavItem {
  label: string;
  href: string;
}

export default function Header(): JSX.Element

// Hero.tsx
export default function Hero(): JSX.Element

// Services.tsx
interface CardService {
  title: string;
  description: string;
  image: string;
}

export default function Services(): JSX.Element

// Process.tsx
interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export default function Process(): JSX.Element

// Benefits.tsx
interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export default function Benefits(): JSX.Element

// Testimonials.tsx - Client Component (carousel interactivity)
interface Testimonial {
  quote: string;
  author: string;
  avatar: string;
  role?: string;
}

interface CarouselState {
  currentIndex: number;
  isAutoPlaying: boolean;
}

'use client'
export default function Testimonials(): JSX.Element
// Features: Auto-play (5s interval), pause on hover, navigation arrows, smooth slide animation

// FAQ.tsx - Client Component (accordion interactivity)
interface FAQItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

// Color states:
// - Collapsed: bg-teal-500 (green/teal)
// - Expanded: bg-white

'use client'
export default function FAQ(): JSX.Element

// Contact.tsx - Client Component (form handling)
interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  title: string;
  detail: string;
}

'use client'
export default function Contact(): JSX.Element

// Footer.tsx
interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export default function Footer(): JSX.Element
```

### Page Component

```typescript
// app/page.tsx
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import Benefits from '@/components/sections/Benefits';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Process />
      <Benefits />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
```

## Data Models

### Navigation Data

```typescript
const navItems: NavItem[] = [
  { label: 'Homepage', href: '#hero' },
  { label: 'Service', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Contact', href: '#contact' },
];
```

### Services Data

```typescript
const cardServices: CardService[] = [
  {
    title: 'VISA CARD',
    description: 'International payment solutions with a global network. Visa cards allow you to spend in more than 200 countries with low fees and high security.',
    image: '/images/visa-card.png',
  },
  {
    title: 'MASTER CARD',
    description: 'Worldwide acceptance with premium benefits. Master Card provides seamless transactions across millions of merchants globally.',
    image: '/images/master-card.png',
  },
];
```

### Contact Form Validation

```typescript
interface ValidationError {
  field: keyof ContactFormData;
  message: string;
}

function validateContactForm(data: ContactFormData): ValidationError[] {
  const errors: ValidationError[] = [];
  
  if (!data.name.trim()) {
    errors.push({ field: 'name', message: 'Name is required' });
  }
  if (!data.email.trim() || !isValidEmail(data.email)) {
    errors.push({ field: 'email', message: 'Valid email is required' });
  }
  if (!data.phone.trim()) {
    errors.push({ field: 'phone', message: 'Phone is required' });
  }
  if (!data.title.trim()) {
    errors.push({ field: 'title', message: 'Title is required' });
  }
  
  return errors;
}
```



## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

Dựa trên phân tích prework, hầu hết các acceptance criteria của landing page là UI rendering tests (examples) vì chúng kiểm tra nội dung cụ thể. Tuy nhiên, có 2 properties có thể test được:

### Property 1: FAQ Toggle State Consistency

*For any* FAQ item in the FAQ section, clicking on the question should toggle its expanded state - if it was collapsed, it becomes expanded; if it was expanded, it becomes collapsed.

**Validates: Requirements 8.3**

### Property 2: Contact Form Validation Completeness

*For any* combination of empty required fields (name, email, phone, title) in the contact form, submitting the form should produce validation errors for all empty required fields and prevent form submission.

**Validates: Requirements 9.4**

## Error Handling

### Form Validation Errors

```typescript
// Contact form validation
const requiredFields = ['name', 'email', 'phone', 'title'];

function handleSubmit(formData: ContactFormData) {
  const errors: ValidationError[] = [];
  
  requiredFields.forEach(field => {
    if (!formData[field]?.trim()) {
      errors.push({
        field,
        message: `${field} is required`
      });
    }
  });
  
  // Email format validation
  if (formData.email && !isValidEmail(formData.email)) {
    errors.push({
      field: 'email',
      message: 'Please enter a valid email address'
    });
  }
  
  if (errors.length > 0) {
    setFormErrors(errors);
    return;
  }
  
  // Submit form
  submitForm(formData);
}
```

### Image Loading Errors

```typescript
// Fallback for failed image loads
<Image
  src={imageSrc}
  alt={altText}
  onError={(e) => {
    e.currentTarget.src = '/images/placeholder.png';
  }}
/>
```

## Testing Strategy

### Unit Testing

Sử dụng Jest và React Testing Library để test các components:

- Test render của mỗi section component
- Test form validation logic
- Test navigation behavior

### Property-Based Testing

Sử dụng **fast-check** library cho property-based testing trong TypeScript/JavaScript.

Mỗi property-based test phải:
- Chạy tối thiểu 100 iterations
- Được annotate với comment tham chiếu đến correctness property trong design document
- Format: `**Feature: panda-card-landing, Property {number}: {property_text}**`

```typescript
// Example property test structure
import fc from 'fast-check';

describe('FAQ Component', () => {
  // **Feature: panda-card-landing, Property 1: FAQ Toggle State Consistency**
  it('should toggle FAQ item state on click', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 0, max: 9 }), // FAQ item index
        fc.boolean(), // initial state
        (index, initialExpanded) => {
          // Setup FAQ with initial state
          // Click on item
          // Verify state is toggled
          return newState !== initialExpanded;
        }
      ),
      { numRuns: 100 }
    );
  });
});

describe('Contact Form', () => {
  // **Feature: panda-card-landing, Property 2: Contact Form Validation Completeness**
  it('should validate all empty required fields', () => {
    fc.assert(
      fc.property(
        fc.record({
          name: fc.oneof(fc.constant(''), fc.string()),
          email: fc.oneof(fc.constant(''), fc.emailAddress()),
          phone: fc.oneof(fc.constant(''), fc.string()),
          title: fc.oneof(fc.constant(''), fc.string()),
          detail: fc.string(),
        }),
        (formData) => {
          const errors = validateContactForm(formData);
          const emptyRequiredFields = ['name', 'email', 'phone', 'title']
            .filter(field => !formData[field]?.trim());
          
          // Each empty required field should have an error
          return emptyRequiredFields.every(field => 
            errors.some(e => e.field === field)
          );
        }
      ),
      { numRuns: 100 }
    );
  });
});
```

### Integration Testing

- Test smooth scroll navigation
- Test responsive breakpoints
- Test form submission flow
