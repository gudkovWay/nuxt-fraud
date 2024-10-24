import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [animate],
  content: ['./app/**/*.{ts,tsx,vue}'],
  theme: {
    screens: {
      sm: '320px',
      md: '640px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    container: {
      center: true,
      padding: '2rem',
      size: '200px',
      screens: {
        '2xl': '1400px',
      },
    },
  },
};
