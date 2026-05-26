"use client";

import ModernHeroSection from "@/components/ModernHeroSection";
import ImpactSection from "@/components/ImpactSection";
import CallToAction from "@/components/CallToAction";
import VideoBackdrop from "@/components/VideoBackdrop";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, MapPin, Zap } from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   BRAND PALETTE
   Green  #1a6644  #0d2d1f  #1a5535  #edf5f0  #f2f5f2  #6edfa0
   Blue   #3489AE  #1a4a64  #2a6f91  #e8f4f9  #f0f7fb  #7ec8e3
   ───────────────────────────────────────────────────────────── */

const featuredProjects = [
  {
    id: "daunne-agro-farm-solar",
    title: "Daunne Agro Farm -576.6kWp Solar",
    description:
      "Our project features an integrated 576.6kWp/500 kWac ground-mounted solar system, designed to provide continuous and reliable energy to the industry.",
    link: "/projects/daunne-agro-farm-solar",
    category: "Solar Project",
    year: "2026",
    location: "Nawalparasi (Ba.Su.Pa), Nepal",
    capacity: "576.6kWp (500 kWac)",
    impact: "Generates 782.189 MWh/year",
    image: "/projects/Daune.jpeg",
    size: "large",
    accent: "green",
  },
  {
    id: "tariff-study",
    title: "Tariff Fixation Study",
    description:
      "Comprehensive preliminary study for tariff fixation for Solar PV system with Battery Energy Storage System (BESS) in Nepal.",
    link: "/projects/tariff-study",
    category: "Feasibility Study",
    year: "2024",
    location: "Nepal",
    capacity: "Study Analysis",
    impact: "Policy Framework",
    image: "/2.jpeg",
    size: "large",
    accent: "blue",
  },
  {
    id: "dhanushadham-solar",
    title: "6MW Solar with 5.625 MWh BESS - Dhanushadham",
    description:
      "Large-scale solar energy project with integrated Battery Energy Storage System in Dhanushadham Municipality, providing reliable renewable energy.",
    link: "/projects/dhanushadham-solar",
    category: "Solar Energy",
    year: "2024",
    location: "Dhanushadham Municipality",
    capacity: "6MW + 5.625MWh BESS",
    impact: "5,000+ households powered",
    image: "/dhanushadham.jpeg",
    size: "large",
    accent: "green",
  },
  {
    id: "nepal-pulp-paper-rooftop-solar",
    title: "Nepal Pulp and Paper Industry Rooftop Solar Project",
    description:
      "Design and feasibility study of a 504 kWp rooftop solar PV system to support clean and reliable energy generation for an industrial facility.",
    link: "/projects/nepal-pulp-paper-solar",
    category: "Industrial Solar",
    year: "2025",
    location: "Nepal",
    capacity: "504 kWp (440 kWac)",
    impact: "Reduced energy cost, lower carbon emissions, decreased diesel dependency",
    image: "/4.jpeg",
    size: "medium",
    accent: "blue",
  },
];

/* ── BRAND COLOURS ──────────────────────────────────────────── */
const GREEN      = "#1a6644";
const GREEN_DARK = "#0d2d1f";
const GREEN_MID  = "#1a5535";
const BLUE       = "#3489AE";
const BLUE_DARK  = "#1a4a64";

/* ── HOME PROJECT CARD ──────────────────────────────────────── */
interface HomeProjectCardProps {
  project: typeof featuredProjects[0];
  index: number;
  className?: string;
}

