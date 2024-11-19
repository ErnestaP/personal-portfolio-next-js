import {
  createSystem,
  defaultConfig,
  defineConfig,
  defineStyle,
} from "@chakra-ui/react";
import { MuseoModerno, Poppins, Khula } from "next/font/google";

const responsiveFontSizes = {
  smallTitle: ["2rem", "2.4rem", "3rem"], // [base, md, lg]
  mediumTitle: ["2.5rem", "3.125rem", "3.5rem"], // [base, md, lg]
  largeTitle: ["3rem", "3.75rem", "4.5rem"], // [base, md, lg]
  extraLargeTitle: ["4rem", "5rem", "6rem"], // [base, md, lg]
  extraExtraLargeTitle: ["6rem", "7.5rem", "9rem"], // [base, md, lg]
};

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
});

export const system = createSystem(defaultConfig, customConfig);
