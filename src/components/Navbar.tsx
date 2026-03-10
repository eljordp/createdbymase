'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const isMase = pathname.startsWith('/bymase');
  const isGreen = pathname.startsWith('/greenhaus');
  const isHome = pathname === '/';
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
          {/* Logo */}
          <Link href="/" className="font-mono text-sm sm:text-lg font-bold tracking-tight hover:opacity-70 transition-opacity">
            <span className="text-fg">CREATED</span>
            <span className="text-muted">by</span>
            <span className="text-fg">MASE</span>
          </Link>

          {/* Brand Toggle — desktop */}
          <div className="hidden md:flex items-center gap-1 bg-subtle rounded-full p-1">
            <Link
              href="/bymase"
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider transition-all ${
                isMase
                  ? 'bg-accent-mase text-white'
                  : 'text-muted hover:text-fg'
              }`}
            >
              byMASE
            </Link>
            <Link
              href="/greenhaus"
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider transition-all ${
                isGreen
                  ? 'bg-accent-green text-black'
                  : 'text-muted hover:text-fg'
              }`}
            >
              GREENHAUS
            </Link>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Cart icon */}
            <button className="relative group p-1" aria-label="Cart">
              <svg
                className="w-5 h-5 text-muted group-hover:text-fg transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <span className="absolute -top-0.5 -right-1.5 w-4 h-4 bg-accent-mase text-[10px] font-bold text-white rounded-full flex items-center justify-center">
                0
              </span>
            </button>

            {/* Hamburger — mobile */}
            <button
              className="md:hidden p-1 -mr-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <div className="w-5 flex flex-col gap-1">
                <span className={`block h-px bg-fg transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[3px]' : ''}`} />
                <span className={`block h-px bg-fg transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-px bg-fg transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[3px]' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Retro status bar — desktop only */}
        {!isHome && (
          <div className="hidden sm:flex border-t border-border px-4 sm:px-6 py-1.5 items-center gap-4 text-[10px] font-mono text-muted tracking-wider">
            <span className="text-accent-mase">&gt;</span>
            <span>
              {isMase ? 'byMASE // CLOTHES' : 'GREENHAUS // HOME + ACCESSORIES'}
            </span>
            <span className="ml-auto opacity-50">
              SYS.ONLINE
            </span>
          </div>
        )}
      </nav>

      {/* Mobile drawer overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[280px] bg-bg border-l border-border transition-transform duration-300 ease-out md:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6 pb-8">
          {/* Brand links */}
          <div className="space-y-1">
            <Link
              href="/bymase"
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-4 rounded-lg text-sm font-mono font-bold tracking-wider transition-colors ${
                isMase ? 'bg-accent-mase/10 text-accent-mase' : 'text-muted hover:text-fg hover:bg-subtle'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-accent-mase" />
              byMASE
            </Link>
            <Link
              href="/greenhaus"
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-4 rounded-lg text-sm font-mono font-bold tracking-wider transition-colors ${
                isGreen ? 'bg-accent-green/10 text-accent-green' : 'text-muted hover:text-fg hover:bg-subtle'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-accent-green" />
              GREENHAUS
            </Link>
          </div>

          {/* Divider */}
          <div className="border-t border-border my-6" />

          {/* Info links */}
          <div className="space-y-1">
            {['About', 'Shipping', 'Returns', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 text-sm text-muted hover:text-fg transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Bottom */}
          <div className="mt-auto">
            <div className="border-t border-border pt-6 space-y-4">
              <div className="flex items-center gap-4">
                <a href="#" className="text-muted hover:text-fg transition-colors text-xs font-mono tracking-wider">IG</a>
                <a href="#" className="text-muted hover:text-fg transition-colors text-xs font-mono tracking-wider">TIKTOK</a>
                <a href="#" className="text-muted hover:text-fg transition-colors text-xs font-mono tracking-wider">EMAIL</a>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-muted tracking-wider">
                <span className="w-1.5 h-1.5 bg-accent-green rounded-full" />
                SYSTEM ONLINE
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
