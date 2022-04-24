import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    Colors: {
      Primary: {
        emailBackground: string;
        footerBackground: string;
        mainBackground: string;
        testimonialsBackground: string;
      };
      Accent: {
        cyan: string;
        blue: string;
        lightRed: string;
      };
      Neutral: {
        white: string;
      };
    };
    Typography: {
      Body: {
        fontSize: string;
        fontFamily: string;
        fontWeightRegular: number;
        fontWeightBold: number;
      };
      Headings: {
        fontFamily: string;
        fontWeightRegular: number;
        fontWeightBold: number;
      };
    };
  }
}
