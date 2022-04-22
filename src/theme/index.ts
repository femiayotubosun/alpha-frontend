import "@fontsource/tomorrow/500.css";
import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `Khula, ${base.fonts?.heading}`,
    body: `Open Sans, ${base.fonts?.body}`,
  },

  colors: {
    "progress-green": {
      100: "#84E8F4",
      200: "#84E8F4",
      300: "#84E8F4",
      400: "#84E8F4",
      500: "#84E8F4",
      600: "#84E8F4",
      700: "#84E8F4",
      800: "#84E8F4",
      900: "#84E8F4",
    },
    "progress-purple": {
      100: "#51459E",
      200: "#51459E",
      300: "#51459E",
      400: "#51459E",
      500: "#51459E",
      600: "#51459E",
      700: "#51459E",
      800: "#51459E",
      900: "#51459E",
    },
    "progress-black": {
      100: "#1B1C31",
      200: "#1B1C31",
      300: "#1B1C31",
      400: "#1B1C31",
      500: "#1B1C31",
      600: "#1B1C31",
      700: "#1B1C31",
      800: "#1B1C31",
      900: "#1B1C31",
    },
  },
  components: {
    Heading: {
      variants: {
        "stat-header": {
          fontFamily: "Tomorrow, sans-serif",
        },
      },
    },
  },
});

export default theme;
