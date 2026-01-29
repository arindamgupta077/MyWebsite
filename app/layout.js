import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import ToastProvider from "./components/toast-provider";
import ErrorBoundary from "./components/error-boundary";
import "./css/card.scss";
import "./css/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Arindam Gupta - Expert Oracle Database Administrator | Best Oracle DBA Portfolio",
  description:
    "Welcome to the portfolio of Arindam Gupta, an expert Oracle Database Administrator (DBA). Specializing in Oracle Cloud Infrastructure (OCI), Oracle RAC, DataGuard, Autonomous Database, and performance tuning. If you are looking for the best Oracle DBA, explore my projects, skills, and certifications here.",
  keywords: [
    "Oracle DBA",
    "Oracle Database Administrator",
    "Best Oracle DBA",
    "Oracle Cloud Infrastructure",
    "OCI",
    "Oracle RAC",
    "Oracle DataGuard",
    "Autonomous Database",
    "Database Performance Tuning",
    "Arindam Gupta",
    "DBA Portfolio",
    "Freelance Oracle DBA"
  ],
  authors: [{ name: "Arindam Gupta" }],
  creator: "Arindam Gupta",
  publisher: "Arindam Gupta",
  openGraph: {
    title: "Arindam Gupta - Expert Oracle Database Administrator | Best Oracle DBA Portfolio",
    description: "Explore the portfolio of Arindam Gupta, an experienced Oracle DBA specializing in OCI, RAC, and DataGuard. View certifications and projects.",
    url: "https://arindamgupta.dev", // Replace with actual domain if available
    siteName: "Arindam Gupta Portfolio",
    images: [
      {
        url: "/profile.png", // Assuming this image exists based on personal-data.js
        width: 800,
        height: 600,
        alt: "Arindam Gupta - Oracle DBA",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arindam Gupta - Expert Oracle Database Administrator",
    description: "Portfolio of Arindam Gupta - Oracle DBA, OCI, RAC, and DataGuard expert.",
    images: ["/profile.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Explicitly declare favicon so it reliably appears (Next.js also auto-detects app/favicon.ico, but this is deterministic)
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/icon-192.png', sizes: '192x192' },
      { url: '/icon-512.png', sizes: '512x512' }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Global chunk loading error handler
              window.addEventListener('error', function(event) {
                if (event.error?.name === 'ChunkLoadError' || 
                    event.error?.message?.includes('Loading chunk') ||
                    event.error?.message?.includes('timeout')) {
                  console.warn('Chunk loading error detected, reloading page...');
                  setTimeout(function() {
                    window.location.reload();
                  }, 1000);
                }
              });
              
              window.addEventListener('unhandledrejection', function(event) {
                if (event.reason?.name === 'ChunkLoadError' ||
                    event.reason?.message?.includes('Loading chunk') ||
                    event.reason?.message?.includes('timeout')) {
                  console.warn('Unhandled chunk loading rejection detected');
                  event.preventDefault();
                  setTimeout(function() {
                    window.location.reload();
                  }, 1000);
                }
              });
              
              // Hide Next.js development indicators
              if (typeof window !== 'undefined') {
                const hideDevIndicators = () => {
                  const style = document.createElement('style');
                  style.textContent = \`
                    [data-nextjs-dialog], 
                    [data-nextjs-dialog-overlay],
                    [data-nextjs-toast],
                    .__next-dev-overlay,
                    .__next-build-indicator,
                    #__next-build-watcher,
                    nextjs-portal,
                    [id^="__next-build"],
                    [class*="__next-dev"],
                    [data-nextjs-dev-overlay] {
                      display: none !important;
                      visibility: hidden !important;
                      pointer-events: none !important;
                    }
                  \`;
                  document.head.appendChild(style);
                };
                
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', hideDevIndicators);
                } else {
                  hideDevIndicators();
                }
                
                // Also hide on subsequent renders
                const observer = new MutationObserver(hideDevIndicators);
                observer.observe(document.body, { childList: true, subtree: true });
              }
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ErrorBoundary>
          <ToastProvider />
          <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white pt-20 lg:pt-24">
            <Navbar />
            {children}
            <ScrollToTop />
          </main>
          <Footer />
        </ErrorBoundary>
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
