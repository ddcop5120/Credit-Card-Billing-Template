module.exports = {
  purge: [
  ],
  darkMode: false, 
  theme: {
    extend: {
      maxWidth:{
        '360': '90rem'
      },
      width:{
        '600':'37rem'
      },
      screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    rotate: ['active', 'group-hover'],
  },
  variants: {
    input:['checked']
  },
  plugins: [
  
  ]
}
}

