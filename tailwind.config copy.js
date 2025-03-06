module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/globals.css',
  ],
  theme: {
    fontFamily: {
      burtons: 'burtons',
      jubilat: 'jubilat',
      space_mono: 'space_mono',
    },
    extend: {
      backgroundImage: {
        gradient: 'linear-gradient(60deg, #01afb8, #0070a0)',
        gradient_helplit:
          'linear-gradient(60deg, #ff7f52, #f37055, #ef4e7b, #f37055, #ff7f52)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'moon-phase': {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-16px)' },
          '100%': { transform: 'translateX(0)' },
        },
        'twinkle': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.8)' },
        },
        'draw': {
          '0%': { strokeDashoffset: '200' },
          '100%': { strokeDashoffset: '0' },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0) rotate(45deg) rotate(-5deg)',
          },
          '50%': { transform: 'translateX(-20px) rotate(45deg) rotate(5deg)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out',
        'moon-phase': 'moon-phase 8s ease-in-out infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite',
        'draw': 'draw 3s ease-in-out forwards',
        'float': 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    // Light & dark themes are added by default (it switches automatically based on OS settings)
    // You can add another theme among the list of 30+
    // Add "data-theme='theme_name" to any HTML tag to enable the 'theme_name' theme.
    // https://daisyui.com/
    themes: [
      'black', //comment to deactivate
      {
        mytheme: {
          'primary': '#ffffff', // Keeping the same
          'secondary': '#0070a0', // Keeping the same
          'accent': '#A478FC', // A rich violet-blue for the accent
          'neutral': '#1B2B34', // Deep oceanic charcoal gray
          'base-100': '#0F1C24', // Dark navy background
          'base-200': '#14222B', // Slightly lighter oceanic blue-gray
          'base-300': '#1A2A35', // A bit more contrast with a hint of blue
          'info': '#A1C4D6', // Soft, light oceanic blue for readability
          'success': '#93c955', // Keeping the same
          'warning': '#ffff00', // Keeping the same
          'error': '#ff5555', // Keeping the same
          'VEGA_YELLOW_1': '#000',
          'VEGA_YELLOW_2': '#000',
          'OLIVER_ORANGE_1': '#000',
          'OLIVER_ORANGE_2': '#000',
          'AKIRA_RED_1': '#000',
          'AKIRA_RED_2': '#000',
          'NEPHELE_PURPLE_1': '#000',
          'NEPHELE_PURPLE_2': '#000',
          'RIDGE_BLUE_1': '#000',
          'RIDGE_BLUE_2': '#000',
          'LYRA_GREEN_1': '#000',
          'LYRA_GREEN_2': '#000',
        },
      },
    ],
  },
};
