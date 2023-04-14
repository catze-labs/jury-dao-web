/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/features/**/*.{js,ts,jsx,tsx}',
    './src/stories/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          default: '#4D94E7',
          100: '#006AE5',
          200: '#0053B4',
          300: '#003D84',
          400: '#092F5C',
        },
        secondary: {
          default: '#1DC1A4',
          100: '#00AC8D',
          200: '#019077',
        },
        gray: {
          light: '#F5F5F5',
          default: '#DCDCDC',
          100: '#C2C2C2',
          200: '#8D8D8D',
          300: '#545454',
          400: '#313131',
        },
        black: '#141414',
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',
      },
    },
  },
  plugins: [],
};
