import type { Profile } from "@/types";

interface HeroSectionProps {
  profile: Profile;
}

export default function HeroSection({ profile }: HeroSectionProps) {
  const [firstName, ...rest] = profile.name.split(" ");
  const lastName = rest.join(" ");

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-violet-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(99,102,241,0.12),transparent)]" />
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-violet-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-medium px-4 py-1.5 rounded-full mb-8">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          {profile.location} · Open to opportunities
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-4 leading-tight tracking-tight">
          <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">{firstName}</span>{" "}
          <span>{lastName}</span>
        </h1>

        <p className="text-xl md:text-2xl font-semibold text-slate-600 mb-3">{profile.title}</p>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {profile.tagline.split(" · ").map((tag) => (
            <span key={tag} className="bg-white border border-slate-200 text-slate-600 text-sm font-medium px-3 py-1 rounded-full shadow-sm">{tag}</span>
          ))}
        </div>

        <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed">{profile.summary}</p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-blue-700 transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-200/60">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            LinkedIn
          </a>
          <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-slate-900 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-slate-700 transition-all hover:-translate-y-0.5 shadow-lg shadow-slate-900/20">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
            GitHub
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 border-2 border-indigo-600 text-indigo-600 font-semibold px-7 py-3.5 rounded-full hover:bg-indigo-50 transition-all hover:-translate-y-0.5">
            Contact Me
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-400 text-xs">
        <span>Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-300 to-transparent" />
      </div>
    </section>
  );
}
