# Netlify Deployment Guide

This guide will help you deploy your Next.js developer portfolio to Netlify.

## Prerequisites

1. A Netlify account
2. Your project pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### 1. Connect to Netlify

1. Log in to your [Netlify account](https://netlify.com)
2. Click "New site from Git"
3. Choose your Git provider and select your repository
4. Select the branch you want to deploy (usually `main` or `master`)

### 2. Build Settings

Netlify should automatically detect your Next.js project and set the following:

- **Build command**: `npm run build`
- **Publish directory**: Leave empty (the Next.js plugin handles this)
- **Functions directory**: `netlify/functions` (automatically detected)

### 3. Environment Variables

You need to set up the following environment variables in Netlify:

1. Go to Site settings → Environment variables
2. Add the following variables:

```bash
NEXT_PUBLIC_GTM=your_google_tag_manager_id
NEXT_PUBLIC_APP_URL=https://your-site-name.netlify.app
NEXT_PUBLIC_RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
TELEGRAM_CHAT_ID=your_telegram_chat_id
GMAIL_PASSKEY=your_gmail_app_password
EMAIL_ADDRESS=your_email_address
```

### 4. Deploy

1. Click "Deploy site"
2. Netlify will automatically build and deploy your site
3. Your site will be available at `https://your-site-name.netlify.app`

## Features Included

✅ **Automatic builds** - Deploys automatically when you push to your repository  
✅ **Serverless functions** - API routes converted to Netlify Functions  
✅ **Form handling** - Contact form works with Netlify Functions  
✅ **Environment variables** - Secure handling of sensitive data  
✅ **CDN** - Global content delivery network  
✅ **HTTPS** - Automatic SSL certificate  
✅ **Custom domain** - Add your own domain name  

## API Routes

Your API routes have been converted to Netlify Functions:

- `/api/contact` → `/.netlify/functions/contact`
- `/api/data` → `/.netlify/functions/data`
- `/api/google` → `/.netlify/functions/google`
- `/api/health` → `/.netlify/functions/health`

These are automatically handled by the redirect rules in `netlify.toml`.

## Custom Domain (Optional)

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow the instructions to configure DNS

## Troubleshooting

### Build Fails
- Check the build logs in Netlify dashboard
- Ensure all environment variables are set
- Verify your `package.json` scripts

### Functions Don't Work
- Check the Functions tab in Netlify dashboard
- Verify environment variables are set
- Check function logs for errors

### Contact Form Issues
- Ensure Gmail app password is correctly set
- Verify Telegram bot token and chat ID
- Check function logs for specific errors

## Performance Optimizations

The configuration includes:

- **Caching headers** for static assets
- **Image optimization** through Next.js
- **Security headers** for enhanced security
- **Compression** automatically handled by Netlify

## Support

If you encounter issues:

1. Check Netlify's build logs
2. Review the function logs
3. Verify all environment variables
4. Check your repository settings

For more help, visit [Netlify Documentation](https://docs.netlify.com/).