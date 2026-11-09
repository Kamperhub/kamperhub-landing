import type { Metadata } from 'next';

// This page is a client component, so it cannot export metadata itself. Without this layout it
// inherits the root canonical (the homepage) and Google treats it as a copy of the homepage.
export const metadata: Metadata = {
  title: 'Community | KamperHub',
  description: 'Connect with Australian caravan travellers. Share tips, ask questions, and find your next adventure.',
  alternates: { canonical: 'https://kamperhub.com/community' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
