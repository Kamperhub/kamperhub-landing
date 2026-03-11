'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Map,
  Scale,
  Car,
  Fuel,
  CheckSquare,
  DollarSign,
  BookOpen,
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
  LayoutDashboard,
  ClipboardCheck,
  Shield,
  BarChart3,
  Tent,
  Refrigerator,
  MapPin,
  Warehouse
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
      icon: LayoutDashboard,
      title: 'Trip Readiness at a Glance',
      description: 'See your overall trip readiness percentage. Track planning progress, pre-departure tasks, and know exactly what\'s left to do.',
      color: '#6b8e6b',
      bg: '#f0f7f2'
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
      title: 'Packing Lists & Checklists',
      description: '50+ packing templates, weather-based suggestions, and traveller assignments. Pack smarter, not harder.',
      color: '#8b5cf6',
      bg: '#f5f3ff'
    },
    {
      icon: ClipboardCheck,
      title: 'Pre-Departure Checklist',
      description: '60+ industry-standard checks across 12 categories. Tyres, coupling, lights, brakes, gas, water - never miss a critical item.',
      color: '#f59e0b',
      bg: '#fef9c3'
    },
    {
      icon: DollarSign,
      title: 'Trip Budgets & Expenses',
      description: 'Set trip budgets by category with auto fuel estimates. Track expenses and see where your money goes.',
      color: '#22c55e',
      bg: '#f0fdf4'
    },
    {
      icon: Shield,
      title: 'Stay Compliant',
      description: 'Get warnings for expiring registration, insurance, gas bottle certification, and upcoming service intervals.',
      color: '#dc2626',
      bg: '#fef2f2'
    },
    {
      icon: Users,
      title: 'Share with Your Crew',
      description: 'Add the Crew pack to share trips with up to 5 household members. Each member can view, edit, and collaborate on shared trips.',
      color: '#0891b2',
      bg: '#ecfeff'
    },
    {
      icon: Droplets,
      title: 'Find Utilities Anywhere',
      description: 'Locate water fill points, dump stations, LPG refills, public toilets, and laundry facilities near you or along your route.',
      color: '#3b82f6',
      bg: '#eff6ff'
    },
    {
      icon: Tent,
      title: 'Free Camping Finder',
      description: 'Discover free and low-cost campsites across Australia. Filter by amenities like toilets, water, pet-friendly, and powered sites.',
      color: '#059669',
      bg: '#ecfdf5'
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Resources',
      description: 'Access towing regulations, find dump points, locate gas refills, discover pet-friendly parks, and more.',
      color: '#6366f1',
      bg: '#eef2ff'
    },
    {
      icon: BarChart3,
      title: 'Track Your Adventures',
      description: 'See your travel stats - total kilometres, trips completed, nights on the road, and more.',
      color: '#7c3aed',
      bg: '#f5f3ff'
    }
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

  const explorerFeatures = [
    'Unlimited trip planning',
    'Route planner with Trip Advisor',
    'Free camping finder',
    'Explore & POI search',
    'Packing lists & 50+ templates',
    'Blog & guides',
    'Basic garage (1 vehicle + 1 caravan)',
    '8 calculator tools (fridge, solar, gas, tanks, tyres, travel time & more)',
    'Travel statistics',
    'Traveller profiles (up to 2)',
  ];

  const packs = [
    {
      name: 'TowReady',
      icon: Scale,
      color: '#3b82f6',
      bg: '#eff6ff',
      features: [
        'Weight compliance calculator',
        'Towing capacity calculator',
        'Tow simulator',
        'Trip weight tracking',
        'Pre-departure checklists',
      ],
    },
    {
      name: 'Crew',
      icon: Users,
      color: '#0891b2',
      bg: '#ecfeff',
      features: [
        'Household members (up to 5)',
        'Multi-user shared access',
        'Invite family members',
      ],
    },
    {
      name: 'Logbook',
      icon: DollarSign,
      color: '#22c55e',
      bg: '#f0fdf4',
      features: [
        'Expense tracking',
        'Trip budgets',
        'Fuel cost calculator',
        'Fuel stop planner',
        'Trip cost estimator',
      ],
    },
    {
      name: 'Shed',
      icon: Warehouse,
      color: '#f59e0b',
      bg: '#fef9c3',
      features: [
        'Full inventory management',
        'Unlimited vehicles & caravans',
        'Aftermarket accessories',
        'Cargo weight distribution',
      ],
    },
  ];

  const faqs = [
    {
      q: 'Is there a free plan?',
      a: 'We offer a 3-day free trial with Explorer. After that, Explorer is just $0.99/month (billed yearly at $11.88). Add optional packs like TowReady, Crew, Logbook, or Shed for $4.99/quarter each.'
    },
    {
      q: 'Do I need a credit card to start the trial?',
      a: 'No! You can start your trial without entering any payment details. We\'ll only ask for payment when you\'re ready to subscribe.'
    },
    {
      q: 'Can I cancel anytime?',
      a: 'Yes, you can cancel your subscription at any time from your account settings. Your access will continue until the end of your billing period.'
    },
    {
      q: 'How does trip sharing work?',
      a: 'Add the Crew pack ($4.99/quarter) to invite up to 5 household members. They get full app access. Trip owners can share individual trips — shared trips appear in each member\'s trip list.'
    },
    {
      q: 'What are packs and how do they work?',
      a: 'Packs are optional add-ons that unlock extra features on top of your Explorer base plan. Choose TowReady for weight compliance, Crew for household sharing, Logbook for expense tracking, or Shed for full inventory management. Each pack is $4.99/quarter — only pay for what you need.'
    },
    {
      q: 'What vehicles and caravans are supported?',
      a: 'Our database includes 150+ popular Australian tow vehicles and 160+ caravans with full specifications including weights, towing capacity, and tank sizes. You can also manually enter your own specs if your rig isn\'t listed.'
    },
    {
      q: 'What\'s included in the pre-departure checklist?',
      a: 'Pre-departure checklists are part of the TowReady pack. We\'ve compiled 60+ industry-standard checks across 12 categories: tyres, coupling & hitch, lights, brakes, gas, water, interior security, external security, vehicle checks, safety equipment, documents, and personal items.'
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
          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <a href="#features" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', fontWeight: '500' }}>Features</a>
            <a href="#pricing" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', fontWeight: '500' }}>Pricing</a>
            <a href="#faq" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', fontWeight: '500' }}>FAQ</a>
            <a href={`${APP_URL}/blog`} style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', fontWeight: '500' }}>Blog</a>
            <a href={`${APP_URL}/free-camping`} style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', fontWeight: '500' }}>Free Camping</a>
            <a href={`${APP_URL}/shop`} style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', fontWeight: '500' }}>Shop</a>
          </div>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a href={`${APP_URL}/login`} className="desktop-nav" style={{ padding: '10px 20px', color: colors.white, textDecoration: 'none', fontWeight: '500' }}>
              Log In
            </a>
            <a href={`${APP_URL}/signup`} style={{
              padding: '10px 24px',
              backgroundColor: colors.white,
              color: colors.primary,
              textDecoration: 'none',
              fontWeight: '600',
              borderRadius: '10px',
              fontSize: '14px'
            }}>
              Start Free Trial
            </a>
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
            <a href="#faq" style={{ display: 'block', padding: '12px 0', color: colors.white, textDecoration: 'none' }}>FAQ</a>
            <a href={`${APP_URL}/blog`} style={{ display: 'block', padding: '12px 0', color: colors.white, textDecoration: 'none' }}>Blog</a>
            <a href={`${APP_URL}/free-camping`} style={{ display: 'block', padding: '12px 0', color: colors.white, textDecoration: 'none' }}>Free Camping</a>
            <a href={`${APP_URL}/shop`} style={{ display: 'block', padding: '12px 0', color: colors.white, textDecoration: 'none' }}>Shop</a>
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
            Your Caravan Trip Planner +<br />
            <span style={{ color: colors.primary }}>Towing Weights Tracker</span>
          </h1>
          <p style={{
            fontSize: '18px',
            color: colors.gray[600],
            maxWidth: '600px',
            margin: '0 auto 40px',
            lineHeight: '1.6'
          }}>
            Plan routes, check weight compliance, and get your rig road-ready — all in one app.
            Built for Australian caravan and RV travellers.
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
              Start Your Free 3-Day Trial
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

      {/* See It In Action — replaced by hero video */}

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

      {/* Pricing Section */}
      <section id="pricing" style={{ padding: '80px 0', backgroundColor: colors.cream }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', textAlign: 'center', marginBottom: '16px', color: colors.gray[900] }}>
            Flexible, Affordable Pricing
          </h2>
          <p style={{ textAlign: 'center', color: colors.gray[500], marginBottom: '48px', fontSize: '18px' }}>
            Start with Explorer, add packs as you need them
          </p>

          {/* Explorer Card - Full Width */}
          <div style={{
            backgroundColor: colors.white,
            borderRadius: '24px',
            padding: '40px',
            boxShadow: '0 10px 40px rgba(56, 102, 65, 0.2)',
            border: `3px solid ${colors.primary}`,
            position: 'relative',
            marginBottom: '32px'
          }}>
            <div style={{
              position: 'absolute',
              top: '-14px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: colors.primary,
              color: colors.white,
              padding: '6px 20px',
              borderRadius: '100px',
              fontSize: '12px',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Base Plan
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
              <div style={{ textAlign: 'center' }}>
                <p style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: colors.primary,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '4px'
                }}>
                  Explorer
                </p>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '4px' }}>
                  <span style={{ fontSize: '48px', fontWeight: '800', color: colors.gray[900] }}>$0.99</span>
                  <span style={{ fontSize: '16px', color: colors.gray[500] }}>/month</span>
                </div>
                <p style={{ color: colors.gray[500], fontSize: '14px', marginTop: '4px' }}>
                  Billed yearly at $11.88
                </p>
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '8px 32px',
                width: '100%',
                maxWidth: '700px'
              }}>
                {explorerFeatures.map((feature, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '6px 0',
                    fontSize: '14px'
                  }}>
                    <Check size={18} color={colors.primary} style={{ flexShrink: 0 }} />
                    <span style={{ color: colors.gray[700] }}>{feature}</span>
                  </div>
                ))}
              </div>
              <a href={`${APP_URL}/signup`} style={{
                display: 'inline-block',
                padding: '14px 40px',
                backgroundColor: colors.primary,
                color: colors.white,
                textAlign: 'center',
                textDecoration: 'none',
                fontWeight: '600',
                borderRadius: '12px',
                fontSize: '16px'
              }}>
                Start 3-Day Free Trial
              </a>
            </div>
          </div>

          {/* Pack Cards - Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
            alignItems: 'stretch'
          }}>
            {packs.map((pack, packIndex) => (
              <div
                key={packIndex}
                style={{
                  backgroundColor: colors.white,
                  borderRadius: '24px',
                  padding: '32px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  border: `1px solid ${colors.gray[200]}`,
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: pack.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 12px'
                  }}>
                    <pack.icon size={24} color={pack.color} />
                  </div>
                  <p style={{
                    fontSize: '16px',
                    fontWeight: '700',
                    color: colors.gray[900],
                    marginBottom: '4px'
                  }}>
                    {pack.name}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '4px' }}>
                    <span style={{ fontSize: '32px', fontWeight: '800', color: colors.gray[900] }}>$1.66</span>
                    <span style={{ fontSize: '14px', color: colors.gray[500] }}>/month</span>
                  </div>
                  <p style={{ color: colors.gray[500], fontSize: '13px', marginTop: '2px' }}>
                    Billed quarterly at $4.99
                  </p>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', flex: 1 }}>
                  {pack.features.map((feature, index) => (
                    <li key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '6px 0',
                      fontSize: '14px'
                    }}>
                      <Check size={16} color={pack.color} style={{ flexShrink: 0 }} />
                      <span style={{ color: colors.gray[700] }}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div style={{
                  padding: '10px 14px',
                  backgroundColor: pack.bg,
                  color: pack.color,
                  textAlign: 'center',
                  fontWeight: '600',
                  borderRadius: '10px',
                  fontSize: '13px'
                }}>
                  Add to Explorer
                </div>
              </div>
            ))}
          </div>

          <p style={{ textAlign: 'center', color: colors.gray[500], fontSize: '14px', marginTop: '32px' }}>
            Explorer includes a 3-day free trial · No credit card required · Cancel anytime
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
            Start your free 3-day trial — no credit card required
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
            Start Your Free Trial
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
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.6', fontSize: '14px' }}>
                The all-in-one app for caravan travellers. Plan smarter, tow safer, travel further.
              </p>
            </div>

            {/* Links */}
            <div style={{ display: 'flex', gap: '64px', flexWrap: 'wrap' }}>
              <div>
                <h4 style={{ color: colors.white, fontSize: '14px', fontWeight: '600', marginBottom: '16px' }}>Product</h4>
                <a href="#features" style={{ display: 'block', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', marginBottom: '12px', fontSize: '14px' }}>Features</a>
                <a href="#pricing" style={{ display: 'block', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', marginBottom: '12px', fontSize: '14px' }}>Pricing</a>
                <a href={`${APP_URL}/free-camping`} style={{ display: 'block', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', marginBottom: '12px', fontSize: '14px' }}>Free Camping</a>
                <a href={`${APP_URL}/shop`} style={{ display: 'block', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', marginBottom: '12px', fontSize: '14px' }}>Shop</a>
              </div>
              <div>
                <h4 style={{ color: colors.white, fontSize: '14px', fontWeight: '600', marginBottom: '16px' }}>Legal</h4>
                <a href="/legal/privacy" style={{ display: 'block', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', marginBottom: '12px', fontSize: '14px' }}>Privacy Policy</a>
                <a href="/legal/terms" style={{ display: 'block', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', marginBottom: '12px', fontSize: '14px' }}>Terms of Service</a>
                <a href="/legal/refunds" style={{ display: 'block', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', marginBottom: '12px', fontSize: '14px' }}>Refund Policy</a>
              </div>
              <div>
                <h4 style={{ color: colors.white, fontSize: '14px', fontWeight: '600', marginBottom: '16px' }}>Contact</h4>
                <a href={`${APP_URL}/contact`} style={{ display: 'block', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', marginBottom: '12px', fontSize: '14px' }}>Contact Us</a>
                <a href="mailto:info@kamperhub.com" style={{ display: 'block', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', marginBottom: '12px', fontSize: '14px' }}>info@kamperhub.com</a>
                <a href="https://www.facebook.com/profile.php?id=61577280351290" target="_blank" rel="noopener noreferrer" style={{ display: 'block', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', marginBottom: '12px', fontSize: '14px' }}>Facebook</a>
              </div>
            </div>
          </div>
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.2)',
            paddingTop: '24px',
            textAlign: 'center',
            color: 'rgba(255,255,255,0.7)',
            fontSize: '14px'
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
