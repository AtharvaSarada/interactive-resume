# 🚀 Quick Start Guide - Interactive Resume

Get your interactive resume up and running in 5 minutes!

## 📋 Prerequisites

Before you begin, make sure you have:
- **Node.js** (version 16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- A code editor (VS Code recommended)
- A modern web browser (Chrome, Firefox, Safari, or Edge)

Check if you have Node.js installed:
```bash
node --version
npm --version
```

## 🎯 Step-by-Step Setup

### Step 1: Open Terminal in Project Directory

1. Open your terminal/command prompt
2. Navigate to the project folder:
   ```bash
   cd "C:\Users\Atharva\Desktop\interactive resume"
   ```

### Step 2: Install Dependencies

Run the following command to install all required packages:
```bash
npm install
```

This will install:
- React
- Tailwind CSS
- Framer Motion
- Lucide React (icons)
- React Hot Toast (notifications)
- And other dependencies

**⏱️ This may take 2-3 minutes depending on your internet speed.**

### Step 3: Start Development Server

Once installation is complete, start the development server:
```bash
npm run dev
```

You should see output like:
```
VITE v5.0.0  ready in 500 ms

➜  Local:   http://localhost:3000/
➜  Network: use --host to expose
➜  press h to show help
```

### Step 4: Open in Browser

1. Open your web browser
2. Go to: `http://localhost:3000`
3. Your interactive resume should now be running! 🎉

## 🎨 Customizing Your Resume

### Update Personal Information

1. Open `src/utils/constants.js`
2. Find the `PERSONAL_INFO` section
3. Update with your information:

```javascript
export const PERSONAL_INFO = {
  name: "Your Full Name",
  title: "Your Job Title",
  location: "Your City, State, Country",
  phone: "Your Phone Number",
  email: "your.email@example.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
};
```

4. Save the file - the page will automatically reload!

### Add Your Skills

In the same `constants.js` file, find the `SKILLS` object:

```javascript
export const SKILLS = {
  "Programming Languages": [
    { name: "JavaScript", proficiency: 90, icon: "⚡" },
    // Add more skills...
  ],
  "Your Category": [
    { name: "Your Skill", proficiency: 85, icon: "🚀" },
  ],
};
```

### Update Projects

Find the `PROJECTS` array and add your projects:

```javascript
export const PROJECTS = [
  {
    id: 1,
    name: "Your Project Name",
    tagline: "One-line description",
    description: "Short description for the card",
    longDescription: "Detailed description for the modal",
    techStack: ["React", "Node.js", "MongoDB"],
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3"
    ],
    liveDemo: "https://your-demo.com",
    repository: "https://github.com/your-repo",
    category: "Full-Stack",
    year: "2024"
  },
];
```

## 🎭 Changing Theme

The site defaults to **dark mode**. Users can toggle between dark and light mode using the theme toggle button in the navigation bar.

To change the default theme, edit `index.html`:

```javascript
// Change 'dark' to 'light' for light mode default
const theme = localStorage.getItem('theme') || 'dark';
```

## 🎨 Customizing Colors

### Method 1: Tailwind Config (Recommended)

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: '#667eea',     // Your primary color
  secondary: '#764ba2',   // Your secondary color
  accent: '#00d4ff',      // Your accent color
}
```

### Method 2: CSS Variables

Edit `src/index.css` and find the `:root` section:

```css
:root {
  --primary: #667eea;
  --secondary: #764ba2;
  --accent: #00d4ff;
}
```

## 📄 Adding Your Resume PDF

1. Create a `public` folder in the project root (if it doesn't exist)
2. Add your resume PDF: `public/resume.pdf`
3. The download button in the Hero section will automatically download it

To change the filename, edit `src/components/Hero.jsx`:

```javascript
link.href = '/resume.pdf';
link.download = 'Your_Name_Resume.pdf';
```

## 🌐 Building for Production

When you're ready to deploy:

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

### Preview Production Build

To test the production build locally:

```bash
npm run preview
```

## 🚀 Deploying Your Resume

### Option 1: Vercel (Easiest)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Sign up/Login with GitHub
4. Import your repository
5. Deploy! ✨

### Option 2: Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect GitHub and select your repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Deploy!

### Option 3: GitHub Pages

```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Deploy:
```bash
npm run deploy
```

## 🐛 Common Issues & Solutions

### Issue: Port 3000 is already in use

**Solution:** Kill the process using port 3000 or use a different port:
```bash
npm run dev -- --port 3001
```

### Issue: Module not found errors

**Solution:** Delete node_modules and reinstall:
```bash
rm -rf node_modules
npm install
```

### Issue: Styles not loading

**Solution:** Clear Vite cache:
```bash
rm -rf node_modules/.vite
npm run dev
```

### Issue: Changes not reflecting

**Solution:** 
1. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
2. Clear browser cache
3. Restart dev server

## 📱 Testing on Mobile

### Option 1: Use your local network

1. Start the dev server: `npm run dev`
2. Find your computer's IP address:
   - Windows: `ipconfig` (look for IPv4)
   - Mac/Linux: `ifconfig` (look for inet)
3. On your phone, go to: `http://YOUR-IP:3000`

### Option 2: Use ngrok

1. Install ngrok: [ngrok.com](https://ngrok.com)
2. Run: `ngrok http 3000`
3. Use the provided URL on any device

## 💡 Next Steps

1. ✅ Customize all content in `constants.js`
2. ✅ Add your actual resume PDF
3. ✅ Update social media links
4. ✅ Test on different devices
5. ✅ Deploy to a hosting platform
6. ✅ Share your resume link!

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Vite Guide](https://vitejs.dev/guide/)

## 🆘 Need Help?

If you encounter any issues:

1. Check the console for error messages (F12 in browser)
2. Read the error message carefully
3. Search for the error online
4. Check the README.md for more detailed information

## 🎉 You're All Set!

Your interactive resume is now ready to impress recruiters! 

Remember to:
- Update all personal information
- Test on multiple devices
- Proofread all content
- Share with friends for feedback

**Good luck with your job search!** 🚀

---

**Questions?** Open an issue on GitHub or check the main README.md file.