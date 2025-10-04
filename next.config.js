const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media2.dev.to',
        pathname: '**',
      },
    ],
  },
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  // Disable development indicators completely
  devIndicators: {
    appIsrStatus: false,
  },
  // Turbopack configuration for better performance
  turbopack: {
    resolveExtensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  // Webpack configuration to help with chunk loading issues
  webpack: (config, { isServer, dev }) => {
    // Increase chunk timeout for development
    if (!isServer) {
      config.output.chunkLoadTimeout = 30000;
    }
    
    // Improve HMR reliability in development
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
      
      // Allow HMR to work on mobile devices
      config.devServer = {
        ...config.devServer,
        allowedHosts: 'all',
      };
    }
    
    return config;
  },
}