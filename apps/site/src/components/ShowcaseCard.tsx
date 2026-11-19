import type { ReactNode } from 'react';

interface ShowcaseCardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function ShowcaseCard({ title, children, className = '' }: ShowcaseCardProps) {
  return (
    <section className={`showcase-card ${className}`.trim()}>
      <h2 className="showcase-card-title">{title}</h2>
      {children}
    </section>
  );
}
