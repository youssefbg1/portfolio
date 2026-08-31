import React from 'react';
import { skills } from '../../data/skills';

export default function SkillsSection() {
  return (
    <section id="skills" style={{ padding: '8rem 0', borderTop: '2px solid var(--blue2)', backgroundColor: 'var(--blue1)' }}>
      <div className="grid-container" style={{ marginBottom: '4rem' }}>
        <div className="col-span-12">
          <h2 className="text-heading" style={{ margin: 0 }}>
            <span className="text-accent" style={{ marginRight: '1rem' }}>04 /</span> 
            TECHNICAL PROFICIENCY
          </h2>
        </div>
      </div>

      <div className="grid-container" style={{ rowGap: '4rem' }}>
        {skills.map((skillGroup, index) => {
          // Asymmetric visual weighting for columns
          const colSpanClass = index % 2 === 0 ? 'col-span-7' : 'col-span-5';
          
          return (
            <div key={skillGroup.category} className={`${colSpanClass} border-tech`} style={{ padding: '2rem', position: 'relative' }}>
              <div className="text-label text-accent" style={{ position: 'absolute', top: '-0.75rem', left: '1.5rem', backgroundColor: 'var(--blue1)', padding: '0 0.5rem' }}>
                // {skillGroup.category}
              </div>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
                {skillGroup.items.map(item => (
                  <span key={item} className="text-display" style={{ fontSize: '1.5rem', padding: '0.5rem', borderBottom: '2px solid var(--blue3)', color: 'var(--text)' }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
