import ProjectCard from './ProjectCard';

export default function ProjectGrid({ projects }) {
  return (
    <div className="grid-container" style={{ rowGap: '3rem' }}>
      {projects.map((project, index) => {
        // Calculate asymmetric spanning based on feature status and index
        // Featured gets 8 columns, alternating smaller cards get 4 or 6.
        let spanClass = 'col-span-12';
        
        if (project.featured) {
          spanClass = 'col-span-8';
        } else {
          // Creating an asymmetric tessellation pattern
          // 4 col -> 6 col -> 6 col -> 4 col etc.
          const patternIndex = index % 4;
          if (patternIndex === 1) spanClass = 'col-span-4';
          else if (patternIndex === 2 || patternIndex === 3) spanClass = 'col-span-6';
          else spanClass = 'col-span-4'; 
        }

        // Apply distinct clip-paths for visual variety
        const clipClass = index % 2 === 0 ? 'clip-br' : 'clip-tl';

        return (
          <div key={project.id} className={spanClass}>
            <ProjectCard project={project} customClass={clipClass} />
          </div>
        );
      })}
    </div>
  );
}
