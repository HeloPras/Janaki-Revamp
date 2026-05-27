"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Calendar, MapPin, Zap, TrendingUp } from "lucide-react";
import VideoBackdrop from "@/components/VideoBackdrop";
import CallToAction from "@/components/CallToAction";
import { projectsData } from "@/data/project";

/* ─────────────────────────────────────────────────────────────
   BRAND TOKENS
   #1a6644   forest green (primary)
   #3489AE   steel blue   (secondary)
   #0f3d28   deep green
   #e8f4ef   green tint bg
   #eef6fb   blue tint bg
   #f9fafb   near-white
   ───────────────────────────────────────────────────────────── */

type Project = typeof projectsData[0];

/* ── Motion presets ─────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
});

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const childFade = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

/* ── Category filter pills ──────────────────────────────────── */
const categories = ["All", "Solar Energy", "Feasibility Study", "Industrial Solar"];

/* ── Project Card ───────────────────────────────────────────── */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isBlue = index % 2 !== 0;
  const accent = isBlue ? "#3489AE" : "#1a6644";
  const accentBg = isBlue ? "#eef6fb" : "#e8f4ef";

  return (
    <motion.article
      variants={childFade}
      className="group relative bg-white rounded-3xl overflow-hidden flex flex-col"
      style={{
        boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.04)",
        border: "1px solid rgba(0,0,0,0.06)",
        transition: "box-shadow 0.4s ease, transform 0.4s ease",
      }}
      whileHover={{
        y: -6,
        boxShadow: `0 2px 4px rgba(0,0,0,0.06), 0 20px 48px rgba(0,0,0,0.1), 0 0 0 1px ${accent}22`,
      }}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden flex-shrink-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-[1400ms] ease-in-out group-hover:scale-[1.05]"
        />
        {/* Soft gradient fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        {/* Category pill */}
        <div className="absolute top-4 left-4">
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider backdrop-blur-md"
            style={{
              background: "rgba(255,255,255,0.92)",
              color: accent,
              boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
            {project.category}
          </span>
        </div>

        {/* Year pill top-right */}
        {project.year && (
          <div className="absolute top-4 right-4">
            <span
              className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold backdrop-blur-md"
              style={{
                background: "rgba(0,0,0,0.45)",
                color: "rgba(255,255,255,0.9)",
              }}
            >
              {project.year}
            </span>
          </div>
        )}
      </div>

      {/* Accent line */}
      <div
        className="h-0.5 w-full transition-all duration-500 group-hover:opacity-100 opacity-60"
        style={{ background: `linear-gradient(to right, ${accent}, ${accent}44)` }}
      />

      {/* Body */}
      <div className="flex flex-col flex-1 p-7 gap-4">

        {/* Title */}
        <h3
          className="text-[1.15rem] font-bold text-gray-900 leading-snug tracking-tight group-hover:text-gray-700 transition-colors duration-300"
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-[0.875rem] text-gray-500 leading-relaxed line-clamp-2 flex-grow-0">
          {project.description}
        </p>

        {/* Meta chips */}
        <div className="flex flex-wrap gap-2">
          {project.location && (
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold"
              style={{ background: accentBg, color: accent }}
            >
              <MapPin size={10} />
              {project.location}
            </span>
          )}
          {project.capacity && (
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold"
              style={{ background: accentBg, color: accent }}
            >
              <Zap size={10} />
              {project.capacity}
            </span>
          )}
        </div>

        {/* Impact row */}
        {project.impact && (
          <div
            className="flex items-center gap-2 px-4 py-2.5 rounded-2xl"
            style={{ background: accentBg }}
          >
            <TrendingUp size={13} style={{ color: accent }} className="flex-shrink-0" />
            <span className="text-[12px] font-semibold" style={{ color: accent }}>
              {project.impact}
            </span>
          </div>
        )}

        {/* Divider */}
        <div className="h-px bg-gray-100" />

        {/* CTA */}
        <div className="mt-auto flex items-center justify-between">
          <Link
            href={project.link}
            className="inline-flex items-center gap-2 text-[13px] font-bold transition-all duration-300 group/link"
            style={{ color: accent }}
          >
            <span className="relative">
              View Project
              <span
                className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 group-hover/link:w-full transition-all duration-300 rounded-full"
                style={{ background: accent }}
              />
            </span>
            <span
              className="flex items-center justify-center w-7 h-7 rounded-full transition-all duration-300 group-hover/link:translate-x-1"
              style={{ background: accentBg }}
            >
              <ArrowRight size={12} style={{ color: accent }} />
            </span>
          </Link>

          <span className="text-[11px] text-gray-300 font-semibold">
            {String(index + 1).padStart(2, "0")} / {String(projectsData.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

/* ── Stat card ──────────────────────────────────────────────── */
function StatCard({ num, label, color }: { num: string; label: string; color: string }) {
  return (
    <motion.div
      variants={childFade}
      className="flex flex-col items-center justify-center py-8 px-6 rounded-2xl text-center"
      style={{
        background: color === "green" ? "#e8f4ef" : "#eef6fb",
        border: `1px solid ${color === "green" ? "#1a664420" : "#3489AE20"}`,
      }}
    >
      <span
        className="text-3xl font-black tracking-tighter leading-none mb-1"
        style={{ color: color === "green" ? "#1a6644" : "#3489AE" }}
      >
        {num}
      </span>
      <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">
        {label}
      </span>
    </motion.div>
  );
}

/* ── Page ───────────────────────────────────────────────────── */
export default function ProjectsPage() {
  return (
    <main className="pt-20 bg-white">

      {/* ════════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
      <VideoBackdrop videoSrc="/videos/projects.mp4" minHeight="680px">
        <section className="relative px-6 md:px-12 lg:px-20 py-32">
          {/* Layered gradient scrub */}
          <div className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(120deg, rgba(15,61,40,0.88) 0%, rgba(26,102,68,0.6) 40%, rgba(52,137,174,0.35) 75%, transparent 100%)",
            }}
          />
          {/* Subtle dot texture */}
          <div
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="max-w-3xl"
            >
              {/* Breadcrumb-style badge */}
              <motion.div variants={childFade} className="mb-7">
                <div
                  className="inline-flex items-center gap-0 rounded-full overflow-hidden"
                  style={{
                    border: "1px solid rgba(255,255,255,0.18)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <span
                    className="px-4 py-2 text-[11px] font-bold uppercase tracking-widest"
                    style={{ background: "rgba(26,102,68,0.45)", color: "#86efb8" }}
                  >
                    Portfolio
                  </span>
                  <span
                    className="px-4 py-2 text-[11px] font-bold uppercase tracking-widest"
                    style={{ background: "rgba(52,137,174,0.35)", color: "#93d3f0" }}
                  >
                    {projectsData.length} Projects
                  </span>
                </div>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={childFade}
                className="font-black tracking-tighter leading-[0.92] text-white mb-8"
                style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)" }}
              >
                Our<br />
                <span
                  style={{
                    WebkitTextStroke: "2px #3489AE",
                    color: "transparent",
                  }}
                >
                  Projects
                </span>
              </motion.h1>

              {/* Sub */}
              <motion.div
                variants={childFade}
                className="pl-5"
                style={{ borderLeft: "3px solid #1a6644" }}
              >
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  Explore our portfolio of sustainable energy projects that
                  demonstrate our expertise and commitment to innovation across Nepal.
                </p>
              </motion.div>

              {/* Scroll cue */}
              <motion.div
                variants={childFade}
                className="mt-14 flex items-center gap-3"
              >
                <div
                  className="w-8 h-8 rounded-full border border-white/25 flex items-center justify-center animate-bounce"
                >
                  <ArrowRight
                    size={13}
                    className="text-white/60 rotate-90"
                  />
                </div>
                <span className="text-[11px] uppercase tracking-widest text-white/40 font-semibold">
                  Scroll to explore
                </span>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </VideoBackdrop>

      {/* ════════════════════════════════════════
          STATS BAND
      ════════════════════════════════════════ */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-14">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

            {/* Left label */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp(0)}
            >
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-6 h-0.5 rounded-full bg-[#1a6644]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1a6644]">
                  What we've built
                </span>
                <div className="w-6 h-0.5 rounded-full bg-[#3489AE]" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter leading-none">
                Featured{" "}
                <span className="text-[#1a6644]">Projects</span>
              </h2>
            </motion.div>

            {/* Right stats */}
            <motion.div
              className="grid grid-cols-3 gap-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <StatCard num={`${projectsData.length}`} label="Projects" color="green" />
              <StatCard num="782+"    label="MWh / Year"    color="blue"  />
              <StatCard num="5,000+"  label="Homes Powered" color="green" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FILTER BAR
      ════════════════════════════════════════ */}
      {/* <section className="bg-gray-50/70 border-b border-gray-100 px-6 md:px-12 lg:px-20 py-5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mr-2">
            Filter
          </span>
          {categories.map((cat, i) => (
            <button
              key={cat}
              className="px-4 py-2 rounded-full text-[12px] font-semibold transition-all duration-200"
              style={
                i === 0
                  ? {
                      background: "#1a6644",
                      color: "#fff",
                      boxShadow: "0 2px 10px rgba(26,102,68,0.25)",
                    }
                  : {
                      background: "white",
                      color: "#6b7280",
                      border: "1px solid #e5e7eb",
                    }
              }
            >
              {cat}
            </button>
          ))}
        </div>
      </section> */}

      {/* ════════════════════════════════════════
          PROJECTS GRID
      ════════════════════════════════════════ */}
      <section className="bg-gray-50/50 px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            {projectsData.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </motion.div>

          {/* Footer note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 text-center text-[12px] uppercase tracking-widest font-semibold text-gray-400"
          >
            More projects coming soon ·{" "}
            <Link href="#" className="text-[#1a6644] hover:underline">
              Stay updated
            </Link>
          </motion.p>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CTA
      ════════════════════════════════════════ */}
      <CallToAction variant="minimal" size="large" />
    </main>
  );
}