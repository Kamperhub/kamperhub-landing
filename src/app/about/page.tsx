import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

// "Our story" — Scott's own words, agreed 2026-09-30 (app S275). The same core
// story runs on app.kamperhub.com/about and shop.kamperhub.com/about; if you
// change it here, change it there too. Keep it true: no caravanning backstory
// Scott doesn't have, no "legal" claims (compliant / within limits only).

export const metadata: Metadata = {
  title: 'Our Story | KamperHub',
  description:
    'Why KamperHub exists: built by Scott, a newcomer to caravanning who could not find anything to guide him through weights, compliance, loading and towing — so he built it.',
  alternates: { canonical: 'https://kamperhub.com/about' },
};

const colors = {
  primary: '#6b8e6b',
  accent: '#c97b5d',
  cream: '#fdfbf7',
  sand: '#e8dcc4',
  white: '#FFFFFF',
  text: '#3d3229',
  body: '#4a5560',
  muted: '#5a6672',
};

const APP_URL = 'https://app.kamperhub.com';

const h2Style = { fontSize: '26px', fontWeight: 700, color: colors.text, margin: '44px 0 14px' } as const;
const pStyle = { fontSize: '18px', color: colors.body, lineHeight: 1.75, margin: '0 0 18px' } as const;

export default function AboutPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: colors.cream }}>
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, backgroundColor: colors.primary, zIndex: 1000 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/"><Image src="/logo.png" alt="KamperHub" width={140} height={50} priority /></Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a href={`${APP_URL}/login`} style={{ padding: '10px 20px', color: 'rgba(255,255,255,0.9)', textDecoration: 'none', fontWeight: 500 }}>Log In</a>
            <a href={`${APP_URL}/signup`} style={{ padding: '10px 24px', backgroundColor: colors.white, color: colors.primary, textDecoration: 'none', fontWeight: 600, borderRadius: '10px', fontSize: '14px' }}>Get Started Free</a>
          </div>
        </div>
      </nav>

      <section style={{ paddingTop: '120px', paddingBottom: '40px', backgroundColor: colors.white }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 24px' }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: colors.muted, textDecoration: 'none', marginBottom: '24px', fontSize: '14px' }}>
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, color: colors.text, margin: 0 }}>
            Why KamperHub exists
          </h1>
        </div>
      </section>

      <main style={{ padding: '40px 0 96px' }}>
        <article style={{ maxWidth: '760px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '22px', flexWrap: 'wrap', margin: '0 0 22px' }}>
            {/* Cropped from a group selfie to Scott only; EXIF/GPS stripped. */}
            <Image
              src="/scott.jpg"
              alt="Scott, founder of KamperHub"
              width={120}
              height={120}
              style={{ borderRadius: '50%', objectFit: 'cover', border: `3px solid ${colors.sand}`, flexShrink: 0 }}
            />
            <p style={{ ...pStyle, fontSize: '22px', fontWeight: 600, color: colors.text, margin: 0, flex: '1 1 240px' }}>
              I&apos;m Scott, and I built KamperHub because I needed it.
            </p>
          </div>
          <p style={pStyle}>
            When I started looking at caravanning, I had no background in it at all. No family who towed, no mate
            who&apos;d done the lap. And I couldn&apos;t find anything that would guide me in. Every question led to
            three more. What does my car actually allow me to tow? What&apos;s the difference between ATM, GVM and
            towball weight &mdash; and which one am I about to go over? What do I need to check before I leave? What do
            I load, and where? How do I tow it safely?
          </p>
          <p style={pStyle}>
            The answers were out there, scattered across forums, manuals, compliance plates and weighbridge dockets. But
            nobody put it together. Nobody walked you through it.
          </p>
          <p style={pStyle}>So I stopped waiting for someone else to build it, and built it myself.</p>

          <h2 style={h2Style}>The part nobody tells you</h2>
          <p style={pStyle}>
            Getting a caravan on the road isn&apos;t just hitch and go. There&apos;s a lot to get right, and a lot to
            remember:
          </p>
          <ul style={{ ...pStyle, paddingLeft: '24px' }}>
            <li style={{ marginBottom: '10px' }}>
              <strong>Weights and compliance</strong> &mdash; your vehicle, your van, and everything you put in them,
              all within limits.
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>Loading</strong> &mdash; where the weight goes changes how the whole rig tows.
            </li>
            <li>
              <strong>Preparation</strong> &mdash; tyres, gas, water, power, and a checklist that&apos;s easy to forget
              one item from.
            </li>
          </ul>
          <p style={pStyle}>
            Get it wrong and you&apos;re not just uncomfortable &mdash; you can be unsafe, out of compliance, and exposed
            if something goes wrong.
          </p>

          <h2 style={h2Style}>What KamperHub does</h2>
          <p style={pStyle}>
            KamperHub puts it all in one place: weight checks that show you where you stand, a trip planner that knows
            you&apos;re towing, packing lists so nothing gets left behind, and the calculators you&apos;d otherwise be
            doing on the back of a docket. It&apos;s free to start &mdash; and built by someone who was exactly where
            you are.
          </p>

          <div style={{ marginTop: '44px', padding: '32px 28px', borderRadius: '20px', backgroundColor: colors.white, border: `1px solid ${colors.sand}` }}>
            <h2 style={{ ...h2Style, margin: '0 0 10px', color: colors.primary }}>Start with your rig</h2>
            <p style={{ ...pStyle, margin: '0 0 22px' }}>Add your vehicle and caravan and see your weights in minutes.</p>
            <a href={`${APP_URL}/signup`} style={{
              display: 'inline-block', backgroundColor: colors.primary, color: colors.white, textDecoration: 'none',
              fontSize: '17px', fontWeight: 700, padding: '14px 28px', borderRadius: '10px',
            }}>
              Get started free
            </a>
          </div>

          <p style={{ ...pStyle, marginTop: '32px', fontSize: '15px', color: colors.muted }}>
            Questions? Email <a href="mailto:info@kamperhub.com" style={{ color: colors.primary }}>info@kamperhub.com</a>{' '}
            &mdash; it comes straight to me. &mdash; Scott
          </p>
        </article>
      </main>
    </div>
  );
}
