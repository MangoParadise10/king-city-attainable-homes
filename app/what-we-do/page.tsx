import Link from 'next/link';
import NatureSVG from '@/components/NatureSVG';

const phases = [
  {
    number: '01',
    title: 'Planning',
    subtitle: 'Community-First Strategy',
    desc: 'Every project begins with deep listening. We engage with residents, local government, and community organizations in King Township to understand what this land and its people truly need — before a single line is drawn.',
    icon: '🗺️',
  },
  {
    number: '02',
    title: 'Finding',
    subtitle: 'Site Selection & Relationship Building',
    desc: "We identify sites in King City that connect people to nature, transit, schools, and each other. We build relationships with landowners, municipal partners, and Indigenous communities as we determine where attainable homes can best serve the area's growth.",
    icon: '📍',
  },
  {
    number: '03',
    title: 'Creating',
    subtitle: 'Inclusive Architectural Design',
    desc: "Our design philosophy is rooted in dignity. We work with architects who understand that the look, feel, and functionality of a home signals its residents' worth. Every building is designed to feel welcoming, not institutional.",
    icon: '✏️',
  },
  {
    number: '04',
    title: 'Financing',
    subtitle: 'Public-Private Partnerships',
    desc: 'Attainable housing requires creative financial structures. We work with municipal and provincial governments, non-profits, and private capital to assemble financing that allows us to deliver quality homes at attainable price points.',
    icon: '🤝',
  },
  {
    number: '05',
    title: 'Innovating',
    subtitle: 'Smart, Sustainable Construction',
    desc: "King City's natural environment is a gift we intend to protect. We employ sustainable building practices, energy-efficient systems, and responsible material sourcing — building homes that are good for the planet and keep operating costs low for residents.",
    icon: '💡',
  },
  {
    number: '06',
    title: 'Building',
    subtitle: 'Project Management & Construction',
    desc: 'Our construction process is held to the same standard as any premium development. We refuse to let "attainable" become a code word for "lesser." Every unit is built to last, with the craftsmanship and quality materials that every resident deserves.',
    icon: '🏗️',
  },
  {
    number: '07',
    title: 'Thriving',
    subtitle: 'Resident Experience & Wellbeing',
    desc: 'Moving in is just the beginning. We invest in programming, green spaces, and resident services that help communities flourish. Our Resident Stewardship Program supports residents in building financial resilience, community ties, and a sense of pride in their home.',
    icon: '🌱',
  },
  {
    number: '08',
    title: 'Enduring',
    subtitle: 'Long-term Community Stewardship',
    desc: 'We are long-term partners, not short-term developers. We maintain our properties, evolve our programs, and remain invested in the wellbeing of King City Attainable Homes communities for decades to come.',
    icon: '♾️',
  },
];

const divisions = [
  {
    name: 'King City Development',
    founded: 'Est. 2024',
    desc: 'The lead development entity overseeing all attainable housing initiatives in King Township — from land acquisition through financing and entitlements.',
  },
  {
    name: 'King City Build',
    founded: 'Construction',
    desc: 'Our construction arm that brings the same quality and attention to detail to every attainable home as any premium residential development in the GTA.',
  },
  {
    name: 'Community Living Partners',
    founded: 'Resident Services',
    desc: 'The team dedicated to the lived experience of residents — programming, community events, financial literacy, and long-term wellbeing support.',
  },
  {
    name: 'Green Build Studio',
    founded: 'Architecture & Design',
    desc: 'In-house design capability that ensures every home in King City is beautiful, functional, and purpose-built for the community it serves.',
  },
];

export default function WhatWeDo() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1800&q=80)',
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
          <p className="text-[#38BDF8] text-sm font-semibold uppercase tracking-widest mb-4">Our Approach</p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Solving Housing Needs,{' '}
            <span className="gradient-text">Strengthening Communities</span>
          </h1>
          <p className="text-white/70 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
            We are a fully integrated housing enterprise operating across every phase of a home's life — from a blank field in King Township to a vibrant, thriving community decades later.
          </p>
        </div>
      </section>

      {/* Testimonial pull quote */}
      <section className="bg-[#0C1F3F]/40 border-y border-[#38BDF8]/10 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl text-[#38BDF8]/30 font-serif mb-4">&ldquo;</div>
          <p className="text-xl sm:text-2xl text-white/80 italic leading-relaxed">
            The measure of attainable housing isn't just whether people can afford it — it's whether they're proud to live there. That's the bar we set ourselves.
          </p>
          <p className="mt-4 text-[#38BDF8] font-semibold text-sm">— King City Attainable Homes, Project Charter</p>
        </div>
      </section>

      {/* 8-phase process */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#38BDF8] text-sm font-semibold uppercase tracking-widest mb-4">Our Process</p>
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Eight Phases. One Community.
            </h2>
            <div className="mt-4 h-0.5 w-16 bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {phases.map((p) => (
              <div
                key={p.number}
                className="bg-[#0C1F3F]/40 border border-[#38BDF8]/10 rounded-2xl p-6 flex gap-5 card-hover"
              >
                <div className="flex-shrink-0">
                  <div className="text-3xl mb-1">{p.icon}</div>
                  <div className="text-[#38BDF8]/40 font-black text-xs">{p.number}</div>
                </div>
                <div>
                  <h3 className="text-[#38BDF8] font-black text-sm tracking-widest uppercase">{p.title}</h3>
                  <h4 className="text-white font-semibold text-base mt-0.5 mb-2">{p.subtitle}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Divisions */}
      <section className="py-24 bg-gradient-to-b from-[#0C1F3F]/30 to-[#071225]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#38BDF8] text-sm font-semibold uppercase tracking-widest mb-4">Our Divisions</p>
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              One Organization, Complete Capability
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {divisions.map((d) => (
              <div
                key={d.name}
                className="bg-[#05080F] border border-[#38BDF8]/10 rounded-2xl p-6 card-hover"
              >
                <div className="inline-block bg-[#38BDF8]/10 rounded-full px-3 py-1 text-[#38BDF8] text-xs font-semibold mb-4">
                  {d.founded}
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{d.name}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners section */}
      <section className="py-20 border-t border-[#38BDF8]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#38BDF8] text-sm font-semibold uppercase tracking-widest mb-8">Our Partners</p>
          <p className="text-white/60 text-sm max-w-xl mx-auto mb-12">
            We work with municipal governments, provincial agencies, community land trusts, non-profit organizations, and responsible private partners who share our commitment to inclusive, dignified housing.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              'Township of King', 'York Region', 'Province of Ontario',
              'CMHC', 'United Way', 'Community Land Trust',
              'Ontario Non-Profit Housing Association', 'Canadian Home Builders',
            ].map((p) => (
              <div
                key={p}
                className="bg-[#0C1F3F]/40 border border-[#38BDF8]/10 rounded-lg px-5 py-3 text-white/60 text-sm"
              >
                {p}
              </div>
            ))}
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
            Want to Partner With Us?
          </h2>
          <p className="text-white/65 mb-8">
            We're always looking for landowners, funders, municipalities, and non-profits who share our vision of a more inclusive King City.
          </p>
          <Link href="/contact" className="btn-primary">
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
