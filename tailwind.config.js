/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      screens:{
        'sm': '300px',
        'lg': '450px'
        
      }
    }
  },
  variants: {
   extends: {
    display:['group-focus']
   },
  },
  plugins: [],
}

