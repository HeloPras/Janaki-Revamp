
import Image from 'next/image';
import { BookOpen, Award, Briefcase, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { motion,AnimatePresence } from "framer-motion";
import { useState } from "react";


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