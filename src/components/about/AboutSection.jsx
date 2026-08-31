import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function AboutSection() {
  const revealRef = useScrollReveal();

  return (
    <section id="about" style={{ padding: '8rem 0', borderTop: '2px solid var(--blue2)' }}>
      <div className="grid-container">
        
        {/* Left column empty for asymmetric tension */}
        <div className="col-span-4" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <h2 className="text-heading" style={{ margin: 0 }}>
            <span className="text-accent" style={{ marginRight: '1rem' }}>03 /</span> 
            ABOUT
          </h2>
          
          {/* Decorative geometric block */}
          <div className="bg-blue2 clip-tl geom-float" style={{ width: '4rem', height: '4rem', marginTop: '2rem' }}></div>
        </div>

        {/* Right column with heavy text block */}
        <div ref={revealRef} className="col-span-8 asymmetric-plate clip-br reveal-up">
          <h3 className="text-display text-accent" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '2rem' }}>
            ENGINEERING <br/> IMMERSION.
          </h3>
          <div className="text-body" style={{ fontSize: '1.25rem', maxWidth: '45rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p>
              I am a Game Developer and VR/XR specialist driven by technical curiosity and sharp problem-solving. My work bridges raw engineering and creative experimentation to build highly performant, immersive systems.
            </p>
            <p>
              Whether it's designing fluid gameplay mechanics, architecting robust C# systems, or collaborating across disciplines to ship products, I rely on a foundation of continuous learning and deep technical exploration.
            </p>
          </div>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '3rem' }}>
            {['GAME DEVELOPMENT', 'VR/XR', 'CREATIVITY', 'TECHNOLOGY', 'EXPERIMENTATION', 'PROBLEM SOLVING', 'COLLABORATION', 'CONTINUOUS LEARNING'].map(term => (
              <span key={term} className="border-tech text-label" style={{ padding: '0.25rem 0.75rem', backgroundColor: 'var(--background)' }}>
                + {term}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
