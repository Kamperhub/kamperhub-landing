import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'KamperHub - Plan Smarter. Tow Safer. Travel Further.',
  description: 'The all-in-one app for Australian caravan travellers. Plan trips, manage your rig, track weights, and hit the road with confidence.',
  keywords: 'caravan, camping, travel, australia, trip planner, towing, weight calculator, RV, motorhome',
  openGraph: {
    title: 'KamperHub - Your Caravan Travel Companion',
    description: 'Plan trips, manage your rig, track weights, and hit the road with confidence. Built by Aussie travellers, for Aussie travellers.',
    url: 'https://kamperhub.com',
    siteName: 'KamperHub',
    locale: 'en_AU',
    type: 'website',
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
