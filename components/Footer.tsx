import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#040d1c] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#071225] border border-[#38BDF8]/30 flex items-center justify-center">
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
              <div className="leading-none">
                <div className="text-[11px] font-bold text-[#38BDF8] tracking-[0.2em] uppercase">King Township</div>
                <div className="text-[10px] text-white/50 tracking-[0.15em] uppercase mt-0.5">Partnership</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              A community-rooted initiative building inclusive homes for everyone who lives, works, and belongs in King Township, Ontario.
            </p>
            <div className="mt-6 flex gap-3">
              {['f', 'x', 'in', 'ig'].map((s) => (
                <a key={s} href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-[#38BDF8]/50 hover:text-[#38BDF8] transition-all text-xs">
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white/40 font-semibold text-[10px] uppercase tracking-[0.2em] mb-5">Navigate</h4>
            <ul className="space-y-2.5">
              {[
                { href: '/what-we-do', label: 'What We Do' },
                { href: '/who-we-are', label: 'Who We Are' },
                { href: '/projects', label: 'Projects' },
                { href: '/agriculture', label: 'Agriculture' },
                { href: '/news', label: 'News' },
                { href: '/contact', label: 'Contact Us' },
                { href: '/volunteer', label: 'Volunteer' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/50 hover:text-[#38BDF8] text-sm transition-colors tracking-wide">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white/40 font-semibold text-[10px] uppercase tracking-[0.2em] mb-5">Contact</h4>
            <div className="space-y-3 text-sm text-white/50">
              <p className="font-medium text-white/80">King Township Partnership</p>
              <p>King City, Ontario, Canada</p>
              <a href="mailto:info@kinghousingpartnership.ca" className="block hover:text-[#38BDF8] transition-colors">
                info@kinghousingpartnership.ca
              </a>
              <p className="text-white/30 text-xs pt-1">kinghousingpartnership.ca</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/25">
          <p>© {new Date().getFullYear()} King Township Partnership. All rights reserved.</p>
          <p>King City, Ontario · Homes for Everyone</p>
        </div>
      </div>
    </footer>
  );
}
