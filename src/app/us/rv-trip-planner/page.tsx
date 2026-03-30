import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const APP_URL = 'https://app.kamperhub.com';

export const metadata: Metadata = {
  title: 'RV Trip Planner USA | Route Planning, Fuel Stops & Boondocking — KamperHub',
  description: 'Plan your RV trip across the USA. Route planning with fuel stops, weather, boondocking, fatigue management and trip budgets.',
  keywords: 'rv trip planner usa, road trip planner rv, camping trip planner, rv route planner, rv fuel planner, boondocking finder usa, free camping finder usa, travel trailer trip planner',
  openGraph: {
    title: 'RV Trip Planner USA — KamperHub',
    description: 'Smart route planning with fuel stops, weather, boondocking, packing lists, and budgets for American RV travelers.',
    url: 'https://kamperhub.com/us/rv-trip-planner',
    siteName: 'KamperHub',
    locale: 'en_US',
    type: 'website',
    images: [{ url: 'https://kamperhub.com/logo-banner.jpg', width: 1200, height: 630, alt: 'KamperHub RV Trip Planner' }],
  },
  alternates: {
    canonical: 'https://kamperhub.com/us/rv-trip-planner',
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
    question: 'Is the KamperHub trip planner free?',
    answer: 'The route planner is available on the free plan, including route mapping, weather forecasts, and the boondocking/free camping finder. Unlimited trip saving, packing lists, trip budgets, and expense tracking are available on the Explorer ($10/year) and Pro ($49/year) plans.',
  },
  {
    question: 'Does KamperHub work for long-distance interstate road trips?',
    answer: 'Yes. KamperHub\'s fuel planning feature is designed for long-haul RV travel across the US. It analyzes your route against your vehicle\'s fuel range and warns you about gaps between fuel stations. The Trip Advisor identifies stretches where you may need to plan extra fuel stops — especially useful for remote routes through the Southwest, Great Basin, or northern states.',
  },
  {
    question: 'Can I find boondocking and free camping spots along my route?',
    answer: 'Yes. KamperHub\'s free camping finder uses OpenStreetMap data to locate free and low-cost campsites across the USA, including BLM land, national forest dispersed camping, and other public lands. You can filter by amenities — pet-friendly, powered sites, toilets, water, showers, and RV access. Found a good spot? Add it directly to your trip as a waypoint.',
  },
  {
    question: 'Does KamperHub calculate fuel costs for my trip?',
    answer: 'Yes. KamperHub estimates fuel costs based on your vehicle\'s fuel consumption rate, the distance of your route, and current fuel prices. It also helps you plan fuel stops along the route, showing the distance between stations and flagging any gaps that exceed your vehicle\'s range.',
  },
  {
    question: 'Can I share my trip plan with my travel partner?',
    answer: 'Yes. Trip summaries can be shared via email directly from the app. The summary includes your route, waypoints, overnight stops, weather forecast, and key trip statistics. Household members on the Pro plan can also access shared trips within the app.',
  },
  {
    question: 'How does fatigue management work?',
    answer: 'During the trip planning wizard, you set your preferred maximum driving time per day and break intervals. KamperHub calculates where you\'ll need to stop for the night based on these settings and suggests overnight stop locations along your route. This ensures your trip plan is realistic and accounts for driver fatigue — especially important when towing a travel trailer or fifth wheel.',
  },
];

// Snippet-optimised FAQ schema for US market
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why does RV trip planning differ from car trip planning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'RV trip planning differs because towing affects fuel consumption, braking distance, and daily travel limits. Routes, fuel stops, and rest days must account for the reduced performance of a loaded tow vehicle.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I check weights before planning an RV trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Checking weights before planning ensures your RV and tow vehicle are within legal and manufacturer limits, reducing the risk of fines, breakdowns, or unsafe driving conditions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can an RV trip planner help avoid unsafe towing days?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. An RV-specific trip planner helps manage daily distances, fuel range, and terrain considerations that affect towing safety and driver fatigue.',
      },
    },
  ],
};

const softwareJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'KamperHub RV Trip Planner',
  applicationCategory: 'TravelApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  description: 'RV trip planner for the USA with route planning, fuel stops, weather forecasts, boondocking finder, packing lists, and trip budgets.',
  url: 'https://app.kamperhub.com/route-planner',
};

