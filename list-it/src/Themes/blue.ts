import { ColorHues } from "@chakra-ui/react";

interface AppTheme {
  name: string;
  id: string;
  colors: {
    primary: ColorHues;
  };
}

const theme: AppTheme = {
  id: "blue",
  name: "Blue",
  colors: {
    primary: {
      50: "#EBF8FF",
      100: "#BEE3F8",
      200: "#90CDF4",
      300: "#63B3ED",
      400: "#4299E1",
      500: "#3182CE",
      600: "#2B6CB0",
      700: "#2C5282",
      800: "#2A4365",
      900: "#1A365D",
    },
    }
};

export default theme;