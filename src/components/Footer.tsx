import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="border-b border-border overflow-hidden py-2 sm:py-3">
        <div className="marquee whitespace-nowrap font-mono text-[10px] sm:text-xs text-muted tracking-widest">
          <span className="inline-block">
            CREATEDBYMASE &mdash; CREATIVE DIRECTION &mdash; VIDEO &mdash; CONCEPT WORK &mdash; OPEN FOR WORK &mdash; CREATEDBYMASE &mdash; CREATIVE DIRECTION &mdash; VIDEO &mdash; CONCEPT WORK &mdash; OPEN FOR WORK &mdash;&nbsp;
          </span>
          <span className="inline-block">
            CREATEDBYMASE &mdash; CREATIVE DIRECTION &mdash; VIDEO &mdash; CONCEPT WORK &mdash; OPEN FOR WORK &mdash; CREATEDBYMASE &mdash; CREATIVE DIRECTION &mdash; VIDEO &mdash; CONCEPT WORK &mdash; OPEN FOR WORK &mdash;&nbsp;
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          <div className="col-span-2">
            <div className="font-mono text-lg sm:text-xl font-bold mb-3 sm:mb-4">
              <span className="text-fg">CREATED</span>
              <span className="text-muted">by</span>
              <span className="text-fg">MASE</span>
            </div>
            <p className="text-muted text-xs sm:text-sm leading-relaxed max-w-sm">
              Creative direction, video production, and concept work.
              Bringing ideas to life with intention and vision.
            </p>
            <div className="flex items-center gap-4 mt-4 sm:mt-6">
              <a href="#" className="text-muted hover:text-fg transition-colors text-xs font-mono tracking-wider py-1">IG</a>
              <a href="#" className="text-muted hover:text-fg transition-colors text-xs font-mono tracking-wider py-1">TIKTOK</a>
              <a href="mailto:createdbymase@gmail.com" className="text-muted hover:text-fg transition-colors text-xs font-mono tracking-wider py-1">EMAIL</a>
            </div>
          </div>
          <div>
            <h4 className="font-mono text-[10px] sm:text-xs font-bold tracking-widest text-muted mb-3 sm:mb-4">WORK</h4>
            <div className="space-y-2 sm:space-y-3">
              <Link href="/bymase" className="block text-xs sm:text-sm text-fg hover:text-accent-mase transition-colors py-1">byMase</Link>
              <Link href="/portfolio" className="block text-xs sm:text-sm text-fg hover:text-accent-green transition-colors py-1">Portfolio</Link>
            </div>
          </div>
          <div>
            <h4 className="font-mono text-[10px] sm:text-xs font-bold tracking-widest text-muted mb-3 sm:mb-4">CONTACT</h4>
            <div className="space-y-2 sm:space-y-3">
              <a href="mailto:createdbymase@gmail.com" className="block text-xs sm:text-sm text-fg hover:text-muted transition-colors py-1">Email</a>
              <a href="#" className="block text-xs sm:text-sm text-fg hover:text-muted transition-colors py-1">Instagram</a>
              <a href="#" className="block text-xs sm:text-sm text-fg hover:text-muted transition-colors py-1">TikTok</a>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-10 sm:mt-16 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[10px] sm:text-[11px] font-mono text-muted tracking-wider">
          <span>&copy; {new Date().getFullYear()} CREATEDBYMASE.</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-accent-green rounded-full" />
            OPEN FOR WORK
          </span>
        </div>
      </div>
    </footer>
  );
}
