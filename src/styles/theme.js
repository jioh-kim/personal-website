const { colors, fonts } = require("../../config")

export const sharedPreferences = {
  fonts: fonts,
  breakpoints: {
    xs: "480px",
    sm: "768px",
    md: "992px",
    lg: "1200px",
  },
  borderRadius: "1rem",
  pageWidth: "50rem",
  headerHeight: "6rem",
  footerHeight: "7.5rem",
}

export const lightTheme = {
  ...sharedPreferences,
  colors: colors.lightTheme,
}

export const darkTheme = {
  ...sharedPreferences,
  colors: colors.darkTheme,
}
