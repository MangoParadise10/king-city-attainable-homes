import NatureSVG from '@/components/NatureSVG';

const articles = [
  {
    date: 'May 15, 2026',
    category: 'Announcement',
    title: 'King Township Partnership Breaks Ground on Greenfield Commons',
    excerpt:
      'The Township of King, York Region, and King Township Partnership celebrated the official groundbreaking of Greenfield Commons â€” 85 mixed-income homes that will welcome residents from across the income spectrum without distinction.',
    img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80',
  },
  {
    date: 'March 3, 2026',
    category: 'Community',
    title: "We Asked. King City Answered. Here's What We Heard.",
    excerpt:
      "Over three months, we held community consultations with over 400 King City residents. The message was consistent: people want homes that are beautiful, communities that are safe, and neighbourhoods where they're not separated by income. That's exactly what we're building.",
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80',
  },
  {
    date: 'January 20, 2026',
    category: 'Design',
    title: 'Why We Refused to Design "Affordable-Looking" Homes',
    excerpt:
      'Our architectural team shares the design philosophy behind King Township Partnership â€” and why it starts with a non-negotiable principle: there should be no visual difference between an attainable home and a market-rate one.',
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80',
  },
  {
    date: 'November 8, 2025',
    category: 'Partnership',
    title: 'Province of Ontario Supports King Township Partnership with $12M Funding',
    excerpt:
      "Ontario's commitment to addressing the housing crisis includes major support for initiatives that go beyond subsidy â€” creating lasting mixed-income communities. King Township Partnership is proud to be among the first projects to receive this new generation of housing support.",
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
  },
  {
    date: 'September 22, 2025',
    category: 'Research',
    title: 'New Report: Mixed-Income Housing in Rural Ontario Creates Stronger Communities',
    excerpt:
      'A new study from the University of Waterloo examines the impact of mixed-income housing developments in rural Ontario communities. The findings strongly support the King Township Partnership approach â€” and give us confidence we\'re on the right track.',
    img: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80',
  },
  {
    date: 'July 5, 2025',
    category: 'Team',
    title: 'Introducing Our Community Stewardship Program',
    excerpt:
      'Long after the ribbon cutting, our work continues. The King Township Partnership Community Stewardship Program supports residents with financial literacy, community programming, and pathways to homeownership â€” because a home is only the beginning.',
    img: 'https://images.unsplash.com/photo-1560184611-ff3e53f00e8f?w=600&q=80',
  },
  {
    date: 'April 14, 2025',
    category: 'Announcement',
    title: 'King Township Partnership Named to Ontario Housing Innovation Shortlist',
    excerpt:
      "The Province of Ontario's Housing Supply Challenge recognized King Township Partnership as one of the most promising models for attainable, inclusive housing development in rural communities. We're humbled â€” and motivated.",
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',
  },
  {
    date: 'February 1, 2025',
    category: 'Community',
    title: 'What "Attainable" Actually Means â€” A Letter from Our Founders',
    excerpt:
      '"Attainable" is not a euphemism. It is not a compromise. It is a statement of intent: that quality housing should be within reach for everyone in King City â€” the teacher, the farmer, the newcomer, the senior, the young family just starting out.',
    img: 'https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=600&q=80',
  },
];

const categories = ['All', 'Announcement', 'Community', 'Design', 'Partnership', 'Research', 'Team'];

export default function News() {
  const [featured, ...rest] = articles;

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1800&q=80)',
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
          <p className="text-[#38BDF8] text-sm font-semibold uppercase tracking-widest mb-4">Latest</p>
          <h1
            className="text-4xl sm:text-5xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            News & Stories
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Updates from King Township Partnership â€” announcements, community stories, design thinking, and the ongoing work of building something better.
          </p>
        </div>
      </section>

      {/* Featured article */}
      <section className="py-16 bg-gradient-to-b from-[#0C1F3F]/20 to-[#071225]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#38BDF8] text-sm font-semibold uppercase tracking-widest mb-6">Featured Story</p>
          <div className="grid lg:grid-cols-2 gap-10 items-center bg-[#0C1F3F]/30 border border-[#38BDF8]/10 rounded-2xl overflow-hidden">
            <img
              src={featured.img}
              alt={featured.title}
              className="w-full h-72 lg:h-96 object-cover"
            />
            <div className="p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-[#38BDF8] text-xs px-3 py-1 rounded-full font-semibold">
                  {featured.category}
                </span>
                <span className="text-white/40 text-xs">{featured.date}</span>
              </div>
              <h2
                className="text-2xl sm:text-3xl font-bold text-white mb-4"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                {featured.title}
              </h2>
              <p className="text-white/65 leading-relaxed mb-6">{featured.excerpt}</p>
              <button className="btn-primary text-sm">Read Full Story</button>
            </div>
          </div>
        </div>
      </section>

      {/* Category filters */}
      <section className="py-8 border-b border-[#38BDF8]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  c === 'All'
                    ? 'bg-[#38BDF8] text-[#071225]'
                    : 'border border-[#38BDF8]/20 text-white/60 hover:border-[#38BDF8]/50 hover:text-white'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((a) => (
              <article
                key={a.title}
                className="bg-[#0C1F3F]/30 border border-[#38BDF8]/10 rounded-2xl overflow-hidden card-hover cursor-pointer"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={a.img}
                    alt={a.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071225]/60 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-[#38BDF8] text-xs px-2.5 py-1 rounded-full font-semibold">
                      {a.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-white/40 text-xs mb-2">{a.date}</p>
                  <h3
                    className="text-white font-bold text-base mb-3 leading-snug"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {a.title}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed line-clamp-3">{a.excerpt}</p>
                  <button className="mt-4 text-[#38BDF8] text-sm font-semibold hover:underline">
                    Read more â†’
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

