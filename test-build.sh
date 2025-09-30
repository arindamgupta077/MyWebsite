#!/bin/bash

# Production Build Test Script
# This script simulates the Render build process locally

echo "🚀 Starting production build test..."

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf .next
rm -rf out

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Run linting
echo "🔍 Running linter..."
npm run lint

# Build the application
echo "🏗️  Building application..."
npm run build

# Test if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "🎉 Your application is ready for Render deployment!"
    echo ""
    echo "Next steps:"
    echo "1. Push your code to GitHub"
    echo "2. Connect your repository to Render"
    echo "3. Set up environment variables"
    echo "4. Deploy!"
else
    echo "❌ Build failed!"
    echo "Please fix the errors above before deploying to Render."
    exit 1
fi