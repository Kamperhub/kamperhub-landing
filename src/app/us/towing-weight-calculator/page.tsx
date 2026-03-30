import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import TowCheckWidget from '../../../components/TowCheckWidget';

const APP_URL = 'https://app.kamperhub.com';

export const metadata: Metadata = {
  title: 'Towing Weight Calculator | Free GVWR, GCWR & Tongue Weight Check — KamperHub',
  description: 'Free towing weight calculator for RV and trailer owners. Check GVWR, GCWR, towing capacity and tongue weight in minutes.',
  keywords: 'towing weight calculator, GVWR calculator, GCWR calculator, tongue weight calculator, towing capacity check, can my truck tow my trailer, trailer weight check, RV weight calculator',
  openGraph: {
    title: 'Towing Weight Calculator — KamperHub',
    description: 'Free weight compliance calculator for RV and travel trailer owners. Check GVWR, GCWR and tongue weight before you hit the road.',
    url: 'https://kamperhub.com/us/towing-weight-calculator',
    siteName: 'KamperHub',
    locale: 'en_US',
    type: 'website',
    images: [{ url: 'https://kamperhub.com/logo-banner.jpg', width: 1200, height: 630, alt: 'KamperHub Towing Weight Calculator' }],
  },
  alternates: {
    canonical: 'https://kamperhub.com/us/towing-weight-calculator',
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

const faqs = [
  {
    question: 'How do I know if my truck can tow my travel trailer?',
    answer: 'You need to compare your vehicle\'s towing capacity (found in the owner\'s manual or on the door jamb sticker) against your trailer\'s loaded weight. Your vehicle must also stay within its GVWR (Gross Vehicle Weight Rating) when loaded with passengers, cargo, and the tongue weight from your trailer. KamperHub\'s free calculator checks all of these limits automatically.',
  },
  {
    question: 'What is GVWR and why does it matter for towing?',
    answer: 'GVWR (Gross Vehicle Weight Rating) is the maximum your vehicle or trailer can weigh when fully loaded. For your tow vehicle, this includes passengers, fuel, cargo, and the tongue weight from your trailer. Exceeding GVWR is a federal violation, voids your insurance, and makes your vehicle harder to steer and stop. It\'s the most commonly exceeded limit for trailer owners.',
  },
  {
    question: 'What is GCWR?',
    answer: 'GCWR (Gross Combined Weight Rating) is the maximum total weight of your tow vehicle, passengers, cargo, AND trailer combined. Even if your vehicle is under its GVWR and your trailer is under its GVWR, the total combination might still exceed your vehicle\'s GCWR. This is often the hidden limit that catches people out — especially with larger travel trailers and fifth wheels.',
  },
  {
    question: 'What should my tongue weight be?',
    answer: 'Your tongue weight (the downward force your trailer exerts on the hitch) should be between 10% and 15% of the trailer\'s total loaded weight. For a 5,000 lb trailer, that\'s 500–750 lbs. Too little tongue weight causes dangerous trailer sway at highway speeds. Too much overloads the rear axle of your tow vehicle.',
  },
  {
    question: 'What happens if my trailer is overweight?',
    answer: 'Exceeding weight ratings can result in DOT citations, fines (varying by state — from $200 to over $10,000 for commercial violations), voided insurance claims, and increased liability in accidents. If you\'re in a crash while overweight, your insurer can deny your claim entirely. Many states conduct random weigh station checks on recreational trailers during peak travel seasons.',
  },
  {
    question: 'What is the difference between dry weight and GVWR?',
    answer: 'Dry weight (or UVW — Unloaded Vehicle Weight) is your trailer\'s weight as shipped from the factory — empty, with no water, propane, or personal belongings. GVWR is the maximum it can weigh when fully loaded. The difference between GVWR and dry weight is your cargo carrying capacity (CCC) — how much stuff you can actually put in.',
  },
  {
    question: 'Do I need to weigh my trailer before every trip?',
    answer: 'Best practice is to check your weights whenever your load changes significantly — different trip with different gear, adding new accessories, or carrying extra water. KamperHub lets you save your vehicle and trailer specs and track what you\'re carrying, so you can check compliance digitally without visiting a truck scale every time.',
  },
  {
    question: 'Is the KamperHub weight calculator free?',
    answer: 'Yes. KamperHub\'s weight compliance dashboard is available on the free plan. It checks your GVWR, GCWR, towing capacity, and tongue weight percentage. For advanced features like the tow simulator, weight distribution analysis, and cargo zone tracking, you can upgrade to the Pro plan.',
  },
  {
    question: 'How accurate are towing weight calculators?',
    answer: 'KamperHub uses manufacturer-published specs for vehicle and trailer weights (GVWR, GCWR, curb weight, dry weight). The calculator is as accurate as the data you provide — if you enter your actual cargo, water, propane and passenger weights, the results closely match what a CAT scale would show. For the most precise result, weigh your loaded setup at a truck scale and compare.',
  },
  {
    question: 'Do I need to visit a CAT scale?',
    answer: 'A CAT scale or certified truck scale gives the most accurate measurement, and we recommend it for your first trip with a new setup. However, you can use KamperHub\'s calculator for ongoing checks — enter your known cargo weights and it will tell you if you\'re within limits. Many experienced towers use the calculator for routine checks and a truck scale for annual verification.',
  },
  {
    question: 'Is towing overweight illegal in the USA?',
    answer: 'Yes. Exceeding any rated weight limit (GVWR or GCWR) violates federal motor vehicle safety standards. States enforce these limits through DOT weigh stations and roadside inspections, with fines ranging from $200 to over $10,000 depending on the state and severity. More critically, your insurer can deny claims if your vehicle or trailer was overweight at the time of an accident — leaving you personally liable for all damages.',
  },
];

// Snippet-optimised FAQ schema for US market
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can my truck or SUV tow my RV legally in the United States?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your truck or SUV can legally tow an RV in the United States only if all manufacturer weight ratings are met, including GVWR, GCWR, payload capacity, axle ratings, and tongue weight. Staying under the advertised tow rating alone does not guarantee compliance.',
      },
    },
    {
      '@type': 'Question',
      name: 'What weights do I need to use an RV towing calculator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "To use an RV towing calculator accurately, you need your vehicle's GVWR, GCWR, curb weight, payload capacity, and maximum tow rating, plus your trailer's GVWR and tongue weight. Actual scale weights provide the most reliable results.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is an RV towing calculator accurate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An RV towing calculator is accurate when you enter real-world weights rather than brochure or dry weights. Passengers, gear, accessories, water, and fuel all reduce your available towing and payload capacity.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if my RV or trailer is overweight?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If your RV or trailer is overweight, you may face fines, be required to reduce weight before continuing, or have your insurance coverage denied after an accident. Overweight setups also increase braking distance and reduce vehicle control.',
      },
    },
  ],
};

const softwareJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'KamperHub Towing Weight Calculator',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description: 'Free towing weight calculator that checks GVWR, GCWR, towing capacity and tongue weight for RV and travel trailer owners.',
  url: 'https://app.kamperhub.com/weights',
};

export default function USTowingWeightCalculatorPage() {
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
            <Link href="/us/tow-simulator" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', fontSize: '20px', fontWeight: '500' }}>Tow Simulator</Link>
            <a href={`${APP_URL}/blog`} style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', fontSize: '20px', fontWeight: '500' }}>Blog</a>
            <a href={`${APP_URL}/signup?redirect=/weights`} style={{ padding: '10px 24px', backgroundColor: colors.accent, color: colors.white, textDecoration: 'none', fontWeight: '600', borderRadius: '8px', fontSize: '20px' }}>Try Free</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ backgroundColor: colors.cream, padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: '800', color: colors.darkEarth, marginBottom: '16px', lineHeight: '1.2' }}>
            RV Towing Weight Calculator — Can My Truck or SUV Tow This Trailer?
          </h1>
          <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '32px' }}>
            Last updated: March 2026 · Reviewed by the KamperHub towing compliance team
          </p>
          <p style={{ fontSize: '20px', color: colors.slate, marginBottom: '32px', lineHeight: '1.6' }}>
            Check if your truck can safely tow your trailer — for free. Our calculator checks your GVWR, GCWR,
            towing capacity and tongue weight in under two minutes.
          </p>
          {/* Embedded tow check widget — prominent placement */}
          <div style={{
            marginTop: '32px',
            padding: '24px',
            backgroundColor: colors.white,
            borderRadius: '16px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
            border: `2px solid ${colors.primary}`,
          }}>
            <h2 style={{ fontSize: '22px', fontWeight: '700', color: colors.darkEarth, marginBottom: '4px', marginTop: 0 }}>
              Enter Your Truck and Trailer Weights
            </h2>
            <p style={{ fontSize: '15px', color: colors.slate, marginBottom: '16px' }}>
              Select your vehicle and trailer below to see if they&apos;re compatible. For a full compliance check with cargo, passengers and tongue weight, sign up free.
            </p>
            <TowCheckWidget region="us" />
          </div>

          <div style={{ marginTop: '24px' }}>
            <a href={`${APP_URL}/signup?redirect=/weights`} style={{
              display: 'inline-block', padding: '16px 40px', backgroundColor: colors.primary, color: colors.white,
              textDecoration: 'none', fontWeight: '700', borderRadius: '12px', fontSize: '20px',
            }}>
              Full Weight Compliance Check →
            </a>
            <p style={{ fontSize: '14px', color: colors.slate, marginTop: '12px' }}>
              No credit card required. Free plan includes full weight compliance dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* What it checks */}
      <section style={{ padding: '80px 24px', backgroundColor: colors.white }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', color: colors.darkEarth, marginBottom: '16px', textAlign: 'center' }}>
            How This RV Towing Weight Calculator Works
          </h2>
          <p style={{ fontSize: '18px', color: colors.slate, textAlign: 'center', marginBottom: '48px', lineHeight: '1.6' }}>
            This RV towing weight calculator shows whether your truck or SUV can safely tow a specific trailer based on real
            weight limits. It checks GVWR, GCWR, payload capacity, and tongue weight together, not just the advertised tow rating.
            This gives a clearer picture of real-world towing limits before you buy an RV or hit the road.
          </p>

          {[
            { title: 'GVWR — Gross Vehicle Weight Rating', description: 'The maximum your tow vehicle can weigh when fully loaded — including passengers, fuel, cargo, and the tongue weight from your trailer. KamperHub compares your actual loaded weight against your vehicle\'s GVWR and shows a clear pass or fail.', icon: '⚖️' },
            { title: 'Trailer GVWR', description: 'The maximum your trailer can weigh when fully loaded, including everything packed inside it. We check your trailer\'s actual weight (dry weight plus cargo) against its GVWR. Exceeding this is the most common compliance failure.', icon: '🏕️' },
            { title: 'GCWR — Gross Combined Weight Rating', description: 'The maximum combined weight of your tow vehicle and trailer together. Even if each is under its individual GVWR, the total combination might still exceed your vehicle\'s GCWR. This is the hidden limit that catches experienced towers off guard.', icon: '🔗' },
            { title: 'Towing Capacity', description: 'The maximum weight your vehicle is rated to tow. This is set by the vehicle manufacturer and considers engine power, transmission, brakes, and chassis strength. KamperHub checks your trailer\'s loaded weight against this limit.', icon: '🚛' },
            { title: 'Tongue Weight', description: 'The downward force your trailer applies to the hitch ball. This should be between 10% and 15% of your trailer\'s loaded weight. Too little causes dangerous trailer sway at highway speeds. Too much overloads your rear axle.', icon: '📐' },
          ].map((check, i) => (
            <div key={i} style={{ display: 'flex', gap: '20px', marginBottom: '32px', padding: '24px', backgroundColor: colors.cream, borderRadius: '12px' }}>
              <div style={{ fontSize: '32px', flexShrink: 0 }}>{check.icon}</div>
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: colors.darkEarth, marginBottom: '8px', marginTop: 0 }}>{check.title}</h3>
                <p style={{ fontSize: '16px', color: colors.slate, lineHeight: '1.6', margin: 0 }}>{check.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How to check */}
      <section style={{ padding: '80px 24px', backgroundColor: colors.cream }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', color: colors.darkEarth, marginBottom: '48px', textAlign: 'center' }}>
            Why Being Under the Tow Rating Is Not Enough
          </h2>

          {[
            { step: '1', title: 'Select your tow vehicle', description: 'Pick your vehicle from our database. KamperHub automatically loads the manufacturer specs — GVWR, GCWR, towing capacity, curb weight and tongue weight limit. No manual data entry required.' },
            { step: '2', title: 'Select your trailer', description: 'Choose your travel trailer, fifth wheel, or toy hauler from the database. We load the dry weight, GVWR, and hitch weight specs directly from manufacturer data. If your model isn\'t listed, enter the specs from your Federal Certification Label.' },
            { step: '3', title: 'Add your cargo and passengers', description: 'Tell us what you\'re carrying — passengers, fresh water, propane, fuel level, and any additional cargo. KamperHub calculates the total loaded weight for both your vehicle and trailer.' },
            { step: '4', title: 'Get your compliance result', description: 'KamperHub checks every weight rating and shows you a clear dashboard with pass/fail indicators for GVWR, GCWR, towing capacity and tongue weight percentage. If anything is over, you\'ll know exactly what to fix.' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '20px', marginBottom: '24px', alignItems: 'flex-start' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: colors.primary, color: colors.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: '700', flexShrink: 0 }}>{item.step}</div>
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: colors.darkEarth, marginBottom: '8px', marginTop: 0 }}>{item.title}</h3>
                <p style={{ fontSize: '16px', color: colors.slate, lineHeight: '1.6', margin: 0 }}>{item.description}</p>
              </div>
            </div>
          ))}

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <a href={`${APP_URL}/signup?redirect=/weights`} style={{ display: 'inline-block', padding: '16px 40px', backgroundColor: colors.primary, color: colors.white, textDecoration: 'none', fontWeight: '700', borderRadius: '12px', fontSize: '20px' }}>
              Check Your Weights Free →
            </a>
          </div>
        </div>
      </section>

      {/* Weight terms glossary */}
      <section style={{ padding: '80px 24px', backgroundColor: colors.white }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', color: colors.darkEarth, marginBottom: '48px', textAlign: 'center' }}>
            Understanding GVWR, GCWR, Payload, and Tongue Weight
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              { term: 'Dry Weight / UVW', definition: 'Unloaded Vehicle Weight — the weight of your trailer as shipped from the factory, with no water, propane, or personal belongings. This is the starting point for all weight calculations.' },
              { term: 'GVWR', definition: 'Gross Vehicle Weight Rating — the maximum your vehicle or trailer can weigh when fully loaded. Set by the manufacturer and stamped on the Federal Certification Label.' },
              { term: 'GCWR', definition: 'Gross Combined Weight Rating — the maximum total weight of your tow vehicle plus trailer. Set by the vehicle manufacturer.' },
              { term: 'GAWR', definition: 'Gross Axle Weight Rating — the maximum weight each axle can support. Found on the Federal Certification Label. Important for weight distribution.' },
              { term: 'Curb Weight', definition: 'The weight of your vehicle with a full tank of fuel and all standard equipment but no passengers or cargo. Similar to dry weight for trailers.' },
              { term: 'Payload Capacity', definition: 'The available carrying capacity. For vehicles: GVWR minus curb weight. For trailers: GVWR minus dry weight. This is how much stuff you can actually put in.' },
              { term: 'CCC', definition: 'Cargo Carrying Capacity — the weight of personal belongings you can add to your trailer. Calculated as GVWR minus UVW minus full fresh water, propane, and other factory-installed options.' },
              { term: 'Tongue Weight / Hitch Weight', definition: 'The downward force the trailer exerts on the vehicle\'s hitch. Affects both the vehicle\'s GVWR (adds to its load) and the trailer\'s stability.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '20px', backgroundColor: colors.cream, borderRadius: '12px', borderLeft: `4px solid ${colors.primary}` }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.darkEarth, marginBottom: '8px', marginTop: 0 }}>{item.term}</h3>
                <p style={{ fontSize: '15px', color: colors.slate, lineHeight: '1.6', margin: 0 }}>{item.definition}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section style={{ padding: '80px 24px', backgroundColor: colors.cream }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', color: colors.darkEarth, marginBottom: '48px', textAlign: 'center' }}>
            What Happens If Your RV or Trailer Is Overweight
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Insurance Protection', description: 'If you\'re in an accident while exceeding weight ratings, your insurer can reject your claim. A single weight check before each trip protects you from catastrophic financial loss.', icon: '🛡️' },
              { title: 'Avoid DOT Citations', description: 'Many states require recreational trailers to stop at weigh stations. Overweight citations can range from $200 to over $10,000 depending on the state, severity, and whether it\'s classified as a commercial violation.', icon: '🚨' },
              { title: 'Safer Towing', description: 'Overloaded vehicles take longer to stop, are harder to steer, and are more prone to tire blowouts. Incorrect tongue weight causes dangerous trailer sway at highway speeds.', icon: '✅' },
              { title: 'Longer Vehicle Life', description: 'Consistently exceeding weight limits accelerates wear on your transmission, brakes, tires, and suspension. Towing within limits means your vehicle lasts longer and costs less to maintain.', icon: '🔧' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '24px', backgroundColor: colors.white, borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '36px', marginBottom: '12px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.darkEarth, marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ fontSize: '15px', color: colors.slate, lineHeight: '1.6', margin: 0 }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '80px 24px', backgroundColor: colors.white }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', color: colors.darkEarth, marginBottom: '48px', textAlign: 'center' }}>Frequently Asked Questions</h2>
          {faqs.map((faq, i) => (
            <div key={i} style={{ marginBottom: '16px', padding: '24px', backgroundColor: colors.cream, borderRadius: '12px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.darkEarth, marginBottom: '12px', marginTop: 0 }}>{faq.question}</h3>
              <p style={{ fontSize: '16px', color: colors.slate, lineHeight: '1.7', margin: 0 }}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', backgroundColor: colors.primary, textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', color: colors.white, marginBottom: '16px' }}>Check Your Full Towing Setup in KamperHub</h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.85)', marginBottom: '32px', lineHeight: '1.6' }}>
            Free to use, no credit card required. Check GVWR, GCWR, towing capacity and tongue weight before your next trip.
          </p>
          <a href={`${APP_URL}/signup?redirect=/weights`} style={{ display: 'inline-block', padding: '16px 48px', backgroundColor: colors.accent, color: colors.white, textDecoration: 'none', fontWeight: '700', borderRadius: '12px', fontSize: '20px' }}>
            Get Started Free →
          </a>
        </div>
      </section>

      {/* Contextual cross-links — pillar page */}
      <section style={{ padding: '80px 24px', backgroundColor: colors.cream }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: colors.darkEarth, marginBottom: '16px', textAlign: 'center' }}>
            Go Deeper: Weight Compliance Resources
          </h2>
          <p style={{ fontSize: '18px', color: colors.slate, textAlign: 'center', marginBottom: '48px', lineHeight: '1.6' }}>
            The calculator tells you if you&apos;re compliant. These guides help you understand why — and what to do if you&apos;re not.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            <Link href="/us/tow-simulator" style={{ textDecoration: 'none' }}>
              <div style={{ padding: '24px', backgroundColor: colors.white, borderRadius: '12px', borderLeft: `4px solid ${colors.primary}`, height: '100%' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.darkEarth, marginBottom: '8px', marginTop: 0 }}>Tow Simulator</h3>
                <p style={{ fontSize: '15px', color: colors.slate, lineHeight: '1.6', margin: 0 }}>
                  Go beyond pass/fail. Visualize weight distribution across cargo zones, see sway risk, and experiment with loading — all before you pack.
                </p>
              </div>
            </Link>
            <Link href="/us/trailer-weight-distribution-guide" style={{ textDecoration: 'none' }}>
              <div style={{ padding: '24px', backgroundColor: colors.white, borderRadius: '12px', borderLeft: `4px solid ${colors.primary}`, height: '100%' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.darkEarth, marginBottom: '8px', marginTop: 0 }}>Weight Distribution Guide</h3>
                <p style={{ fontSize: '15px', color: colors.slate, lineHeight: '1.6', margin: 0 }}>
                  Where should heavy items go? What causes sway? The complete guide to loading your trailer safely, with diagrams.
                </p>
              </div>
            </Link>
            <Link href="/us/overweight-trailer-fines" style={{ textDecoration: 'none' }}>
              <div style={{ padding: '24px', backgroundColor: colors.white, borderRadius: '12px', borderLeft: '4px solid #ef4444', height: '100%' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.darkEarth, marginBottom: '8px', marginTop: 0 }}>Overweight Fines by State</h3>
                <p style={{ fontSize: '15px', color: colors.slate, lineHeight: '1.6', margin: 0 }}>
                  Fines from $200 to $10,000+, DOT citations, and voided insurance. State-by-state breakdown of what happens when you get caught.
                </p>
              </div>
            </Link>
            <Link href="/us/rv-trip-planner" style={{ textDecoration: 'none' }}>
              <div style={{ padding: '24px', backgroundColor: colors.white, borderRadius: '12px', borderLeft: `4px solid ${colors.accent}`, height: '100%' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.darkEarth, marginBottom: '8px', marginTop: 0 }}>RV Trip Planner</h3>
                <p style={{ fontSize: '15px', color: colors.slate, lineHeight: '1.6', margin: 0 }}>
                  Plan your route with fuel stops, boondocking, weather and fatigue management — all built for trucks towing trailers.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

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
