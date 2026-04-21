# Tanvi Patel's Portfolio - Backend

Modern, aesthetic portfolio backend built with Node.js, Express, and MongoDB Atlas.

## 🚀 Technologies

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB Atlas** - Cloud database
- **Mongoose** - MongoDB ODM
- **Nodemailer** - Email sending
- **Cors** - Cross-origin resource sharing

## 📋 Setup Instructions

### Prerequisites

- Node.js (v16+)
- MongoDB Atlas account (free tier available)
- Gmail account (for email sending)

### Installation

1. Navigate to server directory:

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

4. Configure environment variables in `.env`:

```env
MONGO_URI=mongodb+srv://username:password@cluster0.mongodb.net/tanvi-portfolio?retryWrites=true&w=majority
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password
PORT=5000
NODE_ENV=development
```

### MongoDB Atlas Setup

1. Create a cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a database user
3. Get connection string and add to `.env`

### Email Configuration

1. Enable 2-Factor Authentication on Gmail
2. Generate App Password: https://myaccount.google.com/apppasswords
3. Use App Password in `.env`

## 🏃 Running the Server

Development mode (with auto-reload):

```bash
npm run dev
```

Production mode:

```bash
npm start
```

Server runs on `http://localhost:5000`

## 📚 API Endpoints

### Contact Form

- **POST** `/api/contact` - Submit contact form
- **GET** `/api/contact` - Get all messages (admin)
- **GET** `/api/contact/:id` - Get specific message

## 📁 Project Structure

```
server/
├── models/
│   └── Contact.js          # Mongoose schema
├── routes/
│   └── contact.js          # API routes
├── controllers/
│   └── contactController.js # Business logic
├── config/
│   └── email.js            # Email configuration
├── server.js               # Main server file
├── package.json
├── .env.example
└── .gitignore
```

## 🔒 Security

- Input validation on all routes
- Email sanitization
- Error handling with proper status codes
- CORS enabled for frontend communication

## 📧 Email Templates

The backend includes professional email templates for:

- Contact submission confirmation
- Admin notification email

## 🐛 Troubleshooting

### MongoDB Connection Issues

- Verify MONGO_URI is correct
- Check IP whitelist on MongoDB Atlas
- Ensure credentials are correct

### Email Sending Issues

- Verify Gmail App Password is configured correctly
- Check LESS secure apps setting
- Verify email address format

## 📝 License

ISC

## 👥 Author

Tanvi Patel
