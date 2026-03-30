import React from 'react';
import { useScrollFade } from '../hooks/useScrollFade';
import './Moments.css';

const momentsData = [
  { id: 1, year: "01", text: "I remember when I walked into the hall for your first book launch. I just thought, wow… this is big." },
  { id: 2, year: "02", text: "I remember when I was working on something you had pointed out, and I was getting hard on myself. You reminded me that growth is gradual, and that stuck with me." },
  { id: 3, year: "03", text: "I remember the day we sat outside your hostel talking, and you told me about black, white, and grey. That became a mental framework I still use." }
];

export default function Moments() {
  const [ref, isVisible] = useScrollFade({ threshold: 0.1 });

  return (
    <section className="section moments-section" ref={ref}>
      <div className={`container moments-container fade-in-up ${isVisible ? 'visible' : ''}`}>
        
        <div className="moments-header">
          <h2 className="moments-title">Pieces of Time</h2>
          <p className="moments-subtitle">A few quiet memories gathered along the way.</p>
        </div>

        <div className="timeline">
          {momentsData.map((moment, index) => (
            <div className="timeline-item" key={moment.id} style={{ animationDelay: `${index * 0.2 + 0.3}s` }}>
              <div className="timeline-marker">
                <span className="timeline-year text-accent">{moment.year}</span>
              </div>
              <div className="timeline-content">
                <p>{moment.text}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
