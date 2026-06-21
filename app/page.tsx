import Link from 'next/link';
import NatureSVG from '@/components/NatureSVG';

const services = [
  {
    title: 'PLANNING',
    sub: 'Community-First Strategy',
    img: 'https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=600&q=80',
  },
  {
    title: 'FINDING',
    sub: 'Site Selection & Partnerships',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',
  },
  {
    title: 'CREATING',
    sub: 'Inclusive Architectural Design',
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80',
  },
  {
    title: 'FINANCING',
    sub: 'Public & Private Partnerships',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
  },
  {
    title: 'INNOVATING',
    sub: 'Sustainable Construction',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
  },
  {
    title: 'BUILDING',
    sub: 'Project Management & Construction',
    img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80',
  },
  {
    title: 'THRIVING',
    sub: 'Resident Experience & Wellbeing',
    img: 'https://images.unsplash.com/photo-1560184611-ff3e53f00e8f?w=600&q=80',
  },
  {
    title: 'ENDURING',
    sub: 'Long-term Community Stewardship',
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80',
  },
];

const stats = [
  { value: '300+', label: 'Units Planned' },
  { value: '100%', label: 'Inclusive Design' },
  { value: 'King City', label: 'Ontario, Canada' },
  { value: 'All', label: 'Income Levels Welcome' },
];

