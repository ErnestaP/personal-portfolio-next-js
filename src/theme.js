import {
  createSystem,
  defaultConfig,
  defineConfig,
  defineStyle,
} from "@chakra-ui/react";
import { MuseoModerno, Poppins, Khula } from "next/font/google";

const museoModerno = MuseoModerno({
  subsets: ["latin"],
  display: "swap",
  weight: ["200"],
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100"],
});

const khula = Khula({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

const buttonTheme = defineStyle({
  baseStyle: {
    _hover: {
      color: "red.500",
    },
  },
});

const customConfig = defineConfig({
  globalCss: {
    body: {
      fontFamily: museoModerno.style.fontFamily,
      backgroundColor: "#ebedea",
      color: "#000",
      _dark: {
        backgroundColor: "#000",
        color: "white",
      },
    },
  },
  fonts: {
    heading: museoModerno.style.fontFamily,
    body: museoModerno.style.fontFamily,
  },
  theme: {
    components: {
      Button: buttonTheme,
    },
    tokens: {
      colors: {
        primary: { value: "#FFF" },
        secondary: { value: "#113bc3" },
        active: { value: "#EFC946" },
      },
      fonts: {
        initialTitle: { value: poppins.style.fontFamily },
        cardFont: { value: khula.style.fontFamily },
      },
      fontSizes: {
        smallTitle: "2.4rem",
        mediumTitle: "3.125rem",
        largeTitle: "3.75rem",
        extraLargeTitle: "5rem",
        extraExtraLargeTitle: "7.5rem",
      },
    },
  },
  components: {
    Button: buttonTheme,
  },
});

export const system = createSystem(defaultConfig, customConfig);
