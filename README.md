# 🚀 Interactive Resume - Atharva Sarada

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue?style=for-the-badge)](https://atharvasarada.github.io/interactive-resume/)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.5-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-10.16.4-FF0055?style=for-the-badge)](https://www.framer.com/motion/)
[![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)

> A modern, fully interactive single-page portfolio website showcasing cutting-edge web technologies and stunning animations. Built to impress recruiters and demonstrate professional web development capabilities.

---

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Key Features](#-key-features)
- [Technology Stack](#-technology-stack)
- [Architecture & Design Patterns](#-architecture--design-patterns)
- [Installation & Setup](#-installation--setup)
- [Project Structure](#-project-structure)
- [Component Breakdown](#-component-breakdown)
- [Animation System](#-animation-system)
- [Customization Guide](#-customization-guide)
- [Deployment](#-deployment)
- [Performance Metrics](#-performance-metrics)
- [Browser Compatibility](#-browser-compatibility)
- [Future Enhancements](#-future-enhancements)
- [Contributing](#-contributing)
- [License](#-license)

---

## 📊 Project Overview

### Purpose
The Interactive Resume is a professional portfolio website designed to showcase technical skills, projects, and professional experience in an engaging, memorable format. Unlike traditional static resumes, this interactive platform demonstrates real-world development capabilities through its implementation.

### Target Audience
- **Recruiters & Hiring Managers** - First impression and skills demonstration
- **Fellow Developers** - Code quality and architecture showcase
- **Potential Clients** - Professional credibility establishment
- **Professional Network** - Easy-to-share portfolio link

### Project Goals
✅ Create a memorable first impression with modern animations  
✅ Demonstrate proficiency in React, modern CSS, and JavaScript  
✅ Provide easy content updates through configuration files  
✅ Ensure accessibility and responsive design  
✅ Optimize for performance and SEO  
✅ Enable functional contact form integration  

### Live Deployment
🌐 **Production:** [https://atharvasarada.github.io/interactive-resume/](https://atharvasarada.github.io/interactive-resume/)

---

## ✨ Key Features

### 🎨 Visual & Animation Features

#### 1. **Aurora Background Animation**
- Dynamic flowing gradient backgrounds in Hero and Contact sections
- Pure CSS implementation using keyframe animations
- Customizable color schemes via configuration
- GPU-accelerated for smooth performance

#### 2. **Split Text Character Animation**
- Character-by-character text reveal effect
- Used for name display in Hero section
- Powered by Framer Motion with stagger delay
- Smooth entrance animations for headings

#### 3. **Rotating Job Titles**
- Infinite loop animation cycling through professional titles
- Fade in/out transitions between titles
- Customizable title list and animation speed
- Adds dynamic feel to static content

#### 4. **Glassmorphism Design System**
- Modern frosted glass card effects throughout
- Backdrop blur and transparency layers
- Consistent design language across all sections
- Enhanced with subtle border gradients

#### 5. **Spotlight/Glare Hover Effects**
- Mouse-tracking spotlight effect on project cards
- Radial gradient follows cursor position
- Real-time position calculation
- Inspired by premium design libraries

#### 6. **Electric Border Effect**
- Special animated border for featured project (Gram Panchayat)
- Pulsating glow effect with color cycling
- Keyframe animation from blue to cyan
- Makes flagship project stand out visually

#### 7. **Smooth Scroll Animations**
- Elements animate into view on scroll
- Intersection Observer API implementation
- Staggered delays for sequential animations
- Optional "trigger once" or continuous mode

### 🔥 Interactive Sections

#### 1. **Hero Section**
- Full viewport height with centering
- Animated name with split text effect
- Rotating job title carousel
- Location badge with icon
- Primary CTA button (Contact Me)
- Social media links (LinkedIn, GitHub, Email)
- Scroll indicator with bounce animation

#### 2. **About Section**
- Professional profile with 3D tilt profile card
- Animated statistics counters (experience, projects, etc.)
- Two-paragraph professional summary
- Extended expertise description
- Glassmorphism cards with hover effects

#### 3. **Skills Section**
- Categorized skills by technology type
- Animated proficiency bars showing skill levels
- Icon-based visual representation
- Hover effects on skill cards
- 6 categories: Programming Languages, Frontend, Backend, Databases, AI/ML, Cloud & DevOps

#### 4. **Education Timeline**
- Vertical timeline layout with alternating cards
- International experience highlight (Germany)
- Current education status
- GPA and duration display
- Institution logos and locations
- Hover animations and depth effects

#### 5. **Projects Showcase**
- 3-column responsive grid layout
- Interactive project cards with spotlight effects
- Special electric border for featured project
- Tech stack badges
- Live demo and code repository links
- Click-to-expand modal with full details
- Project categories and year badges

#### 6. **Certifications**
- Grid layout of professional credentials
- Platform badges (Udemy, LinkedIn, etc.)
- Instructor names and dates
- Skill tags for each certification
- External links to course/credential pages
- Hover scale effects

#### 7. **Contact Form**
- Fully functional form with EmailJS integration
- Real-time validation
- Success/error toast notifications
- Form fields: Name, Email, Subject, Message
- Aurora background animation
- Contact information display with icons
- Social media links integration

#### 8. **Footer**
- Quick navigation links to all sections
- Social media icon links
- Back-to-top button with smooth scroll
- Copyright and credits
- Responsive layout

### 🌓 Theme System

#### Dark Mode (Default)
- Deep blue-black background (#0a0f1e)
- Purple-blue accent colors
- Optimized for reduced eye strain
- Professional appearance

#### Light Mode
- Clean white backgrounds
- Adjusted text colors for readability
- All animations preserved
- Toggle button in navigation

#### Features:
- Smooth color transitions (300ms)
- Persistent preference (localStorage)
- System preference detection
- Icon changes (Sun/Moon)

### ♿ Accessibility Features

- **Semantic HTML5** - Proper use of `<section>`, `<article>`, `<nav>`, etc.
- **ARIA Labels** - Screen reader support for interactive elements
- **Keyboard Navigation** - All interactive elements accessible via Tab key
- **Color Contrast** - WCAG AA compliant (4.5:1 minimum)
- **Reduced Motion** - Respects `prefers-reduced-motion` media query
- **Alt Text** - All images have descriptive alt attributes
- **Focus States** - Clear visual indicators for focused elements
- **Skip Links** - Quick navigation for screen reader users

### 📱 Responsive Design

#### Mobile (320px - 767px)
- Single column layout
- Hamburger menu navigation
- Touch-optimized buttons (48x48px minimum)
- Stacked cards and sections
- Optimized font sizes

#### Tablet (768px - 1023px)
- 2-column grid layouts
- Condensed navigation
- Medium card sizes
- Balanced spacing

#### Desktop (1024px+)
- Multi-column layouts (up to 3 columns)
- Full navigation bar
- Larger interactive areas
- Enhanced animations and effects
- Optimal reading line length

---

## 🛠️ Technology Stack

### Core Framework
- **React 18.2.0**
  - Functional components with Hooks
  - Context API for theme management
  - Virtual DOM for performance
  - Component reusability

### Build Tool
- **Vite 5.0.0**
  - Lightning-fast HMR (Hot Module Replacement)
  - Optimized production builds
  - ESBuild for transpilation
  - Rollup for bundling
  - Tree-shaking for smaller bundles

### Styling
- **Tailwind CSS 3.3.5**
  - Utility-first CSS framework
  - JIT (Just-In-Time) compilation
  - Custom design system configuration
  - Responsive design utilities
  - Dark mode support

- **PostCSS 8.4.31**
  - CSS processing and optimization
  - Autoprefixer for browser compatibility
  - CSS nesting support

### Animation Libraries
- **Framer Motion 10.16.4**
  - Declarative animations
  - Spring physics
  - Gesture support
  - Layout animations
  - Exit animations with AnimatePresence

### UI Components & Icons
- **Lucide React 0.263.1**
  - Beautiful, consistent icon set
  - 1000+ icons available
  - Customizable size and color
  - Lightweight SVG implementation

### User Experience
- **React Hot Toast 2.4.1**
  - Toast notifications
  - Success/error messages
  - Customizable styling
  - Promise-based API

- **React Intersection Observer 9.5.3**
  - Scroll-triggered animations
  - Lazy loading support
  - Performance optimized
  - Customizable thresholds

### Email Integration
- **EmailJS Browser 4.x**
  - Client-side email sending
  - No backend required
  - Template-based emails
  - Free tier: 200 emails/month

### Development Tools
- **ESLint 8.53.0**
  - Code linting and quality checks
  - React-specific rules
  - Hooks validation

- **Terser**
  - JavaScript minification
  - Code optimization

### Deployment
- **GitHub Pages**
  - Free static hosting
  - Custom domain support
  - HTTPS enabled
  - CI/CD via gh-pages

- **gh-pages package**
  - Automated deployment
  - Branch management
  - Build integration

---

## 🏗️ Architecture & Design Patterns

### Component Architecture

#### 1. **Atomic Design Principles**
```
Atoms → Individual UI elements (buttons, icons)
Molecules → Simple combinations (nav items with icons)
Organisms → Complex components (Navigation bar, Project cards)
Templates → Page sections (Hero, About, Projects)
Pages → Complete application (App.jsx)
```

#### 2. **Component Organization**
```
src/
├── components/        # Reusable UI components
├── animations/        # Custom animation components
├── hooks/             # Custom React hooks
├── utils/             # Helper functions and constants
└── config/            # Configuration files
```

#### 3. **Separation of Concerns**
- **Presentational Components** - Focus on UI rendering
- **Container Components** - Handle logic and state
- **Configuration Files** - Separate data from components
- **Utility Functions** - Reusable helper methods

### State Management

#### Local State (useState)
- Component-specific state
- Form inputs
- Modal visibility
- Hover states

#### Custom Hooks
- `useIntersectionObserver` - Scroll animations
- `useCountUp` - Number counter animations
- `useTheme` - Theme toggle management

#### Configuration-Based Content
- All content stored in `constants.js`
- Easy updates without code changes
- Type-safe data structures
- Single source of truth

### Performance Patterns

#### 1. **Code Splitting**
- Dynamic imports for large components
- Route-based splitting (if implemented)
- Vendor chunk separation

#### 2. **Memoization**
- React.memo for expensive components
- useMemo for computed values
- useCallback for function references

#### 3. **Lazy Loading**
- Intersection Observer for images
- Scroll-triggered component mounting
- Progressive content loading

#### 4. **Animation Optimization**
- CSS transforms over position changes
- GPU acceleration with `transform3d`
- `will-change` for animation hints
- RequestAnimationFrame for smooth updates

### CSS Architecture

#### 1. **Tailwind Utility Classes**
- Consistent spacing scale
- Responsive prefixes (sm:, md:, lg:)
- Custom color palette
- Component-specific utilities

#### 2. **Custom CSS**
- Global styles in `index.css`
- Component-specific styles when needed
- CSS custom properties for theming
- Animation keyframes

#### 3. **Design Tokens**
```javascript
colors: {
  primary: '#667eea',
  secondary: '#764ba2',
  accent: '#00d4ff'
}
```

---

## 📥 Installation & Setup

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16.x or higher) - [Download](https://nodejs.org/)
- **npm** (v8.x or higher) - Comes with Node.js
- **Git** - [Download](https://git-scm.com/)

### Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/AtharvaSarada/interactive-resume.git

# 2. Navigate to project directory
cd interactive-resume

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev

# 5. Open browser to http://localhost:3000
```

### Environment Setup

#### EmailJS Configuration
1. Create account at [emailjs.com](https://www.emailjs.com)
2. Set up email service (Gmail recommended)
3. Create email template
4. Update `src/config/emailjs.config.js`:

```javascript
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'your-public-key',
  SERVICE_ID: 'your-service-id',
  TEMPLATE_ID: 'your-template-id',
};
```

📖 **Detailed setup guide:** See `EMAILJS_SETUP.md`

### Development Commands

```bash
# Start development server with HMR
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run linter
npm run lint

# Deploy to GitHub Pages
npm run deploy
```

### Troubleshooting

#### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000

# Or change port in vite.config.js
server: { port: 3001 }
```

#### Module Not Found
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Build Errors
```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

---

## 📁 Project Structure

```
interactive-resume/
│
├── public/                          # Static assets
│   ├── images/                      # Profile images, project screenshots
│   │   └── profile.png             # Profile picture
│   └── resume/                      # Resume PDF files
│       └── Atharva.pdf             # Downloadable resume
│
├── src/                             # Source code
│   ├── main.jsx                     # Application entry point
│   ├── App.jsx                      # Root component with routing
│   ├── index.css                    # Global styles and Tailwind imports
│   │
│   ├── components/                  # React components
│   │   ├── Hero.jsx                # Hero section with animations
│   │   ├── Navigation.jsx          # Sticky navbar with theme toggle
│   │   ├── About.jsx               # About section with profile card
│   │   ├── Skills.jsx              # Skills section (not used, in AllSections)
│   │   ├── AllSections.jsx         # Combined sections component
│   │   ├── Footer.jsx              # Footer with links
│   │   ├── ProfileCard.jsx         # 3D tilt profile card component
│   │   ├── SpotlightCard.jsx       # Hover effect card wrapper
│   │   └── backgrounds/            # Background components
│   │       └── CssDotGrid.jsx      # Animated dot grid background
│   │
│   ├── animations/                  # Custom animation components
│   │   ├── Aurora.jsx              # Aurora background effect
│   │   ├── SplitText.jsx           # Character-by-character animation
│   │   └── RotatingText.jsx        # Rotating text carousel
│   │
│   ├── hooks/                       # Custom React hooks
│   │   └── index.js                # useIntersectionObserver, useCountUp
│   │
│   ├── utils/                       # Utility functions and data
│   │   └── constants.js            # All content data and configuration
│   │
│   └── config/                      # Configuration files
│       └── emailjs.config.js       # EmailJS API credentials
│
├── .gitignore                       # Git ignore rules
├── index.html                       # HTML entry point
├── package.json                     # Dependencies and scripts
├── package-lock.json                # Locked dependency versions
├── vite.config.js                   # Vite build configuration
├── tailwind.config.js               # Tailwind CSS configuration
├── postcss.config.js                # PostCSS configuration
├── .eslintrc.cjs                    # ESLint rules
├── README.md                        # This file
├── EMAILJS_SETUP.md                # EmailJS setup guide
├── EMAILJS_TROUBLESHOOTING.md      # EmailJS debugging guide
└── QUICK_EMAILJS_SETUP.md          # Quick 5-minute setup guide
```

### Key Files Explained

#### `vite.config.js`
- Build configuration
- Base path for GitHub Pages (`/interactive-resume/`)
- Output directory (`dist`)
- Code splitting strategy
- Terser minification settings

#### `tailwind.config.js`
- Custom color palette
- Font families
- Spacing scale
- Animation configurations
- Dark mode settings

#### `src/utils/constants.js`
- Personal information
- Skills data
- Education history
- Project portfolio
- Certifications
- All customizable content

---

## 🧩 Component Breakdown

### Core Components

#### **Hero.jsx**
**Purpose:** Landing section with primary introduction  
**Features:**
- Aurora background animation
- Split text name animation
- Rotating job titles
- Location display
- CTA button
- Social media links

**Key Code:**
```javascript
<SplitText text={PERSONAL_INFO.name} delay={1.0} />
<RotatingText items={ROTATING_TITLES} />
```

#### **Navigation.jsx**
**Purpose:** Sticky navigation bar  
**Features:**
- Smooth scroll to sections
- Active section highlighting
- Theme toggle (dark/light)
- Mobile hamburger menu
- Glassmorphism styling

**State Management:**
```javascript
const [activeSection, setActiveSection] = useState('hero');
const [theme, setTheme] = useState('dark');
```

#### **About.jsx**
**Purpose:** Professional introduction  
**Features:**
- Profile card with 3D tilt effect
- Animated statistics counters
- Professional summary
- Extended skills description
- Dot grid background

**Animation:**
```javascript
const { count } = useCountUp(statistic.value, isIntersecting);
```

#### **AllSections.jsx**
**Purpose:** Combined sections (Education, Projects, Certifications, Contact)  
**Components:**
- `<Education />` - Timeline layout
- `<Projects />` - Grid with modal
- `<Certifications />` - Credential cards
- `<Contact />` - Form with EmailJS

**Features:**
- Intersection Observer for animations
- Modal system for project details
- Form validation and submission
- Responsive grid layouts

#### **ProfileCard.jsx**
**Purpose:** Interactive 3D profile card  
**Features:**
- Mouse-tracking tilt effect
- Holographic gradient overlay
- Profile image display
- User information
- Contact button
- Hover animations

**Interactivity:**
```javascript
const handleMouseMove = (e) => {
  // Calculate tilt based on mouse position
  const tiltX = (mouseY - centerY) / sensitivity;
  const tiltY = -(mouseX - centerX) / sensitivity;
};
```

#### **SpotlightCard.jsx**
**Purpose:** Hover effect wrapper for project cards  
**Features:**
- Mouse-tracking spotlight effect
- Radial gradient overlay
- Electric border for special cards
- Smooth transitions

**Special Effect:**
```javascript
isSpecial={project.name === "Gram Panchayat Services Website"}
```

### Animation Components

#### **Aurora.jsx**
**Purpose:** Flowing gradient background  
**Implementation:**
- Multiple colored layers
- CSS keyframe animations
- Blur and opacity effects
- Customizable colors

#### **SplitText.jsx**
**Purpose:** Character-by-character reveal  
**Implementation:**
- Split string into characters
- Framer Motion stagger
- Individual character animations

#### **RotatingText.jsx**
**Purpose:** Infinite text carousel  
**Implementation:**
- Array of text items
- Fade in/out transitions
- Automatic cycling
- Configurable timing

### Background Components

#### **CssDotGrid.jsx**
**Purpose:** Animated dot pattern background  
**Features:**
- Pure CSS implementation
- Customizable dot size and spacing
- Color configuration
- Subtle pulse animation

---

## 🎬 Animation System

### Framer Motion Animations

#### 1. **Entrance Animations**
```javascript
initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
```

#### 2. **Hover Animations**
```javascript
whileHover={{ scale: 1.05, y: -10 }}
whileTap={{ scale: 0.95 }}
```

#### 3. **Stagger Animations**
```javascript
transition={{ duration: 0.8, delay: index * 0.2 }}
```

#### 4. **Exit Animations**
```javascript
<AnimatePresence>
  {isVisible && (
    <motion.div
      exit={{ opacity: 0, scale: 0.9 }}
    />
  )}
</AnimatePresence>
```

### CSS Animations

#### 1. **Aurora Background**
```css
@keyframes aurora-1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(50px, 50px) scale(1.1); }
}
```

#### 2. **Electric Border**
```css
@keyframes electric-border {
  0% { border-color: rgba(102, 126, 234, 0.5); }
  50% { border-color: rgba(0, 212, 255, 0.8); }
  100% { border-color: rgba(102, 126, 234, 0.5); }
}
```

#### 3. **Gradient Animation**
```css
@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

### Intersection Observer

#### Custom Hook
```javascript
export const useIntersectionObserver = (options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [options]);

  return { elementRef, isIntersecting };
};
```

#### Usage
```javascript
const { elementRef, isIntersecting } = useIntersectionObserver({
  threshold: 0.2,
  triggerOnce: true,
});
```

---

## 🎨 Customization Guide

### 1. Personal Information

Edit `src/utils/constants.js`:

```javascript
export const PERSONAL_INFO = {
  name: "Your Name",
  title: "Your Job Title",
  location: "City, Country",
  phone: "123-456-7890",
  email: "your.email@example.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
};
```

### 2. Rotating Job Titles

```javascript
export const ROTATING_TITLES = [
  "Full-Stack Developer",
  "React Specialist",
  "UI/UX Designer",
  "Your Title Here",
];
```

### 3. Skills

```javascript
export const SKILLS = {
  "Your Category": [
    { 
      name: "React", 
      proficiency: 90,  // 0-100
      icon: "⚛️" 
    },
    // Add more skills...
  ],
};
```

### 4. Projects

```javascript
export const PROJECTS = [
  {
    id: 1,
    name: "Project Name",
    tagline: "One-line description",
    description: "Full description for card view",
    longDescription: "Extended description for modal",
    techStack: ["React", "Node.js", "MongoDB"],
    features: ["Feature 1", "Feature 2", "Feature 3"],
    image: "/projects/project-image.jpg",
    liveDemo: "https://your-demo.com",
    repository: "https://github.com/your-repo",
    category: "Full-Stack",  // or "AI/ML", "E-commerce"
    year: "2024"
  },
];
```

### 5. Education

```javascript
export const EDUCATION = [
  {
    id: 1,
    institution: "University Name",
    degree: "Bachelor of Science",
    type: "Bachelor's Degree",
    duration: "2020 - 2024",
    location: "City, Country",
    cgpa: "8.5/10",
    description: "Brief description",
    highlights: ["Achievement 1", "Achievement 2"]
  },
];
```

### 6. Certifications

```javascript
export const CERTIFICATIONS = [
  {
    id: 1,
    name: "Certification Name",
    issuer: "Instructor/Institution",
    platform: "Udemy/Coursera/etc",
    date: "2024",
    description: "What you learned",
    skills: ["Skill 1", "Skill 2"],
    credentialUrl: "https://certificate-link.com"
  },
];
```

### 7. Color Scheme

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#667eea',      // Primary brand color
      secondary: '#764ba2',    // Secondary color
      accent: '#00d4ff',       // Accent/highlight color
      
      // Custom colors
      'custom-blue': '#1e3a8a',
      'custom-purple': '#7c3aed',
    }
  }
}
```

### 8. Fonts

Add Google Fonts to `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
```

Update `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['Inter', 'sans-serif'],
  heading: ['Poppins', 'sans-serif'],
}
```

### 9. Animation Timing

Edit `src/utils/constants.js`:

```javascript
export const ANIMATION_TIMINGS = {
  instant: 0.1,
  fast: 0.3,
  normal: 0.6,
  slow: 1.2,
  verySlow: 2.0
};
```

---

## 🚀 Deployment

### GitHub Pages (Current Setup)

#### Prerequisites
- GitHub account
- Repository on GitHub
- Git installed locally

#### Deployment Steps

```bash
# 1. Build the project
npm run build

# 2. Deploy to GitHub Pages
npm run deploy
```

This will:
- Build the production bundle
- Create/update `gh-pages` branch
- Push to GitHub
- Site live at: `https://YOUR_USERNAME.github.io/REPO_NAME/`

#### Configuration

Ensure `vite.config.js` has correct base path:

```javascript
export default defineConfig({
  base: '/interactive-resume/',  // Must match repo name
  // ...
});
```

#### Custom Domain (Optional)

1. Add `CNAME` file to `public/` folder:
```
yourdomain.com
```

2. Configure DNS with your domain provider:
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

### Alternative Deployments

#### Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

**Features:**
- Automatic builds on push
- Preview deployments for PRs
- Custom domains
- Analytics

#### Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

**Features:**
- Drag-and-drop deployment
- Form handling
- Serverless functions
- Split testing

#### AWS S3 + CloudFront

```bash
# Build
npm run build

# Sync to S3
aws s3 sync dist/ s3://your-bucket-name

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_ID --paths "/*"
```

---

## 📊 Performance Metrics

### Lighthouse Scores (Target)

- **Performance:** 95+
- **Accessibility:** 100
- **Best Practices:** 100
- **SEO:** 95+

### Bundle Size Analysis

```
Production Build:
├── index.html                    2.65 kB  (gzip: 1.00 kB)
├── assets/index.css            37.54 kB  (gzip: 8.77 kB)
├── assets/index.js             79.50 kB  (gzip: 23.50 kB)
├── assets/animations.js       102.27 kB  (gzip: 33.35 kB)
└── assets/vendor.js           139.72 kB  (gzip: 44.87 kB)

Total: ~360 kB (gzipped: ~111 kB)
```

### Optimization Techniques

#### 1. **Code Splitting**
```javascript
// Vendor chunk (React, Framer Motion)
// Animations chunk (animation libraries)
// Main chunk (application code)
```

#### 2. **Image Optimization**
- Use WebP format
- Lazy loading with Intersection Observer
- Responsive images with srcset

#### 3. **CSS Optimization**
- Tailwind JIT compilation
- PurgeCSS removes unused styles
- CSS minification with cssnano

#### 4. **JavaScript Optimization**
- Tree shaking removes unused code
- Minification with Terser
- Modern ES6+ syntax

#### 5. **Caching Strategy**
- Service Worker (optional)
- Cache-Control headers
- Versioned asset names

### Performance Best Practices

✅ Minimize render-blocking resources  
✅ Optimize images and fonts  
✅ Use CSS transforms for animations  
✅ Lazy load below-the-fold content  
✅ Minimize JavaScript execution time  
✅ Reduce unused CSS/JS  
✅ Serve static assets with efficient caching  

---

## 🌐 Browser Compatibility

### Supported Browsers

| Browser | Version | Support Level |
|---------|---------|---------------|
| Chrome  | 90+     | ✅ Full       |
| Firefox | 88+     | ✅ Full       |
| Safari  | 14+     | ✅ Full       |
| Edge    | 90+     | ✅ Full       |
| Opera   | 76+     | ✅ Full       |

### Mobile Browsers

| Browser        | Version | Support Level |
|----------------|---------|---------------|
| Chrome Mobile  | Latest  | ✅ Full