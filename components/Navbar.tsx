'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const primary = [
  { href: '/', label: 'Home' },
  { href: '/what-we-do', label: 'What We Do' },
  { href: '/who-we-are', label: 'Who We Are' },
  { href: '/projects', label: 'Projects' },
];

const more = [
  { href: '/agriculture', label: 'Agriculture' },
  { href: '/news', label: 'News' },
  { href: '/volunteer', label: 'Volunteer' },
  { href: '/contact', label: 'Contact Us' },
];

function LogoMark() {
  return (
    <div className="w-10 h-10 flex items-center justify-center" style={{ background: '#071225', border: '1px solid rgba(56,189,248,0.3)', borderRadius: '2px' }}>
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <path d="M8 34 Q8 14 20 7 Q32 14 32 34" fill="none" stroke="#38BDF8" strokeWidth="1.8" opacity="0.9"/>
        <path d="M12 34 Q12 18 20 12 Q28 18 28 34" fill="none" stroke="#38BDF8" strokeWidth="0.8" opacity="0.35"/>
        <circle cx="13" cy="25" r="1.8" fill="#38BDF8" opacity="0.9"/>
        <line x1="13" y1="27" x2="13" y2="32" stroke="#38BDF8" strokeWidth="1.4" strokeLinecap="round"/>
        <line x1="11" y1="29" x2="15" y2="29" stroke="#38BDF8" strokeWidth="1.2" strokeLinecap="round"/>
        <circle cx="20" cy="23.5" r="2" fill="#7DD3FC"/>
        <line x1="20" y1="25.5" x2="20" y2="31" stroke="#7DD3FC" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="18" y1="28" x2="22" y2="28" stroke="#7DD3FC" strokeWidth="1.3" strokeLinecap="round"/>
        <circle cx="27" cy="25" r="1.8" fill="#38BDF8" opacity="0.9"/>
        <line x1="27" y1="27" x2="27" y2="32" stroke="#38BDF8" strokeWidth="1.4" strokeLinecap="round"/>
        <line x1="25" y1="29" x2="29" y2="29" stroke="#38BDF8" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="15" y1="29" x2="18" y2="28" stroke="#38BDF8" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
        <line x1="22" y1="28" x2="25" y2="29" stroke="#38BDF8" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
      </svg>
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setDropOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const linkCls = (href: string) =>
    `px-3.5 py-2.5 text-[11px] font-semibold tracking-[0.12em] uppercase transition-colors duration-150 ${
      pathname === href ? 'text-white' : 'text-white/50 hover:text-white'
    }`;

  const moreActive = more.some((l) => pathname === l.href);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#071225]/90 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <LogoMark />
            <div className="leading-none">
              <div className="text-[11px] font-bold text-[#38BDF8] tracking-[0.2em] uppercase">King Township</div>
              <div className="text-[10px] text-white/40 tracking-[0.15em] uppercase mt-0.5">Partnership</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center">
            {primary.map((l) => (
              <Link key={l.href} href={l.href} className={linkCls(l.href)}>
                {l.label}
              </Link>
            ))}

            {/* More dropdown — fieldai style */}
            <div ref={dropRef} className="relative">
              <button
                onClick={() => setDropOpen(!dropOpen)}
                className={`flex items-center gap-1.5 px-3.5 py-2.5 text-[11px] font-semibold tracking-[0.12em] uppercase transition-colors duration-150 ${
                  moreActive || dropOpen ? 'text-white' : 'text-white/50 hover:text-white'
                }`}
              >
                More
                <svg
                  className={`w-3 h-3 transition-transform duration-300 ${dropOpen ? 'rotate-180' : ''}`}
                  viewBox="0 0 12 12" fill="none"
                >
                  <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Dropdown panel — fieldai exact: frosted grey, 4px radius, 4px padding */}
              <div
                className={`absolute right-0 top-full mt-4 transition-all duration-200 ${
                  dropOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-1 pointer-events-none'
                }`}
                style={{
                  background: 'rgba(139,139,139,0.5)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  borderRadius: '4px',
                  padding: '4px',
                  minWidth: '180px',
                }}
              >
                {more.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setDropOpen(false)}
                    style={{
                      display: 'block',
                      padding: '11px 8px',
                      borderRadius: '4px',
                      fontSize: '11px',
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: pathname === l.href ? '#38BDF8' : 'rgba(255,255,255,0.85)',
                      transition: 'background 0.15s, color 0.15s',
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile burger */}
          <button
            className="lg:hidden text-white/70 p-2 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-5 h-px bg-current mb-1.5 transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <div className={`w-5 h-px bg-current mb-1.5 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <div className={`w-5 h-px bg-current transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="border-t border-white/5 px-4 py-3" style={{ background: 'rgba(4,13,28,0.98)', backdropFilter: 'blur(20px)' }}>
          {[...primary, ...more].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className={`block px-4 py-3 text-[11px] font-semibold tracking-[0.15em] uppercase transition-colors ${
                pathname === l.href ? 'text-[#38BDF8]' : 'text-white/50 hover:text-white'
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
