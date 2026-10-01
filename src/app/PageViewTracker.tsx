'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const TRACKING_URL = 'https://app.kamperhub.com/api/log/page-view';

/**
 * Per-browser "never track me" flag — same key as the app and the shop
 * (kamperhub-app src/lib/statsOptOut.ts). This site has no sign-in, so it can't
 * detect Scott; open any page with `?kh_optout=1` once on a device/browser to stop
 * its views being counted (`?kh_optout=0` undoes it). The app's tracking endpoint
 * also answers `optOut: true` for admin accounts, honoured here for consistency.
 */
const OPT_OUT_KEY = 'kh_stats_opt_out';

function optOutStorage(): Storage | null {
  try {
    return window.localStorage;
  } catch {
    // Storage blocked — can't remember an opt-out.
    return null;
  }
}

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

    const storage = optOutStorage();
    try {
      const param = new URLSearchParams(window.location.search).get('kh_optout');
      if (storage && param === '1') storage.setItem(OPT_OUT_KEY, '1');
      if (storage && param === '0') storage.removeItem(OPT_OUT_KEY);
      if (storage?.getItem(OPT_OUT_KEY) === '1') return;
    } catch {
      // Storage write refused — fall through and track.
    }

    fetch(TRACKING_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        path: pathname,
        referrer: document.referrer || null,
        source: 'landing',
      }),
    })
      .then((res) => res.json().catch(() => null))
      .then((body) => {
        try {
          if (body?.optOut) storage?.setItem(OPT_OUT_KEY, '1');
        } catch {
          // Storage write refused — nothing to remember.
        }
      })
      .catch(() => {
        // Silently fail
      });
  }, [pathname]);

  return null;
}
