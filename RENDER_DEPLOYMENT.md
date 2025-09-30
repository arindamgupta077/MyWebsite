# Render Deployment Guide

This guide will help you deploy your Developer Portfolio application to Render.

## Prerequisites

1. A Render account (free signup at [render.com](https://render.com))
2. Your code pushed to a GitHub repository
3. Environment variables configured

## Deployment Steps

### Method 1: Using Render Dashboard (Recommended)

1. **Connect Your Repository**
   - Log in to your Render dashboard
   - Click "New +" and select "Web Service"
   - Connect your GitHub account and select this repository

2. **Configure Build Settings**
   - **Name**: `developer-portfolio` (or your preferred name)
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Plan**: Free (or upgrade as needed)

3. **Set Environment Variables**
   Go to the "Environment" tab and add these variables:
   ```
   NODE_ENV=production
   NEXT_PUBLIC_GTM=your_gtm_id
   NEXT_PUBLIC_APP_URL=https://your-app-name.onrender.com
   TELEGRAM_BOT_TOKEN=your_telegram_bot_token
   TELEGRAM_CHAT_ID=your_telegram_chat_id
   GMAIL_PASSKEY=your_gmail_app_password
   EMAIL_ADDRESS=your_email@gmail.com
   ```

4. **Deploy**
   - Click "Create Web Service"
   - Render will automatically build and deploy your application

### Method 2: Using render.yaml (Infrastructure as Code)

1. The `render.yaml` file in this repository contains the deployment configuration
2. Push your code to GitHub
3. In Render dashboard, create a new "Blueprint" and connect your repository
4. Render will automatically detect the `render.yaml` file and deploy accordingly

## Environment Variables Setup

### Required Variables:

- `NODE_ENV`: Set to `production`
- `NEXT_PUBLIC_APP_URL`: Your Render app URL (e.g., `https://your-app-name.onrender.com`)

### Optional (for contact form functionality):

- `TELEGRAM_BOT_TOKEN`: Your Telegram bot token
- `TELEGRAM_CHAT_ID`: Your Telegram chat ID
- `GMAIL_PASSKEY`: Gmail app-specific password
- `EMAIL_ADDRESS`: Your Gmail address
- `NEXT_PUBLIC_GTM`: Google Tag Manager ID

### Gmail Setup for Contact Form:

1. Enable 2-factor authentication on your Gmail account
2. Generate an app-specific password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
   - Use this password for `GMAIL_PASSKEY`

## Post-Deployment

1. **Custom Domain** (Optional):
   - Go to Settings → Custom Domains
   - Add your domain and configure DNS

2. **SSL Certificate**:
   - Render automatically provides SSL certificates
   - Your site will be available at `https://your-app-name.onrender.com`

3. **Monitor Logs**:
   - Check the "Logs" tab for any deployment issues
   - Use the "Events" tab to monitor deployments

## Health Check

The application includes a health check endpoint at `/api/health` that Render uses to monitor your application's status.

## Troubleshooting

### Build Failures:
- Check the build logs in Render dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### Runtime Issues:
- Check the service logs in Render dashboard
- Verify environment variables are set correctly
- Ensure the PORT environment variable is handled (already configured)

### Contact Form Issues:
- Verify Gmail credentials and app password
- Check Telegram bot token and chat ID
- Ensure CORS settings allow your domain

## Performance Optimization

The application is configured with:
- Static asset optimization
- Image optimization with Next.js
- Compression enabled
- Standalone output for faster cold starts

## Support

For Render-specific issues, consult the [Render documentation](https://render.com/docs) or contact Render support.