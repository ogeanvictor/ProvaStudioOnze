/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        blueGreen: '#224957',
        blueGreenDark: '#346E83',
        white: '#FFF',
        green: '#20DF7F',
        greenDark: '#19B366',
      },
      width: {
        grid: '1200px'
      }
    }
  },
  plugins: [],
}

