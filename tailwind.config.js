/** @type {import('tailwindcss').Config} */
const orange1 = {
  50: '#fff8ed',
  100: '#fff0d5',
  200: '#fed593', // default
  300: '#fdc574',
  400: '#fba13c',
  500: '#fa8615',
  600: '#eb6a0b',
  700: '#c2500c',
  800: '#9a3f12',
  900: '#7c3612',
  950: '#431907',
};

const orange2 = {
  50: '#fffbf4',
  100: '#fff7e9',
  200: '#ffeed4',
  300: '#fee6be',
  400: '#fedda9',
  500: '#fed593', // default
  600: '#cbaa76',
  700: '#988058',
  800: '#66553b',
  900: '#332b1d',
};

const borwn1 = {
  50: '#f8f5ee',
  100: '#efe7d2',
  200: '#e0cfa8',
  300: '#ceb176',
  400: '#c49e5f', // default
  500: '#af8243',
  600: '#976737',
  700: '#794e2f',
  800: '#66412d',
  900: '#58382b',
  950: '#321d16',
};

const borwn2 = {
  50: '#f9f5ef',
  100: '#f3ecdf',
  200: '#e7d8bf',
  300: '#dcc59f',
  400: '#d0b17f',
  500: '#c49e5f', // default
  600: '#9d7e4c',
  700: '#765f39',
  800: '#4e3f26',
  900: '#272013',
};

const green1 = {
  50: '#ebfef7',
  100: '#cefde9',
  200: '#a1f9d9',
  300: '#64f1c5',
  400: '#27e0ad',
  500: '#02c797',
  600: '#00a27c',
  700: '#008266',
  800: '#006652',
  900: '#005b4b', // default
  950: '#003028',
};

const green2 = {
  50: '#e6efed',
  100: '#ccdedb',
  200: '#99bdb7',
  300: '#669d93',
  400: '#337c6f',
  500: '#005b4b', // default
  600: '#00493c',
  700: '#00372d',
  800: '#00241e',
  900: '#00120f',
};

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
          900: 'var(--color-primary-900)',
          950: 'var(--color-primary-950)',
        },
        'on-primary': {
          50: 'var(--color-on-primary-50)',
          100: 'var(--color-on-primary-100)',
          200: 'var(--color-on-primary-200)',
          300: 'var(--color-on-primary-300)',
          400: 'var(--color-on-primary-400)',
          500: 'var(--color-on-primary-500)',
          600: 'var(--color-on-primary-600)',
          700: 'var(--color-on-primary-700)',
          800: 'var(--color-on-primary-800)',
          900: 'var(--color-on-primary-900)',
          950: 'var(--color-on-primary-950)',
        },
      },
    },
  },
  plugins: [],
};
