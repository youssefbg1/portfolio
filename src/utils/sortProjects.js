export function sortProjects(projects) {
  // Sort projects by date, newest first
  return [...projects].sort((a, b) => new Date(b.date) - new Date(a.date));
}
