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
      "2xl": "1456px"
    },
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans]
      },
      gridTemplateColumns: {
        footer: "3fr 2fr",
        subfooter: "2fr 1fr"
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.700"),
            a: {
              color: theme("colors.blue.500"),
              "&:hover": {
                color: theme("colors.blue.700")
              },
              code: { color: theme("colors.blue.400") }
            },
            "h1,h2,h3,h4": {
              "scroll-margin-top": defaultTheme.spacing[32]
            },
            code: { color: theme("colors.pink.500") },
            "blockquote p:first-of-type::before": false,
            "blockquote p:last-of-type::after": false
          }
        },
        dark: {
          css: {
            color: theme("colors.gray.300"),
            a: {
              color: theme("colors.blue.400"),
              "&:hover": {
                color: theme("colors.blue.600")
              },
              code: { color: theme("colors.blue.400") }
            },
            blockquote: {
              borderLeftColor: theme("colors.gray.700"),
              color: theme("colors.gray.300")
            },
            "h1,h2,h3,h4": {
              color: theme("colors.gray.100"),
              "scroll-margin-top": defaultTheme.spacing[32]
            },
            hr: { borderColor: theme("colors.gray.700") },
            ol: {
              li: {
                "&:before": { color: theme("colors.gray.500") }
              }
            },
            ul: {
              li: {
                "&:before": { backgroundColor: theme("colors.gray.500") }
              }
            },
            strong: { color: theme("colors.gray.300") },
            thead: {
              color: theme("colors.gray.100")
            },
            tbody: {
              tr: {
                borderBottomColor: theme("colors.gray.700")
              }
            }
          }
        }
      })
    }
  },
  variants: {
    typography: ["dark"]
  },
  plugins: [require("@tailwindcss/typography")]
}
