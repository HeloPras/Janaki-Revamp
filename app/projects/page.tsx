// app/projects/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, MapPin, Zap } from "lucide-react";
import VideoBackdrop from "@/components/VideoBackdrop";
import CallToAction from "@/components/CallToAction";
import { projectsData } from "@/data/project";

/* ─────────────────────────────────────────────────────────────
   PALETTE (forest + amber — same brand hues, bolder execution)
   #0e1a0c  deepest forest
   #162010  dark forest
   #1f3318  mid forest
   #2a4520  forest
   #3b6d11  bright forest
   #d4a017  amber gold
   #f0c84a  bright gold
   #faeeda  pale gold
   #f7f3e8  cream
   ───────────────────────────────────────────────────────────── */

const categories = [
  { name: "All Projects", count: projectsData.length, dot: "#f0c84a" },
  { name: "Solar Energy",    count: 1, dot: "#f0c84a" },
  { name: "Policy Research", count: 1, dot: "#97C459" },
  { name: "Industrial Solar",count: 1, dot: "#5DCAA5" },
];

/* ── MARQUEE TICKER ─────────────────────────────────────────── */
const TickerText = () => (
  <div
    className="overflow-hidden py-3 border-y"
    style={{ borderColor: "#d4a017", background: "#d4a017" }}
  >
    <div className="flex whitespace-nowrap animate-marquee">
      {Array.from({ length: 6 }).map((_, i) => (
        <span key={i} className="flex items-center gap-6 mx-6 font-bold uppercase tracking-[0.2em] text-sm" style={{ color: "#0e1a0c" }}>
          <span>Sustainable Energy</span>
          <span style={{ fontSize: "8px" }}>◆</span>
          <span>Nepal&apos;s Future</span>
          <span style={{ fontSize: "8px" }}>◆</span>
          <span>Solar Innovation</span>
          <span style={{ fontSize: "8px" }}>◆</span>
          <span>Clean Power</span>
          <span style={{ fontSize: "8px" }}>◆</span>
        </span>
      ))}
    </div>
  </div>
);

