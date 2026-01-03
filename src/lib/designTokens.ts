// KamperHub Design Tokens - Landing Page
// Consistent with main app branding

export const colors = {
  // Primary brand colours
  primary: {
    main: '#386641',      // Forest Green
    light: '#4a7c54',
    dark: '#2d5235',
  },

  // Accent colour
  accent: {
    main: '#BC4749',      // Burnt Orange/Red
    light: '#d15a5c',
    dark: '#9a3a3c',
  },

  // Backgrounds
  background: {
    cream: '#FAF8F1',     // Light Beige
    white: '#ffffff',
    dark: '#1a1a1a',
    green: '#f0f7f1',
  },

  // Text colours
  text: {
    primary: '#1a1a1a',
    secondary: '#374151',
    muted: '#6b7280',
    inverse: '#ffffff',
  },

  // Borders
  border: {
    light: '#e5e5e5',
    medium: '#d1d5db',
  },

  // Status colours
  status: {
    success: '#22c55e',
    warning: '#f59e0b',
    error: '#dc2626',
  },
};

export const typography = {
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",

  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '60px',
  },

  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.6,
  },
};

export const spacing = {
  0: '0',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
  16: '64px',
  20: '80px',
  24: '96px',
};

export const borderRadius = {
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  full: '9999px',
};

export const shadows = {
  sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px rgba(0, 0, 0, 0.07)',
  lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px rgba(0, 0, 0, 0.15)',
};

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export const transitions = {
  fast: '0.15s ease',
  normal: '0.2s ease',
  slow: '0.3s ease',
};
