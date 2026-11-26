import NatureSVG from '@/components/NatureSVG';
import Link from 'next/link';

const team = [
  {
    name: 'Executive Leadership',
    members: [
      { name: 'Executive Director', role: 'Vision & Strategy', initials: 'ED' },
      { name: 'Director of Development', role: 'Housing Development', initials: 'DD' },
      { name: 'CFO', role: 'Finance & Partnerships', initials: 'CF' },
      { name: 'Director of Community', role: 'Resident Services', initials: 'DC' },
    ],
  },
  {
    name: 'Development & Planning',
    members: [
      { name: 'Senior Development Lead', role: 'Project Entitlements', initials: 'SL' },
      { name: 'Land Acquisition Lead', role: 'Site Strategy', initials: 'LA' },
      { name: 'Municipal Relations Lead', role: 'Government Affairs', initials: 'MR' },
    ],
  },
  {
    name: 'Architecture & Design',
    members: [
      { name: 'Principal Architect', role: 'Design Leadership', initials: 'PA' },
      { name: 'Senior Designer', role: 'Community Spaces', initials: 'SD' },
      { name: 'Sustainability Lead', role: 'Green Building', initials: 'SU' },
    ],
  },
  {
    name: 'Community & Resident Services',
    members: [
      { name: 'Community Programs Manager', role: 'Resident Wellbeing', initials: 'CP' },
      { name: 'Resident Liaison', role: 'Tenant Support', initials: 'RL' },
      { name: 'Partnerships Coordinator', role: 'Community Organizations', initials: 'PC' },
    ],
  },
];

const timeline = [
  { year: '2022', event: 'King Township Partnership concept developed following King Township housing needs assessment' },
  { year: '2023', event: 'Founding partnership established with Township of King and York Region' },
  { year: '2024', event: 'Land acquisition phase begins; first community consultations held across King City' },
  { year: '2025', event: 'Architectural design and financing structures finalized for Phase 1 development' },
  { year: '2026', event: 'Groundbreaking and first shovel in the ground â€” Greenfield Commons begins construction' },
];

export default function WhoWeAre() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1560184611-ff3e53f00e8f?w=1800&q=80)',
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
          <p className="text-[#38BDF8] text-sm font-semibold uppercase tracking-widest mb-4">Our People</p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Who We Are
          </h1>
          <p className="text-white/70 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
            We are planners, architects, builders, community organizers, financial innovators, and neighbours â€” united by the belief that everyone in King Township deserves a home they are proud of.
          </p>
        </div>
      </section>

      {/* Mission + Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#38BDF8] text-sm font-semibold uppercase tracking-widest mb-4">Our Promise</p>
              <h2
                className="text-3xl sm:text-4xl font-bold mb-6"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Quality. Inclusivity. <span className="gradient-text">Certainty.</span>
              </h2>
              <div className="space-y-5 text-white/70 leading-relaxed">
                <p>
                  King Township Partnership was born out of a recognition that the housing crisis is not an abstract policy problem â€” it is the teacher who cannot afford to live near the school they work in, the senior who raised their children here and now faces displacement, the young couple priced out of the community they grew up in.
                </p>
                <p>
                  We exist to change that. Not by building lesser homes in forgotten corners of the township, but by developing genuinely beautiful, well-located communities that integrate people at different income levels without hierarchy or stigma.
                </p>
                <p>
                  Our guiding philosophy: housing that is attainable should be indistinguishable â€” in design, in quality, in community feel â€” from housing that is not.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { value: '0', label: 'Defaults or Foreclosures' },
                  { value: '100%', label: 'Design Integrity' },
                  { value: 'âˆž', label: 'Community Commitment' },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-2xl font-black gradient-text">{s.value}</div>
                    <div className="text-white/50 text-xs mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-[#38BDF8]/10">
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80"
                  alt="King City community"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071225]/50 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#0C1F3F] border border-[#38BDF8]/20 rounded-2xl p-5 w-52">
                <div className="text-4xl font-black gradient-text">2024</div>
                <div className="text-white/70 text-sm mt-1">Year Founded</div>
                <div className="mt-2 text-xs text-white/50">King City, Ontario</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-gradient-to-b from-[#0C1F3F]/30 to-[#071225]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#38BDF8] text-sm font-semibold uppercase tracking-widest mb-4">The Team</p>
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              The People Behind the Mission
            </h2>
            <div className="mt-4 h-0.5 w-16 bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent mx-auto" />
          </div>

          {team.map((dept) => (
            <div key={dept.name} className="mb-12">
              <h3 className="text-[#38BDF8] font-semibold text-sm uppercase tracking-widest mb-6 pl-2 border-l-2 border-[#38BDF8]">
                {dept.name}
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {dept.members.map((m) => (
                  <div
                    key={m.name}
                    className="bg-[#0C1F3F]/40 border border-[#38BDF8]/10 rounded-xl p-5 flex items-center gap-4 card-hover"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#38BDF8]/20 to-[#0C1F3F] border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8] font-bold text-sm flex-shrink-0">
                      {m.initials}
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">{m.name}</div>
                      <div className="text-white/50 text-xs mt-0.5">{m.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#38BDF8] text-sm font-semibold uppercase tracking-widest mb-4">Our Journey</p>
            <h2
              className="text-3xl font-bold"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              How We Got Here
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#38BDF8]/50 to-transparent" />
            <div className="space-y-8">
              {timeline.map((t, i) => (
                <div key={t.year} className="flex gap-6 items-start">
                  <div className="w-16 flex-shrink-0 text-right">
                    <span className="text-[#38BDF8] font-black text-lg">{t.year}</span>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-[#38BDF8] border-4 border-[#071225] flex-shrink-0 mt-1 relative z-10" />
                  <div className="bg-[#0C1F3F]/40 border border-[#38BDF8]/10 rounded-xl p-4 flex-1">
                    <p className="text-white/70 text-sm leading-relaxed">{t.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#0C1F3F] to-[#071225]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2
            className="text-3xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Join the Team Building Something That Matters
          </h2>
          <p className="text-white/65 mb-8">
            We're growing. If you believe in homes for everyone, we'd love to meet you.
          </p>
          <Link href="/careers" className="btn-primary">
            See Open Roles
          </Link>
        </div>
      </section>
    </div>
  );
}

