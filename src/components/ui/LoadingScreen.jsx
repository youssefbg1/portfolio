import React, { useState, useEffect } from 'react';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400); // Hold at 100% briefly before dismissing
          return 100;
        }
        // Rapid randomized loading progress
        return p + Math.floor(Math.random() * 25) + 10;
      });
    }, 80);
    
    return () => clearInterval(interval);
  }, [onComplete]);

  const filled = Math.min(10, Math.floor(progress / 10));
  const empty = Math.max(0, 10 - filled);
  const bar = '█'.repeat(filled) + '░'.repeat(empty);

  return (
    <div className="page-enter" style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      backgroundColor: 'var(--background)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      color: 'var(--text-light)'
    }}>
      <div style={{ 
        border: '1px solid var(--blue2)', 
        padding: '4rem', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        backgroundColor: 'var(--blue1)'
      }}>
         <h1 className="text-display text-accent" style={{ marginBottom: '1.5rem', lineHeight: 1, fontSize: '4rem' }}>
           YBG
         </h1>
         <div className="text-label" style={{ marginBottom: '1rem', color: 'var(--text)' }}>
           LOADING EXPERIENCE...
         </div>
         <div className="text-label text-primary" style={{ letterSpacing: '0.2em', fontSize: '1.25rem' }}>
           {bar} {Math.min(100, progress)}%
         </div>
      </div>
    </div>
  );
}
