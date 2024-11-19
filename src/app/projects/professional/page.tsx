"use client";
import React from "react";

import { Box } from "@chakra-ui/react";
import ProjectCard from "@/components/custom/projectCard";
import { examplesProfessional } from "@/utils/data";
export default function Professional() {
  return (
    <>
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
