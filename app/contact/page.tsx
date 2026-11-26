import NatureSVG from '@/components/NatureSVG';

export default function Contact() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1800&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#071225]/95 via-[#0C1F3F]/85 to-[#071225]/90" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <NatureSVG className="w-full h-40" />
        </div>
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#38BDF8] text-[11px] font-semibold uppercase tracking-[0.15em] mb-4">[ Get in Touch]</p>
          <h1
            className="text-4xl sm:text-5xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Let's Build Something <span className="gradient-text">Together</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Whether you're a future resident, a community partner, a potential funder, or simply curious about what we're doing — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left: info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  King Township Partnership
                </h2>
                <p className="text-white/65 text-sm leading-relaxed">
                  Thanks for your interest in King Township Partnership. Whether you're developing a project, seeking a home, or looking to partner with us — we're always eager to connect.
                </p>
              </div>

              {[
                {
                  label: 'Location',
                  icon: '📍',
                  value: 'King City, Ontario, Canada',
                  sub: 'Township of King',
                },
                {
                  label: 'Email',
                  icon: '✉️',
                  value: 'info@kinghousingpartnership.ca',
                  sub: 'We respond within 2 business days',
                },
                {
                  label: 'Website',
                  icon: '🌐',
                  value: 'kinghousingpartnership.ca',
                  sub: 'King Township Partnership',
                },
              ].map((c) => (
                <div key={c.label} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-[#38BDF8]/10 border border-[#38BDF8]/20 flex items-center justify-center text-lg flex-shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-[#38BDF8] text-xs font-semibold uppercase tracking-wider">{c.label}</p>
                    <p className="text-white font-medium text-sm mt-0.5">{c.value}</p>
                    <p className="text-white/45 text-xs mt-0.5">{c.sub}</p>
                  </div>
                </div>
              ))}

              {/* Quick links */}
              <div className="pt-4 border-t border-[#38BDF8]/10">
                <p className="text-white/60 text-xs uppercase tracking-wider mb-4">Quick Links</p>
                <div className="space-y-2">
                  {[
                    { label: 'Interested in a Home?', href: '/projects' },
                    { label: 'Want to Partner?', href: '/what-we-do' },
                    { label: 'Join Our Team', href: '/careers' },
                  ].map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      className="flex items-center justify-between px-4 py-3 bg-[#0C1F3F]/40 border border-[#38BDF8]/10 rounded-xl text-sm text-white/70 hover:text-[#38BDF8] hover:border-[#38BDF8]/30 transition-all"
                    >
                      {l.label}
                      <span>→</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3">
              <div className="bg-[#0C1F3F]/40 border border-[#38BDF8]/10 rounded-2xl p-8">
                <h3
                  className="text-xl font-bold mb-6"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  Send Us a Message
                </h3>
                <form className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-white/70 text-sm mb-2">Full Name</label>
                      <input
                        type="text"
                        placeholder="Your name"
                        className="w-full bg-[#071225] border border-[#38BDF8]/20 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#38BDF8]/60 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-white/70 text-sm mb-2">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="(905) 000-0000"
                        className="w-full bg-[#071225] border border-[#38BDF8]/20 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#38BDF8]/60 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="w-full bg-[#071225] border border-[#38BDF8]/20 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#38BDF8]/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm mb-2">I am reaching out as a…</label>
                    <select className="w-full bg-[#071225] border border-[#38BDF8]/20 rounded-xl px-4 py-3 text-white/70 text-sm focus:outline-none focus:border-[#38BDF8]/60 transition-colors">
                      <option value="">Select one</option>
                      <option>Prospective Resident</option>
                      <option>Municipal/Government Partner</option>
                      <option>Non-profit Organization</option>
                      <option>Private Developer / Landowner</option>
                      <option>Funder / Investor</option>
                      <option>Media</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm mb-2">Subject</label>
                    <input
                      type="text"
                      placeholder="What's on your mind?"
                      className="w-full bg-[#071225] border border-[#38BDF8]/20 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#38BDF8]/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm mb-2">Message</label>
                    <textarea
                      rows={5}
                      placeholder="Tell us more about your inquiry…"
                      className="w-full bg-[#071225] border border-[#38BDF8]/20 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#38BDF8]/60 transition-colors resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full text-center">
                    Send Message
                  </button>
                  <p className="text-white/40 text-xs text-center">
                    We typically respond within 2 business days.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden border border-[#38BDF8]/10 h-64 relative">
            <img
              src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1400&q=80"
              alt="King City Ontario landscape"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-[#071225]/80 backdrop-blur-sm border border-[#38BDF8]/20 rounded-xl px-6 py-4 text-center">
                <p className="text-[#38BDF8] font-bold">King City, Ontario</p>
                <p className="text-white/60 text-sm">Township of King · York Region · Canada</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

