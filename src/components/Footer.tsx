import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      {/* Marquee banner */}
      <div className="border-b border-border overflow-hidden py-2 sm:py-3">
        <div className="marquee whitespace-nowrap font-mono text-[10px] sm:text-xs text-muted tracking-widest">
          <span className="inline-block">
            CREATEDBYMASE &mdash; byMASE // CLOTHES &mdash; GREENHAUS // HOME + ACCESSORIES &mdash; MADE WITH INTENTION &mdash; CREATEDBYMASE &mdash; byMASE // CLOTHES &mdash; GREENHAUS // HOME + ACCESSORIES &mdash; MADE WITH INTENTION &mdash;&nbsp;
          </span>
          <span className="inline-block">
            CREATEDBYMASE &mdash; byMASE // CLOTHES &mdash; GREENHAUS // HOME + ACCESSORIES &mdash; MADE WITH INTENTION &mdash; CREATEDBYMASE &mdash; byMASE // CLOTHES &mdash; GREENHAUS // HOME + ACCESSORIES &mdash; MADE WITH INTENTION &mdash;&nbsp;
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="font-mono text-lg sm:text-xl font-bold mb-3 sm:mb-4">
              <span className="text-fg">CREATED</span>
              <span className="text-muted">by</span>
              <span className="text-fg">MASE</span>
            </div>
            <p className="text-muted text-xs sm:text-sm leading-relaxed max-w-sm">
              Two worlds, one vision. Clothes that speak and spaces that feel like home.
              Everything is intentional.
            </p>
            <div className="flex items-center gap-4 mt-4 sm:mt-6">
              <a href="#" className="text-muted hover:text-fg transition-colors text-xs font-mono tracking-wider py-1">
                IG
              </a>
              <a href="#" className="text-muted hover:text-fg transition-colors text-xs font-mono tracking-wider py-1">
                TIKTOK
              </a>
              <a href="#" className="text-muted hover:text-fg transition-colors text-xs font-mono tracking-wider py-1">
                EMAIL
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-mono text-[10px] sm:text-xs font-bold tracking-widest text-muted mb-3 sm:mb-4">SHOP</h4>
            <div className="space-y-2 sm:space-y-3">
              <Link href="/bymase" className="block text-xs sm:text-sm text-fg hover:text-accent-mase transition-colors py-1">
                byMase
              </Link>
              <Link href="/greenhaus" className="block text-xs sm:text-sm text-fg hover:text-accent-green transition-colors py-1">
                Greenhaus
              </Link>
            </div>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-mono text-[10px] sm:text-xs font-bold tracking-widest text-muted mb-3 sm:mb-4">INFO</h4>
            <div className="space-y-2 sm:space-y-3">
              <a href="#" className="block text-xs sm:text-sm text-fg hover:text-muted transition-colors py-1">About</a>
              <a href="#" className="block text-xs sm:text-sm text-fg hover:text-muted transition-colors py-1">Shipping</a>
              <a href="#" className="block text-xs sm:text-sm text-fg hover:text-muted transition-colors py-1">Returns</a>
              <a href="#" className="block text-xs sm:text-sm text-fg hover:text-muted transition-colors py-1">Contact</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-10 sm:mt-16 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[10px] sm:text-[11px] font-mono text-muted tracking-wider">
          <span>&copy; {new Date().getFullYear()} CREATEDBYMASE.</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-accent-green rounded-full" />
            SYSTEM ONLINE
          </span>
        </div>
      </div>
    </footer>
  );
}
