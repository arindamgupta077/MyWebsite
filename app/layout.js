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
  title: "Portfolio of Arindam Gupta - Oracle Database Administrator",
  description:
    "This is the portfolio of Arindam Gupta. I am an experienced Oracle Database Administrator with expertise in Oracle Cloud Infrastructure, Oracle RAC, Oracle DataGuard, Oracle Autonomous Database, and Oracle APEX. I am passionate about database optimization, GenAI, and Data Engineering.",
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
      <body className={inter.className}>
        <ErrorBoundary>
          <ToastProvider />
          <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
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
