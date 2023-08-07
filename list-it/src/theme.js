import { extendTheme } from "@chakra-ui/react";

import red from "./Themes/red.ts";
import green from "./Themes/green.ts"

const theme = {
  config: {
    initialColorMode: "system", // see https://chakra-ui.com/docs/styled-system/color-mode
    useSystemColorMode: true,
  },
  colors: red.colors,
  semanticTokens: {
    colors: {
      button: {
        default: "primary.200",
        _dark: "primary.900",
      },
      },
    },
};

export default extendTheme(theme);