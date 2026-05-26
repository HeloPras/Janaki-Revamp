'use client';
  
import React, { useState } from 'react';
import Image from 'next/image';
import { BookOpen, Award, Briefcase, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import VideoBackdrop from '@/components/VideoBackdrop';
import { boardMembers } from '@/data/teammember';
import { promoters } from '@/data/teammember';

/* ── Data (unchanged) ──────────────────────────────────────── */



const overviewStats = [
  { num: '50+',  label: 'Combined Years',     color: 'green'  },
  { num: `${boardMembers.length}`,   label: 'Board Members',     color: 'blue'   },
  { num: '3',    label: 'Sectors Represented', color: 'green'  },
  { num: '100%', label: 'Sustainability Focus', color: 'blue'   },
];

/* ── Board Card ────────────────────────────────────────────── */

export const BoardCard = ({ member }: { member: BoardMember }) => {
  const [expanded, setExpanded] = useState(false);
  const isGreen = member.color === 'green';
  const accentColor  = isGreen ? 'text-[#1a6644]'  : 'text-[#3489AE]';
  const accentBg     = isGreen ? 'bg-[#1a6644]/10' : 'bg-[#3489AE]/10';
  const accentBorder = isGreen ? 'border-[#1a6644]/20' : 'border-[#3489AE]/20';
  const accentBar    = isGreen ? 'bg-[#1a6644]'    : 'bg-[#3489AE]';
  const accentPill   = isGreen
    ? 'bg-[#1a6644] text-white'
    : 'bg-[#3489AE] text-white';

  const hasEducation = member.education.length > 0 && member.education[0].trim() !== '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-black/8 hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      {/* Top accent bar */}
      <div className={`h-1 w-full ${accentBar}`} />

      {/* Image */}
      <div className="relative h-60 overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Position pill */}
        <div className="absolute bottom-4 left-4">
          <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${accentPill}`}>
            {member.position}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Name */}
        <h3 className="text-lg font-black text-gray-900 leading-tight mb-1">{member.name}</h3>
        {member.role && member.role.trim() && (
          <p className={`text-xs font-semibold uppercase tracking-wider mb-4 ${accentColor}`}>{member.role}</p>
        )}

        {/* Expertise pill */}
        <div className={`rounded-xl p-3.5 mb-5 border ${accentBg} ${accentBorder}`}>
          <div className="flex items-start gap-2">
            <Award size={14} className={`${accentColor} mt-0.5 flex-shrink-0`} strokeWidth={2} />
            <p className="text-xs text-gray-700 leading-relaxed">{member.expertise}</p>
          </div>
        </div>

        {/* Experience */}
        <div className="flex items-start gap-2 mb-5">
          <Briefcase size={13} className="text-gray-400 mt-0.5 flex-shrink-0" strokeWidth={1.8} />
          <p className="text-xs text-gray-500 leading-relaxed">{member.experience}</p>
        </div>

        {/* Expandable section */}
        <div className="mt-auto ">
          <button
            onClick={() => setExpanded(v => !v)}
            className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider cursor-pointer transition-colors duration-200 ${accentColor}`}
          >
            {expanded ? 'Show Less' : 'More Details'}
            {expanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
          </button>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.28 }}
                className="overflow-hidden"
              >
                <div className="pt-4 space-y-4">
                  {/* Education */}
                  {hasEducation && (
                    <div>
                      <div className="flex items-center gap-1.5 mb-2">
                        <BookOpen size={12} className={accentColor} strokeWidth={2} />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Education</span>
                      </div>
                      <ul className="space-y-1.5">
                        {member.education.map((edu, i) => (
                          <li key={i} className={`text-xs text-gray-600 pl-3 border-l-2 ${accentBorder} leading-relaxed`}>
                            {edu}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Achievements */}
                  {member.achievements.length > 0 && (
                    <div>
                      <div className="flex items-center gap-1.5 mb-2">
                        <Star size={12} className={accentColor} strokeWidth={2} />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Achievements</span>
                      </div>
                      <ul className="space-y-1.5">
                        {member.achievements.map((a, i) => (
                          <li key={i} className={`text-xs text-gray-600 pl-3 border-l-2 ${accentBorder} leading-relaxed`}>
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Certifications */}
                  {member.certifications.length > 0 && (
                    <div>
                      <div className="flex items-center gap-1.5 mb-2">
                        <Award size={12} className={accentColor} strokeWidth={2} />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Certifications</span>
                      </div>
                      <ul className="space-y-1.5">
                        {member.certifications.map((c, i) => (
                          <li key={i} className={`text-xs text-gray-600 pl-3 border-l-2 ${accentBorder} leading-relaxed`}>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

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