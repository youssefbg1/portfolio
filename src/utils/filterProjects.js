export function filterProjects(projects, tag) {
  if (tag === 'ALL') {
    return projects;
  }
  return projects.filter(project => project.tags.includes(tag));
}
