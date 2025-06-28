/* tailwind.config.js */
const palette = {
  navy: '#181441', // deep blue‑violet
  teal: '#18B6AA', // inner‑petal teal
  green: {
    DEFAULT: '#009D4C',
  },
  gold: '#E5AF27',
  stone: '#FDFDFD',
  ink: '#121212',
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        lg: '1120px',
        xl: '1280px'
      }
    },
    extend: {
      colors: palette,
      fontFamily: {
        body: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'serif'],
      },
      boxShadow: {
        soft: '0 4px 24px rgba(0, 0, 0, 0.08)',
        'soft-lg': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'soft-xl': '0 16px 48px rgba(0, 0, 0, 0.16)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #18B6AA 0%, #009D4C 100%)',
        'gradient-hero': 'linear-gradient(135deg, #181441 0%, #1a1654 50%, #181441 100%)',
        'gradient-wellness': 'linear-gradient(135deg, #181441 0%, #2a2463 100%)',
        'gradient-cta': 'linear-gradient(135deg, #009D4C 0%, #18B6AA 100%)',
      },
      animation: {
        'float': 'float 20s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(30px, -30px) rotate(120deg)' },
          '66%': { transform: 'translate(-20px, 20px) rotate(240deg)' },
        }
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      backdropBlur: {
        'xs': '2px',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#121212',
            h1: {
              fontFamily: 'var(--font-playfair)',
              fontWeight: '400',
              color: '#181441',
            },
            h2: {
              fontFamily: 'var(--font-playfair)',
              fontWeight: '400',
              color: '#181441',
            },
            h3: {
              fontFamily: 'var(--font-playfair)',
              fontWeight: '400',
              color: '#181441',
            },
            'h4, h5, h6': {
              fontFamily: 'var(--font-playfair)',
              fontWeight: '400',
              color: '#181441',
            },
            strong: {
              color: '#18B6AA',
              fontWeight: '600',
            },
            a: {
              color: '#18B6AA',
              textDecoration: 'none',
              '&:hover': {
                color: '#E5AF27',
              },
            },
            'ul > li': {
              position: 'relative',
              paddingLeft: '1.5rem',
            },
            'ul > li::before': {
              content: '""',
              position: 'absolute',
              backgroundColor: '#18B6AA',
              borderRadius: '50%',
              width: '0.5rem',
              height: '0.5rem',
              top: '0.7rem',
              left: '0.25rem',
            },
          },
        },
        invert: {
          css: {
            '--tw-prose-body': '#FDFDFD',
            '--tw-prose-headings': '#FDFDFD',
            '--tw-prose-lead': '#FDFDFD',
            '--tw-prose-links': '#E5AF27',
            '--tw-prose-bold': '#18B6AA',
            '--tw-prose-counters': '#FDFDFD',
            '--tw-prose-bullets': '#18B6AA',
            '--tw-prose-hr': '#374151',
            '--tw-prose-quotes': '#FDFDFD',
            '--tw-prose-quote-borders': '#374151',
            '--tw-prose-captions': '#FDFDFD',
            '--tw-prose-code': '#FDFDFD',
            '--tw-prose-pre-code': '#FDFDFD',
            '--tw-prose-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-th-borders': '#374151',
            '--tw-prose-td-borders': '#374151',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}