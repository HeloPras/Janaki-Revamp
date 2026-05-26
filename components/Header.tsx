'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Sun, Zap, Droplets, FileText, Users, BarChart2, ArrowRight } from 'lucide-react'

/* ── Brand tokens ──────────────────────────────────────────── */
const GREEN      = "#1a6644"
const GREEN_DARK = "#0d2d1f"
const GREEN_MID  = "#1a5535"
const GREEN_GLOW = "#6edfa0"
const BLUE       = "#3489AE"
const BLUE_DARK  = "#1a4a64"
const BLUE_MID   = "#2a6f91"
const BLUE_GLOW  = "#7ec8e3"

/* ── Nav data ──────────────────────────────────────────────── */
const primaryNav = [
  { label: 'Home',            href: '/'          },
  { label: 'Projects',        href: '/projects'  },
  { label: 'Article',         href: '/article'   },
  { label: 'Company Profile', href: '/documents' },
  { label: 'Contact',         href: '/contact'   },
]

const aboutItems = [
  { label: 'About Us',          href: '/about',              icon: Sun,      desc: 'Our story & mission'        },
  { label: 'Board of Directors', href: '/board-of-directors', icon: Users,    desc: 'Leadership & governance'    },
  { label: 'Our Team',           href: '/our-team',           icon: Users,    desc: 'Meet the people behind us'  },
]

const serviceItems = [
  { label: 'Solar Energy',      href: '/services/solar',       icon: Sun,       desc: 'Rooftop & ground-mount solar'  },
  { label: 'Hydropower',        href: '/services/hydropower',  icon: Droplets,  desc: 'Small & large-scale hydro'     },
  { label: 'Renewable Energy',  href: '/services/renewable',   icon: Zap,       desc: 'Integrated clean energy'       },
  { label: 'Consultancy',       href: '/services/consultancy', icon: BarChart2, desc: 'Technical & policy advisory'   },
  { label: 'Feasibility Studies',href: '/services/feasibility',icon: FileText,  desc: 'Project viability analysis'    },
]

/* ── Dropdown panel ────────────────────────────────────────── */
interface DropdownItem { label: string; href: string; icon: React.ElementType; desc: string }

function DropdownPanel({
  items, accentColor, accentGlow, allHref, allLabel, pathname, close,
}: {
  items: DropdownItem[]; accentColor: string; accentGlow: string;
  allHref?: string; allLabel?: string; pathname: string; close: () => void;
}) {
  return (
    <div style={{
      position: 'absolute', top: 'calc(100% +6px )', left: '50%',
      transform: 'translateX(-50%)',
      background: '#fff',
      borderRadius: 14,
      boxShadow: '0 16px 48px rgba(0,0,0,0.13), 0 2px 8px rgba(0,0,0,0.06)',
      border: '1px solid #eee',
      padding: '8px',
      minWidth: 260,
      zIndex: 100,
      overflow: 'hidden',
      // margin:'15px',
    }}>
      {/* Top color bar */}
      {/* <div style={{ height: 2, background: `linear-gradient(to right, ${accentColor}, ${accentGlow})`, borderRadius: 2, marginBottom: 8 }} /  > */}

      {allHref && (
        <>
          <Link href={allHref} onClick={close} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '9px 12px', borderRadius: 8,
            fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' as const,
            color: accentColor, textDecoration: 'none',
            background: `${accentColor}0e`,
            transition: 'background 0.2s',
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = `${accentColor}1a` }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = `${accentColor}0e` }}
          >
            {allLabel} <ArrowRight size={12} />
          </Link>
          <div style={{ height: 1, background: '#f0f0f0', margin: '6px 0' }} />
        </>
      )}

      {items.map(item => {
        const Icon = item.icon
        const isActive = pathname === item.href
        return (
          <Link key={item.href} href={item.href} onClick={close} style={{
            display: 'flex', alignItems: 'center', gap: 12,
            padding: '10px 12px', borderRadius: 10, textDecoration: 'none',
            background: isActive ? `${accentColor}12` : 'transparent',
            transition: 'background 0.2s',
          }}
            onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLAnchorElement).style.background = '#f7f7f7' }}
            onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLAnchorElement).style.background = 'transparent' }}
          >
            <div style={{
              width: 34, height: 34, borderRadius: 9, flexShrink: 0,
              background: isActive ? accentColor : `${accentColor}15`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.2s',
            }}>
              <Icon size={15} color={isActive ? '#fff' : accentColor} strokeWidth={1.7} />
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: isActive ? accentColor : '#111', lineHeight: 1.2 }}>{item.label}</div>
              <div style={{ fontSize: 11, color: '#888', marginTop: 2 }}>{item.desc}</div>
            </div>
            {isActive && <div style={{ marginLeft: 'auto', width: 6, height: 6, borderRadius: '50%', background: accentColor, flexShrink: 0 }} />}
          </Link>
        )
      })}
    </div>
  )
}

