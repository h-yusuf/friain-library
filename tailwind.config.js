/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'     
],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
      laila: 'Laila',
      poppins: 'Poppins',
    },
    extend: {
      colors:{
        primary:"#61DAFB",
        background:"#040312"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

