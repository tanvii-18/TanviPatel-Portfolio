# 📦 PROJECT STRUCTURE & FILE ORGANIZATION

Complete guide to understanding the project structure.

## 🌳 Directory Tree

```
TanviPatel-Portfolio/
│
├── 📁 client/                      # React Frontend
│   ├── 📁 src/
│   │   ├── 📁 components/         # React Components
│   │   │   ├── Navbar.jsx         # Navigation bar with smooth scroll
│   │   │   ├── Hero.jsx           # Landing/Hero section
│   │   │   ├── About.jsx          # About me section
│   │   │   ├── Skills.jsx         # Skills showcase with horizontal scroll
│   │   │   ├── Projects.jsx       # Projects grid with expandable view
│   │   │   ├── Contact.jsx        # Contact form & social links
│   │   │   ├── Footer.jsx         # Footer with credits
│   │   │   ├── ParticlesBackground.jsx  # Animated particle system
│   │   │   └── index.js           # Component barrel exports
│   │   │
│   │   ├── 📁 utils/              # Utility Functions
│   │   │   ├── api.js             # API calls & configuration
│   │   │   ├── useWindowSize.js   # Custom hook for window dimensions
│   │   │   ├── useScrollReveal.js # Custom hook for scroll animation
│   │   │   └── index.js           # Utils barrel exports
│   │   │
│   │   ├── 📁 assets/             # Images & Media
│   │   │   ├── [images here]
│   │   │   └── [other media]
│   │   │
│   │   ├── App.jsx                # Main App component
│   │   ├── main.jsx               # Vite entry point
│   │   └── index.css              # Global styles & animations
│   │
│   ├── index.html                 # HTML template
│   ├── package.json               # Frontend dependencies
│   ├── vite.config.js             # Vite configuration
│   ├── tailwind.config.js         # Tailwind CSS configuration
│   ├── postcss.config.js          # PostCSS configuration
│   ├── .env.example               # Environment variable template
│   ├── .gitignore                 # Git ignore rules
│   └── README.md                  # Frontend documentation
│
├── 📁 server/                      # Node.js/Express Backend
│   ├── 📁 models/
│   │   └── Contact.js             # MongoDB Contact schema
│   │
│   ├── 📁 routes/
│   │   └── contact.js             # Contact API routes
│   │
│   ├── 📁 controllers/
│   │   └── contactController.js   # Contact logic & email handling
│   │
│   ├── 📁 config/
│   │   └── email.js               # Email configuration (Nodemailer)
│   │
│   ├── server.js                  # Main Express server
│   ├── package.json               # Backend dependencies
│   ├── .env.example               # Environment variable template
│   ├── .gitignore                 # Git ignore rules
│   └── README.md                  # Backend documentation
│
├── .github/
│   └── copilot-instructions.md    # GitHub Copilot instructions
│
├── 📄 README.md                   # Main project README
├── 📄 SETUP.md                    # Step-by-step setup guide
├── 📄 FEATURES.md                 # Features & architecture docs
├── 📄 CUSTOMIZATION.md            # Customization guide
├── 📄 PROJECT_STRUCTURE.md        # This file
├── 🔧 setup.bat                   # Windows setup script
└── 🔧 setup.sh                    # Mac/Linux setup script
```

## 📄 File-by-File Guide

### Frontend Files

#### **App.jsx** (Main Component)

```jsx
// Purpose: Root component wrapper
// Imports all sections and ParticlesBackground
// Manages dark mode state
// Returns complete page structure
```

#### **main.jsx** (Entry Point)

```jsx
// Purpose: Vite entry point
// Mounts React app to DOM
// Should not be modified
```

#### **index.html** (HTML Template)

```html
<!-- Purpose: HTML template for Vite -->
<!-- Contains meta tags for SEO -->
<!-- Root div for React -->
<!-- Script tag for main.jsx -->
```

#### **index.css** (Global Styles)

```css
/* Global styles for entire app */
/* Tailwind imports */
/* Keyframe animations */
/* Custom utility classes */
/* Scrollbar styling */
```

### Components Details

#### **Navbar.jsx**

