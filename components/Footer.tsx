'use client';

import Link from 'next/link';
import { Linkedin, Mail, Phone, MapPin, ArrowRight, Sun, Zap } from 'lucide-react';


/* ── Brand tokens ──────────────────────────────────────────── */
const GREEN      = "#1a6644";
const GREEN_DARK = "#0d2d1f";
const GREEN_MID  = "#1a5535";
const GREEN_GLOW = "#6edfa0";
const GREEN_SAGE = "#7aaa96";

const BLUE       = "#3489AE";
const BLUE_DARK  = "#1a4a64";
const BLUE_GLOW  = "#7ec8e3";

const quickLinks = [
  { label: 'Home',       href: '/'        },
  { label: 'About Us',   href: '/about'   },
  { label: 'Services',   href: '/services'},
  { label: 'Projects',   href: '/projects'},
  { label: 'Contact',    href: '/contact' },
];

const services = [
  { label: 'Solar Energy Systems',       href: '/services/solar'       },
  { label: 'Renewable Energy Solutions', href: '/services/renewable'   },
  { label: 'Hydropower Development',     href: '/services/hydropower'  },
  { label: 'Energy Consultancy',         href: '/services/consultancy' },
  { label: 'Feasibility Studies',        href: '/services/feasibility' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: GREEN_DARK, color: '#fff', position: 'relative', zIndex: 20, overflow: 'hidden' }}>

      <style>{`
        @keyframes footerTicker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .footer-ticker { animation: footerTicker 28s linear infinite; }
        .footer-link { color: ${GREEN_SAGE}; font-size: 0.875rem; text-decoration: none; transition: color 0.25s ease, padding-left 0.25s ease; display: inline-flex; align-items: center; gap: 6px; }
        .footer-link:hover { color: #fff; padding-left: 4px; }
        .footer-link:hover .fl-arrow { opacity: 1; transform: translateX(0); }
        .fl-arrow { opacity: 0; transform: translateX(-4px); transition: opacity 0.2s ease, transform 0.2s ease; }
        .social-btn { display: flex; align-items: center; justify-content: center; width: 38px; height: 38px; border-radius: 10px; transition: background 0.25s ease, transform 0.25s ease; }
        .social-btn:hover { transform: translateY(-3px); }
      `}</style>

      {/* ── Decorative rings ── */}
      <div style={{ position: 'absolute', left: '-100px', top: '-100px', width: 360, height: 360, borderRadius: '50%', border: `1px solid ${GREEN}30`, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', right: '-120px', bottom: '-120px', width: 420, height: 420, borderRadius: '50%', border: `1px solid ${BLUE}25`, pointerEvents: 'none' }} />

      {/* ── Dot grid ── */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }} />

      {/* ── Top dual-color rule ── */}
      <div style={{ height: 3, background: `linear-gradient(to right, ${GREEN}, ${BLUE})`, width: '100%' }} />

      {/* ── Newsletter / pre-footer CTA strip ── */}
      {/* <div style={{ borderBottom: `1px solid rgba(255,255,255,0.06)`, padding: '40px 40px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
          {/* <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <div style={{ width: 18, height: 2, background: GREEN_GLOW, borderRadius: 2 }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: GREEN_GLOW }}>Get in touch</span>
              <div style={{ width: 18, height: 2, background: BLUE_GLOW, borderRadius: 2 }} />
            </div>
            <p style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f0f8f4', letterSpacing: '-0.01em' }}>
              Ready to start your renewable energy journey?
            </p>
          </div> */}
          {/* <Link
            href="/contact"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: GREEN, color: '#fff',
              padding: '13px 28px', borderRadius: 999,
              fontSize: '0.85rem', fontWeight: 700,
              letterSpacing: '0.04em', textDecoration: 'none',
              flexShrink: 0,
              transition: 'background 0.25s ease',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = GREEN_MID; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = GREEN; }}
          >
            Contact Us <ArrowRight size={14} />
          </Link> */}
        {/* </div>
      </div> */}

      {/* ── Main grid ── */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 40px 48px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 48 }}>

        {/* Brand column */}
        <div style={{ gridColumn: 'span 1' }}>
          {/* Logo mark */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <div style={{
              width: 40, height: 40, borderRadius: 10,
              background: `linear-gradient(135deg, ${GREEN}, ${BLUE})`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>

              <img src="/favicon.png" alt="" />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#f0f8f4', lineHeight: 1.1 }}>Janaki Energy</div>
              <div style={{ fontSize: 10, color: GREEN_GLOW, letterSpacing: '0.08em', textTransform: 'uppercase' as const }}>Pvt. Ltd.</div>
            </div>
          </div>

          <p style={{ fontSize: '0.875rem', color: GREEN_SAGE, lineHeight: 1.85, marginBottom: 28 }}>
            Forward-thinking energy company committed to advancing sustainable development through innovative and reliable energy solutions.
          </p>

          {/* Social */}
          <div style={{ display: 'flex', gap: 10 }}>
            <a
              href="https://www.linkedin.com/company/janaki-energy/"
              target="_blank" rel="noopener noreferrer"
              className="social-btn"
              style={{ background: `${BLUE}25`, color: BLUE_GLOW }}
              title="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="mailto:tapendra@investinfra.com"
              className="social-btn"
              style={{ background: `${GREEN}25`, color: GREEN_GLOW }}
              title="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <FooterHeading color={GREEN_GLOW} label="Quick Links" />
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {quickLinks.map(l => (
              <li key={l.href}>
                <Link href={l.href} className="footer-link">
                  <ArrowRight size={11} className="fl-arrow" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <FooterHeading color={BLUE_GLOW} label="Our Services" />
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {services.map(s => (
              <li key={s.href}>
                <Link href={s.href} className="footer-link">
                  <ArrowRight size={11} className="fl-arrow" />
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <FooterHeading color={GREEN_GLOW} label="Contact Us" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: `${GREEN}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <MapPin size={14} color={GREEN_GLOW} />
              </div>
              <p style={{ fontSize: '0.875rem', color: GREEN_SAGE, lineHeight: 1.6, margin: 0 }}>
                Kathmandu, Nepal
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: `${BLUE}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Phone size={14} color={BLUE_GLOW} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <a href="tel:+9779860805846" style={{ fontSize: '0.875rem', color: GREEN_SAGE, textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#fff'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = GREEN_SAGE; }}>
                  +977-9860805846
                </a>
                <a href="tel:+9779860680682" style={{ fontSize: '0.875rem', color: GREEN_SAGE, textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#fff'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = GREEN_SAGE; }}>
                  +977-9860680682
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: `${GREEN}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Mail size={14} color={GREEN_GLOW} />
              </div>
              <a
                href="mailto:tapendra@investinfra.com"
                style={{ fontSize: '0.875rem', color: GREEN_SAGE, textDecoration: 'none', transition: 'color 0.2s', wordBreak: 'break-all' as const }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#fff'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = GREEN_SAGE; }}
              >
                tapendra@investinfra.com
              </a>
            </div>

          </div>
        </div>
      </div>


      {/* ── Bottom bar ── */}
      <div style={{ borderTop: `1px solid rgba(255,255,255,0.06)`, padding: '20px 40px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.28)', margin: 0 }}>
            &copy; {year} Janaki Energy Pvt. Ltd. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 24 }}>
            {[
              { label: 'Privacy Policy',   href: '/privacy-policy'   },
              { label: 'Terms of Service', href: '/terms-of-service' },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.28)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#fff'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.28)'; }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

/* ── Sub-component ─────────────────────────────────────────── */
function FooterHeading({ label, color }: { label: string; color: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
      <div style={{ width: 16, height: 2, background: color, borderRadius: 2 }} />
      <h3 style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: '#f0f8f4', margin: 0 }}>
        {label}
      </h3>
    </div>
  );
}

export default Footer;