import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const APP_URL = 'https://app.kamperhub.com';

export const metadata: Metadata = {
  title: 'Trailer Tow Simulator USA | Virtual Tow Test Before You Hit the Road — KamperHub',
  description: 'Simulate your tow setup before you leave. KamperHub\'s tow simulator shows weight distribution, sway risk, tongue weight, and compliance across your entire truck and trailer combination. Built for American RV and trailer owners.',
  keywords: 'tow simulator trailer usa, trailer tow simulator, towing simulation tool, virtual tow test, trailer weight distribution simulator, towing setup simulator, tongue weight calculator',
  openGraph: {
    title: 'Trailer Tow Simulator — KamperHub',
    description: 'Simulate your tow setup before you leave. See weight distribution, sway risk, and compliance for your truck and trailer combination.',
    url: 'https://kamperhub.com/us/tow-simulator',
    siteName: 'KamperHub',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://kamperhub.com/logo-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'KamperHub Tow Simulator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trailer Tow Simulator — KamperHub',
    description: 'Simulate your tow setup before you leave. Weight distribution, sway risk, and compliance — all in one view.',
    images: ['https://kamperhub.com/logo-banner.jpg'],
  },
  alternates: {
    canonical: 'https://kamperhub.com/us/tow-simulator',
  },
};

const colors = {
  primary: '#6b8e6b',
  primaryDark: '#5a7a5a',
  accent: '#c97b5d',
  cream: '#fdfbf7',
  darkEarth: '#3d3229',
  slate: '#5a6672',
  white: '#FFFFFF',
};

const faqs = [
  {
    question: 'What is a tow simulator and why do I need one?',
    answer: 'A tow simulator is a digital tool that models your complete tow setup — truck, trailer, cargo, passengers, and accessories — and shows you how weight is distributed across the combination. Unlike a basic weight calculator that only checks totals, a simulator shows you WHERE weight is sitting and how it affects stability, tongue weight, and axle weights. It lets you experiment with loading changes before you physically move anything.',
  },
  {
    question: 'How is the tow simulator different from a weight calculator?',
    answer: 'A weight calculator checks whether your totals (GVWR, trailer GVWR, GCWR) are within limits — it gives you a pass or fail. The tow simulator goes deeper: it models weight distribution across cargo zones (front, middle, rear of the trailer), shows how your loading affects tongue weight percentage, displays sway risk indicators, and lets you drag items between zones to see the impact in real time. Think of the calculator as a scale check, and the simulator as a full loading analysis.',
  },
  {
    question: 'When should I use the tow simulator?',
    answer: 'The most valuable times to use the simulator are: before buying a trailer (will your truck handle it?), before a long trip (is your load distribution safe?), after adding new accessories like toolboxes or roof racks (how does the extra weight affect your setup?), and whenever you\'re carrying significantly more water, fuel, or gear than usual.',
  },
  {
    question: 'What does the tow simulator check?',
    answer: 'The simulator checks and visualizes: total truck and trailer weights against legal limits (GVWR, GCWR), tongue weight as a percentage of trailer loaded weight (10-15% safe range in the US), weight distribution across trailer loading zones, sway risk based on your tongue weight percentage and rear overhang loading, and a GCWR donut chart showing how close you are to your combined weight limit.',
  },
  {
    question: 'Can I load my actual truck and trailer specs into the simulator?',
    answer: 'Yes. The simulator connects to your KamperHub garage, so it loads your real truck and trailer specs automatically. It also pulls in any aftermarket accessories you\'ve added (brush guards, toolboxes, roof racks, auxiliary fuel tanks) and trailer accessories, giving you a realistic simulation based on your actual setup — not generic numbers.',
  },
  {
    question: 'Is the tow simulator free?',
    answer: 'The tow simulator is available on KamperHub\'s Pro plan ($49/year). The free plan includes a weight compliance dashboard that checks your GVWR, trailer GVWR, GCWR, towing capacity, and tongue weight percentage. The simulator adds visual weight distribution modeling, cargo zone management, sway risk analysis, and the ability to experiment with different loading scenarios.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

const softwareJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'KamperHub Tow Simulator',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '49',
    priceCurrency: 'USD',
    description: 'Pro plan — $49/year',
  },
  description: 'Trailer tow simulator that models weight distribution, sway risk, tongue weight and compliance for American RV and trailer owners.',
  url: 'https://app.kamperhub.com/tow-simulator',
};

