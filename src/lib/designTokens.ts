// KamperHub Design Tokens - Landing Page
// Bush Meets Coast colour palette

export const colors = {
  // Primary brand colours
  primary: {
    main: '#6b8e6b',      // Sage Green
    light: '#7fa37f',
    dark: '#5a7a5a',
  },

  // Secondary colour
  secondary: {
    main: '#3d8b8b',      // Ocean Teal
    light: '#4fa3a3',
    dark: '#327373',
  },

  // Accent colour
  accent: {
    main: '#c97b5d',      // Terracotta
    light: '#d99478',
    dark: '#b5684a',
  },

  // Backgrounds
  background: {
    cream: '#fdfbf7',     // Beach Cream
    sand: '#e8dcc4',      // Sandstone
    white: '#ffffff',
    dark: '#3d3229',      // Dark Earth
  },

  // Text colours
  text: {
    primary: '#3d3229',   // Dark Earth
    secondary: '#5a6672', // Slate
    muted: '#a68b6a',     // Driftwood
    inverse: '#fdfbf7',   // Beach Cream
  },

  // Borders
  border: {
    light: '#e8dcc4',     // Sandstone
    medium: '#a68b6a',    // Driftwood
  },

  // Status colours
  status: {
    success: '#6b8e6b',   // Sage Green
    warning: '#c97b5d',   // Terracotta
    error: '#b54a4a',
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
  sm: '0 1px 2px rgba(61, 50, 41, 0.05)',
  md: '0 4px 6px rgba(61, 50, 41, 0.07)',
  lg: '0 10px 15px rgba(61, 50, 41, 0.1)',
  xl: '0 20px 25px rgba(61, 50, 41, 0.15)',
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
