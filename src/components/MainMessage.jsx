import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useScrollFade } from '../hooks/useScrollFade';
import './MainMessage.css';

export default function MainMessage() {
  const navigate = useNavigate();
  const [ref1, isVisible1] = useScrollFade();
  const [ref2, isVisible2] = useScrollFade({ threshold: 0.2 });
  const [ref3, isVisible3] = useScrollFade({ threshold: 0.2 });
  const [ref4, isVisible4] = useScrollFade({ threshold: 0.2 });
  const [ref5, isVisible5] = useScrollFade({ threshold: 0.2 });
  const [ref6, isVisible6] = useScrollFade({ threshold: 0.2 });

  return (
    <section className="section message-section" id="message">
      
      <div className="back-button-wrapper" style={{ maxWidth: '700px', width: '90%', margin: '0 auto' }}>
        <button 
          onClick={() => navigate('/')} 
          className={`back-button fade-in-up ${isVisible1 ? 'visible' : ''}`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Start
        </button>
      </div>

      <div className="container message-container">
        
        <div ref={ref1} className={`message-header fade-in-up ${isVisible1 ? 'visible' : ''}`}>
          <div className="badge-pill">
            <span className="badge-dot"></span>
            <span className="badge-text">A Message for You</span>
          </div>
        </div>

        <div className={`message-content fade-in-up ${isVisible1 ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
          <p className="message-text">
            In 1799, a boy named Conrad Reed was walking along a creek when he found a heavy, yellow rock. He didn’t think much of it, just a cool find so he took it home, and his family used it as a doorstop for three years.
          </p>
          <p className="message-text">
            It wasn’t until a jeweler saw it that they realized it was a 17-pound solid gold nugget.
          </p>
          <p className="message-text" style={{ fontSize: '0.9rem', opacity: 0.7 }}>
            (Analogies aren’t perfect, but forgive me…)
          </p>
          <p className="message-text">
            Finding you felt a lot like that. I was just walking through life, not realizing that my church and unit member would become someone so important to me, someone who would mean so much.
          </p>
          <p className="message-text">
            It took them three years to realize what they had.
          </p>
          <p className="message-text">
            But with you, it doesn’t take long to see how rare you are. You’re a treasure.
          </p>
        </div>

        <div ref={ref2} className={`message-content fade-in-up ${isVisible2 ? 'visible' : ''}`}>
          <p className="message-text">
            Today isn’t just about me finding you, it’s about celebrating the day the world received one of its most precious gems.
          </p>
          <p className="message-text">
            You’re a star, and just like a star doesn’t shine for itself, you have this beautiful way of lighting up everywhere you find yourself.
          </p>
          <p className="message-text">
            I believe that the world would the sick without someone like semiloore and I'll tell you how
          </p>
        </div>

        <div ref={ref3} className={`message-content fade-in-up ${isVisible3 ? 'visible' : ''}`}>
          <p className="message-text">
            You know, the world talks a lot about being nice, but it doesn’t always appreciate being real.
          </p>
          <p className="message-text">
            And that’s why someone like you matters more than people realize.
          </p>
          <p className="message-text">
            In a world where people hide what they truly think, you bring honesty.<br/>
            Where people avoid hard truths, you bring clarity.<br/>
            Where things could quietly fall apart, you’re the one who says what needs to be said.
          </p>
          <p className="message-text">
            That kind of person is rare.<br/>
            That kind of person is necessary.
          </p>
          <p className="message-text">
            Without people like you, the world wouldn’t just be quieter, it would be weaker, more confused, and less honest.
          </p>
          <p className="message-text">
            So when I say you’re a treasure, I don’t just mean you’re special to me.
          </p>
          <p className="message-text">
            I mean the world is better because you’re in it.
          </p>
        </div>

        <div ref={ref4} className={`message-content fade-in-up ${isVisible4 ? 'visible' : ''}`}>
          <p className="message-text">
            And today isn’t just about celebrating your birthday, it’s about celebrating the fact that someone this real, this bold, and this valuable exists.
          </p>
          <p className="message-text">
            In a world where people confuse “being real” with being harsh, you’ve somehow mastered something rare.
          </p>
          <p className="message-text">
            You’re honest, yes— blunt even.<br/>
            But not careless.
          </p>
          <p className="message-text">
            You say what needs to be said, but you don’t push people past what they can carry.<br/>
            There’s a warmth in you that makes people feel safe, even when you’re confronting them.
          </p>
          <p className="message-text">
            And that balance? It’s not common. It’s intentional.
          </p>
          <p className="message-text">
            It takes a certain kind of heart to be like that.
          </p>
        </div>

        <div ref={ref5} className={`message-content fade-in-up ${isVisible5 ? 'visible' : ''}`}>
          <p className="message-text">
            Most people want to be celebrated only.<br/>
            But you...<br/>
            You're always busy celebrating others.
          </p>
          <p className="message-text">
            You write, you pour, you honor people with words that make them feel seen and valued.<br/>
            That kind of passion doesn’t come from habit, it comes from love. Deep, genuine love for people.
          </p>
        </div>

        <div ref={ref6} className={`message-content fade-in-up ${isVisible6 ? 'visible' : ''}`}>
          <p className="message-text">
            And honestly, that love makes sense…<br/>
            because of how deeply you love God.
          </p>
          <p className="message-text">
            It shows in your convictions.<br/>
            In how seriously you take truth.<br/>
            In how you don’t just believe, you stand on what you believe, even when it’s not easy.
          </p>
          <p className="message-text">
            That kind of depth shapes everything about you.<br/>
            Your words, your honesty, your kindness, your strength.
          </p>
          <p className="message-text">
            So when I say you’re a treasure, I don’t just mean you’re rare.
          </p>
          <p className="message-text">
            I mean you’re <span className="text-accent">*necessary*</span>.
          </p>
          <p className="message-text">
            The world would be a little more confused, a little less honest, and a lot less warm without someone like you in it.
          </p>
          <p className="message-text">
            And I’m so grateful my heart didn't need three years to realize exactly what it had found in you.
          </p>
          <p className="message-text" style={{ fontSize: '1.2em', fontWeight: '400', marginTop: '4rem' }}>
            Happy birthday, Semiloore🤎<br/>
            I love you.
          </p>
        </div>

      </div>
    </section>
  );
}
