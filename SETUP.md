# SETUP GUIDE - Tanvi Patel's Portfolio

Complete step-by-step guide to get your portfolio up and running!

## 🎯 Prerequisites

Before starting, make sure you have:

- ✅ Node.js v16 or higher ([Download](https://nodejs.org/))
- ✅ Git installed
- ✅ A MongoDB Atlas account (free - [Sign up](https://www.mongodb.com/cloud/atlas))
- ✅ A Gmail account with 2FA enabled

## 📍 Step 1: MongoDB Atlas Setup

### 1.1 Create MongoDB Cluster

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up or log in
3. Click "Create" to make a new cluster
4. Choose "FREE" tier
5. Select your region (closest to you)
6. Click "Create Cluster"

### 1.2 Create Database User

1. In your cluster, go to "Database Access"
2. Click "Add New Database User"
3. Enter username: `tanvi-dev`
4. Enter password: Choose a strong password
5. Click "Add User"

### 1.3 Allow Network Access

1. Go to "Network Access"
2. Click "Add IP Address"
3. Select "Allow Access from Anywhere" (0.0.0.0/0)
4. Click "Confirm"

### 1.4 Get Connection String

1. Click "Connect" on your cluster
2. Choose "Connect your application"
3. Copy the connection string
4. Replace `<password>` with your database user password
5. Replace `<username>` with your database user username

**Save this for later!** It looks like:

```
mongodb+srv://username:password@cluster0.mongodb.net/tanvi-portfolio?retryWrites=true&w=majority
```

## 📧 Step 2: Gmail Setup

### 2.1 Enable 2-Factor Authentication

1. Go to [myaccount.google.com/security](https://myaccount.google.com/security)
2. Click "Signing in to Google"
3. Find "Password" and sign in again if needed
4. Find "2-Step Verification" and enable it

### 2.2 Generate App Password

1. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
2. Select "Mail" and "Windows Computer" (or your device)
3. Click "Generate"
4. Copy the 16-character password

**Save this for later!** It looks like:

```
xxxx xxxx xxxx xxxx
```

## 🚀 Step 3: Backend Setup

### 3.1 Navigate to Server Directory

```bash
cd server
```

### 3.2 Install Dependencies

```bash
npm install
```

### 3.3 Create Environment File

```bash
cp .env.example .env
```

### 3.4 Configure .env File

Open `.env` and fill in:

```env
# Your MongoDB connection string (from Step 1.4)
MONGO_URI=mongodb+srv://username:password@cluster0.mongodb.net/tanvi-portfolio?retryWrites=true&w=majority

# Your Gmail email address
EMAIL_USER=your-email@gmail.com

# The 16-character app password (from Step 2.2)
EMAIL_PASS=xxxx xxxx xxxx xxxx

# Server port (keep as 5000)
PORT=5000

# Environment
NODE_ENV=development
```

### 3.5 Start Backend Server

```bash
npm run dev
```

You should see:

```
✅ MongoDB Connected Successfully!
🚀 Server running on http://localhost:5000
```

## ⚛️ Step 4: Frontend Setup

Open a **NEW terminal** in the project root.

### 4.1 Navigate to Client Directory

```bash
cd client
```

### 4.2 Install Dependencies

```bash
npm install
```

### 4.3 Create Environment File

```bash
cp .env.example .env.local
```

### 4.4 Configure .env.local (Optional)

Leave as default unless backend is on different port:

```env
VITE_API_URL=http://localhost:5000/api
```

### 4.5 Start Development Server

```bash
npm run dev
```

You should see:

```
VITE v5.0.x ready in xxx ms

➜  Local:   http://localhost:3000/
➜  press h to show help
```

## ✅ Step 5: Test Everything

1. Open [http://localhost:3000](http://localhost:3000)
2. See your beautiful portfolio! 🎉
3. Scroll through all sections
4. Fill out the contact form and submit
5. Check your email for confirmation

## 🛠 Troubleshooting

### MongoDB Connection Failed

**Problem:** Server won't start with MongoDB error
**Solution:**

- Check MongoDB URI is correct in `.env`
- Verify username/password in connection string
- Check IP whitelist in MongoDB Atlas (Network Access)
- Make sure you replaced `<username>` and `<password>`

### Email Not Sending

**Problem:** Contact form doesn't send email
**Solution:**

- Check EMAIL_USER is correct (your full Gmail address)
- Verify EMAIL_PASS is the 16-character app password (not your Gmail password)
- Make sure 2FA is enabled on your Gmail account
- Check server console for error messages

### Frontend Not Loading

**Problem:** Webpage won't load or shows blank
**Solution:**

- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Check both servers are running (backend AND frontend)
- Check browser console for errors (F12)
- Verify VITE_API_URL in `.env.local` if backend is on different port

### Port Already in Use

**Problem:** "Address already in use" error
**Solution:**

- Backend: Change PORT in `.env` to 5001 in server and update client `.env.local`
- Frontend: Change port in `client/vite.config.js` server.port to 3001

### "Cannot find module" Errors

**Problem:** Missing npm packages
**Solution:**

```bash
# Backend
cd server && npm install

# Frontend
cd client && npm install
```

## 🎨 Customization

### Update Your Information

1. **Name & Introduction** (`client/src/components/Hero.jsx`)
   - Change "Hi, I'm Tanvi" to your name
   - Update tagline/subtitle

2. **About Section** (`client/src/components/About.jsx`)
   - Update your bio
   - Change feature descriptions

3. **Skills** (`client/src/components/Skills.jsx`)
   - Add/remove technologies
   - Reorganize by categories

4. **Projects** (`client/src/components/Projects.jsx`)
   - Add your projects
   - Update project links

5. **Contact Info** (`client/src/components/Contact.jsx`)
   - Update email
   - Update social media links

6. **Footer** (`client/src/components/Footer.jsx`)
   - Update tagline
   - Update copyright year

### Change Colors

Edit `client/tailwind.config.js`:

```javascript
colors: {
  accent: {
    purple: '#667eea',    // Change this
    pink: '#f093fb',      // Change this
    lavender: '#c084fc',  // Change this
  },
}
```

## 🚀 Deployment

### Deploy Backend

Options: Railway.app, Render, Heroku

1. Push code to GitHub
2. Connect your repository
3. Set environment variables
4. Deploy!

### Deploy Frontend

Options: Vercel, Netlify, GitHub Pages

**Vercel (Recommended):**

```bash
npm install -g vercel
cd client
vercel
```

**Netlify:**

```bash
npm run build
# Upload dist/ folder to netlify.com
```

## 📚 Useful Links

- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Express.js Documentation](https://expressjs.com/)

## ❓ Need Help?

1. Check the README.md files in each folder
2. Review code comments
3. Check browser console for errors (F12)
4. Check server logs in terminal

## 🎉 You're All Set!

Your portfolio is now live and ready to showcase your amazing projects!

---

**Happy coding! 💜**

_Questions? Check the individual README files in `/client` and `/server` directories._
