import type { Project } from "@/types";
import ProjectCard from "./ProjectCard";
import SectionWrapper from "./SectionWrapper";

interface ProjectsSectionProps {
  featuredProjects: Project[];
  currentProjects: Project[];
  pastProjects: Project[];
  futureProjects: Project[];
}

function GroupLabel({ emoji, label }: { emoji: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="text-lg">{emoji}</span>
      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">{label}</h3>
      <div className="flex-1 h-px bg-slate-100" />
    </div>
  );
}

export default function ProjectsSection({ featuredProjects, currentProjects, pastProjects, futureProjects }: ProjectsSectionProps) {
  return (
    <SectionWrapper id="projects">
      <div className="mb-12">
        <p className="text-sm font-semibold text-indigo-600 tracking-widest uppercase mb-2">Projects</p>
        <h2 className="text-4xl font-bold text-slate-900 mb-3">Things I&apos;ve Built</h2>
        <p className="text-slate-500 max-w-xl">From data pipelines and BI dashboards to full-stack web apps — here&apos;s a selection of projects that represent how I think and what I build.</p>
      </div>

      {featuredProjects.length > 0 && (
        <div className="mb-16">
          <GroupLabel emoji="⭐" label="Featured Projects" />
          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => <ProjectCard key={project.id} project={project} variant="featured" />)}
          </div>
        </div>
      )}

      {currentProjects.length > 0 && (
        <div className="mb-16">
          <GroupLabel emoji="🟢" label="Currently Working On" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {currentProjects.map((project) => <ProjectCard key={project.id} project={project} variant="default" />)}
          </div>
        </div>
      )}

      {pastProjects.length > 0 && (
        <div className="mb-16">
          <GroupLabel emoji="✅" label="Completed" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {pastProjects.map((project) => <ProjectCard key={project.id} project={project} variant="default" />)}
          </div>
        </div>
      )}

      {futureProjects.length > 0 && (
        <div>
          <GroupLabel emoji="🔮" label="On the Roadmap" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {futureProjects.map((project) => <ProjectCard key={project.id} project={project} variant="future" />)}
          </div>
        </div>
      )}
    </SectionWrapper>
  );
}
