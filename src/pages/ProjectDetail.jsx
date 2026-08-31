import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { projects } from '../data/projects';
import { sortProjects } from '../utils/sortProjects';
import ProjectHero from '../components/projects/ProjectHero';

export default function ProjectDetail() {
  const { slug } = useParams();
  
  // Sort projects so our prev/next navigation respects the exact same order as the archive
  const sortedProjects = sortProjects(projects);
  const currentIndex = sortedProjects.findIndex(p => p.slug === slug);
  const project = sortedProjects[currentIndex];

  // Scroll to top and update document title when slug changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (project) {
      document.title = `${project.title} // Youssef Ben Ghorbel`;
    } else {
      document.title = `Project Not Found // Youssef Ben Ghorbel`;
    }
  }, [slug, project]);

  // Handle Missing Project (Invalid Slug)
  if (!project) {
    return (
      <div className="page-enter" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="grid-container" style={{ width: '100%' }}>
          <div className="col-span-12 bg-blue1 border-heavy" style={{ padding: '6rem 4rem', textAlign: 'center' }}>
            <h1 className="text-display text-primary" style={{ marginBottom: '1rem' }}>404 // NOT FOUND</h1>
            <p className="text-body text-accent" style={{ marginBottom: '3rem' }}>PROJECT RECORD MISSING OR CORRUPTED.</p>
            <Link to="/#projects" className="btn-tech text-label">
              RETURN TO ARCHIVE
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Calculate Prev / Next
  const prevProject = currentIndex > 0 ? sortedProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < sortedProjects.length - 1 ? sortedProjects[currentIndex + 1] : null;

  return (
    <article className="page-enter">
      {/* Return Navigation */}
      <div className="grid-container" style={{ padding: '2rem var(--page-margin-desktop) 0' }}>
        <div className="col-span-12">
          <Link to="/#projects" className="text-label text-accent interactive-block" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--blue2)' }}>
            &lt;- BACK TO ARCHIVE
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <ProjectHero project={project} index={currentIndex + 1} />

      {/* Content Breakdown Section */}
      <section className="grid-container" style={{ padding: '4rem var(--page-margin-desktop)', rowGap: '3rem' }}>
        
        {/* Left Meta Column */}
        <div className="col-span-4" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {/* ROLE */}
          {project.role && (
            <div>
              <h2 className="text-label text-accent" style={{ marginBottom: '1rem', borderBottom: '1px solid var(--blue2)', paddingBottom: '0.5rem' }}>MY ROLE</h2>
              <p className="text-body">{project.role}</p>
            </div>
          )}
          
          {/* TECHNOLOGIES */}
          {project.technologies && project.technologies.length > 0 && (
            <div>
              <h2 className="text-label text-accent" style={{ marginBottom: '1rem', borderBottom: '1px solid var(--blue2)', paddingBottom: '0.5rem' }}>TECHNOLOGIES</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {project.technologies.map(tech => (
                  <span key={tech} className="text-body" style={{ color: 'var(--text-light)' }}>- {tech}</span>
                ))}
              </div>
            </div>
          )}

          {/* LINKS */}
          {project.links && Object.values(project.links).some(link => link !== null) && (
            <div>
              <h2 className="text-label text-accent" style={{ marginBottom: '1rem', borderBottom: '1px solid var(--blue2)', paddingBottom: '0.5rem' }}>EXTERNAL LINKS</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {project.links.build && (
                  <a href={project.links.build} target="_blank" rel="noopener noreferrer" className="btn-tech text-label" style={{ textAlign: 'center' }}>PLAY BUILD</a>
                )}
                {project.links.website && (
                  <a href={project.links.website} target="_blank" rel="noopener noreferrer" className="btn-tech text-label" style={{ textAlign: 'center' }}>VISIT WEBSITE</a>
                )}
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-label interactive-block" style={{ padding: '0.75rem', border: '1px solid var(--blue5)', textAlign: 'center' }}>VIEW SOURCE</a>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Right Content Column */}
        <div className="col-span-8" style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {/* ABOUT / DESCRIPTION */}
          {project.description && (
            <div>
              <h2 className="text-label text-accent" style={{ marginBottom: '1.5rem' }}>// ABOUT THE PROJECT</h2>
              <p className="text-body" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                {project.description}
              </p>
            </div>
          )}
          
          {/* ADDITIONAL MEDIA GRID */}
          {project.images && project.images.length > 1 && (
            <div>
              <h2 className="text-label text-accent" style={{ marginBottom: '1.5rem' }}>// VISUAL RECORDS</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                {project.images.slice(1).map((img, idx) => (
                  <div key={idx} className="bg-blue1 border-tech" style={{ padding: '0.25rem' }}>
                    <img src={img} alt={`${project.title} - Visual ${idx + 1}`} loading="lazy" style={{ width: '100%', height: 'auto', display: 'block', aspectRatio: '4/3', objectFit: 'cover' }} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Prev / Next Navigation Footer */}
      <nav className="grid-container" style={{ borderTop: '2px solid var(--blue2)', marginTop: '2rem' }}>
        {/* Prev Project */}
        {prevProject ? (
          <Link to={`/projects/${prevProject.slug}`} className="col-span-6 interactive-block border-right-desktop" style={{ padding: '4rem 2rem', textDecoration: 'none' }}>
            <div className="text-label text-accent">PREVIOUS</div>
            <div className="text-heading" style={{ marginTop: '1rem', wordBreak: 'break-word' }}>{prevProject.title}</div>
          </Link>
        ) : (
          <div className="col-span-6 border-right-desktop"></div>
        )}
        {/* Next Project */}
        {nextProject ? (
          <Link to={`/projects/${nextProject.slug}`} className="col-span-6 interactive-block" style={{ padding: '4rem 2rem', textAlign: 'right', textDecoration: 'none' }}>
            <div className="text-label text-accent">NEXT</div>
            <div className="text-heading" style={{ marginTop: '1rem', wordBreak: 'break-word' }}>{nextProject.title}</div>
          </Link>
        ) : (
          <div className="col-span-6"></div>
        )}
      </nav>
    </article>
  );
}
