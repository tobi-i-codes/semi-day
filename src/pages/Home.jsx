import React, { useState } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import Hero from '../components/Hero';

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <div className="home-page" style={{ height: loadingComplete ? 'auto' : '100vh', overflow: loadingComplete ? 'visible' : 'hidden' }}>
      {!loadingComplete && <LoadingScreen onComplete={() => setLoadingComplete(true)} />}
      <Hero />
    </div>
  );
}
