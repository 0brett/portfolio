const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: "class", // false or 'media' or 'class'
  theme: {
    screens: {
      xs: "490px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1496px"
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans]
      },
      gridTemplateColumns: {
        footer: "3fr 2fr",
        subfooter: "2fr 1fr"
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.900"),
            a: {
              color: theme("colors.blue.600"),
              "&:hover": {
                textDecoration: "none"
              }
            },
            "h1,h2,h3,h4,h5,h6": {
              fontWeight: 900,
              "scroll-margin-top": defaultTheme.spacing[32]
            },
            // p: {
            // fontFamily: theme("fontFamily.serif").join(", ")
            // },
            strong: { fontWeight: 700 }
            // "blockquote p:first-of-type::before": false,
            // "blockquote p:last-of-type::after": false
          }
        },
        dark: {
          css: {
            color: theme("colors.gray.100"),
            a: {
              color: theme("colors.blue.300")
            },
            "h1,h2,h3,h4,h5,h6": {
              color: theme("colors.gray.100")
              // "scroll-margin-top": defaultTheme.spacing[32]
            },
            strong: { color: theme("colors.gray.200") }
          }
        }
      })
    }
  },
  variants: {
    typography: ["responsive", "dark"]
  },
  plugins: [require("@tailwindcss/typography")]
}
