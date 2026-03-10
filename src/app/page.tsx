import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col">
      <div className="flex-1 flex flex-col md:flex-row min-h-dvh pt-[52px] sm:pt-[60px]">
        {/* byMase side */}
        <Link
          href="/bymase"
          className="group relative flex-1 flex items-center justify-center bg-bg border-b md:border-b-0 md:border-r border-border overflow-hidden cursor-pointer min-h-[45dvh] md:min-h-0 active:bg-accent-mase/5"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1a1a1a_1px,transparent_1px)] bg-[length:20px_20px] opacity-50" />
          <div className="absolute inset-0 bg-accent-mase/0 group-hover:bg-accent-mase/5 transition-all duration-700" />
          <div className="relative z-10 text-center px-6 fade-up">
            <div className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] text-muted mb-4 sm:mb-6 uppercase">
              [ 001 &mdash; Videos + Creative Direction ]
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-3 sm:mb-4 group-hover:text-accent-mase transition-colors duration-500">
              byMASE
            </h2>
            <p className="text-muted text-xs sm:text-sm max-w-xs mx-auto mb-6 sm:mb-8">
              Music videos, brand films, commercials, and creative direction.
            </p>
            <div className="font-mono text-[10px] sm:text-xs tracking-widest text-muted group-hover:text-accent-mase transition-colors">
              VIEW WORK &rarr;
            </div>
            <div className="absolute top-4 left-4 sm:top-8 sm:left-8 w-4 h-4 sm:w-6 sm:h-6 border-t border-l border-muted/20 group-hover:border-accent-mase/40 transition-colors" />
            <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 w-4 h-4 sm:w-6 sm:h-6 border-b border-r border-muted/20 group-hover:border-accent-mase/40 transition-colors" />
          </div>
        </Link>

        {/* Portfolio side */}
        <Link
          href="/portfolio"
          className="group relative flex-1 flex items-center justify-center bg-bg overflow-hidden cursor-pointer min-h-[45dvh] md:min-h-0 active:bg-accent-green/5"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1a1a1a_1px,transparent_1px)] bg-[length:24px_24px] opacity-50" />
          <div className="absolute inset-0 bg-accent-green/0 group-hover:bg-accent-green/5 transition-all duration-700" />
          <div className="relative z-10 text-center px-6 fade-up" style={{ animationDelay: '0.15s' }}>
            <div className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] text-muted mb-4 sm:mb-6 uppercase">
              [ 002 &mdash; Concept Work ]
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-3 sm:mb-4 group-hover:text-accent-green transition-colors duration-500">
              PORTFOLIO
            </h2>
            <p className="text-muted text-xs sm:text-sm max-w-xs mx-auto mb-6 sm:mb-8">
              Brand concepts, art direction, event design, and visual identity.
            </p>
            <div className="font-mono text-[10px] sm:text-xs tracking-widest text-muted group-hover:text-accent-green transition-colors">
              VIEW WORK &rarr;
            </div>
            <div className="absolute top-4 left-4 sm:top-8 sm:left-8 w-4 h-4 sm:w-6 sm:h-6 border-t border-l border-muted/20 group-hover:border-accent-green/40 transition-colors" />
            <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 w-4 h-4 sm:w-6 sm:h-6 border-b border-r border-muted/20 group-hover:border-accent-green/40 transition-colors" />
          </div>
        </Link>
      </div>

      <div className="border-t border-border px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-muted tracking-widest">
        <span>CREATEDBYMASE &copy; {new Date().getFullYear()}</span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-accent-green rounded-full animate-pulse" />
          <span className="hidden sm:inline">OPEN FOR WORK</span>
          <span className="sm:hidden">AVAILABLE</span>
        </span>
      </div>
    </div>
  );
}