const values = [
  {
    icon: '🌿',
    title: 'Rooted in Nature',
    desc: "King City's rolling fields, forests, and open skies shape every design decision we make — homes that breathe alongside the land.",
  },
  {
    icon: '🤝',
    title: 'Dignity for All',
    desc: "We reject the stigma that has long followed affordable housing. Every home here is designed with pride, beauty, and belonging in mind.",
  },
  {
    icon: '🏡',
    title: 'Mixed-Income by Design',
    desc: 'Teachers, farmers, seniors, young families, newcomers — our community intentionally weaves together the full fabric of King City life.',
  },
  {
    icon: '🌱',
    title: 'Built to Last',
    desc: "These aren't temporary solutions. We build permanent, quality homes that appreciate in both material value and community character.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1596436889106-be35e843f974?w=1800&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#071225]/90 via-[#0C1F3F]/80 to-[#071225]/70" />
        </div>

        {/* Nature silhouette at bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <NatureSVG className="w-full h-48 sm:h-64" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#38BDF8]/10 border border-[#38BDF8]/30 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
              <span className="text-[#38BDF8] text-sm font-medium">King City, Ontario · Attainable Homes Initiative</span>
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
              King City Attainable Homes is built on a simple belief: quality housing is not a privilege — it's a foundation. We're creating a community in the heart of King Township where every person, at every stage of life, finds a home designed with care, beauty, and belonging.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/projects" className="btn-primary">
                Explore Our Projects
              </Link>
              <Link href="/what-we-do" className="btn-outline">
                Our Approach
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-gradient-to-r from-[#0C1F3F] to-[#071225] border-y border-[#38BDF8]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold gradient-text mb-1">{s.value}</div>
                <div className="text-white/60 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1800&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'absolute',
              inset: 0,
              opacity: 0.08,
            }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#38BDF8] text-sm font-semibold uppercase tracking-widest mb-4">Our Story</p>
              <h2
                className="text-3xl sm:text-4xl font-bold mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                We Don't Build "Affordable Housing." <br />
                <span className="gradient-text">We Build Homes.</span>
              </h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  For too long, the words "affordable housing" have carried a weight they should never have to carry. They've been used to separate, to label, to diminish. We're here to retire those associations — permanently.
                </p>
                <p>
                  King City Attainable Homes exists because we believe the answer to a housing crisis isn't just more units — it's better communities. Communities where a teacher and a tech worker and a grandmother and a newcomer family all live side by side, sharing green spaces, local schools, and the quiet dignity of a home they're proud of.
                </p>
                <p>
                  In King Township, where farmland meets forest and community means something, we're building something different. Something lasting. Something for everyone.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/who-we-are" className="btn-primary">
                  Meet Our Team
                </Link>
              </div>
            </div>

            {/* Property image from user */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-[#38BDF8]/10 shadow-2xl shadow-[#38BDF8]/5">
                <img
                  src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80"
                  alt="Attainable homes in King City"
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
              {/* Decorative ring */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border-2 border-[#38BDF8]/20 -z-10" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full border border-[#38BDF8]/10 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do — 8-phase grid */}
      <section className="relative py-24 bg-gradient-to-b from-[#071225] to-[#0C1F3F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: years badge */}
            <div className="hidden lg:flex flex-col justify-center items-start">
              <div
                className="text-[160px] font-black leading-none text-white/5 select-none"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                NEW
              </div>
              <div className="relative -mt-16 ml-8 bg-[#05080F] border border-[#38BDF8]/20 rounded-2xl p-8 max-w-xs">
                <p className="text-[#38BDF8] text-sm font-semibold uppercase tracking-widest mb-3">Our Vision</p>
                <h3
                  className="text-2xl font-bold text-white mb-4 leading-tight"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  Developing Places, Partnerships, and People
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  A fully integrated approach from initial planning through long-term community stewardship — designed for King City, built for everyone.
                </p>
                <div className="mt-6 h-0.5 w-12 bg-gradient-to-r from-[#38BDF8] to-transparent" />
              </div>

              {/* King City nature photo */}
              <div className="mt-8 ml-4 rounded-xl overflow-hidden border border-[#38BDF8]/10 w-64 h-40">
                <img
                  src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&q=80"
                  alt="King City Ontario countryside"
                  className="w-full h-full object-cover opacity-60"
                />
              </div>
            </div>

            {/* Right: service grid */}
            <div className="grid grid-cols-2 gap-3">
              {services.map((s) => (
                <div key={s.title} className="relative rounded-xl overflow-hidden group card-hover cursor-pointer">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071225]/90 via-[#071225]/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="text-[#38BDF8] font-black text-sm tracking-widest">{s.title}</div>
                    <div className="text-white/80 text-xs mt-0.5">{s.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1800&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'absolute',
              inset: 0,
              opacity: 0.05,
            }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#38BDF8] text-sm font-semibold uppercase tracking-widest mb-4">Our Foundation</p>
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              What We Stand For
            </h2>
            <div className="mt-4 h-0.5 w-16 bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-[#0C1F3F]/50 border border-[#38BDF8]/10 rounded-2xl p-6 card-hover"
              >
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured project preview */}
      <section className="py-24 bg-gradient-to-b from-[#0C1F3F] to-[#071225]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
            <div>
              <p className="text-[#38BDF8] text-sm font-semibold uppercase tracking-widest mb-3">Our Work</p>
              <h2
                className="text-3xl sm:text-4xl font-bold"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Featured Projects
              </h2>
            </div>
            <Link href="/projects" className="btn-outline text-sm">
              View All Projects →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Greenfield Commons',
                type: 'Mixed-Income Residential',
                units: '85 Units',
                img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80',
              },
              {
                name: 'Maple Ridge Residences',
                type: 'Family & Senior Housing',
                units: '112 Units',
                img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80',
              },
              {
                name: 'King Township Commons',
                type: 'Community Hub & Housing',
                units: '140 Units',
                img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',
              },
            ].map((p) => (
              <div key={p.name} className="group rounded-2xl overflow-hidden border border-[#38BDF8]/10 card-hover">
                <div className="relative overflow-hidden h-56">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071225] to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-[#38BDF8]/20 border border-[#38BDF8]/30 text-[#38BDF8] text-xs px-3 py-1 rounded-full">
                      {p.units}
                    </span>
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
        <div className="absolute inset-0 z-0">
          <NatureSVG className="w-full h-full opacity-30" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl sm:text-5xl font-bold mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Ready to Be Part of{' '}
            <span className="gradient-text">Something Different?</span>
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you're a future resident, a community partner, or someone who believes in what we're building — we'd love to hear from you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get in Touch
            </Link>
            <Link href="/careers" className="btn-outline">
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
