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
  ArrowRight
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
      description: 'Plan routes with fuel stops, find campsites, and get weather forecasts. Save trips and access them anywhere.'
    },
    {
      icon: Scale,
      title: 'Weight Compliance Made Easy',
      description: 'Know your limits before you leave. Calculate tow ball weight, ATM, GVM, and GCM to stay legal and safe.'
    },
    {
      icon: Car,
      title: 'Your Digital Garage',
      description: 'Store all your vehicle and caravan specs in one place. Towing capacity, tank sizes, and dimensions at your fingertips.'
    },
    {
      icon: Fuel,
      title: 'Never Run Dry',
      description: 'Get low fuel warnings for outback travel. Find fuel stations along your route and calculate trip fuel costs.'
    },
    {
      icon: CheckSquare,
      title: 'Packing Lists & Checklists',
      description: 'Pre-departure checklists, packing lists by trip type, and weather-based suggestions. Never forget the essentials.'
    },
    {
      icon: DollarSign,
      title: 'Trip Budgets & Expenses',
      description: "Set trip budgets, track expenses by category, and see where your money goes. No more holiday bill shock."
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Resources',
      description: 'Access towing regulations, find dump points, locate gas refills, discover pet-friendly parks, and more.'
    },
    {
      icon: Users,
      title: 'Join the Community',
      description: 'Connect with thousands of Aussie travellers on Facebook, Instagram, and YouTube. Share tips and find inspiration.'
    }
  ];

  const calculators = [
    { name: 'Weight Distribution', icon: Scale },
    { name: 'Towing Capacity', icon: Car },
    { name: 'Fuel Cost', icon: Fuel },
    { name: 'Tyre Pressure', icon: Gauge },
    { name: 'Water Tank', icon: Droplets },
    { name: 'Solar & Battery', icon: Battery },
    { name: 'Gas/LPG Usage', icon: Thermometer },
    { name: 'Travel Time', icon: Clock },
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

  const pricingFeatures = [
    'Unlimited trip planning',
    'Vehicle & caravan garage',
    'Weight compliance calculator',
    'All 11 calculator tools',
    'Expense tracking & budgets',
    'Inventory management',
    'Packing lists & checklists',
    'Travel statistics',
    'Traveller profiles',
    'Email trip reminders'
  ];

  const faqs = [
    {
      q: 'Is there a free plan?',
      a: 'We offer a 7-day free trial with full access to all features. After that, it\'s just $9/month to continue.'
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
      q: 'Does it work offline?',
      a: 'KamperHub is primarily an online app, but your saved trips and vehicle details are cached for viewing when you have limited connectivity.'
    },
    {
      q: 'Is my data secure?',
      a: 'Absolutely. We use industry-standard encryption and secure authentication. Your data is stored safely and never shared with third parties.'
    },
    {
      q: 'Can I add multiple vehicles?',
      a: 'Yes! Add as many tow vehicles, caravans, and camper trailers as you like. Perfect for families with multiple rigs.'
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
        backgroundColor: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(8px)',
        borderBottom: `1px solid ${colors.gray[200]}`,
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
            />
          </div>

          {/* Desktop Nav */}
          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <a href="#features" style={{ color: colors.gray[600], textDecoration: 'none', fontWeight: '500' }}>Features</a>
            <a href="#pricing" style={{ color: colors.gray[600], textDecoration: 'none', fontWeight: '500' }}>Pricing</a>
            <a href="#faq" style={{ color: colors.gray[600], textDecoration: 'none', fontWeight: '500' }}>FAQ</a>
            <a href="/resources" style={{ color: colors.gray[600], textDecoration: 'none', fontWeight: '500' }}>Resources</a>
          </div>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a href={`${APP_URL}/login`} className="desktop-nav" style={{ padding: '10px 20px', color: colors.gray[700], textDecoration: 'none', fontWeight: '500' }}>
              Log In
            </a>
            <a href={`${APP_URL}/signup`} style={{
              padding: '10px 24px',
              backgroundColor: colors.primary,
              color: colors.white,
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
              style={{ padding: '8px', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div style={{ padding: '16px 24px', borderTop: `1px solid ${colors.gray[200]}`, backgroundColor: colors.white }}>
            <a href="#features" style={{ display: 'block', padding: '12px 0', color: colors.gray[700], textDecoration: 'none' }}>Features</a>
            <a href="#pricing" style={{ display: 'block', padding: '12px 0', color: colors.gray[700], textDecoration: 'none' }}>Pricing</a>
            <a href="#faq" style={{ display: 'block', padding: '12px 0', color: colors.gray[700], textDecoration: 'none' }}>FAQ</a>
            <a href="/resources" style={{ display: 'block', padding: '12px 0', color: colors.gray[700], textDecoration: 'none' }}>Resources</a>
            <a href={`${APP_URL}/login`} style={{ display: 'block', padding: '12px 0', color: colors.gray[700], textDecoration: 'none' }}>Log In</a>
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
                backgroundColor: colors.gray[50],
                borderRadius: '16px',
                padding: '28px',
                border: `1px solid ${colors.gray[200]}`
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: `${colors.primary}15`,
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}>
                  <feature.icon size={24} color={colors.primary} />
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
                backgroundColor: colors.gray[100],
                borderRadius: '100px',
                fontSize: '14px',
                fontWeight: '500',
                color: colors.gray[700]
              }}>
                <calc.icon size={18} color={colors.primary} />
                {calc.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" style={{ padding: '80px 0', backgroundColor: colors.cream }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', textAlign: 'center', marginBottom: '16px', color: colors.gray[900] }}>
            Simple, Affordable Pricing
          </h2>
          <p style={{ textAlign: 'center', color: colors.gray[500], marginBottom: '40px', fontSize: '18px' }}>
            One plan. Full access. No hidden fees.
          </p>
          <div style={{
            backgroundColor: colors.white,
            borderRadius: '24px',
            padding: '40px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
            border: `2px solid ${colors.primary}`
          }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <p style={{
                fontSize: '14px',
                fontWeight: '600',
                color: colors.primary,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '8px'
              }}>
                KamperHub Premium
              </p>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '4px' }}>
                <span style={{ fontSize: '56px', fontWeight: '800', color: colors.gray[900] }}>$9</span>
                <span style={{ fontSize: '18px', color: colors.gray[500] }}>/month AUD</span>
              </div>
              <p style={{ color: colors.gray[500], fontSize: '14px', marginTop: '8px' }}>
                That&apos;s less than $2.10 per week – cheaper than a flat white!
              </p>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px' }}>
              {pricingFeatures.map((feature, index) => (
                <li key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 0',
                  borderBottom: index < pricingFeatures.length - 1 ? `1px solid ${colors.gray[100]}` : 'none'
                }}>
                  <Check size={20} color={colors.primary} />
                  <span style={{ color: colors.gray[700] }}>{feature}</span>
                </li>
              ))}
            </ul>
            <a href={`${APP_URL}/signup`} style={{
              display: 'block',
              width: '100%',
              padding: '16px',
              backgroundColor: colors.primary,
              color: colors.white,
              textAlign: 'center',
              textDecoration: 'none',
              fontWeight: '600',
              borderRadius: '12px',
              fontSize: '16px'
            }}>
              Start Your Free 7-Day Trial
            </a>
            <p style={{ textAlign: 'center', color: colors.gray[500], fontSize: '13px', marginTop: '16px' }}>
              No credit card required • Cancel anytime
            </p>
          </div>
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
      <footer style={{ padding: '48px 0', backgroundColor: colors.gray[900] }}>
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
              <p style={{ color: colors.gray[400], lineHeight: '1.6', fontSize: '14px' }}>
                The all-in-one app for Australian caravan travellers. Plan smarter, tow safer, travel further.
              </p>
            </div>

            {/* Links */}
            <div style={{ display: 'flex', gap: '64px', flexWrap: 'wrap' }}>
              <div>
                <h4 style={{ color: colors.white, fontSize: '14px', fontWeight: '600', marginBottom: '16px' }}>Product</h4>
                <a href="#features" style={{ display: 'block', color: colors.gray[400], textDecoration: 'none', marginBottom: '12px', fontSize: '14px' }}>Features</a>
                <a href="#pricing" style={{ display: 'block', color: colors.gray[400], textDecoration: 'none', marginBottom: '12px', fontSize: '14px' }}>Pricing</a>
                <a href="/resources" style={{ display: 'block', color: colors.gray[400], textDecoration: 'none', marginBottom: '12px', fontSize: '14px' }}>Resources</a>
              </div>
              <div>
                <h4 style={{ color: colors.white, fontSize: '14px', fontWeight: '600', marginBottom: '16px' }}>Legal</h4>
                <a href="/legal/privacy" style={{ display: 'block', color: colors.gray[400], textDecoration: 'none', marginBottom: '12px', fontSize: '14px' }}>Privacy Policy</a>
                <a href="/legal/terms" style={{ display: 'block', color: colors.gray[400], textDecoration: 'none', marginBottom: '12px', fontSize: '14px' }}>Terms of Service</a>
                <a href="/legal/refunds" style={{ display: 'block', color: colors.gray[400], textDecoration: 'none', marginBottom: '12px', fontSize: '14px' }}>Refund Policy</a>
              </div>
              <div>
                <h4 style={{ color: colors.white, fontSize: '14px', fontWeight: '600', marginBottom: '16px' }}>Contact</h4>
                <a href={`${APP_URL}/contact`} style={{ display: 'block', color: colors.gray[400], textDecoration: 'none', marginBottom: '12px', fontSize: '14px' }}>Contact Us</a>
                <a href="mailto:info@kamperhub.com" style={{ display: 'block', color: colors.gray[400], textDecoration: 'none', marginBottom: '12px', fontSize: '14px' }}>info@kamperhub.com</a>
              </div>
            </div>
          </div>
          <div style={{
            borderTop: `1px solid ${colors.gray[800]}`,
            paddingTop: '24px',
            textAlign: 'center',
            color: colors.gray[500],
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
