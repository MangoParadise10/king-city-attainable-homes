'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/what-we-do', label: 'What We Do' },
  { href: '/who-we-are', label: 'Who We Are' },
  { href: '/projects', label: 'Projects' },
  { href: '/news', label: 'News' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/careers', label: 'Careers' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#071225]/95 backdrop-blur-md border-b border-[#38BDF8]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#38BDF8] to-[#0C1F3F] flex items-center justify-center">
              <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
                <path d="M20 4L4 16v20h32V16L20 4z" fill="#071225" stroke="#38BDF8" strokeWidth="2"/>
                <path d="M14 36V24h12v12" fill="#38BDF8"/>
                <circle cx="20" cy="14" r="3" fill="#38BDF8"/>
              </svg>
            </div>
            <div>
              <div className="text-sm font-bold text-[#38BDF8] leading-tight tracking-wide">KING CITY</div>
              <div className="text-xs text-white/70 leading-tight tracking-wider">ATTAINABLE HOMES</div>
            </div>
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  pathname === l.href
                    ? 'text-[#38BDF8] bg-[#38BDF8]/10'
                    : 'text-white/80 hover:text-[#38BDF8] hover:bg-[#38BDF8]/5'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Mobile burger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${open ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-current transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#0C1F3F] border-t border-[#38BDF8]/10 px-4 py-4 space-y-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block px-4 py-3 rounded-md text-sm font-medium transition-all ${
                pathname === l.href
                  ? 'text-[#38BDF8] bg-[#38BDF8]/10'
                  : 'text-white/80 hover:text-[#38BDF8]'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
