/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {},
    colors: {
      'custom-red': '#FF444A',
      'custom-black': '#0B0B0B',
    }
  },
  plugins: [require("daisyui")],
}

