declare module '@emotion/react' {
    export interface Theme {
    light: {
      colors : {
        primary: string;
        secondary: string;
      };
    }
    dark: {
        colors : {
            primary: string;
            secondary: string;
      };
    }
  }
}

declare module App {
  type Theme = { colors: { primary: string } };
}