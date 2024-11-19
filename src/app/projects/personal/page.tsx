"use client";
import React from "react";

import { VStack, Stack, Flex, Box, Text, HStack } from "@chakra-ui/react";
import SideMenu from "@/components/custom/sideMenu";
import ProjectCard from "@/components/custom/projectCard";
import { groupColorMap } from "@/utils/colorsMap";
import { Tag } from "@/components/ui/tag";

//propotionally have to be flex={1} flex={6}
export default function Personal() {
  const loading = true;
  const examples: ProjectCardProps[] = [
    {
      title: "Portfolio",
      role: "",
      skillSet: {
        "Frontend Development": {
          description: "Need to write one",
          skills: ["NextJS", "Chakra UI", "TypeScript"],
          gits: [],
        },
      },
    },
    {
      title: "Simple List",
      role: "",
      skillSet: {
        "FastApi Backend": {
          description: "Need to write one",
          skills: ["FastApi", "PostgreSQL", "Python", "Docker"],
          gits: [],
        },
        "Frontend Development": {
          description: "Need to write one",
          skills: ["Re", "PostgreSQL", "Python", "Docker"],
          gits: [],
        },
      },
    },
    {
      title: "Game with VueJS",
      role: "",
      skillSet: {
        "Frontend Development": {
          description: "Need to write one",
          skills: ["VueJS"],
          gits: [],
        },
        "Backend Development": {
          description: "Need to write one",
          skills: ["FastApi"],
          gits: [],
        },
      },
    },
  ];

  return (
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
            {/* and here the baseline */}
            {examples.map((example: ProjectCardProps) => (
              <Box key={example.title} flex={1} width={"100%"}>
                {/* only one part that is differetnt from professional projects ^^^ */}
                <ProjectCard
                  title={example.title}
                  role={example.role}
                  skillSet={example.skillSet}
                />
              </Box>
            ))}
            <HStack
              flex={1}
              gap={4}
              p={4}
              alignItems={"baseline"}
              alignSelf={"baseline"}
            >
              <Flex
                direction={{
                  base: "column",
                  sm: "column",
                  md: "column",
                  lg: "row",
                  xl: "row",
                  "2xl": "row",
                }}
                gap={4}
              >
                {Object.keys(groupColorMap).map((group) => (
                  <HStack>
                    <Stack key={group} align={"center"}>
                      <Tag size="sm" colorPalette={groupColorMap[group]}>
                        #
                      </Tag>
                    </Stack>
                    <Box>
                      <Text fontSize="sm">{group}</Text>
                    </Box>
                  </HStack>
                ))}
              </Flex>
            </HStack>
          </VStack>
        </HStack>
      </HStack>
    </Flex>
  );
}
