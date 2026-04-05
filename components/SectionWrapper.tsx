import type { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  className?: string;
  children: ReactNode;
}

export default function SectionWrapper({ id, className = "", children }: SectionWrapperProps) {
  return (
    <section id={id} className={`py-24 px-6 max-w-6xl mx-auto ${className}`}>
      {children}
    </section>
  );
}
