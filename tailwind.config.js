/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-color': 'rgb(241, 241, 243)',
        "customGray": '#F7F7F8',
        "customWhite": '#FCFCFD',
        "customOrange": '#FF9500',
      },
      letterSpacing: {
        '6px': '6px',
        '1px': '1px',
        '2px': '2px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.tracking-6px': {
          letterSpacing: '6px',
        },
      };
      const newUtilitiess = {
        '.tracking-1px': {
          letterSpacing: '1px',
        },
        '.tracking-2px': {
          letterSpacing: '2px',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
      addUtilities(newUtilitiess, ['responsive', 'hover']);
    },
  ],
}