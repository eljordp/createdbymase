import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  const isMase = project.category === 'bymase';

  return (
    <Link
      href={`/work/${project.id}`}
      className="group block active:opacity-80"
    >
      <div className="relative aspect-[4/3] bg-surface rounded overflow-hidden border border-border group-hover:border-muted/40 transition-all">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Type badge */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-bg/80 backdrop-blur-sm px-2 sm:px-3 py-1 rounded font-mono text-[9px] sm:text-[10px] tracking-wider">
          {project.type.toUpperCase()}
        </div>
        {/* Hover overlay — desktop */}
        <div className="absolute inset-0 bg-bg/60 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:flex items-center justify-center">
          <span className={`font-mono text-xs tracking-widest ${isMase ? 'text-accent-mase' : 'text-accent-green'}`}>
            VIEW PROJECT
          </span>
        </div>
      </div>
      <div className="mt-2 sm:mt-3 space-y-1">
        <h3 className="font-mono text-[11px] sm:text-sm font-bold tracking-wide group-hover:opacity-70 transition-opacity leading-tight">
          {project.title}
        </h3>
        <div className="flex items-center gap-2">
          <p className="text-muted text-[10px] sm:text-xs">{project.year}</p>
          {project.tags.slice(0, 2).map((tag) => (
            <span key={tag} className={`text-[9px] sm:text-[10px] font-mono tracking-wider ${isMase ? 'text-accent-mase/60' : 'text-accent-green/60'}`}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
