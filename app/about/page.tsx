'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Check, Zap, Sun, Wind, Droplets, Leaf, BarChart2, Globe, Package, TrendingUp, GitMerge } from 'lucide-react';

// ─── Brand tokens ──────────────────────────────────────────────────────────────
const C = {
  green:       '#1a6644',
  greenDark:   '#0d2d1f',
  greenMid:    '#1a5535',
  greenLight:  '#edf5f0',
  greenPale:   '#f2f5f2',
  greenGlow:   '#6edfa0',

  blue:        '#3489AE',
  blueDark:    '#1a4a64',
  blueMid:     '#2a6f91',
  blueLight:   '#e8f4f9',
  bluePale:    '#f0f7fb',
  blueGlow:    '#7ec8e3',
} as const;

// ─── Animation hook ────────────────────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function FadeUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(32px)',
      transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

// ─── Data ──────────────────────────────────────────────────────────────────────
const expertise = [
  { icon: Sun,        title: 'Renewable Energy Development',  body: 'Developing and distributing renewable energy from sources such as solar, wind, thermal, hydropower, and bioenergy.',                                            accent: 'green' },
  { icon: BarChart2,  title: 'Feasibility Studies',           body: 'Conducting comprehensive feasibility studies and managing the planning and execution of energy infrastructure projects.',                                       accent: 'blue'  },
  { icon: Zap,        title: 'Solar System Design',           body: 'Designing, installing, and integrating tailored solar systems and smart energy solutions for residential and commercial clients.',                              accent: 'green' },
  { icon: Globe,      title: 'Energy Consultancy',            body: 'Offering consultancy services in the technical, financial, and policy domains of the energy industry.',                                                        accent: 'blue'  },
  { icon: Droplets,   title: 'Hydropower Projects',           body: 'Assisting in the development, operation, and maintenance of small, mini, and large-scale hydropower projects.',                                               accent: 'blue'  },
  { icon: Leaf,       title: 'Environmental Compliance',      body: 'Minimizing environmental impacts, implementing mitigation measures, and ensuring long-term benefits for local communities.',                                    accent: 'green' },
  { icon: Package,    title: 'Equipment Supply',              body: 'Importing and supplying high-quality solar, hydropower, and electrical equipment, along with logistics support.',                                              accent: 'blue'  },
  { icon: TrendingUp, title: 'Investment Facilitation',       body: 'Facilitating foreign investment and cooperating with government entities for energy and infrastructure projects.',                                             accent: 'green' },
  { icon: GitMerge,   title: 'Joint Ventures',                body: 'Forming Joint Ventures and Special Purpose Vehicles to implement and manage energy sector projects effectively.',                                             accent: 'blue'  },
];

const missionPoints = [
  'Develop renewable energy from sources such as solar, wind, thermal, hydropower, and bioenergy',
  'Design and implement sustainable energy solutions that meet the unique needs of each client',
  'Minimize environmental impacts while maximizing socioeconomic benefits',
];

