import type { Metadata } from 'next';

// This page is a client component, so it cannot export metadata itself. Without this layout it
// inherits the root canonical (the homepage) and Google treats it as a copy of the homepage.
export const metadata: Metadata = {
  title: 'Refund Policy | KamperHub',
  description: 'The refund policy for KamperHub paid plans.',
  alternates: { canonical: 'https://kamperhub.com/legal/refunds' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
