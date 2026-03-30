import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const APP_URL = 'https://app.kamperhub.com';

export const metadata: Metadata = {
  title: 'Trailer Weight Distribution Guide | How to Load a Travel Trailer Safely — KamperHub',
  description: 'Learn how to distribute weight in your travel trailer for safe, stable towing. Covers loading zones, heavy item placement, tongue weight, sway prevention, and common mistakes American RV owners make.',
  keywords: 'trailer weight distribution guide, how to load a travel trailer safely, trailer loading zones, heavy items trailer placement, trailer sway prevention, trailer axle weight, tongue weight percentage',
  openGraph: {
    title: 'Trailer Weight Distribution Guide — KamperHub',
    description: 'How to load your travel trailer safely. Loading zones, heavy item placement, sway prevention, and common mistakes to avoid.',
    url: 'https://kamperhub.com/us/trailer-weight-distribution-guide',
    siteName: 'KamperHub',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: 'https://kamperhub.com/logo-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'KamperHub Trailer Weight Distribution Guide',
      },
    ],
  },
  alternates: {
    canonical: 'https://kamperhub.com/us/trailer-weight-distribution-guide',
  },
};

const colors = {
  primary: '#6b8e6b',
  accent: '#c97b5d',
  cream: '#fdfbf7',
  darkEarth: '#3d3229',
  slate: '#5a6672',
  white: '#FFFFFF',
};

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Distribute Weight in a Travel Trailer for Safe Towing',
  description: 'A step-by-step guide to loading your travel trailer correctly for stable, legal towing in the United States.',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Know your weight limits',
      text: 'Check your trailer\'s dry weight, GVWR, and tongue weight on the federal certification label. Check your truck\'s GVWR, GCWR, and towing capacity in the owner\'s manual. These are the boundaries you must work within.',
    },
    {
      '@type': 'HowToStep',
      name: 'Place heavy items low and over the axle',
      text: 'The heaviest items (tools, canned food, water tanks, batteries) should sit as low as possible and centered over or just forward of the axle. This keeps the center of gravity low and maintains a safe tongue weight.',
    },
    {
      '@type': 'HowToStep',
      name: 'Load the front zone with medium-weight items',
      text: 'Items like clothes, bedding, and kitchen equipment should go in the front half of the trailer, ahead of the axle. This contributes positively to tongue weight without overloading the front.',
    },
    {
      '@type': 'HowToStep',
      name: 'Keep the rear zone light',
      text: 'The area behind the axle should carry only the lightest items. Weight behind the axle reduces tongue weight and increases sway risk. Never store heavy items in the rear bumper storage or on a rear-mounted rack.',
    },
    {
      '@type': 'HowToStep',
      name: 'Balance left to right',
      text: 'Distribute weight evenly from side to side. An unbalanced load causes the trailer to lean, accelerating tire wear on one side and making the trailer less stable in crosswinds.',
    },
    {
      '@type': 'HowToStep',
      name: 'Check your tongue weight',
      text: 'Your tongue weight should be 10–15% of your trailer\'s loaded weight. If it\'s too low, move weight forward. If it\'s too high, shift some weight rearward — but keep it close to the axle, not in the rear overhang.',
    },
    {
      '@type': 'HowToStep',
      name: 'Verify with a weight check',
      text: 'Use KamperHub\'s weight compliance calculator or visit a CAT scale to confirm your loaded weights are within all limits (GVWR, GCWR, tongue weight percentage) before departing.',
    },
  ],
};

// Snippet-optimised FAQ schema for US market
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is weight distribution when towing an RV?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Weight distribution refers to how cargo and tongue weight are balanced between the tow vehicle and the trailer. Proper distribution improves stability, braking, and steering while reducing sway and axle overload.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can poor weight distribution make my towing setup illegal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Poor weight distribution can overload axles or exceed GVWR or payload limits even when the trailer's total weight is below its GVWR, making the setup unsafe or non-compliant.",
      },
    },
    {
      '@type': 'Question',
      name: 'Where should heavy items be loaded in an RV or trailer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Heavy items should be loaded low and close to the trailer axles. Loading weight too far forward increases tongue weight, while loading weight too far rearward increases sway risk.',
      },
    },
  ],
};

