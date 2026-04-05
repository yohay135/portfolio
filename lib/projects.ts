import projectsData from "@/data/projects.json";
import type { Project, ProjectCategory } from "@/types";

const projects = projectsData as Project[];

export function getAllProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category);
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getGroupedProjects(): {
  featured: Project[];
  current: Project[];
  past: Project[];
  future: Project[];
} {
  return {
    featured: projects.filter((p) => p.featured),
    current: projects.filter((p) => !p.featured && p.category === "current"),
    past: projects.filter((p) => !p.featured && p.category === "past"),
    future: projects.filter((p) => p.category === "future"),
  };
}
