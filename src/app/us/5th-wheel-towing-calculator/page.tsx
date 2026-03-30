import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PinWeightQuickCheck from '../../../components/PinWeightQuickCheck';

const APP_URL = 'https://app.kamperhub.com';

export const metadata: Metadata = {
  title: '5th Wheel Towing Calculator | Can My Truck Tow a 5th Wheel? Check Pin Weight & Payload — KamperHub',
  description: 'Free 5th wheel towing calculator. Check if your truck can tow a 5th wheel by verifying pin weight, payload capacity, GVWR, GCWR, and rear axle load. Pin weight is the #1 limiting factor most buyers miss.',
  keywords: '5th wheel towing calculator, can my truck tow a 5th wheel, pin weight calculator, 5th wheel payload check, GVWR calculator 5th wheel, 5th wheel weight limits, pin weight vs tongue weight',
  openGraph: {
    title: '5th Wheel Towing Calculator — KamperHub',
    description: 'Can your truck tow a 5th wheel? Check pin weight, payload, GVWR and GCWR before you buy.',
    url: 'https://kamperhub.com/us/5th-wheel-towing-calculator',
    siteName: 'KamperHub',
    locale: 'en_US',
    type: 'website',
    images: [{ url: 'https://kamperhub.com/logo-banner.jpg', width: 1200, height: 630, alt: 'KamperHub 5th Wheel Towing Calculator' }],
  },
  alternates: {
    canonical: 'https://kamperhub.com/us/5th-wheel-towing-calculator',
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

// Snippet-optimised FAQ schema
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much pin weight does a 5th-wheel have?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A 5th-wheel typically has a pin weight equal to 15–25% of its total loaded weight. This pin weight rests directly in the truck bed and counts fully against payload capacity.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is payload more important than tow rating for 5th-wheels?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Payload is usually more important than tow rating when towing a 5th-wheel because the pin weight adds significant load to the truck. Many trucks exceed payload limits before reaching their maximum tow rating.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a weight distribution hitch increase payload for a 5th-wheel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. A weight distribution hitch does not increase payload, GVWR, or axle ratings. It only redistributes weight and cannot make an overloaded truck legal or safe.',
      },
    },
  ],
};

const softwareJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'KamperHub 5th Wheel Towing Calculator',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description: 'Free 5th wheel towing calculator that checks pin weight, payload, GVWR, GCWR and towing capacity for truck owners.',
  url: 'https://app.kamperhub.com/weights',
};

