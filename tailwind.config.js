/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'GRID': "url('/images/bg/grid.svg')",
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fallSway: {
          '0%': { transform: 'translateY(-10%) rotate(0deg)', opacity: 0 },
          '30%': { transform: 'translateY(30%) rotate(5deg)', opacity: 0.8 },
          '60%': { transform: 'translateY(60%) rotate(-3deg)', opacity: 1 },
          '100%': { transform: 'translateY(100%) rotate(0deg)', opacity: 0 },
        },
        opacity: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        appearFromRight: {
          '0%': { opacity: 0.3, transform: 'translate(15%, 0px);' },
          '100%': { opacity: 1, transform: 'translate(0);' },
        },
        wiggle: {
          '0%, 20%, 80%, 100%': {
            transform: 'rotate(0deg)',
          },
          '30%, 60%': {
            transform: 'rotate(-2deg)',
          },
          '40%, 70%': {
            transform: 'rotate(2deg)',
          },
          '45%': {
            transform: 'rotate(-4deg)',
          },
          '55%': {
            transform: 'rotate(4deg)',
          },
        },
        popup: {
          '0%': { transform: 'scale(0.8)', opacity: 0.8 },
          '50%': { transform: 'scale(1.1)', opacity: 1 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        shimmer: {
          '0%': { backgroundPosition: '0 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out',
        opacity: 'opacity 0.25s ease-in-out',
        appearFromRight: 'appearFromRight 300ms ease-in-out',
        wiggle: 'wiggle 1.5s ease-in-out infinite',
        popup: 'popup 0.25s ease-in-out',
        shimmer: 'shimmer 3s ease-out infinite alternate',
        'fall-sway': 'fallSway 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
