'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Scale, Tent, Fuel, Cloud, Phone, ExternalLink,
  ChevronDown, ArrowLeft, Lock, ArrowRight
} from 'lucide-react';

const colors = {
  primary: '#6b8e6b',
  secondary: '#3d8b8b',
  accent: '#c97b5d',
  cream: '#fdfbf7',
  sand: '#e8dcc4',
  darkEarth: '#3d3229',
  white: '#FFFFFF',
  gray: { 50: '#fdfbf7', 100: '#e8dcc4', 200: '#d4c9b0', 400: '#a68b6a', 500: '#5a6672', 600: '#4a5560', 700: '#3d3229', 900: '#1a1512' }
};

import type { LucideIcon } from 'lucide-react';

interface ResourceLink { name: string; url: string; description?: string; }
interface ResourceSection { title: string; icon: LucideIcon; description?: string; links: ResourceLink[]; }

const ResourceCard = ({ section }: { section: ResourceSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = section.icon;
  return (
    <div style={{ backgroundColor: colors.white, borderRadius: '16px', border: `1px solid ${colors.gray[200]}`, overflow: 'hidden' }}>
      <button onClick={() => setIsOpen(!isOpen)} style={{ width: '100%', padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '16px', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
        <div style={{ width: '48px', height: '48px', backgroundColor: `${colors.primary}15`, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Icon size={24} color={colors.primary} />
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: '18px', fontWeight: '600', color: colors.gray[900], margin: 0 }}>{section.title}</h3>
          {section.description && <p style={{ fontSize: '14px', color: colors.gray[500], margin: '4px 0 0' }}>{section.description}</p>}
        </div>
        <ChevronDown size={20} color={colors.gray[400]} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }} />
      </button>
      {isOpen && (
        <div style={{ padding: '0 24px 20px', borderTop: `1px solid ${colors.gray[100]}` }}>
          <div style={{ paddingTop: '16px' }}>
            {section.links.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', padding: '12px 16px', marginBottom: '8px', backgroundColor: colors.gray[50], borderRadius: '8px', textDecoration: 'none' }}>
                <div>
                  <span style={{ color: colors.primary, fontWeight: '500', display: 'flex', alignItems: 'center' }}>{link.name}<ExternalLink size={14} style={{ marginLeft: '4px', opacity: 0.6 }} /></span>
                  {link.description && <span style={{ fontSize: '13px', color: colors.gray[500], display: 'block', marginTop: '2px' }}>{link.description}</span>}
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Limited preview - only show key categories
const previewSections: ResourceSection[] = [
  { title: 'Campsite Directories', icon: Tent, description: 'Find your next campsite', links: [
    { name: 'WikiCamps Australia', url: 'https://www.wikicamps.com.au/', description: 'Community campsite reviews' },
    { name: 'Big4 Holiday Parks', url: 'https://www.big4.com.au/', description: 'Premium holiday parks' },
  ]},
  { title: 'Fuel Prices', icon: Fuel, description: 'Compare fuel prices', links: [
    { name: 'Petrol Spy', url: 'https://petrolspy.com.au/', description: 'Real-time fuel prices' },
  ]},
  { title: 'Weather & Roads', icon: Cloud, description: 'Check conditions', links: [
    { name: 'Bureau of Meteorology', url: 'http://www.bom.gov.au/', description: 'Official weather forecasts' },
  ]},
  { title: 'Roadside Assistance', icon: Phone, description: 'Get help when needed', links: [
    { name: 'RACQ (QLD)', url: 'https://www.racq.com.au/', description: 'Queensland' },
    { name: 'NRMA (NSW)', url: 'https://www.mynrma.com.au/', description: 'New South Wales' },
  ]},
];

// Locked categories shown as preview
const lockedCategories = [
  'Dump Points & Waste Disposal',
  'Gas & LPG Refill Locations',
  'Pet-Friendly Parks',
  'Servicing & Repairs',
  'Solar & Electrical Suppliers',
  'Caravan Insurance',
  'Accessibility Resources',
  'Essential Travel Apps'
];

export default function ResourcesPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: colors.cream }}>
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, backgroundColor: colors.primary, zIndex: 1000 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/"><Image src="/logo-horizontal.svg" alt="KamperHub" width={160} height={40} priority style={{ filter: 'brightness(0) invert(1)' }} /></Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a href="https://app.kamperhub.com/login" style={{ padding: '10px 20px', color: 'rgba(255,255,255,0.9)', textDecoration: 'none', fontWeight: '500' }}>Log In</a>
            <a href="https://app.kamperhub.com/signup" style={{ padding: '10px 24px', backgroundColor: colors.white, color: colors.primary, textDecoration: 'none', fontWeight: '600', borderRadius: '10px', fontSize: '14px' }}>Start Free Trial</a>
          </div>
        </div>
      </nav>

      <section style={{ paddingTop: '120px', paddingBottom: '40px', backgroundColor: colors.white }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: colors.gray[500], textDecoration: 'none', marginBottom: '24px', fontSize: '14px' }}><ArrowLeft size={16} /> Back to Home</Link>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: '800', color: colors.gray[900], marginBottom: '16px' }}>Travel Resources</h1>
          <p style={{ fontSize: '18px', color: colors.gray[600], maxWidth: '600px', lineHeight: '1.6' }}>Essential resources for caravan travel. Sign up for free to access our complete resource library.</p>
        </div>
      </section>

      {/* Towing Regulations - Free Preview */}
      <section style={{ padding: '40px 0', backgroundColor: colors.white }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ width: '48px', height: '48px', backgroundColor: `${colors.primary}15`, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Scale size={24} color={colors.primary} /></div>
            <div><h2 style={{ fontSize: '24px', fontWeight: '700', color: colors.gray[900], margin: 0 }}>Towing Regulations</h2><p style={{ fontSize: '14px', color: colors.gray[500], margin: '4px 0 0' }}>Australian state regulations</p></div>
          </div>
          <div style={{ backgroundColor: '#FEF3C7', border: '1px solid #F59E0B', borderRadius: '12px', padding: '16px 20px', marginBottom: '24px' }}>
            <p style={{ margin: 0, color: '#92400E', fontSize: '14px' }}><strong>Important:</strong> Regulations change frequently. Always verify current requirements with your local transport authority.</p>
          </div>
          <div style={{ display: 'grid', gap: '12px' }}>
            <a href="https://www.nhvr.gov.au/" target="_blank" rel="noopener noreferrer" style={{ display: 'block', padding: '16px 20px', backgroundColor: colors.gray[50], borderRadius: '12px', textDecoration: 'none' }}>
              <span style={{ color: colors.primary, fontWeight: '500' }}>National Heavy Vehicle Regulator <ExternalLink size={14} style={{ marginLeft: '4px', opacity: 0.6 }} /></span>
              <span style={{ fontSize: '13px', color: colors.gray[500], display: 'block' }}>National body for heavy vehicle regulation</span>
            </a>
            <a href="https://www.tmr.qld.gov.au/Safety/Vehicle-standards-and-modifications/Towing" target="_blank" rel="noopener noreferrer" style={{ display: 'block', padding: '16px 20px', backgroundColor: colors.gray[50], borderRadius: '12px', textDecoration: 'none' }}>
              <span style={{ color: colors.primary, fontWeight: '500' }}>Queensland (TMR) <ExternalLink size={14} style={{ marginLeft: '4px', opacity: 0.6 }} /></span>
              <span style={{ fontSize: '13px', color: colors.gray[500], display: 'block' }}>QLD towing regulations</span>
            </a>
            <a href="https://www.nsw.gov.au/driving-boating-and-transport/vehicle-registration/vehicle-registration-guides/towing" target="_blank" rel="noopener noreferrer" style={{ display: 'block', padding: '16px 20px', backgroundColor: colors.gray[50], borderRadius: '12px', textDecoration: 'none' }}>
              <span style={{ color: colors.primary, fontWeight: '500' }}>New South Wales <ExternalLink size={14} style={{ marginLeft: '4px', opacity: 0.6 }} /></span>
              <span style={{ fontSize: '13px', color: colors.gray[500], display: 'block' }}>NSW towing regulations</span>
            </a>
          </div>
          <p style={{ fontSize: '14px', color: colors.gray[500], marginTop: '16px', textAlign: 'center' }}>
            Sign up to access regulations for VIC, SA, WA, NT, TAS, ACT + UK, USA & EU
          </p>
        </div>
      </section>

      {/* Free Preview Resources */}
      <section style={{ padding: '40px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: colors.gray[900], marginBottom: '32px' }}>Featured Resources</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
            {previewSections.map((section, index) => (<ResourceCard key={index} section={section} />))}
          </div>
        </div>
      </section>

      {/* Locked Resources - CTA to Sign Up */}
      <section style={{ padding: '40px 0 80px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{
            backgroundColor: colors.white,
            borderRadius: '24px',
            padding: '40px',
            border: `2px solid ${colors.primary}`,
            textAlign: 'center'
          }}>
            <div style={{
              width: '64px',
              height: '64px',
              backgroundColor: `${colors.primary}15`,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px'
            }}>
              <Lock size={28} color={colors.primary} />
            </div>
            <h2 style={{ fontSize: '28px', fontWeight: '700', color: colors.gray[900], marginBottom: '16px' }}>
              Unlock All Resources
            </h2>
            <p style={{ fontSize: '16px', color: colors.gray[600], marginBottom: '24px', lineHeight: '1.6' }}>
              Start your free 7-day trial to access our complete resource library including:
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '12px',
              marginBottom: '32px',
              textAlign: 'left'
            }}>
              {lockedCategories.map((category, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 12px',
                  backgroundColor: colors.gray[50],
                  borderRadius: '8px',
                  fontSize: '14px',
                  color: colors.gray[700]
                }}>
                  <Lock size={14} color={colors.gray[400]} />
                  {category}
                </div>
              ))}
            </div>
            <a href="https://app.kamperhub.com/signup" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '16px 40px',
              backgroundColor: colors.primary,
              color: colors.white,
              textDecoration: 'none',
              fontWeight: '600',
              borderRadius: '12px',
              fontSize: '18px'
            }}>
              Start Free Trial
              <ArrowRight size={20} />
            </a>
            <p style={{ fontSize: '14px', color: colors.gray[500], marginTop: '16px' }}>
              No credit card required
            </p>
          </div>
        </div>
      </section>

      <footer style={{ padding: '48px 0', backgroundColor: colors.primary }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <Image src="/logo-horizontal.svg" alt="KamperHub" width={140} height={35} style={{ filter: 'brightness(0) invert(1)', marginBottom: '16px' }} />
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '14px' }}>The all-in-one app for caravan travellers.</p>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginTop: '24px' }}>© {new Date().getFullYear()} KamperHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
