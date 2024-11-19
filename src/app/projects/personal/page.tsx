"use client";
import React from "react";

import { Box } from "@chakra-ui/react";
import ProjectCard from "@/components/custom/projectCard";
import { examplesPersonal } from "@/utils/data";

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
    </>
  );
}
