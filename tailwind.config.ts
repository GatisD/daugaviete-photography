import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#FAFAF7',
          secondary: '#F2EFE9',
          accent: '#1A1A1A',
        },
        text: {
          primary: '#1F1F1F',
          secondary: '#6B6B6B',
          muted: '#9C9C9C',
        },
        accent: {
          gold: '#B8945C',
          'gold-hover': '#9F7E4A',
        },
        border: {
          subtle: '#E5E1D8',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': ['clamp(48px, 8vw, 96px)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'h2': ['clamp(32px, 5vw, 56px)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'h3': ['clamp(24px, 3vw, 32px)', { lineHeight: '1.2' }],
      },
      maxWidth: {
        container: '1440px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
