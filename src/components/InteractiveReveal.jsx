import React, { useState } from 'react';
import { useScrollFade } from '../hooks/useScrollFade';
import './InteractiveReveal.css';

const reasons = [
  "You listen with your whole heart.",
  "Your smile is the absolute best kind of contagion.",
  "You make the simple things feel extraordinary.",
  "Even your silence is comfortable."
];

export default function InteractiveReveal() {
  const [ref, isVisible] = useScrollFade({ threshold: 0.1 });
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="section reveal-section" ref={ref} id="reveal">
      <div className={`container reveal-container fade-in-up ${isVisible ? 'visible' : ''}`}>
        
        {!revealed ? (
          <button 
            className="button-primary reveal-button"
            onClick={() => setRevealed(true)}
          >
            Tap to reveal something
          </button>
        ) : (
          <div className="reveal-content">
            <p className="reveal-intro">I love you because...</p>
            <ul className="reasons-list border-container">
              {reasons.map((reason, index) => (
                <li 
                  key={index} 
                  className="reason-item" 
                  style={{ animationDelay: `${index * 0.4 + 0.2}s` }}
                >
                  <span className="text-accent bullet">•</span> {reason}
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>
    </section>
  );
}
