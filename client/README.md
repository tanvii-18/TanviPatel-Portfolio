# Tanvi Patel's Portfolio - Frontend

Beautiful, modern portfolio website with dark theme, animations, and responsive design.

## 🎨 Features

- ✨ Animated starry background with floating particles
- 🌈 Purple, lavender, and pink gradient aesthetics
- 🎬 Smooth animations using Framer Motion
- 📱 Fully responsive design
- 🎯 Smooth scroll navigation
- ✅ Contact form with backend integration
- 🎭 Hover effects and interactive elements
- 🌙 Theme toggle option

## 🚀 Technologies

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **React Scroll** - Smooth scrolling
- **Axios** - HTTP client
- **React Toastify** - Notifications
- **Lucide React** - Icon library
- **GSAP** - Animation library

## 📋 Setup Instructions

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

1. Navigate to client directory:

```bash
cd client
```

2. Install dependencies:

```bash
npm install
```

3. Create `.env.local` file:

```bash
cp .env.example .env.local
```

4. Configure environment variables (optional):

```env
VITE_API_URL=http://localhost:5000/api
```

## 🏃 Running the Development Server

Start development server:

```bash
npm run dev
```

The app opens at `http://localhost:3000` (or next available port)

## 📦 Building for Production

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## 📁 Project Structure

```
client/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Navigation bar
│   │   ├── Hero.jsx                # Hero section
│   │   ├── About.jsx               # About section
│   │   ├── Skills.jsx              # Skills section
│   │   ├── Projects.jsx            # Projects showcase
│   │   ├── Contact.jsx             # Contact form
│   │   ├── Footer.jsx              # Footer
│   │   ├── ParticlesBackground.jsx # Animated background
│   │   └── index.js                # Component exports
│   ├── utils/
│   │   ├── api.js                  # API calls
│   │   ├── useWindowSize.js        # Window size hook
│   │   ├── useScrollReveal.js      # Scroll reveal hook
│   │   └── index.js                # Utils exports
│   ├── assets/                     # Images and assets
│   ├── App.jsx                     # Main component
│   ├── main.jsx                    # Entry point
│   └── index.css                   # Global styles
├── index.html                      # HTML template
├── tailwind.config.js              # Tailwind config
├── postcss.config.js               # PostCSS config
├── vite.config.js                  # Vite config
├── package.json
├── .env.example
└── .gitignore
```

## 🎨 Design System

### Colors

- **Background**: `#0a0e27` (dark-bg)
- **Card**: `#1a1f3a` (dark-card)
- **Text**: `#e0e0ff` (dark-text)
- **Purple**: `#667eea` (accent-purple)
- **Pink**: `#f093fb` (accent-pink)
- **Lavender**: `#c084fc` (accent-lavender)

### Animations

- Smooth scroll behavior
- Hover scale effects
- Fade and slide-in animations
- Floating particles background
- Glow effects on elements

## 🔧 Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`)
   - Change name and tagline
   - Update profile image

2. **About Section** (`src/components/About.jsx`)
   - Modify bio and achievements
   - Update feature cards

3. **Skills Section** (`src/components/Skills.jsx`)
   - Add/remove skills
   - Modify categories

4. **Projects Section** (`src/components/Projects.jsx`)
   - Add your projects
   - Update descriptions and links

5. **Contact Section** (`src/components/Contact.jsx`)
   - Update email and social links
   - Modify contact message

### Colors

Edit `client/tailwind.config.js` to customize color scheme:

```javascript
colors: {
  accent: {
    purple: '#667eea',
    pink: '#f093fb',
    lavender: '#c084fc',
  },
}
```

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Flexible grid layouts
- Touch-friendly interactions

## 🔗 API Integration

Contact form submits to backend:

```javascript
POST /api/contact
{
  name: string,
  email: string,
  message: string
}
```

## 🚀 Deployment

### Vercel

```bash
vercel
```

### Netlify

```bash
npm run build
# Upload dist/ folder to Netlify
```

### GitHub Pages

Update `vite.config.js`:

```javascript
export default {
  base: "/repository-name/",
};
```

## 📝 License

ISC

## 👥 Author

Tanvi Patel

## 🙏 Credits

- Framer Motion for smooth animations
- Tailwind CSS for utility-first styling
- Lucide React for beautiful icons
- React community for amazing libraries
