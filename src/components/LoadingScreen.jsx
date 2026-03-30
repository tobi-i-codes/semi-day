import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

export default function LoadingScreen({ onComplete }) {
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    // Show name for 2 seconds, then fade out
    const timer1 = setTimeout(() => {
      setFadingOut(true);
    }, 2000);

    const timer2 = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <div className={`loading-screen ${fadingOut ? 'fade-out' : ''}`}>
      <h1 className="loading-text">Semiloore</h1>
    </div>
  );
}
