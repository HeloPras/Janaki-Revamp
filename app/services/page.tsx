'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Sun, Wind, Droplet, Leaf, BarChart2,
  FileCheck, Settings, Activity, ArrowRight, LucideIcon
} from 'lucide-react';
import VideoBackdrop from '@/components/VideoBackdrop';

/* ── Types & Data ──────────────────────────────────────────── */
interface Service {
  title: string;
  description: string;
  bullets: string[];
  href: string;
  icon: LucideIcon;
  color: 'green' | 'blue';
}

const services: Service[] = [
  {
    title: 'Solar Energy Systems',
    description: 'We design, develop, and install solar photovoltaic (PV) systems customized to meet the specific requirements of each client, prioritizing efficiency, cost reduction, and the latest industry advancements.',
    bullets: ['Residential solar installations', 'Commercial solar systems', 'Solar with battery storage solutions', 'Smart grid integration'],
    href: '/services/solar',
    icon: Sun,
    color: 'blue',
  },
  {
    title: 'Renewable Energy Solutions',
    description: 'We deliver comprehensive solutions for renewable energy development — solar, wind, thermal, and bioenergy — aimed at providing clean, dependable, and affordable energy from sustainable resources.',
    bullets: ['Wind energy systems', 'Bioenergy solutions', 'Thermal energy systems', 'Hybrid renewable solutions'],
    href: '/services/renewable',
    icon: Wind,
    color: 'green',
  },
  {
    title: 'Hydropower Development',
    description: 'We assist in the development, operation, and maintenance of small, mini, and large-scale hydropower projects — minimizing environmental impacts while ensuring long-term community benefits.',
    bullets: ['Small-scale hydropower development', 'Mini-hydro installations', 'Hydropower facility maintenance', 'Environmental impact assessment'],
    href: '/services/hydropower',
    icon: Droplet,
    color: 'blue',
  },
  {
    title: 'Feasibility Studies',
    description: 'Our team performs thorough feasibility analyses addressing technical, financial, environmental, and social factors — providing comprehensive assessments to support informed decision-making.',
    bullets: ['Technical feasibility analysis', 'Financial viability assessment', 'Environmental impact studies', 'Social impact evaluations'],
    href: '/services/feasibility',
    icon: BarChart2,
    color: 'green',
  },
  {
    title: 'Consultancy Services',
    description: 'We provide expert consultancy within the energy sector, offering strategic guidance on technical, financial, and policy matters. Our deep industry knowledge helps clients navigate complex challenges.',
    bullets: ['Technical energy consultancy', 'Financial advisory services', 'Energy policy guidance', 'Regulatory compliance support'],
    href: '/services/consultancy',
    icon: FileCheck,
    color: 'blue',
  },
  {
    title: 'Project Management',
    description: 'We manage projects through their complete lifecycle — from planning and design to financing, construction, and commissioning — ensuring effective execution and high-quality results.',
    bullets: ['End-to-end project management', 'Planning and design coordination', 'Construction supervision', 'Commissioning and handover'],
    href: '/services/project-management',
    icon: Settings,
    color: 'green',
  },
  {
    title: 'Equipment Supply & Logistics',
    description: 'We import and supply high-quality solar, hydropower, and electrical equipment from trusted global manufacturers, with comprehensive logistics support for timely delivery and installation.',
    bullets: ['Solar panel and inverter supply', 'Hydropower equipment procurement', 'Battery storage systems', 'Electrical components and accessories'],
    href: '/services/equipment-supply',
    icon: Activity,
    color: 'blue',
  },
  {
    title: 'Investment Facilitation',
    description: 'We facilitate foreign investment and form strategic partnerships with government entities for energy and infrastructure projects, ensuring sustainable implementation through joint ventures.',
    bullets: ['Foreign investment facilitation', 'Joint venture formation', 'Government partnership coordination', 'Special Purpose Vehicle creation'],
    href: '/services/investment',
    icon: Leaf,
    color: 'green',
  },
  {
    title: 'Commercial & Industrial Solar',
    description: 'Specialized solar solutions for commercial and industrial clients, including integrated Battery Energy Storage Systems (BESS) for enhanced energy reliability and cost optimization.',
    bullets: ['Large-scale commercial installations', 'Industrial solar systems', 'Battery Energy Storage Systems (BESS)', 'Energy management systems'],
    href: '/services/commercial-solar',
    icon: Settings,
    color: 'blue',
  },
];

/* ── Color maps ────────────────────────────────────────────── */
const cc = {
  green: {
    iconBg:      'bg-[#1a6644]/10',
    iconColor:   'text-[#1a6644]',
    topBar:      'bg-[#1a6644]',
    border:      'border-[#1a6644]/15',
    hoverBorder: 'hover:border-[#1a6644]/50',
    hoverShadow: 'hover:shadow-[#1a6644]/8',
    dot:         'bg-[#1a6644]',
    link:        'text-[#1a6644] hover:text-[#1a5535]',
    linkArrow:   'group-hover/link:translate-x-1',
  },
  blue: {
    iconBg:      'bg-[#3489AE]/10',
    iconColor:   'text-[#3489AE]',
    topBar:      'bg-[#3489AE]',
    border:      'border-[#3489AE]/15',
    hoverBorder: 'hover:border-[#3489AE]/50',
    hoverShadow: 'hover:shadow-[#3489AE]/8',
    dot:         'bg-[#3489AE]',
    link:        'text-[#3489AE] hover:text-[#2a6f91]',
    linkArrow:   'group-hover/link:translate-x-1',
  },
};

