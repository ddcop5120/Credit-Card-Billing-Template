module.exports = {
  purge: [
    // './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './src/**/*.html',
    './src/**/*.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth:{
        '360': '90rem'
      },
      width: {
        '42': '10.5rem',
        '192': '48rem'
      },
      height: {
        '15': '3.75rem'
      },
      flex:{
        '3': '3 3 0%',
        '4': '4 4 0%',
        '8': '8 8 0%',
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
