import React from "react";
import NextImage from "next/image";
import { Image } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

export default function InitialImage() {
  return (
    <Box
      flex="2"
      p={0}
      position="relative"
      objectFit="cover"
      w="75vw"
      h="90vh"
      filter={{ base: "invert(1)", _dark: "invert(0)" }}
    >
      <Image asChild alt="Picture of the author">
        <NextImage
          quality={100}
          priority
          src={"/cubist_style_woman.png"}
          fill={true}
          alt="Picture of the author"
        />
      </Image>
    </Box>
  );
}
