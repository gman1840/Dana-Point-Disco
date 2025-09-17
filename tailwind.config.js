/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dpd-purple': '#7C3AED',
        'dpd-purple-dark': '#5B21B6',
      },
      boxShadow: {
        'dpd': '0 10px 25px rgba(124,58,237,0.25)',
      },
      borderRadius: {
        '2xl': '1rem',
      }
    },
  },
  plugins: [],
};
