import NatureSVG from '@/components/NatureSVG';

const roles = [
  {
    title: 'Community Outreach Volunteer',
    commitment: '4–8 hrs/month',
    area: 'Community',
    desc: 'Help us connect with King City residents — attending community events, distributing information, and listening to what matters most to the people who will call these homes home.',
    skills: ['Comfortable talking with the public', 'Bilingual an asset (French, Farsi, Punjabi)', 'Knowledge of King Township community'],
  },
  {
    title: 'Garden & Grounds Steward',
    commitment: 'Seasonal',
    area: 'Environment',
    desc: "Help maintain the community gardens, native plantings, and green spaces at our King Township sites. King City's natural landscape is a gift — volunteers like you help us honour it.",
    skills: ['Interest in gardening or horticulture', 'Comfortable working outdoors', 'Physical ability to do light gardening'],
  },
  {
    title: 'Events & Programming Volunteer',
    commitment: 'As needed',
    area: 'Events',
    desc: 'Support community events including consultation nights, groundbreaking ceremonies, resident welcome events, and seasonal gatherings that build belonging from day one.',
    skills: ['Event coordination experience an asset', 'Positive, energetic presence', 'Flexible availability for occasional evenings/weekends'],
  },
  {
    title: 'Youth Mentor',
    commitment: '2–4 hrs/week',
    area: 'Community',
    desc: 'Work with young residents and local youth programs to provide mentorship, tutoring, and positive activities. Every strong community invests in its next generation.',
    skills: ['Experience working with youth', 'Background check required', 'Patience and dedication'],
  },
  {
    title: 'Photography & Documentation',
    commitment: 'Project-based',
    area: 'Communications',
    desc: 'Help document the story of King Township Partnership through photography, video, or writing — capturing the human dimension of this initiative for funders, media, and residents.',
    skills: ['Photography or videography skills', 'Storytelling instinct', 'Own equipment an asset'],
  },
  {
    title: 'Professional Skills Volunteer',
    commitment: 'Flexible',
    area: 'Professional',
    desc: 'Offer your professional expertise — legal, financial, architectural, translation, digital, or other skills — to advance this community initiative without a full-time commitment.',
    skills: ['Professional credentials in your field', 'Willingness to contribute pro bono hours', 'Passion for housing and community'],
  },
];

const whyVolunteer = [
  { icon: '🏡', title: 'Real Impact', desc: 'Your time directly helps real families find homes in King City.' },
  { icon: '🌿', title: 'Beautiful Setting', desc: "Work in one of Ontario's most naturally beautiful communities." },
  { icon: '🤝', title: 'Build Community', desc: 'Connect with like-minded residents who care about King Township.' },
  { icon: '📚', title: 'Learn & Grow', desc: 'Gain hands-on experience in housing, design, and community development.' },
  { icon: '🎓', title: 'References & Recognition', desc: 'We recognize and celebrate every volunteer contribution.' },
  { icon: '💚', title: 'Leave a Legacy', desc: 'Be part of something that will shape King Township for generations.' },
];

export default function Volunteer() {
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
          <p className="text-[#38BDF8] text-[11px] font-semibold uppercase tracking-[0.15em] mb-4">[ Get Involved]</p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Volunteer With <span className="gradient-text">King Township Partnership</span>
          </h1>
          <p className="text-white/70 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
            You do not need a job title or a professional credential to help build something meaningful. You just need to care about King City and the people who call it home.
          </p>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="py-24 bg-gradient-to-b from-[#0C1F3F]/20 to-[#071225]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#38BDF8] text-[11px] font-semibold uppercase tracking-[0.15em] mb-4">[ Why Volunteer?]</p>
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Your Time Is a Gift to the Community
            </h2>
            <div className="mt-4 h-0.5 w-16 bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyVolunteer.map((p) => (
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

      {/* Volunteer roles */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#38BDF8] text-[11px] font-semibold uppercase tracking-[0.15em] mb-4">[ Volunteer Opportunities]</p>
            <h2
              className="text-3xl font-bold"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Ways to Contribute
            </h2>
          </div>

          <div className="space-y-4">
            {roles.map((r) => (
              <details
                key={r.title}
                className="group bg-[#0C1F3F]/40 border border-[#38BDF8]/10 rounded-2xl overflow-hidden"
              >
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
                  <div>
                    <h3 className="text-white font-bold text-base">{r.title}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-white/50 text-xs">{r.commitment}</span>
                      <span className="w-1 h-1 rounded-full bg-white/30" />
                      <span className="text-[#38BDF8] text-xs">{r.area}</span>
                    </div>
                  </div>
                  <span className="text-[#38BDF8] text-xl transition-transform group-open:rotate-45 flex-shrink-0 ml-4">+</span>
                </summary>
                <div className="px-6 pb-6 border-t border-[#38BDF8]/10 pt-5">
                  <p className="text-white/70 text-sm leading-relaxed mb-4">{r.desc}</p>
                  <h4 className="text-white/90 font-semibold text-sm mb-3">What you bring:</h4>
                  <ul className="space-y-2 mb-6">
                    {r.skills.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm text-white/60">
                        <span className="text-[#38BDF8] mt-0.5 flex-shrink-0">✓</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                  <a href="/contact" className="btn-primary text-sm">Express Interest</a>
                </div>
              </details>
            ))}
          </div>

          {/* General volunteer */}
          <div className="mt-12 bg-gradient-to-r from-[#0C1F3F] to-[#071225] border border-[#38BDF8]/10 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>
              Have Another Way You Want to Help?
            </h3>
            <p className="text-white/65 text-sm mb-6 max-w-md mx-auto">
              We welcome all forms of community participation. Tell us about yourself and what you care about — we will find the right fit.
            </p>
            <a href="/contact" className="btn-outline text-sm">Get in Touch</a>
          </div>
        </div>
      </section>
    </div>
  );
}
