import React from "react";

import { Box, HStack } from "@chakra-ui/react";
import ProjectCard from "@/components/custom/projectCard";
import ColorMap from "@/components/custom/colorMap";
import { fetchData } from "@/utils/helpers";
import { ProjectsData } from "@/utils/interfaces";

export default async function Professional() {
  const data: ProjectsData[] = await fetchData("professional-projects");
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
      {data.map((project: ProjectsData) => (
        <Box key={project.id}>
          <ProjectCard
            id={project.id}
            title={project.title}
            role={project.role}
            skillSet={project.skillSet}
          />
        </Box>
      ))}
    </>
  );
}
