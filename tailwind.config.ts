import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-light': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'custom-dark': '0 4px 8px rgba(0, 0, 0, 0.3)',
      },
      textShadow: {
        'white-shadow':
          'rgb(255, 255, 255) 3px 0px 0px, rgb(255, 255, 255) 2.83487px 0.981584px 0px, rgb(255, 255, 255) 2.35766px 1.85511px 0px, rgb(255, 255, 255) 1.62091px 2.52441px 0px, rgb(255, 255, 255) 0.705713px 2.91581px 0px, rgb(255, 255, 255) -0.287171px 2.98622px 0px, rgb(255, 255, 255) -1.24844px 2.72789px 0px, rgb(255, 255, 255) -2.07227px 2.16926px 0px, rgb(255, 255, 255) -2.66798px 1.37182px 0px, rgb(255, 255, 255) -2.96998px 0.42336px 0px, rgb(255, 255, 255) -2.94502px -0.571704px 0px, rgb(255, 255, 255) -2.59586px -1.50383px 0px, rgb(255, 255, 255) -1.96093px -2.27041px 0px, rgb(255, 255, 255) -1.11013px -2.78704px 0px, rgb(255, 255, 255) -0.137119px -2.99686px 0px, rgb(255, 255, 255) 0.850987px -2.87677px 0px, rgb(255, 255, 255) 1.74541px -2.43999px 0px, rgb(255, 255, 255) 2.44769px -1.73459px 0px, rgb(255, 255, 255) 2.88051px -0.838247px 0px',
      },
      colors: {
        neutral: {
          '0': 'var(--color-neutral-0)',
          '5': 'var(--color-neutral-5)',
          '10': 'var(--color-neutral-10)',
          '20': 'var(--color-neutral-20)',
          '30': 'var(--color-neutral-30)',
          '40': 'var(--color-neutral-40)',
          '50': 'var(--color-neutral-50)',
          '60': 'var(--color-neutral-60)',
          '70': 'var(--color-neutral-70)',
          '80': 'var(--color-neutral-80)',
          '90': 'var(--color-neutral-90)',
          '100': 'var(--color-neutral-100)',
        },
        primary: {
          '5': 'var(--color-primary-5)',
          '10': 'var(--color-primary-10)',
          '20': 'var(--color-primary-20)',
          '30': 'var(--color-primary-30)',
          '40': 'var(--color-primary-40)',
          '50': 'var(--color-primary-50)',
          '60': 'var(--color-primary-60)',
          '70': 'var(--color-primary-70)',
          '80': 'var(--color-primary-80)',
          '90': 'var(--color-primary-90)',
        },
        error: {
          '5': 'var(--color-error-5)',
          '10': 'var(--color-error-10)',
          '20': 'var(--color-error-20)',
          '30': 'var(--color-error-30)',
          '40': 'var(--color-error-40)',
          '50': 'var(--color-error-50)',
          '60': 'var(--color-error-60)',
          '70': 'var(--color-error-70)',
          '80': 'var(--color-error-80)',
          '90': 'var(--color-error-90)',
        },
        warn: {
          '5': 'var(--color-warn-5)',
          '10': 'var(--color-warn-10)',
          '20': 'var(--color-warn-20)',
          '30': 'var(--color-warn-30)',
          '40': 'var(--color-warn-40)',
          '50': 'var(--color-warn-50)',
          '60': 'var(--color-warn-60)',
          '70': 'var(--color-warn-70)',
          '80': 'var(--color-warn-80)',
          '90': 'var(--color-warn-90)',
        },
        success: {
          '5': 'var(--color-success-5)',
          '10': 'var(--color-success-10)',
          '20': 'var(--color-success-20)',
          '30': 'var(--color-success-30)',
          '40': 'var(--color-success-40)',
          '50': 'var(--color-success-50)',
          '60': 'var(--color-success-60)',
          '70': 'var(--color-success-70)',
          '80': 'var(--color-success-80)',
          '90': 'var(--color-success-90)',
        },
      },
      borderRadius: {
        none: '0px',
        sm: 'calc(var(--radius) - 4px)',
        DEFAULT: '0.25rem',
        md: 'calc(var(--radius) - 2px)',
        lg: 'var(--radius)',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.3rem',
        '4xl': '1.5rem',
        '5xl': '2rem',
        full: '1000px',
      },
    },
    spacing: {
      '0': '0px',
      '1': '0.15rem',
      '2': '0.25rem',
      '3': '0.5rem',
      '4': '0.75rem',
      '5': '1rem',
      '6': '1.25rem',
      '7': '1.5rem',
      '8': '2rem',
      '9': '2.5rem',
      '10': '3rem',
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: Function }) {
      const newUtilities = {
        '.text-shadow-white-shadow': {
          textShadow:
            'rgb(255, 255, 255) 3px 0px 0px, rgb(255, 255, 255) 2.83487px 0.981584px 0px, rgb(255, 255, 255) 2.35766px 1.85511px 0px, rgb(255, 255, 255) 1.62091px 2.52441px 0px, rgb(255, 255, 255) 0.705713px 2.91581px 0px, rgb(255, 255, 255) -0.287171px 2.98622px 0px, rgb(255, 255, 255) -1.24844px 2.72789px 0px, rgb(255, 255, 255) -2.07227px 2.16926px 0px, rgb(255, 255, 255) -2.66798px 1.37182px 0px, rgb(255, 255, 255) -2.96998px 0.42336px 0px, rgb(255, 255, 255) -2.94502px -0.571704px 0px, rgb(255, 255, 255) -2.59586px -1.50383px 0px, rgb(255, 255, 255) -1.96093px -2.27041px 0px, rgb(255, 255, 255) -1.11013px -2.78704px 0px, rgb(255, 255, 255) -0.137119px -2.99686px 0px, rgb(255, 255, 255) 0.850987px -2.87677px 0px, rgb(255, 255, 255) 1.74541px -2.43999px 0px, rgb(255, 255, 255) 2.44769px -1.73459px 0px, rgb(255, 255, 255) 2.88051px -0.838247px 0px',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
    require('tailwindcss-animate'),
  ],
  safelist: ['w-9/12', 'w-10/12', 'w-auto', 'w-1/2', 'w-2/3', 'w-3/4', 'w-4/5', 'w-5/6', 'w-11/12'],
};
export default config;
