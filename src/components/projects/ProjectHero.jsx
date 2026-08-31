import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function ProjectHero({ project, index }) {
  // Use first image/video as hero media, fallback to null
  const heroMedia = project.images && project.images.length > 0 ? project.images[0] : null;
  const maskRef = useScrollReveal();

  return (
    <section className="grid-container" style={{ padding: '4rem var(--page-margin-desktop)', borderBottom: '2px solid var(--blue2)' }}>
      {/* Title & Metadata (Left Column) */}
      <div className="col-span-5" style={{ zIndex: 10, alignSelf: 'center', paddingRight: '2rem' }}>
        <div className="text-label text-accent" style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <span style={{ padding: '0.25rem 0.5rem', border: '1px solid var(--blue5)' }}>
            NO. {String(index).padStart(2, '0')}
          </span>
          <span>// {project.year}</span>
        </div>
        
        <h1 className="text-display" style={{ marginBottom: '2rem', wordBreak: 'break-word', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
          {project.title}
        </h1>
        
        {project.tags && project.tags.length > 0 && (
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {project.tags.map(tag => (
              <span key={tag} className="border-tech text-label" style={{ padding: '0.25rem 0.75rem', backgroundColor: 'var(--blue1)' }}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Hero Media (Right Column) */}
      <div className="col-span-7" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {heroMedia ? (
          <div className="asymmetric-plate clip-tl" style={{ padding: '0.5rem', backgroundColor: 'var(--blue2)' }}>
            <img 
              ref={maskRef}
              className="reveal-mask"
              src={heroMedia} 
              alt={project.title} 
              style={{ width: '100%', height: 'auto', display: 'block', filter: 'contrast(1.1) brightness(0.95)', objectFit: 'cover', aspectRatio: '16/9' }} 
            />
          </div>
        ) : (
          <div className="bg-blue1 border-heavy" style={{ aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span className="text-label text-accent">NO VISUAL RECORD</span>
          </div>
        )}
      </div>
    </section>
  );
}
