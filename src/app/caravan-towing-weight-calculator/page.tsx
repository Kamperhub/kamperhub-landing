import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import TowCheckWidget from '../../components/TowCheckWidget';

const APP_URL = 'https://app.kamperhub.com';

export const metadata: Metadata = {
  title: 'Caravan Towing Weight Calculator | Can My Car Tow My Caravan? — KamperHub',
  description: 'Free caravan towing weight calculator for Australia. Check GVM, ATM, GCM, payload and towball weight to see if your car can legally tow your caravan.',
  keywords: 'caravan towing weight calculator, caravan weight compliance, GVM calculator, ATM calculator, towing capacity check australia, towball weight calculator, caravan weight check, can my car tow my caravan',
  openGraph: {
    title: 'Caravan Towing Weight Calculator — KamperHub',
    description: 'Free weight compliance calculator for Australian caravan owners. Check GVM, ATM, GCM and towball weight before you hit the road.',
    url: 'https://kamperhub.com/caravan-towing-weight-calculator',
    siteName: 'KamperHub',
    locale: 'en_AU',
    type: 'website',
    images: [
      {
        url: 'https://kamperhub.com/logo-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'KamperHub Caravan Towing Weight Calculator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Caravan Towing Weight Calculator — KamperHub',
    description: 'Free weight compliance calculator for Australian caravan owners. Check GVM, ATM, GCM and towball weight.',
    images: ['https://kamperhub.com/logo-banner.jpg'],
  },
  alternates: {
    canonical: 'https://kamperhub.com/caravan-towing-weight-calculator',
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
    question: 'How do I know if my car can tow my caravan?',
    answer: 'You need to compare your vehicle\'s towing capacity (found in the owner\'s manual or on the compliance plate) against your caravan\'s ATM (Aggregate Trailer Mass). Your vehicle must also stay within its GVM (Gross Vehicle Mass) when loaded with passengers, fuel, and gear. KamperHub\'s free calculator checks all of these limits for you automatically.',
  },
  {
    question: 'What is GVM and why does it matter for towing?',
    answer: 'GVM (Gross Vehicle Mass) is the maximum your vehicle can weigh when fully loaded — including passengers, fuel, cargo, and the towball download from your caravan. Exceeding your GVM is illegal in Australia, voids your insurance, and makes your vehicle harder to steer and stop. It\'s the single most commonly exceeded limit for caravan owners.',
  },
  {
    question: 'What is ATM on a caravan?',
    answer: 'ATM (Aggregate Trailer Mass) is the maximum your caravan can weigh when fully loaded, including everything inside it plus the weight pressing down on the towball. It\'s set by the caravan manufacturer and stamped on the compliance plate. You must never exceed your caravan\'s ATM rating.',
  },
  {
    question: 'What is GCM and how is it different from GVM?',
    answer: 'GCM (Gross Combined Mass) is the maximum weight of your vehicle AND caravan combined. Even if your vehicle is under its GVM and your caravan is under its ATM, the total combination might still exceed your vehicle\'s GCM limit. This is often the hidden limit that catches people out — especially with larger caravans.',
  },
  {
    question: 'What should my towball weight be?',
    answer: 'In Australia, your towball download (the weight your caravan pushes down on the towball) should be between 8% and 14% of the caravan\'s loaded weight. Too little towball weight causes dangerous sway at highway speeds. Too much overloads the rear axle of your tow vehicle. KamperHub calculates your towball percentage automatically.',
  },
  {
    question: 'What happens if my caravan is overweight?',
    answer: 'If your caravan or vehicle combination exceeds legal weight limits, you face roadside defect notices, on-the-spot fines (up to $5,000+ in some states), loss of licence points, and — critically — voided insurance. If you\'re in an accident while overweight, your insurer can refuse to pay your claim entirely. Prevention through proper weight checking is essential.',
  },
  {
    question: 'Do I need to weigh my caravan before every trip?',
    answer: 'Best practice is to check your weights whenever your load changes significantly — a different trip with different gear, adding new accessories, or carrying extra water and fuel. KamperHub lets you save your vehicle and caravan specs and track what you\'re carrying, so you can check compliance digitally without visiting a weighbridge every time.',
  },
  {
    question: 'Is the KamperHub weight calculator free?',
    answer: 'Yes. KamperHub\'s weight compliance dashboard is available on the free plan. It checks your GVM, ATM, GCM, towing capacity, and towball percentage. For advanced features like the tow simulator, weight distribution analysis, and cargo zone tracking, you can upgrade to the Pro plan.',
  },
  {
    question: 'How accurate are caravan weight calculators?',
    answer: 'KamperHub uses manufacturer-published specs for vehicle and caravan weights (GVM, ATM, GCM, tare, kerb weight). The calculator is as accurate as the data you provide — if you enter your actual cargo, water, fuel and passenger weights, the results closely match what a weighbridge would show. For the most precise result, weigh your loaded setup at a public weighbridge and compare.',
  },
  {
    question: 'Do I need to visit a weighbridge?',
    answer: 'A weighbridge gives the most accurate measurement, and we recommend it for your first trip with a new setup. However, you can use KamperHub\'s calculator for ongoing checks — enter your known cargo weights and it will tell you if you\'re within limits. Many experienced towers use the calculator for routine checks and a weighbridge for annual verification.',
  },
  {
    question: 'Is towing overweight illegal in Australia?',
    answer: 'Yes. Exceeding any rated weight limit (GVM, ATM, or GCM) is illegal in all Australian states and territories. Penalties include on-the-spot fines from $400 to over $5,000, defect notices that ground your vehicle until rectified, loss of licence points, and critically — voided insurance. If you cause an accident while overweight, you could be personally liable for all damages.',
  },
];

// Snippet-optimised FAQ schema — tightly phrased for featured snippets and PAA
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can my car tow my caravan legally?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your car can legally tow your caravan only if all weight limits are met, including GVM, ATM, GCM, payload, and towball weight. Being under towing capacity alone does not guarantee legal compliance.',
      },
    },
    {
      '@type': 'Question',
      name: 'What weights do I need to use a caravan towing weight calculator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "To use a caravan towing weight calculator accurately, you need your vehicle's GVM, GCM, kerb weight, and towing capacity, plus your caravan's ATM and towball weight. Real weighbridge measurements provide the most accurate results.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is a caravan towing calculator accurate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A caravan towing calculator is accurate when you enter real, measured weights rather than brochure figures. Manufacturer specifications assume empty vehicles, while real setups include passengers, accessories, and cargo.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if my caravan is overweight?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If your caravan is overweight, you may be fined, lose demerit points, have your insurance voided, or be ordered off the road. Overweight setups also reduce braking performance and towing stability.',
      },
    },
  ],
};

const softwareJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'KamperHub Caravan Towing Weight Calculator',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'AUD',
  },
  description: 'Free caravan towing weight calculator that checks GVM, ATM, GCM, towing capacity and towball weight for Australian caravan owners.',
  url: 'https://app.kamperhub.com/weights',
  aggregateRating: undefined,
};

export default function CaravanTowingWeightCalculatorPage() {
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
            <Link href="/tow-simulator" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', fontSize: '20px', fontWeight: '500' }}>Tow Simulator</Link>
            <a href={`${APP_URL}/blog`} style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', fontSize: '20px', fontWeight: '500' }}>Blog</a>
            <a href={`${APP_URL}/signup?redirect=/weights`} style={{
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

            Caravan Towing Weight Calculator — Check If Your Car Can Tow Your Caravan
          </h1>
          <p style={{
            fontSize: '20px',
            color: colors.slate,
            marginBottom: '32px',
            lineHeight: '1.6',
          }}>
            Enter your vehicle and caravan weights below to check GVM, ATM, GCM,
            towing capacity and towball weight against Australian legal limits — for free, in under two minutes.
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
              Enter Your Vehicle and Caravan Weights
            </h2>
            <p style={{ fontSize: '15px', color: colors.slate, marginBottom: '16px' }}>
              Select your vehicle and caravan below to see if they&apos;re compatible. For a full compliance check with cargo, passengers and towball weight, sign up free.
            </p>
            <TowCheckWidget region="au" />
          </div>

          <div style={{ marginTop: '24px' }}>
            <a href={`${APP_URL}/signup?redirect=/weights`} style={{
              display: 'inline-block',
              padding: '16px 40px',
              backgroundColor: colors.primary,
              color: colors.white,
              textDecoration: 'none',
              fontWeight: '700',
              borderRadius: '12px',
              fontSize: '20px',
            }}>
              Full Weight Compliance Check →
            </a>
            <p style={{ fontSize: '14px', color: colors.slate, marginTop: '12px' }}>
              No credit card required. Free plan includes full weight compliance dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* What the calculator checks */}
      <section style={{ padding: '80px 24px', backgroundColor: colors.white }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: '700',
            color: colors.darkEarth,
            marginBottom: '16px',
            textAlign: 'center',
          }}>
            How This Caravan Towing Weight Calculator Works
          </h2>
          <p style={{
            fontSize: '18px',
            color: colors.slate,
            textAlign: 'center',
            marginBottom: '48px',
            lineHeight: '1.6',
          }}>
            This caravan towing weight calculator checks whether your vehicle and caravan are within legal towing limits.
            It compares your inputs against GVM, ATM, GCM, payload, and towball weight to show if your setup is compliant.
            The result makes it clear whether your combination is safe, borderline, or overweight before you hit the road.
          </p>

          {[
            {
              title: 'GVM — Gross Vehicle Mass',
              description: 'Your vehicle\'s maximum loaded weight, including passengers, fuel, cargo and the towball download from your caravan. KamperHub compares your actual loaded weight against your vehicle\'s GVM rating and shows a clear pass or fail.',
              icon: '⚖️',
            },
            {
              title: 'ATM — Aggregate Trailer Mass',
              description: 'Your caravan\'s maximum loaded weight, including everything packed inside it. We check your caravan\'s actual weight (tare plus cargo) against its ATM rating. Exceeding ATM is the most common compliance failure.',
              icon: '🏕️',
            },
            {
              title: 'GCM — Gross Combined Mass',
              description: 'The maximum combined weight of your vehicle and caravan together. Even if each is under its individual limit, the combination might exceed your vehicle\'s GCM. This is the hidden limit that catches experienced towers off guard.',
              icon: '🔗',
            },
            {
              title: 'Towing Capacity',
              description: 'The maximum weight your vehicle is rated to tow. This is set by the vehicle manufacturer and considers engine power, transmission, brakes, and chassis strength. KamperHub checks your caravan\'s loaded weight against this limit.',
              icon: '🚗',
            },
            {
              title: 'Towball Weight',
              description: 'The downward force your caravan applies to the towball. In Australia, this should sit between 8% and 14% of your caravan\'s loaded weight. Too little causes sway; too much overloads your rear axle. KamperHub calculates your percentage automatically.',
              icon: '📐',
            },
          ].map((check, i) => (
            <div key={i} style={{
              display: 'flex',
              gap: '20px',
              marginBottom: '32px',
              padding: '24px',
              backgroundColor: colors.cream,
              borderRadius: '12px',
            }}>
              <div style={{ fontSize: '32px', flexShrink: 0 }}>{check.icon}</div>
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: colors.darkEarth, marginBottom: '8px', marginTop: 0 }}>
                  {check.title}
                </h3>
                <p style={{ fontSize: '16px', color: colors.slate, lineHeight: '1.6', margin: 0 }}>
                  {check.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How to check */}
      <section style={{ padding: '80px 24px', backgroundColor: colors.cream }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: '700',
            color: colors.darkEarth,
            marginBottom: '16px',
            textAlign: 'center',
          }}>
            How to Check Your Caravan Towing Weights — Step by Step
          </h2>
          <p style={{
            fontSize: '18px',
            color: colors.slate,
            textAlign: 'center',
            marginBottom: '48px',
            lineHeight: '1.6',
          }}>
            It takes less than two minutes. Here&apos;s how it works:
          </p>

          {[
            {
              step: '1',
              title: 'Select your tow vehicle',
              description: 'Pick your vehicle from our database of Australian tow vehicles. KamperHub automatically loads the manufacturer specs — GVM, GCM, towing capacity, kerb weight and towball limit. No manual data entry required.',
            },
            {
              step: '2',
              title: 'Select your caravan',
              description: 'Choose your caravan from the database. We load the tare weight, ATM, and ball weight specs directly from the manufacturer data. If your model isn\'t listed, you can enter the specs manually from your compliance plate.',
            },
            {
              step: '3',
              title: 'Add your cargo and passengers',
              description: 'Tell us what you\'re carrying — passengers, water, gas, fuel level, and any additional cargo. KamperHub calculates the total loaded weight for both your vehicle and caravan.',
            },
            {
              step: '4',
              title: 'Get your compliance result',
              description: 'KamperHub checks every weight limit and shows you a clear dashboard with pass/fail indicators for GVM, ATM, GCM, towing capacity and towball percentage. If anything is over, you\'ll know exactly what to fix.',
            },
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex',
              gap: '20px',
              marginBottom: '24px',
              alignItems: 'flex-start',
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: colors.primary,
                color: colors.white,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                fontWeight: '700',
                flexShrink: 0,
              }}>
                {item.step}
              </div>
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: colors.darkEarth, marginBottom: '8px', marginTop: 0 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '16px', color: colors.slate, lineHeight: '1.6', margin: 0 }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <a href={`${APP_URL}/signup?redirect=/weights`} style={{
              display: 'inline-block',
              padding: '16px 40px',
              backgroundColor: colors.primary,
              color: colors.white,
              textDecoration: 'none',
              fontWeight: '700',
              borderRadius: '12px',
              fontSize: '20px',
            }}>
              Check Your Weights Free →
            </a>
          </div>
        </div>
      </section>

      {/* Weight terms glossary */}
      <section style={{ padding: '80px 24px', backgroundColor: colors.white }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: '700',
            color: colors.darkEarth,
            marginBottom: '16px',
            textAlign: 'center',
          }}>
            Understanding GVM, ATM, GCM, Payload and Towball Weight
          </h2>
          <p style={{
            fontSize: '18px',
            color: colors.slate,
            textAlign: 'center',
            marginBottom: '48px',
            lineHeight: '1.6',
          }}>
            GVM is the maximum your vehicle can weigh when loaded, while ATM is the fully loaded weight of your caravan.
            GCM is the combined maximum weight of both together. Payload is how much weight your vehicle can carry, and towball
            weight is the downward force applied by the caravan onto the vehicle&apos;s towbar.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}>
            {[
              { term: 'Tare Weight', definition: 'The weight of your caravan as it leaves the factory — empty, with no water, gas, or personal belongings. This is the starting point for all weight calculations.' },
              { term: 'ATM', definition: 'Aggregate Trailer Mass. The maximum your caravan can weigh when fully loaded, including everything inside it and the weight on the towball.' },
              { term: 'GTM', definition: 'Gross Trailer Mass. The maximum weight supported by the caravan\'s own axles (ATM minus towball download). This is what a weighbridge measures when only the caravan\'s wheels are on the scale.' },
              { term: 'GVM', definition: 'Gross Vehicle Mass. The maximum your tow vehicle can weigh fully loaded — passengers, fuel, cargo, and towball download included.' },
              { term: 'GCM', definition: 'Gross Combined Mass. The maximum total weight of your vehicle plus caravan. Set by the vehicle manufacturer.' },
              { term: 'Kerb Weight', definition: 'The weight of your vehicle with a full tank of fuel but no passengers or cargo. Similar to tare weight for caravans.' },
              { term: 'Payload', definition: 'The available carrying capacity. For vehicles: GVM minus kerb weight. For caravans: ATM minus tare weight. This is how much stuff you can actually put in.' },
              { term: 'Towball Weight / Download', definition: 'The downward force the caravan exerts on the vehicle\'s towball. Affects both the vehicle\'s GVM (adds to its load) and the caravan\'s GTM (subtracted from ATM).' },
            ].map((item, i) => (
              <div key={i} style={{
                padding: '20px',
                backgroundColor: colors.cream,
                borderRadius: '12px',
                borderLeft: `4px solid ${colors.primary}`,
              }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.darkEarth, marginBottom: '8px', marginTop: 0 }}>
                  {item.term}
                </h3>
                <p style={{ fontSize: '15px', color: colors.slate, lineHeight: '1.6', margin: 0 }}>
                  {item.definition}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section style={{ padding: '80px 24px', backgroundColor: colors.cream }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: '700',
            color: colors.darkEarth,
            marginBottom: '16px',
            textAlign: 'center',
          }}>
            What Happens If Your Caravan Is Overweight?
          </h2>
          <p style={{
            fontSize: '18px',
            color: colors.slate,
            textAlign: 'center',
            marginBottom: '48px',
            lineHeight: '1.6',
          }}>
            Exceeding weight limits has real consequences — fines, voided insurance, and dangerous towing. Here&apos;s what&apos;s at stake.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
          }}>
            {[
              {
                title: 'Insurance Protection',
                description: 'If you\'re in an accident while overweight, your insurer can reject your claim entirely. A single weight check before each trip protects you from catastrophic financial loss.',
                icon: '🛡️',
              },
              {
                title: 'Avoid Roadside Fines',
                description: 'Australian states issue on-the-spot fines for overloaded vehicles and caravans. Penalties range from $400 to over $5,000 depending on the state and severity. Defect notices can ground your rig on the spot.',
                icon: '🚨',
              },
              {
                title: 'Safer Towing',
                description: 'Overloaded vehicles take longer to stop, are harder to steer, and are more prone to tyre blowouts. Incorrect towball weight causes dangerous caravan sway at highway speeds. Proper weight management is the foundation of safe towing.',
                icon: '✅',
              },
              {
                title: 'Longer Vehicle Life',
                description: 'Consistently exceeding weight limits accelerates wear on your transmission, brakes, tyres and suspension. Towing within limits means your vehicle lasts longer and costs less to maintain.',
                icon: '🔧',
              },
            ].map((item, i) => (
              <div key={i} style={{
                padding: '24px',
                backgroundColor: colors.white,
                borderRadius: '12px',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '36px', marginBottom: '12px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.darkEarth, marginBottom: '8px' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '15px', color: colors.slate, lineHeight: '1.6', margin: 0 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accuracy & trust */}
      <section style={{ padding: '80px 24px', backgroundColor: colors.white }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', color: colors.darkEarth, marginBottom: '16px', textAlign: 'center' }}>
            Is This Caravan Towing Calculator Accurate?
          </h2>
          <p style={{ fontSize: '18px', color: colors.slate, textAlign: 'center', marginBottom: '32px', lineHeight: '1.6', maxWidth: '700px', margin: '0 auto 32px' }}>
            A caravan towing calculator is accurate when you enter real, measured weights rather than brochure figures.
            Manufacturer numbers assume an empty vehicle and caravan, while real setups include passengers, gear, accessories,
            and water. For best accuracy, use weighbridge measurements and treat the calculator as a compliance check, not a rough estimate.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div style={{ padding: '20px', backgroundColor: colors.cream, borderRadius: '12px', borderLeft: `4px solid ${colors.primary}` }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.darkEarth, marginBottom: '8px', marginTop: 0 }}>
                What weights you need before using the calculator
              </h3>
              <p style={{ fontSize: '15px', color: colors.slate, lineHeight: '1.6', margin: 0 }}>
                Your vehicle&apos;s GVM, GCM, and towing capacity (owner&apos;s manual or door sticker). Your caravan&apos;s
                tare weight and ATM (compliance plate). KamperHub loads these automatically if your model is in our database.
              </p>
            </div>
            <div style={{ padding: '20px', backgroundColor: colors.cream, borderRadius: '12px', borderLeft: `4px solid ${colors.primary}` }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.darkEarth, marginBottom: '8px', marginTop: 0 }}>
                Why towing capacity alone is misleading
              </h3>
              <p style={{ fontSize: '15px', color: colors.slate, lineHeight: '1.6', margin: 0 }}>
                Your vehicle might have a 3,500 kg towing capacity — but if your GCM or GVM is exceeded first, you&apos;re
                still overweight. KamperHub checks all five limits simultaneously, not just one.
              </p>
            </div>
            <div style={{ padding: '20px', backgroundColor: colors.cream, borderRadius: '12px', borderLeft: `4px solid ${colors.primary}` }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.darkEarth, marginBottom: '8px', marginTop: 0 }}>
                Do I need a weighbridge to be compliant?
              </h3>
              <p style={{ fontSize: '15px', color: colors.slate, lineHeight: '1.6', margin: 0 }}>
                A weighbridge gives the most precise reading. But for routine checks, enter your known cargo weights
                into KamperHub and you&apos;ll know if you&apos;re within limits — without leaving the driveway.
              </p>
            </div>
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
              backgroundColor: colors.cream,
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
            Check Your Full Towing Setup in KamperHub
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.85)',
            marginBottom: '32px',
            lineHeight: '1.6',
          }}>
            The only app that checks what the inspectors actually check. Free to use, no credit card required.
          </p>
          <a href={`${APP_URL}/signup?redirect=/weights`} style={{
            display: 'inline-block',
            padding: '16px 48px',
            backgroundColor: colors.accent,
            color: colors.white,
            textDecoration: 'none',
            fontWeight: '700',
            borderRadius: '12px',
            fontSize: '20px',
          }}>
            Get Started Free →
          </a>
        </div>
      </section>

      {/* Contextual cross-links — pillar page linking to support pages */}
      <section style={{ padding: '80px 24px', backgroundColor: colors.cream }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: colors.darkEarth, marginBottom: '16px', textAlign: 'center' }}>
            Go Deeper: Weight Compliance Resources
          </h2>
          <p style={{ fontSize: '18px', color: colors.slate, textAlign: 'center', marginBottom: '48px', lineHeight: '1.6' }}>
            The calculator tells you if you&apos;re compliant. These guides help you understand why — and what to do if you&apos;re not.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            <Link href="/tow-simulator" style={{ textDecoration: 'none' }}>
              <div style={{ padding: '24px', backgroundColor: colors.white, borderRadius: '12px', borderLeft: `4px solid ${colors.primary}`, height: '100%' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.darkEarth, marginBottom: '8px', marginTop: 0 }}>Tow Simulator</h3>
                <p style={{ fontSize: '15px', color: colors.slate, lineHeight: '1.6', margin: 0 }}>
                  Go beyond pass/fail. Visualise weight distribution across cargo zones, see sway risk, and experiment with loading — all before you pack.
                </p>
              </div>
            </Link>
            <Link href="/caravan-weight-distribution-guide" style={{ textDecoration: 'none' }}>
              <div style={{ padding: '24px', backgroundColor: colors.white, borderRadius: '12px', borderLeft: `4px solid ${colors.primary}`, height: '100%' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.darkEarth, marginBottom: '8px', marginTop: 0 }}>Weight Distribution Guide</h3>
                <p style={{ fontSize: '15px', color: colors.slate, lineHeight: '1.6', margin: 0 }}>
                  Where should heavy items go? What causes sway? The complete guide to loading your caravan safely, with diagrams.
                </p>
              </div>
            </Link>
            <Link href="/caravan-overweight-fines-australia" style={{ textDecoration: 'none' }}>
              <div style={{ padding: '24px', backgroundColor: colors.white, borderRadius: '12px', borderLeft: '4px solid #ef4444', height: '100%' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.darkEarth, marginBottom: '8px', marginTop: 0 }}>Overweight Fines by State</h3>
                <p style={{ fontSize: '15px', color: colors.slate, lineHeight: '1.6', margin: 0 }}>
                  Penalties from $400 to $5,000+, defect notices, and voided insurance. State-by-state breakdown of what happens when you get caught.
                </p>
              </div>
            </Link>
            <Link href="/caravan-trip-planner" style={{ textDecoration: 'none' }}>
              <div style={{ padding: '24px', backgroundColor: colors.white, borderRadius: '12px', borderLeft: `4px solid ${colors.accent}`, height: '100%' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.darkEarth, marginBottom: '8px', marginTop: 0 }}>Trip Planner</h3>
                <p style={{ fontSize: '15px', color: colors.slate, lineHeight: '1.6', margin: 0 }}>
                  Plan your route with fuel stops, free camping, weather and fatigue management — all built for vehicles towing caravans.
                </p>
              </div>
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
