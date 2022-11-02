module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  dark: "class",
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin'), require("daisyui")],
}