import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function TimelineItem({ activity }) {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef} className="grid-container reveal-up" style={{ borderBottom: '1px solid var(--blue2)', padding: '4rem 0' }}>
      
      {/* Year / Organization Meta (Left side) */}
      <div className="col-span-4" style={{ display: 'flex', flexDirection: 'column' }}>
        <div className="text-display" style={{ fontSize: '3.5rem', color: 'var(--blue3)', lineHeight: '1', marginBottom: '1rem' }}>
          {activity.year}
        </div>
        <div className="text-label text-accent" style={{ marginBottom: '0.25rem' }}>{activity.date}</div>
        <div className="text-heading" style={{ fontSize: '1.25rem' }}>{activity.organization}</div>
      </div>

      {/* Details (Right Side) */}
      <div className="col-span-8">
        <h3 className="text-heading" style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text)' }}>
          {activity.role} <span style={{ color: 'var(--blue5)' }}>//</span> {activity.title}
        </h3>
        
        <p className="text-body" style={{ maxWidth: '40rem', marginBottom: '2rem', fontSize: '1.1rem' }}>
          {activity.description}
        </p>
        
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {activity.tags.map(tag => (
            <span key={tag} className="border-tech text-label" style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem', color: 'var(--text-light)' }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}
