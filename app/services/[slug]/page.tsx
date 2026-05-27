import Link from 'next/link';
import { ArrowLeft, CheckCircle, ArrowRight, ChevronRight } from 'lucide-react';
import { getServiceData } from '@/data/serviceData';

type ParamsType = Promise<{ slug: string }>;

export default async function ServiceDetailPage(props: { params: ParamsType }) {
  const { slug } = await props.params;
  const service = getServiceData(slug);

  // Derive brand color from service accent — map to green or blue
  const isGreen = service.accentColor?.includes('6644') || service.accentColor?.includes('green');
  const accent       = isGreen ? '#1a6644' : '#3489AE';
  const accentMid    = isGreen ? '#1a5535' : '#2a6f91';
  const accentLight  = isGreen ? '#edf5f0' : '#e8f4f9';
  const accentBorder = isGreen ? 'border-[#1a6644]/20' : 'border-[#3489AE]/20';
  const accentBg     = isGreen ? 'bg-[#1a6644]/5'     : 'bg-[#3489AE]/5';
  const accentText   = isGreen ? 'text-[#1a6644]'     : 'text-[#3489AE]';
  const accentBtn    = isGreen ? 'bg-[#1a6644] hover:bg-[#1a5535]' : 'bg-[#3489AE] hover:bg-[#2a6f91]';
  const accentBar    = isGreen ? 'bg-[#1a6644]' : 'bg-[#3489AE]';
  const altText      = isGreen ? 'text-[#3489AE]' : 'text-[#1a6644]';
  const altBar       = isGreen ? 'bg-[#3489AE]'  : 'bg-[#1a6644]';

  return (
    <main className="pt-20 pb-24 bg-white">

      {/* ── Breadcrumb ── */}
      <div className="bg-gray-50 border-b border-gray-100 py-3 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto flex items-center gap-1.5 text-xs text-gray-400 font-medium">
          <Link href="/"        className="hover:text-gray-700 transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link href="/services" className="hover:text-gray-700 transition-colors">Services</Link>
          <ChevronRight size={12} />
          <span className={accentText}>{service.title}</span>
        </div>
      </div>

      {/* ── Hero header ── */}
      <section
        className="relative py-20 px-6 md:px-12 lg:px-20 overflow-hidden"
        style={{ background: '#0d2d1f' }}
      >
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d2d1f] via-[#1a4a64]/70 to-[#0d2d1f] pointer-events-none" />
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle,white 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
        {/* Decorative rings */}
        <div className="absolute right-[-80px] top-[-80px] w-80 h-80 rounded-full border"
          style={{ borderColor: `${accent}30` }} />
        <div className="absolute left-[-60px] bottom-[-60px] w-60 h-60 rounded-full border"
          style={{ borderColor: `${isGreen ? '#3489AE' : '#1a6644'}25` }} />
        {/* Top rule */}
        <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${isGreen ? 'from-[#1a6644] to-[#3489AE]' : 'from-[#3489AE] to-[#1a6644]'}`} />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Dual pill */}
          <div className="inline-flex rounded-full overflow-hidden border border-white/20 mb-6">
            <span className="bg-[#1a6644]/30 text-[#6edfa0] text-[11px] font-bold uppercase tracking-[0.1em] px-4 py-2">Energy Services</span>
            <span className="bg-[#3489AE]/30 text-[#7ec8e3] text-[11px] font-bold uppercase tracking-[0.1em] px-4 py-2">{service.title}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05] text-white mb-6 max-w-3xl">
            {service.title.split(' ').slice(0, -1).join(' ')}{' '}
            <span style={{ WebkitTextStroke: `2px ${accent}`, color: 'transparent' }}>
              {service.title.split(' ').slice(-1)[0]}
            </span>
          </h1>
          <p className="text-white/65 text-lg max-w-2xl leading-relaxed mb-10">{service.description}</p>

          {/* Stats */}
          {service.stats.length > 0 && (
            <div className="flex flex-wrap gap-4 mt-2">
              {service.stats.map((stat, i) => (
                <div key={i}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-7 py-5 text-center min-w-[120px]"
                >
                  <div className="text-3xl font-black leading-none mb-1"
                    style={{ color: i % 2 === 0 ? '#6edfa0' : '#7ec8e3' }}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/50 font-semibold uppercase tracking-widest mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* ── Left: content ── */}
          <div className="lg:col-span-2 space-y-14">

            {/* Overview */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className={`w-5 h-0.5 rounded ${accentBar}`} />
                <span className={`text-[11px] font-bold uppercase tracking-[0.12em] ${accentText}`}>Overview</span>
                <div className={`w-5 h-0.5 rounded ${altBar}`} />
              </div>
              <h2 className="text-2xl font-black text-gray-900 mb-4">What We Offer</h2>
              <p className="text-gray-600 leading-relaxed text-sm">{service.overview}</p>
            </div>

            {/* Features + Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Features */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-4 h-0.5 rounded ${accentBar}`} />
                  <span className={`text-[11px] font-bold uppercase tracking-[0.12em] ${accentText}`}>Features</span>
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-5">Key Features</h3>
                <ul className="space-y-3">
                  {service.keyFeatures.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                      <div className={`mt-1 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${accentBar}`}>
                        <CheckCircle size={10} className="text-white" strokeWidth={3} />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-4 h-0.5 rounded ${altBar}`} />
                  <span className={`text-[11px] font-bold uppercase tracking-[0.12em] ${altText}`}>Benefits</span>
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-5">What You Gain</h3>
                <ul className="space-y-3">
                  {service.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                      <div className={`mt-1 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${altBar}`}>
                        <CheckCircle size={10} className="text-white" strokeWidth={3} />
                      </div>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Process */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className={`w-5 h-0.5 rounded ${accentBar}`} />
                <span className={`text-[11px] font-bold uppercase tracking-[0.12em] ${accentText}`}>Methodology</span>
                <div className={`w-5 h-0.5 rounded ${altBar}`} />
              </div>
              <h2 className="text-2xl font-black text-gray-900 mb-8">Our Process</h2>
              <div className="space-y-0">
                {service.process.map((step, i) => (
                  <div key={i} className="flex gap-5 group">
                    {/* Step indicator */}
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-sm flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                        style={{ background: i % 2 === 0 ? accent : (isGreen ? '#3489AE' : '#1a6644') }}
                      >
                        {i + 1}
                      </div>
                      {i < service.process.length - 1 && (
                        <div className="w-px flex-1 mt-1 mb-1 bg-gray-100" />
                      )}
                    </div>
                    {/* Step content */}
                    <div className="pb-8">
                      <h3 className="text-base font-black text-gray-900 mb-1.5 leading-tight">{step.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: sidebar ── */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-5">

              {/* CTA card */}
              <div className={`relative rounded-2xl border overflow-hidden ${accentBorder}`}>
                <div className={`h-1 w-full ${accentBar}`} />
                <div className={`p-7 ${accentBg}`}>
                  <h3 className="text-base font-black text-gray-900 mb-2">Interested in this service?</h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-6">
                    Contact us to discuss your specific needs and get a customised solution for your project.
                  </p>
                  <Link
                    href="/contact"
                    className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] shadow-lg group ${accentBtn}`}
                    style={{ boxShadow: `0 8px 24px ${accent}30` }}
                  >
                    Request a Consultation
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Quick info card */}
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                <h3 className="text-[11px] font-bold uppercase tracking-[0.12em] text-gray-400 mb-4">Quick Info</h3>
                <ul className="space-y-3">
                  {[
                    { label: 'Category',    value: 'Energy Services' },
                    { label: 'Scope',       value: 'Nepal & Region'  },
                    { label: 'Delivery',    value: 'End-to-end'      },
                    { label: 'Support',     value: 'Ongoing'         },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center justify-between text-xs">
                      <span className="text-gray-400 font-medium">{item.label}</span>
                      <span className={`font-bold ${accentText}`}>{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Other services nudge */}
              <div className="rounded-2xl border border-gray-100 p-6">
                <h3 className="text-[11px] font-bold uppercase tracking-[0.12em] text-gray-400 mb-4">Explore More</h3>
                <Link
                  href="/services"
                  className={`flex items-center gap-2 text-xs font-bold ${accentText} hover:underline group`}
                >
                  <ArrowLeft size={12} />
                  All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA footer ── */}
      <section className="py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-[#0d2d1f] p-10 md:p-14">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0d2d1f] via-[#1a4a64]/80 to-[#0d2d1f] pointer-events-none" />
            <div className="absolute inset-0 opacity-[0.04]"
              style={{ backgroundImage: 'radial-gradient(circle,white 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
            <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${isGreen ? 'from-[#1a6644] to-[#3489AE]' : 'from-[#3489AE] to-[#1a6644]'}`} />

            <div className="relative z-10 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-5 h-0.5 rounded bg-[#6edfa0]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#6edfa0]">Get started</span>
                <div className="w-5 h-0.5 rounded bg-[#7ec8e3]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4 leading-tight">
                Ready to get{' '}
                <span style={{ WebkitTextStroke: `1.5px ${accent}`, color: 'transparent' }}>started?</span>
              </h2>
              <p className="text-white/60 text-sm leading-relaxed max-w-lg mx-auto mb-8">
                Contact us today to discuss how we can implement sustainable, efficient energy solutions tailored to your specific needs.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white text-sm font-semibold transition-all duration-300 hover:scale-[1.02] shadow-lg group ${accentBtn}`}
                  style={{ boxShadow: `0 8px 24px ${accent}30` }}
                >
                  Contact Us
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/projects"
                  className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full border text-sm font-semibold transition-all duration-300 hover:scale-[1.02] group ${isGreen ? 'border-[#3489AE]/60 text-[#7ec8e3] hover:bg-[#3489AE] hover:text-white' : 'border-[#1a6644]/60 text-[#6edfa0] hover:bg-[#1a6644] hover:text-white'}`}
                >
                  View Projects
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}