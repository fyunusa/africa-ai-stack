/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f7fa',
          100: '#eaeef4',
          200: '#d0dbe7',
          300: '#a7bdd3',
          400: '#7799ba',
          500: '#567ba3',
          600: '#426189',
          700: '#364f6f',
          800: '#2f435d',
          900: '#2b3a4f',
        },
        secondary: {
          50: '#faf9f7',
          100: '#f3f1ec',
          200: '#e4dfd4',
          300: '#d0c6b4',
          400: '#b9a88f',
          500: '#a89073',
          600: '#9a7f67',
          700: '#816957',
          800: '#69564a',
          900: '#56473d',
        },
      },
    },
  },
  plugins: [],
}
