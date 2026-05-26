'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap } from 'lucide-react';

/* ── Brand tokens ──────────────────────────────────────────── */
const GREEN       = "#1a6644";
const GREEN_DARK  = "#0d2d1f";
const GREEN_MID   = "#1a5535";
const GREEN_LIGHT = "#edf5f0";
const GREEN_PALE  = "#f2f5f2";
const GREEN_GLOW  = "#6edfa0";
const GREEN_SAGE  = "#7aaa96";

const BLUE        = "#3489AE";
const BLUE_DARK   = "#1a4a64";
const BLUE_MID    = "#2a6f91";
const BLUE_LIGHT  = "#e8f4f9";
const BLUE_GLOW   = "#7ec8e3";

interface CTAProps {
  variant?: 'primary' | 'secondary' | 'minimal' | 'button';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  href?: string;
  children?: React.ReactNode;
}

const sizeMap = {
  small:  'py-10 px-6',
  medium: 'py-16 px-6 sm:px-10',
  large:  'py-20 px-6 sm:px-10 lg:px-16',
};

/* ── Shared keyframes ──────────────────────────────────────── */
const Keyframes = () => (
  <style>{`
    @keyframes ctaTicker {
      from { transform: translateX(0); }
      to   { transform: translateX(-50%); }
    }
    .cta-ticker { animation: ctaTicker 22s linear infinite; }

    @keyframes ctaPulse {
      0%, 100% { opacity: 0.05; }
      50%       { opacity: 0.12; }
    }
    .cta-pulse { animation: ctaPulse 5s ease-in-out infinite; }

    @keyframes gradPan {
      0%, 100% { background-position: 0% 50%; }
      50%       { background-position: 100% 50%; }
    }

    .cta-btn-green:hover  { background: ${GREEN_MID} !important; transform: scale(1.03); }
    .cta-btn-blue:hover   { background: ${BLUE_MID}  !important; transform: scale(1.03); }
    .cta-btn-ghost-green:hover { background: ${GREEN}22 !important; }
    .cta-btn-ghost-blue:hover  { background: ${BLUE}22  !important; }
    .cta-link-arrow { transition: transform 0.3s; }
    .cta-btn-green:hover .cta-link-arrow,
    .cta-btn-blue:hover  .cta-link-arrow { transform: translateX(5px); }
  `}</style>
);

/* ══════════════════════════════════════════════════════════════
   BUTTON VARIANT — inline dual-color stamp
══════════════════════════════════════════════════════════════ */
const ButtonVariant = ({ href, children, className }: CTAProps) => (
  <>
    <Keyframes />
    <Link
      href={href ?? '/contact'}
      className={`inline-flex items-center justify-center gap-3 font-black uppercase text-[11px] transition-all duration-300 cta-btn-green ${className ?? ''}`}
      style={{
        background: GREEN,
        color: '#fff',
        padding: '13px 28px',
        borderRadius: '4px',
        letterSpacing: '0.22em',
      }}
    >
      {children}
      <ArrowRight className="cta-link-arrow" style={{ width: '13px', height: '13px' }} />
    </Link>
  </>
);

/* ══════════════════════════════════════════════════════════════
   MINIMAL VARIANT — pale green bg, clean left-aligned
══════════════════════════════════════════════════════════════ */
const MinimalVariant = ({ size = 'medium', className = '' }: CTAProps) => (
  <>
    <Keyframes />
    <section
      className={`${sizeMap[size]} ${className}`}
      style={{ background: GREEN_PALE, borderTop: `1px solid ${GREEN}25` }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Dual eyebrow */}
        <div className="flex items-center gap-2 mb-5">
          <div style={{ width: 20, height: 2, background: GREEN, borderRadius: 2 }} />
          <span className="font-black uppercase text-[9px]" style={{ color: GREEN, letterSpacing: '0.38em' }}>Take action</span>
          <div style={{ width: 20, height: 2, background: BLUE, borderRadius: 2 }} />
        </div>

        <h2
          className="font-black font-lexend leading-[0.92] tracking-tighter mb-6"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', color: '#0d1a14' }}
        >
          Ready to Power{' '}
          <span style={{ WebkitTextStroke: `2px ${BLUE}`, color: 'transparent' }}>
            Your Future?
          </span>
        </h2>

        <p className="leading-relaxed mb-8 max-w-lg" style={{ color: '#4a6a5a', fontSize: '0.95rem' }}>
          Join the renewable energy revolution with Nepal's most trusted energy partner.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 font-black uppercase text-[10px] cta-btn-green transition-all duration-300"
            style={{ background: GREEN, color: '#fff', padding: '13px 26px', borderRadius: '4px', letterSpacing: '0.22em' }}
          >
            Get Started
            <ArrowRight className="cta-link-arrow" style={{ width: '12px', height: '12px' }} />
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 font-black uppercase text-[10px] cta-btn-ghost-blue transition-all duration-300"
            style={{ border: `1px solid ${BLUE}70`, color: BLUE, padding: '13px 26px', borderRadius: '4px', letterSpacing: '0.22em' }}
          >
            View Projects
          </Link>
        </div>
      </div>
    </section>
  </>
);

