/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pBlue: {
          100: '#174DFF',
        },
        pOrange: {
          100: '#FFC917',
        },
        pGreen: {
          100: '17FF55',
        },
      },
    },
  },
  plugins: [],
};
