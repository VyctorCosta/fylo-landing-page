import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  Colors: {
    Primary: {
      emailBackground: "hsl(217, 28%, 15%)",
      footerBackground: "hsl(216, 53%, 9%)",
      initialBackground: "hsl(222, 26.3%, 14.9%)",
      mainBackground: "hsl(218, 28.4%, 13.1%)",
      testimonialsBackground: "hsl(219, 30%, 18%)",
    },
    Accent: {
      // hsl(176, 68%, 64%)
      cyan: "hsl(191, 59%, 50%)",
      blue: "hsl(198, 60%, 50%)",
      lightRed: "hsl(0, 100%, 63%)",
    },
    Neutral: {
      white: "hsl(0, 0%, 100%)",
    },
  },
  Typography: {
    Body: {
      fontSize: "1.4rem",
      fontFamily: "'Open Sans', sans-serif",
      fontWeightRegular: 400,
      fontWeightBold: 700,
    },
    Headings: {
      fontFamily: "'Raleway', sans-serif",
      fontWeightRegular: 400,
      fontWeightBold: 700,
    },
  },
};

export default theme;