/* ══════════════════════════════════════════════════════════════
   SECONDARY VARIANT — dark panel, left-aligned, split colors
══════════════════════════════════════════════════════════════ */
const SecondaryVariant = ({ size = 'medium', className = '' }: CTAProps) => (
  <>
    <Keyframes />
    <section
      className={`${sizeMap[size]} ${className}`}
      style={{
        background: GREEN_DARK,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Blue accent glow — top-right */}
      <div style={{
        position: 'absolute', top: '-80px', right: '-80px',
        width: 280, height: 280, borderRadius: '50%',
        background: `radial-gradient(circle, ${BLUE}22 0%, transparent 70%)`,
        pointerEvents: 'none',
      }} />

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-10 relative z-10">
        {/* Left: text */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-5">
            <div style={{ width: 20, height: 2, background: GREEN_GLOW, borderRadius: 2 }} />
            <span className="font-black uppercase text-[9px]" style={{ color: GREEN_GLOW, letterSpacing: '0.38em' }}>Partnership</span>
            <div style={{ width: 20, height: 2, background: BLUE_GLOW, borderRadius: 2 }} />
          </div>

          <h2
            className="font-black font-lexend leading-[0.92] tracking-tighter mb-5"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#f0f8f4' }}
          >
            Transform Your{' '}
            <span style={{ WebkitTextStroke: `2px ${BLUE}`, color: 'transparent' }}>
              Energy Future
            </span>
          </h2>

          <div style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: '16px' }}>
            <p style={{ color: GREEN_SAGE, fontSize: '0.9rem', lineHeight: 1.7 }}>
              Partner with us to implement sustainable energy solutions that power your success.
            </p>
          </div>
        </div>

        {/* Right: CTA */}
        <div className="flex-shrink-0 flex flex-col gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 font-black uppercase text-[10px] cta-btn-green transition-all duration-300"
            style={{ background: GREEN, color: '#fff', padding: '16px 32px', borderRadius: '4px', letterSpacing: '0.22em' }}
          >
            Start Your Journey
            <ArrowRight className="cta-link-arrow" style={{ width: '13px', height: '13px' }} />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-3 font-black uppercase text-[10px] cta-btn-ghost-blue transition-all duration-300"
            style={{ border: `1px solid ${BLUE}60`, color: BLUE_GLOW, padding: '16px 32px', borderRadius: '4px', letterSpacing: '0.22em' }}
          >
            Our Services
            <Zap style={{ width: '12px', height: '12px' }} />
          </Link>
        </div>
      </div>
    </section>
  </>
);

