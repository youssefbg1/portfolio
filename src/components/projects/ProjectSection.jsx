import { useState, useMemo } from 'react';
import { projects } from '../../data/projects';
import { sortProjects } from '../../utils/sortProjects';
import { filterProjects } from '../../utils/filterProjects';
import ProjectFilters from './ProjectFilters';
import ProjectGrid from './ProjectGrid';

export default function ProjectSection() {
  const [activeTag, setActiveTag] = useState('ALL');
  
  // Sort data strictly by date using util
  const sortedProjects = useMemo(() => sortProjects(projects), []);
  
  // Filter sorted data
  const filteredProjects = useMemo(() => filterProjects(sortedProjects, activeTag), [sortedProjects, activeTag]);

  return (
    <section id="projects" style={{ padding: '6rem 0', minHeight: '100vh', borderTop: '2px solid var(--blue2)' }}>
      <div className="grid-container" style={{ marginBottom: '3rem' }}>
        <div className="col-span-12" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '2rem', borderBottom: '2px solid var(--blue2)', paddingBottom: '1.5rem' }}>
          <h2 className="text-heading" style={{ margin: 0 }}>
            <span className="text-accent" style={{ marginRight: '1rem' }}>02 /</span> 
            SELECTED WORK
          </h2>
          <ProjectFilters activeTag={activeTag} onTagChange={setActiveTag} />
        </div>
      </div>
      
      {filteredProjects.length > 0 ? (
        <ProjectGrid projects={filteredProjects} />
      ) : (
        <div className="grid-container">
          <div className="col-span-12 bg-blue1 border-tech" style={{ padding: '4rem', textAlign: 'center' }}>
            <p className="text-label text-accent">NO PROJECTS FOUND FOR TAG: {activeTag}</p>
          </div>
        </div>
      )}
    </section>
  );
}
