import NatureSVG from '@/components/NatureSVG';
import Link from 'next/link';

const initiatives = [
  {
    name: 'Marylake Augustinian Shrine & Farm',
    type: 'Heritage Farm & Contemplative Grounds',
    location: 'King City, ON',
    desc: "Nestled in the Oak Ridges Moraine, Marylake is a working heritage property operated by the Augustinian Fathers. The sprawling grounds include cultivated fields, forest trails, and a contemplative sanctuary. Marylake represents the spiritual and agricultural soul of King Township — a partnership we are proud to honour in our community vision.",
    link: '#',
    img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80',
    highlight: 'Community Partner',
  },
  {
    name: 'King Local Food Initiative',
    type: 'Community Food System',
    location: 'King Township, ON',
    desc: "King Township has one of the richest agricultural traditions in York Region. The King Local Food Initiative connects residents, farmers, and local food producers to build a resilient, equitable food system — one where everyone in King City can access fresh, locally grown produce regardless of income.",
    link: '#',
    img: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80',
    highlight: 'Food Access',
  },
  {
    name: 'Oak Ridges Moraine Land Trust',
    type: 'Land Conservation & Stewardship',
    location: 'King Township & York Region',
    desc: "The Oak Ridges Moraine — one of Ontario's most ecologically significant landforms — runs through King Township. The Oak Ridges Moraine Land Trust protects natural lands while supporting sustainable agriculture. Our developments are designed to respect and honour the ecological heritage of this extraordinary landscape.",
    link: '#',
    img: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80',
    highlight: 'Conservation',
  },
  {
    name: "King Township Farmers' Markets",
    type: 'Local Agriculture & Trade',
    location: 'King City & Schomberg, ON',
    desc: "King Township's seasonal farmers markets bring the community together around locally grown food, artisan producers, and agricultural heritage. For future King Township Partnership residents, proximity to these markets is not incidental — it is part of a lifestyle rooted in the land.",
    link: '#',
    img: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&q=80',
    highlight: 'Community Hub',
  },
  {
    name: "Humber Nurseries & Garden Centre",
    type: 'Horticulture & Local Business',
    location: 'King Township, ON',
    desc: "One of Ontario's largest garden centres, Humber Nurseries has deep roots in King Township's horticultural economy. Operations like this represent the kind of employment our housing is designed to serve — skilled workers who deserve to live close to where they contribute.",
    link: '#',
    img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
    highlight: 'Local Economy',
  },
  {
    name: 'King Township Agricultural Lands',
    type: 'Protected Farmland',
    location: 'King Township, ON',
    desc: "King Township protects thousands of acres of prime agricultural land through its Official Plan. Our housing model is intentionally designed for the brownfield and infill sites within the settlement boundary — not on farmland. We believe you can house more people AND protect the countryside. We're proving it.",
    link: '#',
    img: 'https://images.unsplash.com/photo-1542601906897-eced191a71f2?w=600&q=80',
    highlight: 'Land Protection',
  },
];

const agriStats = [
  { value: '1,200+', label: 'Acres of Protected Farmland in King Township' },
  { value: '70%', label: 'of King Township is Rural Land or Greenbelt' },
  { value: '100+', label: 'Farms & Agricultural Operations in the Township' },
  { value: 'Infill Only', label: 'Our Developments — No Farmland Converted' },
];

export default function Agriculture() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1800&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#071225]/93 via-[#0C1F3F]/85 to-[#071225]/90" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <NatureSVG className="w-full h-40" />
        </div>
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#38BDF8] text-[11px] font-semibold uppercase tracking-[0.15em] mb-4">[ Land &amp; Heritage]</p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Agriculture &amp; <span className="gradient-text">King Township</span>
          </h1>
          <p className="text-white/70 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
            King Township is defined by its land — its farms, its forests, its moraine, and the generations of people who have worked and lived here. Our housing initiative is not separate from that heritage. It is built to serve it.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#0C1F3F]/40 border-y border-[#38BDF8]/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {agriStats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-black gradient-text mb-1">{s.value}</div>
                <div className="text-white/55 text-xs leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-2xl sm:text-3xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Housing Rooted in the Land
          </h2>
          <p className="text-white/70 leading-relaxed mb-5">
            King Township is not just a convenient place to build homes. It is a community with deep roots in the land — in its farms, its greenhouses, its nurseries, its market gardens. The people who make this agricultural economy work are often the same people who cannot find housing near the jobs they hold.
          </p>
          <p className="text-white/70 leading-relaxed">
            King Township Partnership is designed with farm workers, horticultural professionals, rural trades people, and agricultural families in mind. If you work in King Township's agricultural economy — you deserve to live here. We are building the homes to make that possible.
          </p>
        </div>
      </section>

      {/* Initiatives grid */}
      <section className="py-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#38BDF8] text-[11px] font-semibold uppercase tracking-[0.15em] mb-4">[ Initiatives &amp; Partners]</p>
            <h2
              className="text-3xl font-bold"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Agriculture in King Township
            </h2>
            <div className="mt-4 h-0.5 w-16 bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {initiatives.map((item) => (
              <div
                key={item.name}
                className="bg-[#0C1F3F]/30 border border-[#38BDF8]/10 rounded-2xl overflow-hidden card-hover"
              >
                <div className="relative h-48">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071225]/80 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-[#38BDF8] text-xs px-2.5 py-1 rounded-full font-semibold">
                      {item.highlight}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-[#38BDF8] text-xs uppercase tracking-widest mb-1">{item.type}</p>
                  <h3
                    className="text-white font-bold text-base mb-1"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {item.name}
                  </h3>
                  <p className="text-white/40 text-xs mb-3">📍 {item.location}</p>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA for agri workers */}
      <section className="py-20 bg-gradient-to-r from-[#0C1F3F] to-[#071225]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2
            className="text-3xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Do You Work in King Township's Agricultural Economy?
          </h2>
          <p className="text-white/65 mb-8 leading-relaxed">
            Our homes are for you. If you work at a nursery, a greenhouse, a farm, a food business, or any other agricultural operation in King Township — tell us about yourself. We want to know who needs housing here.
          </p>
          <Link href="/contact" className="btn-primary">Register Your Interest</Link>
        </div>
      </section>
    </div>
  );
}
