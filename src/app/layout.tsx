import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'KamperHub - Plan Smarter. Tow Safer. Travel Further.',
  description: 'The all-in-one app for Australian caravan travellers. Plan trips, manage your rig, track weights, and hit the road with confidence.',
  keywords: 'caravan, camping, travel, australia, trip planner, towing, weight calculator, RV, motorhome',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'KamperHub - Your Caravan Travel Companion',
    description: 'Plan trips, manage your rig, track weights, and hit the road with confidence. Built by Aussie travellers, for Aussie travellers.',
    url: 'https://kamperhub.com',
    siteName: 'KamperHub',
    locale: 'en_AU',
    type: 'website',
    images: [
      {
        url: 'https://kamperhub.com/logo-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'KamperHub - Caravan Travel Companion',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KamperHub - Plan Smarter. Tow Safer. Travel Further.',
    description: 'The all-in-one app for Australian caravan travellers. Plan trips, manage your rig, track weights, and hit the road with confidence.',
    images: ['https://kamperhub.com/logo-banner.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
