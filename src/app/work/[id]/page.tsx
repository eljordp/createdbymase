import { projects, getProjectById } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) return { title: 'Not Found' };
  return {
    title: `${project.title} | CREATEDBYMASE`,
    description: project.description,
  };
}

export default async function WorkPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  const isMase = project.category === 'bymase';
  const accentClass = isMase ? 'text-accent-mase' : 'text-accent-green';
  const accentBgClass = isMase ? 'bg-accent-mase' : 'bg-accent-green';
  const sectionName = isMase ? 'byMASE' : 'PORTFOLIO';
  const sectionHref = isMase ? '/bymase' : '/portfolio';

  return (
    <div className="min-h-screen pt-[52px] sm:pt-[100px]">
      {/* Breadcrumb */}
      <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-border">
        <div className="max-w-7xl mx-auto font-mono text-[9px] sm:text-[10px] tracking-wider text-muted flex items-center gap-1.5 sm:gap-2 overflow-x-auto whitespace-nowrap scrollbar-none">
          <Link href="/" className="hover:text-fg transition-colors shrink-0">HOME</Link>
          <span className="shrink-0">/</span>
          <Link href={sectionHref} className="hover:text-fg transition-colors shrink-0">
            {sectionName}
          </Link>
          <span className="shrink-0">/</span>
          <span className="text-fg truncate">{project.title}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 md:gap-16">
          {/* Project image / video */}
          <div className="space-y-3 sm:space-y-4">
            <div className="relative aspect-[4/3] bg-surface rounded border border-border overflow-hidden scanlines">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
              {/* Play button overlay for video projects */}
              {isMase && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
            {/* Additional image slots */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="aspect-[4/3] bg-surface rounded border border-border flex items-center justify-center"
                >
                  <span className="text-muted text-[7px] sm:text-[8px] font-mono">IMG_{String(i).padStart(2, '0')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Project info */}
          <div className="flex flex-col">
            <div className={`font-mono text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] ${accentClass} mb-2 sm:mb-3`}>
              {sectionName} // {project.type.toUpperCase()}
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-1 sm:mb-2">
              {project.title}
            </h1>

            <div className="font-mono text-sm text-muted mb-5 sm:mb-8">
              {project.year}
              {project.client && <span> &mdash; {project.client}</span>}
            </div>

            <p className="text-muted text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8">
              {project.description}
            </p>

            {/* Tags */}
            <div className="mb-6 sm:mb-8">
              <label className="font-mono text-[9px] sm:text-[10px] tracking-widest text-muted mb-2 sm:mb-3 block">
                TAGS
              </label>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 border border-border rounded font-mono text-[10px] sm:text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="mailto:createdbymase@gmail.com"
              className={`w-full py-4 ${accentBgClass} ${isMase ? 'text-white' : 'text-black'} font-mono font-bold text-sm tracking-widest rounded hover:opacity-90 transition-opacity text-center block`}
            >
              INQUIRE ABOUT THIS PROJECT
            </a>

            {/* Project details */}
            <div className="mt-8 sm:mt-12 border-t border-border pt-6 sm:pt-8 space-y-3 sm:space-y-4">
              <div className="font-mono text-[9px] sm:text-[10px] tracking-widest text-muted">DETAILS</div>
              <div className="grid grid-cols-2 gap-y-2 sm:gap-y-3 text-xs sm:text-sm">
                <span className="text-muted">Section</span>
                <span className="text-fg">{sectionName}</span>
                <span className="text-muted">Type</span>
                <span className="text-fg">{project.type}</span>
                <span className="text-muted">Year</span>
                <span className="text-fg">{project.year}</span>
                {project.client && (
                  <>
                    <span className="text-muted">Client</span>
                    <span className="text-fg">{project.client}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
