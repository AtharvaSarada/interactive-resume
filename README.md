# 🚀 Interactive Resume - Atharva Sarada

A stunning, professional, highly interactive single-page resume website built with React, Tailwind CSS, and Framer Motion. This project showcases modern web development skills with impressive animations and a memorable user experience.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.5-38B2AC)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-10.16.4-FF0055)
![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF)

## ✨ Features

### 🎨 Visual Excellence
- **Aurora Background Animation** - Flowing gradient effects in Hero and Contact sections
- **Split Text Animation** - Character-by-character reveal for name and headings
- **Rotating Job Titles** - Smooth transitions between multiple roles
- **Glassmorphism UI** - Modern frosted glass effects throughout
- **Smooth Scroll Animations** - Elements animate on scroll with Intersection Observer

### 🔥 Interactive Sections
1. **Hero Section** - Full viewport height with animated name, rotating titles, and CTAs
2. **About Section** - Professional profile with animated statistics counters
3. **Skills Section** - Categorized skills with animated proficiency bars
4. **Education Timeline** - Vertical timeline with alternating card layout
5. **Projects Showcase** - Grid layout with detailed modal views
6. **Certifications** - Professional credentials with skill tags
7. **Contact Form** - Functional form with validation and Aurora background
8. **Footer** - Quick links, social icons, and back-to-top button

### 🌓 Theme Support
- Dark mode (default)
- Light mode toggle
- Smooth theme transitions
- Persistent theme preference

### ♿ Accessibility
- WCAG compliant color contrast
- Keyboard navigation support
- Screen reader compatible
- Reduced motion support for users with motion sensitivity
- Semantic HTML throughout

### 📱 Fully Responsive
- Mobile-first approach
- Breakpoints: Mobile (320px+), Tablet (768px+), Desktop (1024px+)
- Touch-optimized interactions
- Hamburger menu for mobile navigation

## 🛠️ Tech Stack

- **Framework:** React 18.2.0
- **Build Tool:** Vite 5.0.0
- **Styling:** Tailwind CSS 3.3.5
- **Animations:** Framer Motion 10.16.4
- **Icons:** Lucide React 0.263.1
- **Notifications:** React Hot Toast 2.4.1
- **Utilities:** React Intersection Observer 9.5.3

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone or navigate to the project directory:**
```bash
cd "C:\Users\Atharva\Desktop\interactive resume"
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm run dev
```

4. **Open your browser:**
Navigate to `http://localhost:3000`

The site will automatically reload when you make changes.

## 🏗️ Project Structure

```
interactive-resume/
├── index.html                 # Entry HTML file
├── package.json              # Dependencies and scripts
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
└── src/
    ├── main.jsx             # React entry point
    ├── App.jsx              # Main application component
    ├── index.css            # Global styles and design system
    ├── components/          # React components
    │   ├── Hero.jsx         # Hero section with Aurora
    │   ├── Navigation.jsx   # Sticky navbar with theme toggle
    │   ├── About.jsx        # About section with stats
    │   ├── Skills.jsx       # Skills with proficiency bars
    │   ├── Education.jsx    # Education timeline
    │   ├── Projects.jsx     # Projects grid with modals
    │   ├── Certifications.jsx # Certifications display
    │   ├── Contact.jsx      # Contact form
    │   ├── Footer.jsx       # Footer with back-to-top
    │   └── index.js         # Component exports
    ├── animations/          # Custom animation components
    │   ├── Aurora.jsx       # Aurora background effect
    │   ├── SplitText.jsx    # Character animation
    │   └── RotatingText.jsx # Text rotation animation
    ├── hooks/               # Custom React hooks
    │   └── index.js         # All custom hooks
    └── utils/               # Utility files
        └── constants.js     # Resume data and constants
```

## 🎨 Customization Guide

### Update Personal Information

Edit `src/utils/constants.js`:

```javascript
export const PERSONAL_INFO = {
  name: "Your Name",
  title: "Your Title",
  location: "Your Location",
  phone: "Your Phone",
  email: "your.email@example.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
};
```

### Modify Skills

Add or edit skills in `src/utils/constants.js`:

```javascript
export const SKILLS = {
  "Category Name": [
    { name: "Skill Name", proficiency: 90, icon: "🚀" },
    // Add more skills...
  ],
};
```

### Add Projects

Update projects array in `src/utils/constants.js`:

```javascript
export const PROJECTS = [
  {
    id: 1,
    name: "Project Name",
    tagline: "Short description",
    description: "Detailed description",
    techStack: ["React", "Node.js", "MongoDB"],
    features: ["Feature 1", "Feature 2"],
    liveDemo: "https://your-demo-url.com",
    repository: "https://github.com/your-repo",
    category: "Full-Stack",
    year: "2024"
  },
];
```

### Change Color Scheme

Modify colors in `tailwind.config.js`:

```javascript
colors: {
  primary: '#667eea',     // Change to your primary color
  secondary: '#764ba2',   // Change to your secondary color
  accent: '#00d4ff',      // Change to your accent color
}
```

### Update Resume PDF

1. Place your resume PDF in the `public` folder
2. Update the download link in `src/components/Hero.jsx`:

```javascript
link.href = '/your-resume.pdf';
link.download = 'Your_Name_Resume.pdf';
```

## 📜 Available Scripts

- **`npm run dev`** - Start development server (port 3000)
- **`npm run build`** - Build for production
- **`npm run preview`** - Preview production build locally
- **`npm run lint`** - Run ESLint for code quality

## 🚀 Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to Netlify

### GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

## 🎯 Performance Optimization

- **Code Splitting:** Components are lazy-loaded
- **Image Optimization:** Use WebP format for images
- **Bundle Size:** Optimized with Vite's build system
- **Animation Performance:** Uses CSS transforms and GPU acceleration
- **Lazy Loading:** Intersection Observer for on-scroll animations

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

### Dependencies Installation Issues

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

### Theme Not Persisting

Check browser's localStorage settings and ensure it's not blocked.

## 🤝 Contributing

This is a personal resume project, but feel free to:
- Fork the repository
- Use it as a template for your own resume
- Report bugs or suggest improvements
- Submit pull requests for enhancements

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Atharva Sarada**
- Full-Stack Developer & AI Specialist
- Location: Sangli, Maharashtra, India
- LinkedIn: [Update with your profile]
- GitHub: [Update with your profile]
- Email: [Update with your email]

## 🙏 Acknowledgments

- **ReactBits** for animation inspiration
- **Framer Motion** for powerful animation library
- **Tailwind CSS** for utility-first styling
- **Lucide React** for beautiful icons

## 📝 Notes

- Update your personal information in `src/utils/constants.js`
- Replace placeholder links with your actual social media profiles
- Add your actual resume PDF to the `public` folder
- Test on multiple devices before deployment
- Optimize images for web before adding them

## 🎬 Getting Started Checklist

- [ ] Install dependencies (`npm install`)
- [ ] Update personal information in constants.js
- [ ] Add your resume PDF to public folder
- [ ] Update social media links
- [ ] Customize colors and theme
- [ ] Add your projects and certifications
- [ ] Test responsiveness on mobile
- [ ] Test accessibility features
- [ ] Build for production (`npm run build`)
- [ ] Deploy to hosting platform

---

**Made with ❤️ and React**

For questions or support, please open an issue on GitHub or contact via email.