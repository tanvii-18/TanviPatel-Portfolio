# ⚡ QUICK REFERENCE GUIDE

Quick lookup for common tasks and commands.

## 🚀 Quick Start Commands

### First Time Setup

```bash
# Windows
setup.bat

# Mac/Linux
chmod +x setup.sh
./setup.sh
```

### Manual Setup

```bash
# Install server dependencies
cd server && npm install

# Install client dependencies
cd client && npm install
```

### Start Development

```bash
# Terminal 1 - Backend
cd server && npm run dev

# Terminal 2 - Frontend
cd client && npm run dev
```

## 📝 Common File Edits

### Update Name

- `client/src/components/Navbar.jsx` - "tanvi.dev"
- `client/src/components/Hero.jsx` - "Hi, I'm Tanvi"
- `client/src/components/Footer.jsx` - "Crafted By Tanvi"

### Add Skills

- Insert in `client/src/components/Skills.jsx` → `skillCategories` array

### Add Projects

- Insert in `client/src/components/Projects.jsx` → `allProjects` array

### Update Social Links

- Edit `client/src/components/Contact.jsx` → `socialLinks` array

### Change Colors

- Edit `client/tailwind.config.js` → `colors` object

## 🔧 Environment Files

### Create Server Config

```bash
cd server
cp .env.example .env
# Edit .env with your values
```

### Create Client Config

```bash
cd client
cp .env.example .env.local
# Usually no changes needed
```

### Required .env Variables

```env
# server/.env
MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/db
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=app-password-16-chars
PORT=5000
NODE_ENV=development
```

## 📚 File Locations Cheatsheet

```
Component               Location
─────────────────────────────────────────────────────────
Navigation             client/src/components/Navbar.jsx
Hero/Landing           client/src/components/Hero.jsx
About Section          client/src/components/About.jsx
Skills                 client/src/components/Skills.jsx
Projects               client/src/components/Projects.jsx
Contact Form           client/src/components/Contact.jsx
Footer                 client/src/components/Footer.jsx
Background             client/src/components/ParticlesBackground.jsx
API Config             client/src/utils/api.js
Styles                 client/src/index.css
Tailwind Config        client/tailwind.config.js

Backend
─────────────────────────────────────────────────────────
Main Server            server/server.js
Contact API            server/routes/contact.js
Contact Logic          server/controllers/contactController.js
Contact Schema         server/models/Contact.js
Email Config           server/config/email.js
```

## 🐛 Debugging Checklist

### Backend Won't Start

```bash
# Check Node.js installed
node --version

# Check MongoDB connection
# Verify MONGO_URI in .env

# Check port availability
# Try PORT=5001 in .env

# Check dependencies
npm install
```

### Frontend Won't Load

```bash
# Clear cache
CTRL+SHIFT+DELETE (browser cache)
npm cache clean --force

# Reinstall
rm -rf node_modules package-lock.json
npm install

# Check API URL
# Verify VITE_API_URL connects to backend
```

### Form Not Working

```bash
# Check backend running
# Verify .env variables
# Check browser console (F12)
# Test form validation
# Check email credentials
```

## 📱 Testing Checklist

### Mobile (375px)

- [ ] Navbar hamburger works
- [ ] Text is readable
- [ ] Buttons are clickable
- [ ] Form is usable

### Tablet (768px)

- [ ] Layout adapts
- [ ] Navigation works
- [ ] Hero section responsive
- [ ] Projects grid shows 2 columns

### Desktop (1024px+)

- [ ] All sections visible
- [ ] Animations smooth
- [ ] Hover effects work
- [ ] Colors accurate

### Functionality

- [ ] All links work
- [ ] Form validates
- [ ] Form submits
- [ ] Email received
- [ ] Toast notifications appear

## 🎯 Component Customization

### Navbar

```jsx
// File: client/src/components/Navbar.jsx

// Change this:
<a href="#home" className="...">
  tanvi.dev
</a>;

// Change nav links:
const navLinks = [
  { name: "Home", to: "home" },
  // Add/remove links
];
```

### Hero

```jsx
// File: client/src/components/Hero.jsx

// Change name:
<span className="gradient-text">YOUR_NAME</span>

// Change tagline:
Turning ideas into aesthetic, functional web experiences.

// Change CTA buttons:
<ScrollLink to="projects">
```

### Skills

