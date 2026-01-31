'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const TRACKING_URL = 'https://app.kamperhub.com/api/log/page-view';

/**
 * Tracks landing page views by sending to the app's tracking endpoint.
 * Cross-origin POST with CORS - the app API allows kamperhub.com origin.
 */
export function PageViewTracker() {
  const pathname = usePathname();
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    if (pathname === lastTrackedPath.current) return;
    lastTrackedPath.current = pathname;

    fetch(TRACKING_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        path: pathname,
        referrer: document.referrer || null,
        source: 'landing',
      }),
    }).catch(() => {
      // Silently fail
    });
  }, [pathname]);

  return null;
}
