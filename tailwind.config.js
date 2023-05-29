/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
      colors: { 
        "orange":"#CF5D00",
        "white":"#FFF",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
    },
  }