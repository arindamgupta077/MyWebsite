"use client"

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import Lottie to prevent SSR issues
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => <div className="animate-pulse bg-gray-200 rounded-lg" style={{ width: '95%', height: '200px' }}></div>
});

const AnimationLottie = ({ animationPath, width }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: '95%',
    }
  };

  if (!isClient) {
    return <div className="animate-pulse bg-gray-200 rounded-lg" style={{ width: '95%', height: '200px' }}></div>;
  }

  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;