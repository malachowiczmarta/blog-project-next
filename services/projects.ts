import { getList } from '@/lib/markdownParser';

export const getAllProjects = () => {
  const projects = getList('_projects');

  return projects;
};
