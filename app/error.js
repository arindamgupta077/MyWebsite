"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('Global error:', error);
    
    // Auto-reload for chunk loading errors
    if (error?.name === 'ChunkLoadError' || error?.message?.includes('Loading chunk')) {
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0d1224] text-white p-6">
      <div className="text-center max-w-md">
        <h2 className="text-3xl font-bold text-[#16f2b3] mb-4">
          Oops! Something went wrong
        </h2>
        <p className="text-gray-300 mb-6">
          {error?.message?.includes('Loading chunk') 
            ? "We're refreshing the page to fix a loading issue..."
            : "Don't worry, we're working to fix this issue."
          }
        </p>
        <div className="space-y-4">
          <button
            onClick={reset}
            className="bg-gradient-to-r from-pink-500 to-violet-600 px-6 py-3 rounded-full text-white font-medium hover:from-pink-600 hover:to-violet-700 transition-all duration-300 mr-4"
          >
            Try Again
          </button>
          <button
            onClick={() => window.location.href = '/'}
            className="bg-transparent border border-[#464c6a] px-6 py-3 rounded-full text-white font-medium hover:bg-[#1a1443] transition-all duration-300"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}