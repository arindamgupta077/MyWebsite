"use client";

import dynamic from "next/dynamic";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ToastProvider() {
  return (
    <ToastContainer 
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      toastStyle={{
        backgroundColor: '#1a1443',
        color: '#ffffff',
        border: '1px solid #464c6a'
      }}
    />
  );
}

// Export with dynamic import to prevent SSR issues
export default dynamic(() => Promise.resolve(ToastProvider), {
  ssr: false,
  loading: () => null
});