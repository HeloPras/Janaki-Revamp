'use client';
  
import React, { useState } from 'react';
import Image from 'next/image';
import { BookOpen, Award, Briefcase, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import VideoBackdrop from '@/components/VideoBackdrop';
import { boardMembers } from '@/data/teammember';
import { promoters } from '@/data/teammember';
import { BoardCard } from '@/components/board-of-director/BoardCard';

/* ── Data (unchanged) ──────────────────────────────────────── */



const overviewStats = [
  { num: '50+',  label: 'Combined Years',     color: 'green'  },
  { num: `${boardMembers.length}`,   label: 'Board Members',     color: 'blue'   },
  { num: '3',    label: 'Sectors Represented', color: 'green'  },
  { num: '100%', label: 'Sustainability Focus', color: 'blue'   },
];

/* ── Board Card ────────────────────────────────────────────── */
// 


/* ── Section heading ───────────────────────────────────────── */
function SectionHeading({ title, color }: { title: string; color: 'green' | 'blue' }) {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center gap-2 mb-3">
        <div className={`w-5 h-0.5 rounded ${color === 'green' ? 'bg-[#1a6644]' : 'bg-[#3489AE]'}`} />
        <span className={`text-[11px] font-bold uppercase tracking-[0.12em] ${color === 'green' ? 'text-[#1a6644]' : 'text-[#3489AE]'}`}>
          {color === 'green' ? 'Leadership' : 'Key Promoters'}
        </span>
        <div className={`w-5 h-0.5 rounded ${color === 'blue' ? 'bg-[#3489AE]' : 'bg-[#1a6644]'}`} />
      </div>
      <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">{title}</h2>
    </div>
  );
}

/* ── Page ──────────────────────────────────────────────────── */
export default function BoardOfDirectorsPage() {
  return (
    <main className="pt-20 pb-24">

      {/* ── Hero ── */}
      <VideoBackdrop videoSrc="/videos/office.mp4" minHeight="500px">
        <section className="relative text-white py-20 px-6 md:px-12 lg:px-20">
          {/* Gradient scrub */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d2d1f]/90 via-[#1a4a64]/60 to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            {/* Dual pill */}
            <div className="inline-flex rounded-full overflow-hidden border border-white/20 mb-6">
              <span className="bg-[#1a6644]/30 text-[#6edfa0] text-[11px] font-bold uppercase tracking-[0.1em] px-4 py-2">Leadership</span>
              <span className="bg-[#3489AE]/30 text-[#7ec8e3] text-[11px] font-bold uppercase tracking-[0.1em] px-4 py-2">Team</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6">
              Board of <span style={{ WebkitTextStroke: '2px #3489AE', color: 'transparent' }}>Directors</span>
            </h1>
            <p className="text-white/70 text-lg max-w-xl leading-relaxed">
              Meet the experienced leadership team driving Janaki Energy's mission toward sustainable energy solutions in Nepal.
            </p>
          </div>
        </section>
      </VideoBackdrop>

      {/* ── Overview stats ── */}
      <section className="bg-white py-16 px-6 md:px-12 lg:px-20 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            {overviewStats.map((s, i) => {
              const isGreen = s.color === 'green';
              return (
                <div key={i} className={`rounded-2xl border p-6 text-center ${
                  isGreen ? 'bg-[#1a6644]/5 border-[#1a6644]/20' : 'bg-[#3489AE]/5 border-[#3489AE]/20'
                }`}>
                  <div className={`text-4xl font-black tracking-tight leading-none mb-2 ${
                    isGreen ? 'text-[#1a6644]' : 'text-[#3489AE]'
                  }`}>{s.num}</div>
                  <div className="text-xs text-gray-500 font-semibold uppercase tracking-widest">{s.label}</div>
                </div>
              );
            })}
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-center text-gray-500 max-w-2xl mx-auto mt-10 text-sm leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our board combines decades of experience in energy sector development, financial management,
            and sustainable business practices to guide Janaki Energy's strategic vision and operational excellence.
          </motion.p>
        </div>
      </section>

      {/* ── Board members ── */}
      <section className="bg-[#f8faf8] py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Our Board of Directors" color="green" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {boardMembers.map(m => <BoardCard key={m.id} member={m} />)}
          </div>
        </div>
      </section>

      {/* ── Promoters ── */}
      <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Key Promoters & Advisors" color="blue" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {promoters.map(m => <BoardCard key={m.id} member={m} />)}
          </div>
        </div>
      </section>

    </main>
  );
}