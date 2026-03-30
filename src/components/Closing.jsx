import React from 'react';
import { useScrollFade } from '../hooks/useScrollFade';
import './Closing.css';

export default function Closing() {
  const [ref, isVisible] = useScrollFade();

  return (
    <section className="section closing-section" id="closing" ref={ref}>
      <div className={`container closing-container fade-in-up ${isVisible ? 'visible' : ''}`}>

        <h2 className="closing-text">
          I’m so grateful for the gift of you 🤎
        </h2>

      </div>
    </section>
  );
}
