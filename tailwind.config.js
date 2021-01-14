const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.tsx'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
        brand: colors.indigo
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans]
      },
      margin: {
        '-4.5': '-1.125rem',
        '-5.5': '-1.375rem'
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              '&:hover': {
                textDecoration: 'none'
              }
            }
          }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
