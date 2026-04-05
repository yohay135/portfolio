export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-100 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
        <p>© {year} <span className="font-semibold text-slate-600">Yohay Mabari</span>. Built with Next.js & Tailwind CSS.</p>
        <div className="flex items-center gap-6">
          <a href="https://www.linkedin.com/in/yohay-mabari" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">LinkedIn</a>
          <a href="https://github.com/yohay135" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">GitHub</a>
          <a href="mailto:yohay135@gmail.com" className="hover:text-indigo-600 transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