const visionPoints = [
  'Become a leading provider of renewable energy solutions in the region',
  'Pioneer new approaches to energy generation, distribution, and management',
  'Create lasting positive impact on communities and the environment',
];

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handle = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);

  return (
    <main className="pt-20 pb-24" style={{ fontFamily: "'DM Sans', 'Helvetica Neue', Arial, sans-serif", background: '#f8f8f6' }}>

      {/* Fonts + global styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Playfair+Display:wght@700&display=swap');

        .expertise-card { transition: transform 0.35s ease, box-shadow 0.35s ease; }
        .expertise-card:hover { transform: translateY(-6px); box-shadow: 0 20px 48px rgba(0,0,0,0.09); }

        .icon-wrap { transition: background 0.3s ease, transform 0.3s ease; }
        .expertise-card.green-card:hover .icon-wrap { background: ${C.green}; transform: scale(1.08); }
        .expertise-card.blue-card:hover  .icon-wrap { background: ${C.blue};  transform: scale(1.08); }
        .expertise-card:hover .icon-wrap svg { color: #fff !important; }

        .dot-grid-green { background-image: radial-gradient(circle, #c4d8ca 1px, transparent 1px); background-size: 28px 28px; }
        .dot-grid-blue  { background-image: radial-gradient(circle, #bcd6e8 1px, transparent 1px); background-size: 28px 28px; }

        @keyframes gradientShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .hero-gradient {
          background: linear-gradient(135deg, ${C.greenDark} 0%, ${C.blueDark} 45%, ${C.greenMid} 80%, ${C.greenDark} 100%);
          background-size: 300% 300%;
          animation: gradientShift 12s ease infinite;
        }
        .cta-gradient {
          background: linear-gradient(135deg, ${C.greenDark} 0%, ${C.blueDark} 60%, ${C.greenDark} 100%);
          background-size: 200% 200%;
          animation: gradientShift 8s ease infinite;
        }
        .split-bg {
          background: linear-gradient(to right, ${C.greenPale} 50%, ${C.bluePale} 50%);
        }
        .cta-btn-green {
          background: ${C.green}; color: #fff;
          transition: background 0.25s ease, transform 0.25s ease;
        }
        .cta-btn-green:hover { background: ${C.greenMid}; transform: scale(1.03); }

        .stat-divider:not(:last-child) { border-right: 1px solid #e8e8e8; }
      `}</style>

      {/* ── HERO ────────────────────────────────────────────────────────────────── */}
      <section className="hero-gradient" style={{ position: 'relative', overflow: 'hidden', minHeight: 620, display: 'flex', alignItems: 'center' }}>

        {/* Parallax tint */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.18)', transform: `translateY(${scrollY * 0.25}px)` }} />

        {/* Decorative rings — green side */}
        <div style={{ position: 'absolute', left: '-140px', bottom: '-140px', width: 500, height: 500, borderRadius: '50%', border: `1px solid ${C.green}40` }} />
        <div style={{ position: 'absolute', left: '-80px',  bottom: '-80px',  width: 320, height: 320, borderRadius: '50%', border: `1px solid ${C.green}60` }} />

        {/* Decorative rings — blue side */}
        <div style={{ position: 'absolute', right: '-120px', top: '-120px', width: 600, height: 600, borderRadius: '50%', border: `1px solid ${C.blue}40` }} />
        <div style={{ position: 'absolute', right: '-60px',  top: '-60px',  width: 380, height: 380, borderRadius: '50%', border: `1px solid ${C.blue}60` }} />

        {/* Dot grid */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <div style={{ position: 'relative', zIndex: 2, padding: '88px 40px', maxWidth: 960, margin: '0 auto' }}>

          {/* Dual-color pill badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 0, borderRadius: 999, overflow: 'hidden', marginBottom: 36, border: '1px solid rgba(255,255,255,0.2)' }}>
            <span style={{ background: `${C.green}30`, color: C.greenGlow, fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '6px 16px' }}>Sustainable</span>
            <span style={{ background: `${C.blue}30`,  color: C.blueGlow,  fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '6px 16px' }}>Who we are</span>
          </div>

          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2.8rem, 6vw, 4.8rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.12, marginBottom: 28, maxWidth: 760 }}>
            About Janaki Energy
          </h1>

          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'rgba(255,255,255,0.72)', maxWidth: 620, lineHeight: 1.8, fontWeight: 300 }}>
            Nepal's leading renewable energy company, established to accelerate sustainable development
            through innovative solar, hydropower, and integrated energy solutions.
          </p>

          {/* Color legend strip */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginTop: 48 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: C.greenGlow }} />
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.06em' }}>Renewable &amp; Sustainability</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: C.blueGlow }} />
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.06em' }}>Technology &amp; Infrastructure</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── STAT BAR ──────────────────────────────────────────────────────────────── */}
      <section style={{ background: '#ffffff', borderBottom: '1px solid #eee' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 40px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
          {[
            { num: '5+',   label: 'Energy Sources',   color: C.green },
            { num: '100%', label: 'Clean Energy',      color: C.blue  },
            { num: 'C&I',  label: 'Solar Focus',       color: C.green },
            { num: 'NPL',  label: 'Based in Nepal',    color: C.blue  },
          ].map((s, i) => (
            <FadeUp key={s.label} delay={i * 80}>
              <div className="stat-divider" style={{ padding: '44px 24px', textAlign: 'center' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.4rem', fontWeight: 700, color: s.color, lineHeight: 1, marginBottom: 8 }}>
                  {s.num}
                </div>
                <div style={{ fontSize: 12, color: '#999', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{s.label}</div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── OUR STORY ────────────────────────────────────────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '108px 40px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 88, alignItems: 'center' }}>
          <FadeUp>
            <SectionLabel color={C.green}>Our Story</SectionLabel>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, color: '#111', lineHeight: 1.25, marginBottom: 32 }}>
              Built for Nepal's<br />sustainable future
            </h2>
            <p style={{ color: '#555', lineHeight: 1.9, marginBottom: 20, fontSize: 15 }}>
              Janaki Energy Private Limited was established with a clear mission to contribute to Nepal's
              sustainable energy future. As a growing company in the renewable energy sector, we specialize
              in developing and distributing clean energy from multiple sources including solar, hydropower,
              wind, thermal, and bioenergy systems.
            </p>
            <p style={{ color: '#555', lineHeight: 1.9, marginBottom: 20, fontSize: 15 }}>
              Our expertise spans across the entire energy value chain — from feasibility studies and
              project development to equipment supply and ongoing maintenance, always prioritizing
              environmental sustainability and local community benefits.
            </p>
            <p style={{ color: '#555', lineHeight: 1.9, fontSize: 15 }}>
              Today, we continue to expand our capabilities, working with both private enterprises and
              government entities to accelerate Nepal's transition to renewable energy. Our growing portfolio
              includes C&amp;I solar solutions, integrated battery storage systems, and comprehensive
              energy consultancy services.
            </p>
          </FadeUp>

          <FadeUp delay={120}>
            <div style={{ position: 'relative' }}>
              {/* Image placeholder */}
              <div style={{ width: '100%', aspectRatio: '4/5', background: `linear-gradient(135deg, ${C.greenLight} 0%, ${C.blueLight} 100%)`, borderRadius: 28, overflow: 'hidden', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 12 }}>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '45%', background: `linear-gradient(to top, ${C.greenDark}99 0%, transparent 100%)` }} />
                <Sun size={52} color={C.green} strokeWidth={1.2} />
                <span style={{ color: '#999', fontSize: 13 }}>Company Image</span>
              </div>

              {/* Green floating card */}
              <div style={{ position: 'absolute', bottom: -24, left: -36, background: C.green, borderRadius: 18, padding: '20px 28px', color: '#fff', boxShadow: `0 24px 48px ${C.green}44` }}>
                <div style={{ fontSize: 26, fontWeight: 700, fontFamily: "'Playfair Display', serif" }}>100%</div>
                <div style={{ fontSize: 12, opacity: 0.8, marginTop: 2 }}>Clean Energy Focus</div>
              </div>

              {/* Blue floating card */}
              <div style={{ position: 'absolute', top: -20, right: -28, background: C.blue, borderRadius: 18, padding: '16px 24px', color: '#fff', boxShadow: `0 16px 40px ${C.blue}44` }}>
                <div style={{ fontSize: 22, fontWeight: 700, fontFamily: "'Playfair Display', serif" }}>5+</div>
                <div style={{ fontSize: 11, opacity: 0.8, marginTop: 2 }}>Energy Sources</div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── MISSION & VISION ──────────────────────────────────────────────────────── */}
      <section className="split-bg" style={{ padding: '108px 40px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: 72 }}>
              <SectionLabelDual />
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, color: '#111' }}>
                What drives us
              </h2>
            </div>
          </FadeUp>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28 }}>
            <FadeUp delay={0}>
              <MvCard
                tag="Mission" tagColor={C.green}
                heading="Our Mission"
                body="Our mission is to contribute to the sustainable development of Nepal by developing and distributing renewable energy solutions that minimize environmental impacts while maximizing socioeconomic benefits. We are committed to providing innovative, reliable, and accessible clean energy technologies that empower communities and drive economic growth."
                points={missionPoints}
                accent={C.green}
                topBorder={C.green}
              />
            </FadeUp>
            <FadeUp delay={130}>
              <MvCard
                tag="Vision" tagColor={C.blue}
                heading="Our Vision"
                body="We envision becoming Nepal's leading renewable energy company, recognized for our innovative solutions, environmental stewardship, and positive community impact. Our goal is to accelerate the country's transition to sustainable energy while creating lasting economic opportunities and environmental benefits for all stakeholders."
                points={visionPoints}
                accent={C.blue}
                topBorder={C.blue}
              />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── EXPERTISE ─────────────────────────────────────────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '108px 40px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: 72 }}>
              <SectionLabelDual label="Capabilities" />
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, color: '#111' }}>
                Our Areas of Expertise
              </h2>
            </div>
          </FadeUp>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
            {expertise.map((item, i) => {
              const Icon = item.icon;
              const isBlue = item.accent === 'blue';
              const accentColor  = isBlue ? C.blue  : C.green;
              const bgColor      = isBlue ? C.blueLight  : C.greenLight;
              return (
                <FadeUp key={item.title} delay={i * 55}>
                  <div
                    className={`expertise-card ${isBlue ? 'blue-card' : 'green-card'}`}
                    style={{ background: '#fafafa', border: '1px solid #ebebeb', borderRadius: 22, padding: '32px 28px', cursor: 'default', position: 'relative', overflow: 'hidden' }}
                  >
                    {/* Top accent line */}
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: accentColor, borderRadius: '22px 22px 0 0', opacity: 0.7 }} />

                    <div className="icon-wrap" style={{ width: 50, height: 50, borderRadius: 15, background: bgColor, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                      <Icon size={22} color={accentColor} strokeWidth={1.6} />
                    </div>
                    <h3 style={{ fontSize: 16, fontWeight: 600, color: '#111', marginBottom: 10, lineHeight: 1.3 }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: 14, color: '#666', lineHeight: 1.78, margin: 0 }}>
                      {item.body}
                    </p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────────── */}
      <section className="cta-gradient" style={{ padding: '108px 40px', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative rings */}
        <div style={{ position: 'absolute', left: '-100px', top: '-100px', width: 420, height: 420, borderRadius: '50%', border: `1px solid ${C.green}40` }} />
        <div style={{ position: 'absolute', right: '-100px', bottom: '-100px', width: 420, height: 420, borderRadius: '50%', border: `1px solid ${C.blue}40` }} />

        <FadeUp>
          <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>

            {/* Dual pill */}
            <div style={{ display: 'inline-flex', borderRadius: 999, overflow: 'hidden', marginBottom: 28, border: '1px solid rgba(255,255,255,0.2)' }}>
              <span style={{ background: `${C.green}40`, color: C.greenGlow, fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '6px 16px' }}>Work with us</span>
              <span style={{ background: `${C.blue}40`,  color: C.blueGlow,  fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '6px 16px' }}>Get started</span>
            </div>

            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: 20 }}>
              Ready to power your future?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, marginBottom: 44, fontSize: 15 }}>
              Contact our team to learn how Janaki Energy can deliver innovative,
              sustainable energy solutions tailored to your needs.
            </p>

            {/* Dual CTA buttons */}
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <CtaBtn href="#contact" bg={C.green} shadow={C.green}>
                Get in touch <ArrowRight size={15} />
              </CtaBtn>
              <CtaBtn href="#services" bg={C.blue} shadow={C.blue} outline>
                Our services <ArrowRight size={15} />
              </CtaBtn>
            </div>
          </div>
        </FadeUp>
      </section>
    </main>
  );
}

