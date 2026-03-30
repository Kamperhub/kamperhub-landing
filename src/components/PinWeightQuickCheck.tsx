'use client';

import { useState } from 'react';

const colors = {
  primary: '#6b8e6b',
  accent: '#c97b5d',
  cream: '#fdfbf7',
  darkEarth: '#3d3229',
  slate: '#5a6672',
  white: '#FFFFFF',
};

const APP_URL = 'https://app.kamperhub.com';

type PinPreset = 'typical' | 'conservative' | 'minimum';

export default function PinWeightQuickCheck() {
  const [truckPayload, setTruckPayload] = useState('');
  const [trailerWeight, setTrailerWeight] = useState('');
  const [includePeople, setIncludePeople] = useState(true);
  const [peopleCargo, setPeopleCargo] = useState('400');
  const [pinPreset, setPinPreset] = useState<PinPreset>('typical');
  const [result, setResult] = useState<{
    status: 'pass' | 'warning' | 'fail';
    pinWeight: number;
    payloadUsed: number;
    remaining: number;
  } | null>(null);

  const pinPercentages: Record<PinPreset, number> = {
    minimum: 0.15,
    typical: 0.20,
    conservative: 0.22,
  };

  const HITCH_WEIGHT = 200; // lbs — 5th wheel hitch hardware

  const handleCheck = () => {
    const payload = parseInt(truckPayload);
    const trailer = parseInt(trailerWeight);
    if (isNaN(payload) || isNaN(trailer) || payload <= 0 || trailer <= 0) return;

    const pinWeight = Math.round(trailer * pinPercentages[pinPreset]);
    const people = includePeople ? parseInt(peopleCargo) || 0 : 0;
    const payloadUsed = pinWeight + people + HITCH_WEIGHT;
    const remaining = payload - payloadUsed;

    let status: 'pass' | 'warning' | 'fail';
    if (remaining < 0) status = 'fail';
    else if (remaining < 300) status = 'warning';
    else status = 'pass';

    setResult({ status, pinWeight, payloadUsed, remaining });
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '2px solid #d4c9b0',
    backgroundColor: colors.white,
    color: colors.darkEarth,
    boxSizing: 'border-box',
  };

  const presetBtnStyle = (active: boolean): React.CSSProperties => ({
    padding: '8px 16px',
    fontSize: '14px',
    fontWeight: active ? '700' : '500',
    backgroundColor: active ? colors.primary : colors.cream,
    color: active ? colors.white : colors.slate,
    border: `2px solid ${active ? colors.primary : '#d4c9b0'}`,
    borderRadius: '8px',
    cursor: 'pointer',
  });

  return (
    <div style={{
      maxWidth: '560px',
      margin: '0 auto',
      padding: '32px',
      backgroundColor: colors.white,
      borderRadius: '16px',
      boxShadow: '0 4px 24px rgba(0,0,0,0.1)',
    }}>
      <h3 style={{ fontSize: '20px', fontWeight: '700', color: colors.darkEarth, marginBottom: '4px', marginTop: 0, textAlign: 'center' }}>
        5th-Wheel Pin Weight Quick Check
      </h3>
      <p style={{ fontSize: '14px', color: colors.slate, textAlign: 'center', marginBottom: '24px' }}>
        Most 5th-wheel towing limits are hit by payload and pin weight, not tow rating.
      </p>

      {/* Truck payload */}
      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', fontSize: '15px', fontWeight: '700', color: colors.darkEarth, marginBottom: '4px' }}>
          Truck Payload Capacity (lbs)
        </label>
        <p style={{ fontSize: '13px', color: colors.slate, margin: '0 0 6px' }}>Found on the driver-side door jamb sticker</p>
        <input
          type="number"
          style={inputStyle}
          placeholder="e.g. 3,200"
          value={truckPayload}
          onChange={(e) => { setTruckPayload(e.target.value); setResult(null); }}
        />
      </div>

      {/* 5th wheel weight */}
      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', fontSize: '15px', fontWeight: '700', color: colors.darkEarth, marginBottom: '4px' }}>
          Estimated Loaded 5th-Wheel Weight (lbs)
        </label>
        <p style={{ fontSize: '13px', color: colors.slate, margin: '0 0 6px' }}>Use GVWR if you&apos;re unsure — dry weight is almost always misleading</p>
        <input
          type="number"
          style={inputStyle}
          placeholder="e.g. 14,000"
          value={trailerWeight}
          onChange={(e) => { setTrailerWeight(e.target.value); setResult(null); }}
        />
      </div>

      {/* Pin weight preset */}
      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: colors.slate, marginBottom: '8px' }}>
          Pin Weight Estimate
        </label>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <button style={presetBtnStyle(pinPreset === 'minimum')} onClick={() => { setPinPreset('minimum'); setResult(null); }}>
            Minimum (15%)
          </button>
          <button style={presetBtnStyle(pinPreset === 'typical')} onClick={() => { setPinPreset('typical'); setResult(null); }}>
            Typical (20%)
          </button>
          <button style={presetBtnStyle(pinPreset === 'conservative')} onClick={() => { setPinPreset('conservative'); setResult(null); }}>
            Conservative (22%)
          </button>
        </div>
        <p style={{ fontSize: '12px', color: colors.slate, marginTop: '6px', marginBottom: 0 }}>
          ℹ️ Pin weight usually increases after purchase once gear and water are added.
        </p>
      </div>

      {/* People + cargo toggle */}
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '15px', color: colors.darkEarth, fontWeight: '600' }}>
          <input
            type="checkbox"
            checked={includePeople}
            onChange={(e) => { setIncludePeople(e.target.checked); setResult(null); }}
            style={{ width: '18px', height: '18px' }}
          />
          Include passengers + gear in truck
        </label>
        {includePeople && (
          <div style={{ marginTop: '8px' }}>
            <input
              type="number"
              style={{ ...inputStyle, maxWidth: '200px' }}
              placeholder="e.g. 400"
              value={peopleCargo}
              onChange={(e) => { setPeopleCargo(e.target.value); setResult(null); }}
            />
            <p style={{ fontSize: '12px', color: colors.slate, marginTop: '4px', marginBottom: 0 }}>
              Passengers, fuel margin, tools, truck-bed cargo
            </p>
          </div>
        )}
      </div>

      {/* Check button */}
      <button
        onClick={handleCheck}
        disabled={!truckPayload || !trailerWeight}
        style={{
          width: '100%',
          padding: '14px',
          fontSize: '18px',
          fontWeight: '700',
          backgroundColor: (!truckPayload || !trailerWeight) ? '#ccc' : colors.primary,
          color: colors.white,
          border: 'none',
          borderRadius: '10px',
          cursor: (!truckPayload || !trailerWeight) ? 'not-allowed' : 'pointer',
        }}
      >
        Check Pin Weight vs Payload
      </button>

      {/* Result */}
      {result && (
        <div style={{ marginTop: '24px' }}>
          <div style={{
            padding: '20px',
            borderRadius: '12px',
            backgroundColor: result.status === 'pass' ? '#f0fdf4' : result.status === 'warning' ? '#fffbeb' : '#fef2f2',
            border: `2px solid ${result.status === 'pass' ? '#22c55e' : result.status === 'warning' ? '#f59e0b' : '#ef4444'}`,
            textAlign: 'center',
            marginBottom: '16px',
          }}>
            <div style={{ fontSize: '28px', marginBottom: '8px' }}>
              {result.status === 'pass' ? '✅' : result.status === 'warning' ? '⚠️' : '❌'}
            </div>
            <div style={{
              fontSize: '20px',
              fontWeight: '700',
              color: result.status === 'pass' ? '#16a34a' : result.status === 'warning' ? '#d97706' : '#dc2626',
              marginBottom: '12px',
            }}>
              {result.status === 'pass' && 'Payload looks sufficient for this 5th wheel.'}
              {result.status === 'warning' && 'This setup is very close to your payload limit.'}
              {result.status === 'fail' && "Pin weight exceeds your truck's available payload."}
            </div>
            <div style={{ fontSize: '15px', color: colors.slate, lineHeight: '1.6' }}>
              {result.status === 'pass' && 'Based on estimated pin weight and truck payload, this setup appears feasible. You should still verify axle ratings and run a full towing check.'}
              {result.status === 'warning' && 'Small changes in cargo, passengers, or actual pin weight could push this truck over its limits.'}
              {result.status === 'fail' && 'This 5th wheel will likely overload the truck once loaded. This is one of the most common 5th-wheel buying mistakes.'}
            </div>
          </div>

          {/* Breakdown */}
          <div style={{ padding: '16px', backgroundColor: colors.cream, borderRadius: '10px', marginBottom: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '15px', color: colors.slate }}>
              <span>Estimated pin weight ({Math.round(pinPercentages[pinPreset] * 100)}%)</span>
              <span style={{ fontWeight: '600' }}>{result.pinWeight.toLocaleString()} lbs</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '15px', color: colors.slate }}>
              <span>5th wheel hitch hardware</span>
              <span style={{ fontWeight: '600' }}>{HITCH_WEIGHT} lbs</span>
            </div>
            {includePeople && (
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '15px', color: colors.slate }}>
                <span>Passengers + cargo</span>
                <span style={{ fontWeight: '600' }}>{parseInt(peopleCargo || '0').toLocaleString()} lbs</span>
              </div>
            )}
            <div style={{ borderTop: '2px solid #d4c9b0', marginTop: '8px', paddingTop: '8px', display: 'flex', justifyContent: 'space-between', fontSize: '16px', fontWeight: '700', color: colors.darkEarth }}>
              <span>Total payload used</span>
              <span>{result.payloadUsed.toLocaleString()} lbs</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '16px', fontWeight: '700', color: result.remaining >= 0 ? '#16a34a' : '#dc2626', marginTop: '4px' }}>
              <span>Remaining payload</span>
              <span>{result.remaining >= 0 ? '' : '-'}{Math.abs(result.remaining).toLocaleString()} lbs</span>
            </div>
          </div>

          {/* Educational microcopy */}
          <div style={{ padding: '12px 16px', backgroundColor: '#fffbeb', borderRadius: '8px', border: '1px solid #f59e0b', marginBottom: '20px' }}>
            <p style={{ fontSize: '13px', color: '#92400e', margin: '0 0 6px', lineHeight: '1.5' }}>
              <strong>5th-wheel pin weight is usually 15–25% of total trailer weight and increases once loaded.</strong>
            </p>
            <p style={{ fontSize: '13px', color: '#92400e', margin: 0, lineHeight: '1.5' }}>
              Tow rating alone does not protect against payload or rear axle overload.
            </p>
          </div>

          {/* CTA → full calculator */}
          <a
            href={`${APP_URL}/signup?redirect=/weights`}
            style={{
              display: 'block',
              padding: '16px',
              backgroundColor: colors.accent,
              color: colors.white,
              textDecoration: 'none',
              fontWeight: '700',
              borderRadius: '10px',
              fontSize: '18px',
              textAlign: 'center',
            }}
          >
            Run Full 5th-Wheel Towing Check →
          </a>
          <p style={{ fontSize: '13px', color: colors.slate, textAlign: 'center', marginTop: '8px', marginBottom: 0 }}>
            Includes GVWR, GCWR, rear axle risk, and safety margins.
          </p>
        </div>
      )}
    </div>
  );
}
