# PROMPT: Replace Profile Image with ReactBits Profile Card

## 🎯 OBJECTIVE

Replace the current placeholder circular image with animated border in the **About Section** with a professional, animated ReactBits-style Profile Card component.

---

## 📋 SPECIFICATIONS

### **Profile Card Requirements:**

#### **1. Visual Design**
- **Style:** Modern, glassmorphism effect with subtle animations
- **Card Size:** 
  - Width: 320px - 380px (max-w-sm in Tailwind)
  - Height: Auto-fit content
  - Border radius: 16px - 24px
- **Background:** 
  - Glassmorphism effect: `rgba(255, 255, 255, 0.1)` with backdrop blur
  - Border: `1px solid rgba(255, 255, 255, 0.2)`
  - Box shadow: Soft glow with your accent color

#### **2. Card Structure (Top to Bottom):**

```
┌─────────────────────────────┐
│                             │
│    [Profile Image]          │  ← Circular, 120px diameter
│                             │
│    Atharva U. Sarada        │  ← Name (large, bold)
│                             │
│  Web Developer and          │  ← Role (smaller, muted)
│  A.I. Generalist            │
│                             │
│    [Contact Me Button]      │  ← Animated button
│                             │
└─────────────────────────────┘
```

#### **3. Profile Image Specifications:**
- **Source:** `/images/profile.jpg` or `/images/atharva.jpg` (you choose the filename)
- **Size:** 120px diameter (circular)
- **Border:** 4px solid border with gradient or glow effect
- **Position:** Centered at top of card
- **Animation:** 
  - Subtle hover scale (1.05x)
  - Glow effect on hover
  - Optional: Slight rotation on mouse move (3D tilt)

#### **4. Name Display:**
- **Text:** "Atharva U. Sarada"
- **Font Size:** `text-2xl` (24px) or `text-3xl` (30px)
- **Font Weight:** Bold (font-weight: 700)
- **Color:** White (or adapt to theme)
- **Animation:** None or subtle fade-in on card mount
- **Margin:** 16px top spacing from image

#### **5. Role/Title Display:**
- **Text:** "Web Developer and A.I. Generalist"
- **Font Size:** `text-base` (16px) or `text-lg` (18px)
- **Font Weight:** Medium (font-weight: 500)
- **Color:** Muted/secondary text color (e.g., `text-gray-400`)
- **Margin:** 8px top spacing from name
- **Line Height:** Comfortable (1.5 or 1.6)

#### **6. Contact Me Button:**
- **Text:** "Contact Me"
- **Style:** 
  - Magnetic button effect (from ReactBits)
  - Or Star Border effect
  - Or Glow Button effect
- **Size:** 
  - Padding: `px-6 py-3` (24px horizontal, 12px vertical)
  - Full width or auto-width centered
