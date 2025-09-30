@echo off
REM Production Build Test Script for Windows
REM This script simulates the Render build process locally

echo 🚀 Starting production build test...

REM Clean previous builds
echo 🧹 Cleaning previous builds...
if exist .next rmdir /s /q .next
if exist out rmdir /s /q out

REM Install dependencies
echo 📦 Installing dependencies...
npm install

REM Run linting
echo 🔍 Running linter...
npm run lint

REM Build the application
echo 🏗️  Building application...
npm run build

REM Test if build was successful
if %errorlevel% == 0 (
    echo ✅ Build successful!
    echo 🎉 Your application is ready for Render deployment!
    echo.
    echo Next steps:
    echo 1. Push your code to GitHub
    echo 2. Connect your repository to Render
    echo 3. Set up environment variables
    echo 4. Deploy!
) else (
    echo ❌ Build failed!
    echo Please fix the errors above before deploying to Render.
    exit /b 1
)