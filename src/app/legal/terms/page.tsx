'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

const colors = {
  primary: '#386641',
  white: '#FFFFFF',
  gray: { 200: '#e5e7eb', 500: '#6b7280', 700: '#374151' }
};

export default function TermsOfServicePage() {
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
            color: '#386641',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: '500',
            marginBottom: '16px'
          }}>
            <ArrowLeft size={18} />
            Back to Home
          </Link>
          <h1 style={{ fontSize: '28px', fontWeight: '700', color: '#111827', margin: 0 }}>
            Terms of Service
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
              Welcome to KamperHub. These Terms of Service ("Terms") govern your access to and use of the KamperHub website, mobile application, and related services (collectively, the "Service"). The Service is operated by Scott Carlton ("we", "us", or "our").
            </p>
            <p style={{ color: '#374151', lineHeight: '1.7', marginTop: '16px' }}>
              By accessing or using KamperHub, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you may not use our Service.
            </p>
          </section>

          {/* 1. Account Registration */}
          <section>
            <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              1. Account Registration and Eligibility
            </h2>

            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '12px' }}>
              1.1 Age Requirement
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: '0 0 16px 0' }}>
              You must be at least 18 years of age to create an account and use KamperHub. By registering, you represent and warrant that you are 18 years or older.
            </p>

            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '12px' }}>
              1.2 Accurate Information
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: '0 0 16px 0' }}>
              You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate and current. You are responsible for maintaining the confidentiality of your account credentials.
            </p>

            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '12px' }}>
              1.3 Account Security
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: 0 }}>
              You are responsible for all activities that occur under your account. You must notify us immediately of any unauthorised use of your account or any other security breach.
            </p>
          </section>

          {/* 2. Subscription and Billing */}
          <section>
            <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              2. Subscription and Billing
            </h2>

            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '12px' }}>
              2.1 Free Trial
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: '0 0 16px 0' }}>
              New users receive a <strong>7-day free trial</strong> with full access to all KamperHub features. Your trial begins immediately upon account creation. No payment is required during the trial period.
            </p>

            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '12px' }}>
              2.2 Premium Subscription
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: '0 0 12px 0' }}>
              After your free trial expires, you may subscribe to KamperHub Premium for:
            </p>
            <ul style={{ color: '#374151', lineHeight: '1.7', margin: '0 0 16px 0', paddingLeft: '24px' }}>
              <li><strong>$9.00 AUD per month</strong></li>
              <li>Billed monthly on a recurring basis</li>
              <li>Unlimited access to all features</li>
              <li>No long-term contract required</li>
            </ul>

            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '12px' }}>
              2.3 Payment Processing
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: '0 0 16px 0' }}>
              All payments are processed securely by Stripe. By subscribing, you authorise us to charge your nominated payment method on a monthly recurring basis until you cancel your subscription.
            </p>

            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '12px' }}>
              2.4 Failed Payments
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: '0 0 16px 0' }}>
              If a payment fails, we will attempt to charge your payment method again. If payment cannot be processed after multiple attempts, your subscription may be suspended or cancelled, and your access to the Service will be restricted.
            </p>

            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '12px' }}>
              2.5 Price Changes
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: 0 }}>
              We reserve the right to change our subscription prices. We will provide you with at least 30 days' advance notice of any price increase. If you do not agree to the new price, you may cancel your subscription before the change takes effect.
            </p>
          </section>

          {/* 3. Cancellation and Refunds */}
          <section>
            <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              3. Cancellation and Refunds
            </h2>

            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '12px' }}>
              3.1 How to Cancel
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: '0 0 16px 0' }}>
              You may cancel your subscription at any time through your account settings or by contacting us at <a href="mailto:info@kamperhub.com" style={{ color: '#386641' }}>info@kamperhub.com</a>. Cancellations are effective at the end of the current billing period.
            </p>

            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '12px' }}>
              3.2 Access After Cancellation
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: '0 0 16px 0' }}>
              If you cancel, you will continue to have access to Premium features until the end of your current billing period. After that, your account will revert to a free trial status or be restricted, and you will lose access to Premium features.
            </p>

            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '12px' }}>
              3.3 No Refunds
            </h3>
            <div style={{
              backgroundColor: '#fef3c7',
              border: '1px solid #fde68a',
              borderRadius: '12px',
              padding: '16px',
              marginBottom: '16px'
            }}>
              <p style={{ color: '#92400e', lineHeight: '1.7', margin: 0, fontWeight: '600' }}>
                Important: All subscription fees are <strong>non-refundable</strong>.
              </p>
            </div>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: 0 }}>
              We do not provide refunds for partial months, unused time, or cancelled subscriptions. This includes situations where you cancel mid-billing cycle. Please cancel before your next billing date if you wish to avoid future charges.
            </p>
          </section>

          {/* 4. Acceptable Use */}
          <section>
            <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              4. Acceptable Use Policy
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: '0 0 12px 0' }}>
              You agree not to use KamperHub for any unlawful purpose or in any way that:
            </p>
            <ul style={{ color: '#374151', lineHeight: '1.7', margin: 0, paddingLeft: '24px' }}>
              <li>Violates any Australian federal, state, or local law</li>
              <li>Infringes the intellectual property rights of others</li>
              <li>Transmits harmful, threatening, abusive, or defamatory content</li>
              <li>Attempts to gain unauthorised access to our systems or other users' accounts</li>
              <li>Interferes with the proper functioning of the Service</li>
              <li>Uses automated systems (bots, scripts) to access the Service without permission</li>
              <li>Impersonates any person or entity or misrepresents your affiliation</li>
              <li>Transmits spam, viruses, or malicious code</li>
            </ul>
          </section>

          {/* 5. User Content */}
          <section>
            <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              5. User Content and Data
            </h2>

            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '12px' }}>
              5.1 Your Data
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: '0 0 16px 0' }}>
              You retain all rights to the data you input into KamperHub, including vehicle information, trip plans, expenses, and personal notes. By using the Service, you grant us a limited licence to store, process, and display your data solely for the purpose of providing the Service to you.
            </p>

            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '12px' }}>
              5.2 Data Export
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: '0 0 16px 0' }}>
              You may export your data at any time through the account settings. We are not responsible for any data you fail to export before closing your account.
            </p>

            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '12px' }}>
              5.3 Prohibited Content
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: 0 }}>
              You may not upload or share content that is illegal, offensive, defamatory, or violates the rights of others. We reserve the right to remove any content that violates these Terms.
            </p>
          </section>

          {/* 6. Intellectual Property */}
          <section>
            <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              6. Intellectual Property Rights
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: '0 0 16px 0' }}>
              The Service, including its design, features, software, graphics, logos, and content, is owned by Scott Carlton and protected by Australian and international copyright, trademark, and other intellectual property laws.
            </p>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: 0 }}>
              You are granted a limited, non-exclusive, non-transferable licence to access and use KamperHub for your personal, non-commercial use. You may not copy, modify, distribute, sell, or reverse-engineer any part of the Service without our prior written consent.
            </p>
          </section>

          {/* 7. Third-Party Services */}
          <section>
            <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              7. Third-Party Services and Links
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: '0 0 16px 0' }}>
              KamperHub integrates with third-party services including Stripe (payments), Google Maps (route planning), and Supabase (data storage). Your use of these services is subject to their respective terms and privacy policies. We are not responsible for the content, policies, or practices of third-party services.
            </p>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: 0 }}>
              The Service may contain affiliate links to third-party products and services. If you make a purchase through an affiliate link, we may earn a commission at no additional cost to you. We only recommend products we believe may be valuable to our users.
            </p>
          </section>

          {/* 8. Disclaimer of Warranties */}
          <section>
            <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              8. Disclaimer of Warranties
            </h2>
            <div style={{
              backgroundColor: '#fef2f2',
              border: '1px solid #fecaca',
              borderRadius: '12px',
              padding: '16px',
              marginBottom: '16px'
            }}>
              <p style={{ color: '#991b1b', lineHeight: '1.7', margin: 0 }}>
                <strong>Important Notice:</strong> KamperHub is provided "as is" and "as available" without warranties of any kind, either express or implied.
              </p>
            </div>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: '0 0 12px 0' }}>
              We do not warrant that:
            </p>
            <ul style={{ color: '#374151', lineHeight: '1.7', margin: '0 0 16px 0', paddingLeft: '24px' }}>
              <li>The Service will be uninterrupted, error-free, or secure</li>
              <li>The results obtained from using the Service will be accurate or reliable</li>
              <li>Any defects or errors will be corrected</li>
              <li>Weight calculations, route distances, or expense estimates are completely accurate</li>
            </ul>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: 0 }}>
              <strong style={{ color: '#dc2626' }}>Towing Safety Disclaimer:</strong> KamperHub provides weight calculations and towing capacity information for planning purposes only. You are responsible for verifying all weights and capacities with official vehicle documentation, certified weighbridges, and licensed professionals. Always comply with Australian towing laws and regulations. We are not liable for any damage, injury, or legal consequences resulting from towing activities.
            </p>
          </section>

          {/* 9. Limitation of Liability */}
          <section>
            <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              9. Limitation of Liability
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: '0 0 16px 0' }}>
              To the maximum extent permitted by Australian law, Scott Carlton and KamperHub shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenue, data, or use arising out of or related to your use of the Service.
            </p>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: 0 }}>
              Our total liability to you for any claims arising from these Terms or your use of the Service shall not exceed the amount you paid us in the 12 months preceding the claim, or $9.00 AUD, whichever is greater.
            </p>
          </section>

          {/* 10. Australian Consumer Law */}
          <section>
            <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              10. Australian Consumer Law
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: 0 }}>
              Nothing in these Terms excludes, restricts, or modifies any consumer rights under the Australian Consumer Law (ACL) or other applicable Australian consumer protection laws. If the ACL or other laws imply any condition or warranty into these Terms, our liability for breach of such condition or warranty is limited to (at our option): (a) the supply of the Service again; or (b) payment of the cost of having the Service supplied again.
            </p>
          </section>

          {/* 11. Indemnification */}
          <section>
            <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              11. Indemnification
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: 0 }}>
              You agree to indemnify, defend, and hold harmless Scott Carlton, KamperHub, and our affiliates from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from: (a) your use of the Service; (b) your violation of these Terms; (c) your violation of any rights of another party; or (d) any towing accidents or incidents resulting from your reliance on information provided by the Service.
            </p>
          </section>

          {/* 12. Termination */}
          <section>
            <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              12. Termination
            </h2>

            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '12px' }}>
              12.1 Termination by You
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: '0 0 16px 0' }}>
              You may terminate your account at any time by contacting us at <a href="mailto:info@kamperhub.com" style={{ color: '#386641' }}>info@kamperhub.com</a>. Upon termination, your data will be deleted within 30 days, subject to legal retention requirements.
            </p>

            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '12px' }}>
              12.2 Termination by Us
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: 0 }}>
              We may suspend or terminate your account immediately if you violate these Terms, engage in fraudulent activity, or pose a security risk to the Service. We may also terminate or suspend the Service at any time with reasonable notice.
            </p>
          </section>

          {/* 13. Changes to Terms */}
          <section>
            <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              13. Changes to These Terms
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: 0 }}>
              We may update these Terms from time to time. We will notify you of material changes by posting the updated Terms on this page and updating the "Last updated" date. Your continued use of the Service after changes take effect constitutes acceptance of the new Terms. If you do not agree to the updated Terms, you must stop using the Service and cancel your subscription.
            </p>
          </section>

          {/* 14. Governing Law */}
          <section>
            <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              14. Governing Law and Dispute Resolution
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: '0 0 16px 0' }}>
              These Terms are governed by the laws of Queensland, Australia. Any disputes arising from these Terms or your use of KamperHub shall be subject to the exclusive jurisdiction of the courts of Queensland, Australia.
            </p>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: 0 }}>
              Before commencing legal proceedings, you agree to first attempt to resolve any dispute informally by contacting us at <a href="mailto:info@kamperhub.com" style={{ color: '#386641' }}>info@kamperhub.com</a>.
            </p>
          </section>

          {/* 15. Severability */}
          <section>
            <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              15. Severability
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: 0 }}>
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
            </p>
          </section>

          {/* 16. Contact Information */}
          <section>
            <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              16. Contact Us
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: '0 0 16px 0' }}>
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div style={{
              backgroundColor: '#f9fafb',
              borderRadius: '12px',
              padding: '20px',
              border: '1px solid #e5e7eb'
            }}>
              <p style={{ color: '#111827', fontWeight: '600', margin: '0 0 8px 0' }}>KamperHub</p>
              <p style={{ color: '#374151', margin: '0 0 4px 0' }}>Operated by: Scott Carlton</p>
              <p style={{ color: '#374151', margin: '0 0 4px 0' }}>
                Email: <a href="mailto:info@kamperhub.com" style={{ color: '#386641' }}>info@kamperhub.com</a>
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
              <Link href="/legal/privacy" style={{ color: '#386641', textDecoration: 'none' }}>
                Privacy Policy →
              </Link>
              <Link href="/legal/refunds" style={{ color: '#386641', textDecoration: 'none' }}>
                Refund Policy →
              </Link>
            </div>
          </section>

          {/* Acknowledgment */}
          <section style={{
            backgroundColor: '#f0fdf4',
            border: '1px solid #86efac',
            borderRadius: '12px',
            padding: '20px',
          }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', margin: '0 0 12px 0' }}>
              Acknowledgment
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: 0 }}>
              By using KamperHub, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree, please do not use our Service.
            </p>
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
