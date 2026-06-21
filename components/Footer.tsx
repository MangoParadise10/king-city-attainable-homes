import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#05080F] border-t border-[#38BDF8]/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#38BDF8] to-[#0C1F3F] flex items-center justify-center">
                <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
                  <path d="M20 4L4 16v20h32V16L20 4z" fill="#071225" stroke="#38BDF8" strokeWidth="2"/>
                  <path d="M14 36V24h12v12" fill="#38BDF8"/>
                  <circle cx="20" cy="14" r="3" fill="#38BDF8"/>
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold text-[#38BDF8] leading-tight">KING CITY</div>
                <div className="text-xs text-white/60 leading-tight tracking-wider">ATTAINABLE HOMES</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Building inclusive communities where every resident — regardless of income — finds a place to belong, thrive, and call home in King City, Ontario.
            </p>
            <div className="mt-6 flex gap-4">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((s) => (
                <a key={s} href="#" className="w-9 h-9 rounded-full border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8]/70 hover:border-[#38BDF8] hover:text-[#38BDF8] transition-all">
                  <span className="text-xs capitalize">{s[0].toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[#38BDF8] font-semibold text-sm uppercase tracking-wider mb-4">Navigate</h4>
            <ul className="space-y-2">
              {[
                { href: '/what-we-do', label: 'What We Do' },
                { href: '/who-we-are', label: 'Who We Are' },
                { href: '/projects', label: 'Projects' },
                { href: '/news', label: 'News' },
                { href: '/contact', label: 'Contact Us' },
                { href: '/careers', label: 'Careers' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/60 hover:text-[#38BDF8] text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#38BDF8] font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-white/60">
              <p className="font-medium text-white">King Affordable Housing Project</p>
              <p>King City, Ontario, Canada</p>
              <a href="mailto:info@kingcityattainablehomes.ca" className="block hover:text-[#38BDF8] transition-colors">
                info@kingcityattainablehomes.ca
              </a>
              <a href="tel:+19051234567" className="block hover:text-[#38BDF8] transition-colors">
                +1 (905) 123-4567
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#38BDF8]/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} King City Attainable Homes. All rights reserved.</p>
          <p>Designed for King City, Ontario · Homes for Everyone</p>
        </div>
      </div>
    </footer>
  );
}