const HomeProjectCard = ({ project, index, className = "" }: HomeProjectCardProps) => {
  const isBlue   = project.accent === "blue";
  const accentHex = isBlue ? BLUE : GREEN;
  const isLarge  = project.size === "large";

  return (
    <div
      className={`group relative overflow-hidden flex flex-col ${className}`}
      style={{ background: "#0d1a14", borderRadius: "6px" }}
    >
      {/* Top accent stripe */}
      <div style={{ height: "3px", background: accentHex, opacity: 0.85 }} />

      {/* Image zone */}
      <div className="relative overflow-hidden" style={{ height: "240px", flexShrink: 0 }}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-[1100ms] ease-in-out group-hover:scale-[1.07]"
          style={{ opacity: 0.7 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, transparent 35%, #0d1a14 100%)" }}
        />
        {/* Category stamp */}
        <div className="absolute top-0 left-0">
          <span
            className="block px-4 py-2 font-black uppercase text-[9px]"
            style={{
              background: accentHex,
              color: "#ffffff",
              letterSpacing: "0.28em",
              borderRadius: "0 0 6px 0",
            }}
          >
            {project.category}
          </span>
        </div>
        {/* Ghost index */}
        <div
          className="absolute bottom-0 right-3 font-black leading-none select-none pointer-events-none"
          style={{ fontSize: "88px", color: `${accentHex}18`, lineHeight: 1 }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      {/* Text body */}
      <div className="flex flex-col flex-1 p-6">
        <h3
          className="font-black font-lexend leading-[1.05] tracking-tight mb-3 transition-colors duration-300"
          style={{
            fontSize: isLarge ? "1.2rem" : "1rem",
            color: "#f0f8f4",
          }}
        >
          {project.title}
        </h3>

        <p className="leading-relaxed mb-4 line-clamp-2" style={{ color: "#7aaa96", fontSize: "0.82rem" }}>
          {project.description}
        </p>

        {/* Animated divider */}
        <div
          className="mb-4 transition-all duration-700 group-hover:w-full"
          style={{ height: "1px", width: "36px", background: accentHex }}
        />

        {/* Stats */}
        <div className="flex flex-wrap gap-4 mb-4">
          {project.location && (
            <span className="flex items-center gap-1.5" style={{ color: "#6a9a86", fontSize: "10px" }}>
              <MapPin style={{ width: "11px", height: "11px", color: accentHex }} />
              <span className="uppercase font-semibold" style={{ letterSpacing: "0.1em" }}>{project.location}</span>
            </span>
          )}
          {project.capacity && (
            <span className="flex items-center gap-1.5" style={{ color: "#6a9a86", fontSize: "10px" }}>
              <Zap style={{ width: "11px", height: "11px", color: accentHex }} />
              <span className="uppercase font-semibold" style={{ letterSpacing: "0.1em" }}>{project.capacity}</span>
            </span>
          )}
          {project.year && (
            <span className="flex items-center gap-1.5" style={{ color: "#6a9a86", fontSize: "10px" }}>
              <Calendar style={{ width: "11px", height: "11px", color: accentHex }} />
              <span className="uppercase font-semibold" style={{ letterSpacing: "0.1em" }}>{project.year}</span>
            </span>
          )}
        </div>

        {/* Impact */}
        {project.impact && (
          <div className="mb-5">
            <span
              className="inline-block font-black uppercase text-[9px] px-3 py-1.5"
              style={{
                border: `1px solid ${accentHex}50`,
                color: accentHex,
                letterSpacing: "0.2em",
                borderRadius: "4px",
              }}
            >
              ↑ {project.impact}
            </span>
          </div>
        )}

        {/* CTA */}
        <div className="mt-auto">
          <Link
            href={project.link}
            className="inline-flex items-center gap-3 font-black uppercase text-[10px] group/link transition-all duration-300"
            style={{ color: accentHex, letterSpacing: "0.2em" }}
          >
            <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:bg-current after:w-0 group-hover/link:after:w-full after:transition-all after:duration-300">
              View Details
            </span>
            <span
              className="flex items-center justify-center transition-all duration-300 group-hover/link:translate-x-2"
              style={{
                width: "26px", height: "26px",
                border: `1px solid ${accentHex}`,
                borderRadius: "50%",
              }}
            >
              <ArrowRight style={{ width: "11px", height: "11px" }} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

/* ── PAGE ───────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee 30s linear infinite; width: max-content; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fu   { animation: fadeUp 0.75s ease both; }
        .fu-1 { animation-delay: 0.05s; }
        .fu-2 { animation-delay: 0.2s;  }
        .fu-3 { animation-delay: 0.38s; }
        .fu-4 { animation-delay: 0.55s; }

        @keyframes gradientPan {
          0%, 100% { background-position: 0% 50%; }
          50%       { background-position: 100% 50%; }
        }
      `}</style>

      <div className="flex min-h-screen flex-col">

        {/* ── HERO ─────────────────────────────────────────────── */}
        <ModernHeroSection />

        {/* ── IMPACT ───────────────────────────────────────────── */}
        <ImpactSection />

        {/* ── VIDEO BACKDROP ───────────────────────────────────── */}
        <VideoBackdrop videoSrc="/videos/solar-energy.mp4" minHeight="600px">
          <div
            className="relative w-full h-full flex flex-col items-start justify-end py-8 px-8 md:px-16 lg:px-24"
            style={{ paddingBottom: "100px", paddingTop: "100px" }}
          >
            {/* Dual-color gradient scrub */}
            <div
              className="absolute inset-0 pointer-events-none  "
              style={{
                background:
                  `linear-gradient(135deg, ${GREEN_DARK}ee 0%, ${BLUE_DARK}99 55%, transparent 100%)`,
              }}
            />

            <div className="relative z-10 max-w-2xl">
              {/* Eyebrow — dual pill */}
              <div className="flex items-center gap-0 mb-6 fu fu-1" style={{ borderRadius: 999, overflow: "hidden", display: "inline-flex", border: "1px solid rgba(255,255,255,0.18)" }}>
                <span className="block px-4 py-2 font-black uppercase text-[9px]" style={{ background: `${GREEN}40`, color: "#6edfa0", letterSpacing: "0.3em" }}>Our Mission</span>
                <span className="block px-4 py-2 font-black uppercase text-[9px]" style={{ background: `${BLUE}40`,  color: "#7ec8e3", letterSpacing: "0.3em" }}>Sustainability</span>
              </div>

              {/* Headline split */}
              <div className="mb-6 fu fu-2 ">
                <h2
                  className="font-black font-lexend leading-[0.9] tracking-tighter"
                  style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)", color: "#f0f8f4" }}
                >
                  Renewable Energy
                </h2>
                <h2
                  className="font-black font-lexend leading-[0.9] tracking-tighter"
                  style={{
                    fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
                    WebkitTextStroke: `2px ${BLUE}`,
                    color: "transparent",
                  }}
                >
                  For A Sustainable Future
                </h2>
              </div>

              {/* Body — green left border */}
              <div className="mb-8 fu fu-3" style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "18px" }}>
                <p className="leading-relaxed" style={{ color: "#b8dcc8", fontSize: "1rem" }}>
                  Our commitment to sustainable energy solutions drives positive change for communities and the environment.
                </p>
              </div>

              {/* Dual CTA */}
              <div className="flex flex-wrap items-center gap-4 fu fu-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 font-black uppercase text-[11px] transition-all duration-300 group/btn"
                  style={{ background: GREEN, color: "#fff", padding: "14px 28px", borderRadius: "4px", letterSpacing: "0.2em" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = GREEN_MID; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = GREEN; }}
                >
                  Learn Our Story
                  <ArrowRight style={{ width: "14px", height: "14px" }} className="transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-3 font-black uppercase text-[11px] transition-all duration-300 group/btn2"
                  style={{ border: `1px solid ${BLUE}99`, color: "#7ec8e3", padding: "14px 28px", borderRadius: "4px", letterSpacing: "0.2em" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = `${BLUE}25`; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
                >
                  View Projects
                  <ArrowRight style={{ width: "14px", height: "14px" }} className="transition-transform duration-300 group-hover/btn2:translate-x-1.5" />
                </Link>
              </div>
            </div>
          </div>
        </VideoBackdrop>

        {/* ── FEATURED PROJECTS ─────────────────────────────────── */}
        <section
          style={{ background: "#f4f8f6", paddingTop: "88px", paddingBottom: "100px" }}
          className="px-6 sm:px-10 lg:px-20"
        >
          <div className="max-w-7xl mx-auto">

            {/* Section header */}
            <div
              className="flex flex-col md:flex-row md:items-end justify-between pb-10 mb-14"
              style={{ borderBottom: "1px solid #c8ddd4" }}
            >
              <div>
                {/* Dual line label */}
                <div className="flex items-center gap-2 mb-3">
                  <div style={{ width: 20, height: 2, background: GREEN, borderRadius: 2 }} />
                  <span className="font-black uppercase text-[9px]" style={{ color: GREEN, letterSpacing: "0.4em" }}>Portfolio</span>
                  <div style={{ width: 20, height: 2, background: BLUE, borderRadius: 2 }} />
                </div>
                <h2
                  className="font-black font-lexend leading-[0.92] tracking-tighter"
                  style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", color: "#0d1a14" }}
                >
                  Featured
                  <br />
                  <span style={{ WebkitTextStroke: `2px ${GREEN_DARK}`, color: "transparent" }}>
                    Projects
                  </span>
                </h2>
              </div>

              <div className="mt-6 md:mt-0 md:text-right">
                <p className="font-black uppercase text-[9px] mb-1" style={{ color: "#8aaa96", letterSpacing: "0.25em" }}>
                  Across Nepal
                </p>
                <p className="leading-relaxed max-w-xs" style={{ color: "#4a6e5a", fontSize: "0.9rem" }}>
                  Delivering sustainable energy solutions across Nepal&apos;s diverse landscape.
                </p>
              </div>
            </div>

            {/* 2-column grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {featuredProjects.map((project, index) => (
                <HomeProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  className="min-h-[420px]"
                />
              ))}
            </div>

            {/* View All strip */}
            <div className="mt-12">
              <Link
                href="/projects"
                className="flex items-center justify-between w-full group/all transition-all duration-300"
                style={{ background: GREEN_DARK, padding: "20px 32px", borderRadius: "6px" }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = BLUE_DARK; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = GREEN_DARK; }}
              >
                <span className="font-black uppercase" style={{ color: "#f0f8f4", letterSpacing: "0.15em", fontSize: "0.85rem" }}>
                  View All Projects
                </span>
                <span className="flex items-center gap-3">
                  <span className="font-black uppercase text-[9px]" style={{ color: "#6edfa0", letterSpacing: "0.3em" }}>
                    {featuredProjects.length} shown · more available
                  </span>
                  <span
                    className="flex items-center justify-center transition-transform duration-300 group-hover/all:translate-x-2"
                    style={{ width: "32px", height: "32px", border: `1px solid ${BLUE}`, borderRadius: "50%", color: BLUE }}
                  >
                    <ArrowRight style={{ width: "13px", height: "13px" }} />
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── CALL TO ACTION ────────────────────────────────────── */}
        <CallToAction />
      </div>
    </>
  );
}