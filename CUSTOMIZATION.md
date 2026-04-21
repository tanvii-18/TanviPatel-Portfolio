# 🚀 GETTING STARTED & CUSTOMIZATION GUIDE

Quick guide to customize the portfolio for yourself.

## 📋 Checklist Before Going Live

- [ ] MongoDB Atlas cluster created and configured
- [ ] Gmail 2FA enabled and app password generated
- [ ] `.env` file created with all variables in server/
- [ ] `.env.local` file created in client/
- [ ] Both servers running without errors
- [ ] Contact form tested and working
- [ ] Email received in Gmail inbox
- [ ] Personal information updated
- [ ] Project details added/updated
- [ ] Skills list updated
- [ ] Social media links updated
- [ ] Resume/CV link ready (optional)
- [ ] Deployed or ready for deployment

## 🎯 Customization Steps

### 1️⃣ Update Your Name & Basic Info

**Hero Section** (`client/src/components/Hero.jsx`)

```jsx
// Change this:
<h1>Hi, I'm<span className="gradient-text animate-glow">Tanvi</span></h1>

// To your name:
<h1>Hi, I'm<span className="gradient-text animate-glow">YOUR_NAME</span></h1>

// Change tagline:
Turning ideas into aesthetic, functional web experiences with a passion for clean code and beautiful design.
```

**Navbar** (`client/src/components/Navbar.jsx`)

```jsx
// Change branding:
<a href="#home" className="text-2xl font-bold gradient-text">
  tanvi.dev {/* Change this to your-name.dev */}
</a>
```

**Footer** (`client/src/components/Footer.jsx`)

```jsx
<h3 className="text-xl font-bold gradient-text">
  Crafted By Tanvi {/* Change to your name */}
</h3>
```

### 2️⃣ Update About Section

**About Section** (`client/src/components/About.jsx`)

```jsx
<p className="text-lg text-dark-text/80">
  // Update this bio with your story: I'm a passionate Full Stack Developer with
  experience in MERN stack...
</p>;

// Update cards:
features = [
  {
    title: "Your Title 1",
    description: "Your description",
  },
  // ...
];
```

### 3️⃣ Add Your Skills

**Skills Section** (`client/src/components/Skills.jsx`)

```jsx
const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact size={40} /> },
      // Add or remove skills here
    ],
  },
  // Add more categories
];
```

**Available Icon Libraries:**

- React Icons (`react-icons/fa`, `react-icons/si`)
- Lucide React (`lucide-react`)

### 4️⃣ Add Your Projects

**Projects Section** (`client/src/components/Projects.jsx`)

```jsx
const allProjects = [
  {
    id: 1,
    title: "Your Project Name",
    image: "📱", // Emoji or replace with <img>
    description: "What your project does",
    tags: ["React", "Node.js", "MongoDB"],
    liveDemo: "https://your-demo-link.com",
    sourceCode: "https://github.com/your-username/project",
  },
  // Add more projects
];
```

### 5️⃣ Update Contact Information

**Contact Section** (`client/src/components/Contact.jsx`)

```jsx
// Update email:
<p className="text-dark-text/70 group-hover:text-accent-purple transition-colors">
  your-email@gmail.com
</p>;

// Update social links:
const socialLinks = [
  {
    icon: <Github size={24} />,
    url: "https://github.com/your-username",
    label: "GitHub",
  },
  {
    icon: <Linkedin size={24} />,
    url: "https://linkedin.com/in/your-profile",
    label: "LinkedIn",
  },
  {
    icon: <Twitter size={24} />,
    url: "https://twitter.com/your-handle",
    label: "Twitter",
  },
  {
    icon: <Mail size={24} />,
    url: "mailto:your-email@gmail.com",
    label: "Email",
  },
];
```

### 6️⃣ Customize Branding

**Change Portfolio Name/Domain**

In multiple files:

- `README.md` - Update title
- `client/index.html` - Update meta tags and title
- Update social links to match your domain

Example: `tanvi.dev` → `yourname.dev`

### 7️⃣ Update Colors (Optional)

**Tailwind Config** (`client/tailwind.config.js`)

```javascript
colors: {
  dark: {
    bg: '#0a0e27',      // Background color
    card: '#1a1f3a',    // Card color
    text: '#e0e0ff',    // Text color
  },
  accent: {
    purple: '#667eea',   // Primary accent
    pink: '#f093fb',     // Secondary accent
    lavender: '#c084fc', // Tertiary accent
  },
}
```

**Example Custom Theme:**

```javascript
// Blue & Cyan Theme
accent: {
  purple: '#0ea5e9',    // Cyan
  pink: '#06b6d4',      // Teal
  lavender: '#0284c7',  // Blue
}
```

### 8️⃣ Update Profile Image

Replace placeholder with your actual image:

**Option 1: Emoji (Keep Current)**

```jsx
<div className="text-6xl mb-2">👨‍💻</div>  {/* Change emoji */}
```

