/**
 * Explorer plan pricing for the KamperHub LANDING site (kamperhub.com).
 *
 * MUST MATCH kamperhub-app src/lib/planLimits.ts (EXPLORER_PRICE_CHANGE_AT /
 * EXPLORER_PRICE_BEFORE / EXPLORER_PRICE_AFTER / isExplorerRepriced /
 * explorerYearlyPrice / explorerPriceLabel). The app raises Explorer from
 * $10/year to $19/year for NEW subscribers at this exact instant; existing
 * $10 subscribers are grandfathered. If the app's cut-over date or numerals
 * ever change, update both files together.
 */

export const EXPLORER_PRICE_CHANGE_AT = new Date('2026-10-01T00:00:00+10:00');
export const EXPLORER_PRICE_BEFORE = 10;
export const EXPLORER_PRICE_AFTER = 19;

/** Has the 1 Oct 2026 Explorer price change taken effect? */
export function isExplorerRepriced(now: Date = new Date()): boolean {
  return now.getTime() >= EXPLORER_PRICE_CHANGE_AT.getTime();
}

/** What a NEW Explorer subscriber pays per year, as a bare numeral. */
export function explorerYearlyPrice(now: Date = new Date()): number {
  return isExplorerRepriced(now) ? EXPLORER_PRICE_AFTER : EXPLORER_PRICE_BEFORE;
}

/**
 * Display label for the Explorer price: "$19/year" (style 'year', default),
 * "$19/yr" ('yr') or "$19" ('bare').
 */
export function explorerPriceLabel(
  style: 'year' | 'yr' | 'bare' = 'year',
  now: Date = new Date(),
): string {
  const n = explorerYearlyPrice(now);
  return style === 'bare' ? `$${n}` : `$${n}/${style}`;
}

/**
 * Approximate monthly-equivalent copy for the Explorer price, e.g. for
 * "less than $1/month" style marketing lines. Before the change $10/yr is
 * genuinely under $1/month; after the change $19/yr is about $1.60/month,
 * so the claim must switch wording, not just stay silent.
 */
export function explorerMonthlyEquivalentLabel(now: Date = new Date()): string {
  return isExplorerRepriced(now) ? 'about $1.60/month' : 'less than $1/month';
}
