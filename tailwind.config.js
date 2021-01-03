const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.tsx'],
  darkMode: false,
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      blk: '#171717',
      blk1: '#262626',
      blk2: '#404040',
      blk3: '#525252',
      lite1: '#F9F9F9',
      lite2: '#F5F5F5',
      lite3: '#E5E5E5',
      primary: {
        bg: '#EDE9FE',
        DEFAULT: '#7C3AED'
      }
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
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