export default function FifthWheelTowingCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }} />

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
            Can My Truck Tow a 5th Wheel? Check Payload and Pin Weight First
          </h1>
          <p style={{ fontSize: '20px', color: colors.slate, marginBottom: '32px', lineHeight: '1.6' }}>
            Towing a 5th wheel is different because a much larger portion of the trailer&apos;s weight is carried directly
            by the truck. Instead of a 10–15% tongue weight like a travel trailer, a 5th wheel typically places 15–25%
            of its total weight on the truck as pin weight. This makes payload capacity the most common limiting factor.
          </p>

          {/* Embedded calculator */}
          <div style={{
            marginTop: '32px',
            padding: '24px',
            backgroundColor: colors.white,
            borderRadius: '16px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
            border: `2px solid ${colors.primary}`,
          }}>
            <h2 style={{ fontSize: '22px', fontWeight: '700', color: colors.darkEarth, marginBottom: '4px', marginTop: 0 }}>
              Enter Your Truck and 5th Wheel Weights
            </h2>
            <p style={{ fontSize: '15px', color: colors.slate, marginBottom: '16px' }}>
              Select your truck and 5th wheel below for a quick tow capacity check. For full pin weight and payload analysis, sign up free.
            </p>
            <PinWeightQuickCheck />
          </div>

          <div style={{ marginTop: '24px' }}>
            <a href={`${APP_URL}/signup?redirect=/weights`} style={{
              display: 'inline-block', padding: '16px 40px', backgroundColor: colors.primary, color: colors.white,
              textDecoration: 'none', fontWeight: '700', borderRadius: '12px', fontSize: '20px',
            }}>
              Full Pin Weight &amp; Payload Check →
            </a>
            <p style={{ fontSize: '14px', color: colors.slate, marginTop: '12px' }}>
              No credit card required. Free plan includes full weight compliance dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* Why 5th wheel is different */}
      <section style={{ padding: '80px 24px', backgroundColor: colors.white }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', color: colors.darkEarth, marginBottom: '16px', textAlign: 'center' }}>
            Why 5th-Wheel Towing Is Different From Travel Trailers
          </h2>
          <p style={{ fontSize: '18px', color: colors.slate, textAlign: 'center', marginBottom: '48px', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto 48px' }}>
            With a travel trailer, tongue weight is typically 10–15% of the trailer&apos;s loaded weight. With a 5th wheel,
            pin weight is 15–25% — significantly more weight carried directly by your truck. This fundamentally changes
            which limits you hit first.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div style={{ padding: '24px', backgroundColor: colors.cream, borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '48px', fontWeight: '800', color: colors.primary, marginBottom: '8px' }}>10–15%</div>
              <div style={{ fontSize: '18px', fontWeight: '700', color: colors.darkEarth, marginBottom: '8px' }}>Travel Trailer Tongue Weight</div>
              <p style={{ fontSize: '15px', color: colors.slate, lineHeight: '1.6', margin: 0 }}>
                Lighter hitch load. Payload is rarely the first limit reached. Most trucks have margin.
              </p>
            </div>
            <div style={{ padding: '24px', backgroundColor: '#fef2f2', borderRadius: '12px', textAlign: 'center', border: '2px solid #ef4444' }}>
              <div style={{ fontSize: '48px', fontWeight: '800', color: '#ef4444', marginBottom: '8px' }}>15–25%</div>
              <div style={{ fontSize: '18px', fontWeight: '700', color: colors.darkEarth, marginBottom: '8px' }}>5th Wheel Pin Weight</div>
              <p style={{ fontSize: '15px', color: colors.slate, lineHeight: '1.6', margin: 0 }}>
                Much heavier hitch load. Payload and rear axle are often the first limits exceeded — not tow rating.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pin weight explained */}
      <section style={{ padding: '80px 24px', backgroundColor: colors.cream }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', color: colors.darkEarth, marginBottom: '16px', textAlign: 'center' }}>
            What Is Pin Weight and Why It Matters
          </h2>
          <p style={{ fontSize: '18px', color: colors.slate, textAlign: 'center', marginBottom: '48px', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto 48px' }}>
            Pin weight is the amount of a 5th wheel&apos;s weight that rests in the bed of the truck through the hitch.
            This weight counts fully against the truck&apos;s payload capacity and rear axle rating. If pin weight exceeds
            available payload, the setup can be unsafe even when the truck&apos;s tow rating is not exceeded.
          </p>

          {[
            {
              title: 'Pin Weight Counts Against Payload',
              description: 'Unlike tow rating (which measures pulling force), pin weight sits directly on your truck. It adds to your GVWR along with passengers, fuel, cargo, and the hitch itself. A 200 lb 5th wheel hitch + 2,500 lb pin weight = 2,700 lbs consumed before you add a single passenger.',
              icon: '⚖️',
            },
            {
              title: 'Rear Axle Takes the Hit',
              description: '5th wheel pin weight is carried primarily on the rear axle. Even if total payload appears within limits, the rear axle rating may be exceeded. This causes squat, poor steering, increased braking distance, and accelerated suspension wear.',
              icon: '🔧',
            },
            {
              title: 'Hitch Hardware Adds Up',
              description: 'A 5th wheel hitch weighs 150–250 lbs depending on the model. This is permanently installed weight that reduces your available payload before you even connect the trailer. Most generic calculators ignore this.',
              icon: '📐',
            },
            {
              title: 'Loaded vs Dry Pin Weight',
              description: 'Dealers often quote dry pin weight (empty trailer). Once you add water, gear, and supplies, loaded pin weight can be 20–30% higher than the brochure figure. Always calculate with loaded pin weight.',
              icon: '⚠️',
            },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '20px', marginBottom: '32px', padding: '24px', backgroundColor: colors.white, borderRadius: '12px' }}>
              <div style={{ fontSize: '32px', flexShrink: 0 }}>{item.icon}</div>
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: colors.darkEarth, marginBottom: '8px', marginTop: 0 }}>{item.title}</h3>
                <p style={{ fontSize: '16px', color: colors.slate, lineHeight: '1.6', margin: 0 }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How pin weight affects payload */}
      <section style={{ padding: '80px 24px', backgroundColor: colors.white }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', color: colors.darkEarth, marginBottom: '16px', textAlign: 'center' }}>
            How 5th-Wheel Pin Weight Affects Payload and GVWR
          </h2>
          <p style={{ fontSize: '18px', color: colors.slate, textAlign: 'center', marginBottom: '48px', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto 48px' }}>
            With a 5th wheel, pin weight is added directly to the truck&apos;s payload along with passengers, fuel, and cargo.
            Many trucks reach their GVWR or rear axle limit before hitting the advertised tow rating. This is why a truck
            that can tow the weight may still be overloaded when towing a 5th wheel.
          </p>

          {/* Example breakdown */}
          <div style={{ backgroundColor: colors.cream, borderRadius: '12px', overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '16px' }}>
              <thead>
                <tr style={{ backgroundColor: colors.primary }}>
                  <th style={{ padding: '16px 20px', textAlign: 'left', color: colors.white, fontWeight: '600' }}>Example: Ram 2500 + 12,000 lb 5th Wheel</th>
                  <th style={{ padding: '16px 20px', textAlign: 'right', color: colors.white, fontWeight: '600' }}>Weight</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['5th wheel hitch (installed)', '200 lbs'],
                  ['Pin weight (20% of 12,000 lbs)', '2,400 lbs'],
                  ['Driver + passenger', '400 lbs'],
                  ['Fuel (full tank)', '180 lbs'],
                  ['Cargo in truck bed', '200 lbs'],
                  ['Total payload used', '3,380 lbs'],
                ].map(([item, weight], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #e5e5e5', backgroundColor: i === 5 ? '#fef2f2' : 'transparent' }}>
                    <td style={{ padding: '14px 20px', color: colors.darkEarth, fontWeight: i === 5 ? '700' : '400' }}>{item}</td>
                    <td style={{ padding: '14px 20px', textAlign: 'right', color: i === 5 ? '#ef4444' : colors.slate, fontWeight: '600' }}>{weight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{ padding: '16px 20px', backgroundColor: '#fffbeb', borderTop: '2px solid #f59e0b' }}>
              <p style={{ fontSize: '15px', color: '#92400e', margin: 0, lineHeight: '1.6' }}>
                <strong>If your truck&apos;s payload capacity is 3,200 lbs</strong>, this setup is already 180 lbs over — even though the
                tow rating may be 14,000+ lbs. This is the #1 mistake 5th wheel buyers make.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why tow ratings don't protect you */}
      <section style={{ padding: '80px 24px', backgroundColor: colors.cream }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', color: colors.darkEarth, marginBottom: '16px', textAlign: 'center' }}>
            Why Tow Ratings Don&apos;t Protect You With 5th Wheels
          </h2>
          <p style={{ fontSize: '18px', color: colors.slate, textAlign: 'center', marginBottom: '48px', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto 48px' }}>
            Tow ratings assume ideal conditions and do not account for how weight is carried on the truck. Because 5th wheels
            transfer significant weight into the bed, payload and axle limits usually become the real constraint. Relying on
            tow rating alone often leads to overloaded rear axles and poor handling.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Tow Rating ≠ Safe Towing', description: 'A truck rated to tow 15,000 lbs may only have 3,000 lbs of payload. Once pin weight, passengers, and gear consume that payload, you\'re overloaded — regardless of tow rating.', icon: '🚫' },
              { title: 'Dealer Lots Don\'t Check Payload', description: 'Most dealers match truck tow ratings to trailer weight. They rarely verify payload, pin weight, or GVWR. This is how buyers end up with trucks that "can tow it" but can\'t legally carry the load.', icon: '🏪' },
              { title: 'Brochure Weights Are Dry', description: 'Manufacturer specs show dry weight and dry pin weight. Real-world loaded weights are 15–30% higher once you add water, gear, and supplies. Always calculate with loaded numbers.', icon: '📋' },
              { title: 'Rear Axle Has Its Own Limit', description: 'Even when GVWR isn\'t exceeded, the rear axle rating can be. 5th wheel pin weight loads the rear axle disproportionately. This causes squat, reduced steering, and accelerated brake wear.', icon: '⚠️' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '24px', backgroundColor: colors.white, borderRadius: '12px' }}>
                <div style={{ fontSize: '36px', marginBottom: '12px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.darkEarth, marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ fontSize: '15px', color: colors.slate, lineHeight: '1.6', margin: 0 }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common mistakes */}
      <section style={{ padding: '80px 24px', backgroundColor: colors.white }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', color: colors.darkEarth, marginBottom: '16px', textAlign: 'center' }}>
            Common 5th-Wheel Weight Mistakes Buyers Make
          </h2>
          <p style={{ fontSize: '18px', color: colors.slate, textAlign: 'center', marginBottom: '48px', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto 48px' }}>
            Common mistakes include using dry pin weight instead of loaded pin weight, underestimating cargo and passenger
            weight, and assuming a weight distribution hitch increases payload. These errors often result in trucks exceeding
            GVWR or rear axle ratings shortly after purchase.
          </p>

          {[
            { mistake: 'Using dry pin weight instead of loaded pin weight', fix: 'Dry pin weight assumes an empty trailer. Once you add water (8.3 lbs/gallon), gear, and supplies, loaded pin weight can be 20–30% higher. Always calculate with the loaded figure.' },
            { mistake: 'Assuming a weight distribution hitch increases payload', fix: 'A weight distribution hitch redistributes weight between axles — it does not increase your GVWR, payload capacity, or axle ratings. If your truck is over its limits, no hitch can fix it.' },
            { mistake: 'Forgetting the hitch hardware weight', fix: 'A 5th wheel hitch weighs 150–250 lbs. This is permanent payload consumed before you connect the trailer. Add hitch weight to your payload calculation.' },
            { mistake: 'Matching truck tow rating to trailer GVWR only', fix: 'Tow rating is just one of five limits. Payload, GVWR, GCWR, and rear axle rating all matter. A truck that can pull the weight may not be able to carry the pin weight.' },
            { mistake: 'Not accounting for passengers and truck-bed cargo', fix: 'Passengers, fuel, toolboxes, and bed-mounted accessories all reduce available payload. Calculate these first, then see what pin weight capacity remains.' },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: '16px', padding: '24px', backgroundColor: colors.cream, borderRadius: '12px', borderLeft: '4px solid #ef4444' }}>
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

      {/* FAQ */}
      <section style={{ padding: '80px 24px', backgroundColor: colors.cream }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', color: colors.darkEarth, marginBottom: '48px', textAlign: 'center' }}>
            Frequently Asked Questions
          </h2>
          {[
            { q: 'How much pin weight does a 5th wheel have?', a: 'A 5th wheel typically has a pin weight equal to 15–25% of its total loaded weight. For a 14,000 lb loaded 5th wheel, that\'s 2,100–3,500 lbs resting directly on the truck. This pin weight counts fully against the truck\'s payload capacity.' },
            { q: 'Is payload more important than tow rating for 5th wheels?', a: 'Yes, in most cases. Because pin weight is so much higher than travel trailer tongue weight, trucks frequently run out of payload before reaching their maximum tow rating. This is especially common with ¾-ton trucks towing mid-size 5th wheels.' },
            { q: 'Can a weight distribution hitch increase payload for a 5th wheel?', a: 'No. A weight distribution hitch (WDH) redistributes weight between the front and rear axles of the truck — it does not increase your GVWR, payload capacity, or any axle rating. If your truck is over its payload limit, no hitch system can make it legal or safe.' },
            { q: 'What\'s the difference between pin weight and tongue weight?', a: 'Pin weight is the downward force a 5th wheel applies through the kingpin into the truck bed. Tongue weight is the downward force a travel trailer applies through a ball hitch behind the rear axle. Pin weight is typically 15–25% of trailer weight; tongue weight is 10–15%. Both count against truck payload.' },
            { q: 'Do I need a 1-ton truck for a 5th wheel?', a: 'Not always, but many ¾-ton trucks are payload-limited with larger 5th wheels. A ¾-ton truck with 2,500 lbs payload may not have enough capacity for pin weight + passengers + gear. Check the specific numbers — don\'t assume any ¾-ton can handle any 5th wheel.' },
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
            Check Your 5th-Wheel Setup With a Towing Calculator
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.85)', marginBottom: '32px', lineHeight: '1.6' }}>
            KamperHub checks what dealers don&apos;t — payload, pin weight, GVWR, GCWR, and rear axle load.
            Free to use. Know your limits before you sign.
          </p>
          <a href={`${APP_URL}/signup?redirect=/weights`} style={{
            display: 'inline-block', padding: '16px 48px', backgroundColor: colors.accent, color: colors.white,
            textDecoration: 'none', fontWeight: '700', borderRadius: '12px', fontSize: '20px',
          }}>
            Check Your 5th Wheel Compliance Free →
          </a>
        </div>
      </section>

      {/* Contextual cross-links */}
      <section style={{ padding: '80px 24px', backgroundColor: colors.white }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: colors.darkEarth, marginBottom: '48px', textAlign: 'center' }}>
            More Towing &amp; Weight Tools
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            <Link href="/us/towing-weight-calculator" style={{ textDecoration: 'none' }}>
              <div style={{ padding: '24px', backgroundColor: colors.cream, borderRadius: '12px', borderLeft: `4px solid ${colors.primary}`, height: '100%' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.darkEarth, marginBottom: '8px', marginTop: 0 }}>RV Towing Weight Calculator</h3>
                <p style={{ fontSize: '15px', color: colors.slate, lineHeight: '1.6', margin: 0 }}>
                  General towing calculator for travel trailers, toy haulers, and all trailer types. Check GVWR, GCWR, payload and tongue weight.
                </p>
              </div>
            </Link>
            <Link href="/us/tow-simulator" style={{ textDecoration: 'none' }}>
              <div style={{ padding: '24px', backgroundColor: colors.cream, borderRadius: '12px', borderLeft: `4px solid ${colors.primary}`, height: '100%' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.darkEarth, marginBottom: '8px', marginTop: 0 }}>Tow Simulator</h3>
                <p style={{ fontSize: '15px', color: colors.slate, lineHeight: '1.6', margin: 0 }}>
                  Visualize weight distribution, cargo zones, and sway risk. See how loading changes affect your setup in real time.
                </p>
              </div>
            </Link>
            <Link href="/us/trailer-weight-distribution-guide" style={{ textDecoration: 'none' }}>
              <div style={{ padding: '24px', backgroundColor: colors.cream, borderRadius: '12px', borderLeft: `4px solid ${colors.primary}`, height: '100%' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.darkEarth, marginBottom: '8px', marginTop: 0 }}>Weight Distribution Guide</h3>
                <p style={{ fontSize: '15px', color: colors.slate, lineHeight: '1.6', margin: 0 }}>
                  Where to load heavy gear, how distribution affects handling, and common mistakes that cause sway.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer links */}
      <section style={{ padding: '48px 24px', backgroundColor: colors.cream }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/us/towing-weight-calculator" style={{ color: colors.primary, textDecoration: 'none', fontSize: '16px', fontWeight: '500' }}>Weight Calculator →</Link>
            <Link href="/us/tow-simulator" style={{ color: colors.primary, textDecoration: 'none', fontSize: '16px', fontWeight: '500' }}>Tow Simulator →</Link>
            <Link href="/us/trailer-weight-distribution-guide" style={{ color: colors.primary, textDecoration: 'none', fontSize: '16px', fontWeight: '500' }}>Weight Distribution Guide →</Link>
            <Link href="/us/overweight-trailer-fines" style={{ color: colors.primary, textDecoration: 'none', fontSize: '16px', fontWeight: '500' }}>Overweight Fines →</Link>
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
