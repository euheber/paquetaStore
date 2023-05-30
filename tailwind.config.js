/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
      colors: { 
        "orange":"#CF5D00",
        "yellowish":"#FFCD29",
        "white":"#FFF",
        "shadeblack":"#383838",
        "grandientOne":" #F99500",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
    },
  }