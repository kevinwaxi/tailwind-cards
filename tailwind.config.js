const colors = require('tailwindcss/colors')
module.exports = {
  purge:['./*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Inter', 'system-ui', 'sans-serif'],
      body: ['Inter', 'system-ui', 'sans-serif'],
    },
    extend: {
      colors:{
        fuchsia:colors.fuchsia,
        cyan:colors.cyan,
        emerald:colors.emerald,
        teal:colors.teal,
        orange:colors.orange,
      },
      maxHeight:{
        116:"29rem", /*464px*/
        125:"31.25rem", /*464px*/
        140:"35rem", /*464px*/
      },
      height:{
        116:"29rem", /*464px*/
        125:"31.25rem", /*464px*/
        140:"35rem", /*464px*/
      },
      minHeight:{
        9:"4.5rem", /*464px*/
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
      opacity: ["group-hover"],
      translate: ["group-hover"],
      transform: ["group-hover"],
    },
  },
  plugins: [],
}
