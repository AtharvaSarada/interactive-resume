# 📸 How to Add Your Profile Image

Follow these simple steps to add your profile photo to the interactive resume.

---

## 📋 Quick Steps

### Step 1: Prepare Your Image

**Requirements:**
- **Format:** JPG, PNG, or WebP
- **Size:** 400x400 pixels (minimum)
- **Aspect Ratio:** 1:1 (square)
- **File Size:** Less than 200KB
- **Quality:** High resolution, professional photo
- **Lighting:** Good lighting, clear face visibility
- **Background:** Preferably solid color or clean background

**Tips for Best Results:**
- Use a recent, professional-looking photo
- Ensure your face is clearly visible
- Center yourself in the frame
- Good lighting is essential
- Avoid busy backgrounds
- Smile naturally!

---

### Step 2: Optimize Your Image (Optional but Recommended)

**Online Tools:**
1. **TinyPNG** - https://tinypng.com/
   - Compress image to reduce file size
   
2. **Squoosh** - https://squoosh.app/
   - Advanced compression with preview
   
3. **Remove.bg** - https://www.remove.bg/
   - Remove background if needed

**Image Editors:**
- Photoshop, GIMP, Paint.NET, or any image editor
- Crop to square (1:1 aspect ratio)
- Resize to 400x400px or 800x800px for retina displays
- Save as JPG (quality 85-90%) or PNG

---

### Step 3: Name Your File

Rename your image file to:
```
profile.jpg
```

Or use one of these alternative names:
- `profile.png`
- `profile.webp`
- `atharva.jpg`

**Important:** Use lowercase letters and no spaces!

---

### Step 4: Place Your Image

Copy your image file to this location:

```
interactive-resume/
└── public/
    └── images/
        └── profile.jpg  ← PUT YOUR IMAGE HERE
```

**Full Path:**
```
C:\Users\Atharva\Desktop\interactive resume\public\images\profile.jpg
```

---

### Step 5: Verify Setup

1. **Check file location:**
   - Open: `C:\Users\Atharva\Desktop\interactive resume\public\images\`
   - Confirm `profile.jpg` is there

2. **Check file size:**
   - Right-click → Properties
   - Should be under 200KB

3. **Preview image:**
   - Open the image to verify it looks good
   - Check it's square (width = height)

---

## 🔄 If You Used a Different Filename

If you named your file differently (e.g., `atharva.jpg` instead of `profile.jpg`), update the ProfileCard component:

1. Open: `src/components/ProfileCard.jsx`

2. Find line 68 (the image source):
   ```jsx
   src="/images/profile.jpg"
   ```

3. Change to your filename:
   ```jsx
   src="/images/atharva.jpg"
   ```

4. Save the file

---

## ✅ Testing Your Image

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Open browser:**
   - Navigate to `http://localhost:3000`

3. **Scroll to About section:**
   - You should see your profile photo in the card
   - Photo should have a cyan/blue glowing border
   - Should be circular shape

4. **Test hover effect:**
   - Hover over the image
   - Should slightly enlarge (scale 1.05x)
   - Glow should intensify

5. **Test 3D tilt:**
   - Move mouse over the card
   - Card should tilt slightly following your cursor
   - Creates a 3D effect

---

## 🐛 Troubleshooting

### Problem: Image doesn't show

**Solutions:**
1. Check file path is correct: `public/images/profile.jpg`
2. Check filename matches exactly (case-sensitive on some systems)
3. Ensure image file isn't corrupted (try opening it)
4. Hard refresh browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
5. Check browser console for errors (F12)

### Problem: Image shows but looks distorted

**Solutions:**
1. Ensure image is square (1:1 aspect ratio)
2. Resize image to 400x400px or 800x800px
3. Check image isn't stretched in original file

### Problem: Image loads slowly

**Solutions:**
1. Compress image using TinyPNG or Squoosh
2. Reduce file size to under 200KB
3. Use JPG format instead of PNG for photos

### Problem: Fallback emoji shows instead of image

**Solutions:**
1. This means image failed to load
2. Check console for 404 error
3. Verify file path: `/images/profile.jpg`
4. Ensure file is in `public/images/` folder
5. Restart dev server after adding image

---

## 🎨 Customizing the Card

### Change Border Color

Edit `src/components/ProfileCard.jsx`, line 70:

```jsx
// Current (cyan/blue):
className="... border-accent ..."

// Change to primary color:
className="... border-primary ..."

// Or use custom color:
className="... border-[#YOUR_COLOR] ..."
```

### Change Card Shadow Color

Edit line 50:

```jsx
// Current:
shadow-accent/20 ... shadow-accent/30

// Change to primary:
shadow-primary/20 ... shadow-primary/30
```

### Adjust Image Size

Edit line 70:

```jsx
// Current (120px):
className="w-30 h-30 ..."

// Smaller (96px):
className="w-24 h-24 ..."

// Larger (160px):
className="w-40 h-40 ..."
```

---

## 📱 Mobile Responsiveness

The profile card is already responsive and will:
- Shrink on mobile devices
- Maintain aspect ratio
- Keep all effects working
- Stay centered

No additional configuration needed!

---

## ✨ Advanced: WebP Format

For best performance, use WebP format:

1. Convert your image to WebP:
   - Use Squoosh.app or Photoshop
   
2. Name it: `profile.webp`

3. Update ProfileCard.jsx:
   ```jsx
   src="/images/profile.webp"
   ```

**Benefits:**
- Smaller file size (30-50% smaller than JPG)
- Better quality at same file size
- Faster loading

---

## 🎯 Final Checklist

- [ ] Image is square (1:1 aspect ratio)
- [ ] Image is 400x400px or larger
- [ ] File size is under 200KB
- [ ] Image is named `profile.jpg`
- [ ] Image is in `public/images/` folder
- [ ] Image shows correctly in browser
- [ ] Hover effect works
- [ ] 3D tilt effect works
- [ ] Image looks professional
- [ ] No console errors

---

## 🆘 Need Help?

1. Check browser console (F12) for errors
2. Verify file path matches exactly
3. Try clearing browser cache
4. Restart development server
5. Check QUICKSTART.md for common issues

---

**That's it!** Your profile image should now be displaying beautifully in your interactive resume! 🎉

**Pro Tip:** Take a few test photos and try different ones to see which looks best with the glowing border effect!