'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const isMase = pathname.startsWith('/bymase');
  const isGreen = pathname.startsWith('/greenhaus');
  const isHome = pathname === '/';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="font-mono text-lg font-bold tracking-tight hover:opacity-70 transition-opacity">
          <span className="text-fg">CREATED</span>
          <span className="text-muted">by</span>
          <span className="text-fg">MASE</span>
        </Link>

        {/* Brand Toggle */}
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
        <div className="flex items-center gap-6">
          <Link
            href="/bymase"
            className={`md:hidden text-xs font-mono tracking-wider ${isMase ? 'text-accent-mase' : 'text-muted'}`}
          >
            byM
          </Link>
          <Link
            href="/greenhaus"
            className={`md:hidden text-xs font-mono tracking-wider ${isGreen ? 'text-accent-green' : 'text-muted'}`}
          >
            GH
          </Link>

          {/* Cart icon */}
          <button className="relative group" aria-label="Cart">
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
            <span className="absolute -top-1 -right-2 w-4 h-4 bg-accent-mase text-[10px] font-bold text-white rounded-full flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>

      {/* Retro status bar */}
      {!isHome && (
        <div className="border-t border-border px-6 py-1.5 flex items-center gap-4 text-[10px] font-mono text-muted tracking-wider">
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
  );
}