export default function RvTripPlannerPage() {
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
            <a href={`${APP_URL}/signup?redirect=/route-planner`} style={{ padding: '10px 24px', backgroundColor: colors.accent, color: colors.white, textDecoration: 'none', fontWeight: '600', borderRadius: '8px', fontSize: '20px' }}>Try Free</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ backgroundColor: colors.cream, padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: '800', color: colors.darkEarth, marginBottom: '16px', lineHeight: '1.2' }}>
            RV Trip Planner — Plan Routes, Fuel Stops, and Safe Travel Days
          </h1>
          <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '32px' }}>
            Last updated: March 2026 · Reviewed by the KamperHub towing compliance team
          </p>
          <p style={{ fontSize: '20px', color: colors.slate, marginBottom: '32px', lineHeight: '1.6' }}>
            Planning RV trips around towing limits helps prevent fatigue, overheating, and fuel issues.
            Towing increases fuel consumption and reduces comfortable daily driving distances. A towing-aware trip plan
            accounts for shorter days, more frequent fuel stops, and rest breaks suited to heavier rigs.
          </p>
          <a href={`${APP_URL}/signup?redirect=/route-planner`} style={{
            display: 'inline-block', padding: '16px 40px', backgroundColor: colors.primary, color: colors.white,
            textDecoration: 'none', fontWeight: '700', borderRadius: '12px', fontSize: '20px',
          }}>
            Start Planning Free →
          </a>
          <p style={{ fontSize: '14px', color: colors.slate, marginTop: '12px' }}>
            Route planner and free camping finder included on the free plan.
          </p>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '80px 24px', backgroundColor: colors.white }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', color: colors.darkEarth, marginBottom: '48px', textAlign: 'center' }}>
            Route Planning With Fuel Stops and Terrain in Mind
          </h2>

          {[
            {
              title: 'Smart Route Planning',
              description: 'Enter your start point, destination, and any stops along the way. KamperHub calculates the best route, total distance, driving time, and fuel requirements. The route planner accounts for your tow vehicle and travel trailer combination — not just a car.',
              icon: '🗺️',
            },
            {
              title: 'Fuel Stop Planning',
              description: 'KamperHub analyzes your route against your vehicle\'s fuel range and shows where you\'ll need to refuel. For remote stretches where fuel stations are far apart, the Trip Advisor warns you and suggests carrying extra fuel. Never get caught short crossing the desert or mountain passes.',
              icon: '⛽',
            },
            {
              title: 'Boondocking & Free Camping Finder',
              description: 'Discover free and low-cost campsites across the USA using crowd-sourced OpenStreetMap data. Find BLM land, national forest dispersed camping, state parks, and more. Filter by amenities: pet-friendly, powered, toilets, water, showers, and RV access. Add campsites directly to your trip as waypoints.',
              icon: '🏕️',
            },
            {
              title: 'Weather Forecasts',
              description: 'See the weather forecast for each waypoint on your trip. Plan around extreme heat, thunderstorms, snowfall, or cold snaps. Weather data comes from Open-Meteo — free, accurate, and updated regularly.',
              icon: '🌤️',
            },
            {
              title: 'Fatigue Management',
              description: 'Set your preferred maximum driving hours and break intervals. KamperHub calculates where you\'ll need overnight stops based on your fatigue settings and suggests suitable locations along the route. Plan realistic travel days, not marathon drives.',
              icon: '😴',
            },
            {
              title: 'Trip Advisor',
              description: 'An intelligent assistant that analyzes your complete trip and provides prioritized suggestions. It checks fuel gaps, identifies stretches without accommodation, flags weather concerns, and recommends adjustments — all before you leave.',
              icon: '💡',
            },
            {
              title: 'Packing Lists',
              description: 'Choose from 50+ packing templates organized by trip type — beach vacation, desert adventure, winter trip, national parks, and more. Assign items to specific travelers, check off as you pack, and get reminder emails before departure. Never forget the essentials.',
              icon: '✅',
            },
            {
              title: 'Trip Budgets & Expenses',
              description: 'Set a trip budget with categories for fuel, campground fees, food, activities, and more. KamperHub auto-estimates your fuel costs based on distance and consumption. Track expenses as you travel and see exactly where your money goes.',
              icon: '💰',
            },
          ].map((feature, i) => (
            <div key={i} style={{
              display: 'flex', gap: '20px', marginBottom: '32px', padding: '24px',
              backgroundColor: colors.cream, borderRadius: '12px',
            }}>
              <div style={{ fontSize: '32px', flexShrink: 0 }}>{feature.icon}</div>
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: colors.darkEarth, marginBottom: '8px', marginTop: 0 }}>{feature.title}</h3>
                <p style={{ fontSize: '16px', color: colors.slate, lineHeight: '1.6', margin: 0 }}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why this isn't a generic trip planner */}
      <section style={{ padding: '80px 24px', backgroundColor: colors.cream }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', color: colors.darkEarth, marginBottom: '16px', textAlign: 'center' }}>
            Why RV Trips Require Different Planning Than Car Trips
          </h2>
          <p style={{ fontSize: '18px', color: colors.slate, textAlign: 'center', marginBottom: '48px', lineHeight: '1.6' }}>
            RV trips require different planning because towing changes how a vehicle accelerates, climbs hills,
            and stops. Ignoring these differences can lead to rushed travel days and unsafe driving conditions.
            Planning with towing in mind results in smoother trips and less strain on the vehicle.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div style={{ padding: '24px', backgroundColor: colors.white, borderRadius: '12px', borderLeft: `4px solid ${colors.primary}` }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.darkEarth, marginBottom: '8px', marginTop: 0 }}>
                Fuel Range While Towing
              </h3>
              <p style={{ fontSize: '15px', color: colors.slate, lineHeight: '1.6', margin: 0 }}>
                Towing a trailer increases fuel consumption by 30–50%. KamperHub calculates fuel stops based on your
                actual towing consumption rate — not your truck&apos;s highway MPG. Critical for crossing deserts,
                mountain passes, and remote stretches between major interstates.
              </p>
            </div>
            <div style={{ padding: '24px', backgroundColor: colors.white, borderRadius: '12px', borderLeft: `4px solid ${colors.primary}` }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.darkEarth, marginBottom: '8px', marginTop: 0 }}>
                Weight-Aware Route Planning
              </h3>
              <p style={{ fontSize: '15px', color: colors.slate, lineHeight: '1.6', margin: 0 }}>
                Your vehicle and trailer specs travel with your trip. KamperHub knows your combination&apos;s weight limits,
                fuel tank size, and towing capacity — so trip planning starts from your actual setup, not assumptions.
                Pair with the <Link href="/us/towing-weight-calculator" style={{ color: colors.primary, fontWeight: '600' }}>weight calculator</Link> to check compliance before you leave.
              </p>
            </div>
            <div style={{ padding: '24px', backgroundColor: colors.white, borderRadius: '12px', borderLeft: `4px solid ${colors.primary}` }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.darkEarth, marginBottom: '8px', marginTop: 0 }}>
                RV-Friendly Stops
              </h3>
              <p style={{ fontSize: '15px', color: colors.slate, lineHeight: '1.6', margin: 0 }}>
                Not every rest stop or campground can fit a truck and trailer. KamperHub&apos;s boondocking finder filters
                for RV access, and overnight stop suggestions account for the fact that you&apos;re not driving a sedan.
                Find RV parks, BLM land, and rest areas that actually work for your rig.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: '80px 24px', backgroundColor: colors.cream }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', color: colors.darkEarth, marginBottom: '48px', textAlign: 'center' }}>
            Avoid Long or Unsafe Driving Days When Towing
          </h2>

          {[
            { step: '1', title: 'Set up your rig', description: 'Select your tow vehicle and travel trailer from the database. KamperHub loads fuel consumption, tank size, and towing specs automatically.' },
            { step: '2', title: 'Plan your route', description: 'Enter your departure point, destination, and any waypoints. Set your departure date and fatigue preferences (max driving hours, break intervals).' },
            { step: '3', title: 'Review the Trip Advisor', description: 'KamperHub analyzes your route and provides suggestions — fuel gap warnings, overnight stop recommendations, weather alerts, and accommodation options.' },
            { step: '4', title: 'Add campgrounds & points of interest', description: 'Search for campgrounds, boondocking spots, and points of interest along your route. Add them as waypoints with one click.' },
            { step: '5', title: 'Pack and prepare', description: 'Use packing list templates, assign items to travelers, create a trip budget, and run through the pre-departure checklist. Share the trip summary with your travel partner via email.' },
            { step: '6', title: 'Hit the road', description: 'Open navigation from the trip summary to start your journey. Track expenses as you travel. Mark the trip as complete when you get home and see your travel stats.' },
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

      {/* What's included per plan */}
      <section style={{ padding: '80px 24px', backgroundColor: colors.white }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', color: colors.darkEarth, marginBottom: '48px', textAlign: 'center' }}>
            What&apos;s Included
          </h2>

          <div style={{ backgroundColor: colors.cream, borderRadius: '12px', overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '16px' }}>
              <thead>
                <tr style={{ backgroundColor: colors.primary }}>
                  <th style={{ padding: '16px 20px', textAlign: 'left', color: colors.white, fontWeight: '600' }}>Feature</th>
                  <th style={{ padding: '16px 20px', textAlign: 'center', color: colors.white, fontWeight: '600' }}>Free</th>
                  <th style={{ padding: '16px 20px', textAlign: 'center', color: colors.white, fontWeight: '600' }}>Explorer $10/yr</th>
                  <th style={{ padding: '16px 20px', textAlign: 'center', color: colors.white, fontWeight: '600' }}>Pro $49/yr</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Route planner', '✅', '✅', '✅'],
                  ['Boondocking / free camping finder', '✅', '✅', '✅'],
                  ['Weather forecasts', '✅', '✅', '✅'],
                  ['Fuel calculators', '✅', '✅', '✅'],
                  ['Unlimited saved trips', '—', '✅', '✅'],
                  ['Packing lists (50+ templates)', '—', '✅', '✅'],
                  ['Traveler profiles', '—', '✅', '✅'],
                  ['Trip budgets & expenses', '—', '—', '✅'],
                  ['Pre-departure checklists', '—', '—', '✅'],
                  ['Weight compliance', '—', '—', '✅'],
                  ['Tow simulator', '—', '—', '✅'],
                  ['Household sharing (up to 5)', '—', '—', '✅'],
                ].map(([feature, free, explorer, pro], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #e5e5e5' }}>
                    <td style={{ padding: '14px 20px', color: colors.darkEarth }}>{feature}</td>
                    <td style={{ padding: '14px 20px', textAlign: 'center', color: colors.slate }}>{free}</td>
                    <td style={{ padding: '14px 20px', textAlign: 'center', color: colors.slate }}>{explorer}</td>
                    <td style={{ padding: '14px 20px', textAlign: 'center', color: colors.primary, fontWeight: '600' }}>{pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '80px 24px', backgroundColor: colors.cream }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', color: colors.darkEarth, marginBottom: '48px', textAlign: 'center' }}>
            Frequently Asked Questions
          </h2>
          {faqs.map((faq, i) => (
            <div key={i} style={{ marginBottom: '16px', padding: '24px', backgroundColor: colors.white, borderRadius: '12px' }}>
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
            Plan Your Next RV Trip With KamperHub
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.85)', marginBottom: '32px', lineHeight: '1.6' }}>
            Route planning, fuel stops, boondocking, weather, packing lists and budgets — all in one app.
            Built for RV travelers hitting the open road.
          </p>
          <a href={`${APP_URL}/signup?redirect=/route-planner`} style={{
            display: 'inline-block', padding: '16px 48px', backgroundColor: colors.accent, color: colors.white,
            textDecoration: 'none', fontWeight: '700', borderRadius: '12px', fontSize: '20px',
          }}>
            Start Planning Free →
          </a>
        </div>
      </section>

      {/* Contextual cross-links */}
      <section style={{ padding: '80px 24px', backgroundColor: colors.white }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: colors.darkEarth, marginBottom: '16px', textAlign: 'center' }}>
            Plan the Trip. Check the Weight. Hit the Road.
          </h2>
          <p style={{ fontSize: '18px', color: colors.slate, textAlign: 'center', marginBottom: '48px', lineHeight: '1.6' }}>
            Trip planning works best after you&apos;ve verified your towing setup is safe and legal.
            Check your weights first, then plan your route with confidence.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            <Link href="/us/towing-weight-calculator" style={{ textDecoration: 'none' }}>
              <div style={{ padding: '24px', backgroundColor: colors.cream, borderRadius: '12px', borderLeft: `4px solid ${colors.primary}`, height: '100%' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.darkEarth, marginBottom: '8px', marginTop: 0 }}>Free Weight Calculator</h3>
                <p style={{ fontSize: '15px', color: colors.slate, lineHeight: '1.6', margin: 0 }}>
                  Check your GVWR, GCWR, towing capacity and tongue weight before you leave. Free to use.
                </p>
              </div>
            </Link>
            <Link href="/us/tow-simulator" style={{ textDecoration: 'none' }}>
              <div style={{ padding: '24px', backgroundColor: colors.cream, borderRadius: '12px', borderLeft: `4px solid ${colors.primary}`, height: '100%' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.darkEarth, marginBottom: '8px', marginTop: 0 }}>Tow Simulator</h3>
                <p style={{ fontSize: '15px', color: colors.slate, lineHeight: '1.6', margin: 0 }}>
                  Visualize your weight distribution and sway risk. Experiment with loading before you pack.
                </p>
              </div>
            </Link>
            <Link href="/us/overweight-trailer-fines" style={{ textDecoration: 'none' }}>
              <div style={{ padding: '24px', backgroundColor: colors.cream, borderRadius: '12px', borderLeft: '4px solid #ef4444', height: '100%' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.darkEarth, marginBottom: '8px', marginTop: 0 }}>Overweight Fines</h3>
                <p style={{ fontSize: '15px', color: colors.slate, lineHeight: '1.6', margin: 0 }}>
                  State-by-state penalties for overloaded trailers. Know the risks before you travel.
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
            <Link href="/us/overweight-trailer-fines" style={{ color: colors.primary, textDecoration: 'none', fontSize: '16px', fontWeight: '500' }}>Overweight Trailer Fines →</Link>
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