/* ── Main Header ───────────────────────────────────────────── */
const Header = () => {
  const [mobileOpen, setMobileOpen]     = useState(false)
  const [scrolled, setScrolled]         = useState(false)
  const [openDropdown, setOpenDropdown] = useState<'services' | 'about' | null>(null)
  const pathname  = usePathname()
  const isHome    = pathname === '/' || pathname === '/home'
  const headerRef = useRef<HTMLElement>(null)

  /* Scroll listener */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Click outside → close dropdown */
  useEffect(() => {
    const handler = (e: MouseEvent | TouchEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handler)
    document.addEventListener('touchstart', handler)
    return () => {
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('touchstart', handler)
    }
  }, [])

  /* Close mobile menu on route change */
  useEffect(() => { setMobileOpen(false); setOpenDropdown(null) }, [pathname])

  /* ── Computed styles ── */
  const isScrolledHome  = isHome && scrolled
  const isTransparent   = isHome && !scrolled

  const headerBg = isScrolledHome
    ? 'rgba(255,255,255,0.97)'
    : isTransparent
      ? 'transparent'
      : GREEN_DARK

  const headerShadow = scrolled ? '0 2px 24px rgba(0,0,0,0.10)' : 'none'

  const textColor   = isScrolledHome ? '#111'   : '#fff'
  const mutedColor  = isScrolledHome ? '#555'   : 'rgba(255,255,255,0.75)'
  const activeColor = isScrolledHome ? BLUE     : '#fff'

  const isServicesActive = pathname.startsWith('/services')
  const isAboutActive    = ['/about', '/board-of-directors', '/our-team'].includes(pathname)

  const toggle = useCallback((key: 'services' | 'about') => {
    setOpenDropdown(prev => prev === key ? null : key)
  }, [])

  /* ── Nav link helper ── */
  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const isActive = pathname === href
    return (
      <Link href={href} style={{
        position: 'relative', padding: '6px 10px',
        fontSize: 13, fontWeight: isActive ? 700 : 500,
        color: isActive ? activeColor : mutedColor,
        textDecoration: 'none',
        transition: 'color 0.2s',
      }}
        onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = isScrolledHome ? BLUE : '#fff' }}
        onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = isActive ? activeColor : mutedColor }}
      >
        {label}
        {isActive && (
          <span style={{
            position: 'absolute', bottom: 0, left: '10px', right: '10px',
            height: 2, borderRadius: 1,
            background: isScrolledHome ? BLUE : '#fff',
          }} />
        )}
      </Link>
    )
  }

  /* ── Dropdown trigger ── */
  const DropTrigger = ({
    label, isActive, isOpen, onClick,
  }: { label: string; isActive: boolean; isOpen: boolean; onClick: () => void }) => (
    <button onClick={onClick} style={{
      position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 4,
      padding: '6px 10px', border: 'none', background: 'transparent', cursor: 'pointer',
      fontSize: 13, fontWeight: isActive ? 700 : 500,
      color: isActive || isOpen ? activeColor : mutedColor,
      transition: 'color 0.2s',
    }}
      onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = isScrolledHome ? BLUE : '#fff' }}
      onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = isActive || isOpen ? activeColor : mutedColor }}
    >
      {label}
      <ChevronDown size={13} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.25s' }} />
      {isActive && (
        <span style={{ position: 'absolute', bottom: 0, left: '10px', right: '10px', height: 2, borderRadius: 1, background: isScrolledHome ? BLUE : '#fff' }} />
      )}
    </button>
  )

  return (
    <>
      <style>{`
        @keyframes slideDown { from { opacity:0; transform:translateX(-50%) translateY(-6px); } to { opacity:1; transform:translateX(-50%) translateY(0); } }
        @keyframes mobileIn  { from { opacity:0; transform:translateX(100%); } to { opacity:1; transform:translateX(0); } }
        @keyframes mobileOut { from { opacity:1; transform:translateX(0); } to { opacity:0; transform:translateX(100%); } }
        .dropdown-anim { animation: slideDown 0.18s ease both; }
      `}</style>

      <header ref={headerRef} className='h-20'  style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: headerBg,
        boxShadow: headerShadow,
        transition: 'background 0.35s ease, box-shadow 0.35s ease',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}>
        {/* Top gradient bar — only on non-transparent state */}
        {!isTransparent && (
          <div style={{ height: 2, background: `linear-gradient(to right, ${GREEN}, ${BLUE})` }} />
        )}

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>

            {/* ── Logo ── */}
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 }}>
              <div style={{ position: 'relative', width: 44, height: 44 }}>
                <Image src="/logo.svg" alt="Janaki Energy" fill priority style={{ objectFit: 'contain' }} />
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 800, color: textColor, lineHeight: 1.1, transition: 'color 0.3s' }}>
                  Janaki Energy
                </div>
                <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: isScrolledHome ? GREEN : GREEN_GLOW, transition: 'color 0.3s' }}>
                  Pvt. Ltd.
                </div>
              </div>
            </Link>

            {/* ── Desktop nav ── */}
            <nav className="hidden md:flex" style={{ alignItems: 'center', gap: 2 }}>
              <NavLink href="/" label="Home" />

              {/* Who We Are dropdown */}
              <div style={{ position: 'relative' }}
                onMouseEnter={() => setOpenDropdown('about')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <DropTrigger
                  label={isAboutActive ? (aboutItems.find(i => i.href === pathname)?.label ?? 'Who We Are') : 'Who We Are'}
                  isActive={isAboutActive} isOpen={openDropdown === 'about'}
                  onClick={() => toggle('about')}
                />
                {openDropdown === 'about' && (
                  <div className="dropdown-anim">
                    <DropdownPanel
                      items={aboutItems} accentColor={GREEN} accentGlow={GREEN_GLOW}
                      pathname={pathname} close={() => setOpenDropdown(null)}
                    />
                  </div>
                )}
              </div>

              {/* Services dropdown */}
              <div style={{ position: 'relative' }}
                onMouseEnter={() => setOpenDropdown('services')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <DropTrigger
                  label={isServicesActive ? (serviceItems.find(i => i.href === pathname)?.label ?? 'Services') : 'Services'}
                  isActive={isServicesActive} isOpen={openDropdown === 'services'}
                  onClick={() => toggle('services')}
                />
                {openDropdown === 'services' && (
                  <div className="dropdown-anim">
                    <DropdownPanel
                      items={serviceItems} accentColor={BLUE} accentGlow={BLUE_GLOW}
                      allHref="/services" allLabel="All Services"
                      pathname={pathname} close={() => setOpenDropdown(null)}
                    />
                  </div>
                )}
              </div>

              {primaryNav.slice(1).map(item => <NavLink key={item.href} href={item.href} label={item.label} />)}

              {/* CTA */}
              <Link href="/contact" style={{
                marginLeft: 12, display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '9px 20px', borderRadius: 999, fontSize: 13, fontWeight: 700,
                textDecoration: 'none', transition: 'all 0.25s ease',
                background: isScrolledHome ? GREEN : 'rgba(255,255,255,0.15)',
                color: '#fff',
                border: isScrolledHome ? 'none' : '1px solid rgba(255,255,255,0.3)',
                backdropFilter: !isScrolledHome ? 'blur(8px)' : 'none',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = isScrolledHome ? GREEN_MID : 'rgba(255,255,255,0.25)'; (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.03)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = isScrolledHome ? GREEN : 'rgba(255,255,255,0.15)'; (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)' }}
              >
                Get a Quote <ArrowRight size={13} />
              </Link>
            </nav>

            {/* ── Mobile menu toggle ── */}
            <button
              className="md:hidden"
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Toggle menu"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: 40, height: 40, borderRadius: 10, border: 'none',
                background: isScrolledHome ? '#f2f2f2' : 'rgba(255,255,255,0.15)',
                color: textColor, cursor: 'pointer', transition: 'background 0.2s',
              }}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile overlay ── */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.45)',
            zIndex: 49, backdropFilter: 'blur(2px)',
            animation: 'fadeIn 0.2s ease',
          }}
        />
      )}

      {/* ── Mobile panel ── */}
      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0,
        width: '100%', maxWidth: 340, zIndex: 50,
        background: GREEN_DARK,
        transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.32s cubic-bezier(0.22, 1, 0.36, 1)',
        overflowY: 'auto',
        display: 'flex', flexDirection: 'column',
      }}>
        {/* Top gradient rule */}
        <div style={{ height: 3, background: `linear-gradient(to right, ${GREEN}, ${BLUE})`, flexShrink: 0 }} />

        {/* Panel header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          // padding: '20px 24px', borderBottom: 'rgba(255,255,255,0.08) 1px solid',
          flexShrink: 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ position: 'relative', width: 36, height: 36 }}>
              <Image src="/logo.svg" alt="Janaki Energy" fill style={{ objectFit: 'contain' }} />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: 14, color: '#fff' }}>Janaki Energy</div>
              <div style={{ fontSize: 9, color: GREEN_GLOW, letterSpacing: '0.1em', textTransform: 'uppercase' as const }}>Pvt. Ltd.</div>
            </div>
          </div>
          <button onClick={() => setMobileOpen(false)} style={{
            width: 36, height: 36, borderRadius: 8, border: 'none',
            background: 'rgba(255,255,255,0.1)', color: '#fff', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <X size={18} />
          </button>
        </div>

        {/* Links */}
        <nav style={{ flex: 1, padding: '16px 16px 24px', display: 'flex', flexDirection: 'column', gap: 2 }}>

          {/* Primary links */}
          {primaryNav.map(item => {
            const isActive = pathname === item.href
            return (
              <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} style={{
                padding: '11px 14px', borderRadius: 10, fontSize: 14, fontWeight: isActive ? 700 : 500,
                color: isActive ? '#fff' : 'rgba(255,255,255,0.72)',
                textDecoration: 'none',
                background: isActive ? `${GREEN}` : 'transparent',
                // borderLeft: isActive ? `3px solid ${GREEN_GLOW}` : '3px solid transparent',
                transition: 'background 0.2s, color 0.2s',
                display: 'block',
              }}>
                {item.label}
              </Link>
            )
          })}

          {/* Who We Are section */}
          <MobileSection label="Who We Are" accentColor={GREEN} accentGlow={GREEN_GLOW}>
            {aboutItems.map(item => <MobileSubLink key={item.href} item={item} pathname={pathname} accentColor={GREEN} close={() => setMobileOpen(false)} />)}
          </MobileSection>

          {/* Services section */}
          <MobileSection label="Services" accentColor={BLUE} accentGlow={BLUE_GLOW}>
            <Link href="/services" onClick={() => setMobileOpen(false)} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '9px 14px', borderRadius: 8, fontSize: 13, fontWeight: 700,
              color: BLUE_GLOW, textDecoration: 'none',
              background: `${BLUE}18`,
            }}>
              All Services <ArrowRight size={12} />
            </Link>
            {serviceItems.map(item => <MobileSubLink key={item.href} item={item} pathname={pathname} accentColor={BLUE} close={() => setMobileOpen(false)} />)}
          </MobileSection>
        </nav>

        {/* CTA */}
        <div style={{ padding: '16px 16px 32px', flexShrink: 0, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <Link href="/contact" onClick={() => setMobileOpen(false)} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            padding: '14px', borderRadius: 999, width: '100%',
            background: GREEN, color: '#fff',
            fontSize: 14, fontWeight: 700, textDecoration: 'none',
            textAlign: 'center' as const,
          }}>
            Get a Quote <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @media (min-width: 768px) { .md\\:flex { display: flex !important; } .md\\:hidden { display: none !important; } }
      `}</style>
    </>
  )
}

/* ── Mobile sub-components ─────────────────────────────────── */
function MobileSection({ label, accentColor, accentGlow, children }: {
  label: string; accentColor: string; accentGlow: string; children: React.ReactNode
}) {
  return (
    <div style={{ marginTop: 8 }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 6,
        padding: '8px 14px 6px', marginBottom: 4,
      }}>
        <div style={{ width: 14, height: 2, background: accentColor, borderRadius: 1 }} />
        <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: accentGlow }}>
          {label}
        </span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {children}
      </div>
    </div>
  )
}

function MobileSubLink({ item, pathname, accentColor, close }: {
  item: DropdownItem; pathname: string; accentColor: string; close: () => void
}) {
  const Icon     = item.icon
  const isActive = pathname === item.href
  return (
    <Link href={item.href} onClick={close} style={{
      display: 'flex', alignItems: 'center', gap: 10,
      padding: '9px 14px', borderRadius: 10, textDecoration: 'none',
      background: isActive ? `${accentColor}25` : 'transparent',
      borderLeft: isActive ? `2px solid ${accentColor}` : '2px solid transparent',
      transition: 'background 0.2s',
    }}>
      <div style={{
        width: 30, height: 30, borderRadius: 8, flexShrink: 0,
        background: isActive ? accentColor : `${accentColor}20`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <Icon size={13} color={isActive ? '#fff' : accentColor} strokeWidth={1.8} />
      </div>
      <div>
        <div style={{ fontSize: 13, fontWeight: isActive ? 700 : 500, color: isActive ? '#fff' : 'rgba(255,255,255,0.72)', lineHeight: 1.2 }}>{item.label}</div>
        <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.38)', marginTop: 1 }}>{item.desc}</div>
      </div>
    </Link>
  )
}

export default Header