**Option 2: Image File**

```jsx
import profileImage from "../assets/profile.jpg";

<img
  src={profileImage}
  alt="Your Name"
  className="w-full h-full object-cover"
/>;
```

## 📝 Content Templates

### About Section Template

```
I'm a passionate [YOUR_ROLE] with [YEARS] years of experience.
Specializing in [YOUR_SPECIALTY], I love creating [WHAT_YOU_CREATE].

My expertise spans:
- Frontend: [TECHNOLOGIES]
- Backend: [TECHNOLOGIES]
- Tools: [TOOLS]

I'm passionate about [YOUR_PASSION] and believe in [YOUR_VALUES].
```

### Project Description Template

```
[Project Name]
A [brief description] that helps [end users] by [main benefit].

Built with: [Technologies used]
Features:
- Feature 1
- Feature 2
- Feature 3
```

## 🎨 CSS Customization

### Global Styles (`client/src/index.css`)

Add custom animations:

```css
@keyframes yourAnimation {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.animate-your-animation {
  animation: yourAnimation 1s ease-in-out;
}
```

### Component Styles

Example: Custom button style

```jsx
<motion.button className="px-8 py-3 bg-gradient-to-r from-[#your-color] to-[#your-color] rounded-lg">
  Your Button
</motion.button>
```

## 🔧 Environment Configuration

### Development Variables (`server/.env`)

```env
MONGO_URI=mongodb+srv://[user]:[password]@[cluster].mongodb.net/[database]
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-char-app-password
PORT=5000
NODE_ENV=development
```

### Frontend Variables (`client/.env.local`)

```env
VITE_API_URL=http://localhost:5000/api
```

### Production Variables (Deployment)

```env
# Server
MONGO_URI=production-mongodb-uri
EMAIL_USER=production-email
EMAIL_PASS=production-app-password
PORT=5000
NODE_ENV=production

# Client
VITE_API_URL=https://your-api-domain.com/api
```

## 📱 Testing Checklist

### Frontend Tests

- [ ] Navbar scrolls smoothly
- [ ] All links work
- [ ] Mobile menu opens/closes
- [ ] Animations are smooth
- [ ] Responsive on mobile (375px)
- [ ] Responsive on tablet (768px)
- [ ] Responsive on desktop (1024px+)
- [ ] Theme toggle works
- [ ] Hover effects work

### Backend Tests

- [ ] Server starts without errors
- [ ] MongoDB connects
- [ ] `/api` endpoint responds
- [ ] Contact form submissions work
- [ ] Validation catches bad inputs
- [ ] Emails send successfully
- [ ] Error messages are helpful

### Integration Tests

- [ ] Form submission → Success toast
- [ ] Form validation shows errors
- [ ] Email received from form
- [ ] All links navigate correctly
- [ ] External links open in new tabs

## 🚀 Deployment Checklist

Before deploying:

- [ ] All `.env` variables set
- [ ] Build completes without errors
- [ ] No console errors
- [ ] Form submissions work
- [ ] Emails send
- [ ] All links work
- [ ] Responsive on all devices

## 🔗 Useful Resources

### React

- [React Documentation](https://react.dev)
- [React Hooks Guide](https://react.dev/reference/react)
- [React Patterns](https://reactpatterns.com)

### Tailwind CSS

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [UI Components](https://tailwindui.com)
- [Color Palettes](https://chir.p/tailwind-colors)

### Framer Motion

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Animation Examples](https://www.framer.com/motion/examples/)

### Components

- [Lucide Icons](https://lucide.dev)
- [React Icons](https://react-icons.github.io/react-icons)

### Deployment

- [Vercel Deploy](https://vercel.com/docs)
- [Netlify Deploy](https://docs.netlify.com)
- [Railway Deploy](https://docs.railway.app)

## 💬 Tips & Best Practices

### Do's ✅

- Keep content fresh and updated
- Test contact form regularly
- Monitor email delivery
- Use meaningful project names
- Write clear descriptions
- Update skills as you learn new ones
- Test on real devices
- Use meaningful commit messages
- Document your deployments

### Don'ts ❌

- Don't hardcode sensitive data
- Don't commit `.env` files
- Don't use offensive language
- Don't share Gmail passwords
- Don't forget to update portfolio
- Don't break existing functionality
- Don't make huge commits
- Don't deploy without testing

## 📞 Support

### Common Issues

**"Form not submitting"**

- Check backend is running
- Verify `.env.local` API URL
- Check browser console for errors
- Test with simple message

**"Emails not sending"**

- Verify email credentials
- Check email validation
- Check Gmail 2FA is enabled
- Verify app password

**"Styling looks weird"**

- Clear browser cache
- Reinstall Tailwind: `npm install`
- Check theme configuration
- Verify color values

---

**Happy customizing! 🎉**

_Remember: Your portfolio is a reflection of you. Keep it updated, keep it authentic, and let your personality shine through!_
