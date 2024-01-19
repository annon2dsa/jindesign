/*

? First, let's import the essentials - createTheme

*/

import { createTheme, ThemeOptions } from "@mui/material/styles";

/*

Our theme is going to use custom breakpoints and the @mui/material/styles module needs to be augmented to accommodate the new types we are going to define.

*/

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xxs: true;
    xs: true;
    xsPlus: true;
    sm: true;
    smPlus: true;
    sm822: true;
    sm860: true;
    sm910: true;
    md: true;
    md1190: true;
    md1220: true;
    lg: true;
    lgPlus: true;
    xl: true;
    xxl: true;
    xxxl: true;
  }
}

const Theme: ThemeOptions = {
  typography: {
    fontFamily: ["Syne", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#8ED6FF",
      light: "#ff9d62",
      dark: "#be3b03",
    },
    secondary: {
      main: "#FFFFFF",
      light: "#FFFFFF",
      dark: "#CCCCCC",
    },
    error: {
      main: "#F44336",
      light: "#FF7961",
      dark: "#BA000d",
    },
    background: {
      default: "#161C1F",
    },
    text: {
      primary: "#000000",
    },
  },
  breakpoints: {
    values: {
      xxs: 0,
      xs: 280.05,
      xsPlus: 540,
      sm: 600,
      smPlus: 768,
      sm822: 822,
      sm860: 860,
      sm910: 910,
      md: 960,
      md1190: 1190,
      md1220: 1220,
      lg: 1280,
      lgPlus: 1366,
      xl: 1920,
      xxl: 2560,
      xxxl: 3840,
    },
  },
  components: {
    MuiFormLabel: {
      styleOverrides: {
        asterisk: {
          display: "none",
        },
      },
    },
  },
};

export default createTheme(Theme);
