"use client";

import React from "react";
import { usePathname } from "next/navigation";

import { VStack, Box, Text, HStack, Flex } from "@chakra-ui/react";
import { SideMenu } from "@/components/custom/sideMenu";
import { SideMenuConfigProps } from "@/utils/interfaces";

export default function ContentLayout(props: { children: React.ReactNode }) {
  const pathname = usePathname();
  const basePage = pathname.split("/")[1];

  const sideMenuConfig: SideMenuConfigProps = {
    projects: {
      title: "Projects",
      buttons: [
        {
          label: "Professional",
          href: "/projects/professional",
        },
        {
          label: "Personal",
          href: "/projects/personal",
        },
      ],
    },
    about: {
      title: "About Me",
      buttons: [
        {
          label: "Experience",
          href: "/about/experience",
        },
        {
          label: "Education",
          href: "/about/education",
        },
        {
          label: "Hobbies",
          href: "/about/hobbies",
        },
      ],
    },
  };
  const currentPage =
    basePage in sideMenuConfig ? sideMenuConfig[basePage] : null;
  return (
    <>
      {currentPage ? (
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
                  textAlign={"center"}
                  fontSize={{
                    base: "25px",
                    sm: "25px",
                    md: "30px",
                    lg: "30px",
                    xl: "35px",
                    "2xl": "40px",
                  }}
                  textDecoration="underline"
                >
                  {currentPage.title}
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
                <SideMenu buttons={currentPage.buttons} onlyButtons />
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
            ></Box>
          </HStack>
          <HStack height={"90%"} align={"start"}>
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
              <SideMenu buttons={currentPage.buttons} />
            </Box>
            <HStack
              flex={6}
              align={"start"}
              height={"100%"}
              overflowY="auto"
              paddingBottom={8}
              paddingRight={2}
              paddingLeft={2}
            >
              <VStack width={"-webkit-fill-available"}>{props.children}</VStack>
            </HStack>
          </HStack>
        </Flex>
      ) : (
        <>{props.children}</>
      )}
    </>
  );
}
