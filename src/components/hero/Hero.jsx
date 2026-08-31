import { Link } from 'react-router-dom';
import HeroPortrait from './HeroPortrait';

export default function Hero({ mousePos = { x: 0, y: 0 } }) {
  return (
    <section id="hero" style={{ padding: '6rem 0', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
      <div className="grid-container hero-grid" style={{ width: '100%', alignItems: 'center' }}>
        
        {/* Left Side: Typography and Content */}
        <div className="col-span-7 hero-left-group" style={{ zIndex: 10 }}>
          <div className="hero-sys-init" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div className="bg-accent clip-br" style={{ width: '2rem', height: '2rem', backgroundColor: 'var(--blue5)' }}></div>
            <span className="text-label text-accent">SYS.INIT // PORTFOLIO_V2</span>
          </div>

          <h1 className="text-display hero-name" style={{ marginBottom: '2rem', textShadow: '4px 4px 0px var(--background)' }}>
            YOUSSEF<br/>
            <span className="text-primary">BEN GHORBEL</span>
          </h1>

          <h2 className="text-heading hero-role" style={{ marginBottom: '1rem', fontSize: '1.5rem', display: 'none' }}>
            GAME DEVELOPER <span className="text-accent">+</span> VR DEVELOPER
          </h2>

          {/* Asymmetric Info Plate */}
          <div 
            className="hero-statement"
            style={{ 
              borderLeft: '4px solid var(--blue5)', 
              padding: '1.5rem', 
              marginBottom: '3rem',
              backgroundColor: 'var(--blue1)',
              borderTop: '1px solid var(--blue2)',
              borderRight: '1px solid var(--blue2)',
              borderBottom: '1px solid var(--blue2)',
              display: 'inline-block'
            }}
          >
            <h2 className="text-heading hero-role-desktop" style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>
              GAME DEVELOPER <span className="text-accent">+</span> VR DEVELOPER
            </h2>
            <p className="text-body" style={{ maxWidth: '35rem', fontSize: '1.125rem' }}>
              A creative and technical developer who builds interactive experiences. Give me a problem, and I'll figure it out. Specializing in high-performance mechanics and immersive VR.
            </p>
          </div>

          {/* Technical Labels (Decorative) */}
          <div className="hero-labels" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
            <span className="border-tech text-label text-accent" style={{ padding: '0.5rem 1rem' }}>GAME DEVELOPMENT</span>
            <span className="border-tech text-label text-accent" style={{ padding: '0.5rem 1rem' }}>VR</span>
            <span className="border-tech text-label text-accent" style={{ padding: '0.5rem 1rem' }}>UNITY</span>
            <span className="border-tech text-label text-accent" style={{ padding: '0.5rem 1rem' }}>C#</span>
          </div>

          {/* Call to Actions */}
          <div className="hero-cta" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <Link to="/#projects" className="btn-tech clip-br">
              VIEW MY WORK &rarr;
            </Link>
            <Link to="/#contact" className="text-label text-accent interactive-block" style={{ padding: '1rem', borderBottom: '1px solid transparent' }}>
              CONTACT ME &rarr;
            </Link>
          </div>
        </div>

        {/* Right Side: Editorial Portrait */}
        <div 
          className="col-span-5 hero-portrait-container" 
          style={{ 
            marginTop: '3rem', 
            transform: `translate(${mousePos.x}px, ${mousePos.y}px)`, 
            transition: 'transform 0.1s ease-out' 
          }}
        >
          <HeroPortrait />
        </div>

      </div>
    </section>
  );
}
