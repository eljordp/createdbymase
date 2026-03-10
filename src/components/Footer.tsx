import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      {/* Marquee banner */}
      <div className="border-b border-border overflow-hidden py-3">
        <div className="marquee whitespace-nowrap font-mono text-xs text-muted tracking-widest">
          <span className="inline-block">
            CREATEDBYMASE &mdash; byMASE // CLOTHES &mdash; GREENHAUS // HOME + ACCESSORIES &mdash; MADE WITH INTENTION &mdash; CREATEDBYMASE &mdash; byMASE // CLOTHES &mdash; GREENHAUS // HOME + ACCESSORIES &mdash; MADE WITH INTENTION &mdash;&nbsp;
          </span>
          <span className="inline-block">
            CREATEDBYMASE &mdash; byMASE // CLOTHES &mdash; GREENHAUS // HOME + ACCESSORIES &mdash; MADE WITH INTENTION &mdash; CREATEDBYMASE &mdash; byMASE // CLOTHES &mdash; GREENHAUS // HOME + ACCESSORIES &mdash; MADE WITH INTENTION &mdash;&nbsp;
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="font-mono text-xl font-bold mb-4">
              <span className="text-fg">CREATED</span>
              <span className="text-muted">by</span>
              <span className="text-fg">MASE</span>
            </div>
            <p className="text-muted text-sm leading-relaxed max-w-sm">
              Two worlds, one vision. Clothes that speak and spaces that feel like home.
              Everything is intentional.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-muted hover:text-fg transition-colors text-xs font-mono tracking-wider">
                IG
              </a>
              <a href="#" className="text-muted hover:text-fg transition-colors text-xs font-mono tracking-wider">
                TIKTOK
              </a>
              <a href="#" className="text-muted hover:text-fg transition-colors text-xs font-mono tracking-wider">
                EMAIL
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-mono text-xs font-bold tracking-widest text-muted mb-4">SHOP</h4>
            <div className="space-y-3">
              <Link href="/bymase" className="block text-sm text-fg hover:text-accent-mase transition-colors">
                byMase
              </Link>
              <Link href="/greenhaus" className="block text-sm text-fg hover:text-accent-green transition-colors">
                Greenhaus
              </Link>
            </div>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-mono text-xs font-bold tracking-widest text-muted mb-4">INFO</h4>
            <div className="space-y-3">
              <a href="#" className="block text-sm text-fg hover:text-muted transition-colors">About</a>
              <a href="#" className="block text-sm text-fg hover:text-muted transition-colors">Shipping</a>
              <a href="#" className="block text-sm text-fg hover:text-muted transition-colors">Returns</a>
              <a href="#" className="block text-sm text-fg hover:text-muted transition-colors">Contact</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-mono text-muted tracking-wider">
          <span>&copy; {new Date().getFullYear()} CREATEDBYMASE. ALL RIGHTS RESERVED.</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-accent-green rounded-full" />
            SYSTEM ONLINE
          </span>
        </div>
      </div>
    </footer>
  );
}
