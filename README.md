# Tanvi Patel's Portfolio - Full MERN Stack

A beautiful, modern, fully-animated portfolio website showcasing projects and skills with a dark, aesthetic UI featuring glowing particles and smooth animations.

## 🌟 Features

✨ **Beautiful UI/UX**

- Dark, starry, futuristic theme
- Purple, lavender, and pink gradients
- Glowing particles background
- Smooth scroll animations
- Hover glow effects

🎨 **Sections**

- **Navbar** - Sticky navigation with smooth scrolling
- **Hero** - Animated greeting with call-to-action buttons
- **About** - Journey into tech with feature cards
- **Skills** - Tech stack with horizontal scroll
- **Projects** - Showcase with 3 initial + view more
- **Contact** - Contact form + social links
- **Footer** - Credits and year

⚡ **Performance**

- Optimized animations
- Smooth transitions
- Responsive design
- Fast loading times

🔧 **Backend Features**

- MongoDB Atlas integration
- Contact form API
- Email notifications (Nodemailer)
- Input validation
- Error handling

## 📋 Project Structure

```
TanviPatel-Portfolio/
├── client/                          # React Frontend
│   ├── src/
│   │   ├── components/             # React components
│   │   ├── utils/                  # Utility functions
│   │   ├── assets/                 # Images
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── README.md
│
├── server/                          # Node.js Backend
│   ├── models/                     # Mongoose schemas
│   ├── routes/                     # API routes
│   ├── controllers/                # Business logic
│   ├── config/                     # Configuration
│   ├── server.js
│   ├── package.json
│   ├── .env.example
│   └── README.md
│
└── README.md                        # This file
```

## 🚀 Quick Start

### Prerequisites

- Node.js v16+
- MongoDB Atlas account (free)
- Gmail account (for emails)

### Backend Setup

1. Navigate to server:

```bash
cd server
```

2. Install dependencies:

```bash
npm install
```

3. Create `.env` file:

```bash
cp .env.example .env
```

4. Configure `.env`:

```env
MONGO_URI=your_mongodb_atlas_uri
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_app_password
PORT=5000
```

5. Start server:

```bash
npm run dev
```

Server runs on `http://localhost:5000`

### Frontend Setup

1. Open new terminal and navigate to client:

```bash
cd client
```

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

App opens at `http://localhost:3000`

## 🛠 Configuration Guide

### MongoDB Atlas

1. Create account: https://www.mongodb.com/cloud/atlas
2. Create free cluster
3. Add database user
4. Get connection string
5. Update `MONGO_URI` in `.env`

### Gmail Setup

1. Enable 2FA on Gmail account
2. Generate App Password: https://myaccount.google.com/apppasswords
3. Use App Password in `EMAIL_PASS` in `.env`

### Customization

**Update Portfolio Content:**

- `client/src/components/Hero.jsx` - Name, photo, tagline
- `client/src/components/About.jsx` - Bio, achievements
- `client/src/components/Skills.jsx` - Tech stack
- `client/src/components/Projects.jsx` - Project showcase
- `client/src/components/Contact.jsx` - Contact info

**Colors & Styling:**

- Edit `client/tailwind.config.js` for custom colors
- Modify `client/src/index.css` for global styles

**Social Media Links:**

- Update in `client/src/components/Contact.jsx`

## 📚 API Documentation

### POST `/api/contact`

Submit contact form

**Request:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Your message here..."
}
```

**Response:**

```json
{
  "success": true,
  "message": "Message sent successfully! 🎉",
  "data": {
    /* contact object */
  }
}
```

### GET `/api/contact`

Get all contact messages (admin)

### GET `/api/contact/:id`

Get specific message by ID

## 🚀 Deployment

### Frontend (Vercel)

```bash
npm run build
vercel
```

### Frontend (Netlify)

```bash
npm run build
# Upload dist/ folder
```

### Backend (Railway, Render, Heroku)

- Push to GitHub
- Connect to deployment platform
- Set environment variables
- Deploy

## 🌍 Environment Variables

### Server (.env)

```env
MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/db
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=app-specific-password
PORT=5000
NODE_ENV=development
```

### Client (.env.local)

```env
VITE_API_URL=http://localhost:5000/api
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🎯 Performance Optimization

- Lazy loading components
- Optimized images
- Code splitting
- CSS minification
- JavaScript minification

## 🔒 Security Features

- Input validation
- Email sanitization
- CORS protection
- Error handling
- Rate limiting ready

## 🐛 Troubleshooting

### Backend won't start

- Check MongoDB connection
- Verify .env variables
- Check port 5000 availability

### Frontend won't load

- Clear cache: `npm cache clean --force`
- Reinstall: `rm -rf node_modules && npm install`
- Check if backend is running

### Contact form not working

- Verify backend is running
- Check browser console for errors
- Verify MongoDB connection
- Test email credentials

## 📞 Support

For issues or questions:

1. Check README files in each folder
2. Review code comments
3. Check browser console for errors
4. Verify environment variables

## 📄 License

ISC

## ✨ Credits

Built with ❤️ using:

- React & Vite
- Tailwind CSS
- Framer Motion
- Express & MongoDB
- Nodemailer

## 👋 About

Tanvi Patel's portfolio showcasing skills in Full Stack Development with a focus on aesthetic, functional web experiences.

### Live Demo

Coming soon!

### Repository

[GitHub Link]

---

**Happy Coding! 🚀**

_Last Updated: 2024_
