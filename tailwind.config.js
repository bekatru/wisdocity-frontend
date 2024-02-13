/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'k-pulse-audio-circle': {
          '0%': {'box-shadow': '0 0 0 0px rgba(233, 214, 242, 1)'},
          '100%': {'box-shadow': '0 0 0 20px rgba(233, 214, 242, 0)'}
        },
      },
      animation: {
        'pulse-audio-circle': 'k-pulse-audio-circle 2s infinite'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

