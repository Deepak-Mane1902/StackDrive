// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        sm: '1px 1px 2px rgba(0,0,0,0.5)',
        DEFAULT: '2px 2px 4px rgba(0,0,0,0.6)',
        lg: '3px 3px 6px rgba(0,0,0,0.7)',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
}
