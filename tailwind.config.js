/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // safelist: [
  //   'bg-[#0052FF26]',
  //   'bg-[#FF444A26]',
  //   'bg-[#79C23F26]',
  //   'bg-[#F8714726]',

  //   'bg-[#0052FF50]',
  //   'bg-[#FF444A33]',
  //   'bg-[#79C23F33]',
  //   'bg-[#F8714733]',

  //   'text-[#0052FF]',
  //   'text-[#FF444A]',
  //   'text-[#79C23F]',
  //   'text-[#F87147]',

  // ],
  theme: {
    extend: {},
    colors: {
      'custom-red': '#FF444A',
      'custom-black': '#0B0B0B',
    }
  },
  plugins: [require("daisyui")],
}

