import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const APP_URL = 'https://app.kamperhub.com';

export const metadata: Metadata = {
  title: 'Overweight Trailer Fines USA | State-by-State Penalties & How to Avoid Them — KamperHub',
  description: 'Overweight trailer and RV fines by US state — California, Texas, Florida, Arizona, Colorado, Oregon, Montana, Utah, Michigan, New York. Learn the penalties for exceeding GVWR, what happens at a DOT weigh station, and how to avoid fines and voided insurance.',
  keywords: 'overweight trailer fine USA, overloaded trailer penalty, GVWR fine, DOT weigh station, overweight RV penalty, trailer weight fine California, trailer weight fine Texas, FMCSA overweight',
  openGraph: {
    title: 'Overweight Trailer Fines USA — KamperHub',
    description: 'State-by-state overweight fines, DOT weigh station process, insurance implications, and how to avoid penalties.',
    url: 'https://kamperhub.com/us/overweight-trailer-fines',
    siteName: 'KamperHub',
    locale: 'en_US',
    type: 'article',
    images: [{ url: 'https://kamperhub.com/logo-banner.jpg', width: 1200, height: 630, alt: 'Overweight Trailer Fines USA' }],
  },
  alternates: {
    canonical: 'https://kamperhub.com/us/overweight-trailer-fines',
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
    question: 'How much is the fine for an overweight trailer in the US?',
    answer: 'Fines vary significantly by state and the amount of excess weight. Minor overloading can attract fines from $100 to $500 per violation. Severe overloading — particularly in states like California or New York — can result in fines exceeding $5,000, impoundment of the vehicle, and even misdemeanor charges. Many states also charge per-pound penalties for weight over the legal limit.',
  },
  {
    question: 'What happens at a DOT weigh station?',
    answer: 'When you pull into a weigh station, your truck and trailer are weighed on platform scales. Officers check your Gross Vehicle Weight Rating (GVWR), Gross Combined Weight Rating (GCWR), and individual axle weights. If any limit is exceeded, you may be placed out of service — meaning you cannot continue until the load is reduced to within legal limits. Fines are typically issued on the spot or via citation.',
  },
  {
    question: 'Does being overweight void my trailer or RV insurance?',
    answer: 'Yes, it can. Most US auto and RV insurance policies include provisions requiring the vehicle to be operated within manufacturer specifications. Exceeding GVWR violates this condition. If you cause an accident while overweight, your insurer may deny your liability claim and your comprehensive claim — leaving you personally responsible for all damages, medical costs, and legal fees.',
  },
  {
    question: 'Do RVs and travel trailers have to stop at weigh stations?',
    answer: 'Requirements vary by state. In most states, personal-use RVs and travel trailers are not required to stop at weigh stations. However, larger RVs (especially Class A motorhomes over 10,000 lbs GVWR or 26,001 lbs GCWR) may be subject to FMCSA regulations in some states. Regardless, law enforcement can pull over and weigh any vehicle they suspect is overloaded at any time.',
  },
  {
    question: 'How can I check if my trailer is overweight before a trip?',
    answer: 'The most reliable method is visiting a public truck scale or CAT Scale location (available at most truck stops for around $12-15). You can also use KamperHub\'s free towing weight calculator, which checks your GVWR, GCWR, towing capacity, and tongue weight based on your truck and trailer specs plus your cargo. This gives you a digital check before you leave.',
  },
  {
    question: 'Can I get fined for an overloaded truck even if my trailer is within limits?',
    answer: 'Absolutely. Your tow vehicle has its own GVWR, and the tongue weight from your trailer counts toward it. Many trucks exceed GVWR once you add passengers, fuel, gear, and tongue weight — even when the trailer itself is under its rated limit. DOT officers check the truck and trailer independently, and you can receive separate fines for each.',
  },
];

// Snippet-optimised FAQ schema for US market
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is it illegal to tow an overweight RV in the United States?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Towing an overweight RV or trailer is illegal in the United States. Weight limits are enforced at both federal and state levels, and violations can result in fines or being ordered off the road.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do RV weight laws vary by state?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. While federal guidelines set baseline limits, individual states enforce their own towing, axle, and trailer brake laws. Weight limits, fines, and enforcement practices vary by state.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can towing overweight affect my insurance in the US?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. If you are towing an overweight RV, insurance companies may deny coverage after an accident, even if the excess weight was not the direct cause of the crash.',
      },
    },
  ],
};

