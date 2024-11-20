"use client";
import React from "react";

import { VStack, Box, Button } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

export function SideMenuButtons(props: { buttons: SideMenuButtonsProps[] }) {
  const pathname = usePathname();

  const fontSize = {
    base: "16px",
    md: "md",
    lg: "lg",
    xl: "xl",
    "2xl": "2xl",
  };
  return (
    <>
      {props.buttons.map((button) => (
        <Box>
          <Link href={button.href}>
            <Button
              fontSize={fontSize}
              fontWeight="light"
              variant="plain"
              color={pathname == button.href ? "secondary" : "default"}
              _dark={{
                color: pathname == button.href ? "#EFC946" : "default",
              }}
            >
              {button.label}
            </Button>
          </Link>
        </Box>
      ))}
    </>
  );
}

export function SideMenu(props: { buttons: SideMenuButtonsProps[] }) {
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
      gap={{ base: "3", md: "3", lg: "5", xl: "5", "2xl": "5" }}
      padding={4}
      height={"100%"}
      width="auto"
      borderRadius={8}
    >
      <SideMenuButtons buttons={props.buttons} />
    </VStack>
  );
}
