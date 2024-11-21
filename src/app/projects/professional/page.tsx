"use client";
import React from "react";

import { Box, HStack } from "@chakra-ui/react";
import ProjectCard from "@/components/custom/projectCard";
import ColorMap from "@/components/custom/colorMap";
import { examplesProfessional } from "@/utils/data";

export default function Professional() {
  return (
    <>
      <HStack
        flex={1}
        gap={4}
        p={2}
        paddingBottom={4}
        alignItems={"baseline"}
        alignSelf={"baseline"}
      >
        <ColorMap />
      </HStack>
      {examplesProfessional.map((example: ProjectCardProps) => (
        <Box key={example.title}>
          <ProjectCard
            title={example.title}
            role={example.role}
            skillSet={example.skillSet}
          />
        </Box>
      ))}
    </>
  );
}