```jsx
Purpose: Navigation header
Features:
- Sticky positioning
- Smooth scroll navigation
- Mobile menu toggle
- Theme toggle button
- Active link highlighting

Props:
- isDarkMode (boolean)
- setIsDarkMode (function)

Uses: react-scroll, framer-motion, lucide-react
```

#### **Hero.jsx**

```jsx
Purpose: Landing/Hero section
Features:
- Animated greeting
- Profile image placeholder
- Call-to-action buttons
- Floating animations
- Scroll indicator

Uses: react-scroll, framer-motion
```

#### **About.jsx**

```jsx
Purpose: About me section
Features:
- Bio description
- Feature cards
- Scroll reveal animations
- Icon display

Uses: framer-motion, lucide-react (icons)
```

#### **Skills.jsx**

```jsx
Purpose: Technology skills showcase
Features:
- Categorized skills
- Horizontal scrolling
- Animated cards
- Navigation buttons
- Responsive design

Uses: framer-motion, react-icons, lucide-react
```

#### **Projects.jsx**

```jsx
Purpose: Portfolio projects showcase
Features:
- Project grid layout
- Expandable project list
- Project cards with details
- Call-to-action buttons
- Technology tags

Uses: framer-motion, lucide-react
```

#### **Contact.jsx**

```jsx
Purpose: Contact form & information
Features:
- Contact form with validation
- Social media links
- Loading states
- Success/error notifications
- Email integration

Uses: framer-motion, react-toastify, lucide-react, api.js
```

#### **Footer.jsx**

```jsx
Purpose: Footer section
Features:
- Copyright information
- Branding tagline
- Credits text

Uses: framer-motion
```

#### **ParticlesBackground.jsx**

```jsx
Purpose: Animated particle background
Features:
- Canvas-based animation
- Particle system
- Connecting lines
- Responsive
- Performance optimized

Uses: React hooks, Canvas API
```

### Configuration Files

#### **vite.config.js**

```javascript
// Vite build configuration
// React plugin setup
// Dev server port (3000)
// Build optimization
```

#### **tailwind.config.js**

```javascript
// Tailwind CSS configuration
// Custom colors
// Custom animations
// Font families
// Spacing values
```

#### **postcss.config.js**

```javascript
// PostCSS configuration
// Tailwind CSS plugin
// Autoprefixer plugin
```

### Backend Files

#### **server.js** (Main Server)

```javascript
// Express app setup
// Middleware configuration
// MongoDB connection
// Route mounting
// Error handling
// Server startup
```

#### **models/Contact.js** (Database Schema)

```javascript
// Mongoose schema for contacts
// Field validation
// Data types
// Default values
// Timestamps
```

#### **routes/contact.js** (API Routes)

```javascript
// POST /api/contact - Submit form
// GET /api/contact - Get all messages
// GET /api/contact/:id - Get single message
```

#### **controllers/contactController.js** (Business Logic)

```javascript
// Form validation logic
// Database operations
// Email sending logic
// Error handling

Functions:
- submitContact() - Handle form submission
- getAllContacts() - Fetch all messages
- getContact() - Fetch single message
```

#### **config/email.js** (Email Configuration)

```javascript
// Nodemailer setup
// SMTP configuration
// Email sending function
// Template generation
```

### Documentation Files

#### **README.md** (Main README)

- Project overview
- Quick start guide
- Feature list
- Project structure
- Key technologies
- Setup instructions
- Deployment guide

#### **SETUP.md** (Setup Guide)

- Prerequisites
- Step-by-step instructions
- MongoDB configuration
- Gmail configuration
- Backend & frontend setup
- Testing instructions
- Troubleshooting

#### **FEATURES.md** (Features & Architecture)

- Detailed feature list
- API documentation
- Database schema
- Security features
- Technical architecture
- Performance metrics
- Future enhancements

#### **CUSTOMIZATION.md** (Customization Guide)

- Checklist before launch
- Customization steps
- Content templates
- Color customization
- Deployment checklist
- Testing checklist
- Best practices

### Script Files

#### **setup.bat** (Windows Setup Script)

```batch
REM Automated setup for Windows
REM Checks for Node.js
REM Installs dependencies
REM Prompts for configuration
```

#### **setup.sh** (Mac/Linux Setup Script)

