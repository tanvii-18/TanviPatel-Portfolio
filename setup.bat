@echo off
REM Tanvi's Portfolio - Quick Setup Script

color 0A
title Tanvi's Portfolio - Setup Wizard

echo.
echo ============================================================
echo.
echo  🌟 Tanvi Patel's Portfolio - Setup Wizard 🌟
echo.
echo ============================================================
echo.

REM Check Node.js
echo Checking for Node.js...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed!
    echo Please download from https://nodejs.org/
    echo Then run this script again.
    pause
    exit /b
)
echo ✅ Node.js is installed

REM Install Backend
echo.
echo ============================================================
echo Installing Backend Dependencies...
echo ============================================================
cd server
call npm install
if %errorlevel% neq 0 (
    echo ❌ Backend installation failed!
    pause
    exit /b
)
echo ✅ Backend dependencies installed

REM Install Frontend
echo.
echo ============================================================
echo Installing Frontend Dependencies...
echo ============================================================
cd ..\client
call npm install
if %errorlevel% neq 0 (
    echo ❌ Frontend installation failed!
    pause
    exit /b
)
echo ✅ Frontend dependencies installed

cd ..

REM Ask for configuration
echo.
echo ============================================================
echo Setup Complete! ✅
echo ============================================================
echo.
echo Next steps:
echo.
echo 1. Configure MongoDB Atlas:
echo    - Create a cluster at mongodb.com/cloud/atlas
echo    - Get your connection string
echo.
echo 2. Configure Gmail:
echo    - Enable 2-Step Verification on your Gmail
echo    - Generate an App Password
echo.
echo 3. Create server/.env file with:
echo    - MONGO_URI=your_connection_string
echo    - EMAIL_USER=your_gmail@gmail.com
echo    - EMAIL_PASS=your_app_password
echo    - PORT=5000
echo.
echo 4. Create client/.env.local file with:
echo    - VITE_API_URL=http://localhost:5000/api
echo.
echo 5. Start the servers:
echo    - Terminal 1: cd server && npm run dev
echo    - Terminal 2: cd client && npm run dev
echo.
echo For detailed instructions, see SETUP.md
echo.
pause
