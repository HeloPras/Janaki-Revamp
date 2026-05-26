'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sun, Droplet, Globe, Home, Activity, Leaf, Users, Zap, LucideIcon } from 'lucide-react';

/* ── Types ─────────────────────────────────────────────────── */
interface ImpactCard {
  title: string;
  description: string;
  icon: LucideIcon;
  stat: string;
  statLabel: string;
  color: 'green' | 'blue';
}

/* ── Data ──────────────────────────────────────────────────── */
const impactCards: ImpactCard[] = [
  { title: "Renewable Energy",      description: "Increased clean energy generation across Nepal, cutting fossil fuel dependency.",           icon: Sun,      stat: "782+",  statLabel: "MWh / year",          color: 'green' },
  { title: "Water Conservation",    description: "Sustainable hydro projects protecting water resources for future generations.",              icon: Droplet,  stat: "5k+",   statLabel: "Households served",   color: 'blue'  },
  { title: "Climate Action",        description: "Cutting greenhouse gas emissions through large-scale renewable adoption.",                   icon: Globe,    stat: "40%",   statLabel: "Emission reduction",  color: 'blue'  },
  { title: "Community Growth",      description: "Creating jobs and economic opportunity through energy access for local communities.",        icon: Home,     stat: "200+",  statLabel: "Jobs created",        color: 'green' },
  { title: "Energy Efficiency",     description: "Helping homes and industries cut consumption and lower their environmental footprint.",      icon: Activity, stat: "30%",   statLabel: "Average cost savings", color: 'blue' },
  { title: "Sustainable Farming",   description: "Solar irrigation and energy systems powering farms with clean, reliable energy year-round.", icon: Leaf,     stat: "50+",   statLabel: "Farms powered",       color: 'green' },
  { title: "Skills & Education",    description: "Training a new generation of renewable energy professionals across Nepal.",                  icon: Users,    stat: "500+",  statLabel: "People trained",      color: 'blue'  },
  { title: "Innovation",            description: "Advancing clean energy technology through R&D in storage, grid management, and smart systems.", icon: Zap,   stat: "10+",   statLabel: "R&D projects",        color: 'green' },
];

const stats = [
  { num: '5+',   label: 'Energy Sources',    color: 'green' },
  { num: '782+', label: 'MWh Generated',     color: 'blue'  },
  { num: '5,000+', label: 'Households Served', color: 'green' },
  { num: '100%', label: 'Clean Energy',      color: 'blue'  },
] as const;

/* ── Helpers ───────────────────────────────────────────────── */
const cardColor = {
  green: {
    iconBg:   'bg-[#1a6644]/10',
    icon:     'text-[#1a6644]',
    stat:     'text-[#1a6644]',
    topBar:   'bg-[#1a6644]',
    border:   'border-[#1a6644]/15',
    hover:    'hover:border-[#1a6644]/40 hover:shadow-[#1a6644]/10',
  },
  blue: {
    iconBg:   'bg-[#3489AE]/10',
    icon:     'text-[#3489AE]',
    stat:     'text-[#3489AE]',
    topBar:   'bg-[#3489AE]',
    border:   'border-[#3489AE]/15',
    hover:    'hover:border-[#3489AE]/40 hover:shadow-[#3489AE]/10',
  },
};

const statColor = {
  green: { num: 'text-[#1a6644]', border: 'border-[#1a6644]/20', bg: 'bg-[#1a6644]/5' },
  blue:  { num: 'text-[#3489AE]', border: 'border-[#3489AE]/20', bg: 'bg-[#3489AE]/5' },
};

const fadeUp = {
  hidden:  { opacity: 0, y: 22 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.07, ease: 'easeOut' } }),
};

/* ── Component ─────────────────────────────────────────────── */
export default function ImpactSection() {
  return (
    <section className="relative bg-white py-24 overflow-hidden">

      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#1a6644]/[0.03] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#3489AE]/[0.04] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* ── Header ── */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-5 h-0.5 rounded bg-[#1a6644]" />
            <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#1a6644]">Our Impact</span>
            <div className="w-5 h-0.5 rounded bg-[#3489AE]" />
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 leading-none">
              Making a <span className="text-[#1a6644]">Difference</span>
            </h2>
            <p className="text-gray-500 max-w-xs text-sm leading-relaxed md:text-right">
              From clean energy generation to community empowerment — here's what we've built together.
            </p>
          </div>
        </motion.div>

        {/* ── Hero stat strip ── */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          {stats.map((s, i) => {
            const sc = statColor[s.color];
            return (
              <div key={i} className={`rounded-2xl border p-6 text-center ${sc.bg} ${sc.border}`}>
                <div className={`text-4xl md:text-5xl font-black tracking-tight leading-none mb-2 ${sc.num}`}>
                  {s.num}
                </div>
                <div className="text-xs text-gray-500 font-semibold uppercase tracking-widest">
                  {s.label}
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* ── Impact cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {impactCards.map((card, i) => {
            const Icon = card.icon;
            const cc = cardColor[card.color];
            return (
              <motion.div
                key={card.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`group relative flex flex-col bg-white rounded-2xl border p-6 hover:shadow-xl transition-all duration-300 ${cc.border} ${cc.hover}`}
              >
                {/* Top colour bar */}
                <div className={`absolute top-0 left-6 right-6 h-0.5 rounded-full ${cc.topBar} opacity-60 transition-all duration-300 group-hover:left-0 group-hover:right-0 group-hover:opacity-100`} />

                {/* Icon */}
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${cc.iconBg}`}>
                  <Icon size={20} className={cc.icon} strokeWidth={1.8} />
                </div>

                {/* Stat */}
                <div className={`text-3xl font-black tracking-tight leading-none mb-1 ${cc.stat}`}>
                  {card.stat}
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">
                  {card.statLabel}
                </div>

                {/* Divider */}
                <div className="w-8 h-px bg-gray-200 mb-4" />

                {/* Title + desc */}
                <h3 className="text-sm font-bold text-gray-900 mb-2 leading-tight">
                  {card.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed flex-1">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* ── CTA ── */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#1a6644] text-white text-sm font-semibold hover:bg-[#1a5535] hover:scale-[1.02] transition-all duration-300 shadow-md shadow-[#1a6644]/20 group"
          >
            Work With Us
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[#3489AE] text-[#3489AE] text-sm font-semibold hover:bg-[#3489AE] hover:text-white hover:scale-[1.02] transition-all duration-300 group"
          >
            View Our Projects
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}