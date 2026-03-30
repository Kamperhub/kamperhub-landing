import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const APP_URL = 'https://app.kamperhub.com';

export const metadata: Metadata = {
  title: 'Caravan Overweight Fines Australia | State-by-State Penalties & How to Avoid Them — KamperHub',
  description: 'Australian caravan overweight fines by state — QLD, NSW, VIC, SA, WA, TAS, NT, ACT. Learn the penalties for overloaded caravans, what happens at a roadside inspection, and how to avoid fines and voided insurance.',
  keywords: 'caravan overweight fine australia, overloaded caravan penalty, caravan weight fine QLD, defect notice caravan, caravan roadside inspection, overweight caravan insurance',
  openGraph: {
    title: 'Caravan Overweight Fines Australia — KamperHub',
    description: 'State-by-state overweight fines, roadside inspection process, insurance implications, and how to avoid penalties.',
    url: 'https://kamperhub.com/caravan-overweight-fines-australia',
    siteName: 'KamperHub',
    locale: 'en_AU',
    type: 'article',
    images: [{ url: 'https://kamperhub.com/logo-banner.jpg', width: 1200, height: 630, alt: 'Caravan Overweight Fines Australia' }],
  },
  alternates: {
    canonical: 'https://kamperhub.com/caravan-overweight-fines-australia',
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
    question: 'How much is the fine for an overloaded caravan in Australia?',
    answer: 'Fines vary by state and severity. Minor overloading (under 10%) can attract fines from $400 to $1,500. Severe overloading (over 20%) can result in fines exceeding $5,000, loss of licence points, and a defect notice that grounds your vehicle until rectified. The exact amount depends on which state you\'re in and how far over the limit you are.',
  },
  {
    question: 'What happens at a caravan roadside inspection?',
    answer: 'Inspectors typically direct you to a weighbridge or use portable weighing equipment. They check your vehicle\'s GVM, caravan\'s ATM, combined GCM, and sometimes individual axle weights. If any limit is exceeded, you\'ll receive a defect notice requiring you to reduce the load before continuing. Fines are issued on the spot in most states.',
  },
  {
    question: 'Does being overweight void my caravan insurance?',
    answer: 'Yes, in most cases. Australian insurers can reject claims if your vehicle or caravan was over its rated weight limits at the time of an incident. This applies to both comprehensive and third-party policies. If you cause an accident while overweight, you could be personally liable for all damages — including other people\'s vehicles, property, and medical costs.',
  },
  {
    question: 'Can I get fined for an overloaded tow vehicle even if my caravan is within limits?',
    answer: 'Yes. Your tow vehicle has its own GVM limit, and the towball download from your caravan counts toward it. Many tow vehicles exceed GVM once you add passengers, fuel, gear, and towball weight — even when the caravan itself is under its ATM. Police check the vehicle and caravan independently.',
  },
  {
    question: 'How can I check if my caravan is overweight before a trip?',
    answer: 'The most reliable method is visiting a public weighbridge (free at most locations). You can also use KamperHub\'s free weight compliance calculator, which checks your GVM, ATM, GCM, towing capacity, and towball percentage based on your vehicle and caravan specs plus your cargo. This gives you a digital check before you leave.',
  },
  {
    question: 'Are caravan weight inspections common in Australia?',
    answer: 'Inspections are becoming more frequent, particularly during school holidays and on major touring routes. Queensland, New South Wales, and Victoria have all increased enforcement in recent years. Some states use permanent weigh stations on highways, while others conduct random roadside checks using portable equipment.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

export default function CaravanOverweightFinesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Nav */}
      <nav style={{ backgroundColor: colors.primary, padding: '16px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/"><Image src="/logo.png" alt="KamperHub" width={140} height={50} priority /></Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', fontSize: '20px', fontWeight: '500' }}>Home</Link>
            <Link href="/caravan-towing-weight-calculator" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', fontSize: '20px', fontWeight: '500' }}>Weight Calculator</Link>
            <Link href="/tow-simulator" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', fontSize: '20px', fontWeight: '500' }}>Tow Simulator</Link>
            <a href={`${APP_URL}/signup?redirect=/weights`} style={{ padding: '10px 24px', backgroundColor: colors.accent, color: colors.white, textDecoration: 'none', fontWeight: '600', borderRadius: '8px', fontSize: '20px' }}>Try Free</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ backgroundColor: '#fef2f2', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: '800', color: colors.darkEarth, marginBottom: '16px', lineHeight: '1.2' }}>
            Caravan Overweight Fines in Australia — Penalties, Demerit Points and Risks
          </h1>
          <p style={{ fontSize: '20px', color: colors.slate, marginBottom: '32px', lineHeight: '1.6' }}>
            Yes, it is illegal to tow an overweight caravan in Australia. If your vehicle or caravan exceeds GVM, ATM, GCM,
            or axle limits, you can be fined, lose demerit points, and be ordered off the road. Even small overloads can
            result in penalties during roadside weight checks.
          </p>
          <a href={`${APP_URL}/signup?redirect=/weights`} style={{
            display: 'inline-block', padding: '16px 40px', backgroundColor: colors.primary, color: colors.white,
            textDecoration: 'none', fontWeight: '700', borderRadius: '12px', fontSize: '20px',
          }}>
            Check Your Weights Free →
          </a>
        </div>
      </section>

      {/* State by state */}
      <section style={{ padding: '80px 24px', backgroundColor: colors.white }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', color: colors.darkEarth, marginBottom: '16px', textAlign: 'center' }}>
            Caravan Overweight Fines by State
          </h2>
          <p style={{ fontSize: '18px', color: colors.slate, textAlign: 'center', marginBottom: '16px', lineHeight: '1.6' }}>
            Each Australian state and territory has its own penalties for overloaded vehicles and trailers.
            Fines generally increase with the severity of overloading.
          </p>
          <p style={{ fontSize: '14px', color: '#ef4444', textAlign: 'center', marginBottom: '48px' }}>
            <strong>Note:</strong> These figures are indicative and based on publicly available information as at March 2026.
            Always check your state&apos;s current road transport legislation for the latest penalties.
          </p>

          <div style={{ backgroundColor: colors.cream, borderRadius: '12px', overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '15px' }}>
              <thead>
                <tr style={{ backgroundColor: colors.primary }}>
                  <th style={{ padding: '14px 16px', textAlign: 'left', color: colors.white, fontWeight: '600' }}>State</th>
                  <th style={{ padding: '14px 16px', textAlign: 'left', color: colors.white, fontWeight: '600' }}>Minor Overload</th>
                  <th style={{ padding: '14px 16px', textAlign: 'left', color: colors.white, fontWeight: '600' }}>Severe Overload</th>
                  <th style={{ padding: '14px 16px', textAlign: 'left', color: colors.white, fontWeight: '600' }}>Other Penalties</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Queensland', '$575 – $1,150', '$2,300 – $5,750', 'Defect notice, demerit points'],
                  ['New South Wales', '$464 – $1,160', '$2,320 – $5,800', 'Defect notice, court summons for severe'],
                  ['Victoria', '$370 – $925', '$1,850 – $4,630', 'Defect notice, vehicle grounded'],
                  ['South Australia', '$450 – $1,100', '$2,200 – $5,500', 'Defect notice, licence points'],
                  ['Western Australia', '$400 – $1,000', '$2,000 – $5,000', 'Vehicle grounded until compliant'],
                  ['Tasmania', '$350 – $875', '$1,750 – $4,375', 'Defect notice'],
                  ['Northern Territory', '$500 – $1,250', '$2,500 – $5,000', 'Defect notice, vehicle grounded'],
                  ['ACT', '$450 – $1,125', '$2,250 – $4,500', 'Defect notice, demerit points'],
                ].map(([state, minor, severe, other], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #e5e5e5' }}>
                    <td style={{ padding: '14px 16px', fontWeight: '600', color: colors.darkEarth }}>{state}</td>
                    <td style={{ padding: '14px 16px', color: colors.slate }}>{minor}</td>
                    <td style={{ padding: '14px 16px', color: '#ef4444', fontWeight: '600' }}>{severe}</td>
                    <td style={{ padding: '14px 16px', color: colors.slate }}>{other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What happens at inspection */}
      <section style={{ padding: '80px 24px', backgroundColor: colors.cream }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', color: colors.darkEarth, marginBottom: '48px', textAlign: 'center' }}>
            How Police Check Caravan Weights
          </h2>

          {[
            { step: '1', title: 'You\'re directed to stop', description: 'Police or transport inspectors flag you over, usually at a designated weighbridge, roadside checkpoint, or random inspection point. These are common on major touring routes and during school holidays.' },
            { step: '2', title: 'Your combination is weighed', description: 'Your vehicle and caravan are weighed separately and together. Inspectors check GVM (vehicle), ATM (caravan), and GCM (combined). Some states also check individual axle weights using portable pads.' },
            { step: '3', title: 'Documents are checked', description: 'Inspectors may ask for your vehicle registration, caravan registration, and compliance plate details. They compare the weighed values against the rated limits on the compliance plates.' },
            { step: '4', title: 'If overweight — defect notice issued', description: 'You\'ll receive a defect notice requiring you to reduce the load to within limits before continuing your journey. This might mean leaving items at the inspection point, transferring weight, or calling someone to collect excess cargo.' },
            { step: '5', title: 'Fine issued on the spot', description: 'In most states, the fine is issued immediately. The amount depends on how far over the limit you are. Severe overloading can result in court summons rather than an on-the-spot fine.' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '20px', marginBottom: '24px', alignItems: 'flex-start' }}>
              <div style={{
                width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#ef4444', color: colors.white,
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

      {/* Insurance implications */}
      <section style={{ padding: '80px 24px', backgroundColor: colors.white }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', color: colors.darkEarth, marginBottom: '16px', textAlign: 'center' }}>
            Can Towing Overweight Void Your Insurance?
          </h2>
          <p style={{ fontSize: '18px', color: colors.slate, textAlign: 'center', marginBottom: '48px', lineHeight: '1.6' }}>
            Towing an overweight caravan can void your insurance. If you are involved in an accident while exceeding legal
            weight limits, insurers may refuse to pay out a claim. This applies even if the accident was not directly caused
            by the excess weight, leaving you financially responsible for damages.
          </p>

          <div style={{ padding: '32px', backgroundColor: '#fef2f2', borderRadius: '12px', borderLeft: '5px solid #ef4444' }}>
            <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#ef4444', marginBottom: '16px', marginTop: 0 }}>
              What your insurer won&apos;t tell you upfront
            </h3>
            <div style={{ fontSize: '16px', color: colors.slate, lineHeight: '1.8' }}>
              <p style={{ marginBottom: '12px' }}>
                Most Australian vehicle and caravan insurance policies include a clause stating the vehicle must be operated
                within its manufacturer specifications. <strong>Exceeding weight limits violates this condition.</strong>
              </p>
              <p style={{ marginBottom: '12px' }}>
                If you&apos;re involved in an accident while overweight — even if the overloading didn&apos;t directly cause the accident —
                your insurer can refuse to pay your claim. This applies to:
              </p>
              <ul style={{ paddingLeft: '20px', marginBottom: '12px' }}>
                <li style={{ marginBottom: '8px' }}>Comprehensive cover on your vehicle and caravan</li>
                <li style={{ marginBottom: '8px' }}>Third-party property damage claims against you</li>
                <li style={{ marginBottom: '8px' }}>Contents insurance for items inside the caravan</li>
              </ul>
              <p style={{ margin: 0 }}>
                In a serious accident involving another vehicle, you could be personally liable for
                hundreds of thousands of dollars in damages, medical costs, and legal fees — with no insurance to cover it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to avoid */}
      <section style={{ padding: '80px 24px', backgroundColor: colors.cream }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', color: colors.darkEarth, marginBottom: '48px', textAlign: 'center' }}>
            Why Most Caravans Are Overweight Without Realising
          </h2>
          <p style={{ fontSize: '18px', color: colors.slate, textAlign: 'center', marginBottom: '48px', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto 48px' }}>
            Most caravans are overweight because brochure weights do not include accessories, water, food, or personal gear.
            Items like bull bars, roof racks, batteries, and towball download quickly use up payload. Without weighing the
            setup, many caravanners unknowingly exceed legal limits.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Know Your Limits', description: 'Find your GVM, GCM, and towing capacity in the owner\'s manual. Find your caravan\'s tare weight and ATM on the compliance plate. Enter them into KamperHub so you always know where you stand.', icon: '📋' },
              { title: 'Weigh Before You Go', description: 'Visit a public weighbridge before your first trip with a new load configuration. Many weighbridges are free. Compare the actual weights to your rated limits.', icon: '⚖️' },
              { title: 'Track What You Carry', description: 'Use KamperHub\'s weight compliance calculator to track passengers, water, fuel, gas, and cargo. It checks every limit and warns you before you exceed anything.', icon: '📊' },
              { title: 'Distribute Weight Properly', description: 'How you load matters as much as how much you load. Keep heavy items low and over the axle, light items in the rear. Read our weight distribution guide for details.', icon: '📦' },
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
          <h2 style={{ fontSize: '32px', fontWeight: '700', color: colors.darkEarth, marginBottom: '48px', textAlign: 'center' }}>
            Frequently Asked Questions
          </h2>
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
          <h2 style={{ fontSize: '32px', fontWeight: '700', color: colors.white, marginBottom: '16px' }}>
            Check Your Setup Before You Get Fined
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.85)', marginBottom: '32px', lineHeight: '1.6' }}>
            KamperHub checks what the inspectors check — GVM, ATM, GCM, towing capacity and towball weight.
            Use the free weight calculator and know you&apos;re legal before you leave the driveway.
          </p>
          <a href={`${APP_URL}/signup?redirect=/weights`} style={{
            display: 'inline-block', padding: '16px 48px', backgroundColor: colors.accent, color: colors.white,
            textDecoration: 'none', fontWeight: '700', borderRadius: '12px', fontSize: '20px',
          }}>
            Check Your Weights Free →
          </a>
        </div>
      </section>

      {/* Contextual cross-links */}
      <section style={{ padding: '80px 24px', backgroundColor: colors.white }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: colors.darkEarth, marginBottom: '48px', textAlign: 'center' }}>
            Prevention Is Cheaper Than a Fine
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            <Link href="/caravan-towing-weight-calculator" style={{ textDecoration: 'none' }}>
              <div style={{ padding: '24px', backgroundColor: colors.cream, borderRadius: '12px', borderLeft: `4px solid ${colors.primary}`, height: '100%' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.darkEarth, marginBottom: '8px', marginTop: 0 }}>Free Weight Calculator</h3>
                <p style={{ fontSize: '15px', color: colors.slate, lineHeight: '1.6', margin: 0 }}>
                  Check your GVM, ATM, GCM, towing capacity and towball weight in under 2 minutes. The same checks roadside inspectors run — free.
                </p>
              </div>
            </Link>
            <Link href="/caravan-weight-distribution-guide" style={{ textDecoration: 'none' }}>
              <div style={{ padding: '24px', backgroundColor: colors.cream, borderRadius: '12px', borderLeft: `4px solid ${colors.primary}`, height: '100%' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.darkEarth, marginBottom: '8px', marginTop: 0 }}>Weight Distribution Guide</h3>
                <p style={{ fontSize: '15px', color: colors.slate, lineHeight: '1.6', margin: 0 }}>
                  Learn where to place heavy, medium and light items. Proper distribution prevents sway and keeps you within legal limits.
                </p>
              </div>
            </Link>
            <Link href="/tow-simulator" style={{ textDecoration: 'none' }}>
              <div style={{ padding: '24px', backgroundColor: colors.cream, borderRadius: '12px', borderLeft: `4px solid ${colors.primary}`, height: '100%' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.darkEarth, marginBottom: '8px', marginTop: 0 }}>Tow Simulator</h3>
                <p style={{ fontSize: '15px', color: colors.slate, lineHeight: '1.6', margin: 0 }}>
                  Visualise your complete tow setup — weight distribution, sway risk, and towball load — before you pack.
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
            <Link href="/caravan-towing-weight-calculator" style={{ color: colors.primary, textDecoration: 'none', fontSize: '16px', fontWeight: '500' }}>Weight Calculator →</Link>
            <Link href="/tow-simulator" style={{ color: colors.primary, textDecoration: 'none', fontSize: '16px', fontWeight: '500' }}>Tow Simulator →</Link>
            <Link href="/caravan-weight-distribution-guide" style={{ color: colors.primary, textDecoration: 'none', fontSize: '16px', fontWeight: '500' }}>Weight Distribution Guide →</Link>
            <Link href="/caravan-trip-planner" style={{ color: colors.primary, textDecoration: 'none', fontSize: '16px', fontWeight: '500' }}>Trip Planner →</Link>
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
