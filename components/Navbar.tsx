'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/what-we-do', label: 'What We Do' },
  { href: '/who-we-are', label: 'Who We Are' },
  { href: '/projects', label: 'Projects' },
  { href: '/agriculture', label: 'Agriculture' },
  { href: '/news', label: 'News' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/volunteer', label: 'Volunteer' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#071225]/90 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#38BDF8] to-[#0C1F3F] flex items-center justify-center">
              <svg viewBox="0 0 40 40" fill="none" className="w-5 h-5">
                <path d="M20 5L5 16v20h30V16L20 5z" fill="#071225" stroke="#38BDF8" strokeWidth="2"/>
                <path d="M15 36V24h10v12" fill="#38BDF8"/>
                <circle cx="20" cy="14" r="3" fill="#38BDF8"/>
              </svg>
            </div>
            <div className="leading-none">
              <div className="text-[11px] font-bold text-[#38BDF8] tracking-[0.2em] uppercase">King Township</div>
              <div className="text-[10px] text-white/50 tracking-[0.15em] uppercase mt-0.5">Partnership</div>
            </div>
          </Link>

          {/* Desktop nav — fieldai-style */}
          <div className="hidden lg:flex items-center gap-0.5">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3.5 py-2 text-[11px] font-semibold tracking-[0.12em] uppercase rounded transition-all duration-200 ${
                  pathname === l.href
                    ? 'text-[#38BDF8] bg-[#38BDF8]/10'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Mobile burger */}
          <button
            className="lg:hidden text-white/70 p-2 hover:text-white transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <div className={`w-5 h-px bg-current mb-1.5 transition-all duration-300 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <div className={`w-5 h-px bg-current mb-1.5 transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <div className={`w-5 h-px bg-current transition-all duration-300 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu — fieldai dark style */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#040d1c]/98 backdrop-blur-xl border-t border-white/5 px-4 py-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block px-4 py-3 text-[11px] font-semibold tracking-[0.15em] uppercase rounded transition-all ${
                pathname === l.href
                  ? 'text-[#38BDF8]'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
