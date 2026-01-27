'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

const colors = {
  primary: '#6b8e6b',
  white: '#FFFFFF',
  gray: { 200: '#e5e7eb', 500: '#6b7280', 700: '#374151' }
};

export default function PrivacyPolicyPage() {
  const lastUpdated = '25 December 2025';

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      {/* Navigation */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, backgroundColor: colors.primary, zIndex: 1000 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/"><Image src="/logo-horizontal.svg" alt="KamperHub" width={160} height={40} priority style={{ filter: 'brightness(0) invert(1)' }} /></Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a href="https://app.kamperhub.com/login" style={{ padding: '10px 20px', color: 'rgba(255,255,255,0.9)', textDecoration: 'none', fontWeight: '500' }}>Log In</a>
            <a href="https://app.kamperhub.com/signup" style={{ padding: '10px 24px', backgroundColor: colors.white, color: colors.primary, textDecoration: 'none', fontWeight: '600', borderRadius: '10px', fontSize: '14px' }}>Start Free Trial</a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div style={{
        padding: '100px 20px 24px',
        borderBottom: '1px solid #f3f4f6'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Link href="/" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#6b8e6b',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: '500',
            marginBottom: '16px'
          }}>
            <ArrowLeft size={18} />
            Back to Home
          </Link>
          <h1 style={{ fontSize: '28px', fontWeight: '700', color: '#111827', margin: 0 }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '8px' }}>
            Last updated: {lastUpdated}
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{
        padding: '32px 20px 96px',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>

          {/* Introduction */}
          <section>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: 0 }}>
              KamperHub ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our caravan travel planning application and website (collectively, the "Service").
            </p>
            <p style={{ color: '#374151', lineHeight: '1.7', marginTop: '16px' }}>
              By using KamperHub, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our Service.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              1. Information We Collect
            </h2>

            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '12px' }}>
              1.1 Personal Information You Provide
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: '0 0 12px 0' }}>
              When you register for an account or use our Service, we may collect:
            </p>
            <ul style={{ color: '#374151', lineHeight: '1.7', margin: 0, paddingLeft: '24px' }}>
              <li>Name and email address</li>
              <li>Password (stored securely using encryption)</li>
              <li>Payment information (processed securely by Stripe)</li>
              <li>Vehicle and caravan details you add to your garage</li>
              <li>Trip plans, routes, and travel preferences</li>
              <li>Traveller profiles and companion information</li>
              <li>Inventory lists and weight calculations</li>
              <li>Financial records and expense tracking data</li>
            </ul>

            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', margin: '24px 0 12px 0' }}>
              1.2 Automatically Collected Information
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: '0 0 12px 0' }}>
              When you access our Service, we may automatically collect:
            </p>
            <ul style={{ color: '#374151', lineHeight: '1.7', margin: 0, paddingLeft: '24px' }}>
              <li>Device information (browser type, operating system)</li>
              <li>IP address and general location data</li>
              <li>Usage data (pages visited, features used, time spent)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              2. How We Use Your Information
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: '0 0 12px 0' }}>
              We use the information we collect to:
            </p>
            <ul style={{ color: '#374151', lineHeight: '1.7', margin: 0, paddingLeft: '24px' }}>
              <li>Provide, maintain, and improve our Service</li>
              <li>Process your subscription payments</li>
              <li>Send you important updates about your account</li>
              <li>Respond to your enquiries and provide customer support</li>
              <li>Analyse usage patterns to enhance user experience</li>
              <li>Detect and prevent fraud or abuse</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          {/* Third-Party Services */}
          <section>
            <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              3. Third-Party Services
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: '0 0 16px 0' }}>
              We use trusted third-party services to operate KamperHub:
            </p>

            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '8px' }}>
              Supabase
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: '0 0 16px 0' }}>
              We use Supabase for authentication and database services. Your data is stored securely on Supabase's infrastructure. View their privacy policy at <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: '#6b8e6b' }}>supabase.com/privacy</a>.
            </p>

            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '8px' }}>
              Stripe
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: '0 0 16px 0' }}>
              We use Stripe to process payments. We do not store your credit card details. Stripe handles all payment information securely. View their privacy policy at <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: '#6b8e6b' }}>stripe.com/privacy</a>.
            </p>

            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '8px' }}>
              Google Maps
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: '0 0 16px 0' }}>
              We use Google Maps for route planning and location services. View Google's privacy policy at <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: '#6b8e6b' }}>policies.google.com/privacy</a>.
            </p>

            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '8px' }}>
              Analytics
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: 0 }}>
              We may use Google Analytics or similar services to understand how users interact with our Service. This data is anonymised and used solely to improve our platform.
            </p>
          </section>

          {/* Affiliate Links */}
          <section>
            <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              4. Affiliate Links and Partnerships
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: 0 }}>
              KamperHub may contain affiliate links to third-party products and services. If you click on an affiliate link and make a purchase, we may receive a commission at no additional cost to you. These partnerships help support the ongoing development of our Service. We only recommend products and services we believe may be valuable to our users.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              5. Cookies and Tracking Technologies
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: '0 0 12px 0' }}>
              We use cookies and similar technologies to:
            </p>
            <ul style={{ color: '#374151', lineHeight: '1.7', margin: '0 0 16px 0', paddingLeft: '24px' }}>
              <li>Keep you signed in to your account</li>
              <li>Remember your preferences</li>
              <li>Analyse how our Service is used</li>
              <li>Improve your experience</li>
            </ul>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: 0 }}>
              You can control cookies through your browser settings. However, disabling certain cookies may affect the functionality of our Service.
            </p>
          </section>

          {/* Data Security */}
          <section>
            <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              6. Data Security
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: 0 }}>
              We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. This includes using HTTPS encryption, secure password hashing, and regular security reviews. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              7. Data Retention
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: 0 }}>
              We retain your personal information for as long as your account is active or as needed to provide you with our Service. If you delete your account, we will delete or anonymise your personal information within 30 days, except where we are required to retain it for legal, accounting, or reporting purposes.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              8. Your Rights Under Australian Privacy Law
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: '0 0 12px 0' }}>
              Under the Privacy Act 1988 (Cth) and Australian Privacy Principles (APPs), you have the right to:
            </p>
            <ul style={{ color: '#374151', lineHeight: '1.7', margin: '0 0 16px 0', paddingLeft: '24px' }}>
              <li>Access your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of marketing communications</li>
              <li>Lodge a complaint with the Office of the Australian Information Commissioner (OAIC)</li>
            </ul>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: 0 }}>
              To exercise these rights, please contact us at <a href="mailto:info@kamperhub.com" style={{ color: '#6b8e6b' }}>info@kamperhub.com</a>.
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              9. Children's Privacy
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: 0 }}>
              Our Service is not intended for children under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately and we will take steps to delete such information.
            </p>
          </section>

          {/* Changes to This Policy */}
          <section>
            <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              10. Changes to This Privacy Policy
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: 0 }}>
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              11. Contact Us
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: '0 0 16px 0' }}>
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div style={{
              backgroundColor: '#f9fafb',
              borderRadius: '12px',
              padding: '20px',
              border: '1px solid #e5e7eb'
            }}>
              <p style={{ color: '#111827', fontWeight: '600', margin: '0 0 8px 0' }}>KamperHub</p>
              <p style={{ color: '#374151', margin: '0 0 4px 0' }}>
                Email: <a href="mailto:info@kamperhub.com" style={{ color: '#6b8e6b' }}>info@kamperhub.com</a>
              </p>
              <p style={{ color: '#374151', margin: 0 }}>
                Postal Address: PO Box 5219, Algester QLD 4115, Australia
              </p>
            </div>
          </section>

          {/* Related Links */}
          <section style={{
            borderTop: '1px solid #e5e7eb',
            paddingTop: '32px',
            marginTop: '16px'
          }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              Related Policies
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Link href="/legal/terms" style={{ color: '#6b8e6b', textDecoration: 'none' }}>
                Terms of Service →
              </Link>
              <Link href="/legal/refunds" style={{ color: '#6b8e6b', textDecoration: 'none' }}>
                Refund Policy →
              </Link>
            </div>
          </section>

        </div>
      </div>

      {/* Footer */}
      <footer style={{ padding: '48px 0', backgroundColor: colors.primary }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <Image src="/logo-horizontal.svg" alt="KamperHub" width={140} height={35} style={{ filter: 'brightness(0) invert(1)', marginBottom: '16px' }} />
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '14px' }}>The all-in-one app for caravan travellers.</p>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginTop: '24px' }}>© {new Date().getFullYear()} KamperHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
