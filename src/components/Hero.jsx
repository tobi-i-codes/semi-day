import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

import { TypewriterEffect } from './ui/typewriter-effect';

export default function Hero() {
  const navigate = useNavigate();

  const words = [
    { text: "Happy " },
    { text: "Birthday," },
    { text: "\n" }, // Invisible line break forcing wrap
    { text: "Semiloore", className: "text-accent" },
  ];

  return (
    <section className="hero section">
      <div className="hero-content">
        <TypewriterEffect 
          words={words} 
          className="hero-title fade-in-up visible" 
          delayStart={2.5}
        />
        <p className="hero-subtitle fade-in-up visible" style={{ animationDelay: '0.4s' }}>
          A tiny corner of the internet, just for you.
        </p>
        <button 
          className="button-primary fade-in-up visible" 
          style={{ animationDelay: '0.6s', marginTop: '32px' }}
          onClick={() => navigate('/message')}
        >
          Open this
        </button>
      </div>

      <div className="hero-images fade-in-up visible" style={{ animationDelay: '0.8s' }}>
        {/* Placeholder images - beautifully blurred / aesthetic */}
        <div className="hero-img-wrapper img-1">
          <img src="/left.jpeg" alt="Semiloore left" />
        </div>
        <div className="hero-img-wrapper img-2">
          <img src="/middle.jpeg" alt="Semiloore middle" />
        </div>
        <div className="hero-img-wrapper img-3">
          <img src="/right.jpeg" alt="Semiloore right" />
        </div>
      </div>
    </section>
  );
}
