# Tanvi Patel's Portfolio - Development Guide

This workspace contains a full MERN stack portfolio application with an animated, beautiful frontend and a robust backend.

## Quick Start

### Run Both Servers (Recommended)

Open two terminals:

**Terminal 1 - Backend:**

```bash
cd server
npm install
npm run dev
```

**Terminal 2 - Frontend:**

```bash
cd client
npm install
npm run dev
```

Access the portfolio at `http://localhost:3000`

## Setup Checklist

- [ ] Configure MongoDB Atlas (`server/.env`)
- [ ] Configure Gmail App Password (`server/.env`)
- [ ] Install server dependencies (`npm install` in server/)
- [ ] Install client dependencies (`npm install` in client/)
- [ ] Start backend (`npm run dev` in server/)
- [ ] Start frontend (`npm run dev` in client/)
- [ ] Test contact form

## 📁 File Organization

- **/client** - React frontend with Tailwind CSS and Framer Motion
- **/server** - Node.js/Express backend with MongoDB

Each folder has its own `README.md` with detailed information.

## Key Features

✨ Dark starry theme with purple/pink gradients
🎬 Smooth animations and transitions
📱 Fully responsive design
✉️ Functional contact form
🎯 Smooth scroll navigation
💜 Beautiful hover effects

## Environment Setup

1. **Create server/.env:**

```
MONGO_URI=mongodb+srv://...
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=app-password
PORT=5000
```

2. **Create client/.env.local:**

```
VITE_API_URL=http://localhost:5000/api
```

## Customization

- Update personal info in component files
- Change colors in `tailwind.config.js`
- Add projects in Projects component
- Update skills in Skills component

## Deployment

See individual README files in client/ and server/ for deployment instructions.

## Support

Check README.md files in each folder for detailed documentation.

---

Happy coding! 🚀
