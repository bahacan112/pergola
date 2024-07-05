/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/*.{html,js}","./src/partials/*.{html,js}","./src/partials/components/*.{html,js}","./src/partials/pages/*.{html,js}","./node_modules/tw-elements/js/**/*.js"],
  theme: {
    fontFamily:{
      bona : ["Bona Nova SC","sans-serif"], 
      futura : ["Futura PT Light", "sans-serif"]
    },
    extend: {},
  },
  plugins: [require("tw-elements/plugin.cjs")],
  darkMode: 'class',
}