- **Colors:**
  - Background: Your accent color (#00d4ff) or primary (#667eea)
  - Text: White
  - Hover: Lighter shade + scale 1.05x
- **Animation:**
  - Hover: Scale + glow
  - Click: Click Spark effect (particle burst)
  - Magnetic attraction to cursor
- **Functionality:** 
  - **CRITICAL:** Smooth scroll to Contact section when clicked
  - Implementation: `onClick` handler that scrolls to `#contact` section
  - Use smooth scroll behavior

#### **7. Card Animations:**

**On Mount/Scroll Into View:**
- Fade in with slight slide up
- Duration: 0.6s
- Easing: ease-out
- Delay: 200ms (after section header)

**Hover Effects:**
- Card: Subtle lift with increased shadow
- Transform: `translateY(-8px)`
- Shadow increase
- Glow effect around border

**Interactive Features:**
- 3D Tilt effect based on mouse position (optional but impressive)
- Card tilts slightly toward cursor
- Smooth spring animation
- Boundaries: max 10-15 degrees rotation

---

## 🎨 EXACT STYLING SPECIFICATIONS

### **Card Container:**
```css
/* Tailwind Classes */
className="
  max-w-sm w-full mx-auto
  bg-white/10 backdrop-blur-lg
  border border-white/20
  rounded-2xl
  shadow-xl shadow-cyan-500/20
  p-8
  flex flex-col items-center
  transition-all duration-300
  hover:shadow-2xl hover:shadow-cyan-500/30
  hover:-translate-y-2
"
```

### **Profile Image:**
```css
/* Tailwind Classes */
className="
  w-30 h-30
  rounded-full
  border-4 border-cyan-400
  shadow-lg shadow-cyan-500/50
  mb-6
  transition-all duration-300
  hover:scale-105
  hover:shadow-xl hover:shadow-cyan-500/60
"

/* Image Source */
src="/images/profile.jpg"
alt="Atharva U. Sarada"
```

### **Name Text:**
```css
/* Tailwind Classes */
className="
  text-3xl font-bold
  text-white
  mb-2
  text-center
"
```

### **Role Text:**
```css
/* Tailwind Classes */
className="
  text-lg font-medium
  text-gray-300
  mb-6
  text-center
  leading-relaxed
"
```

### **Contact Button:**
```css
/* Tailwind Classes */
className="
  px-8 py-3
  bg-gradient-to-r from-cyan-500 to-blue-600
  text-white font-semibold
  rounded-lg
  shadow-lg shadow-cyan-500/50
  transition-all duration-300
  hover:scale-105
  hover:shadow-xl hover:shadow-cyan-500/70
  active:scale-95
  relative overflow-hidden
"
```

---

## 💻 IMPLEMENTATION INSTRUCTIONS

### **Step 1: Remove Current Placeholder**
Locate the About section and find the current profile image implementation. It likely looks something like:

```jsx
// REMOVE THIS:
<div className="profile-image-container">
  <img src="placeholder.jpg" alt="Profile" />
  <div className="animated-border"></div>
</div>
```

### **Step 2: Create ProfileCard Component**

Create a new component file or inline component:

```jsx
import React, { useRef, useState } from 'react';

const ProfileCard = () => {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  // Smooth scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Optional: 3D tilt effect
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={cardRef}
      className="
        max-w-sm w-full mx-auto
        bg-white/10 backdrop-blur-lg
        border border-white/20
        rounded-2xl
        shadow-xl shadow-cyan-500/20
        p-8
        flex flex-col items-center
        transition-all duration-300
        hover:shadow-2xl hover:shadow-cyan-500/30
        hover:-translate-y-2
      "
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
      }}
    >
      {/* Profile Image */}
      <img
        src="/images/profile.jpg"
        alt="Atharva U. Sarada"
        className="
          w-30 h-30
          rounded-full
          border-4 border-cyan-400
          shadow-lg shadow-cyan-500/50
          mb-6
          transition-all duration-300
          hover:scale-105
          hover:shadow-xl hover:shadow-cyan-500/60
        "
      />
      
      {/* Name */}
      <h3 className="
        text-3xl font-bold
        text-white
        mb-2
        text-center
      ">
        Atharva U. Sarada
      </h3>
      
      {/* Role */}
      <p className="
        text-lg font-medium
        text-gray-300
        mb-6
        text-center
        leading-relaxed
      ">
        Web Developer and A.I. Generalist
      </p>
      
      {/* Contact Button */}
      <button
        onClick={scrollToContact}
        className="
          px-8 py-3
          bg-gradient-to-r from-cyan-500 to-blue-600
          text-white font-semibold
          rounded-lg
          shadow-lg shadow-cyan-500/50
          transition-all duration-300
          hover:scale-105
          hover:shadow-xl hover:shadow-cyan-500/70
          active:scale-95
          relative overflow-hidden
          group
        "
      >
        <span className="relative z-10">Contact Me</span>
        
        {/* Shimmer effect on hover */}
        <div className="
          absolute inset-0
          bg-gradient-to-r from-transparent via-white/20 to-transparent
          transform -translate-x-full
          group-hover:translate-x-full
          transition-transform duration-700
        "></div>
      </button>
    </div>
  );
};

export default ProfileCard;
```

### **Step 3: Add to About Section**

Replace the existing image in your About section:

```jsx
// In your About.jsx or About section:

<section id="about" className="about-section">
  <h2>About Me</h2>
  
  {/* REPLACE OLD IMAGE WITH THIS: */}
  <ProfileCard />
  
  <div className="about-content">
    <p>Your professional summary here...</p>
  </div>
</section>
```

### **Step 4: Image File Setup**

Place your profile photo in the project:

```
project-root/
├── public/
│   └── images/
│       └── profile.jpg  ← PUT YOUR PHOTO HERE
├── src/
│   ├── components/
│   │   └── ProfileCard.jsx
│   └── ...
```

**Image Requirements:**
- Format: JPG, PNG, or WebP
- Recommended size: 400x400px minimum (will be displayed at 120px)
- Aspect ratio: 1:1 (square)
- File size: < 200KB (optimize if larger)
- Good lighting and professional look

---

## 🎨 ADVANCED ENHANCEMENTS (Optional)

### **1. Add ReactBits Magnetic Button:**

If you have access to ReactBits Magnetic Button component:

```jsx
import MagneticButton from '@/components/animations/MagneticButton';

// Replace regular button with:
<MagneticButton onClick={scrollToContact}>
  Contact Me
</MagneticButton>
```

### **2. Add Click Spark Effect:**

```jsx
import ClickSpark from '@/components/animations/ClickSpark';

// Wrap button with ClickSpark:
<ClickSpark>
  <button onClick={scrollToContact}>
    Contact Me
  </button>
</ClickSpark>
```

### **3. Add Glow Effect Animation:**

```jsx
// Add this to button classes:
className="
  ...existing classes...
  before:absolute before:inset-0
  before:rounded-lg
  before:bg-gradient-to-r before:from-cyan-500 before:to-blue-600
  before:opacity-0
  before:transition-opacity
  hover:before:opacity-100
  before:blur-xl
  before:-z-10
"
```

### **4. Add Stats Badges (Optional):**

Add small achievement badges below the role:

```jsx
<div className="flex gap-2 mb-6">
  <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-cyan-400">
    4+ Years
  </span>
  <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-cyan-400">
    10+ Projects
  </span>
</div>
```

---

## 🎯 INTEGRATION CHECKLIST

Before implementing, ensure:

- [ ] Profile image is prepared and placed in `/public/images/` folder
- [ ] Image is optimized (< 200KB)
- [ ] Image is square (1:1 aspect ratio)
- [ ] Contact section has `id="contact"` attribute
- [ ] Smooth scroll behavior is enabled globally or in function
- [ ] Color scheme matches your site theme
- [ ] Card is responsive on mobile (test at 375px width)
- [ ] Button hover states work correctly
- [ ] Scroll to contact functionality is tested
- [ ] Dark/Light theme compatibility (if applicable)

---

## 📱 RESPONSIVE BEHAVIOR

### **Mobile (< 768px):**
```css
/* Adjust card size */
max-w-xs  /* Smaller card */
p-6       /* Reduced padding */

/* Adjust image */
w-24 h-24  /* Smaller image (96px) */

/* Adjust text */
text-2xl   /* Smaller name */
text-base  /* Smaller role */

/* Adjust button */
w-full     /* Full width button */
```

### **Desktop (> 768px):**
Use the specifications above (standard sizes).

---

## 🚨 IMPORTANT NOTES

1. **Image Path:** Make absolutely sure the image path is correct:
   - If using `public/images/profile.jpg`, reference as `/images/profile.jpg`
   - If using `src/assets/images/profile.jpg`, import and use the import

2. **Smooth Scroll:** Ensure contact section has the ID:
   ```jsx
   <section id="contact" className="contact-section">
   ```

3. **Performance:** The card uses:
   - Backdrop blur (ensure browser support or provide fallback)
   - CSS transforms (hardware accelerated, performant)
   - No heavy animations that could cause lag

4. **Accessibility:**
   - Button has proper click handler
   - Image has alt text
   - Keyboard navigation works (button is focusable)
   - Sufficient color contrast on text

5. **Theme Integration:**
   - Colors should match your existing theme
   - Adjust cyan (#00d4ff) to your accent color if different
   - Ensure glassmorphism works with your background

---

## 🎨 COLOR CUSTOMIZATION

If you want to match your exact color scheme:

```jsx
// Replace cyan colors with your accent color:
border-cyan-400    → border-[#YourColor]
shadow-cyan-500/50 → shadow-[#YourColor]/50
from-cyan-500      → from-[#YourColor]
text-cyan-400      → text-[#YourColor]
```

**Your color palette (from earlier):**
- Primary: `#667eea`
- Secondary: `#764ba2`
- Accent: `#00d4ff`

---

## ✅ EXPECTED RESULT

After implementation, your About section should have:

✅ A beautiful, modern profile card with glassmorphism effect
✅ Your profile photo with glowing border
✅ Your name "Atharva U. Sarada" prominently displayed
✅ Your role "Web Developer and A.I. Generalist" clearly shown
✅ An animated "Contact Me" button that smoothly scrolls to contact section
✅ Subtle 3D tilt effect on mouse hover
✅ Smooth animations and transitions
✅ Perfect responsiveness on all devices
✅ Professional, memorable visual impact

---

## 🚀 FINAL PROMPT TO GIVE YOUR AI AGENT

**Copy this complete prompt:**

```
Replace the current placeholder profile image in the About section with a ReactBits-style animated Profile Card component.

SPECIFICATIONS:
- Card: Glassmorphism design (white/10 background, backdrop blur, white/20 border)
- Profile Image: 120px circular, from /images/profile.jpg, with 4px cyan border and glow
- Name: "Atharva U. Sarada" in white, 3xl, bold, centered
- Role: "Web Developer and A.I. Generalist" in gray-300, lg, medium, centered
- Button: "Contact Me" with gradient (cyan to blue), magnetic hover effect, click sparks
- Button Action: Smooth scroll to #contact section when clicked
- Card Animations: 3D tilt on mouse move, hover lift (-8px), glow increase
- Responsive: Smaller on mobile (max-w-xs, w-24 image, text-2xl name)

LAYOUT:
Center the card in the About section, remove the old circular image component with animated border.

STYLING:
Use Tailwind CSS with the exact classes specified. Match the site's color scheme (primary: #667eea, accent: #00d4ff).

FUNCTIONALITY:
Button must scroll smoothly to contact section. Add onClick handler with scrollIntoView({behavior: 'smooth'}).

IMAGE:
I will place my profile photo at /public/images/profile.jpg (400x400px, < 200KB, square aspect ratio).

Make it impressive with smooth animations but keep it performant!