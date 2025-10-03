"use client";

import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error Boundary caught an error:', error, errorInfo);
    
    // If it's a chunk loading error, try to reload the page
    if (error?.name === 'ChunkLoadError' || error?.message?.includes('Loading chunk')) {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#0d1224] text-white p-6">
          <div className="text-center max-w-md">
            <h2 className="text-2xl font-bold text-[#16f2b3] mb-4">
              Something went wrong
            </h2>
            <p className="text-gray-300 mb-6">
              We're experiencing a temporary loading issue. The page will refresh automatically.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-gradient-to-r from-pink-500 to-violet-600 px-6 py-3 rounded-full text-white font-medium hover:from-pink-600 hover:to-violet-700 transition-all duration-300"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;