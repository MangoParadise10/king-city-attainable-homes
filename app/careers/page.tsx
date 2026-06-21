import NatureSVG from '@/components/NatureSVG';

const jobs = [
  {
    title: 'Community Engagement Coordinator',
    type: 'Full-time',
    location: 'King City, ON',
    dept: 'Community',
    desc: 'Lead resident consultation, community events, and partnership outreach to ensure our developments are shaped by the people they serve. You are a connector, a listener, and a relationship builder.',
    req: [
      'Experience in community development, social work, or public engagement',
      'Strong bilingual communication skills (English + French or other languages an asset)',
      'Ability to facilitate community meetings and manage stakeholder relationships',
      'Knowledge of King Township and/or York Region community landscape',
    ],
  },
  {
    title: 'Development Associate',
    type: 'Full-time',
    location: 'King City, ON',
    dept: 'Development',
    desc: "Support land acquisition, zoning, entitlements, and financing processes for King City's attainable housing pipeline. You'll work across municipal, provincial, and private stakeholders.",
    req: [
      'Bachelor\'s degree in Urban Planning, Real Estate, or related field',
      '2–4 years experience in real estate development or land use planning',
      'Familiarity with Ontario planning legislation and housing programs (CMHC, Ontario Housing)',
      'Strong analytical and project management skills',
    ],
  },
  {
    title: 'Project Manager — Construction',
    type: 'Full-time',
    location: 'King City, ON',
    dept: 'Construction',
    desc: 'Oversee the delivery of attainable housing projects from shovels in the ground to ribbon cutting — managing budgets, schedules, subcontractors, and quality standards with equal care.',
    req: [
      'Bachelor\'s degree in Construction Management or Engineering',
      '5+ years of residential or multifamily construction project management',
      'Experience with ICI (Institutional, Commercial, Industrial) or multi-residential construction preferred',
      'PMP designation an asset',
    ],
  },
  {
    title: 'Resident Services Navigator',
    type: 'Full-time',
    location: 'King City, ON',
    dept: 'Community',
    desc: 'Be the first point of contact for residents in our buildings — helping them access community programs, resolve concerns, connect to local services, and feel genuinely at home.',
    req: [
      'Background in social services, property management, or community support',
      'Empathy-first communication style',
      'Experience navigating housing, municipal, or social services systems',
      'Availability for occasional evenings and weekends for community events',
    ],
  },
  {
    title: 'Sustainability & Green Building Specialist',
    type: 'Full-time',
    location: 'King City, ON',
    dept: 'Architecture & Design',
    desc: "Champion sustainable building practices across our portfolio — from energy modelling to materials selection to post-occupancy monitoring. King City's natural environment is a gift; it's your job to make sure our buildings honour it.",
    req: [
      'Degree in Environmental Studies, Engineering, or Architecture',
      'LEED, PassiveHouse, or equivalent accreditation',
      'Experience with Ontario Building Code energy compliance',
      'Knowledge of sustainable materials and low-carbon construction methods',
    ],
  },
  {
    title: 'Finance & Grants Manager',
    type: 'Full-time',
    location: 'King City, ON (Hybrid)',
    dept: 'Finance',
    desc: 'Structure and manage the complex multi-source financing that makes attainable homes financially viable — from CMHC programs and provincial grants to private equity and municipal contributions.',
    req: [
      'CPA or equivalent financial designation',
      '4+ years in real estate finance, non-profit finance, or housing development',
      'Experience with government grant programs and housing finance instruments',
      'Strong Excel modelling and financial reporting skills',
    ],
  },
];

const perks = [
  { icon: '🌿', title: 'Mission-Driven Work', desc: 'Every day, your work directly helps real people find homes in King City.' },
  { icon: '💼', title: 'Competitive Compensation', desc: 'Market salaries with performance bonuses tied to community outcomes, not just financials.' },
  { icon: '🏥', title: 'Full Benefits', desc: 'Comprehensive health, dental, and vision coverage from day one.' },
  { icon: '🎓', title: 'Learning & Development', desc: 'Annual professional development budget and access to industry conferences.' },
  { icon: '🌱', title: 'Flexible Work', desc: 'Hybrid arrangements where the role allows, with a modern King City office space.' },
  { icon: '🤝', title: 'Inclusive Culture', desc: 'We build inclusive communities. Our team reflects the same values.' },
];

export default function Careers() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1800&q=80)',
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
          <p className="text-[#38BDF8] text-sm font-semibold uppercase tracking-widest mb-4">Join Us</p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Build a Career That <span className="gradient-text">Builds Community</span>
          </h1>
          <p className="text-white/70 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
            At King City Attainable Homes, the work you do doesn't just show up in a spreadsheet — it shows up in someone's kitchen, someone's child's bedroom, someone's first night in a place they can finally call their own.
          </p>
        </div>
      </section>

      {/* Why work with us */}
      <section className="py-24 bg-gradient-to-b from-[#0C1F3F]/20 to-[#071225]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#38BDF8] text-sm font-semibold uppercase tracking-widest mb-4">Why King City Attainable Homes?</p>
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              A National Top Developer in One of Ontario's Most Unique Communities
            </h2>
            <div className="mt-4 h-0.5 w-16 bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((p) => (
              <div
                key={p.title}
                className="bg-[#0C1F3F]/40 border border-[#38BDF8]/10 rounded-2xl p-6 card-hover"
              >
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="text-white font-bold mb-2">{p.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job listings */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#38BDF8] text-sm font-semibold uppercase tracking-widest mb-4">Open Roles</p>
            <h2
              className="text-3xl font-bold"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Current Openings — King City, Ontario
            </h2>
          </div>

          <div className="space-y-4">
            {jobs.map((j) => (
              <details
                key={j.title}
                className="group bg-[#0C1F3F]/40 border border-[#38BDF8]/10 rounded-2xl overflow-hidden"
              >
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
                  <div className="flex items-center gap-4">
                    <div>
                      <h3 className="text-white font-bold text-base">{j.title}</h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-white/50 text-xs">{j.location}</span>
                        <span className="w-1 h-1 rounded-full bg-white/30" />
                        <span className="text-white/50 text-xs">{j.type}</span>
                        <span className="w-1 h-1 rounded-full bg-white/30" />
                        <span className="text-[#38BDF8] text-xs">{j.dept}</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-[#38BDF8] text-xl transition-transform group-open:rotate-45 flex-shrink-0 ml-4">+</span>
                </summary>
                <div className="px-6 pb-6 border-t border-[#38BDF8]/10 pt-5">
                  <p className="text-white/70 text-sm leading-relaxed mb-4">{j.desc}</p>
                  <h4 className="text-white/90 font-semibold text-sm mb-3">Requirements:</h4>
                  <ul className="space-y-2 mb-6">
                    {j.req.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-white/60">
                        <span className="text-[#38BDF8] mt-0.5 flex-shrink-0">✓</span>
                        {r}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className="btn-primary text-sm"
                  >
                    Apply for this Role
                  </a>
                </div>
              </details>
            ))}
          </div>

          {/* General application */}
          <div className="mt-12 bg-gradient-to-r from-[#0C1F3F] to-[#071225] border border-[#38BDF8]/10 rounded-2xl p-8 text-center">
            <h3
              className="text-xl font-bold mb-3"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Don't See Your Role Listed?
            </h3>
            <p className="text-white/65 text-sm mb-6 max-w-md mx-auto">
              We're always interested in hearing from talented people who share our values. Send us your resume and tell us how you want to contribute.
            </p>
            <a href="/contact" className="btn-outline text-sm">
              Send a General Application
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
