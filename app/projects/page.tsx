import NatureSVG from '@/components/NatureSVG';
import Link from 'next/link';

const projects = [
  {
    name: 'Greenfield Commons',
    location: 'King City, Ontario',
    type: 'Mixed-Income Residential',
    units: 85,
    status: 'In Development',
    statusColor: 'bg-yellow-500/20 text-yellow-400 border-yellow-400/30',
    desc: 'A ground-up mixed-income community nestled at the edge of King City, designed to blend seamlessly with the surrounding natural landscape. Greenfield Commons features 85 homes for residents across all income levels — with shared green spaces, a community garden, and a nature trail connecting to King Township parkland.',
    highlights: ['85 homes across all income levels', 'Native landscaping & community garden', 'Energy-efficient building envelope', 'Walking distance to King City schools'],
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
  },
  {
    name: 'Maple Ridge Residences',
    location: 'King City, Ontario',
    type: 'Family & Senior Housing',
    units: 112,
    status: 'Planning',
    statusColor: 'bg-blue-500/20 text-blue-400 border-blue-400/30',
    desc: 'Maple Ridge brings together families and seniors in a multigenerational living environment — because community thrives when different generations share space. Thoughtfully designed units, barrier-free access, and on-site programming make this a home for every stage of life.',
    highlights: ['112 units across family and senior needs', 'Multigenerational design', 'Barrier-free accessibility throughout', 'On-site resident programming'],
    img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80',
  },
  {
    name: 'King Township Commons',
    location: 'King City, Ontario',
    type: 'Community Hub & Housing',
    units: 140,
    status: 'Concept',
    statusColor: 'bg-purple-500/20 text-purple-400 border-purple-400/30',
    desc: "Our flagship development imagines a new kind of urban village at the heart of King City — one that combines attainable homes with community gathering space, local retail, and a public square. King Township Commons isn't just a building; it's a place.",
    highlights: ['140 homes integrated with community space', 'Ground-floor community hub & local retail', 'Public plaza and outdoor gathering space', 'Connected to King City GO corridor'],
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
  },
  {
    name: 'Heritage Lane Townhomes',
    location: 'Schomberg, Ontario',
    type: 'Workforce Housing',
    units: 60,
    status: 'Concept',
    statusColor: 'bg-purple-500/20 text-purple-400 border-purple-400/30',
    desc: 'Workforce housing designed for the essential workers — healthcare providers, educators, trades people, farm workers — who are the backbone of King Township but are being priced out of the communities they serve.',
    highlights: ['60 townhomes for working families', 'Designed for essential service workers', 'Community vegetable gardens', 'Proximity to Schomberg amenities'],
    img: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800&q=80',
  },
];

export default function Projects() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=80)',
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
          <p className="text-[#38BDF8] text-[11px] font-semibold uppercase tracking-[0.15em] mb-4">[ Our Work]</p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Projects Built for{' '}
            <span className="gradient-text">King City</span>
          </h1>
          <p className="text-white/70 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
            Every project we undertake in King Township is designed from the ground up to be beautiful, sustainable, and welcoming to everyone — regardless of income.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#0C1F3F]/40 border-y border-[#38BDF8]/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { v: '397+', l: 'Homes Planned' },
              { v: '4', l: 'Projects in Pipeline' },
              { v: '100%', l: 'Mixed-Income Design' },
              { v: 'King Township', l: 'Our Community' },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl font-black gradient-text mb-1">{s.v}</div>
                <div className="text-white/55 text-sm">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects list */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {projects.map((p, i) => (
            <div
              key={p.name}
              className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
            >
              <div className={`relative rounded-2xl overflow-hidden ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071225]/70 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className={`border px-3 py-1 text-[10px] font-semibold tracking-[0.1em] uppercase ${p.statusColor}`}>
                    {p.status}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="bg-[#071225]/80 backdrop-blur-sm border border-[#38BDF8]/20 rounded-lg px-4 py-2">
                    <span className="text-[#38BDF8] font-black text-xl">{p.units}</span>
                    <span className="text-white/60 text-xs ml-1">homes</span>
                  </div>
                </div>
              </div>

              <div className={i % 2 === 1 ? 'lg:col-start-1' : ''}>
                <p className="text-[#38BDF8] text-xs font-semibold uppercase tracking-widest mb-2">{p.location}</p>
                <h2
                  className="text-2xl sm:text-3xl font-bold text-white mb-2"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {p.name}
                </h2>
                <p className="text-white/50 text-sm mb-4">{p.type}</p>
                <p className="text-white/70 text-sm leading-relaxed mb-6">{p.desc}</p>
                <ul className="space-y-2">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-white/60">
                      <span className="text-[#38BDF8] mt-0.5">✓</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#0C1F3F] to-[#071225]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2
            className="text-3xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Have a Site in King Township?
          </h2>
          <p className="text-white/65 mb-8">
            We're actively looking for land and development partnerships that align with our inclusive housing mission.
          </p>
          <Link href="/contact" className="btn-primary">
            Let's Talk
          </Link>
        </div>
      </section>
    </div>
  );
}
