/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      serif: ['Instrument Serif', 'Georgia', 'Times New Roman', 'serif'],
      sans: ['Instrument Sans', 'system-ui', '-apple-system', 'sans-serif'],
      mono: ['JetBrains Mono', 'Menlo', 'monospace'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      black: '#000000',
      // Paper tones - warm neutrals that feel physical
      paper: {
        white: '#FAF9F7',
        cream: '#F5F3EF',
        warm: '#EBE8E2',
        mid: '#D4D0C7',
      },
      // Ink tones - dense, confident darks
      ink: {
        black: '#1A1A18',
        dark: '#2D2D2A',
        medium: '#4A4A45',
        light: '#7A7A72',
      },
      // Accent - Burnt Sienna (unexpected, warm, confident)
      accent: {
        DEFAULT: '#C65D3B',
        dark: '#9E4A2F',
        light: '#D97B5A',
      },
      // Surface colors
      surface: {
        elevated: '#FFFFFF',
      },
      // Border colors
      border: {
        subtle: 'rgba(26, 26, 24, 0.08)',
        visible: 'rgba(26, 26, 24, 0.15)',
      },
    },
    fontSize: {
      // Display - for hero, section intros
      'display-hero': ['clamp(4rem, 12vw, 10rem)', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
      'display-section': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '1', letterSpacing: '-0.03em' }],
      'display-sub': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      // Headings
      'heading-1': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
      'heading-2': ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
      'heading-3': ['clamp(1.25rem, 2vw, 1.5rem)', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
      // Body
      'body-lg': ['1.25rem', { lineHeight: '1.6' }],
      'body': ['1.0625rem', { lineHeight: '1.6' }],
      'body-sm': ['0.9375rem', { lineHeight: '1.6' }],
      // Detail
      'caption': ['0.8125rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],
      'micro': ['0.6875rem', { lineHeight: '1.4', letterSpacing: '0.02em' }],
      'label': ['0.75rem', { lineHeight: '1', letterSpacing: '0.15em' }],
    },
    extend: {
      spacing: {
        'nav-width': '80px',
        'nav-width-expanded': '280px',
        'section': 'clamp(6rem, 12vh, 10rem)',
        'grid-margin': 'clamp(1.5rem, 5vw, 6rem)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-out-expo': 'cubic-bezier(0.65, 0, 0.35, 1)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(26, 26, 24, 0.04)',
        'md': '0 4px 12px rgba(26, 26, 24, 0.06)',
        'lg': '0 12px 32px rgba(26, 26, 24, 0.08)',
        'xl': '0 24px 48px rgba(26, 26, 24, 0.10)',
      },
      animation: {
        'fade-in-out': 'fadeInOut 3s ease-in-out infinite',
        'clip-reveal': 'clipReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeInOut: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        clipReveal: {
          '0%': { clipPath: 'inset(0 100% 0 0)' },
          '100%': { clipPath: 'inset(0 0 0 0)' },
        },
      },
    },
  },
  plugins: [],
}