export default function OverweightTrailerFinesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

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
      <section style={{ backgroundColor: '#fef2f2', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: '800', color: colors.darkEarth, marginBottom: '16px', lineHeight: '1.2' }}>
            Overweight Trailer &amp; RV Fines in the United States
          </h1>
          <p style={{ fontSize: '20px', color: colors.slate, marginBottom: '32px', lineHeight: '1.6' }}>
            Exceeding your trailer or tow vehicle&apos;s weight rating can result in hefty fines, vehicle impoundment,
            out-of-service orders, and — most critically — voided insurance. Here&apos;s what you need to know, state by state.
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
            Overweight Fines by State
          </h2>
          <p style={{ fontSize: '18px', color: colors.slate, textAlign: 'center', marginBottom: '16px', lineHeight: '1.6' }}>
            Each US state sets its own penalties for overweight vehicles and trailers.
            Fines generally scale with how far over the limit you are, and many states charge per-pound penalties.
          </p>
          <p style={{ fontSize: '14px', color: '#ef4444', textAlign: 'center', marginBottom: '48px' }}>
            <strong>Disclaimer:</strong> These figures are indicative. Check your state&apos;s current regulations for the latest penalties.
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
                  ['California', '$250 – $1,000', '$1,000 – $5,000+', 'Vehicle impoundment, misdemeanor charges'],
                  ['Texas', '$150 – $500', '$500 – $2,500', 'Per-axle fines, out-of-service order'],
                  ['Florida', '$100 – $500', '$500 – $5,000', '$10/lb over limit for severe violations'],
                  ['Arizona', '$200 – $750', '$750 – $3,000', 'Vehicle detained until load reduced'],
                  ['Colorado', '$150 – $500', '$500 – $2,500', 'Points on license, vehicle impoundment'],
                  ['Oregon', '$200 – $600', '$600 – $3,000+', '$0.35–$2.50/lb over limit, vehicle detained'],
                  ['Montana', '$100 – $300', '$300 – $1,500', 'Load reduction required on-site'],
                  ['Utah', '$200 – $500', '$500 – $2,000', 'Vehicle grounded until compliant'],
                  ['Michigan', '$100 – $400', '$400 – $2,000+', 'Per-pound penalties, civil infractions'],
                  ['New York', '$250 – $1,000', '$1,000 – $5,000+', 'Criminal penalties for repeat offenders'],
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

      {/* What happens at a weigh station */}
      <section style={{ padding: '80px 24px', backgroundColor: colors.cream }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', color: colors.darkEarth, marginBottom: '48px', textAlign: 'center' }}>
            What Happens at a DOT Weigh Station or Roadside Inspection
          </h2>

          {[
            { step: '1', title: 'You\'re directed to the scales', description: 'DOT officers or state highway patrol direct you into a weigh station or pull you over at a roadside checkpoint. Permanent weigh stations are located on major interstates, and portable scales are used for random inspections. Some states also conduct enforcement blitzes during holiday weekends.' },
            { step: '2', title: 'Your combination is weighed', description: 'Your truck and trailer are weighed separately and together on platform scales. Officers check your GVWR (truck), trailer GVWR, GCWR (combined), and individual axle weights. Exceeding any single rating is a violation — even if your total weight is within limits.' },
            { step: '3', title: 'Documents and plates are checked', description: 'Officers inspect your vehicle registration, trailer registration, and the federal certification label (weight sticker). They compare actual scale weights against the rated limits on the manufacturer labels. For larger RVs, they may also check for FMCSA compliance.' },
            { step: '4', title: 'If overweight — out-of-service order', description: 'You\'ll be placed out of service, meaning you cannot move your vehicle until the load is reduced to within legal limits. This might mean offloading cargo at the weigh station, calling someone to pick up excess weight, or redistributing your load between the truck and trailer.' },
            { step: '5', title: 'Citation and fines issued', description: 'Fines are typically issued via citation on the spot. The amount depends on how far over the limit you are and your state\'s penalty structure. Some states use flat fines, others charge per-pound over the limit. Severe or repeat violations can result in criminal misdemeanor charges.' },
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
            The Insurance Risk Most People Don&apos;t Know About
          </h2>
          <p style={{ fontSize: '18px', color: colors.slate, textAlign: 'center', marginBottom: '48px', lineHeight: '1.6' }}>
            Fines are painful. Voided insurance is catastrophic.
          </p>

          <div style={{ padding: '32px', backgroundColor: '#fef2f2', borderRadius: '12px', borderLeft: '5px solid #ef4444' }}>
            <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#ef4444', marginBottom: '16px', marginTop: 0 }}>
              What your insurer won&apos;t tell you upfront
            </h3>
            <div style={{ fontSize: '16px', color: colors.slate, lineHeight: '1.8' }}>
              <p style={{ marginBottom: '12px' }}>
                Most US auto, truck, and RV insurance policies include a clause requiring the vehicle to be operated
                within its manufacturer specifications. <strong>Exceeding GVWR violates this condition.</strong>
              </p>
              <p style={{ marginBottom: '12px' }}>
                If you&apos;re involved in an accident while overweight — even if the overloading didn&apos;t directly cause the accident —
                your insurer can refuse to pay your claim. This applies to:
              </p>
              <ul style={{ paddingLeft: '20px', marginBottom: '12px' }}>
                <li style={{ marginBottom: '8px' }}>Comprehensive coverage on your truck and trailer or RV</li>
                <li style={{ marginBottom: '8px' }}>Liability claims — if you injure someone or damage their property</li>
                <li style={{ marginBottom: '8px' }}>Contents coverage for items inside the trailer</li>
                <li style={{ marginBottom: '8px' }}>Uninsured/underinsured motorist claims if fault is disputed</li>
              </ul>
              <p style={{ margin: 0 }}>
                In a serious accident involving another vehicle, you could be personally liable for
                hundreds of thousands of dollars in medical costs, property damage, and legal fees — with no insurance to cover it.
                In the US, where medical costs can be astronomical, this is a risk no one should take.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to avoid */}
      <section style={{ padding: '80px 24px', backgroundColor: colors.cream }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', color: colors.darkEarth, marginBottom: '48px', textAlign: 'center' }}>
            How to Avoid Overweight Fines
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Know Your Limits', description: 'Find your GVWR, GCWR, and towing capacity in the owner\'s manual or on the driver\'s door jamb sticker. Find your trailer\'s GVWR on the federal certification label. Enter them into KamperHub so you always know where you stand.', icon: '📋' },
              { title: 'Weigh Before You Go', description: 'Visit a CAT Scale at your local truck stop ($12-15) before your first trip with a new load. Weigh each axle individually and compare to your rated limits. Many RV owners weigh once per season with a typical load.', icon: '⚖️' },
              { title: 'Track What You Carry', description: 'Use KamperHub\'s free towing weight calculator to track passengers, water, fuel, propane, and cargo. It checks every limit — GVWR, GCWR, towing capacity, and tongue weight — and warns you before you exceed anything.', icon: '📊' },
              { title: 'Distribute Weight Properly', description: 'How you load matters as much as how much you load. Keep heavy items low and over the axles, light items in the rear. Proper tongue weight (10-15% of trailer weight) prevents dangerous sway. Read our weight distribution guide for details.', icon: '📦' },
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
            KamperHub checks what the DOT checks — GVWR, GCWR, towing capacity, and tongue weight.
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
            <Link href="/us/towing-weight-calculator" style={{ textDecoration: 'none' }}>
              <div style={{ padding: '24px', backgroundColor: colors.cream, borderRadius: '12px', borderLeft: `4px solid ${colors.primary}`, height: '100%' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.darkEarth, marginBottom: '8px', marginTop: 0 }}>Free Weight Calculator</h3>
                <p style={{ fontSize: '15px', color: colors.slate, lineHeight: '1.6', margin: 0 }}>
                  Check your GVWR, GCWR, towing capacity and tongue weight in under 2 minutes. The same checks DOT weigh stations run — free.
                </p>
              </div>
            </Link>
            <Link href="/us/trailer-weight-distribution-guide" style={{ textDecoration: 'none' }}>
              <div style={{ padding: '24px', backgroundColor: colors.cream, borderRadius: '12px', borderLeft: `4px solid ${colors.primary}`, height: '100%' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.darkEarth, marginBottom: '8px', marginTop: 0 }}>Weight Distribution Guide</h3>
                <p style={{ fontSize: '15px', color: colors.slate, lineHeight: '1.6', margin: 0 }}>
                  Learn where to place heavy, medium and light items. Proper distribution prevents sway and keeps you within legal limits.
                </p>
              </div>
            </Link>
            <Link href="/us/tow-simulator" style={{ textDecoration: 'none' }}>
              <div style={{ padding: '24px', backgroundColor: colors.cream, borderRadius: '12px', borderLeft: `4px solid ${colors.primary}`, height: '100%' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.darkEarth, marginBottom: '8px', marginTop: 0 }}>Tow Simulator</h3>
                <p style={{ fontSize: '15px', color: colors.slate, lineHeight: '1.6', margin: 0 }}>
                  Visualize your complete tow setup — weight distribution, sway risk, and tongue weight — before you pack.
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
