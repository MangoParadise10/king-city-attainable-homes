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
            <div className="w-10 h-10 rounded-lg bg-[#071225] border border-[#38BDF8]/30 flex items-center justify-center">
              <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
                {/* Gothic arch */}
                <path d="M8 34 Q8 14 20 7 Q32 14 32 34" fill="none" stroke="#38BDF8" strokeWidth="1.8" opacity="0.9"/>
                <path d="M12 34 Q12 18 20 12 Q28 18 28 34" fill="none" stroke="#38BDF8" strokeWidth="0.8" opacity="0.35"/>
                {/* Person 1 */}
                <circle cx="13" cy="25" r="1.8" fill="#38BDF8" opacity="0.9"/>
                <line x1="13" y1="27" x2="13" y2="32" stroke="#38BDF8" strokeWidth="1.4" strokeLinecap="round"/>
                <line x1="11" y1="29" x2="15" y2="29" stroke="#38BDF8" strokeWidth="1.2" strokeLinecap="round"/>
                {/* Person 2 */}
                <circle cx="20" cy="23.5" r="2" fill="#7DD3FC"/>
                <line x1="20" y1="25.5" x2="20" y2="31" stroke="#7DD3FC" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="18" y1="28" x2="22" y2="28" stroke="#7DD3FC" strokeWidth="1.3" strokeLinecap="round"/>
                {/* Person 3 */}
                <circle cx="27" cy="25" r="1.8" fill="#38BDF8" opacity="0.9"/>
                <line x1="27" y1="27" x2="27" y2="32" stroke="#38BDF8" strokeWidth="1.4" strokeLinecap="round"/>
                <line x1="25" y1="29" x2="29" y2="29" stroke="#38BDF8" strokeWidth="1.2" strokeLinecap="round"/>
                {/* Hands */}
                <line x1="15" y1="29" x2="18" y2="28" stroke="#38BDF8" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
                <line x1="22" y1="28" x2="25" y2="29" stroke="#38BDF8" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
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