export default function TrailerWeightDistributionGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Nav */}
      <nav style={{ backgroundColor: colors.primary, padding: '16px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/"><Image src="/logo.png" alt="KamperHub" width={140} height={50} priority /></Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', fontSize: '20px', fontWeight: '500' }}>Home</Link>
            <Link href="/us/towing-weight-calculator" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', fontSize: '20px', fontWeight: '500' }}>Weight Calculator</Link>
            <Link href="/us/tow-simulator" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', fontSize: '20px', fontWeight: '500' }}>Tow Simulator</Link>
            <a href={`${APP_URL}/signup?redirect=/weights`} style={{ padding: '10px 24px', backgroundColor: colors.accent, color: colors.white, textDecoration: 'none', fontWeight: '600', borderRadius: '8px', fontSize: '20px' }}>Try Free</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ backgroundColor: colors.cream, padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: '800', color: colors.darkEarth, marginBottom: '16px', lineHeight: '1.2' }}>
            Trailer Weight Distribution Guide
          </h1>
          <p style={{ fontSize: '20px', color: colors.slate, marginBottom: '32px', lineHeight: '1.6' }}>
            How you load your travel trailer matters more than how much you load it. Poor weight distribution is the leading
            cause of trailer sway — and it&apos;s entirely preventable. This guide shows you exactly where to put your
            gear for safe, stable towing.
          </p>
        </div>
      </section>

      {/* Why distribution matters */}
      <section style={{ padding: '80px 24px', backgroundColor: colors.white }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', color: colors.darkEarth, marginBottom: '16px', textAlign: 'center' }}>
            Why Weight Distribution Matters
          </h2>
          <p style={{ fontSize: '18px', color: colors.slate, textAlign: 'center', marginBottom: '48px', lineHeight: '1.6' }}>
            Two trailers can weigh exactly the same but behave completely differently on the road. The difference is where the weight sits.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {[
              {
                title: 'Stability & Sway Prevention',
                description: 'When weight is concentrated forward of the axle, the trailer tracks straight and resists sideways forces from wind and passing semi-trucks. Weight behind the axle creates a pendulum effect — the further back, the worse the sway.',
                icon: '🎯',
              },
              {
                title: 'Tongue Weight',
                description: 'Where you place cargo directly affects how much weight presses down on the hitch. Too little tongue weight causes sway. Too much overloads your truck\'s rear axle and lifts the front wheels, reducing steering grip.',
                icon: '⚖️',
              },
              {
                title: 'Tire Wear & Safety',
                description: 'Uneven loading causes uneven tire wear. One overloaded tire runs hotter, wears faster, and is more likely to blow out — especially on long highway drives at interstate speed. Balanced loading extends tire life and reduces blowout risk.',
                icon: '🔄',
              },
              {
                title: 'Legal Compliance',
                description: 'Individual axle weights can exceed legal limits even when total weight is fine. DOT inspections and weigh stations check axle weights — not just totals. Proper distribution keeps you legal at every measurement point.',
                icon: '📋',
              },
            ].map((item, i) => (
              <div key={i} style={{ padding: '24px', backgroundColor: colors.cream, borderRadius: '12px' }}>
                <div style={{ fontSize: '36px', marginBottom: '12px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.darkEarth, marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ fontSize: '15px', color: colors.slate, lineHeight: '1.6', margin: 0 }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loading zones */}
      <section style={{ padding: '80px 24px', backgroundColor: colors.cream }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', color: colors.darkEarth, marginBottom: '16px', textAlign: 'center' }}>
            The Three Loading Zones
          </h2>
          <p style={{ fontSize: '18px', color: colors.slate, textAlign: 'center', marginBottom: '48px', lineHeight: '1.6' }}>
            Think of your trailer as three zones: front, middle (over the axle), and rear. Each zone has a role in keeping your setup balanced and safe.
          </p>

          {/* SVG diagram */}
          <div style={{ marginBottom: '48px', textAlign: 'center' }}>
            <svg viewBox="0 0 800 280" style={{ maxWidth: '100%', height: 'auto' }} role="img" aria-label="Trailer weight distribution diagram showing front, middle, and rear loading zones">
              {/* Trailer body */}
              <rect x="100" y="60" width="600" height="120" rx="12" fill="#f5f0eb" stroke="#3d3229" strokeWidth="2" />
              {/* A-frame / tongue */}
              <polygon points="100,100 30,115 100,130" fill="#f5f0eb" stroke="#3d3229" strokeWidth="2" />
              {/* Hitch ball */}
              <circle cx="30" cy="115" r="8" fill="#3d3229" />
              <text x="30" y="145" textAnchor="middle" fontSize="11" fill="#5a6672" fontWeight="600">Hitch</text>

              {/* Zone dividers */}
              <line x1="333" y1="55" x2="333" y2="185" stroke="#3d3229" strokeWidth="1" strokeDasharray="6,4" />
              <line x1="533" y1="55" x2="533" y2="185" stroke="#3d3229" strokeWidth="1" strokeDasharray="6,4" />

              {/* Zone fills */}
              <rect x="101" y="61" width="231" height="118" rx="0" fill="rgba(34,197,94,0.15)" />
              <rect x="334" y="61" width="198" height="118" rx="0" fill="rgba(59,130,246,0.15)" />
              <rect x="534" y="61" width="165" height="118" rx="0" fill="rgba(239,68,68,0.15)" />

              {/* Zone labels */}
              <text x="216" y="95" textAnchor="middle" fontSize="16" fill="#22c55e" fontWeight="700">FRONT</text>
              <text x="216" y="115" textAnchor="middle" fontSize="12" fill="#5a6672">Medium items</text>
              <text x="216" y="132" textAnchor="middle" fontSize="12" fill="#5a6672">Clothes, bedding</text>

              <text x="433" y="95" textAnchor="middle" fontSize="16" fill="#3b82f6" fontWeight="700">OVER AXLE</text>
              <text x="433" y="115" textAnchor="middle" fontSize="12" fill="#5a6672">Heavy items LOW</text>
              <text x="433" y="132" textAnchor="middle" fontSize="12" fill="#5a6672">Water, tools, batteries</text>

              <text x="616" y="95" textAnchor="middle" fontSize="16" fill="#ef4444" fontWeight="700">REAR</text>
              <text x="616" y="115" textAnchor="middle" fontSize="12" fill="#5a6672">Light items ONLY</text>
              <text x="616" y="132" textAnchor="middle" fontSize="12" fill="#5a6672">Pillows, soft bags</text>

              {/* Axle */}
              <rect x="400" y="180" width="66" height="8" rx="4" fill="#3d3229" />
              <circle cx="410" cy="200" r="18" fill="#5a6672" stroke="#3d3229" strokeWidth="2" />
              <circle cx="410" cy="200" r="6" fill="#3d3229" />
              <circle cx="456" cy="200" r="18" fill="#5a6672" stroke="#3d3229" strokeWidth="2" />
              <circle cx="456" cy="200" r="6" fill="#3d3229" />
              <text x="433" y="240" textAnchor="middle" fontSize="12" fill="#5a6672" fontWeight="600">Axle</text>

              {/* Sway risk */}
              <path d="M 700,90 Q 740,120 700,150" fill="none" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrowRedUS)" />
              <path d="M 700,150 Q 660,120 700,90" fill="none" stroke="#ef4444" strokeWidth="2" />
              <text x="755" y="125" textAnchor="start" fontSize="12" fill="#ef4444" fontWeight="700">SWAY</text>
              <text x="755" y="140" textAnchor="start" fontSize="11" fill="#ef4444">RISK</text>

              {/* Tongue weight arrow */}
              <line x1="30" y1="155" x2="30" y2="190" stroke="#22c55e" strokeWidth="3" markerEnd="url(#arrowGreenUS)" />
              <text x="30" y="210" textAnchor="middle" fontSize="11" fill="#22c55e" fontWeight="700">10–15%</text>

              <defs>
                <marker id="arrowGreenUS" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#22c55e" />
                </marker>
                <marker id="arrowRedUS" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" />
                </marker>
              </defs>
            </svg>
            <p style={{ fontSize: '13px', color: colors.slate, marginTop: '8px', fontStyle: 'italic' }}>
              Side view: weight forward of the axle increases tongue weight (stability). Weight behind the axle increases sway risk.
            </p>
          </div>

          {[
            {
              zone: 'Front Zone',
              color: '#22c55e',
              label: 'IDEAL — Load here first',
              items: 'Clothes, bedding, kitchen equipment, pantry items, general camping gear',
              description: 'The front zone (everything ahead of the axle) contributes positively to tongue weight. Loading here pulls weight forward, keeping the trailer stable and the tongue weight percentage in the safe range. This should be your primary loading area for medium-weight items.',
            },
            {
              zone: 'Middle Zone (Over Axle)',
              color: '#3b82f6',
              label: 'HEAVY ITEMS — Low and centered',
              items: 'Water tanks, batteries, tools, heavy equipment, canned food, generator',
              description: 'The area directly above the axle is where your heaviest items should go. Weight here has minimal effect on tongue weight percentage (it\'s supported directly by the axle) but keeping it low lowers the center of gravity. This is the safest spot for dense, heavy items.',
            },
            {
              zone: 'Rear Zone',
              color: '#ef4444',
              label: 'CAUTION — Keep it light',
              items: 'Lightweight items only: pillows, toilet paper, empty containers, soft bags',
              description: 'Everything behind the axle reduces tongue weight and increases sway risk. The further back the weight, the greater the leverage effect — a 20 lb item at the very rear of a trailer has more impact on stability than a 40 lb item near the axle. Keep this zone as light as possible.',
            },
          ].map((zone, i) => (
            <div key={i} style={{
              marginBottom: '24px',
              padding: '24px',
              backgroundColor: colors.white,
              borderRadius: '12px',
              borderLeft: `5px solid ${zone.color}`,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: colors.darkEarth, margin: 0 }}>{zone.zone}</h3>
                <span style={{
                  fontSize: '12px',
                  fontWeight: '700',
                  color: colors.white,
                  backgroundColor: zone.color,
                  padding: '4px 10px',
                  borderRadius: '4px',
                }}>{zone.label}</span>
              </div>
              <p style={{ fontSize: '16px', color: colors.slate, lineHeight: '1.6', marginBottom: '12px' }}>{zone.description}</p>
              <p style={{ fontSize: '14px', color: colors.slate, margin: 0 }}>
                <strong>What goes here:</strong> {zone.items}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Step by step */}
      <section style={{ padding: '80px 24px', backgroundColor: colors.white }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', color: colors.darkEarth, marginBottom: '48px', textAlign: 'center' }}>
            How to Load Your Travel Trailer — Step by Step
          </h2>

          {[
            { step: '1', title: 'Know your weight limits', description: 'Check your trailer\'s dry weight, GVWR, and tongue weight on the federal certification label. Check your truck\'s GVWR, GCWR, and towing capacity in the owner\'s manual. These are the boundaries you must work within. If you don\'t know your numbers, you can\'t manage them.' },
            { step: '2', title: 'Place heavy items low and over the axle', description: 'Start with the heaviest items — water tanks, batteries, toolboxes, generators. Place them as low as possible, centered over or just forward of the axle. This keeps the center of gravity low and maintains a safe tongue weight.' },
            { step: '3', title: 'Load the front zone with medium-weight items', description: 'Next, load clothes, bedding, kitchen equipment, and pantry items into the front half of the trailer. This contributes to tongue weight and keeps weight forward for stability.' },
            { step: '4', title: 'Keep the rear zone light', description: 'Only lightweight items should go behind the axle. Pillows, toilet paper, empty containers, soft bags. If you must put something heavier in the rear (like a bike rack), check the tongue weight percentage afterwards — it may have dropped below the safe 10% threshold.' },
            { step: '5', title: 'Balance left to right', description: 'Walk around the trailer and check it\'s not leaning to one side. Distribute weight evenly from left to right. An unbalanced trailer wears tires unevenly and handles poorly in crosswinds.' },
            { step: '6', title: 'Check your tongue weight', description: 'Your tongue weight should be 10–15% of your trailer\'s total loaded weight. Use KamperHub\'s weight calculator or a tongue weight scale to verify. If it\'s too low, move weight forward. If it\'s too high, shift some weight rearward — but keep it close to the axle, not in the far rear.' },
            { step: '7', title: 'Verify with a weight check', description: 'Before your first trip with a new load configuration, visit a CAT scale or use KamperHub\'s weight compliance calculator to confirm all limits are within range. Save your configuration so you can replicate it for future trips.' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '20px', marginBottom: '24px', alignItems: 'flex-start' }}>
              <div style={{
                width: '48px', height: '48px', borderRadius: '50%', backgroundColor: colors.primary, color: colors.white,
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: '700', flexShrink: 0,
              }}>{item.step}</div>
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: colors.darkEarth, marginBottom: '8px', marginTop: 0 }}>{item.title}</h3>
                <p style={{ fontSize: '16px', color: colors.slate, lineHeight: '1.6', margin: 0 }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Common mistakes */}
      <section style={{ padding: '80px 24px', backgroundColor: colors.cream }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', color: colors.darkEarth, marginBottom: '48px', textAlign: 'center' }}>
            Common Loading Mistakes
          </h2>

          {[
            { mistake: 'Storing heavy gear in the rear bumper storage', fix: 'The rear bumper compartment is convenient but it\'s the worst place for heavy items. It\'s behind the axle with maximum leverage. Move heavy tools and equipment to the floor near the axle.' },
            { mistake: 'Filling water tanks to 100% for short trips', fix: 'Water weighs about 8.3 lbs per gallon. A full 50-gallon tank adds 415 lbs — often more than you need. For trips with regular water hookups, carry 50–75% and top up along the way.' },
            { mistake: 'Ignoring aftermarket accessories weight', fix: 'Brush guards (90–140 lbs), roof racks (55–90 lbs), long-range fuel tanks (65–110 lbs empty), bike racks (35–55 lbs). These eat into your payload before you pack a single item. Track them.' },
            { mistake: 'Loading one side heavier than the other', fix: 'A fridge on one side with nothing heavy opposite creates a lean. Balance heavy items across both sides of the trailer for even tire loading.' },
            { mistake: 'Not re-checking after adding accessories', fix: 'Adding a new solar panel, air conditioner, or awning changes your weight profile. Re-check your compliance after any modification — not just when packing for a trip.' },
          ].map((item, i) => (
            <div key={i} style={{
              marginBottom: '16px', padding: '24px', backgroundColor: colors.white, borderRadius: '12px',
              borderLeft: '4px solid #ef4444',
            }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#ef4444', marginBottom: '8px', marginTop: 0 }}>
                ✗ {item.mistake}
              </h3>
              <p style={{ fontSize: '16px', color: colors.slate, lineHeight: '1.6', margin: 0 }}>
                <strong style={{ color: colors.primary }}>Fix:</strong> {item.fix}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Axle weights */}
      <section style={{ padding: '80px 24px', backgroundColor: colors.white }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', color: colors.darkEarth, marginBottom: '16px', textAlign: 'center' }}>
            Understanding Axle Weights
          </h2>
          <p style={{ fontSize: '18px', color: colors.slate, textAlign: 'center', marginBottom: '48px', lineHeight: '1.6' }}>
            Your trailer&apos;s axle setup affects how weight is distributed across the wheels and how much flexibility you have with loading.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            <div style={{ padding: '24px', backgroundColor: colors.cream, borderRadius: '12px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '700', color: colors.darkEarth, marginBottom: '12px' }}>Single Axle Trailers</h3>
              <p style={{ fontSize: '16px', color: colors.slate, lineHeight: '1.6' }}>
                Most trailers under 4,500 lbs GVWR have a single axle. All the trailer&apos;s weight (minus tongue weight) rests on two tires.
                This makes weight distribution especially critical — there&apos;s less margin for error. A heavy rear load on a single axle trailer
                creates significant sway risk.
              </p>
            </div>
            <div style={{ padding: '24px', backgroundColor: colors.cream, borderRadius: '12px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '700', color: colors.darkEarth, marginBottom: '12px' }}>Tandem Axle Trailers</h3>
              <p style={{ fontSize: '16px', color: colors.slate, lineHeight: '1.6' }}>
                Larger trailers typically have tandem (dual) axles, spreading weight across four tires. This provides more stability and a larger
                safe loading area. However, weight distribution still matters — rear-heavy loading on a tandem axle trailer can still produce
                dangerous sway at highway speeds.
              </p>
            </div>
          </div>

          <div style={{ marginTop: '32px', padding: '24px', backgroundColor: colors.cream, borderRadius: '12px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: '700', color: colors.darkEarth, marginBottom: '12px' }}>Load-Equalizing vs Standard Suspension</h3>
            <p style={{ fontSize: '16px', color: colors.slate, lineHeight: '1.6', marginBottom: '12px' }}>
              <strong>Load-equalizing (independent) suspension</strong> allows each wheel to respond to bumps independently, distributing weight more
              evenly across all tires. This is better for off-road travel and provides a smoother ride.
            </p>
            <p style={{ fontSize: '16px', color: colors.slate, lineHeight: '1.6', margin: 0 }}>
              <strong>Standard (beam axle) suspension</strong> connects the wheels rigidly. A bump on one side affects the other side.
              Weight distribution is more critical with beam axle setups because imbalances have a more direct impact on handling.
            </p>
          </div>
        </div>
      </section>

      {/* Tool bridge */}
      <section style={{ padding: '80px 24px', backgroundColor: colors.cream }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', color: colors.darkEarth, marginBottom: '16px', textAlign: 'center' }}>
            How Weight Distribution Affects Your Legal Towing Limits
          </h2>
          <p style={{ fontSize: '18px', color: colors.slate, textAlign: 'center', marginBottom: '48px', lineHeight: '1.6' }}>
            Distribution doesn&apos;t just affect handling — it changes which legal limits you&apos;re hitting.
            The same total weight can pass or fail compliance depending on where it sits.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '48px' }}>
            <div style={{ padding: '24px', backgroundColor: colors.white, borderRadius: '12px', borderLeft: `4px solid ${colors.primary}` }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.darkEarth, marginBottom: '8px', marginTop: 0 }}>
                Tongue Weight → Vehicle GVWR
              </h3>
              <p style={{ fontSize: '15px', color: colors.slate, lineHeight: '1.6', margin: 0 }}>
                Loading the front of your trailer increases tongue weight — which adds to your
                tow vehicle&apos;s weight. This can push your truck over its GVWR even when the trailer is under its rating.
                The <Link href="/us/towing-weight-calculator" style={{ color: colors.primary, fontWeight: '600' }}>weight calculator</Link> checks both simultaneously.
              </p>
            </div>
            <div style={{ padding: '24px', backgroundColor: colors.white, borderRadius: '12px', borderLeft: '4px solid #ef4444' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.darkEarth, marginBottom: '8px', marginTop: 0 }}>
                Rear Loading → Sway Risk
              </h3>
              <p style={{ fontSize: '15px', color: colors.slate, lineHeight: '1.6', margin: 0 }}>
                Weight behind the axle reduces tongue weight percentage. Drop below 10% and you enter dangerous sway territory —
                the leading cause of trailer accidents. The <Link href="/us/tow-simulator" style={{ color: colors.primary, fontWeight: '600' }}>tow simulator</Link> shows
                your sway risk in real time as you move cargo between zones.
              </p>
            </div>
            <div style={{ padding: '24px', backgroundColor: colors.white, borderRadius: '12px', borderLeft: `4px solid ${colors.accent}` }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.darkEarth, marginBottom: '8px', marginTop: 0 }}>
                Overloading → Fines &amp; Voided Insurance
              </h3>
              <p style={{ fontSize: '15px', color: colors.slate, lineHeight: '1.6', margin: 0 }}>
                Exceeding any weight rating — GVWR or GCWR — can result in DOT citations, fines up to $10,000+,
                and voided insurance cover. See the <Link href="/us/overweight-trailer-fines" style={{ color: colors.primary, fontWeight: '600' }}>state-by-state fines</Link> to
                understand the penalties.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href={`${APP_URL}/signup?redirect=/weights`} style={{
              display: 'inline-block', padding: '16px 40px', backgroundColor: colors.primary, color: colors.white,
              textDecoration: 'none', fontWeight: '700', borderRadius: '12px', fontSize: '20px',
            }}>
              Check Your Weight Compliance Free →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '80px 24px', backgroundColor: colors.white }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', color: colors.darkEarth, marginBottom: '48px', textAlign: 'center' }}>
            Frequently Asked Questions
          </h2>
          {[
            { q: 'Where should heavy items go in a travel trailer?', a: 'Heavy items should be placed as low as possible and centered over or just forward of the axle. This keeps the center of gravity low, maintains safe tongue weight, and minimizes sway risk. Never place heavy items in the rear overhang area behind the axle.' },
            { q: 'What causes trailer sway?', a: 'Trailer sway is primarily caused by insufficient tongue weight — usually because too much weight is loaded behind the axle. Other contributing factors include excessive speed, crosswinds, passing semi-trucks, and uneven side-to-side loading. Maintaining 10–15% tongue weight is the most effective prevention.' },
            { q: 'How much should my tongue weight be?', a: 'In the United States, your tongue weight should be between 10% and 15% of your trailer\'s total loaded weight. For example, if your trailer weighs 5,000 lbs loaded, the tongue weight should be between 500 lbs and 750 lbs. Below 10% significantly increases sway risk.' },
            { q: 'What is the difference between load-equalizing and standard suspension?', a: 'Load-equalizing (independent) suspension distributes weight more evenly across multiple axles, allowing each wheel to respond to bumps independently. Standard (beam axle) suspension connects the wheels rigidly, so a bump on one side affects the other. Load-equalizing is generally better for weight distribution and ride quality, especially on unpaved roads.' },
          ].map((faq, i) => (
            <div key={i} style={{ marginBottom: '16px', padding: '24px', backgroundColor: colors.white, borderRadius: '12px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.darkEarth, marginBottom: '12px', marginTop: 0 }}>{faq.q}</h3>
              <p style={{ fontSize: '16px', color: colors.slate, lineHeight: '1.7', margin: 0 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', backgroundColor: colors.primary, textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', color: colors.white, marginBottom: '16px' }}>
            Track Your Trailer Weight Distribution Digitally
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.85)', marginBottom: '32px', lineHeight: '1.6' }}>
            KamperHub&apos;s tow simulator lets you place cargo in loading zones and see the effect on tongue weight,
            sway risk, and compliance — all before you pack the trailer.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`${APP_URL}/signup?redirect=/tow-simulator`} style={{ display: 'inline-block', padding: '16px 40px', backgroundColor: colors.accent, color: colors.white, textDecoration: 'none', fontWeight: '700', borderRadius: '12px', fontSize: '20px' }}>
              Try the Tow Simulator →
            </a>
            <a href={`${APP_URL}/signup?redirect=/weights`} style={{ display: 'inline-block', padding: '16px 40px', backgroundColor: 'rgba(255,255,255,0.15)', color: colors.white, textDecoration: 'none', fontWeight: '700', borderRadius: '12px', fontSize: '20px', border: '2px solid rgba(255,255,255,0.3)' }}>
              Free Weight Check →
            </a>
          </div>
        </div>
      </section>

      {/* Footer links */}
      <section style={{ padding: '48px 24px', backgroundColor: colors.cream }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/us/towing-weight-calculator" style={{ color: colors.primary, textDecoration: 'none', fontSize: '16px', fontWeight: '500' }}>Weight Calculator →</Link>
            <Link href="/us/tow-simulator" style={{ color: colors.primary, textDecoration: 'none', fontSize: '16px', fontWeight: '500' }}>Tow Simulator →</Link>
            <Link href="/us/overweight-trailer-fines" style={{ color: colors.primary, textDecoration: 'none', fontSize: '16px', fontWeight: '500' }}>Overweight Fines by State →</Link>
            <Link href="/us/rv-trip-planner" style={{ color: colors.primary, textDecoration: 'none', fontSize: '16px', fontWeight: '500' }}>Trip Planner →</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '24px', backgroundColor: colors.primary, textAlign: 'center' }}>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', margin: 0 }}>
          © {new Date().getFullYear()} KamperHub. All rights reserved. |{' '}
          <Link href="/legal/privacy" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Privacy</Link> |{' '}
          <Link href="/legal/terms" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Terms</Link>
        </p>
      </footer>
    </>
  );
}
