/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "dark":"#081A51",
        "whitish":"rgba(255,255,255,0.18)",
        "sidebar":"#161618",
        "backgrao":"#181818"

      }
    },
  },
  plugins: [],
}

