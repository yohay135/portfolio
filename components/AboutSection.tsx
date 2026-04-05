import SectionWrapper from "./SectionWrapper";

export default function AboutSection() {
  return (
    <div className="bg-slate-50">
      <SectionWrapper id="about">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold text-indigo-600 tracking-widest uppercase mb-3">About Me</p>
            <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-snug">
              Engineering meets<br />
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">data thinking.</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full" />
          </div>
          <div className="space-y-5 text-slate-600 leading-relaxed">
            <p>I&apos;m an <strong className="text-slate-800">Industrial Engineering &amp; Management</strong> student with a strong analytical foundation and a hands-on approach to building data-driven systems. I think in systems — how data flows, where decisions happen, and what it takes to make processes measurably better.</p>
            <p>My work sits at the intersection of <strong className="text-slate-800">data engineering</strong>, <strong className="text-slate-800">business intelligence</strong>, and <strong className="text-slate-800">product thinking</strong>. I use Python and SQL to extract insight, Power BI to make it visible, and full-stack tools to build things people actually use.</p>
            <p>I&apos;m particularly drawn to roles in <strong className="text-slate-800">Data, BI, AI, and Product</strong> where I can combine quantitative rigor with a clear understanding of user needs — and keep building systems that scale.</p>
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[{ value: "4+", label: "Projects" }, { value: "5+", label: "Technologies" }, { value: "∞", label: "Curiosity" }].map(({ value, label }) => (
                <div key={label} className="bg-white rounded-2xl p-4 text-center shadow-sm border border-slate-100">
                  <p className="text-2xl font-bold text-indigo-600">{value}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
