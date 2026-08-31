export default function ProjectFilters({ activeTag, onTagChange }) {
  const tags = ['ALL', 'GAMEDEV', 'VR', 'UNITY', 'WEB', 'DESIGN'];

  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {tags.map(tag => {
        const isActive = activeTag === tag;
        return (
          <button
            key={tag}
            onClick={() => onTagChange(tag)}
            className="text-label interactive-block"
            style={{
              backgroundColor: isActive ? 'var(--blue5)' : 'transparent',
              color: isActive ? 'var(--text)' : 'var(--text-light)',
              border: isActive ? '1px solid var(--blue5)' : '1px solid var(--blue2)',
              padding: '0.5rem 1rem',
              outline: 'none',
              textTransform: 'uppercase'
            }}
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
}
