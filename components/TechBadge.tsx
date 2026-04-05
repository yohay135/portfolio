interface TechBadgeProps {
  name: string;
  variant?: "default" | "featured";
}

export default function TechBadge({ name, variant = "default" }: TechBadgeProps) {
  const base = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors";
  const styles = {
    default: "bg-slate-100 text-slate-700 hover:bg-indigo-50 hover:text-indigo-700",
    featured: "bg-indigo-50 text-indigo-700",
  };
  return <span className={`${base} ${styles[variant]}`}>{name}</span>;
}