/* ══════════════════════════════════════════════════════════════
   PRIMARY VARIANT — full hero-weight CTA block
══════════════════════════════════════════════════════════════ */
const PrimaryVariant = ({ size = 'large', className = '' }: CTAProps) => (
  <>
    <Keyframes />
    <section
      className={`${sizeMap[size]} ${className}`}
      style={{ background: GREEN_PALE }}
    >
      <div className="max-w-7xl mx-auto">

        {/* ── Main slab — animated green→blue gradient ── */}
        <div
          className="relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${GREEN_DARK} 0%, ${BLUE_DARK} 55%, ${GREEN_MID} 100%)`,
            backgroundSize: '200% 200%',
            animation: 'gradPan 10s ease infinite',
            borderRadius: '8px',
          }}
        >
          {/* Dot grid overlay */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }} />

          {/* Decorative rings */}
          <div style={{ position: 'absolute', left: '-80px', bottom: '-80px', width: 320, height: 320, borderRadius: '50%', border: `1px solid ${GREEN}40`, pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', right: '-80px', top: '-80px', width: 320, height: 320, borderRadius: '50%', border: `1px solid ${BLUE}40`, pointerEvents: 'none' }} />

          {/* Ghost watermark text */}
          <div className="cta-pulse absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden>
            <span
              className="font-black tracking-tighter whitespace-nowrap"
              style={{ fontSize: 'clamp(6rem, 18vw, 14rem)', color: '#ffffff', opacity: 0.04, lineHeight: 1 }}
            >
              ENERGY
            </span>
          </div>

          {/* Top dual-color rule */}
          <div style={{ height: '3px', background: `linear-gradient(to right, ${GREEN}, ${BLUE})`, width: '100%' }} />

          {/* Content */}
          <div className="relative z-10 px-8 md:px-16 lg:px-20 py-16 md:py-20">

            {/* Dual eyebrow */}
            <div className="flex items-center gap-2 mb-6">
              <div style={{ width: 24, height: 2, background: GREEN_GLOW, borderRadius: 2 }} />
              <span className="font-black uppercase text-[9px]" style={{ color: 'rgba(255,255,255,0.6)', letterSpacing: '0.42em' }}>Ready to act</span>
              <div style={{ width: 24, height: 2, background: BLUE_GLOW, borderRadius: 2 }} />
            </div>

            {/* Headline — green solid + blue outline */}
            <div className="mb-8 max-w-4xl">
              <h2
                className="font-black font-lexend leading-[0.88] tracking-tighter"
                style={{ fontSize: 'clamp(2.4rem, 7vw, 5.5rem)', color: '#f0f8f4' }}
              >
                Ready to Transform
              </h2>
              <h2
                className="font-black font-lexend leading-[0.88] tracking-tighter"
                style={{ fontSize: 'clamp(2.4rem, 7vw, 5.5rem)', WebkitTextStroke: `2px ${BLUE}`, color: 'transparent' }}
              >
                Your Energy Future?
              </h2>
            </div>

            {/* Body + actions */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
              <div style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: '18px', maxWidth: '480px' }}>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', lineHeight: 1.75 }}>
                  Join us in creating a sustainable tomorrow with innovative energy
                  solutions tailored to your specific needs.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 flex-shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 font-black uppercase text-[10px] cta-btn-green transition-all duration-300"
                  style={{ background: GREEN, color: '#fff', padding: '16px 32px', borderRadius: '4px', letterSpacing: '0.22em' }}
                >
                  Get Started
                  <ArrowRight className="cta-link-arrow" style={{ width: '13px', height: '13px' }} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-3 font-black uppercase text-[10px] cta-btn-ghost-blue transition-all duration-300"
                  style={{ border: `1px solid ${BLUE}70`, color: BLUE_GLOW, padding: '16px 32px', borderRadius: '4px', letterSpacing: '0.22em' }}
                >
                  Explore Services
                  <Zap style={{ width: '12px', height: '12px' }} />
                </Link>
              </div>
            </div>

            {/* Divider */}
            <div className="mt-16" style={{ borderTop: `1px solid rgba(255,255,255,0.08)` }} />

            {/* Ticker strip */}
            <div className="overflow-hidden pt-5 -mx-8 md:-mx-16 lg:-mx-20 px-8 md:px-16 lg:px-20">
              <div className="flex whitespace-nowrap cta-ticker" style={{ width: 'max-content' }}>
                {Array.from({ length: 8 }).map((_, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-5 mx-6 font-black uppercase text-[9px]"
                    style={{ color: 'rgba(255,255,255,0.2)', letterSpacing: '0.3em' }}
                  >
                    <span style={{ color: GREEN_GLOW }}>Sustainable Energy</span>
                    <span style={{ color: BLUE_GLOW, fontSize: '6px' }}>◆</span>
                    <span style={{ color: BLUE_GLOW }}>Nepal</span>
                    <span style={{ color: GREEN_GLOW, fontSize: '6px' }}>◆</span>
                    <span style={{ color: GREEN_GLOW }}>Solar Innovation</span>
                    <span style={{ color: BLUE_GLOW, fontSize: '6px' }}>◆</span>
                    <span style={{ color: BLUE_GLOW }}>Clean Power</span>
                    <span style={{ color: GREEN_GLOW, fontSize: '6px' }}>◆</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  </>
);

/* ── Export ────────────────────────────────────────────────── */
const CallToAction: React.FC<CTAProps> = (props) => {
  const { variant = 'primary' } = props;
  if (variant === 'button')    return <ButtonVariant    {...props} />;
  if (variant === 'minimal')   return <MinimalVariant   {...props} />;
  if (variant === 'secondary') return <SecondaryVariant {...props} />;
  return <PrimaryVariant {...props} />;
};

export default CallToAction;