```bash
#!/bin/bash
# Automated setup for Mac/Linux
# Checks for Node.js
# Installs dependencies
# Displays next steps
```

## 🔄 Component Dependencies

### Import Flow

```
App.jsx
├── Navbar.jsx
├── Hero.jsx (uses react-scroll, framer-motion)
├── About.jsx (uses framer-motion)
├── Skills.jsx (uses react-icons, framer-motion)
├── Projects.jsx (uses framer-motion)
├── Contact.jsx (uses api.js, react-toastify)
├── Footer.jsx
└── ParticlesBackground.jsx
```

### API Dependencies

```
Contact.jsx
└── api.js
    └── submitContactForm()
        ├── MONGO_URI (backend)
        ├── Email validation
        └── Toast notifications
```

## 📊 Data Structures

### Contact Data Model

```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  message: String,
  status: 'new' | 'read' | 'archived',
  createdAt: Date,
  updatedAt: Date
}
```

### Skill Data Structure

```javascript
{
  name: String,
  icon: ReactComponent,
  category: 'Frontend' | 'Backend' | 'Tools'
}
```

### Project Data Structure

```javascript
{
  id: Number,
  title: String,
  image: String,
  description: String,
  tags: Array<String>,
  liveDemo: URL,
  sourceCode: URL
}
```

## 🔗 File Dependencies

### Critical Dependencies

**Frontend**

- React (UI rendering)
- Vite (Build tool)
- Tailwind (Styling)
- Framer Motion (Animations)

**Backend**

- Express (Server)
- MongoDB (Database)
- Mongoose (ODM)
- Nodemailer (Emails)

### Import Patterns

```javascript
// Component imports
import React from 'react'
import { motion } from 'framer-motion'
import { [Icon] from 'lucide-react'

// Internal imports
import { submitContactForm } from '../utils/api'

// API imports
import { API_URL } from '../utils/api'
```

## 🎯 File Purposes Summary

| File                    | Purpose          | Modifiable |
| ----------------------- | ---------------- | ---------- |
| App.jsx                 | Root component   | ✅ Yes     |
| Navbar.jsx              | Navigation       | ✅ Yes     |
| Hero.jsx                | Landing section  | ✅ Yes     |
| About.jsx               | About section    | ✅ Yes     |
| Skills.jsx              | Skills section   | ✅ Yes     |
| Projects.jsx            | Projects section | ✅ Yes     |
| Contact.jsx             | Contact section  | ✅ Yes     |
| Footer.jsx              | Footer           | ✅ Yes     |
| ParticlesBackground.jsx | Particles        | ⚠️ Careful |
| index.css               | Global styles    | ✅ Yes     |
| vite.config.js          | Vite config      | ⚠️ Careful |
| tailwind.config.js      | Tailwind config  | ✅ Yes     |
| server.js               | Express server   | ⚠️ Careful |
| Contact.js              | DB Schema        | ⚠️ Careful |

## 🚀 File Update Frequency

| File         | Update Frequency | Reason             |
| ------------ | ---------------- | ------------------ |
| Hero.jsx     | Once             | Personal info      |
| About.jsx    | Quarterly        | Updated story      |
| Skills.jsx   | Monthly          | New skills         |
| Projects.jsx | Weekly           | New projects       |
| Contact.jsx  | Rarely           | Social links       |
| server.js    | Rarely           | Config set once    |
| package.json | Quarterly        | Dependency updates |

## 📈 Total File Count

```
Frontend:
- Components: 8 files
- Utils: 4 files
- Config: 4 files
- Documentation: 2 files
Total: ~18 files

Backend:
- Models: 1 file
- Routes: 1 file
- Controllers: 1 file
- Config: 1 file
- Main: 1 file
- Documentation: 2 files
Total: ~7 files

Documentation:
- Setup guides: 4 files
- Scripts: 2 files
- GitHub: 1 file
Total: ~7 files

Grand Total: ~32 files
```

---

**Understanding this structure helps with:**

- ✅ Finding where to make changes
- ✅ Understanding component flow
- ✅ Debugging issues
- ✅ Maintaining the project
- ✅ Adding new features
- ✅ Deploying changes

_For detailed information on specific files, see their respective documentation._
