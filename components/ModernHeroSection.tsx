'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Sun, Zap } from 'lucide-react'

/* ── Brand tokens ──────────────────────────────────────────── */
const GREEN       = "#1a6644";
const GREEN_DARK  = "#0d2d1f";
const GREEN_MID   = "#1a5535";
const GREEN_LIGHT = "#edf5f0";
const GREEN_GLOW  = "#6edfa0";

const BLUE        = "#3489AE";
const BLUE_DARK   = "#1a4a64";
const BLUE_MID    = "#2a6f91";
const BLUE_GLOW   = "#7ec8e3";

const ModernHeroSection = () => {
  const [isLoaded, setIsLoaded]     = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => { setIsLoaded(true); }, []);

  const containerVariants = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, staggerChildren: 0.28 } },
  };
  const itemVariants = {
    hidden:  { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.25, 0, 1] } },
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: GREEN_DARK }}
    >
      {/* ── Animated gradient mesh background ── */}
      <div
        style={{
          position: "absolute", inset: 0, zIndex: 0,
          background: `
            radial-gradient(ellipse 80% 60% at 20% 50%, ${GREEN_MID}99 0%, transparent 60%),
            radial-gradient(ellipse 60% 70% at 80% 30%, ${BLUE_DARK}cc 0%, transparent 55%),
            radial-gradient(ellipse 50% 50% at 50% 100%, ${GREEN_DARK} 0%, transparent 70%)
          `,
        }}
      />

      {/* ── Dot grid ── */}
      <div
        style={{
          position: "absolute", inset: 0, zIndex: 0,
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* ── Decorative rings — green left ── */}
      <div style={{ position: "absolute", left: "-120px", bottom: "-120px", width: 480, height: 480, borderRadius: "50%", border: `1px solid ${GREEN}35`, zIndex: 0 }} />
      <div style={{ position: "absolute", left: "-60px",  bottom: "-60px",  width: 300, height: 300, borderRadius: "50%", border: `1px solid ${GREEN}50`, zIndex: 0 }} />

      {/* ── Decorative rings — blue right ── */}
      <div style={{ position: "absolute", right: "-140px", top: "-140px", width: 580, height: 580, borderRadius: "50%", border: `1px solid ${BLUE}30`, zIndex: 0 }} />
      <div style={{ position: "absolute", right: "-70px",  top: "-70px",  width: 360, height: 360, borderRadius: "50%", border: `1px solid ${BLUE}50`, zIndex: 0 }} />

      {/* ── Video (when available) ── */}
      <div className="absolute inset-0 z-0">
        {!videoLoaded && (
          <div
            style={{
              position: "absolute", inset: 0, zIndex: 10,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            <div style={{ position: "relative", width: 80, height: 80 }}>
              <div style={{
                position: "absolute", inset: 0,
                borderRadius: "50%",
                border: `3px solid ${BLUE}40`,
                borderTopColor: BLUE,
                animation: "spin 1s linear infinite",
              }} />
              <div style={{
                position: "absolute", inset: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Play style={{ width: 24, height: 24, color: "rgba(255,255,255,0.5)" }} />
              </div>
            </div>
          </div>
        )}

        <video
          autoPlay muted loop playsInline
          onLoadedData={() => setVideoLoaded(true)}
          style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover",
            opacity: videoLoaded ? 0.22 : 0,
            transition: "opacity 1.2s ease",
          }}
        >
          <source src="/hero/comhero.mp4" type="video/mp4" />
        </video>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>

      {/* ── Main content ── */}
      <div
        className="relative  w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center"
        style={{ zIndex: 10 }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >

          {/* Badge — dual pill */}
          <motion.div variants={itemVariants} style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
            <div style={{
              display: "inline-flex", borderRadius: 999, overflow: "hidden",marginTop:60,
              border: "1px solid rgba(255,255,255,0.18)",
            }}>
              <span style={{
                background: `${GREEN}35`, color: GREEN_GLOW,
                fontSize: 12, fontWeight: 700, letterSpacing: "0.1em",
                textTransform: "uppercase", padding: "7px 18px",
                display: "flex", alignItems: "center", gap: 6,
              }}>
                <span style={{ width: 7, height: 7, background: GREEN_GLOW, borderRadius: "50%", animation: "pulse 2s infinite" }} />
                Renewable Energy
              </span>
              <span style={{
                background: `${BLUE}35`, color: BLUE_GLOW,
                fontSize: 12, fontWeight: 700, letterSpacing: "0.1em",
                textTransform: "uppercase", padding: "7px 18px",
                display: "flex", alignItems: "center", gap: 6,
              }}>
                Nepal&apos;s Leading Solutions
                <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              fontWeight: 700,
              color: "#f0f8f4",
              lineHeight: 1.08,
              marginBottom: 12,
              letterSpacing: "-0.02em",
            }}
          >
            Powering Nepal&apos;s Future
          </motion.h1>

          {/* Outline headline — blue stroke */}
          <motion.h1
            variants={itemVariants}
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              fontWeight: 700,
              WebkitTextStroke: `2px ${BLUE}`,
              color: "transparent",
              lineHeight: 1.08,
              marginBottom: 32,
              letterSpacing: "-0.02em",
            }}
          >
            with Sustainable Energy
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: "clamp(1rem, 2vw, 1.15rem)",
              color: "rgba(255,255,255,0.68)",
              maxWidth: 620,
              margin: "0 auto 48px",
              lineHeight: 1.85,
              fontWeight: 300,
            }}
          >
            From large-scale solar installations to community hydropower projects, we deliver reliable,
            sustainable energy solutions across Nepal&apos;s diverse landscape.
          </motion.p>

          {/* CTA row */}
          <motion.div
            variants={itemVariants}
            style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 64 }}
          >
            {/* Primary — green */}
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
              style={{ background: GREEN, padding: "15px 36px", borderRadius: 999, fontSize: "0.95rem", letterSpacing: "0.02em" }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = GREEN_MID; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = GREEN; }}
            >
              Get Free Energy Assessment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Secondary — blue ghost */}
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 font-semibold transition-all duration-300 hover:scale-[1.03]"
              style={{
                border: `1.5px solid ${BLUE}80`, color: BLUE_GLOW,
                padding: "15px 36px", borderRadius: 999, fontSize: "0.95rem",
                letterSpacing: "0.02em", background: "transparent",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = `${BLUE}22`; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
            >
              View Portfolio
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Color-coded stats strip */}
          <motion.div
            variants={itemVariants}
            style={{
              display: "flex", justifyContent: "center", gap: 0,
              flexWrap: "wrap",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              paddingTop: 32,
            }}
          >
            {[
              { num: "5+",   label: "Energy Sources",    color: GREEN_GLOW },
              { num: "100%", label: "Clean Energy",       color: BLUE_GLOW  },
              { num: "C&I",  label: "Solar Focus",        color: GREEN_GLOW },
              { num: "NPL",  label: "Based in Nepal",     color: BLUE_GLOW  },
            ].map((s, i) => (
              <div
                key={s.label}
                style={{
                  textAlign: "center", padding: "0 32px",
                  borderRight: i < 3 ? "1px solid rgba(255,255,255,0.1)" : "none",
                }}
              >
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.9rem", fontWeight: 700, color: s.color, lineHeight: 1, marginBottom: 4,
                }}>
                  {s.num}
                </div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default ModernHeroSection;