#!/bin/bash

# Tanvi's Portfolio - Quick Setup Script

echo ""
echo "============================================================"
echo ""
echo "  🌟 Tanvi Patel's Portfolio - Setup Wizard 🌟"
echo ""
echo "============================================================"
echo ""

# Check Node.js
echo "Checking for Node.js..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "Please download from https://nodejs.org/"
    echo "Then run this script again."
    exit 1
fi
echo "✅ Node.js is installed: $(node --version)"

# Install Backend
echo ""
echo "============================================================"
echo "Installing Backend Dependencies..."
echo "============================================================"
cd server || exit
npm install
if [ $? -ne 0 ]; then
    echo "❌ Backend installation failed!"
    exit 1
fi
echo "✅ Backend dependencies installed"

# Install Frontend
echo ""
echo "============================================================"
echo "Installing Frontend Dependencies..."
echo "============================================================"
cd ../client || exit
npm install
if [ $? -ne 0 ]; then
    echo "❌ Frontend installation failed!"
    exit 1
fi
echo "✅ Frontend dependencies installed"

cd ..

# Summary
echo ""
echo "============================================================"
echo "Setup Complete! ✅"
echo "============================================================"
echo ""
echo "Next steps:"
echo ""
echo "1. Configure MongoDB Atlas:"
echo "   - Create a cluster at mongodb.com/cloud/atlas"
echo "   - Get your connection string"
echo ""
echo "2. Configure Gmail:"
echo "   - Enable 2-Step Verification on your Gmail"
echo "   - Generate an App Password"
echo ""
echo "3. Create server/.env file with:"
echo "   - MONGO_URI=your_connection_string"
echo "   - EMAIL_USER=your_gmail@gmail.com"
echo "   - EMAIL_PASS=your_app_password"
echo "   - PORT=5000"
echo ""
echo "4. Create client/.env.local file with:"
echo "   - VITE_API_URL=http://localhost:5000/api"
echo ""
echo "5. Start the servers:"
echo "   - Terminal 1: cd server && npm run dev"
echo "   - Terminal 2: cd client && npm run dev"
echo ""
echo "For detailed instructions, see SETUP.md"
echo ""
