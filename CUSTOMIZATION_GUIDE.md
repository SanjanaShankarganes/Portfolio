# 🎨 Quick Customization Guide

## Step-by-Step Guide to Personalize Your Portfolio

### 1️⃣ Update Your Personal Information

#### Hero Section (`src/components/Hero.tsx`)
Replace these placeholders:
- **Line 19**: Change `"YN"` to your initials
- **Line 26**: Replace `"Your Name"` with your actual name
- **Line 33**: Update your title/role
- **Line 40**: Write your personal tagline
- **Lines 55-78**: Update all social media links

```typescript
// Example:
<span className="gradient-text">Sanjana S</span>
```

#### Contact Section (`src/components/Contact.tsx`)
- **Line 60**: Update email to `your.email@example.com`
- **Lines 64-77**: Update all social links and values

### 2️⃣ Add Your Skills

#### Skills Section (`src/components/Skills.tsx`)
- **Lines 18-47**: Modify skills in each category
- Add new skills or remove ones you don't use
- Change the icons if needed

Example:
```typescript
{ name: 'Vue.js', icon: <SiVuedotjs />, color: 'text-green-500' }
```

### 3️⃣ Showcase Your Projects

#### Projects Section (`src/components/Projects.tsx`)
- **Lines 11-82**: Replace all 6 sample projects
- For each project, update:
  - `title`: Project name
  - `description`: Brief description
  - `tags`: Technologies used
  - `github`: Your GitHub repo URL
  - `demo`: Live demo URL
  - `gradient`: Color scheme

### 4️⃣ Tell Your Story

#### About Section (`src/components/About.tsx`)
- **Lines 50-67**: Write your personal journey
- Update the feature cards if needed
- Add your photo URL if you want

### 5️⃣ Update Footer

#### Footer Section (`src/components/Footer.tsx`)
- **Line 10**: Replace `"Your Name"` with your name

### 6️⃣ Change Colors (Optional)

#### `tailwind.config.js`
```javascript
colors: {
  primary: '#6366f1',    // Change this
  secondary: '#8b5cf6',  // And this
}
```

### 7️⃣ Add Your Photo/Avatar (Optional)

Replace the initial placeholder in `Hero.tsx` with an image:
```typescript
<img 
  src="/your-photo.jpg" 
  alt="Your Name"
  className="w-full h-full rounded-full object-cover"
/>
```

Put your photo in the `public` folder.

## 🚀 Quick Start Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📱 For LinkedIn

1. **Deploy your portfolio** (see README.md for deployment options)
2. **Get a screenshot**: Take a full-page screenshot of your portfolio
3. **Add to LinkedIn**:
   - Profile → Add profile section → Featured → Link
   - Paste your portfolio URL
   - Add title: "My Professional Portfolio"
   - Add description: Brief summary
   - Upload the screenshot

## 💡 Pro Tips

✅ **Keep it updated** - Add new projects regularly  
✅ **Real links** - Make sure all GitHub and demo links work  
✅ **Professional email** - Use a professional email address  
✅ **Optimize images** - Compress images for faster loading  
✅ **Test on mobile** - Check how it looks on different devices  
✅ **Proofread** - Check for typos and grammar  
✅ **Get feedback** - Ask friends or colleagues for feedback

## 🎯 Most Important Files to Edit

| Priority | File | What to Update |
|----------|------|----------------|
| 🔴 High | `Hero.tsx` | Name, title, bio, social links |
| 🔴 High | `Projects.tsx` | Your actual projects |
| 🔴 High | `Contact.tsx` | Email and contact info |
| 🟡 Medium | `About.tsx` | Your story and journey |
| 🟡 Medium | `Skills.tsx` | Your technical skills |
| 🟢 Low | `Footer.tsx` | Your name |

## ❓ Need Help?

- **Dev server not starting?** Make sure port 5173 is available
- **Styling issues?** Check if Tailwind CSS is properly configured
- **Build errors?** Run `npm install` again
- **Can't see changes?** Clear browser cache or use incognito mode

## 🎉 You're Ready!

Once you've customized everything:
1. Run `npm run build` to create production files
2. Deploy to Vercel, Netlify, or GitHub Pages (see README.md)
3. Share on LinkedIn and social media
4. Keep updating with new projects!

---

**Good luck with your portfolio! 🚀**


