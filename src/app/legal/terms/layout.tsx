import type { Metadata } from 'next';

// This page is a client component, so it cannot export metadata itself. Without this layout it
// inherits the root canonical (the homepage) and Google treats it as a copy of the homepage.
export const metadata: Metadata = {
  title: 'Terms of Service | KamperHub',
  description: 'The terms that apply when you use KamperHub.',
  alternates: { canonical: 'https://kamperhub.com/legal/terms' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
