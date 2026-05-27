/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          blue: '#0099FF',
          pink: '#FF00FF',
          purple: '#2D0099',
          cyan: '#00FFFF',
        },
        dark: {
          900: '#0A0E27',
          800: '#1A2047',
          700: '#252B5C',
        },
      },
      fontFamily: {
        display: ['Space Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
        mono: ['Courier Prime', 'monospace'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { textShadow: '0 0 20px currentColor' },
          '50%': { textShadow: '0 0 40px currentColor' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