```jsx
// File: client/src/components/Skills.jsx

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact size={40} /> },
      // Add more
    ],
  },
];
```

### Projects

```jsx
// File: client/src/components/Projects.jsx

const allProjects = [
  {
    id: 1,
    title: "Project Name",
    description: "Description",
    tags: ["React", "Node.js"],
    liveDemo: "url",
    sourceCode: "url",
  },
];
```

## 🔗 API Reference

### Contact API

```
Endpoint: POST /api/contact
URL:      http://localhost:5000/api/contact

Request:
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'm interested..."
}

Response (Success):
{
  "success": true,
  "message": "Message sent successfully! 🎉",
  "data": { /* contact object */ }
}

Response (Error):
{
  "success": false,
  "message": "Validation error message"
}
```

## 💾 Build & Deployment

### Build Frontend

```bash
cd client
npm run build

# Output in: client/dist/
```

### Build Backend

```bash
# Backend only needs dependencies installed
cd server
npm install

# Ready to deploy
```

### Deploy Frontend (Vercel)

```bash
npm install -g vercel
cd client
vercel
```

### Deploy Backend (Railway)

1. Push to GitHub
2. Connect repository to Railway
3. Set environment variables
4. Deploy

## 📊 Performance Tips

### Frontend

- [ ] Run `npm run build` and check size
- [ ] Lazy load images
- [ ] Minimize animations on mobile
- [ ] Use CSS classes instead of inline styles
- [ ] Compress images

### Backend

- [ ] Add database indexes
- [ ] Implement caching
- [ ] Add rate limiting
- [ ] Monitor error logs
- [ ] Use connection pooling

## 🔐 Security Checklist

- [ ] Never commit `.env` files
- [ ] Use environment variables
- [ ] Validate all inputs
- [ ] Sanitize email inputs
- [ ] Use HTTPS in production
- [ ] Enable CORS properly
- [ ] Use secure passwords
- [ ] Update dependencies regularly

## 📞 Support Resources

| Topic         | Resource                                            |
| ------------- | --------------------------------------------------- |
| React         | [react.dev](https://react.dev)                      |
| Vite          | [vitejs.dev](https://vitejs.dev)                    |
| Tailwind      | [tailwindcss.com](https://tailwindcss.com)          |
| Framer Motion | [framer.com/motion](https://www.framer.com/motion/) |
| Express       | [expressjs.com](https://expressjs.com)              |
| MongoDB       | [mongodb.com/docs](https://www.mongodb.com/docs)    |
| Mongoose      | [mongoosejs.com](https://mongoosejs.com)            |

## 🎨 Color Codes Reference

```javascript
// Current Theme
Purple:   #667eea
Pink:     #f093fb
Lavender: #c084fc

// Backgrounds
Dark BG:  #0a0e27
Card BG:  #1a1f3a
Text:     #e0e0ff

// Alternative Themes
Blue Theme:
- #0ea5e9, #06b6d4, #0284c7

Green Theme:
- #22c55e, #16a34a, #15803d

Red Theme:
- #ef4444, #dc2626, #b91c1c
```

## 🚀 Deployment Checklist

Before deploying:

- [ ] All tests pass
- [ ] No console errors
- [ ] .env variables set
- [ ] Build completes
- [ ] Form works
- [ ] Emails send
- [ ] Links valid
- [ ] Responsive tested
- [ ] Performance checked
- [ ] Security reviewed

## 📝 Useful Commands

```bash
# Frontend
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build

# Backend
npm run dev          # Start with nodemon
npm start            # Start server
npm install          # Install dependencies

# General
npm list             # List all dependencies
npm outdated         # Check for updates
npm update           # Update dependencies
npm audit            # Check security
npm prune            # Remove unused packages
```

## 🔔 Important Notes

⚠️ **Do NOT:**

- Commit `.env` files
- Use passwords in code
- Share API keys
- Deploy without testing
- Modify `vite.config.js` unless needed
- Change port without updating config

✅ **DO:**

- Use environment variables
- Test before deploying
- Keep dependencies updated
- Document your changes
- Test on multiple devices
- Monitor error logs

---

**Bookmark this for quick reference!**

**Need more help?**

- See SETUP.md for detailed setup
- See CUSTOMIZATION.md for changes
- See FEATURES.md for architecture
- See PROJECT_STRUCTURE.md for files
