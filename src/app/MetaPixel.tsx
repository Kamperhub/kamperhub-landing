'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

declare global {
  interface Window {
    fbq: ((...args: unknown[]) => void) & { loaded?: boolean; version?: string; queue?: unknown[] };
    _fbq: ((...args: unknown[]) => void) & { loaded?: boolean; version?: string; queue?: unknown[] };
  }
}

const META_PIXEL_ID = '868821099109451';

/**
 * Meta Pixel for KamperHub landing page (kamperhub.com).
 * Tracks PageView on every navigation.
 */
export function MetaPixel() {
  const pathname = usePathname();
  const lastTrackedPath = useRef<string | null>(null);
  const initialized = useRef(false);

  // Initialize pixel script once
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    /* eslint-disable */
    const f = window;
    const b = document;
    if (typeof f.fbq === 'function' && f.fbq.version) return;
    const n: any = (f.fbq = function (...args: unknown[]) {
      n.callMethod ? n.callMethod.apply(n, args) : n.queue.push(args);
    });
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = '2.0';
    n.queue = [];
    const t = b.createElement('script');
    t.async = true;
    t.src = 'https://connect.facebook.net/en_US/fbevents.js';
    const s = b.getElementsByTagName('script')[0];
    s?.parentNode?.insertBefore(t, s);
    /* eslint-enable */

    window.fbq('init', META_PIXEL_ID);
    window.fbq('track', 'PageView');
  }, []);

  // Track navigations
  useEffect(() => {
    if (!window.fbq) return;
    if (pathname === lastTrackedPath.current) return;
    lastTrackedPath.current = pathname;

    window.fbq('track', 'PageView');
  }, [pathname]);

  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: 'none' }}
        src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
        alt=""
      />
    </noscript>
  );
}
