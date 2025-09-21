# 🚀 Om Pant Portfolio - Complete Setup Guide

## 📦 What's New in This Version

### ✨ New Features Added:
- **📧 Professional Contact Form** - Material You design with real-time validation
- **📄 Resume Download Button** - Prominently placed in navigation bar
- **🎨 Enhanced Styling** - Updated CSS with contact form and button styles
- **📱 Mobile Optimizations** - Better responsive design for all devices

---

## 🏃‍♂️ Quick Start (3 minutes)

1. **Extract this zip file**
2. **Open terminal/command prompt in the extracted folder**
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Add your resume PDF:** Place your resume file in the `public/` folder and name it `resume.pdf`
5. **Start development server:**
   ```bash
   npm run dev
   ```
6. **Open in browser:** http://localhost:5173

---

## 📁 Project Structure

```
om-pant-portfolio/
├── 📁 app/
│   ├── 📁 api/contact/
│   │   └── route.ts              📧 Contact form API
│   ├── layout.tsx                🏗️  Main layout
│   └── page.tsx                  ✅ UPDATED with ContactForm
│
├── 📁 components/
│   ├── NavBar.tsx                ✅ UPDATED with ResumeButton
│   ├── ContactForm.tsx           🆕 NEW - Professional contact form
│   ├── ResumeButton.tsx          🆕 NEW - Resume download button
│   ├── GlassPanel.tsx            🔮 Glass UI component
│   ├── ThemeRipple.tsx           🌊 Theme animations
│   ├── ThemeFade.tsx             🌅 Theme transitions
│   ├── ThemeSync.tsx             🔄 Theme synchronization
│   ├── PortfolioSections.tsx     📋 Portfolio sections
│   └── SkillsGrid.tsx            🎯 Skills display grid
│
├── 📁 content/                   📄 Your data (JSON files)
│   ├── profile.json              👤 Your profile info
│   ├── skills.json               🛠️  Your skills
│   ├── projects.json             🚀 Your projects
│   ├── education.json            🎓 Your education
│   ├── experience.json           💼 Your work experience
│   └── certifications.json      🏆 Your certifications
│
├── 📁 lib/
│   └── dynamic-color.ts          🎨 Material You theming system
│
├── 📁 styles/                    🎨 CSS styling
│   ├── globals.css               ✅ UPDATED with new form & button styles
│   ├── glass.css                 🔮 Glass morphism effects
│   ├── tokens.css                🎯 Design system tokens
│   └── card-typography.css       ✍️  Typography styles
│
├── 📁 public/                    📂 Static files
│   ├── photo.jpg                 📸 Your profile photo
│   ├── favicon.jpg               🌟 Site favicon
│   └── 📄 resume.pdf             👈 ADD YOUR RESUME HERE!
│
└── Configuration files           ⚙️  Next.js config files
```

---

## 🎯 Key Features

### 📧 Contact Form
- **Professional Design:** Material You styling with glass morphism
- **Real-time Validation:** Client-side form validation
- **Loading States:** Shows spinner during form submission
- **Success/Error Messages:** Clear feedback for users
- **Mobile Responsive:** Optimized for all screen sizes
- **Accessibility:** Proper labels and keyboard navigation

### 📄 Resume Download
- **Strategic Placement:** Prominently displayed in navigation
- **Smooth Animations:** Gradient background with shine effect
- **Mobile Adaptive:** Full-width button on mobile devices
- **Professional Naming:** Downloads as "Om_Pant_Resume.pdf"

### 🎨 Design System
- **Material You:** Dynamic color theming system
- **Glass Morphism:** Beautiful translucent panels
- **Responsive:** Works perfectly on all devices
- **Animations:** Smooth hover effects and transitions
- **Dark/Light Mode:** Complete theme switching

---

## ⚡ Setup Instructions

### Step 1: Resume Setup (Important!)
1. Go to the `public/` folder
2. Add your resume PDF file
3. **Name it exactly:** `resume.pdf`
4. The download button will automatically work

### Step 2: Customize Your Info
Edit these JSON files in the `content/` folder:
- `profile.json` - Your name, title, contact info
- `skills.json` - Your technical skills
- `projects.json` - Your projects and achievements
- `experience.json` - Your work experience
- `education.json` - Your educational background
- `certifications.json` - Your certifications

### Step 3: Email Integration (Optional)
The contact form currently logs to console. To enable real email:

**Option 1: Resend (Recommended)**
```bash
npm install resend
```

**Option 2: SendGrid**
```bash
npm install @sendgrid/mail
```

**Option 3: Nodemailer**
```bash
npm install nodemailer
```

Then update `/app/api/contact/route.ts` with your email service code.

---

## 🚀 Deployment Options

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect to Vercel
3. Deploy automatically

### Netlify
1. Drag and drop the build folder
2. Or connect to GitHub

### Other Options
- GitHub Pages
- Any static hosting provider

---

## 🛠️ Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production  
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Format code
npm run format
```

---

## 📱 Mobile Experience

- **Touch-friendly:** Large touch targets for mobile
- **Responsive Forms:** Contact form adapts to screen size
- **Mobile Navigation:** Collapsible navigation on small screens
- **Optimized Performance:** Fast loading on mobile networks

---

## 🎨 Customization Tips

### Colors
- Edit `/lib/dynamic-color.ts` for color scheme changes
- The theme automatically adapts based on your profile photo

### Styling
- Modify CSS files in `/styles/` folder
- Use CSS custom properties for consistent theming

### Content
- All content is in JSON files for easy editing
- No need to touch code for content updates

---

## 🆘 Troubleshooting

### Resume button not working?
- Check that `resume.pdf` exists in the `public/` folder
- Ensure the filename is exactly `resume.pdf`

### Contact form not submitting?
- Check browser console for errors
- Verify API route is working at `/api/contact`

### Styling issues?
- Clear browser cache
- Check if CSS files are loading properly

---

## 📞 Support

Need help? Here's what to check:

1. **Node.js version:** Make sure you have Node.js 16+ installed
2. **Dependencies:** Run `npm install` if you see import errors
3. **File paths:** Ensure all files are in correct folders
4. **Browser console:** Check for any JavaScript errors

---

## 🌟 Final Checklist

- [ ] Extracted zip file
- [ ] Ran `npm install`
- [ ] Added `resume.pdf` to `public/` folder
- [ ] Updated content in JSON files
- [ ] Tested contact form
- [ ] Tested resume download
- [ ] Checked mobile responsiveness
- [ ] Ready to deploy! 🚀

---

**🎉 Congratulations! Your professional portfolio is ready to impress!**

Built with ❤️ using Next.js, React, TypeScript, and Material You Design System
