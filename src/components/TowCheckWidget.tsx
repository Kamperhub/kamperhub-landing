'use client';

import { useState, useEffect } from 'react';

const API_BASE = 'https://app.kamperhub.com/api/public/tow-check';
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

  const [result, setResult] = useState<CheckResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [dataLoading, setDataLoading] = useState(true);

  const isUS = region === 'us';
  const trailerLabel = isUS ? 'Trailer' : 'Caravan';
  const vehicleLabel = isUS ? 'Truck' : 'Vehicle';
  const vehicleSectionLabel = isUS ? 'Your Truck or SUV' : 'Your Vehicle';
  const trailerSectionLabel = isUS ? 'RV or Trailer You\'re Considering' : 'Your Caravan';

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

  const handleCheck = async () => {
    if (!selectedVehicleId || !selectedCaravanId) return;
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch(`${API_BASE}?action=check&vehicleId=${selectedVehicleId}&caravanId=${selectedCaravanId}`);
      const data = await res.json();
      setResult(data);
    } catch {
      // silently fail
    } finally {
      setLoading(false);
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
          onChange={(e) => { setSelectedMake(e.target.value); setSelectedVehicleId(''); setResult(null); }}
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
            onChange={(e) => { setSelectedVehicleId(e.target.value); setResult(null); }}
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
          onChange={(e) => { setSelectedBrand(e.target.value); setSelectedCaravanId(''); setResult(null); }}
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
            onChange={(e) => { setSelectedCaravanId(e.target.value); setResult(null); }}
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

      {/* Result */}
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
              {result.result.canTow ? '✅' : '❌'}
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

          {/* Caveat */}
          <div style={{
            padding: '16px',
            borderRadius: '10px',
            backgroundColor: '#fffbeb',
            border: '1px solid #f59e0b',
            marginBottom: '20px',
          }}>
            <p style={{ fontSize: '14px', color: '#92400e', margin: 0, lineHeight: '1.6' }}>
              <strong>⚠️ This is a basic towing capacity check only.</strong> Your actual compliance depends on
              passengers, cargo, water, fuel, and how you load your {trailerLabel.toLowerCase()}.
              {result.result.canTow
                ? ` Having ${formatWeight(result.result.marginKg)} of margin doesn't mean you can load ${formatWeight(result.result.marginKg)} of gear — your ${isUS ? 'GVWR' : 'GVM'}, ${isUS ? 'GCWR' : 'GCM'}, and ${isUS ? 'tongue' : 'towball'} weight all have separate limits.`
                : ''
              }
              {' '}Overloading voids your insurance.
            </p>
          </div>

          {/* CTA */}
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
            Check Your Full Compliance Free →
          </a>
          <p style={{ fontSize: '13px', color: colors.slate, textAlign: 'center', marginTop: '8px', marginBottom: 0 }}>
            {isUS ? 'GVWR, GCWR, towing capacity, tongue weight' : 'GVM, ATM, GCM, towing capacity, towball weight'} — all checked in under 2 minutes.
          </p>
        </div>
      )}
    </div>
  );
}
