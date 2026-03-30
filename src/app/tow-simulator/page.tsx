import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const APP_URL = 'https://app.kamperhub.com';

export const metadata: Metadata = {
  title: 'Tow Simulator: Check If Your Car Can Tow Your Caravan Safely | Weight Distribution & Compliance — KamperHub',
  description: 'Not a game — a towing compliance simulator. Check if your car can safely tow your caravan with KamperHub\'s weight distribution simulator. See towball load, sway risk, cargo zones, and GCM compliance for your actual vehicle and caravan combination.',
  keywords: 'tow capacity calculator, can my car tow my caravan, caravan towing compliance check, caravan weight distribution simulator, towing setup check, towball weight calculator, caravan sway risk checker',
  openGraph: {
    title: 'Tow Simulator: Check If Your Car Can Tow Your Caravan Safely — KamperHub',
    description: 'Towing compliance simulator — not a game. Check weight distribution, sway risk, towball load and GCM compliance for your vehicle and caravan combination.',
    url: 'https://kamperhub.com/tow-simulator',
    siteName: 'KamperHub',
    locale: 'en_AU',
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
    title: 'Tow Simulator: Can Your Car Tow Your Caravan Safely? — KamperHub',
    description: 'Towing compliance simulator. Check weight distribution, sway risk, towball load and GCM compliance — all in one view.',
    images: ['https://kamperhub.com/logo-banner.jpg'],
  },
  alternates: {
    canonical: 'https://kamperhub.com/tow-simulator',
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
    answer: 'A tow simulator is a digital tool that models your complete tow setup — vehicle, caravan, cargo, passengers, and accessories — and shows you how weight is distributed across the combination. Unlike a basic weight calculator that only checks totals, a simulator shows you WHERE weight is sitting and how it affects stability, towball load, and axle weights. It lets you experiment with loading changes before you physically move anything.',
  },
  {
    question: 'How is the tow simulator different from a weight calculator?',
    answer: 'A weight calculator checks whether your totals (GVM, ATM, GCM) are within limits — it gives you a pass or fail. The tow simulator goes deeper: it models weight distribution across cargo zones (front, middle, rear of the caravan), shows how your loading affects towball percentage, displays sway risk indicators, and lets you drag items between zones to see the impact in real time. Think of the calculator as a weighbridge check, and the simulator as a full loading analysis.',
  },
  {
    question: 'When should I use the tow simulator?',
    answer: 'The most valuable times to use the simulator are: before buying a caravan (will your vehicle handle it?), before a long trip (is your load distribution safe?), after adding new accessories like solar panels or tool boxes (how does the extra weight affect your setup?), and whenever you\'re carrying significantly more water, fuel, or gear than usual.',
  },
  {
    question: 'What does the tow simulator check?',
    answer: 'The simulator checks and visualises: total vehicle and caravan weights against legal limits (GVM, ATM, GCM), towball download as a percentage of caravan loaded weight (8-14% safe range in Australia), weight distribution across caravan loading zones, sway risk based on your towball percentage and rear overhang loading, and a GCM donut chart showing how close you are to your combined mass limit.',
  },
  {
    question: 'Can I load my actual vehicle and caravan specs into the simulator?',
    answer: 'Yes. The simulator connects to your KamperHub garage, so it loads your real vehicle and caravan specs automatically. It also pulls in any aftermarket accessories you\'ve added (bull bars, tool boxes, roof racks, solar panels) and caravan accessories, giving you a realistic simulation based on your actual setup — not generic numbers.',
  },
  {
    question: 'Is the tow simulator free?',
    answer: 'The tow simulator is available on KamperHub\'s Pro plan ($49/year). The free plan includes a weight compliance dashboard that checks your GVM, ATM, GCM, towing capacity, and towball percentage. The simulator adds visual weight distribution modelling, cargo zone management, sway risk analysis, and the ability to experiment with different loading scenarios.',
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
    priceCurrency: 'AUD',
    description: 'Pro plan — $49/year',
  },
  description: 'Caravan tow simulator that models weight distribution, sway risk, towball load and compliance for Australian caravan owners.',
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
            <Link href="/caravan-towing-weight-calculator" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', fontSize: '20px', fontWeight: '500' }}>Weight Calculator</Link>
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
            Tow Simulator — Can My Car Tow My Caravan Safely and Legally?
          </h1>
          <p style={{
            fontSize: '20px',
            color: colors.slate,
            marginBottom: '12px',
            lineHeight: '1.6',
          }}>
            This is not a driving game or animation — it&apos;s a <strong>towing compliance simulator</strong> that models
            your real vehicle and caravan combination. See weight distribution, sway risk, towball load and legal compliance
            in one visual dashboard before you pack a single item.
          </p>
          <p style={{
            fontSize: '15px',
            color: colors.slate,
            marginBottom: '32px',
            lineHeight: '1.5',
            fontStyle: 'italic',
          }}>
            Built for caravan owners who want to know if their setup is safe and legal — not for entertainment.
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
            What the Tow Simulator Checks (GVM, GCM, Payload and Towball Weight)
          </h2>
          <p style={{
            fontSize: '18px',
            color: colors.slate,
            textAlign: 'center',
            marginBottom: '48px',
            lineHeight: '1.6',
          }}>
            The tow simulator checks whether your car can tow your caravan by comparing your real-world weights against
            legal and manufacturer limits. It looks beyond advertised towing capacity and evaluates GVM, GCM, payload, and
            towball weight together. This shows whether your setup is safe and compliant, not just whether the engine can
            physically pull the load.
          </p>

          {[
            {
              title: 'Visual Weight Distribution',
              description: 'See exactly how weight is distributed across your caravan\'s floor plan. The simulator uses a bird\'s-eye view of your caravan with colour-coded loading zones (front, middle, rear) so you can see at a glance whether your load is balanced or dangerously rear-heavy.',
              icon: '📊',
            },
            {
              title: 'Sway Risk Analysis',
              description: 'When your towball percentage drops below the safe range or too much weight sits behind the axle, the simulator flags a SWAY RISK warning. Caravan sway is the leading cause of towing accidents in Australia — the simulator helps you prevent it before you leave the driveway.',
              icon: '⚠️',
            },
            {
              title: 'Towball Load Breakdown',
              description: 'See exactly how your towball weight is made up — the caravan\'s base towball spec plus the effect of your cargo placement. Moving a heavy item from the rear to the front of the caravan changes the towball load. The simulator shows this in real time.',
              icon: '📐',
            },
            {
              title: 'GCM Donut Chart',
              description: 'A visual gauge showing how close your combined vehicle and caravan weight is to the GCM limit. Green means plenty of room, amber means approaching the limit, red means you\'ve exceeded it. One glance tells you where you stand.',
              icon: '🎯',
            },
            {
              title: 'Cargo Zone Management',
              description: 'Add, move, and remove cargo items across your caravan\'s loading zones. Each zone has a weight total and the simulator recalculates everything instantly — towball percentage, sway risk, axle loads — as you make changes.',
              icon: '📦',
            },
            {
              title: 'Vehicle Accessories Included',
              description: 'Bull bars, roof racks, tool boxes, long-range fuel tanks — the simulator loads your aftermarket accessories from your KamperHub garage and includes them in the weight calculations. No more guessing whether your accessories pushed you over the limit.',
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
            Why Towing Capacity Alone Is Not Enough
          </h2>
          <p style={{ fontSize: '18px', color: colors.slate, textAlign: 'center', marginBottom: '48px', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto 48px' }}>
            Towing capacity alone does not tell you if your car can legally tow a caravan. Most vehicles reach their
            payload or GVM limit before hitting maximum towing capacity. Passengers, accessories, fuel, and towball weight
            all count toward these limits, which is why many caravans are technically overweight despite being under the
            towing capacity figure.
          </p>

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
                  ['GVM / ATM / GCM check', '✅', '✅'],
                  ['Towball weight percentage', '✅', '✅'],
                  ['Towing capacity check', '✅', '✅'],
                  ['Visual weight distribution', '—', '✅'],
                  ['Cargo zone management', '—', '✅'],
                  ['Sway risk warnings', '—', '✅'],
                  ['GCM donut chart', '—', '✅'],
                  ['Aftermarket accessories', '—', '✅'],
                  ['Caravan floor plan view', '—', '✅'],
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
            The <Link href="/caravan-towing-weight-calculator" style={{ color: colors.primary, fontWeight: '600' }}>free weight calculator</Link> is
            perfect for a quick compliance check. The tow simulator is for owners who want to understand and optimise their loading — especially
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
            What Happens If Your Setup Fails the Simulation?
          </h2>
          <p style={{ fontSize: '18px', color: colors.slate, textAlign: 'center', marginBottom: '48px', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto 48px' }}>
            If your setup fails the tow simulation, it means one or more legal weight limits are exceeded.
            This can result in unsafe handling, increased braking distance, voided insurance, and fines if stopped
            by police. The simulation highlights exactly which limit is exceeded so you know what needs to change
            before towing.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
          }}>
            {[
              {
                title: 'Before Buying a Caravan',
                description: 'Will your vehicle handle the caravan you\'re looking at? Enter the specs and see the full picture before you sign anything. Check GCM, towball load, and whether you\'ll have any payload left for gear.',
                icon: '🛒',
              },
              {
                title: 'Before a Long Trip',
                description: 'You\'re packing for three weeks in the outback. Extra water, extra fuel, extra food. Will it all fit within your limits? The simulator shows you exactly how much room you have — and where to put it.',
                icon: '🗺️',
              },
              {
                title: 'After Adding Accessories',
                description: 'That new bull bar weighs 65kg. The roof rack adds 30kg. The long-range tank adds 40kg of steel before you even fill it. How much payload have you lost? The simulator includes all your aftermarket gear.',
                icon: '🔧',
              },
              {
                title: 'When Towing Near Limits',
                description: 'If your vehicle\'s towing capacity is close to your caravan\'s ATM, every kilogram matters. The simulator helps you find the best loading arrangement to stay within all limits simultaneously.',
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
            Run a Full Weight Check in KamperHub
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.85)',
            marginBottom: '32px',
            lineHeight: '1.6',
          }}>
            The only tow simulator built specifically for Australian caravan owners. Simulate your setup, optimise your loading, and tow with confidence.
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

      {/* Contextual cross-links */}
      <section style={{ padding: '80px 24px', backgroundColor: colors.white }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', color: colors.darkEarth, marginBottom: '48px', textAlign: 'center' }}>
            Related Weight &amp; Towing Tools
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            <Link href="/caravan-towing-weight-calculator" style={{ textDecoration: 'none' }}>
              <div style={{ padding: '24px', backgroundColor: colors.cream, borderRadius: '12px', borderLeft: `4px solid ${colors.primary}`, height: '100%' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.darkEarth, marginBottom: '8px', marginTop: 0 }}>
                  Free Weight Calculator
                </h3>
                <p style={{ fontSize: '15px', color: colors.slate, lineHeight: '1.6', margin: 0 }}>
                  Quick pass/fail check on your GVM, ATM, GCM, towing capacity and towball weight. Start here if you just need to know whether your combination is legal.
                </p>
              </div>
            </Link>
            <Link href="/caravan-weight-distribution-guide" style={{ textDecoration: 'none' }}>
              <div style={{ padding: '24px', backgroundColor: colors.cream, borderRadius: '12px', borderLeft: `4px solid ${colors.primary}`, height: '100%' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.darkEarth, marginBottom: '8px', marginTop: 0 }}>
                  Weight Distribution Guide
                </h3>
                <p style={{ fontSize: '15px', color: colors.slate, lineHeight: '1.6', margin: 0 }}>
                  Learn the theory behind loading zones — where heavy, medium and light items should go, and why. The guide behind the simulator.
                </p>
              </div>
            </Link>
            <Link href="/caravan-overweight-fines-australia" style={{ textDecoration: 'none' }}>
              <div style={{ padding: '24px', backgroundColor: colors.cream, borderRadius: '12px', borderLeft: '4px solid #ef4444', height: '100%' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.darkEarth, marginBottom: '8px', marginTop: 0 }}>
                  Overweight Fines by State
                </h3>
                <p style={{ fontSize: '15px', color: colors.slate, lineHeight: '1.6', margin: 0 }}>
                  What happens when you get it wrong. State-by-state fines, roadside inspection process, and why your insurance might not cover you.
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
            <Link href="/caravan-towing-weight-calculator" style={{ color: colors.primary, textDecoration: 'none', fontSize: '16px', fontWeight: '500' }}>
              Weight Calculator →
            </Link>
            <Link href="/caravan-weight-distribution-guide" style={{ color: colors.primary, textDecoration: 'none', fontSize: '16px', fontWeight: '500' }}>
              Weight Distribution Guide →
            </Link>
            <Link href="/caravan-overweight-fines-australia" style={{ color: colors.primary, textDecoration: 'none', fontSize: '16px', fontWeight: '500' }}>
              Overweight Fines by State →
            </Link>
            <Link href="/caravan-trip-planner" style={{ color: colors.primary, textDecoration: 'none', fontSize: '16px', fontWeight: '500' }}>
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
