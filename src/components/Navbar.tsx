'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const isMase = pathname.startsWith('/bymase');
  const isPortfolio = pathname.startsWith('/portfolio');
  const isHome = pathname === '/';
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
          <Link href="/" className="font-mono text-sm sm:text-lg font-bold tracking-tight hover:opacity-70 transition-opacity">
            <span className="text-fg">CREATED</span>
            <span className="text-muted">by</span>
            <span className="text-fg">MASE</span>
          </Link>

          <div className="hidden md:flex items-center gap-1 bg-subtle rounded-full p-1">
            <Link
              href="/bymase"
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider transition-all ${
                isMase ? 'bg-accent-mase text-white' : 'text-muted hover:text-fg'
              }`}
            >
              byMASE
            </Link>
            <Link
              href="/portfolio"
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider transition-all ${
                isPortfolio ? 'bg-accent-green text-black' : 'text-muted hover:text-fg'
              }`}
            >
              PORTFOLIO
            </Link>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="mailto:createdbymase@gmail.com"
              className="hidden sm:block font-mono text-[10px] tracking-widest text-muted hover:text-fg transition-colors"
            >
              CONTACT
            </a>
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

        {!isHome && (
          <div className="hidden sm:flex border-t border-border px-4 sm:px-6 py-1.5 items-center gap-4 text-[10px] font-mono text-muted tracking-wider">
            <span className="text-accent-mase">&gt;</span>
            <span>
              {isMase ? 'byMASE // VIDEOS + CREATIVE DIRECTION' : 'PORTFOLIO // CONCEPT WORK'}
            </span>
            <span className="ml-auto opacity-50">OPEN FOR WORK</span>
          </div>
        )}
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 z-50 h-full w-[280px] bg-bg border-l border-border transition-transform duration-300 ease-out md:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6 pb-8">
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
              href="/portfolio"
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-4 rounded-lg text-sm font-mono font-bold tracking-wider transition-colors ${
                isPortfolio ? 'bg-accent-green/10 text-accent-green' : 'text-muted hover:text-fg hover:bg-subtle'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-accent-green" />
              PORTFOLIO
            </Link>
          </div>
          <div className="border-t border-border my-6" />
          <div className="space-y-1">
            <a href="mailto:createdbymase@gmail.com" onClick={() => setMenuOpen(false)} className="block px-4 py-3 text-sm text-muted hover:text-fg transition-colors">Contact</a>
            <a href="#" onClick={() => setMenuOpen(false)} className="block px-4 py-3 text-sm text-muted hover:text-fg transition-colors">About</a>
          </div>
          <div className="mt-auto">
            <div className="border-t border-border pt-6 space-y-4">
              <div className="flex items-center gap-4">
                <a href="#" className="text-muted hover:text-fg transition-colors text-xs font-mono tracking-wider">IG</a>
                <a href="#" className="text-muted hover:text-fg transition-colors text-xs font-mono tracking-wider">TIKTOK</a>
                <a href="mailto:createdbymase@gmail.com" className="text-muted hover:text-fg transition-colors text-xs font-mono tracking-wider">EMAIL</a>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-muted tracking-wider">
                <span className="w-1.5 h-1.5 bg-accent-green rounded-full" />
                OPEN FOR WORK
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
