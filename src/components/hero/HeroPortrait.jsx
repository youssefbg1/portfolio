import profileImage from '@/assets/profile/portrait.webp';
export default function HeroPortrait() {
  return (
    <div style={{ position: 'relative', marginTop: '2rem', padding: '1rem' }}>
      
      {/* Layered Constructivist Background Plates */}
      <div className="bg-blue3 clip-br" style={{ position: 'absolute', inset: '0 -1rem -2rem 2rem', zIndex: 0, opacity: 0.8 }}></div>
      <div className="bg-blue1 clip-tl" style={{ position: 'absolute', inset: '-2rem 2rem 2rem -1rem', zIndex: 0 }}></div>

      {/* Main Image Container */}
      <div className="border-accent clip-tr bg-surface" style={{ position: 'relative', zIndex: 10, padding: '1rem' }}>
        <img 
          src={profileImage}
          alt="Youssef Ben Ghorbel Portrait" 
          style={{ width: '100%', height: 'auto', display: 'block', filter: 'contrast(1.1) brightness(0.9)' }} 
        />
        
        {/* Decorative Status Label Overlaid */}
        <div className="bg-background border-tech text-label text-accent" style={{ position: 'absolute', bottom: '1rem', right: '1rem', padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span className="status-blink" style={{ display: 'inline-block', width: '8px', height: '8px', backgroundColor: 'var(--blue5)' }}></span>
          STATUS: ONLINE
        </div>
      </div>

      {/* Floating UI Elements (Crosshairs) */}
      <div className="crosshair-corner geom-float" style={{ top: '-1rem', left: '-1rem' }}></div>
      <div className="crosshair-corner geom-float" style={{ bottom: '-1.5rem', right: '0rem', animationDelay: '1s' }}></div>
    </div>
  );
}