/* ── PROJECT CARD — full redesign ───────────────────────────── */
interface ProjectCardProps {
  project: typeof projectsData[0];
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className="group relative overflow-hidden"
      style={{
        background: "#0e1a0c",
        borderRadius: "4px",
        minHeight: "540px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ── IMAGE fills top 60% ── */}
      <div className="relative overflow-hidden" style={{ height: "340px", flexShrink: 0 }}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-[1200ms] ease-in-out group-hover:scale-[1.08]"
          style={{ opacity: 0.75 }}
        />
        {/* Gradient fade into card body */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 40%, #0e1a0c 100%)",
          }}
        />

        {/* Category badge — top left, raw/stencil style */}
        <div className="absolute top-0 left-0">
          <span
            className="block px-4 py-2 text-[10px] font-black uppercase tracking-[0.35em]"
            style={{ background: "#d4a017", color: "#0e1a0c", borderRadius: "0 0 4px 0" }}
          >
            {project.category}
          </span>
        </div>

        {/* Index number — oversized watermark */}
        <div
          className="absolute bottom-0 right-4 font-black leading-none select-none pointer-events-none"
          style={{
            fontSize: "120px",
            color: "rgba(212,160,23,0.12)",
            lineHeight: 1,
            fontFamily: "var(--font-lexend, sans-serif)",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      {/* ── TEXT BODY ── */}
      <div className="flex flex-col flex-1 p-7" style={{ background: "#0e1a0c" }}>

        {/* Title */}
        <h3
          className="font-black font-lexend leading-[1.05] tracking-tight mb-3 transition-colors duration-300 group-hover:text-amber-400"
          style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", color: "#f7f3e8" }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="leading-relaxed mb-5 line-clamp-2"
          style={{ color: "#8aaa78", fontSize: "0.9rem" }}
        >
          {project.description}
        </p>

        {/* Divider line */}
        <div
          className="mb-5 transition-all duration-700 group-hover:w-full"
          style={{ height: "1px", width: "40px", background: "#d4a017" }}
        />

        {/* Stats row */}
        <div className="flex flex-wrap gap-5 mb-6">
          {project.location && (
            <div className="flex items-center gap-1.5" style={{ color: "#7a9a6a" }}>
              <MapPin style={{ width: "13px", height: "13px", color: "#d4a017" }} />
              <span className="text-xs font-medium uppercase tracking-wider">{project.location}</span>
            </div>
          )}
          {project.capacity && (
            <div className="flex items-center gap-1.5" style={{ color: "#7a9a6a" }}>
              <Zap style={{ width: "13px", height: "13px", color: "#d4a017" }} />
              <span className="text-xs font-medium uppercase tracking-wider">{project.capacity}</span>
            </div>
          )}
          {project.year && (
            <div className="flex items-center gap-1.5" style={{ color: "#7a9a6a" }}>
              <Calendar style={{ width: "13px", height: "13px", color: "#d4a017" }} />
              <span className="text-xs font-medium uppercase tracking-wider">{project.year}</span>
            </div>
          )}
        </div>

        {/* Impact badge */}
        {project.impact && (
          <div className="mb-6">
            <span
              className="inline-block text-[10px] font-black uppercase tracking-[0.25em] px-3 py-1.5"
              style={{
                border: "1px solid #3b6d11",
                color: "#97C459",
                borderRadius: "2px",
              }}
            >
              ↑ {project.impact}
            </span>
          </div>
        )}

        {/* CTA — bottom-aligned, bold */}
        <div className="mt-auto">
          <Link
            href={project.link}
            className="inline-flex items-center gap-3 font-black text-sm uppercase tracking-[0.2em] group/link transition-all duration-300"
            style={{ color: "#d4a017" }}
          >
            <span
              className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:bg-amber-400 after:w-0 group-hover/link:after:w-full after:transition-all after:duration-300"
            >
              View Project
            </span>
            <span
              className="flex items-center justify-center transition-all duration-300 group-hover/link:translate-x-2"
              style={{
                width: "28px",
                height: "28px",
                border: "1px solid #d4a017",
                borderRadius: "50%",
              }}
            >
              <ArrowRight style={{ width: "12px", height: "12px" }} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

/* ── PAGE ───────────────────────────────────────────────────── */
export default function ProjectsPage() {
  return (
    <>
      {/* Marquee ticker animation keyframes */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
          width: max-content;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.8s ease forwards; }
        .fade-up-1 { animation-delay: 0.1s; opacity: 0; }
        .fade-up-2 { animation-delay: 0.3s; opacity: 0; }
        .fade-up-3 { animation-delay: 0.5s; opacity: 0; }

        @keyframes lineGrow {
          from { width: 0; }
          to   { width: 60px; }
        }
        .line-grow {
          animation: lineGrow 0.8s 0.6s ease forwards;
          width: 0;
          display: inline-block;
        }
      `}</style>

      <main className="pt-20" style={{ background: "#f7f3e8" }}>

        {/* ══════════════════════════════════════════════════
            HERO — full-bleed video, massive kinetic type
        ══════════════════════════════════════════════════ */}
        <VideoBackdrop videoSrc="/videos/projects.mp4" minHeight="680px">
          <section
            className="relative text-white px-4 md:px-12 lg:px-20"
            style={{ paddingTop: "100px", paddingBottom: "100px" }}
          >
            {/* Dark scrub on video */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "linear-gradient(135deg, rgba(10,20,8,0.82) 0%, rgba(10,20,8,0.4) 60%, transparent 100%)" }}
            />

            <div className="relative z-10 max-w-7xl mx-auto">
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-6 fade-up fade-up-1">
                <div style={{ width: "32px", height: "2px", background: "#d4a017" }} />
                <span
                  className="text-[10px] font-black uppercase tracking-[0.4em]"
                  style={{ color: "#d4a017" }}
                >
                  Portfolio
                </span>
              </div>

              {/* GIANT headline — staggered lines */}
              <div className="mb-8 fade-up fade-up-2">
                <h1
                  className="font-black font-lexend leading-[0.9] tracking-tighter"
                  style={{ fontSize: "clamp(3.5rem, 12vw, 9rem)", color: "#f7f3e8" }}
                >
                  Our
                </h1>
                <h1
                  className="font-black font-lexend leading-[0.9] tracking-tighter"
                  style={{
                    fontSize: "clamp(3.5rem, 12vw, 9rem)",
                    WebkitTextStroke: "2px #d4a017",
                    color: "transparent",
                  }}
                >
                  Projects
                </h1>
              </div>

              {/* Subtext + decorative bracket */}
              <div
                className="max-w-xl fade-up fade-up-3"
                style={{
                  borderLeft: "3px solid #d4a017",
                  paddingLeft: "20px",
                }}
              >
                <p
                  className="font-lato leading-relaxed"
                  style={{ color: "#c8e0b0", fontSize: "1.1rem" }}
                >
                  Explore our portfolio of sustainable energy projects that
                  demonstrate our expertise and commitment to innovation across
                  Nepal.
                </p>
              </div>
            </div>
          </section>
        </VideoBackdrop>

        {/* ══════════════════════════════════════════════════
            TICKER — amber marquee strip
        ══════════════════════════════════════════════════ */}
        {/* <TickerText /> */}

        {/* ══════════════════════════════════════════════════
            CATEGORY FILTER — raw, mono, industrial
        ══════════════════════════════════════════════════ */}
        <section
          className="px-4 md:px-12 lg:px-20 py-8 border-b"
          style={{ background: "#0e1a0c", borderColor: "#1f3318" }}
        >
          <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-3">
            <span
              className="text-[10px] font-black uppercase tracking-[0.35em] mr-2"
              style={{ color: "#3b6d11" }}
            >
              Filter
            </span>
            {categories.map((cat) => (
              <button
                key={cat.name}
                className="flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300"
                style={{
                  border: "1px solid #2a4520",
                  color: "#7a9a6a",
                  background: "transparent",
                  borderRadius: "2px",
                  cursor: "pointer",
                }}
                onMouseEnter={e => {
                  const b = e.currentTarget;
                  b.style.background = "#d4a017";
                  b.style.color = "#0e1a0c";
                  b.style.borderColor = "#d4a017";
                }}
                onMouseLeave={e => {
                  const b = e.currentTarget;
                  b.style.background = "transparent";
                  b.style.color = "#7a9a6a";
                  b.style.borderColor = "#2a4520";
                }}
              >
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: cat.dot, flexShrink: 0 }} />
                {cat.name}
                <span style={{ opacity: 0.5 }}>({cat.count})</span>
              </button>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            FEATURED PROJECTS — editorial section header
        ══════════════════════════════════════════════════ */}
        <section
          className="px-4 md:px-12 lg:px-20"
          style={{ background: "#f7f3e8", paddingTop: "80px", paddingBottom: "100px" }}
        >
          <div className="max-w-7xl mx-auto">

            {/* Section header — split layout, brutalist */}
            <div
              className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8"
              style={{ borderBottom: "1px solid #d4c89a" }}
            >
              <div>
                <p
                  className="text-[10px] font-black uppercase tracking-[0.4em] mb-3"
                  style={{ color: "#3b6d11" }}
                >
                  What we've built
                </p>
                <h2
                  className="font-black font-lexend leading-[0.95] tracking-tighter"
                  style={{
                    fontSize: "clamp(2.5rem, 6vw, 5rem)",
                    color: "#0e1a0c",
                  }}
                >
                  Featured
                  <br />
                  <span style={{ WebkitTextStroke: "2px #2a4520", color: "transparent" }}>
                    Projects
                  </span>
                </h2>
              </div>

              {/* Right side — minimal metadata */}
              <div className="mt-6 md:mt-0 text-right">
                <p
                  className="text-xs uppercase tracking-widest font-bold mb-1"
                  style={{ color: "#8aaa78" }}
                >
                  Total
                </p>
                <p
                  className="font-black font-lexend"
                  style={{ fontSize: "3rem", color: "#0e1a0c", lineHeight: 1 }}
                >
                  {projectsData.length}
                </p>
                <p
                  className="text-xs uppercase tracking-widest"
                  style={{ color: "#8aaa78" }}
                >
                  active projects
                </p>
              </div>
            </div>

            {/* ── GRID — 2-col desktop, 1-col mobile ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projectsData.map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i} />
              ))}
            </div>

            {/* Bottom note */}
            <p
              className="mt-8 text-center text-xs uppercase tracking-widest font-bold"
              style={{ color: "#b0a878" }}
            >
              More projects coming soon ·{" "}
              <Link href="#" className="underline" style={{ color: "#3b6d11" }}>
                Stay updated
              </Link>
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            CALL TO ACTION
        ══════════════════════════════════════════════════ */}
        <CallToAction
          variant="primary"
          size="large"
          className="relative overflow-hidden"
        />
      </main>
    </>
  );
}