/* ── Fade-up variant ───────────────────────────────────────── */
const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: 'easeOut' },
  }),
};

/* ── Service Card ──────────────────────────────────────────── */
function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  const c = cc[service.color];

  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`group relative flex flex-col bg-white rounded-2xl border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${c.border} ${c.hoverBorder} ${c.hoverShadow}`}
    >
      {/* Top colour bar — expands on hover */}
      <div className={`h-0.5 w-full ${c.topBar} transition-all duration-500 group-hover:h-1`} />

      <div className="flex flex-col flex-1 p-7">
        {/* Icon */}
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${c.iconBg} transition-transform duration-300 group-hover:scale-110`}>
          <Icon size={22} className={c.iconColor} strokeWidth={1.8} />
        </div>

        {/* Title */}
        <h3 className="text-lg font-black text-gray-900 mb-3 leading-tight">{service.title}</h3>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed mb-5">{service.description}</p>

        {/* Divider */}
        <div className="w-8 h-px bg-gray-200 mb-5" />

        {/* Bullets */}
        <ul className="space-y-2 mb-6 flex-1">
          {service.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2.5 text-xs text-gray-600">
              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.dot}`} />
              {b}
            </li>
          ))}
        </ul>

        {/* Link */}
        <Link
          href={service.href}
          className={`group/link mt-auto inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${c.link}`}
        >
          Learn more
          <ArrowRight size={13} className={`transition-transform duration-200 ${c.linkArrow}`} />
        </Link>
      </div>
    </motion.div>
  );
}

/* ── Page ──────────────────────────────────────────────────── */
export default function ServicesPage() {
  return (
    <main className="pt-20 pb-24">

      {/* ── Hero ── */}
      <VideoBackdrop videoSrc="/videos/services.mp4" minHeight="440px">
        <section className="relative text-white py-20 px-6 md:px-12 lg:px-20">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d2d1f]/90 via-[#1a4a64]/60 to-transparent pointer-events-none pt-200  " />
          <div className="relative z-10 max-w-3xl">
            {/* Dual pill */}
            <div className="inline-flex rounded-full overflow-hidden border border-white/20 mb-6">
              <span className="bg-[#1a6644]/30 text-[#6edfa0] text-[11px] font-bold uppercase tracking-[0.1em] px-4 py-2">What we offer</span>
              <span className="bg-[#3489AE]/30 text-[#7ec8e3] text-[11px] font-bold uppercase tracking-[0.1em] px-4 py-2">9 Services</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6">
              Our <span style={{ WebkitTextStroke: '2px #3489AE', color: 'transparent' }}>Services</span>
            </h1>
            <p className="text-white/70 text-lg max-w-xl leading-relaxed">
              Comprehensive, customised solutions across the energy spectrum — from design and installation to consultancy and project management.
            </p>
          </div>
        </section>
      </VideoBackdrop>

      {/* ── Intro strip ── */}
      <section className="bg-white border-b border-gray-100 py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-0.5 rounded bg-[#1a6644]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#1a6644]">Full spectrum</span>
              <div className="w-5 h-0.5 rounded bg-[#3489AE]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
              Everything you need, under one roof
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-4 md:gap-8 flex-shrink-0">
            {[
              { num: '9',    label: 'Services',        color: 'text-[#1a6644]', bg: 'bg-[#1a6644]/5',  border: 'border-[#1a6644]/20' },
              { num: '11+',  label: 'Years Experience', color: 'text-[#3489AE]', bg: 'bg-[#3489AE]/5',  border: 'border-[#3489AE]/20' },
              { num: '100%', label: 'Clean Energy',     color: 'text-[#1a6644]', bg: 'bg-[#1a6644]/5',  border: 'border-[#1a6644]/20' },
            ].map((s, i) => (
              <div key={i} className={`rounded-xl border px-4 py-3 text-center ${s.bg} ${s.border}`}>
                <div className={`text-2xl font-black leading-none mb-1 ${s.color}`}>{s.num}</div>
                <div className="text-[10px] text-gray-500 font-semibold uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services grid ── */}
      <section className="bg-[#f8faf8] py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <ServiceCard key={s.href} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-[#0d2d1f] p-10 md:p-14">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0d2d1f] via-[#1a4a64]/80 to-[#0d2d1f] pointer-events-none" />
            {/* Dot grid */}
            <div className="absolute inset-0 opacity-[0.04]"
              style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
            {/* Top bar */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1a6644] to-[#3489AE]" />

            <div className="relative z-10 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-5 h-0.5 rounded bg-[#6edfa0]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#6edfa0]">Get started</span>
                <div className="w-5 h-0.5 rounded bg-[#7ec8e3]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4 leading-tight">
                Ready to power your <span style={{ WebkitTextStroke: '1.5px #3489AE', color: 'transparent' }}>future?</span>
              </h2>
              <p className="text-white/60 text-sm leading-relaxed max-w-lg mx-auto mb-8">
                Contact us today to discuss how we can implement sustainable, efficient energy solutions tailored to your specific needs.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#1a6644] text-white text-sm font-semibold hover:bg-[#1a5535] hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-[#1a6644]/30 group"
                >
                  Contact Us
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[#3489AE]/60 text-[#7ec8e3] text-sm font-semibold hover:bg-[#3489AE] hover:text-white hover:scale-[1.02] transition-all duration-300 group"
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