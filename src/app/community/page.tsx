'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Heart, Lightbulb, MessageCircle, Target, Ban, Shield, Users, Mail } from 'lucide-react';

const colors = {
  primary: '#386641',
  cream: '#FAF8F1',
  white: '#FFFFFF',
  gray: { 50: '#f9fafb', 100: '#f3f4f6', 200: '#e5e7eb', 400: '#9ca3af', 500: '#6b7280', 600: '#4b5563', 700: '#374151', 900: '#111827' }
};

const socialLinks = [
  { name: 'Facebook Group', handle: 'KamperHub Travel Companion', url: 'https://www.facebook.com/groups/kamperhub', color: '#1877F2', description: 'Our main community hub - ask questions, share photos, get advice from fellow travellers', primary: true },
  { name: 'Instagram', handle: '@kamperhub', url: 'https://www.instagram.com/kamperhub', color: '#E4405F', description: 'Travel inspiration and tips' },
  { name: 'YouTube', handle: 'KamperHub', url: 'https://www.youtube.com/@kamperhub', color: '#FF0000', description: 'How-to videos and destination guides' },
  { name: 'Facebook Page', handle: 'KamperHub', url: 'https://www.facebook.com/kamperhub', color: '#1877F2', description: 'Official updates and announcements' },
];

const guidelines = [
  { icon: Heart, title: 'Be Friendly & Respectful', description: "We're all here to help each other. Treat everyone with kindness." },
  { icon: Lightbulb, title: 'Share Your Knowledge', description: "Whether you're a newbie or grey nomad, your experience helps others." },
  { icon: MessageCircle, title: 'Ask Questions', description: "No question is too basic. We've all been beginners." },
  { icon: Target, title: 'Keep It Relevant', description: 'Stay on topic - caravanning, camping, and travel in Australia.' },
  { icon: Ban, title: 'No Spam', description: 'Share genuinely helpful content, not ads or self-promotion.' },
  { icon: Shield, title: 'Respect Privacy', description: "Don't share others' personal info or locations without permission." },
];

const partnerCommunities = [
  { name: 'Grey Nomads Forum', url: 'https://www.greynomads.com.au/forums/', description: 'Retiree travellers' },
  { name: 'Caravan & Camping Australia', url: 'https://www.facebook.com/groups/caravancampingaustralia', description: 'General caravanning (FB)' },
  { name: 'WikiCamps Community', url: 'https://www.facebook.com/WikiCamps/', description: 'Campsite discussions' },
];

