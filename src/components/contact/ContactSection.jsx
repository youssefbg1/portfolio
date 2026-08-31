import React from 'react';
import { siteConfig } from '../../data/site';

export default function ContactSection() {
  return (
    <section id="contact" style={{ padding: '10rem 0', borderTop: '2px solid var(--blue2)', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Graphic Element */}
      <div className="text-display text-accent" style={{ position: 'absolute', top: '10%', right: '-5%', fontSize: '20vw', opacity: 0.05, pointerEvents: 'none', userSelect: 'none' }}>
        +
      </div>

      <div className="grid-container">
        <div className="col-span-12" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          
          <h2 className="text-heading text-accent" style={{ marginBottom: '2rem' }}>
            05 / CONTACT
          </h2>

          <div className="text-display" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: '0.9', margin: '0 0 2rem 0' }}>
            LET'S BUILD<br />SOMETHING.
          </div>

          <p className="text-body" style={{ fontSize: '1.25rem', maxWidth: '30rem', marginBottom: '4rem' }}>
            Have a project, game, VR experience or idea you'd like to explore?
          </p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            {Object.entries(siteConfig.links).map(([key, url]) => (
              <a 
                key={key} 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-tech interactive-block"
                style={{ minWidth: '150px', textAlign: 'center', textTransform: 'uppercase' }}
              >
                {key}
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
