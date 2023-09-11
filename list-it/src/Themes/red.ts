import { ColorHues } from "@chakra-ui/react";

interface AppTheme {
  name: string;
  id: string;
  colors: {
    primary: ColorHues;
  };
}

const red: AppTheme = {
  id: "red",
  name: "Red",
  colors: {
    primary: {
      50: "#FFF5F5",
      100: "#FED7D7",
      200: "#FEB2B2",
      300: "#FC8181",
      400: "#F56565",
      500: "#E53E3E",
      600: "#C53030",
      700: "#9B2C2C",
      800: "#822727",
      900: "#63171B",
    },
    }
};

export default red;