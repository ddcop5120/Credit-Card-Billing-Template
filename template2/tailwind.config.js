const plugin = require("tailwindcss/plugin");
module.exports = {
  mode:'jit',
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'li': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
      'tablet': '768px',
      'laptop': '1440px',
      'desktop': '1920px',
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '20%': '20%',
      '16': '4rem',
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'tableBlue':'#ECF1FF',
    }),
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
    },
    extend: {
      colors: {
        //自定義色彩名稱
        belstarYellow: "#ffdb57",
        belstarRed: "#ff3860",
        belstarGreen: "#23cf60",
        belstarGray: "#828282",
        belstarFontBlue: "#034EBD",
        belstarFigureBlue: "#3A6DF2",
        title: "#737A87",
        font: "#6B7280",
        divider:"#E1E1E1"

      },
      gridTemplateRows: {
        // Simple 8 row grid
        8: 'repeat(8, minmax(0, 1fr))',
        30: 'repeat(30, minmax(0, 1fr))',

        // Complex site-specific row configuration
        layout: '200px minmax(900px, 1fr) 100px',
      },
      gridTemplateColumns: {
        // Simple 8 row grid
        8: 'repeat(8, minmax(0, 1fr))',
        30: 'repeat(30, minmax(0, 1fr))',

        // Complex site-specific row configuration
        layout: '200px minmax(900px, 1fr) 100px',
      },
      spacing: {
        '22': '5.5rem',
        '72': '18rem',
        '84': '21rem',
        '86': '21.5rem',
        '96': '24rem',
        '100': '25rem',
        '102': '25.5rem',
        '104': '26rem',
        '106': '26.5rem',
        '108': '27rem',
        '110': '27.5rem',
        '115': '28.75rem',
        '120': '30rem',
        '130': '32.5rem',
        '140': '35rem',
        '240': '60rem',
      }
    }
    
  },
  variants: {
    extend: {
      padding: ['responsive', 'hover'],
    }
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        //文字分散對齊
        ".text-dispersion": {
          textJustify: "inter-character",
          textAlignLast: "justify",
          textAlign: "text-justify"
        },
        //直向排列
        ".vertical": {
          writingMode: "vertical-rl"
        },
        //寬度20cm，A4為21cm，左右間距各留0.5cm
        ".w-20cm": {
          width: "20cm"
        }
      };
      //responsive，hover都加上自定義css
      addUtilities(newUtilities, ["responsive", "hover"]);
    })
  ]
};
