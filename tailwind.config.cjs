const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.svelte",
    "./src/**/*.md",
    "./src/contents/*.ts",
    "./svelte.config.js",
    "./src/lib/utils/remark-embed-video.js",
    "./src/lib/utils/remark-link-with-image-as-only-child.js",
  ],
  // we have to safelist these because there are dynamically added to the dom via JS and for prod tailwind ships the classes via analyzing the markup without doing so these won't make there way to prod unless used somewhere on the markup.
  safelist: ["overflow-y-hidden", "mr-4"],
  theme: {
    extend: {
      listStyleType: {
        alpha: "upper-alpha",
        roman: "upper-roman",
      },
      screens: {
        lgx: "1140px",
        "1/2xl": "1442px",
      },
      backgroundImage: {
        "gitpod-kumquat-gradient":
          "linear-gradient(137.41deg, #FFAD33 14.37%, #FF8A00 91.32%)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      colors: {
        black: "var(--black)",
        "dark-grey": "var(--dark-grey)",
        "light-grey": "var(--light-grey)",
        "link-grey": "var(--link-grey)",
        divider: "var(--divider)",
        "sand-dark": "var(--sand-dark)",
        "sand-light": "var(--sand-light)",
        "off-white": "var(--off-white)",
        white: "var(--white)",
        "brand-hover": "var(--brand-hover)",
        "black-hover": "var(--black-hover)",

        gray: {
          900: "var(--black)",
          800: "var(--dark-grey)",
          700: "var(--light-grey)",
          400: "var(--divider)",
          300: "var(--sand-dark)",
          200: "var(--sand-light)",
          100: "var(--off-white)",
        },
        orange: {
          900: "var(--brand-almost-ripe)",
          800: "var(--brand-ripe)",
          700: "var(--brand-light)",
        },
        pink: {
          900: "var(--salmon)",
        },
      },
      fontSize: {
        h1: "var(--h1)",
        h2: "var(--h2)",
        h3: "var(--h3)",
        h4: "var(--h4)",
        h5: "var(--h5)",
        h6: "var(--h6)",
        "p-large": "var(--p-large)",
        "p-medium": "var(--p-medium)",
        "p-small": "var(--p-small)",
        "p-xsmall": "var(--p-xsmall)",
        "p-footer": "var(--p-footer)",
        "btn-small": "var(--btn-small)",
        "fine-print": "var(--fine-print)",
      },
      lineHeight: {
        "x-small": "var(--x-small)",
      },
      maxWidth: {
        row: "var(--row-max-width)",
        "container-normal": "var(--container-normal)",
      },
      spacing: {
        huge: "var(--huge)",
        "x-huge": "var(--x-huge)",
        "xx-large": "var(--xx-large)",
        "x-large": "var(--x-large)",
        large: "var(--large)",
        medium: "var(--medium)",
        small: "var(--small)",
        "x-small": "var(--x-small)",
        "xx-small": "var(--xx-small)",
        micro: "var(--micro)",
        macro: "var(--macro)",
      },
      boxShadow: {
        normal: "var(--shadow)",
        light: "var(--shadow-light)",
        light1: "var(--shadow-light-1)",
        medium: "var(--shadow-medium)",
        brand: "var(--shadow-brand)",
      },
      zIndex: {
        "-10": "-10",
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: "var(--link-grey)",
            },
            blockquote: {
              fontStyle: "normal",
              margin: "2rem 0",
              padding: "1.5rem",
              borderLeftWidth: "0",
              borderRadius: "0.75rem",
              background: "var(--brand-light)",
              code: {
                background: "var(--brand-almost-ripe)",
              },
              p: {
                margin: "0",
                "&::after": {
                  content: "none !important",
                },
                "&::before": {
                  content: "none !important",
                },
              },
            },
            code: {
              color: "var(--dark-grey)",
              fontWeight: "100",
              fontSize: "1em",
              "&::after": {
                content: "none !important",
              },
              "&::before": {
                content: "none !important",
              },
            },
            h1: {
              fontSize: "var(--h3)",
              fontWeight: "700",
              marginBottom: "var(--xx-small)",
            },
            h2: {
              code: {
                fontWeight: "700 !important",
              },
              fontSize: "var(--h4)",
              fontWeight: "700",
              marginBottom: "var(--xx-small)",
              marginTop: "var(--medium)",
            },
            h3: {
              code: {
                fontWeight: "700 !important",
              },
              fontSize: "var(--h5)",
              fontWeight: "700",
              marginBottom: "var(--xx-small)",
              em: {
                fontStyle: "normal",
              },
            },
            h4: {
              fontSize: "var(--p-large)",
              marginBottom: "var(--macro)",
            },
            iframe: {
              maxWidth: "100%",
              marginTop: "var(--micro)",
            },
            img: {
              margin: "0",
            },
            li: {
              fontSize: "var(--p-medium)",
              marginBottom: "0", // overwrite _forms.scss
              "&::marker": {
                color: "var(--brand-ripe) !important",
              },
              p: {
                margin: "0",
              },
            },
            ol: {
              listStylePosition: "inside",
              listStyleType: "decimal",
              margin: "var(--micro) 0",
              paddingLeft: "0",
              li: {
                p: {
                  display: "inline",
                },
                paddingLeft: "0",
              },
            },
            p: {
              color: "var(--dark-grey)",
              fontSize: "var(--p-medium)",
              strong: {
                color: "var(--dark-grey)",
              },
            },
            pre: {
              display: "block",
              overflow: "none",
              margin: "var(--micro) 0",
              padding: "1.25rem 1.5rem",
              borderRadius: "0.75rem",
              background: "var(--sand-dark)",
            },
            strong: {
              code: {
                fontWeight: "bolder !important",
              },
            },
            table: {
              width: "100%",
              margin: "var(--micro) 0",
              overflow: "hidden",
              borderRadius: "1rem",
              fontSize: "var(--p-small)",
              "@media (min-width: 768px)": {
                minWidth: "31.25rem",
              },
            },
            tbody: {
              background: "var(--off-white)",
            },
            td: {
              lineHeight: "150%",
              marginTop: "0.75rem",
              marginRight: "1.5rem",
              marginBottom: "0.75rem",
              marginLeft: "1.5rem",
              padding: "0.75rem 1.5rem",
              textAlign: "left",
              verticalAlign: "top",
              "&:first-child": {
                code: {
                  color: "var(--black)",
                  fontWeight: "700",
                },
              },
            },
            th: {
              fontWeight: "400",
              marginTop: "0.75rem",
              marginRight: "1.5rem",
              marginBottom: "0.75rem",
              marginLeft: "1.5rem",
              padding: "0.75rem 1.5rem",
              textAlign: "left",
            },
            thead: {
              background: "var(--sand-dark)",
            },
            ul: {
              listStyle: "none",
              margin: "var(--micro) 0",
              paddingLeft: "var(--xx-small)",
              "@media (min-width: 768px)": {
                paddingLeft: "var(--x-small)",
              },
              "> li": {
                marginBottom: "0",
                position: "relative",
                "&::before": {
                  content: "'—'",
                  position: "absolute",
                  left: "calc(var(--xx-small) * -1)",
                  color: "var(--brand-ripe)",
                  "@media (min-width: 768px)": {
                    left: "calc(var(--x-small) * -1)",
                  },
                },
              },
            },
          },
        },
      },
    },
    minHeight: {
      13: "3.375rem",
      ...defaultTheme.minHeight,
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
