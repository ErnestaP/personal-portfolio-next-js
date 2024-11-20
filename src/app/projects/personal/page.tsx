"use client";

import React from "react";

import { Box, HStack } from "@chakra-ui/react";
import ProjectCard from "@/components/custom/projectCard";
import { examplesPersonal } from "@/utils/data";
import ColorMap from "@/components/custom/colorMap";

export default function Personal() {
  return (
    <>
      {examplesPersonal.map((example: ProjectCardProps) => (
        <Box key={example.title} flex={1} width={"100%"}>
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
        p={2}
        paddingBottom={10}
        alignItems={"baseline"}
        alignSelf={"baseline"}
      >
        <ColorMap />
      </HStack>
    </>
  );
}
