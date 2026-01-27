'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, XCircle } from 'lucide-react';

const colors = {
  primary: '#6b8e6b',
  white: '#FFFFFF',
  gray: { 200: '#e5e7eb', 500: '#6b7280', 700: '#374151' }
};

export default function RefundPolicyPage() {
  const lastUpdated = '25 December 2025';

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      {/* Navigation */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, backgroundColor: colors.primary, zIndex: 1000 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/"><Image src="/logo.png" alt="KamperHub" width={160} height={40} priority style={{ filter: 'brightness(0) invert(1)' }} /></Link>
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
            Refund Policy
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

          {/* No Refunds Notice */}
          <section>
            <div style={{
              backgroundColor: '#fef3c7',
              border: '2px solid #fde68a',
              borderRadius: '16px',
              padding: '24px',
              display: 'flex',
              gap: '16px',
              alignItems: 'flex-start'
            }}>
              <XCircle size={24} style={{ color: '#d97706', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#92400e', margin: '0 0 8px 0' }}>
                  No Refunds Available
                </h2>
                <p style={{ color: '#92400e', lineHeight: '1.7', margin: 0 }}>
                  All subscription fees for KamperHub are <strong>non-refundable</strong>. By subscribing to our service, you acknowledge and agree to this no-refund policy.
                </p>
              </div>
            </div>
          </section>

          {/* Introduction */}
          <section>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: 0 }}>
              This Refund Policy applies to all subscriptions purchased for KamperHub. Please read this policy carefully before subscribing to understand our refund practices.
            </p>
          </section>

          {/* 1. Free Trial */}
          <section>
            <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              1. 7-Day Free Trial
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: '0 0 12px 0' }}>
              All new users receive a <strong>7-day free trial</strong> with full access to KamperHub's features. This trial period allows you to:
            </p>
            <ul style={{ color: '#374151', lineHeight: '1.7', margin: '0 0 16px 0', paddingLeft: '24px' }}>
              <li>Explore all features without payment</li>
              <li>Test the platform to ensure it meets your needs</li>
              <li>Decide whether to continue with a paid subscription</li>
            </ul>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: 0 }}>
              <strong>No payment is required during the trial period.</strong> You may cancel at any time during the trial without being charged.
            </p>
          </section>

          {/* 2. Subscription Charges */}
          <section>
            <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              2. Subscription Charges Are Non-Refundable
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: '0 0 16px 0' }}>
              Once you subscribe to KamperHub Premium ($9.00 AUD per month), all subscription fees are <strong>final and non-refundable</strong>. This includes:
            </p>
            <ul style={{ color: '#374151', lineHeight: '1.7', margin: 0, paddingLeft: '24px' }}>
              <li>Initial subscription payments</li>
              <li>Recurring monthly charges</li>
              <li>Partial months or unused subscription time</li>
              <li>Subscriptions cancelled mid-billing cycle</li>
              <li>Cases where you choose not to use the Service</li>
            </ul>
          </section>

          {/* 3. Why No Refunds */}
          <section>
            <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              3. Why We Do Not Offer Refunds
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: '0 0 12px 0' }}>
              We provide a generous 7-day free trial so you can thoroughly evaluate KamperHub before committing to a paid subscription. Because:
            </p>
            <ul style={{ color: '#374151', lineHeight: '1.7', margin: 0, paddingLeft: '24px' }}>
              <li>You have access to all features during the trial period</li>
              <li>The monthly subscription cost is low ($9 AUD)</li>
              <li>You can cancel at any time to avoid future charges</li>
              <li>Our infrastructure and operating costs are incurred immediately upon subscription</li>
            </ul>
          </section>

          {/* 4. How to Cancel */}
          <section>
            <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              4. How to Cancel Your Subscription
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: '0 0 16px 0' }}>
              You may cancel your subscription at any time by:
            </p>
            <ul style={{ color: '#374151', lineHeight: '1.7', margin: '0 0 16px 0', paddingLeft: '24px' }}>
              <li>Logging into your account and navigating to Account Settings</li>
              <li>Clicking "Manage Subscription" and selecting "Cancel Subscription"</li>
              <li>Or by emailing us at <a href="mailto:info@kamperhub.com" style={{ color: '#6b8e6b' }}>info@kamperhub.com</a></li>
            </ul>
            <div style={{
              backgroundColor: '#eff6ff',
              border: '1px solid #bfdbfe',
              borderRadius: '12px',
              padding: '16px'
            }}>
              <p style={{ color: '#1e40af', lineHeight: '1.7', margin: 0, fontSize: '14px' }}>
                <strong>Important:</strong> Cancellations take effect at the end of your current billing period. You will retain access to Premium features until then. No partial refunds are provided for the remaining days in your billing cycle.
              </p>
            </div>
          </section>

          {/* 5. What Happens After Cancellation */}
          <section>
            <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              5. After You Cancel
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: '0 0 12px 0' }}>
              When you cancel your subscription:
            </p>
            <ul style={{ color: '#374151', lineHeight: '1.7', margin: 0, paddingLeft: '24px' }}>
              <li>Your subscription will not renew for the next billing period</li>
              <li>You will continue to have Premium access until the end of your current billing cycle</li>
              <li>After the billing period ends, your account will be restricted or downgraded</li>
              <li>You will not be charged again unless you manually resubscribe</li>
              <li>You can resubscribe at any time to regain Premium access</li>
            </ul>
          </section>

          {/* 6. Exceptions */}
          <section>
            <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              6. Exceptions and Special Circumstances
            </h2>

            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '12px' }}>
              6.1 Billing Errors
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: '0 0 16px 0' }}>
              If you believe you were charged in error (e.g., duplicate charge, incorrect amount), please contact us immediately at <a href="mailto:info@kamperhub.com" style={{ color: '#6b8e6b' }}>info@kamperhub.com</a> with details of the transaction. We will investigate and resolve genuine billing errors.
            </p>

            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '12px' }}>
              6.2 Unauthorised Charges
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: '0 0 16px 0' }}>
              If you did not authorise a charge to your account, notify us immediately. We will investigate potential fraud or unauthorised access.
            </p>

            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '12px' }}>
              6.3 Australian Consumer Law
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: 0 }}>
              Nothing in this policy excludes or limits your rights under the Australian Consumer Law (ACL). If we fail to provide services of acceptable quality or as described, you may have rights to a remedy under the ACL, which may include a refund in certain circumstances.
            </p>
          </section>

          {/* 7. Chargebacks */}
          <section>
            <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              7. Chargebacks and Disputes
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: 0 }}>
              If you initiate a chargeback or payment dispute through your bank or credit card company without first contacting us, your account may be immediately suspended or terminated. We strongly encourage you to contact us directly to resolve any billing concerns before pursuing a chargeback.
            </p>
          </section>

          {/* 8. How to Avoid Unwanted Charges */}
          <section>
            <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              8. Tips to Avoid Unwanted Charges
            </h2>
            <div style={{
              backgroundColor: '#f0fdf4',
              border: '1px solid #86efac',
              borderRadius: '12px',
              padding: '20px'
            }}>
              <p style={{ color: '#111827', fontWeight: '600', margin: '0 0 12px 0', fontSize: '15px' }}>
                Best Practices:
              </p>
              <ul style={{ color: '#374151', lineHeight: '1.7', margin: 0, paddingLeft: '24px' }}>
                <li><strong>Use the free trial</strong> - Take advantage of the full 7-day trial to test all features</li>
                <li><strong>Set a calendar reminder</strong> - Mark your trial end date to decide before being charged</li>
                <li><strong>Cancel before renewal</strong> - Cancel at least 1 day before your next billing date if you don't wish to continue</li>
                <li><strong>Monitor your email</strong> - We send payment receipts and subscription notifications</li>
                <li><strong>Check your billing date</strong> - Review your account settings to see when your next charge will occur</li>
              </ul>
            </div>
          </section>

          {/* 9. Contact Us */}
          <section>
            <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              9. Questions About Billing or Refunds?
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.7', margin: '0 0 16px 0' }}>
              If you have questions about your subscription, billing, or this Refund Policy, please contact us:
            </p>
            <div style={{
              backgroundColor: '#f9fafb',
              borderRadius: '12px',
              padding: '20px',
              border: '1px solid #e5e7eb'
            }}>
              <p style={{ color: '#111827', fontWeight: '600', margin: '0 0 8px 0' }}>KamperHub Support</p>
              <p style={{ color: '#374151', margin: '0 0 4px 0' }}>Operated by: Scott Carlton</p>
              <p style={{ color: '#374151', margin: '0 0 4px 0' }}>
                Email: <a href="mailto:info@kamperhub.com" style={{ color: '#6b8e6b' }}>info@kamperhub.com</a>
              </p>
              <p style={{ color: '#374151', margin: 0 }}>
                Postal Address: PO Box 5219, Algester QLD 4115, Australia
              </p>
            </div>
            <p style={{ color: '#6b7280', lineHeight: '1.7', margin: '16px 0 0 0', fontSize: '14px' }}>
              We typically respond to enquiries within 1-2 business days.
            </p>
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
              <Link href="/legal/privacy" style={{ color: '#6b8e6b', textDecoration: 'none' }}>
                Privacy Policy →
              </Link>
            </div>
          </section>

          {/* Summary Box */}
          <section style={{
            backgroundColor: '#fef2f2',
            border: '2px solid #fecaca',
            borderRadius: '16px',
            padding: '24px',
          }}>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#991b1b', margin: '0 0 12px 0' }}>
              Summary: No Refund Policy
            </h3>
            <ul style={{ color: '#991b1b', lineHeight: '1.7', margin: 0, paddingLeft: '24px' }}>
              <li>All subscription fees are <strong>non-refundable</strong></li>
              <li>Use the 7-day free trial to test before subscribing</li>
              <li>Cancel anytime to stop future charges (but no refund for current period)</li>
              <li>Contact us if you believe there's a billing error</li>
            </ul>
          </section>

        </div>
      </div>

      {/* Footer */}
      <footer style={{ padding: '48px 0', backgroundColor: colors.primary }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <Image src="/logo.png" alt="KamperHub" width={140} height={35} style={{ filter: 'brightness(0) invert(1)', marginBottom: '16px' }} />
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '14px' }}>The all-in-one app for caravan travellers.</p>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginTop: '24px' }}>© {new Date().getFullYear()} KamperHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
