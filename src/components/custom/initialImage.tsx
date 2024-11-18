"use client";

import React from "react";
import NextImage from "next/image";
import { Image } from "@chakra-ui/react";

import { Box } from "@chakra-ui/react";
import { useTheme } from "next-themes";

export default function InitialImage() {
  const { resolvedTheme } = useTheme();
  return (
    <Box
      flex="2"
      overflowY="auto"
      p={0}
      position="relative"
      objectFit="cover"
      w="75vw"
      h="100vh"
      filter={`invert(${resolvedTheme === "light" ? "1" : "0"})`}
    >
      <Image asChild>
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
