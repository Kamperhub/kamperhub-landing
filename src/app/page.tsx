'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Map,
  Scale,
  Car,
  Fuel,
  CheckSquare,
  DollarSign,
  Users,
  ChevronDown,
  Check,
  Menu,
  X,
  Droplets,
  Battery,
  Thermometer,
  Clock,
  Gauge,
  ArrowRight,
  Mail,
  Download,
  Tent,
  Refrigerator,
  MapPin,
  BookOpen,
  Eye,
  Pencil,
  Trophy,
  Star,
  Lock,
} from 'lucide-react';

// Brand Colors - Bush Meets Coast palette
const colors = {
  primary: '#6b8e6b',       // Sage Green
  primaryLight: '#7fa37f',
  primaryDark: '#5a7a5a',
  secondary: '#3d8b8b',     // Ocean Teal
  accent: '#c97b5d',        // Terracotta
  cream: '#fdfbf7',         // Beach Cream
  sand: '#e8dcc4',          // Sandstone
  driftwood: '#a68b6a',     // Driftwood
  darkEarth: '#3d3229',     // Dark Earth
  slate: '#5a6672',         // Slate
  white: '#FFFFFF',
  gray: {
    50: '#fdfbf7',
    100: '#e8dcc4',
    200: '#d4c9b0',
    300: '#a68b6a',
    400: '#8a7a62',
    500: '#5a6672',
    600: '#4a5560',
    700: '#3d3229',
    800: '#2d2520',
    900: '#1a1512',
  }
};

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [guideEmail, setGuideEmail] = useState('');
  const [guideStatus, setGuideStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [guideError, setGuideError] = useState('');

  // Handle #hash scrolling for client-side rendered page
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      // Small delay to ensure DOM is rendered
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    }
  }, []);

  const handleGuideSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!guideEmail || guideStatus === 'loading') return;

    setGuideStatus('loading');
    setGuideError('');

    try {
      const res = await fetch('https://app.kamperhub.com/api/ebooks/preview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: guideEmail,
          slug: 'weight-compliance-made-simple',
          source: 'landing-page',
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Something went wrong');
      }

      setGuideStatus('success');
    } catch (err) {
      setGuideStatus('error');
      setGuideError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  const features = [
    {
      icon: Map,
      title: 'Smart Trip Planning',
      description: 'Plan routes with fuel stops, weather forecasts, and realistic travel times. Save trips and access them anywhere.',
      color: '#ec4899',
      bg: '#fdf2f8'
    },
    {
      icon: Scale,
      title: 'Towing Safety Checks',
      description: 'Get a clear pass/fail safety score for your vehicle and caravan combo before you leave. Know your limits, tow with confidence.',
      color: '#3b82f6',
      bg: '#eff6ff'
    },
    {
      icon: Car,
      title: 'Your Digital Garage',
      description: 'Store vehicle and caravan specs, track kit items and standard gear, and monitor rego and insurance expiry dates.',
      color: '#64748b',
      bg: '#f1f5f9'
    },
    {
      icon: Fuel,
      title: 'Never Run Dry',
      description: 'Get low fuel warnings for outback travel with our Fuel Gap Warning System. Find stations and auto-calculate fuel budgets.',
      color: '#f59e0b',
      bg: '#fef9c3'
    },
    {
      icon: CheckSquare,
      title: 'Packing & Pre-Departure',
      description: '50+ packing templates, 60+ pre-departure checks across 12 categories. Tyres, coupling, lights, brakes — never miss a critical item.',
      color: '#8b5cf6',
      bg: '#f5f3ff'
    },
    {
      icon: DollarSign,
      title: 'Trip Budgets & Expenses',
      description: 'Set trip budgets by category with auto fuel estimates. Track expenses and see where your money goes.',
      color: '#22c55e',
      bg: '#f0fdf4'
    },
    {
      icon: Tent,
      title: 'Free Camping Finder',
      description: 'Discover free and low-cost campsites across Australia. Filter by amenities like toilets, water, pet-friendly, and powered sites.',
      color: '#059669',
      bg: '#ecfdf5'
    },
    {
      icon: Droplets,
      title: 'Find Utilities Anywhere',
      description: 'Locate water fill points, dump stations, LPG refills, public toilets, and laundry facilities near you or along your route.',
      color: '#3b82f6',
      bg: '#eff6ff'
    },
  ];

  const calculators = [
    { name: 'Towing Safety', icon: Scale, color: '#3b82f6', bg: '#eff6ff' },
    { name: 'Towing Capacity', icon: Car, color: '#64748b', bg: '#f1f5f9' },
    { name: 'Fuel Cost', icon: Fuel, color: '#f59e0b', bg: '#fef9c3' },
    { name: 'Tyre Pressure', icon: Gauge, color: '#ec4899', bg: '#fdf2f8' },
    { name: 'Water Tank', icon: Droplets, color: '#0891b2', bg: '#ecfeff' },
    { name: 'Solar & Battery', icon: Battery, color: '#22c55e', bg: '#f0fdf4' },
    { name: 'Gas/LPG Usage', icon: Thermometer, color: '#f97316', bg: '#fff7ed' },
    { name: 'Fridge Runtime', icon: Refrigerator, color: '#06b6d4', bg: '#ecfeff' },
    { name: 'Trip Cost', icon: DollarSign, color: '#10b981', bg: '#ecfdf5' },
    { name: 'Travel Time', icon: Clock, color: '#8b5cf6', bg: '#f5f3ff' },
    { name: 'Fuel Stops', icon: MapPin, color: '#ef4444', bg: '#fef2f2' },
  ];

  const steps = [
    {
      number: '1',
      title: 'Set Up Your Garage',
      description: "Add your tow vehicle and caravan. We'll store all the specs so you don't have to remember them."
    },
    {
      number: '2',
      title: 'Plan Your Trip',
      description: "Enter your destinations, select your rig, and we'll calculate fuel stops, travel times, and costs."
    },
    {
      number: '3',
      title: 'Hit the Road',
      description: 'Access your trip details, checklists, and packing lists on the go. Travel with confidence.'
    }
  ];

  const plans = [
    {
      name: 'Free',
      price: '$0',
      priceDetail: 'Free forever',
      color: '#6b7280',
      bg: '#f9fafb',
      border: '#e5e7eb',
      badge: null,
      features: [
        'Trip planning (1 active trip)',
        'Free camping finder',
        'Explore & POI search',
        'Blog & guides',
        'Basic garage (1 vehicle + 1 caravan)',
        '6 calculator tools',
      ],
      cta: 'Get Started Free',
      ctaBg: '#6b7280',
    },
    {
      name: 'Explorer',
      price: '$10',
      priceDetail: '$10/year — less than $1/month',
      color: colors.primary,
      bg: colors.white,
      border: colors.primary,
      badge: 'Most Popular',
      features: [
        'Everything in Free, plus:',
        'Unlimited trip planning',
        'Route planner with Trip Advisor',
        'Packing lists & 50+ templates',
        'Weight dashboard (view only)',
        'Travel statistics',
        'Traveller profiles (up to 2)',
        'All 11 calculator tools',
      ],
      cta: 'Get Explorer — $10/yr',
      ctaBg: colors.primary,
    },
    {
      name: 'Pro',
      price: '$49',
      priceDetail: '$49/year — full access to everything',
      color: '#7c3aed',
      bg: colors.white,
      border: '#e5e7eb',
      badge: null,
      features: [
        'Everything in Explorer, plus:',
        'Full weight compliance (TowSafe)',
        'Cargo distribution simulator',
        'Towing & weight calculators',
        'Pre-departure checklists',
        'Expense tracking & budgets',
        'Household members (up to 5)',
        'Unlimited vehicles & caravans',
        'Full inventory management',
      ],
      cta: 'Get Pro — $49/yr',
      ctaBg: '#7c3aed',
    },
    {
      name: 'Family',
      price: '$99',
      priceDetail: '$99/year — includes Kids Zone',
      color: '#3b82f6',
      bg: colors.white,
      border: '#e5e7eb',
      badge: 'New',
      features: [
        'Everything in Pro, plus:',
        'KamperHub Kids Zone (ages 3–12)',
        "Kip's Storybooks & learning games",
        'Wildlife spotting & state collector',
        'Road trip challenges & bingo',
        'Travel journal for kids',
        'Kid profiles & age groups',
        'Trip countdown & activities',
      ],
      cta: 'Get Family — $99/yr',
      ctaBg: '#3b82f6',
    },
  ];

  const faqs = [
    {
      q: 'Is there a free plan?',
      a: 'Yes! KamperHub has a free plan with core features like trip planning, free camping finder, and basic tools. Upgrade to Explorer ($10/year) for the full experience, or Pro ($49/year) for everything including weight compliance, household sharing, expense tracking, and full inventory management.'
    },
    {
      q: 'Do I need a credit card to sign up?',
      a: 'No! Sign up for free without entering any payment details. We\'ll only ask for payment if you choose to upgrade.'
    },
    {
      q: 'Can I cancel anytime?',
      a: 'Yes, you can cancel your subscription at any time from your account settings. Your access will continue until the end of your billing period.'
    },
    {
      q: 'How does trip sharing work?',
      a: 'With the Pro plan ($49/year), you can invite up to 5 household members. They get full app access. Trip owners can share individual trips — shared trips appear in each member\'s trip list.'
    },
    {
      q: 'What\'s the difference between Explorer and Pro?',
      a: 'Explorer ($10/year) gives you unlimited trips, packing lists, all calculators, and travel stats. Pro ($49/year) adds full weight compliance with TowSafe scoring, expense tracking and budgets, household sharing (up to 5 members), unlimited vehicles and caravans, and full inventory management.'
    },
    {
      q: 'What is the Kids Zone?',
      a: 'KamperHub Kids Zone is a collection of educational games and activities designed for kids aged 3–12. It includes storybooks, wildlife spotting, a state collector map, travel journals, road trip challenges, and more. Two activities are free for all users. The full Kids Zone (9 activities) is included with the Family Plan ($99/year).'
    },
    {
      q: 'What vehicles and caravans are supported?',
      a: 'Our database includes 150+ popular Australian tow vehicles and 160+ caravans with full specifications including weights, towing capacity, and tank sizes. You can also manually enter your own specs if your rig isn\'t listed.'
    },
    {
      q: 'What\'s included in the pre-departure checklist?',
      a: 'Pre-departure checklists are included in the Pro plan. We\'ve compiled 60+ industry-standard checks across 12 categories: tyres, coupling & hitch, lights, brakes, gas, water, interior security, external security, vehicle checks, safety equipment, documents, and personal items.'
    },
    {
      q: 'How does the Utilities finder work?',
      a: 'The Utilities page helps you find essential services like potable water fill points, dump stations, LPG refills, public toilets, and laundromats. Search by town or use your current location. Data comes from OpenStreetMap - a free, community-maintained database updated by volunteers worldwide.'
    },
    {
      q: 'How does the Free Camping finder work?',
      a: 'Our Free Camping page helps you discover free and low-cost campsites across Australia. Filter by amenities like toilets, water, pet-friendly, powered sites, and caravan-suitable. We use community-sourced data from OpenStreetMap, so you\'re seeing real places that fellow travellers have mapped. You can even add campsites directly to your trip plans.'
    },
    {
      q: 'Is my data secure?',
      a: 'Absolutely. We use industry-standard encryption and secure authentication. Your data is stored safely and never shared with third parties.'
    },
    {
      q: 'Is there a mobile app?',
      a: 'KamperHub is a progressive web app (PWA) that works beautifully on any device. Add it to your home screen for an app-like experience.'
    },
    {
      q: 'How do I get support?',
      a: 'Email us at info@kamperhub.com and we\'ll get back to you within 24-48 hours. We\'re real people who love caravanning too!'
    }
  ];

  const APP_URL = 'https://app.kamperhub.com';

  return (
    <div style={{ minHeight: '100vh', backgroundColor: colors.white }}>
      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(faq => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a
              }
            }))
          })
        }}
      />
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: colors.primary,
        zIndex: 1000
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Image
              src="/logo.png"
              alt="KamperHub"
              width={140}
              height={50}
              priority
            />
          </div>

          {/* Desktop Nav */}
          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <a href="#features" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', fontWeight: '500', fontSize: '20px' }}>Features</a>
            <a href="#pricing" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', fontWeight: '500', fontSize: '20px' }}>Pricing</a>
            <a href="#free-guide" style={{ color: '#fcd34d', textDecoration: 'none', fontWeight: '600', fontSize: '20px' }}>Free Guide</a>
            <a href={`${APP_URL}/blog`} style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', fontWeight: '500', fontSize: '20px' }}>Blog</a>
            <a href={`${APP_URL}/library`} style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', fontWeight: '500', fontSize: '20px' }}>Bookshelf</a>
            <a href={`${APP_URL}/shop`} style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', fontWeight: '500', fontSize: '20px' }}>Shop</a>
            <a href="#kids-zone" style={{
              padding: '8px 20px',
              background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
              color: colors.white,
              textDecoration: 'none',
              fontWeight: '700',
              borderRadius: '8px',
              fontSize: '20px',
              border: 'none',
              boxShadow: '0 2px 8px rgba(37, 99, 235, 0.4)',
            }}>
              Kids Zone
            </a>
            <a href={`${APP_URL}/login`} style={{
              padding: '8px 20px',
              backgroundColor: 'rgba(255,255,255,0.15)',
              color: colors.white,
              textDecoration: 'none',
              fontWeight: '600',
              borderRadius: '8px',
              fontSize: '20px',
              border: '1px solid rgba(255,255,255,0.3)',
            }}>
              Log In
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-btn"
              style={{ padding: '8px', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', color: colors.white }}
            >
              {mobileMenuOpen ? <X size={24} color={colors.white} /> : <Menu size={24} color={colors.white} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div style={{ padding: '16px 24px', borderTop: '1px solid rgba(255,255,255,0.2)', backgroundColor: colors.primary }}>
            <a href="#features" style={{ display: 'block', padding: '12px 0', color: colors.white, textDecoration: 'none' }}>Features</a>
            <a href="#pricing" style={{ display: 'block', padding: '12px 0', color: colors.white, textDecoration: 'none' }}>Pricing</a>
            <a href="#free-guide" style={{ display: 'block', padding: '12px 0', color: '#fcd34d', textDecoration: 'none', fontWeight: '600' }}>Free Guide</a>
            <a href={`${APP_URL}/blog`} style={{ display: 'block', padding: '12px 0', color: colors.white, textDecoration: 'none' }}>Blog</a>
            <a href={`${APP_URL}/library`} style={{ display: 'block', padding: '12px 0', color: colors.white, textDecoration: 'none' }}>Bookshelf</a>
            <a href={`${APP_URL}/shop`} style={{ display: 'block', padding: '12px 0', color: colors.white, textDecoration: 'none' }}>Shop</a>
            <a href="#kids-zone" onClick={() => setMobileMenuOpen(false)} style={{ display: 'block', padding: '12px 16px', marginTop: '8px', background: 'linear-gradient(135deg, #3b82f6, #2563eb)', color: colors.white, textDecoration: 'none', fontWeight: '700', borderRadius: '8px', textAlign: 'center' as const, boxShadow: '0 2px 8px rgba(37, 99, 235, 0.4)' }}>Kids Zone</a>
            <a href={`${APP_URL}/login`} style={{ display: 'block', padding: '12px 0', color: colors.white, textDecoration: 'none' }}>Log In</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section style={{
        paddingTop: '120px',
        paddingBottom: '80px',
        background: `linear-gradient(180deg, ${colors.cream} 0%, ${colors.white} 100%)`
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <h1 style={{
            fontSize: 'clamp(36px, 6vw, 56px)',
            fontWeight: '800',
            color: colors.gray[900],
            marginBottom: '24px',
            lineHeight: '1.1'
          }}>
            Plan Your Trip.<br />
            <span style={{ color: colors.primary }}>Hit the Road with Confidence.</span>
          </h1>
          <p style={{
            fontSize: '18px',
            color: colors.gray[600],
            maxWidth: '600px',
            margin: '0 auto 40px',
            lineHeight: '1.6'
          }}>
            Route planning, packing lists, fuel stops, budgets, and safety checks — everything you need for stress-free caravan travel. Built for Australians.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <a href={`${APP_URL}/signup`} style={{
              padding: '16px 40px',
              backgroundColor: colors.primary,
              color: colors.white,
              textDecoration: 'none',
              fontWeight: '600',
              borderRadius: '12px',
              fontSize: '18px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 14px rgba(56, 102, 65, 0.3)'
            }}>
              Get Started Free
              <ArrowRight size={20} />
            </a>
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', color: colors.gray[500], fontSize: '14px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Check size={16} color={colors.primary} /> No credit card required
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Check size={16} color={colors.primary} /> Cancel anytime
              </span>
            </div>
          </div>

          {/* Social Proof */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '24px',
            marginTop: '40px',
            padding: '20px 0',
            borderTop: `1px solid ${colors.sand}`,
            borderBottom: `1px solid ${colors.sand}`,
          }}>
            {[
              { value: '150+', label: 'Tow Vehicles' },
              { value: '160+', label: 'Caravans' },
              { value: '11', label: 'Calculator Tools' },
              { value: '60+', label: 'Safety Checks' },
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center', minWidth: '100px' }}>
                <div style={{ fontSize: '24px', fontWeight: '800', color: colors.primary }}>{stat.value}</div>
                <div style={{ fontSize: '13px', color: colors.gray[500] }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Value Pillars */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px',
            marginTop: '48px',
          }}>
            {[
              { icon: Map, title: 'Plan Smarter', desc: 'Routes, fuel stops, overnight stays — all calculated for your rig.', color: '#3b82f6', bg: '#eff6ff' },
              { icon: Scale, title: 'Tow Safer', desc: 'Weight checks, tyre pressures, and compliance scoring before you leave.', color: colors.accent, bg: '#fef7f3' },
              { icon: CheckSquare, title: 'Travel Further', desc: 'Budgets, packing lists, and pre-departure checklists sorted.', color: '#059669', bg: '#ecfdf5' },
            ].map((pillar, i) => (
              <div key={i} style={{
                padding: '20px 20px 20px 24px',
                backgroundColor: pillar.bg,
                borderRadius: '12px',
                borderLeft: `4px solid ${pillar.color}`,
                textAlign: 'left',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <pillar.icon size={22} color={pillar.color} />
                  <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '700', color: colors.gray[900] }}>
                    {pillar.title}
                  </h3>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: colors.gray[500], lineHeight: '1.5' }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Hero Video */}
          <div style={{
            marginTop: '48px',
            maxWidth: '500px',
            margin: '48px auto 0',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
            border: '1px solid rgba(0,0,0,0.08)'
          }}>
            <video
              controls
              playsInline
              poster="/videos/video-thumbnail.png"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            >
              <source src="/videos/KamperHub_Landing_Page_Video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Free Guide Lead Magnet */}
      <section id="free-guide" style={{
        padding: '80px 0',
        background: `linear-gradient(135deg, ${colors.primaryDark} 0%, #2d6b6b 100%)`,
        borderTop: `4px solid ${colors.accent}`,
        borderBottom: `4px solid ${colors.accent}`,
      }}>
        <div style={{
          maxWidth: '700px',
          margin: '0 auto',
          padding: '0 24px',
          textAlign: 'center',
        }}>
          <div style={{
            display: 'inline-block',
            padding: '8px 20px',
            backgroundColor: colors.accent,
            color: colors.white,
            borderRadius: '100px',
            fontSize: '13px',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '20px',
          }}>
            Free Download
          </div>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '800',
            color: colors.white,
            marginBottom: '16px',
            lineHeight: '1.2',
          }}>
            Weight Compliance<br />Made Simple
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.9)',
            marginBottom: '8px',
            lineHeight: '1.6',
          }}>
            Understand GVM, ATM, GCM, towball weight, and payload — in plain English.
          </p>
          <p style={{
            fontSize: '15px',
            color: 'rgba(255,255,255,0.6)',
            marginBottom: '32px',
            lineHeight: '1.5',
          }}>
            No signup required. Enter your email and start reading instantly.
          </p>

          {guideStatus === 'success' ? (
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.08)',
              borderRadius: '16px',
              padding: '32px',
              border: `2px solid ${colors.accent}`,
            }}>
              <Check size={48} color="#4ade80" style={{ marginBottom: '12px' }} />
              <p style={{ fontSize: '22px', fontWeight: '700', color: colors.white, marginBottom: '8px' }}>
                You&apos;re in!
              </p>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', marginBottom: '24px' }}>
                Your free weight compliance guide is ready. Click below to start reading.
              </p>
              <a href="/guides/weight-compliance.html" target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 32px',
                backgroundColor: colors.accent,
                color: colors.white,
                textDecoration: 'none',
                fontWeight: '700',
                borderRadius: '10px',
                fontSize: '16px',
              }}>
                <Download size={18} />
                Read Your Free Guide
              </a>
            </div>
          ) : (
            <form onSubmit={handleGuideSubmit} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px',
              maxWidth: '480px',
              margin: '0 auto',
            }}>
              <div style={{
                display: 'flex',
                width: '100%',
                gap: '10px',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}>
                <div style={{ position: 'relative', flex: '1 1 260px', minWidth: '260px' }}>
                  <Mail size={18} color="#999" style={{
                    position: 'absolute',
                    left: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    pointerEvents: 'none',
                  }} />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={guideEmail}
                    onChange={(e) => setGuideEmail(e.target.value)}
                    required
                    style={{
                      width: '100%',
                      padding: '16px 16px 16px 46px',
                      borderRadius: '10px',
                      border: '2px solid rgba(255,255,255,0.2)',
                      backgroundColor: colors.white,
                      color: colors.darkEarth,
                      fontSize: '16px',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={guideStatus === 'loading'}
                  style={{
                    padding: '16px 32px',
                    backgroundColor: colors.accent,
                    color: colors.white,
                    border: 'none',
                    borderRadius: '10px',
                    fontWeight: '700',
                    fontSize: '16px',
                    cursor: guideStatus === 'loading' ? 'wait' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    opacity: guideStatus === 'loading' ? 0.7 : 1,
                    whiteSpace: 'nowrap',
                    boxShadow: '0 4px 14px rgba(201, 123, 93, 0.4)',
                  }}
                >
                  <Download size={18} />
                  {guideStatus === 'loading' ? 'Sending...' : 'Get Free Guide'}
                </button>
              </div>
              {guideStatus === 'error' && (
                <p style={{ color: '#fca5a5', fontSize: '14px', margin: 0 }}>{guideError}</p>
              )}
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', margin: 0 }}>
                No spam, ever. Just one helpful guide for your towing setup.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={{ padding: '80px 0', backgroundColor: colors.white }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', textAlign: 'center', marginBottom: '16px', color: colors.gray[900] }}>
            Everything You Need for Stress-Free Caravan Travel
          </h2>
          <p style={{ textAlign: 'center', color: colors.gray[500], marginBottom: '48px', fontSize: '18px' }}>
            All the tools you need in one place
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {features.map((feature, index) => (
              <div key={index} style={{
                backgroundColor: feature.bg,
                borderRadius: '16px',
                padding: '28px',
                border: `1px solid ${feature.bg}`
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: `${feature.color}20`,
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}>
                  <feature.icon size={24} color={feature.color} />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px', color: colors.gray[900] }}>
                  {feature.title}
                </h3>
                <p style={{ color: colors.gray[600], lineHeight: '1.6', fontSize: '15px', margin: 0 }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: '80px 0', backgroundColor: colors.cream }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', textAlign: 'center', marginBottom: '48px', color: colors.gray[900] }}>
            Get Started in 3 Simple Steps
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {steps.map((step, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  backgroundColor: colors.primary,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontSize: '28px',
                  fontWeight: '700',
                  color: colors.white
                }}>
                  {step.number}
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: colors.gray[900] }}>
                  {step.title}
                </h3>
                <p style={{ color: colors.gray[600], lineHeight: '1.6', margin: 0 }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Tools */}
      <section style={{ padding: '80px 0', backgroundColor: colors.white }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', textAlign: 'center', marginBottom: '16px', color: colors.gray[900] }}>
            Powerful Tools at Your Fingertips
          </h2>
          <p style={{ textAlign: 'center', color: colors.gray[500], marginBottom: '48px', fontSize: '18px' }}>
            11 purpose-built calculators for caravan travellers
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
            {calculators.map((calc, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 20px',
                backgroundColor: calc.bg,
                borderRadius: '100px',
                fontSize: '14px',
                fontWeight: '500',
                color: colors.gray[700]
              }}>
                <calc.icon size={18} color={calc.color} />
                {calc.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Guides Section */}
      <section style={{ padding: '80px 0', backgroundColor: colors.cream }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', textAlign: 'center', marginBottom: '16px', color: colors.gray[900] }}>
            Free Tools &amp; Guides
          </h2>
          <p style={{ textAlign: 'center', color: colors.gray[500], marginBottom: '48px', fontSize: '18px' }}>
            Expert resources to help you tow safely and travel with confidence.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Weight Calculator', description: 'Check your GVM, ATM, GCM, towing capacity and towball weight against Australian legal limits — free.', href: '/caravan-towing-weight-calculator', icon: '⚖️' },
              { title: 'Tow Simulator', description: 'Model your complete tow setup. See weight distribution, sway risk, and compliance in one visual dashboard.', href: '/tow-simulator', icon: '🚗' },
              { title: 'Trip Planner', description: 'Plan routes with fuel stops, weather forecasts, free camping, packing lists and budgets.', href: '/caravan-trip-planner', icon: '🗺️' },
              { title: 'Weight Distribution Guide', description: 'Learn where to place heavy, medium and light items in your caravan for safe, stable towing.', href: '/caravan-weight-distribution-guide', icon: '📦' },
              { title: 'Overweight Fines by State', description: 'State-by-state penalties, roadside inspection process, and the insurance risk most people don\'t know about.', href: '/caravan-overweight-fines-australia', icon: '🚨' },
            ].map((tool, i) => (
              <a key={i} href={tool.href} style={{
                display: 'block', padding: '24px', backgroundColor: colors.white, borderRadius: '12px',
                textDecoration: 'none', transition: 'box-shadow 0.2s',
                boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
              }}>
                <div style={{ fontSize: '28px', marginBottom: '12px' }}>{tool.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.gray[900], marginBottom: '8px' }}>{tool.title}</h3>
                <p style={{ fontSize: '15px', color: colors.gray[500], lineHeight: '1.6', margin: 0 }}>{tool.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Kids Zone Showcase */}
      <section id="kids-zone" style={{
        padding: '80px 0',
        background: 'linear-gradient(180deg, #eef2ff 0%, #f5f3ff 50%, #ffffff 100%)',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{
              display: 'inline-block',
              padding: '8px 20px',
              backgroundColor: '#3b82f6',
              color: '#ffffff',
              borderRadius: '100px',
              fontSize: '13px',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '20px',
            }}>
              Family Plan Feature
            </div>
            <h2 style={{
              fontSize: '36px',
              fontWeight: '800',
              color: colors.gray[900],
              marginBottom: '16px',
              lineHeight: '1.2',
            }}>
              KamperHub Kids Zone
            </h2>
            <p style={{
              fontSize: '18px',
              color: colors.gray[500],
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6',
            }}>
              Keep the kids entertained and learning on every road trip. Educational games, stories, and activities designed for ages 3–12.
            </p>
          </div>

          {/* Activity Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
            marginBottom: '48px',
          }}>
            {[
              { icon: BookOpen, title: "Kip's Storybooks", desc: 'Illustrated adventure stories that teach values like patience, bravery, and helping others.', color: '#22c55e', bg: '#f0fdf4', free: true },
              { icon: Star, title: 'Learn & Play', desc: 'Times tables, spelling bees, maths challenges, and counting games — learning made fun.', color: '#f59e0b', bg: '#fefce8', free: true },
              { icon: Eye, title: 'Wildlife Spotting', desc: 'Spot and log Australian animals on your trip. Track sightings with location data.', color: '#3b82f6', bg: '#eff6ff', free: false },
              { icon: Map, title: 'State Collector', desc: "Colour in the states you've visited and build your Australia map as you travel.", color: '#6366f1', bg: '#eef2ff', free: false },
              { icon: Pencil, title: 'Travel Journal', desc: 'Kids write about their daily adventures with drawings, mood stickers, and photos.', color: '#ec4899', bg: '#fdf2f8', free: false },
              { icon: Trophy, title: 'Road Trip Challenge', desc: 'Timed spotting game with family leaderboard — play together on multiple devices.', color: '#f97316', bg: '#fff7ed', free: false },
            ].map((activity, i) => (
              <div key={i} style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                border: `1px solid ${activity.free ? `${activity.color}30` : '#e5e7eb'}`,
                position: 'relative',
              }}>
                {activity.free ? (
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: '#22c55e',
                    color: '#fff',
                    fontSize: '11px',
                    fontWeight: '700',
                    padding: '3px 10px',
                    borderRadius: '8px',
                  }}>
                    Free Preview
                  </div>
                ) : (
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: '#6366f1',
                    color: '#fff',
                    fontSize: '11px',
                    fontWeight: '700',
                    padding: '3px 10px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}>
                    <Lock size={10} />
                    Family Plan
                  </div>
                )}
                <div style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: activity.bg,
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                }}>
                  <activity.icon size={24} color={activity.color} />
                </div>
                <h3 style={{
                  fontSize: '17px',
                  fontWeight: '700',
                  color: colors.gray[900],
                  marginBottom: '8px',
                }}>
                  {activity.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: colors.gray[500],
                  lineHeight: '1.5',
                  margin: 0,
                }}>
                  {activity.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Age Group Badges */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            marginBottom: '40px',
          }}>
            {[
              { label: 'Little Explorers', ages: '3–5', color: '#f59e0b' },
              { label: 'Junior Rangers', ages: '6–8', color: '#22c55e' },
              { label: 'Trail Blazers', ages: '9–12', color: '#6366f1' },
            ].map((group, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                backgroundColor: '#ffffff',
                borderRadius: '100px',
                border: `2px solid ${group.color}`,
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              }}>
                <div style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: group.color,
                }} />
                <span style={{ fontWeight: '700', color: colors.gray[900], fontSize: '14px' }}>
                  {group.label}
                </span>
                <span style={{ color: colors.gray[500], fontSize: '13px' }}>
                  ({group.ages})
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center' }}>
            <a href={`${APP_URL}/signup`} style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '16px 40px',
              background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
              color: '#ffffff',
              textDecoration: 'none',
              fontWeight: '700',
              borderRadius: '12px',
              fontSize: '18px',
              boxShadow: '0 4px 14px rgba(37, 99, 235, 0.3)',
            }}>
              Try Kids Zone Free
              <ArrowRight size={20} />
            </a>
            <p style={{
              color: colors.gray[500],
              fontSize: '14px',
              marginTop: '16px',
            }}>
              2 free activities included · Family Plan unlocks all 9 activities — $99/year
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" style={{ padding: '80px 0', backgroundColor: colors.white }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', textAlign: 'center', marginBottom: '16px', color: colors.gray[900] }}>
            Simple, Transparent Pricing
          </h2>
          <p style={{ textAlign: 'center', color: colors.gray[500], marginBottom: '48px', fontSize: '18px' }}>
            Start free, upgrade when you need more
          </p>

          {/* 3-Tier Pricing Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            alignItems: 'stretch',
          }}>
            {plans.map((plan, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: plan.bg,
                  borderRadius: '24px',
                  padding: '32px',
                  boxShadow: plan.badge ? '0 10px 40px rgba(56, 102, 65, 0.2)' : '0 4px 20px rgba(0,0,0,0.08)',
                  border: plan.badge ? `3px solid ${plan.border}` : `1px solid ${plan.border}`,
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                }}
              >
                {plan.badge && (
                  <div style={{
                    position: 'absolute',
                    top: '-14px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: plan.color,
                    color: colors.white,
                    padding: '6px 20px',
                    borderRadius: '100px',
                    fontSize: '12px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}>
                    {plan.badge}
                  </div>
                )}
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                  <p style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: plan.color,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '4px',
                  }}>
                    {plan.name}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '4px' }}>
                    <span style={{ fontSize: '48px', fontWeight: '800', color: colors.gray[900] }}>{plan.price}</span>
                    {plan.name !== 'Free' && <span style={{ fontSize: '16px', color: colors.gray[500] }}>/year</span>}
                  </div>
                  <p style={{ color: colors.gray[500], fontSize: '14px', marginTop: '4px' }}>
                    {plan.priceDetail}
                  </p>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', flex: 1 }}>
                  {plan.features.map((feature, fi) => (
                    <li key={fi} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '6px 0',
                      fontSize: '14px',
                    }}>
                      {fi === 0 && feature.startsWith('Everything') ? (
                        <span style={{ color: plan.color, fontWeight: '600', fontSize: '13px' }}>{feature}</span>
                      ) : (
                        <>
                          <Check size={16} color={plan.color} style={{ flexShrink: 0 }} />
                          <span style={{ color: colors.gray[700] }}>{feature}</span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
                <a href={`${APP_URL}/signup`} style={{
                  display: 'block',
                  padding: '14px 20px',
                  backgroundColor: plan.ctaBg,
                  color: colors.white,
                  textAlign: 'center',
                  textDecoration: 'none',
                  fontWeight: '600',
                  borderRadius: '12px',
                  fontSize: '15px',
                }}>
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          <p style={{ textAlign: 'center', color: colors.gray[500], fontSize: '14px', marginTop: '32px' }}>
            No credit card required · Cancel anytime · AUD
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" style={{ padding: '80px 0', backgroundColor: colors.white }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', textAlign: 'center', marginBottom: '48px', color: colors.gray[900] }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, index) => (
              <div key={index} style={{
                backgroundColor: colors.gray[50],
                borderRadius: '12px',
                border: `1px solid ${colors.gray[200]}`,
                overflow: 'hidden'
              }}>
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <span style={{ fontSize: '16px', fontWeight: '600', color: colors.gray[900] }}>
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={20}
                    color={colors.gray[500]}
                    style={{ transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}
                  />
                </button>
                {openFaq === index && (
                  <div style={{ padding: '0 24px 20px', color: colors.gray[600], lineHeight: '1.6' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
          <p style={{ fontSize: '14px', color: '#6b7280', textAlign: 'center', marginTop: '16px' }}>
            Last updated: March 2026
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{
        padding: '80px 0',
        background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '700', color: colors.white, marginBottom: '16px' }}>
            Ready to Plan Your Next Adventure?
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.85)', marginBottom: '32px' }}>
            Sign up free — no credit card required
          </p>
          <a href={`${APP_URL}/signup`} style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '16px 40px',
            backgroundColor: colors.white,
            color: colors.primary,
            textDecoration: 'none',
            fontWeight: '600',
            borderRadius: '12px',
            fontSize: '18px'
          }}>
            Get Started Free
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '48px 0', backgroundColor: colors.primary }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '48px', marginBottom: '48px' }}>
            {/* Brand */}
            <div style={{ maxWidth: '300px' }}>
              <Image
                src="/logo.png"
                alt="KamperHub"
                width={160}
                height={56}
                style={{ marginBottom: '16px' }}
              />
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.6', fontSize: '16px' }}>
                The all-in-one app for caravan travellers. Plan smarter, tow safer, travel further.
              </p>
            </div>

            {/* Links */}
            <div style={{ display: 'flex', gap: '64px', flexWrap: 'wrap' }}>
              <div>
                <h4 style={{ color: colors.white, fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>Product</h4>
                <a href="#features" style={{ display: 'block', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', marginBottom: '12px', fontSize: '16px' }}>Features</a>
                <a href="#pricing" style={{ display: 'block', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', marginBottom: '12px', fontSize: '16px' }}>Pricing</a>
                <a href={`${APP_URL}/free-camping`} style={{ display: 'block', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', marginBottom: '12px', fontSize: '16px' }}>Free Camping</a>
                <a href={`${APP_URL}/shop`} style={{ display: 'block', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', marginBottom: '12px', fontSize: '16px' }}>Shop</a>
              </div>
              <div>
                <h4 style={{ color: colors.white, fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>Tools &amp; Guides</h4>
                <a href="/caravan-towing-weight-calculator" style={{ display: 'block', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', marginBottom: '12px', fontSize: '16px' }}>Weight Calculator</a>
                <a href="/tow-simulator" style={{ display: 'block', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', marginBottom: '12px', fontSize: '16px' }}>Tow Simulator</a>
                <a href="/caravan-trip-planner" style={{ display: 'block', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', marginBottom: '12px', fontSize: '16px' }}>Trip Planner</a>
                <a href="/caravan-weight-distribution-guide" style={{ display: 'block', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', marginBottom: '12px', fontSize: '16px' }}>Weight Distribution Guide</a>
                <a href="/caravan-overweight-fines-australia" style={{ display: 'block', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', marginBottom: '12px', fontSize: '16px' }}>Overweight Fines</a>
              </div>
              <div>
                <h4 style={{ color: colors.white, fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>Legal</h4>
                <a href="/legal/privacy" style={{ display: 'block', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', marginBottom: '12px', fontSize: '16px' }}>Privacy Policy</a>
                <a href="/legal/terms" style={{ display: 'block', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', marginBottom: '12px', fontSize: '16px' }}>Terms of Service</a>
                <a href="/legal/refunds" style={{ display: 'block', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', marginBottom: '12px', fontSize: '16px' }}>Refund Policy</a>
              </div>
              <div>
                <h4 style={{ color: colors.white, fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>Contact</h4>
                <a href={`${APP_URL}/contact`} style={{ display: 'block', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', marginBottom: '12px', fontSize: '16px' }}>Contact Us</a>
                <a href="mailto:info@kamperhub.com" style={{ display: 'block', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', marginBottom: '12px', fontSize: '16px' }}>info@kamperhub.com</a>
                <a href="https://www.facebook.com/profile.php?id=61577280351290" target="_blank" rel="noopener noreferrer" style={{ display: 'block', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', marginBottom: '12px', fontSize: '16px' }}>Facebook</a>
                <a href="https://www.instagram.com/kamperhub" target="_blank" rel="noopener noreferrer" style={{ display: 'block', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', marginBottom: '12px', fontSize: '16px' }}>Instagram</a>
              </div>
            </div>
          </div>
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.2)',
            paddingTop: '24px',
            textAlign: 'center',
            color: 'rgba(255,255,255,0.7)',
            fontSize: '16px'
          }}>
            © {new Date().getFullYear()} KamperHub. All rights reserved.
          </div>
        </div>
      </footer>

      {/* CSS for responsive nav */}
      <style jsx global>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </div>
  );
}
