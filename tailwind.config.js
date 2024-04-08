/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '16': 'repeat(auto-fill, minmax(180px, 1fr))',
      },
      animation: {
        'flow': 'flow 3s linear infinite',
      },
      keyframes: {
        flow: {
          '0%': { transform: 'trasnlate-x-[-800px]' },
          '100%': { transform: 'trasnlate-x-[800px]'},
        }
      }
    },
  },
  plugins: [],
}

