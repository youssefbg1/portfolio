import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function ProjectCard({ project, customClass = '' }) {
  // Fallback to a solid color if no image exists
  const imageUrl = project.images.length > 0 ? project.images[0] : null;
  const revealRef = useScrollReveal();

  return (
    <Link ref={revealRef} to={`/projects/${project.slug}`} className={`project-card reveal-up ${customClass}`}>
      <div className="project-img-container bg-blue2">
        {imageUrl ? (
          <img src={imageUrl} alt="" loading="lazy" className="project-img" />
        ) : (
          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--blue5)' }} className="text-label">
            NO IMAGE DATA
          </div>
        )}
        
        {/* Technical Top-Left Badge */}
        <div className="project-year-badge text-label text-accent">
          {project.year} // {project.tags[0] || 'PROJECT'}
        </div>
      </div>

      <div className="project-content">
        <div>
          <h3 className="text-heading" style={{ marginBottom: '0.5rem', transition: 'color 0.2s ease' }}>
            {project.title}
          </h3>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {project.technologies.map(tech => (
              <span key={tech} className="border-tech text-label" style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem', color: 'var(--text-light)' }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Floating Geometric CTA at bottom right */}
        <div className="project-card-footer">
          <div className="project-cta-btn text-display" style={{ fontSize: '1.5rem' }} aria-hidden="true">
            &rarr;
          </div>
        </div>
      </div>
    </Link>
  );
}
