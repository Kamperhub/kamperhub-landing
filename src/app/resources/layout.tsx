import type { Metadata } from 'next';

// This page is a client component, so it cannot export metadata itself. Without this layout it
// inherits the root canonical (the homepage) and Google treats it as a copy of the homepage.
export const metadata: Metadata = {
  title: 'Caravan Travel Resources | KamperHub',
  description: 'Essential resources for caravan travel: campsite directories, fuel prices and more.',
  alternates: { canonical: 'https://kamperhub.com/resources' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
