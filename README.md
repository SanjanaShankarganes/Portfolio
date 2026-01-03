# 🚀 Professional Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, a clean design, and a professional layout perfect for showcasing your work.

## ✨ Features

- 🎨 **Modern Design** - Beautiful gradient backgrounds and smooth animations
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Fast Performance** - Built with Vite for lightning-fast load times
- 🎭 **Smooth Animations** - Using Framer Motion for professional transitions
- 💼 **Project Showcase** - Display your best work with style
- 📧 **Contact Form** - Easy way for visitors to get in touch
- 🎯 **SEO Friendly** - Optimized for search engines

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Next-generation build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready animation library
- **React Icons** - Popular icon library

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn

## 🚀 Getting Started

### 1. Clone the repository

```bash
cd Portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Customize your portfolio

Edit the following files to add your personal information:

#### **src/components/Hero.tsx**
- Update your name, title, and bio
- Replace "YN" with your initials
- Update social media links

#### **src/components/About.tsx**
- Modify the "My Journey" section with your story
- Customize the features to match your strengths

#### **src/components/Skills.tsx**
- Add/remove skills based on your expertise
- Update the skill categories

#### **src/components/Projects.tsx**
- Replace sample projects with your actual projects
- Update project descriptions, tags, and links
- Add screenshots if desired

#### **src/components/Contact.tsx**
- Update email address
- Update social media links
- Configure form submission (optional)

#### **src/components/Footer.tsx**
- Update your name

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to see your portfolio!

## 🏗️ Build for Production

To create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect Vite settings
6. Click "Deploy"

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Click "Deploy site"

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/Portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Update `vite.config.ts`:
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',
})
```

4. Deploy:
```bash
npm run deploy
```

## 🎨 Customization Tips

### Colors
Edit `tailwind.config.js` to change the color scheme:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
    },
  },
}
```

### Animations
Modify animations in `tailwind.config.js` or add custom animations in `src/index.css`

### Layout
All components are in `src/components/` - feel free to modify or add new sections

## 📱 LinkedIn Integration

1. Build your portfolio and deploy it
2. Get your portfolio URL
3. Go to your LinkedIn profile
4. Click "Add profile section" → "Featured" → "Add link"
5. Paste your portfolio URL
6. Add a title and description
7. Consider adding a screenshot as the preview image

## 🐛 Troubleshooting

### Port already in use
Change the port in `vite.config.ts`:
```typescript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
})
```

### Build errors
Clear cache and reinstall:
```bash
rm -rf node_modules dist
npm install
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 💡 Tips for LinkedIn

- Take a high-quality screenshot of your portfolio
- Write a compelling description
- Pin it to the top of your profile
- Share it as a post to get more visibility
- Update it regularly with new projects

## 📧 Support

If you have any questions or need help, feel free to reach out!

---

**Made with ❤️ and React**

Happy coding! 🎉


