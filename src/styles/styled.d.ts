import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      disabled: string;
      white: string;
      black: string;
      blackLight: string;
      blackLighter: string;
      grey: string;
      grey2: string;
      border: string;
      borderGray: string;
      shadow01: string;
      shadow02: string;
      red: string;
    };
  }
}