export default function TowSimulatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />

      {/* Nav */}
      <nav style={{
        backgroundColor: colors.primary,
        padding: '16px 24px',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <Link href="/">
            <Image src="/logo.png" alt="KamperHub" width={140} height={50} priority />
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', fontSize: '20px', fontWeight: '500' }}>Home</Link>
            <Link href="/us/towing-weight-calculator" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', fontSize: '20px', fontWeight: '500' }}>Weight Calculator</Link>
            <a href={`${APP_URL}/blog`} style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', fontSize: '20px', fontWeight: '500' }}>Blog</a>
            <a href={`${APP_URL}/signup?redirect=/tow-simulator`} style={{
              padding: '10px 24px',
              backgroundColor: colors.accent,
              color: colors.white,
              textDecoration: 'none',
              fontWeight: '600',
              borderRadius: '8px',
              fontSize: '20px',
            }}>
              Try Free
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{
        backgroundColor: colors.cream,
        padding: '80px 24px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: '800',
            color: colors.darkEarth,
            marginBottom: '16px',
            lineHeight: '1.2',
          }}>
            Simulate Your Tow Setup Before You Hit the Road
          </h1>
          <p style={{
            fontSize: '20px',
            color: colors.slate,
            marginBottom: '32px',
            lineHeight: '1.6',
          }}>
            KamperHub&apos;s tow simulator models your complete truck and trailer combination — showing weight distribution,
            sway risk, tongue weight and compliance in one visual dashboard. Experiment with your loading before you pack a single item.
          </p>
          <a href={`${APP_URL}/signup?redirect=/tow-simulator`} style={{
            display: 'inline-block',
            padding: '16px 40px',
            backgroundColor: colors.primary,
            color: colors.white,
            textDecoration: 'none',
            fontWeight: '700',
            borderRadius: '12px',
            fontSize: '20px',
          }}>
            Open the Tow Simulator →
          </a>
          <p style={{ fontSize: '14px', color: colors.slate, marginTop: '12px' }}>
            Available on the Pro plan. Free weight compliance checks included on all plans.
          </p>
        </div>
      </section>

      {/* What it does */}
      <section style={{ padding: '80px 24px', backgroundColor: colors.white }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: '700',
            color: colors.darkEarth,
            marginBottom: '16px',
            textAlign: 'center',
          }}>
            What the Tow Simulator Shows You
          </h2>
          <p style={{
            fontSize: '18px',
            color: colors.slate,
            textAlign: 'center',
            marginBottom: '48px',
            lineHeight: '1.6',
          }}>
            A complete picture of your tow setup — not just the numbers, but what they mean for your safety on the road.
          </p>

          {[
            {
              title: 'Visual Weight Distribution',
              description: 'See exactly how weight is distributed across your trailer\'s floor plan. The simulator uses a bird\'s-eye view of your trailer with color-coded loading zones (front, middle, rear) so you can see at a glance whether your load is balanced or dangerously rear-heavy.',
              icon: '📊',
            },
            {
              title: 'Sway Risk Analysis',
              description: 'When your tongue weight percentage drops below the safe range or too much weight sits behind the axle, the simulator flags a SWAY RISK warning. Trailer sway is the leading cause of towing accidents in the US — the simulator helps you prevent it before you leave the driveway.',
              icon: '⚠️',
            },
            {
              title: 'Tongue Weight Breakdown',
              description: 'See exactly how your tongue weight is made up — the trailer\'s base tongue weight spec plus the effect of your cargo placement. Moving a heavy item from the rear to the front of the trailer changes the tongue weight. The simulator shows this in real time.',
              icon: '📐',
            },
            {
              title: 'GCWR Donut Chart',
              description: 'A visual gauge showing how close your combined truck and trailer weight is to the GCWR limit. Green means plenty of room, amber means approaching the limit, red means you\'ve exceeded it. One glance tells you where you stand.',
              icon: '🎯',
            },
            {
              title: 'Cargo Zone Management',
              description: 'Add, move, and remove cargo items across your trailer\'s loading zones. Each zone has a weight total and the simulator recalculates everything instantly — tongue weight percentage, sway risk, axle loads — as you make changes.',
              icon: '📦',
            },
            {
              title: 'Truck Accessories Included',
              description: 'Brush guards, roof racks, toolboxes, auxiliary fuel tanks — the simulator loads your aftermarket accessories from your KamperHub garage and includes them in the weight calculations. No more guessing whether your accessories pushed you over the limit.',
              icon: '🔩',
            },
          ].map((feature, i) => (
            <div key={i} style={{
              display: 'flex',
              gap: '20px',
              marginBottom: '32px',
              padding: '24px',
              backgroundColor: colors.cream,
              borderRadius: '12px',
            }}>
              <div style={{ fontSize: '32px', flexShrink: 0 }}>{feature.icon}</div>
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: colors.darkEarth, marginBottom: '8px', marginTop: 0 }}>
                  {feature.title}
                </h3>
                <p style={{ fontSize: '16px', color: colors.slate, lineHeight: '1.6', margin: 0 }}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Calculator vs Simulator */}
      <section style={{ padding: '80px 24px', backgroundColor: colors.cream }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: '700',
            color: colors.darkEarth,
            marginBottom: '48px',
            textAlign: 'center',
          }}>
            Tow Simulator vs Basic Weight Calculator
          </h2>

          <div style={{
            backgroundColor: colors.white,
            borderRadius: '12px',
            overflow: 'hidden',
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '16px' }}>
              <thead>
                <tr style={{ backgroundColor: colors.primary }}>
                  <th style={{ padding: '16px 20px', textAlign: 'left', color: colors.white, fontWeight: '600' }}>Feature</th>
                  <th style={{ padding: '16px 20px', textAlign: 'center', color: colors.white, fontWeight: '600' }}>Basic Calculator</th>
                  <th style={{ padding: '16px 20px', textAlign: 'center', color: colors.white, fontWeight: '600' }}>Tow Simulator</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['GVWR / Trailer GVWR / GCWR check', '✅', '✅'],
                  ['Tongue weight percentage', '✅', '✅'],
                  ['Towing capacity check', '✅', '✅'],
                  ['Visual weight distribution', '—', '✅'],
                  ['Cargo zone management', '—', '✅'],
                  ['Sway risk warnings', '—', '✅'],
                  ['GCWR donut chart', '—', '✅'],
                  ['Aftermarket accessories', '—', '✅'],
                  ['Trailer floor plan view', '—', '✅'],
                  ['Real-time load adjustments', '—', '✅'],
                ].map(([feature, basic, sim], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '14px 20px', color: colors.darkEarth }}>{feature}</td>
                    <td style={{ padding: '14px 20px', textAlign: 'center', color: colors.slate }}>{basic}</td>
                    <td style={{ padding: '14px 20px', textAlign: 'center', color: colors.primary, fontWeight: '600' }}>{sim}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{
            fontSize: '16px',
            color: colors.slate,
            textAlign: 'center',
            marginTop: '24px',
            lineHeight: '1.6',
          }}>
            The <Link href="/us/towing-weight-calculator" style={{ color: colors.primary, fontWeight: '600' }}>free weight calculator</Link> is
            perfect for a quick compliance check. The tow simulator is for owners who want to understand and optimize their loading — especially
            before long trips, after adding accessories, or when towing close to limits.
          </p>
        </div>
      </section>

      {/* Use cases */}
      <section style={{ padding: '80px 24px', backgroundColor: colors.white }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: '700',
            color: colors.darkEarth,
            marginBottom: '48px',
            textAlign: 'center',
          }}>
            When to Use the Tow Simulator
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
          }}>
            {[
              {
                title: 'Before Buying a Trailer',
                description: 'Will your truck handle the trailer you\'re looking at? Enter the specs and see the full picture before you sign anything. Check GCWR, tongue weight, and whether you\'ll have any payload left for gear.',
                icon: '🛒',
              },
              {
                title: 'Before a Long Trip',
                description: 'You\'re packing for three weeks on the road. Extra water, extra fuel, extra supplies. Will it all fit within your limits? The simulator shows you exactly how much room you have — and where to put it.',
                icon: '🗺️',
              },
              {
                title: 'After Adding Accessories',
                description: 'That new brush guard weighs 140 lbs. The roof rack adds 65 lbs. The auxiliary fuel tank adds 90 lbs of steel before you even fill it. How much payload have you lost? The simulator includes all your aftermarket gear.',
                icon: '🔧',
              },
              {
                title: 'When Towing Near Limits',
                description: 'If your truck\'s towing capacity is close to your trailer\'s GVWR, every pound matters. The simulator helps you find the best loading arrangement to stay within all limits simultaneously.',
                icon: '⚖️',
              },
            ].map((useCase, i) => (
              <div key={i} style={{
                padding: '24px',
                backgroundColor: colors.cream,
                borderRadius: '12px',
              }}>
                <div style={{ fontSize: '36px', marginBottom: '12px' }}>{useCase.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.darkEarth, marginBottom: '8px' }}>
                  {useCase.title}
                </h3>
                <p style={{ fontSize: '15px', color: colors.slate, lineHeight: '1.6', margin: 0 }}>
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '80px 24px', backgroundColor: colors.cream }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: '700',
            color: colors.darkEarth,
            marginBottom: '48px',
            textAlign: 'center',
          }}>
            Frequently Asked Questions
          </h2>

          {faqs.map((faq, i) => (
            <div key={i} style={{
              marginBottom: '16px',
              padding: '24px',
              backgroundColor: colors.white,
              borderRadius: '12px',
            }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.darkEarth, marginBottom: '12px', marginTop: 0 }}>
                {faq.question}
              </h3>
              <p style={{ fontSize: '16px', color: colors.slate, lineHeight: '1.7', margin: 0 }}>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: '80px 24px',
        backgroundColor: colors.primary,
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: '700',
            color: colors.white,
            marginBottom: '16px',
          }}>
            Know Your Load Before You Hit the Road
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.85)',
            marginBottom: '32px',
            lineHeight: '1.6',
          }}>
            The only tow simulator built specifically for American trailer and RV owners. Simulate your setup, optimize your loading, and tow with confidence.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`${APP_URL}/signup?redirect=/tow-simulator`} style={{
              display: 'inline-block',
              padding: '16px 40px',
              backgroundColor: colors.accent,
              color: colors.white,
              textDecoration: 'none',
              fontWeight: '700',
              borderRadius: '12px',
              fontSize: '20px',
            }}>
              Open the Tow Simulator →
            </a>
            <a href={`${APP_URL}/signup?redirect=/weights`} style={{
              display: 'inline-block',
              padding: '16px 40px',
              backgroundColor: 'rgba(255,255,255,0.15)',
              color: colors.white,
              textDecoration: 'none',
              fontWeight: '700',
              borderRadius: '12px',
              fontSize: '20px',
              border: '2px solid rgba(255,255,255,0.3)',
            }}>
              Free Weight Check →
            </a>
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section style={{ padding: '48px 24px', backgroundColor: colors.cream }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '600', color: colors.darkEarth, marginBottom: '16px' }}>
            More Towing &amp; Weight Resources
          </h3>
          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/us/towing-weight-calculator" style={{ color: colors.primary, textDecoration: 'none', fontSize: '16px', fontWeight: '500' }}>
              Weight Calculator →
            </Link>
            <Link href="/us/trailer-weight-distribution-guide" style={{ color: colors.primary, textDecoration: 'none', fontSize: '16px', fontWeight: '500' }}>
              Weight Distribution Guide →
            </Link>
            <Link href="/us/overweight-trailer-fines" style={{ color: colors.primary, textDecoration: 'none', fontSize: '16px', fontWeight: '500' }}>
              Overweight Trailer Fines →
            </Link>
            <Link href="/us/rv-trip-planner" style={{ color: colors.primary, textDecoration: 'none', fontSize: '16px', fontWeight: '500' }}>
              Trip Planner →
            </Link>
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
