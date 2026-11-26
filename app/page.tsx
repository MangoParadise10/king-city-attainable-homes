'use client';
import Link from 'next/link';
import NatureSVG from '@/components/NatureSVG';
import { useEffect, useRef } from 'react';

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('revealed');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const services = [
  { title: 'PLANNING', sub: 'Community-First Strategy', img: 'https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=600&q=80' },
  { title: 'FINDING', sub: 'Site Selection & Partnerships', img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80' },
  { title: 'CREATING', sub: 'Inclusive Architectural Design', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80' },
  { title: 'FINANCING', sub: 'Public & Private Partnerships', img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80' },
  { title: 'INNOVATING', sub: 'Sustainable Construction', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80' },
  { title: 'BUILDING', sub: 'Project Management & Construction', img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80' },
  { title: 'THRIVING', sub: 'Resident Experience & Wellbeing', img: 'https://images.unsplash.com/photo-1560184611-ff3e53f00e8f?w=600&q=80' },
  { title: 'ENDURING', sub: 'Long-term Community Stewardship', img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80' },
];

const values = [
  { icon: '🌿', title: 'Rooted in Nature', desc: "King City's rolling fields and open skies shape every design decision — homes that breathe alongside the land." },
  { icon: '🤝', title: 'Dignity for All', desc: 'Every home here is designed with pride, beauty, and belonging. No visual difference between attainable and market-rate.' },
  { icon: '🏡', title: 'Mixed-Income by Design', desc: 'Teachers, farmers, seniors, young families, newcomers — our community weaves together the full fabric of King Township life.' },
  { icon: '🌱', title: 'Built to Last', desc: 'We build permanent, quality homes that appreciate in both material value and community character over generations.' },
];

const testimonials = [
  {
    quote: "King Township is at a juncture. The people who make this community great — our teachers, healthcare workers, farm workers — are being priced out. This partnership is exactly what we need to change that.",
    name: 'Jay',
    role: 'Owner, Haven Greens',
    avatar: 'JH',
  },
  {
    quote: "I've watched families leave King City because they simply can't find housing that works for them. King Township Partnership is building the kind of community that keeps people here, together.",
    name: 'Community Member',
    role: 'King City, Ontario',
    avatar: 'KC',
  },
  {
    quote: "What excites me about this initiative is that it's not just housing — it's walkable, transit-connected, and integrated with the services our residents already count on. That's how you build a real community.",
    name: 'Local Advocate',
    role: 'King Township',
    avatar: 'LA',
  },
];

export default function Home() {
  useScrollReveal();

  return (
    <div>
      <style>{`
        .reveal { opacity: 0; transform: translateY(32px); transition: opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1); }
        .reveal.delay-1 { transition-delay: 0.1s; }
        .reveal.delay-2 { transition-delay: 0.2s; }
        .reveal.delay-3 { transition-delay: 0.3s; }
        .reveal.delay-4 { transition-delay: 0.4s; }
        .reveal.revealed { opacity: 1; transform: none; }
      `}</style>

      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1596436889106-be35e843f974?w=1800&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#071225]/90 via-[#0C1F3F]/80 to-[#071225]/70" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <NatureSVG className="w-full h-48 sm:h-64" />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-8">
              <span className="w-1.5 h-1.5 bg-[#38BDF8] animate-pulse" />
              <span className="text-[#38BDF8] text-[11px] font-semibold tracking-[0.15em] uppercase">[ King Township, Ontario · Housing Partnership ]</span>
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              A Place for{' '}
              <span className="gradient-text">Everyone</span>
              {' '}to Call Home
            </h1>
            <p className="text-lg sm:text-xl text-white/75 leading-relaxed mb-10 max-w-2xl">
              King Township Partnership is built on a simple belief: quality housing is not a privilege — it is a foundation. We are creating homes in the heart of King Township where every person, at every stage of life, belongs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/projects" className="btn-primary">Explore Our Projects</Link>
              <Link href="/what-we-do" className="btn-outline">Our Approach</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-gradient-to-r from-[#0C1F3F] to-[#071225] border-y border-[#38BDF8]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '300+', label: 'Homes Planned' },
              { value: '100%', label: 'Inclusive Design' },
              { value: 'King Township', label: 'Ontario, Canada' },
              { value: 'All', label: 'Income Levels Welcome' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold gradient-text mb-1">{s.value}</div>
                <div className="text-white/60 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="reveal text-[#38BDF8] text-[11px] font-semibold uppercase tracking-[0.15em] mb-4">[ Our Story ]</p>
              <h2
                className="reveal delay-1 text-3xl sm:text-4xl font-bold mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Not "Housing." <span className="gradient-text">Home.</span>
              </h2>
              <div className="reveal delay-2 space-y-4 text-white/70 leading-relaxed">
                <p>
                  For too long, the words used to describe housing for working people have carried a weight they should never carry. We are here to retire those associations — permanently.
                </p>
                <p>
                  King Township Partnership exists because we believe the answer to a housing crisis is not just more units — it is better communities. Places where a teacher and a farm worker and a grandmother and a newcomer family all live side by side, sharing green spaces, local schools, and the quiet dignity of a home they are proud of.
                </p>
                <p>
                  In King Township, where farmland meets forest and community still means something, we are building something lasting. Something for everyone.
                </p>
              </div>
              <div className="reveal delay-3 mt-8">
                <Link href="/who-we-are" className="btn-primary">Meet Our Team</Link>
              </div>
            </div>
            <div className="reveal delay-2 relative">
              <div className="rounded-2xl overflow-hidden border border-[#38BDF8]/10 shadow-2xl shadow-[#38BDF8]/5">
                <img
                  src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80"
                  alt="Homes in King Township"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071225]/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-[#071225]/80 backdrop-blur-sm border border-[#38BDF8]/20 rounded-xl p-4">
                    <p className="text-[#38BDF8] text-xs font-semibold uppercase tracking-wider mb-1">Design Philosophy</p>
                    <p className="text-white text-sm font-medium">"Every detail signals to every resident: you belong here."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transit Zone */}
      <section className="py-20 bg-gradient-to-r from-[#0C1F3F]/40 to-[#071225]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="reveal text-[#38BDF8] text-[11px] font-semibold uppercase tracking-[0.15em] mb-4">[ Location &amp; Connectivity ]</p>
              <h2
                className="reveal delay-1 text-3xl sm:text-4xl font-bold mb-6"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                A Community at the <span className="gradient-text">Heart of It All</span>
              </h2>
              <p className="reveal delay-2 text-white/70 leading-relaxed mb-6">
                Our developments sit within King Township's Major Transit Station Area on Keele Street — a walkable, GO Transit-connected corridor close to every amenity residents need. This is not just housing; it's a new town centre built around people, not cars.
              </p>
              <div className="reveal delay-3 grid grid-cols-2 gap-4">
                {[
                  { icon: '🚆', label: 'GO Transit Connected' },
                  { icon: '🚶', label: 'Block Plan Walkable' },
                  { icon: '🌳', label: 'Near Parks & Trails' },
                  { icon: '🏪', label: 'Local Shops & Services' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 bg-[#0C1F3F]/40 border border-[#38BDF8]/10 rounded-xl p-3">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-white/70 text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal delay-2 rounded-2xl overflow-hidden border border-[#38BDF8]/10 h-72">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80"
                alt="King Township community"
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071225]/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do — 8-phase grid */}
      <section className="relative py-24 bg-gradient-to-b from-[#071225] to-[#0C1F3F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <p className="text-[#38BDF8] text-[11px] font-semibold uppercase tracking-[0.15em] mb-4">[ How We Work ]</p>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: 'var(--font-playfair)' }}>
              Eight Phases. One Community.
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {services.map((s, i) => (
              <div key={s.title} className={`reveal delay-${(i % 4) + 1} relative rounded-xl overflow-hidden group card-hover cursor-pointer`}>
                <img src={s.img} alt={s.title} className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071225]/90 via-[#071225]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="text-[#38BDF8] font-black text-xs tracking-widest">{s.title}</div>
                  <div className="text-white/80 text-xs mt-0.5">{s.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <p className="text-[#38BDF8] text-[11px] font-semibold uppercase tracking-[0.15em] mb-4">[ Our Foundation ]</p>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: 'var(--font-playfair)' }}>What We Stand For</h2>
            <div className="mt-4 h-0.5 w-16 bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={v.title} className={`reveal delay-${i + 1} bg-[#0C1F3F]/50 border border-[#38BDF8]/10 rounded-2xl p-6 card-hover`}>
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-b from-[#0C1F3F]/30 to-[#071225]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <p className="text-[#38BDF8] text-[11px] font-semibold uppercase tracking-[0.15em] mb-4">[ Community Voices ]</p>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: 'var(--font-playfair)' }}>
              The People Who Need This to Happen
            </h2>
            <div className="mt-4 h-0.5 w-16 bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={t.name} className={`reveal delay-${i + 1} bg-[#0C1F3F]/40 border border-[#38BDF8]/10 rounded-2xl p-7`}>
                <div className="text-[#38BDF8] text-3xl mb-4 leading-none font-serif">"</div>
                <p className="text-white/80 text-sm leading-relaxed mb-6 italic">{t.quote}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#38BDF8]/10">
                  <div className="w-10 h-10 bg-[#0C1F3F] border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8] font-bold text-xs flex-shrink-0" style={{borderRadius:'2px'}}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-white/50 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-gradient-to-b from-[#0C1F3F] to-[#071225]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
            <div className="reveal">
              <p className="text-[#38BDF8] text-[11px] font-semibold uppercase tracking-[0.15em] mb-3">[ Our Work ]</p>
              <h2 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: 'var(--font-playfair)' }}>Featured Projects</h2>
            </div>
            <Link href="/projects" className="btn-outline text-sm reveal">View All Projects →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Greenfield Commons', type: 'Mixed-Income Residential', units: '85 Units', img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80' },
              { name: 'Maple Ridge Residences', type: 'Family & Senior Housing', units: '112 Units', img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80' },
              { name: 'King Township Commons', type: 'Community Hub & Housing', units: '140 Units', img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80' },
            ].map((p, i) => (
              <div key={p.name} className={`reveal delay-${i + 1} group rounded-2xl overflow-hidden border border-[#38BDF8]/10 card-hover`}>
                <div className="relative overflow-hidden h-56">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071225] to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[#38BDF8] text-[10px] font-semibold tracking-[0.12em] uppercase">[ {p.units} ]</span>
                  </div>
                </div>
                <div className="p-5 bg-[#0C1F3F]/40">
                  <h3 className="font-bold text-lg text-white mb-1">{p.name}</h3>
                  <p className="text-white/60 text-sm">{p.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C1F3F] via-[#071225] to-[#0C1F3F]" />
        <div className="absolute inset-0 z-0 opacity-30">
          <NatureSVG className="w-full h-full" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="reveal text-3xl sm:text-5xl font-bold mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Ready to Be Part of{' '}
            <span className="gradient-text">Something Different?</span>
          </h2>
          <p className="reveal delay-1 text-white/70 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you are a future resident, a community partner, a funder, or someone who believes in what we are building — we would love to hear from you.
          </p>
          <div className="reveal delay-2 flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Get in Touch</Link>
            <Link href="/volunteer" className="btn-outline">Volunteer With Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
