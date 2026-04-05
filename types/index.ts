// ─── Project ────────────────────────────────────────────────────────────────

export type ProjectCategory = "current" | "past" | "future";

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  bulletPoints: string[];
  technologies: string[];
  category: ProjectCategory;
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
}

// ─── Raw Admin Input ────────────────────────────────────────────────────────

export interface RawProjectInput {
  projectName: string;
  summary: string;
  technologies: string;
  problemItSolves: string;
  whatIBuilt: string;
  keyAchievements: string;
  githubLink?: string;
  futurePlans?: string;
  category?: ProjectCategory;
  featured?: boolean;
}

// ─── Skills ─────────────────────────────────────────────────────────────────

export interface SkillItem {
  name: string;
}

export interface SkillCategory {
  id: string;
  category: string;
  icon: string;
  color: string;
  skills: SkillItem[];
}

// ─── Profile ─────────────────────────────────────────────────────────────────

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  summary: string;
  email: string;
  linkedinUrl: string;
  githubUrl: string;
  location: string;
}
