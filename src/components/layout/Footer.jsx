import React from 'react';
import { siteConfig } from '../../data/site';

export default function Footer() {
  return (
    <footer style={{ borderTop: '2px solid var(--blue2)', padding: '2rem 0', backgroundColor: 'var(--background)' }}>
      <div className="grid-container" style={{ alignItems: 'center' }}>
        
        {/* Name & Title */}
        <div className="col-span-6">
          <div className="text-heading" style={{ fontSize: '1.25rem' }}>{siteConfig.name}</div>
          <div className="text-label text-accent">{siteConfig.title}</div>
        </div>

        {/* Links & Copyright */}
        <div className="col-span-6" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {Object.entries(siteConfig.links).slice(0, 3).map(([key, url]) => (
              <a 
                key={key} 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-label interactive-block"
                style={{ textTransform: 'uppercase', textDecoration: 'none', color: 'var(--text-light)' }}
              >
                {key}
              </a>
            ))}
          </div>

          <div className="text-label text-accent border-tech" style={{ padding: '0.25rem 0.5rem' }}>
            © {siteConfig.year}
          </div>
          
        </div>
      </div>
    </footer>
  );
}