export default function CommunityPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: colors.cream }}>
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, backgroundColor: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)', borderBottom: `1px solid ${colors.gray[200]}`, zIndex: 1000 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/"><Image src="/logo-horizontal.svg" alt="KamperHub" width={160} height={40} priority /></Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a href="https://app.kamperhub.com/login" style={{ padding: '10px 20px', color: colors.gray[700], textDecoration: 'none', fontWeight: '500' }}>Log In</a>
            <a href="https://app.kamperhub.com/signup" style={{ padding: '10px 24px', backgroundColor: colors.primary, color: colors.white, textDecoration: 'none', fontWeight: '600', borderRadius: '10px', fontSize: '14px' }}>Start Free Trial</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ paddingTop: '120px', paddingBottom: '60px', backgroundColor: colors.white }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: colors.gray[500], textDecoration: 'none', marginBottom: '24px', fontSize: '14px' }}><ArrowLeft size={16} /> Back to Home</Link>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: '800', color: colors.gray[900], marginBottom: '16px' }}>Join the KamperHub Community</h1>
          <p style={{ fontSize: '18px', color: colors.gray[600], maxWidth: '600px', lineHeight: '1.6' }}>Connect with thousands of Australian caravan travellers. Share tips, ask questions, and find your next adventure.</p>
        </div>
      </section>

      {/* Main Facebook Group CTA */}
      <section style={{ padding: '40px 0', backgroundColor: colors.white }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
          <a href="https://www.facebook.com/groups/kamperhub" target="_blank" rel="noopener noreferrer" style={{
            display: 'block', padding: '32px', backgroundColor: '#1877F2', borderRadius: '20px', textDecoration: 'none', textAlign: 'center', boxShadow: '0 10px 40px rgba(24, 119, 242, 0.3)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
              <Users size={32} color={colors.white} />
              <span style={{ fontSize: '24px', fontWeight: '700', color: colors.white }}>KamperHub Travel Companion</span>
            </div>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.9)', marginBottom: '20px', maxWidth: '500px', margin: '0 auto 20px' }}>Our main community hub on Facebook - ask questions, share photos, get advice from fellow travellers</p>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 28px', backgroundColor: colors.white, color: '#1877F2', borderRadius: '100px', fontWeight: '600', fontSize: '16px' }}>
              Join Our Facebook Group <ExternalLink size={18} />
            </span>
          </a>
        </div>
      </section>

      {/* Other Social Links */}
      <section style={{ padding: '40px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '700', color: colors.gray[900], marginBottom: '24px', textAlign: 'center' }}>Follow Us</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {socialLinks.filter(s => !s.primary).map((social, index) => (
              <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" style={{
                display: 'flex', alignItems: 'center', gap: '16px', padding: '20px 24px', backgroundColor: colors.white, borderRadius: '16px', border: `1px solid ${colors.gray[200]}`, textDecoration: 'none', transition: 'transform 0.2s, box-shadow 0.2s'
              }}>
                <div style={{ width: '48px', height: '48px', backgroundColor: social.color, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: '20px', color: colors.white, fontWeight: '700' }}>{social.name[0]}</span>
                </div>
                <div style={{ flex: 1 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '600', color: colors.gray[900] }}>{social.name} <ExternalLink size={14} style={{ opacity: 0.5 }} /></span>
                  <span style={{ fontSize: '13px', color: colors.gray[500] }}>{social.description}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section style={{ padding: '60px 0', backgroundColor: colors.white }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: colors.gray[900], marginBottom: '16px', textAlign: 'center' }}>Our Community Values</h2>
          <p style={{ textAlign: 'center', color: colors.gray[500], marginBottom: '40px', fontSize: '16px' }}>What makes our community great</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {guidelines.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} style={{ display: 'flex', gap: '16px', padding: '24px', backgroundColor: colors.gray[50], borderRadius: '16px' }}>
                  <div style={{ width: '44px', height: '44px', backgroundColor: `${colors.primary}15`, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={22} color={colors.primary} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: '600', color: colors.gray[900], marginBottom: '4px' }}>{item.title}</h3>
                    <p style={{ fontSize: '14px', color: colors.gray[600], lineHeight: '1.5', margin: 0 }}>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Share Your Story */}
      <section style={{ padding: '60px 0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <Mail size={48} color={colors.primary} style={{ marginBottom: '20px' }} />
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: colors.gray[900], marginBottom: '16px' }}>Share Your Story</h2>
          <p style={{ fontSize: '16px', color: colors.gray[600], marginBottom: '24px', lineHeight: '1.6' }}>Had an amazing trip? Got a tip that saved the day? We would love to feature your story on our social channels!</p>
          <a href="mailto:info@kamperhub.com?subject=My KamperHub Story" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', backgroundColor: colors.primary, color: colors.white, textDecoration: 'none', fontWeight: '600', borderRadius: '12px', fontSize: '16px'
          }}>
            <Mail size={20} /> Email Your Story
          </a>
        </div>
      </section>

      {/* Partner Communities */}
      <section style={{ padding: '60px 0', backgroundColor: colors.white }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '700', color: colors.gray[900], marginBottom: '16px', textAlign: 'center' }}>Friends of KamperHub</h2>
          <p style={{ textAlign: 'center', color: colors.gray[500], marginBottom: '32px', fontSize: '16px' }}>Other great communities we recommend</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', maxWidth: '900px', margin: '0 auto' }}>
            {partnerCommunities.map((community, index) => (
              <a key={index} href={community.url} target="_blank" rel="noopener noreferrer" style={{
                display: 'block', padding: '20px 24px', backgroundColor: colors.gray[50], borderRadius: '12px', textDecoration: 'none', border: `1px solid ${colors.gray[200]}`
              }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '600', color: colors.primary }}>{community.name} <ExternalLink size={14} style={{ opacity: 0.5 }} /></span>
                <span style={{ fontSize: '13px', color: colors.gray[500] }}>{community.description}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '48px 0', backgroundColor: colors.gray[900] }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <Image src="/logo-horizontal.svg" alt="KamperHub" width={140} height={35} style={{ filter: 'brightness(0) invert(1)', marginBottom: '16px' }} />
          <p style={{ color: colors.gray[400], fontSize: '14px' }}>The all-in-one app for caravan travellers.</p>
          <p style={{ color: colors.gray[500], fontSize: '14px', marginTop: '24px' }}>© {new Date().getFullYear()} KamperHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
