"use client";
import React from "react";
import { usePathname } from "next/navigation";

import { VStack, Stack, Box, Text, HStack, Flex } from "@chakra-ui/react";
import { SideMenu, SideMenuButtons } from "@/components/custom/sideMenu";
import ProjectCard from "@/components/custom/projectCard";
import ColorMap from "@/components/custom/colorMap";
import { examplesProfessional } from "@/utils/data";

export default function ContentLayout(props: { children: React.ReactNode }) {
  const pathname = usePathname();
  const basePage = pathname.split("/")[1];

  return (
    <>
      {basePage == "projects" ? (
        <Flex gap={4} flexDir="column" width={"100%"} alignItems={"stretch"}>
          <HStack
            align={{
              base: "center",
              sm: "center",
              md: "center",
              lg: "start",
              xl: "start",
              "2xl": "start",
            }}
          >
            <VStack flex={1} align="center">
              <Box>
                <Text
                  fontSize={{
                    base: "30px",
                    sm: "30px",
                    md: "30px",
                    lg: "40px",
                    xl: "40px",
                    "2xl": "40px",
                  }}
                  textDecoration="underline"
                >
                  PROJECTS
                </Text>
              </Box>
              <HStack
                display={{
                  base: "flex",
                  sm: "flex",
                  md: "none",
                  lg: "none",
                  xl: "none",
                  "2xl": "none",
                }}
              >
                <SideMenuButtons />
              </HStack>
            </VStack>
            <Box
              flex={6}
              display={{
                base: "none",
                sm: "none",
                md: "block",
                lg: "block",
                xl: "block",
                "2xl": "block",
              }}
            >
              Filler
            </Box>
          </HStack>
          <HStack height={"100%"} align={"baseline"} p={4}>
            <Box
              display={{
                base: "none",
                sm: "none",
                md: "block",
                lg: "block",
                xl: "block",
                "2xl": "block",
              }}
              flex={1}
              height={"100%"}
            >
              <SideMenu />
            </Box>
            <HStack flex={6} align={"start"} height={"90%"} overflowY="auto">
              <VStack width={"-webkit-fill-available"}>
                {props.children}
                <HStack
                  flex={1}
                  gap={4}
                  p={2}
                  paddingBottom={10}
                  alignItems={"baseline"}
                  alignSelf={"baseline"}
                >
                  <ColorMap />
                </HStack>
              </VStack>
            </HStack>
          </HStack>
        </Flex>
      ) : (
        <>{props.children}</>
      )}
    </>
  );
}
