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
  LayoutDashboard,
  ClipboardCheck,
  Shield,
  BarChart3
} from 'lucide-react';

// Brand Colors
const colors = {
  primary: '#386641',
  primaryLight: '#4a7c59',
  primaryDark: '#2d5235',
  accent: '#BC4749',
  cream: '#FAF8F1',
  white: '#FFFFFF',
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  }
};

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
      color: '#386641',
      bg: '#f0fdf4'
    },
    {
      icon: Scale,
      title: 'Weight Compliance Made Easy',
      description: 'Know your limits before you leave. Calculate tow ball weight, ATM, GVM, and GCM with our Trip Weight Calculator.',
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
      title: 'Traveller Profiles',
      description: 'Add travellers with weights for accurate compliance. Track pets, assign packing items, and send trip reminder emails.',
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
    { name: 'Weight Distribution', icon: Scale, color: '#3b82f6', bg: '#eff6ff' },
    { name: 'Towing Capacity', icon: Car, color: '#64748b', bg: '#f1f5f9' },
    { name: 'Fuel Cost', icon: Fuel, color: '#f59e0b', bg: '#fef9c3' },
    { name: 'Tyre Pressure', icon: Gauge, color: '#ec4899', bg: '#fdf2f8' },
    { name: 'Water Tank', icon: Droplets, color: '#0891b2', bg: '#ecfeff' },
    { name: 'Solar & Battery', icon: Battery, color: '#22c55e', bg: '#f0fdf4' },
    { name: 'Gas/LPG Usage', icon: Thermometer, color: '#f97316', bg: '#fff7ed' },
    { name: 'Travel Time', icon: Clock, color: '#8b5cf6', bg: '#f5f3ff' },
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

  const sharedFeatures = [
    'Unlimited trip planning',
    'Vehicle & caravan garage',
    'Trip Weight Calculator',
    'All 11 calculator tools',
    'Utilities finder (water, dump, LPG)',
    '60+ pre-departure checks',
    '50+ packing templates',
    'Trip budgets & expenses',
    'Compliance alerts',
    'Email reminders',
  ];

  const pricingTiers = [
    {
      name: 'Solo',
      price: 9,
      description: 'Perfect for solo travellers',
      members: '1 user',
      popular: false,
      isTeam: false,
      features: [
        ...sharedFeatures,
      ],
    },
    {
      name: 'Couple',
      price: 15,
      description: 'Travel together, plan together',
      members: '2 users',
      popular: true,
      isTeam: false,
      features: [
        ...sharedFeatures,
        'Shared trip access',
        'POI suggestions',
        'Packing assignments',
      ],
    },
    {
      name: 'Family',
      price: 29,
      description: 'The whole crew on one plan',
      members: 'Up to 5 users',
      popular: false,
      isTeam: false,
      features: [
        ...sharedFeatures,
        'Shared trip access',
        'POI suggestions',
        'Packing assignments',
      ],
    },
    {
      name: 'Team',
      price: null,
      description: 'For caravan clubs & tour groups',
      members: 'Up to 20 users',
      popular: false,
      isTeam: true,
      features: [
        ...sharedFeatures,
        'Shared trip access',
        'POI suggestions',
        'Packing assignments',
        'Team trip management',
        'Dedicated support',
      ],
    },
  ];

  const faqs = [
    {
      q: 'Is there a free plan?',
      a: 'We offer a 7-day free trial with full access to all features. After that, plans start at just $9/month for Solo, $15/month for Couple (2 users), or $29/month for Family (up to 5 users).'
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
      q: 'What vehicles and caravans are supported?',
      a: 'Our database includes 150+ popular Australian tow vehicles and 160+ caravans with full specifications including weights, towing capacity, and tank sizes. You can also manually enter your own specs if your rig isn\'t listed.'
    },
    {
      q: 'What\'s included in the pre-departure checklist?',
      a: 'We\'ve compiled 60+ industry-standard checks across 12 categories: tyres, coupling & hitch, lights, brakes, gas, water, interior security, external security, vehicle checks, safety equipment, documents, and personal items.'
    },
    {
      q: 'How does the Utilities finder work?',
      a: 'The Utilities page helps you find essential services like potable water fill points, dump stations, LPG refills, public toilets, and laundromats. Search by town or use your current location. Data comes from OpenStreetMap - a free, community-maintained database updated by volunteers worldwide.'
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
              src="/logo-horizontal.svg"
              alt="KamperHub"
              width={160}
              height={40}
              priority
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>

          {/* Desktop Nav */}
          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <a href="#features" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', fontWeight: '500' }}>Features</a>
            <a href="#pricing" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', fontWeight: '500' }}>Pricing</a>
            <a href="#faq" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', fontWeight: '500' }}>FAQ</a>
            <a href="/resources" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', fontWeight: '500' }}>Resources</a>
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
            <a href="/resources" style={{ display: 'block', padding: '12px 0', color: colors.white, textDecoration: 'none' }}>Resources</a>
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
            Plan Smarter. Tow Safer.<br />
            <span style={{ color: colors.primary }}>Travel Further.</span>
          </h1>
          <p style={{
            fontSize: '18px',
            color: colors.gray[600],
            maxWidth: '600px',
            margin: '0 auto 40px',
            lineHeight: '1.6'
          }}>
            Plan trips, manage your rig, track weights, and hit the road with confidence. 
            Built by Aussie travellers, for Aussie travellers.
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
              Start Your Free 7-Day Trial
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

      {/* Pricing Section */}
      <section id="pricing" style={{ padding: '80px 0', backgroundColor: colors.cream }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', textAlign: 'center', marginBottom: '16px', color: colors.gray[900] }}>
            Simple, Affordable Pricing
          </h2>
          <p style={{ textAlign: 'center', color: colors.gray[500], marginBottom: '48px', fontSize: '18px' }}>
            Choose the plan that fits your travel crew
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
            alignItems: 'stretch'
          }}>
            {pricingTiers.map((tier, tierIndex) => (
              <div
                key={tierIndex}
                style={{
                  backgroundColor: colors.white,
                  borderRadius: '24px',
                  padding: '32px',
                  boxShadow: tier.popular ? '0 10px 40px rgba(56, 102, 65, 0.2)' : '0 4px 20px rgba(0,0,0,0.08)',
                  border: tier.popular ? `3px solid ${colors.primary}` : `1px solid ${colors.gray[200]}`,
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {tier.popular && (
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
                    Most Popular
                  </div>
                )}
                <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                  <p style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: tier.popular ? colors.primary : tier.isTeam ? '#0369a1' : colors.gray[600],
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '4px'
                  }}>
                    {tier.name}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '4px' }}>
                    {tier.price !== null ? (
                      <>
                        <span style={{ fontSize: '48px', fontWeight: '800', color: colors.gray[900] }}>${tier.price}</span>
                        <span style={{ fontSize: '16px', color: colors.gray[500] }}>/month</span>
                      </>
                    ) : (
                      <span style={{ fontSize: '36px', fontWeight: '800', color: colors.gray[900] }}>Custom</span>
                    )}
                  </div>
                  <p style={{ color: colors.gray[500], fontSize: '14px', marginTop: '4px' }}>
                    {tier.members}
                  </p>
                  <p style={{ color: colors.gray[600], fontSize: '13px', marginTop: '8px', fontStyle: 'italic' }}>
                    {tier.description}
                  </p>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', flex: 1 }}>
                  {tier.features.map((feature, index) => (
                    <li key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '8px 0',
                      fontSize: '14px'
                    }}>
                      <Check size={18} color={colors.primary} style={{ flexShrink: 0 }} />
                      <span style={{ color: colors.gray[700] }}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href={tier.isTeam ? 'mailto:info@kamperhub.com?subject=Team%20Subscription%20Enquiry' : `${APP_URL}/signup`} style={{
                  display: 'block',
                  width: '100%',
                  padding: '14px',
                  backgroundColor: tier.popular ? colors.primary : tier.isTeam ? '#0369a1' : colors.white,
                  color: tier.popular || tier.isTeam ? colors.white : colors.primary,
                  textAlign: 'center',
                  textDecoration: 'none',
                  fontWeight: '600',
                  borderRadius: '12px',
                  fontSize: '15px',
                  border: tier.popular || tier.isTeam ? 'none' : `2px solid ${colors.primary}`
                }}>
                  {tier.isTeam ? 'Contact Us' : 'Start Free Trial'}
                </a>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', color: colors.gray[500], fontSize: '14px', marginTop: '32px' }}>
            All plans include a free 7-day trial • No credit card required • Cancel anytime
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
            Join thousands of Aussie travellers who trust KamperHub
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
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                <Image
                  src="/logo-horizontal.svg"
                  alt="KamperHub"
                  width={140}
                  height={35}
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>
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
                <a href="/resources" style={{ display: 'block', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', marginBottom: '12px', fontSize: '14px' }}>Resources</a>
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
