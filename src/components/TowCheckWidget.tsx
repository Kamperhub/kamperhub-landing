'use client';

import { useState, useEffect } from 'react';

const API_BASE = 'https://app.kamperhub.com/api/public/tow-check';
const LEAD_API = 'https://app.kamperhub.com/api/public/lead-capture';
const APP_URL = 'https://app.kamperhub.com';

interface Vehicle {
  id: string;
  make: string;
  model: string;
  yearRange: string;
  variant: string;
  towCapacityKg: number;
  label: string;
}

interface Caravan {
  id: string;
  brand: string;
  model: string;
  atmKg: number;
  tareKg: number;
  label: string;
}

interface CheckResult {
  vehicle: { name: string; yearRange: string; towCapacityKg: number };
  caravan: { name: string; atmKg: number; tareKg: number };
  result: { canTow: boolean; marginKg: number; towCapacityKg: number; caravanAtmKg: number };
}

const colors = {
  primary: '#6b8e6b',
  accent: '#c97b5d',
  cream: '#fdfbf7',
  darkEarth: '#3d3229',
  slate: '#5a6672',
  white: '#FFFFFF',
};

export default function TowCheckWidget({ region = 'au' }: { region?: 'au' | 'us' }) {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [caravans, setCaravans] = useState<Caravan[]>([]);
  const [makes, setMakes] = useState<string[]>([]);
  const [brands, setBrands] = useState<string[]>([]);

  const [selectedMake, setSelectedMake] = useState('');
  const [selectedVehicleId, setSelectedVehicleId] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedCaravanId, setSelectedCaravanId] = useState('');

  // Two-phase result: pendingResult holds data before email gate, result shows after
  const [pendingResult, setPendingResult] = useState<CheckResult | null>(null);
  const [result, setResult] = useState<CheckResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [dataLoading, setDataLoading] = useState(true);

  // Email capture state
  const [email, setEmail] = useState('');
  const [emailSending, setEmailSending] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [limitReached, setLimitReached] = useState(false);
  const [limitSignupUrl, setLimitSignupUrl] = useState('');

  const isUS = region === 'us';
  const trailerLabel = isUS ? 'Trailer' : 'Caravan';
  const vehicleLabel = isUS ? 'Truck' : 'Vehicle';
  const vehicleSectionLabel = isUS ? 'Your Truck or SUV' : 'Your Vehicle';
  const trailerSectionLabel = isUS ? 'RV or Trailer You\'re Considering' : 'Your Caravan';
  const tongueLabel = isUS ? 'Tongue' : 'Towball';

  useEffect(() => {
    Promise.all([
      fetch(`${API_BASE}?action=vehicles`).then(r => r.json()),
      fetch(`${API_BASE}?action=caravans`).then(r => r.json()),
    ]).then(([vehicleData, caravanData]) => {
      setMakes(vehicleData.makes || []);
      setVehicles(vehicleData.vehicles || []);
      setBrands(caravanData.brands || []);
      setCaravans(caravanData.caravans || []);
      setDataLoading(false);
    }).catch(() => setDataLoading(false));
  }, []);

  const filteredVehicles = selectedMake
    ? vehicles.filter(v => v.make === selectedMake)
    : [];

  const filteredCaravans = selectedBrand
    ? caravans.filter(c => c.brand === selectedBrand)
    : [];

  // Fetch result but hold it behind the email gate
  const handleCheck = async () => {
    if (!selectedVehicleId || !selectedCaravanId) return;
    setLoading(true);
    setPendingResult(null);
    setResult(null);
    setEmailSent(false);
    setEmailError('');
    try {
      const res = await fetch(`${API_BASE}?action=check&vehicleId=${selectedVehicleId}&caravanId=${selectedCaravanId}`);
      const data = await res.json();
      setPendingResult(data);
    } catch {
      // silently fail
    } finally {
      setLoading(false);
    }
  };

  // Submit email → store lead → reveal result
  const handleEmailSubmit = async () => {
    const checkData = pendingResult;
    if (!email || !checkData) return;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    setEmailSending(true);
    setEmailError('');
    try {
      const res = await fetch(LEAD_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          vehicle: checkData.vehicle,
          caravan: checkData.caravan,
          result: checkData.result,
          region,
        }),
      });
      if (res.ok) {
        setResult(checkData);
        setEmailSent(true);
      } else {
        const data = await res.json().catch(() => null);
        if (data?.error === 'limit_reached') {
          setLimitReached(true);
          setLimitSignupUrl(data.signupUrl || `https://app.kamperhub.com/signup?email=${encodeURIComponent(email)}`);
        } else {
          setEmailError('Something went wrong. Please try again.');
        }
      }
    } catch {
      setEmailError('Something went wrong. Please try again.');
    } finally {
      setEmailSending(false);
    }
  };

  const kgToLbs = (kg: number) => Math.round(kg * 2.205);
  const formatWeight = (kg: number) => isUS ? `${kgToLbs(kg).toLocaleString()} lbs` : `${kg.toLocaleString()} kg`;

  const selectStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '2px solid #d4c9b0',
    backgroundColor: colors.white,
    color: colors.darkEarth,
    appearance: 'none' as const,
    cursor: 'pointer',
  };

  if (dataLoading) {
    return (
      <div style={{ padding: '32px', textAlign: 'center', color: colors.slate }}>
        Loading vehicle database...
      </div>
    );
  }

  const UTM = 'utm_source=kamperhub&utm_medium=landing&utm_campaign=us-towing-calculator';
  const signupUrl = `${APP_URL}/signup?redirect=/weights&region=${region}&${UTM}`;

  return (
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      padding: '32px',
      backgroundColor: colors.white,
      borderRadius: '16px',
      boxShadow: '0 4px 24px rgba(0,0,0,0.1)',
    }}>
      {/* Vehicle selection */}
      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', fontSize: '15px', fontWeight: '700', color: colors.darkEarth, marginBottom: '6px' }}>
          {vehicleSectionLabel}
        </label>
        <select
          style={selectStyle}
          value={selectedMake}
          onChange={(e) => { setSelectedMake(e.target.value); setSelectedVehicleId(''); setPendingResult(null); setResult(null); }}
        >
          <option value="">Select make...</option>
          {makes.map(make => <option key={make} value={make}>{make}</option>)}
        </select>
      </div>

      {selectedMake && (
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: colors.slate, marginBottom: '6px' }}>
            {vehicleLabel} Model
          </label>
          <select
            style={selectStyle}
            value={selectedVehicleId}
            onChange={(e) => { setSelectedVehicleId(e.target.value); setPendingResult(null); setResult(null); }}
          >
            <option value="">Select model...</option>
            {filteredVehicles.map(v => <option key={v.id} value={v.id}>{v.label}</option>)}
          </select>
        </div>
      )}

      {/* Caravan/Trailer selection */}
      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', fontSize: '15px', fontWeight: '700', color: colors.darkEarth, marginBottom: '6px' }}>
          {trailerSectionLabel}
        </label>
        <select
          style={selectStyle}
          value={selectedBrand}
          onChange={(e) => { setSelectedBrand(e.target.value); setSelectedCaravanId(''); setPendingResult(null); setResult(null); }}
        >
          <option value="">Select brand...</option>
          {brands.map(brand => <option key={brand} value={brand}>{brand}</option>)}
        </select>
      </div>

      {selectedBrand && (
        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: colors.slate, marginBottom: '6px' }}>
            {trailerLabel} Model
          </label>
          <select
            style={selectStyle}
            value={selectedCaravanId}
            onChange={(e) => { setSelectedCaravanId(e.target.value); setPendingResult(null); setResult(null); }}
          >
            <option value="">Select model...</option>
            {filteredCaravans.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
          </select>
        </div>
      )}

      {/* Check button */}
      <button
        onClick={handleCheck}
        disabled={!selectedVehicleId || !selectedCaravanId || loading}
        style={{
          width: '100%',
          padding: '14px',
          fontSize: '18px',
          fontWeight: '700',
          backgroundColor: (!selectedVehicleId || !selectedCaravanId) ? '#ccc' : colors.primary,
          color: colors.white,
          border: 'none',
          borderRadius: '10px',
          cursor: (!selectedVehicleId || !selectedCaravanId) ? 'not-allowed' : 'pointer',
        }}
      >
        {loading ? 'Checking...' : 'Can I Tow This?'}
      </button>

      {/* Email Gate — shows after check, before result */}
      {pendingResult && !result && (
        <div style={{ marginTop: '24px' }}>
          <div style={{
            padding: '28px 24px',
            backgroundColor: limitReached ? '#fffbeb' : '#f8faf8',
            border: `2px solid ${limitReached ? '#f59e0b' : '#6b8e6b'}`,
            borderRadius: '12px',
            textAlign: 'center',
          }}>
            {limitReached ? (
              <>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>🔒</div>
                <p style={{ fontSize: '20px', fontWeight: '700', color: colors.darkEarth, margin: '0 0 8px 0' }}>
                  You&apos;ve used your free tow check
                </p>
                <p style={{ fontSize: '15px', color: colors.slate, margin: '0 0 20px 0', lineHeight: '1.5' }}>
                  Sign up for a free account to check unlimited vehicle and {isUS ? 'trailer' : 'caravan'} combinations,
                  plus get access to the full tow simulator, weight gauges, and more.
                </p>
                <a
                  href={limitSignupUrl}
                  style={{
                    display: 'inline-block',
                    padding: '14px 32px',
                    fontSize: '16px',
                    fontWeight: '700',
                    backgroundColor: colors.accent,
                    color: colors.white,
                    border: 'none',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Sign Up Free — Unlimited Checks
                </a>
                <p style={{ fontSize: '13px', color: '#9ca3af', margin: '16px 0 0 0' }}>
                  No credit card required. Takes 30 seconds.
                </p>
              </>
            ) : (
              <>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>
                  {pendingResult.result.canTow ? '✅' : '⚠️'}
                </div>
                <p style={{ fontSize: '20px', fontWeight: '700', color: colors.darkEarth, margin: '0 0 8px 0' }}>
                  Your result is ready
                </p>
                <p style={{ fontSize: '15px', color: colors.slate, margin: '0 0 20px 0', lineHeight: '1.5' }}>
                  Enter your email to see your towing compatibility result.
                  {' '}We&apos;ll also send you a copy for reference.
                </p>

                <div style={{ display: 'flex', gap: '8px', maxWidth: '420px', margin: '0 auto' }}>
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setEmailError(''); }}
                    onKeyDown={(e) => { if (e.key === 'Enter') handleEmailSubmit(); }}
                    style={{
                      flex: 1,
                      padding: '14px 16px',
                      fontSize: '16px',
                      borderRadius: '8px',
                      border: emailError ? '2px solid #ef4444' : '2px solid #d4c9b0',
                      backgroundColor: colors.white,
                      color: colors.darkEarth,
                      outline: 'none',
                    }}
                  />
                  <button
                    onClick={handleEmailSubmit}
                    disabled={emailSending || !email}
                    style={{
                      padding: '14px 24px',
                      fontSize: '16px',
                      fontWeight: '700',
                      backgroundColor: colors.accent,
                      color: colors.white,
                      border: 'none',
                      borderRadius: '8px',
                      cursor: emailSending || !email ? 'not-allowed' : 'pointer',
                      opacity: emailSending || !email ? 0.6 : 1,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {emailSending ? 'Loading...' : 'Show Result'}
                  </button>
                </div>

                {emailError && (
                  <p style={{ fontSize: '13px', color: '#ef4444', margin: '8px 0 0 0' }}>{emailError}</p>
                )}

                <p style={{ fontSize: '13px', color: '#9ca3af', margin: '16px 0 0 0' }}>
                  No account needed. No credit card. No spam.
                </p>
              </>
            )}
          </div>
        </div>
      )}

      {/* Result — shows after email submitted */}
      {result && (
        <div style={{ marginTop: '24px' }}>
          {/* Pass/Fail banner */}
          <div style={{
            padding: '20px',
            borderRadius: '12px',
            backgroundColor: result.result.canTow ? '#f0fdf4' : '#fef2f2',
            border: `2px solid ${result.result.canTow ? '#22c55e' : '#ef4444'}`,
            textAlign: 'center',
            marginBottom: '16px',
          }}>
            <div style={{ fontSize: '28px', marginBottom: '8px' }}>
              {result.result.canTow ? '\u2705' : '\u274C'}
            </div>
            <div style={{ fontSize: '20px', fontWeight: '700', color: result.result.canTow ? '#16a34a' : '#dc2626', marginBottom: '8px' }}>
              {result.result.canTow
                ? `Yes — your ${result.vehicle.name} can tow this ${trailerLabel.toLowerCase()}`
                : `No — this ${trailerLabel.toLowerCase()} exceeds your towing capacity`
              }
            </div>
            <div style={{ fontSize: '16px', color: colors.slate }}>
              Towing capacity: {formatWeight(result.result.towCapacityKg)} | {trailerLabel} {isUS ? 'GVWR' : 'ATM'}: {formatWeight(result.result.caravanAtmKg)}
              {result.result.canTow
                ? ` | Margin: ${formatWeight(result.result.marginKg)}`
                : ` | Over by: ${formatWeight(Math.abs(result.result.marginKg))}`
              }
            </div>
          </div>

          {/* Email sent confirmation */}
          {emailSent && (
            <div style={{
              padding: '12px 16px',
              backgroundColor: '#f0fdf4',
              border: '1px solid #22c55e',
              borderRadius: '8px',
              marginBottom: '16px',
              textAlign: 'center',
            }}>
              <p style={{ fontSize: '14px', color: '#166534', margin: 0 }}>
                A copy of this report has been sent to <strong>{email}</strong>
              </p>
            </div>
          )}

          {/* Caveat */}
          <div style={{
            padding: '16px',
            borderRadius: '10px',
            backgroundColor: '#fffbeb',
            border: '1px solid #f59e0b',
            marginBottom: '20px',
          }}>
            <p style={{ fontSize: '14px', color: '#92400e', margin: 0, lineHeight: '1.6' }}>
              <strong>This is a basic towing capacity check only.</strong> Your actual compliance depends on
              passengers, cargo, water, fuel, and how you load your {trailerLabel.toLowerCase()}.
              {result.result.canTow
                ? ` Having ${formatWeight(result.result.marginKg)} of margin doesn't mean you can load ${formatWeight(result.result.marginKg)} of gear — your ${isUS ? 'GVWR' : 'GVM'}, ${isUS ? 'GCWR' : 'GCM'}, and ${isUS ? 'tongue' : 'towball'} weight all have separate limits.`
                : ''
              }
              {' '}Overloading voids your insurance.
            </p>
          </div>

          {/* Locked Insights — what they're missing */}
          <div style={{ marginBottom: '20px' }}>
            <p style={{ fontSize: '16px', fontWeight: '700', color: colors.darkEarth, marginBottom: '12px' }}>
              What the full compliance check also covers:
            </p>

            {[
              {
                label: `${tongueLabel} Weight Analysis`,
                teaser: `Is your ${tongueLabel.toLowerCase()} weight in the safe 10–15% range? Too low = sway. Too high = rear axle overload.`,
                value: '??%',
              },
              {
                label: `${isUS ? 'GVWR' : 'GVM'} & ${isUS ? 'GCWR' : 'GCM'} Check`,
                teaser: `Your vehicle's total loaded weight and combined weight — the limits most people don't know about.`,
                value: '?? / ??',
              },
              {
                label: 'Payload Remaining',
                teaser: `How much cargo capacity do you actually have left after passengers, water, and fuel?`,
                value: `?? ${isUS ? 'lbs' : 'kg'}`,
              },
              {
                label: 'Sway Risk Assessment',
                teaser: `Based on your weight distribution, are you at risk of dangerous trailer sway at highway speeds?`,
                value: '??',
              },
            ].map((insight, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                backgroundColor: '#f3f4f6',
                borderRadius: i === 0 ? '10px 10px 0 0' : i === 3 ? '0 0 10px 10px' : '0',
                borderBottom: i < 3 ? '1px solid #e5e7eb' : 'none',
              }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '15px', fontWeight: '600', color: colors.darkEarth }}>{insight.label}</div>
                  <div style={{ fontSize: '13px', color: '#9ca3af', marginTop: '2px' }}>{insight.teaser}</div>
                </div>
                <div style={{
                  fontSize: '16px',
                  fontWeight: '700',
                  color: '#d1d5db',
                  marginLeft: '16px',
                  whiteSpace: 'nowrap',
                  filter: 'blur(4px)',
                  userSelect: 'none',
                }}>
                  {insight.value}
                </div>
              </div>
            ))}
          </div>

          {/* Signup CTA */}
          <a
            href={signupUrl}
            style={{
              display: 'block',
              padding: '16px',
              backgroundColor: colors.primary,
              color: colors.white,
              textDecoration: 'none',
              fontWeight: '700',
              borderRadius: '10px',
              fontSize: '18px',
              textAlign: 'center',
            }}
          >
            Get Your Full Compliance Report Free
          </a>
          <p style={{ fontSize: '13px', color: colors.slate, textAlign: 'center', marginTop: '8px', marginBottom: 0 }}>
            {isUS ? 'GVWR, GCWR, towing capacity, tongue weight' : 'GVM, ATM, GCM, towing capacity, towball weight'} — all checked in under 2 minutes. No credit card required.
          </p>
        </div>
      )}
    </div>
  );
}
