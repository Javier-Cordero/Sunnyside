/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Softred': 'hsl(7, 99%, 70%)',
        'Yellow': 'hsl(51, 100%, 49%)',
        'Dark-desaturated-cyan': 'hsl(167, 40%, 24%)',
        'Darkblue': 'hsl(198, 62%, 26%)',
        'Darkmoderate': 'hsl(168, 34%, 41%)',
        'Very-dark-desaturated-blue': 'hsl(212, 27%, 19%)',
        'Very-dark-grayish-blue': 'hsl(213, 9%, 39%)',
        'Dark-grayish-blue': 'hsl(232, 10%, 55%)',
        'Grayishblue': 'hsl(210, 4%, 67%)',
        'White': 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        'Barlow': ["Barlow", 'sans-serif'],
        'Fraunces': ["Fraunces", 'serif']
      },
      screens:{
        'table': '700px',
        'desktop': '1440px',
      }
    },
  },
  plugins: [],
}

