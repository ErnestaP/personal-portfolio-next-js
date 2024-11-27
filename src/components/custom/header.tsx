"use client";

import React from "react";
import { usePathname } from "next/navigation";

import { HStack, Button } from "@chakra-ui/react";
import { ColorModeButton } from "@/components/ui/color-mode";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();
  const basePage = pathname.split("/")[1];
  const fontSize = {
    base: "16px",
    md: "md",
    lg: "lg",
    xl: "xl",
    "2xl": "2xl",
  };
  return (
    <HStack p={4} justify="flex-end">
      <Link href="/">
        <Button
          fontSize={fontSize}
          fontWeight="light"
          variant="plain"
          color={pathname == "/" ? "secondary" : "default"}
          _dark={{ color: pathname == "/" ? "#EFC946" : "default" }}
        >
          Home
        </Button>
      </Link>
      <Link href="/projects/professional">
        <Button
          fontSize={fontSize}
          fontWeight="light"
          variant="plain"
          color={basePage == "projects" ? "secondary" : "default"}
          _dark={{ color: basePage == "projects" ? "#EFC946" : "default" }}
        >
          Projects
        </Button>
      </Link>
      <Link href="/about/experience">
        <Button
          fontSize={fontSize}
          fontWeight="light"
          variant="plain"
          color={basePage == "about" ? "secondary" : "default"}
          _dark={{ color: basePage == "about" ? "#EFC946" : "default" }}
        >
          About Me
        </Button>
      </Link>
      <ColorModeButton />
    </HStack>
  );
}
