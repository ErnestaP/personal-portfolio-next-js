"use client";
import React from "react";

import { VStack, Box, Button } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

export default function SideMenu() {
  const pathname = usePathname();
  const currentPage = pathname.split("/").slice(-1)[0];
  const { resolvedTheme } = useTheme();
  const pictureSrc =
    resolvedTheme === "light"
      ? "url('/SideFaceInvert.png')"
      : "url('/SideFace.png')";
  const lightOrDarkBlend =
    resolvedTheme === "light"
      ? "rgba(255, 255, 255, 0.5)"
      : "rgba(0, 0, 0, 0.9)";
  return (
    <VStack
      backgroundImage={pictureSrc}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundColor={lightOrDarkBlend}
      backgroundBlendMode="overlay"
      backgroundSize="cover"
      gap={5}
      padding={4}
      height={"100%"}
      width="auto"
      borderRadius={8}
    >
      <Box>
        <Link href="/projects/professional">
          <Button
            fontSize={{
              sm: "sm",
              md: "md",
              lg: "lg",
              xl: "xl",
              "2xl": "2xl",
            }}
            fontWeight="light"
            variant="plain"
            color={currentPage == "professional" ? "secondary" : "default"}
            _dark={{
              color: currentPage == "professional" ? "#EFC946" : "default",
            }}
          >
            Professional
          </Button>
        </Link>
      </Box>
      <Box>
        <Link href="/projects/personal">
          <Button
            fontSize={{
              sm: "sm",
              md: "md",
              lg: "lg",
              xl: "xl",
              "2xl": "2xl",
            }}
            fontWeight="light"
            variant="plain"
            color={currentPage == "personal" ? "secondary" : "default"}
            _dark={{ color: currentPage == "personal" ? "#EFC946" : "default" }}
          >
            Personal
          </Button>
        </Link>
      </Box>
    </VStack>
  );
}
