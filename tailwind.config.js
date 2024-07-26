/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '3rem',
          xl: '3rem',
        },
       
      },

      fontFamily: {
        'Gideon-Roman': ['Gideon-Roman',]
      },
      
      colors:{
        'primary': '#7B66FF',
        'secondary':'#5FBDFF',
      },
      fontFamily: {
        'Gideon-Roman': ['Gideon-Roman',]
      },
    },
  },
  plugins: [],
}