// ─── Sub-components ────────────────────────────────────────────────────────────

function SectionLabel({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
      <div style={{ width: 24, height: 2, background: color, borderRadius: 2 }} />
      <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color }}>{children}</span>
    </div>
  );
}

function SectionLabelDual({ label = 'Purpose' }: { label?: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginBottom: 16 }}>
      <div style={{ width: 20, height: 2, background: '#1a6644', borderRadius: 2 }} />
      <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#555' }}>{label}</span>
      <div style={{ width: 20, height: 2, background: '#3489AE', borderRadius: 2 }} />
    </div>
  );
}

function MvCard({ tag, tagColor, heading, body, points, accent, topBorder }: {
  tag: string; tagColor: string; heading: string; body: string; points: string[]; accent: string; topBorder: string;
}) {
  return (
    <div style={{ background: '#ffffff', borderRadius: 24, padding: '40px 36px', boxShadow: '0 2px 28px rgba(0,0,0,0.06)', height: '100%', display: 'flex', flexDirection: 'column', borderTop: `4px solid ${topBorder}` }}>
      <div style={{ display: 'inline-block', background: tagColor + '18', border: `1px solid ${tagColor}35`, borderRadius: 999, padding: '4px 14px', fontSize: 12, fontWeight: 600, color: tagColor, letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginBottom: 24, alignSelf: 'flex-start' }}>
        {tag}
      </div>
      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, color: '#111', marginBottom: 18 }}>{heading}</h3>
      <p style={{ color: '#555', lineHeight: 1.88, fontSize: 14, marginBottom: 28 }}>{body}</p>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
        {points.map(pt => (
          <li key={pt} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
            <div style={{ width: 22, height: 22, borderRadius: 999, background: accent + '18', border: `1px solid ${accent}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
              <Check size={12} color={accent} strokeWidth={2.5} />
            </div>
            <span style={{ fontSize: 14, color: '#444', lineHeight: 1.68 }}>{pt}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CtaBtn({ children, href, bg, shadow, outline = false }: {
  children: React.ReactNode; href: string; bg: string; shadow: string; outline?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 10,
        background: outline ? 'transparent' : bg,
        color: outline ? '#fff' : '#fff',
        border: outline ? '1px solid rgba(255,255,255,0.35)' : 'none',
        fontWeight: 600, fontSize: 15,
        padding: '15px 34px', borderRadius: 999,
        textDecoration: 'none',
        boxShadow: !outline && hovered ? `0 12px 32px ${shadow}55` : 'none',
        opacity: outline && hovered ? 0.85 : 1,
        transform: hovered ? 'scale(1.03)' : 'scale(1)',
        transition: 'all 0.25s ease',
      }}
    >
      {children}
    </a>
  );
}