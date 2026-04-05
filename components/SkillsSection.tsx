import type { SkillCategory } from "@/types";
import SectionWrapper from "./SectionWrapper";

interface SkillsSectionProps {
  skills: SkillCategory[];
}

const COLOR_MAP: Record<string, { bg: string; border: string; dot: string }> = {
  indigo: { bg: "bg-indigo-50", border: "border-indigo-100", dot: "bg-indigo-400" },
  violet: { bg: "bg-violet-50", border: "border-violet-100", dot: "bg-violet-400" },
  sky: { bg: "bg-sky-50", border: "border-sky-100", dot: "bg-sky-400" },
};

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <div className="bg-slate-50">
      <SectionWrapper id="skills">
        <div className="mb-12">
          <p className="text-sm font-semibold text-indigo-600 tracking-widest uppercase mb-2">Skills</p>
          <h2 className="text-4xl font-bold text-slate-900 mb-3">Tools of the Trade</h2>
          <p className="text-slate-500 max-w-xl">A curated stack of languages, platforms, and analytical methods I use to design, build, and deliver.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((cat) => {
            const c = COLOR_MAP[cat.color] ?? COLOR_MAP.indigo;
            return (
              <div key={cat.id} className={`rounded-2xl border ${c.border} ${c.bg} p-6`}>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{cat.icon}</span>
                  <h3 className="font-bold text-slate-800">{cat.category}</h3>
                </div>
                <ul className="space-y-2">
                  {cat.skills.map((skill) => (
                    <li key={skill.name} className="flex items-center gap-2.5 text-sm text-slate-700">
                      <span className={`w-1.5 h-1.5 rounded-full ${c.dot} flex-shrink-0`} />
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </SectionWrapper>
    </div>
  );
}
