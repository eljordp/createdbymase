import { getProjectsByCategory } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

export const metadata = {
  title: 'PORTFOLIO | Concept Work — CREATEDBYMASE',
  description: 'Brand concepts, art direction, event design, and visual identity by Mase.',
};

export default function PortfolioPage() {
  const projects = getProjectsByCategory('portfolio');
  const types = [...new Set(projects.map((p) => p.type))];

  return (
    <div className="min-h-screen pt-[52px] sm:pt-[100px]">
      {/* Hero */}
      <section className="px-4 sm:px-6 py-8 sm:pb-16 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-2">
            <div>
              <div className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] text-muted mb-3 sm:mb-4">
                [ 002 — CONCEPT WORK ]
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-accent-green">
                PORTFOLIO
              </h1>
            </div>
            <div className="hidden md:block font-mono text-[10px] text-muted tracking-wider text-right">
              <div>{projects.length} PROJECTS</div>
              <div>OPEN FOR WORK</div>
            </div>
          </div>
          <p className="text-muted text-xs sm:text-sm max-w-lg mt-3 sm:mt-4">
            Concept work for brands, artists, and events. From identity systems to
            campaign strategies — this is where ideas take shape.
          </p>
          <div className="md:hidden font-mono text-[9px] text-muted tracking-wider mt-3">
            {projects.length} PROJECTS — OPEN FOR WORK
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-4 sm:px-6 py-10 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 sm:gap-4 mb-8 sm:mb-12 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
            <button className="font-mono text-[10px] sm:text-xs tracking-widest text-fg bg-subtle px-3 sm:px-4 py-2 rounded-full whitespace-nowrap min-h-[36px]">
              ALL
            </button>
            {types.map((type) => (
              <button
                key={type}
                className="font-mono text-[10px] sm:text-xs tracking-widest text-muted hover:text-fg px-3 sm:px-4 py-2 rounded-full whitespace-nowrap transition-colors min-h-[36px]"
              >
                {type.toUpperCase()}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="font-mono text-[9px] sm:text-[10px] tracking-[0.3em] text-accent-green mb-4 sm:mb-6">
            LET&apos;S CREATE
          </div>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold tracking-tight leading-tight mb-6 sm:mb-8">
            Got concept work that needs a creative eye?
          </h2>
          <a
            href="mailto:createdbymase@gmail.com"
            className="inline-block bg-accent-green text-black font-mono font-bold text-sm tracking-widest px-8 py-4 rounded hover:opacity-90 transition-opacity"
          >
            GET IN TOUCH
          </a>
        </div>
      </section>
    </div>
  );
}
