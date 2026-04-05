import type { Project } from "@/types";
import TechBadge from "./TechBadge";

interface ProjectCardProps {
  project: Project;
  variant?: "featured" | "default" | "future";
}

export default function ProjectCard({ project, variant = "default" }: ProjectCardProps) {
  const isFeatured = variant === "featured";
  const isFuture = variant === "future";

  return (
    <article className={`group relative flex flex-col rounded-2xl p-6 transition-all duration-300 ${
      isFeatured
        ? "bg-white border-2 border-indigo-200 shadow-lg shadow-indigo-100/50 hover:border-indigo-400 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-200/40"
        : isFuture
        ? "bg-white border-2 border-dashed border-slate-200 opacity-80 hover:opacity-100 hover:-translate-y-0.5 hover:shadow-md"
        : "bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-200 hover:-translate-y-1"
    }`}>
      <div className="flex items-center gap-2 mb-4">
        {isFeatured && <span className="inline-flex items-center gap-1 bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">⭐ Featured</span>}
        {isFuture && <span className="inline-flex items-center gap-1 bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full">🔮 Planned</span>}
        {!isFeatured && !isFuture && project.category === "current" && <span className="inline-flex items-center gap-1 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">🟢 Current</span>}
        {!isFeatured && !isFuture && project.category === "past" && <span className="inline-flex items-center gap-1 bg-slate-100 text-slate-500 text-xs font-medium px-3 py-1 rounded-full">Completed</span>}
      </div>

      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-700 transition-colors leading-snug">{project.title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">{project.shortDescription}</p>

      {isFeatured && project.bulletPoints.length > 0 && (
        <ul className="space-y-1.5 mb-5">
          {project.bulletPoints.slice(0, 3).map((bp, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
              {bp}
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.technologies.map((tech) => (
          <TechBadge key={tech} name={tech} variant={isFeatured ? "featured" : "default"} />
        ))}
      </div>

      {(project.githubUrl || project.liveUrl) && (
        <div className="flex items-center gap-3 mt-auto">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
              GitHub
            </a>
          )}
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors">Live Demo ↗</a>}
        </div>
      )}
    </article>
  );
}
