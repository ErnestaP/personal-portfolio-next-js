"use client";

import React from "react";
import { usePathname } from "next/navigation";

import { HStack, Button } from "@chakra-ui/react";
import { ColorModeButton } from "@/components/ui/color-mode";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <HStack p={4} justify="flex-end">
      <Link href="/">
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
          color={pathname == "/" ? "secondary" : "default"}
          _dark={{ color: pathname == "/" ? "#EFC946" : "default" }}
        >
          Home
        </Button>
      </Link>
      <Link href="/projects">
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
          color={pathname == "/projects" ? "secondary" : "default"}
          _dark={{ color: pathname == "/projects" ? "#EFC946" : "default" }}
        >
          Projects
        </Button>
      </Link>
      <Link href="/about">
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
          color={pathname == "/about" ? "secondary" : "default"}
          _dark={{ color: pathname == "/about" ? "#EFC946" : "default" }}
        >
          About Me
        </Button>
      </Link>
      <ColorModeButton />
    </HStack>
  );
}
