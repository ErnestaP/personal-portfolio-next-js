"use client";

import React from "react";
import {
  Card,
  Heading,
  HStack,
  Stack,
  Box,
  VStack,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import { Tag } from "@/components/ui/tag";
import { getColorBySkill } from "@/utils/colorsMap";
import { FaGithub } from "react-icons/fa";

const ProjectCard: React.FC<ProjectCardProps> = ({ title, role, skillSet }) => {
  return (
    <Stack align={"start"}>
      <Card.Root size="sm" fontFamily="cardFont">
        <Card.Header>
          <Heading size="md">{title}</Heading>
        </Card.Header>
        <Card.Body color="fg.muted">
          <HStack>
            <Box fontWeight={600}>Role: {role}</Box>
          </HStack>
          <Flex
            direction={{
              base: "column",
              sm: "column",
              md: "column",
              lg: "row",
              xl: "row",
              "2xl": "row",
            }}
            align={"start"}
            alignItems={"stretch"}
            width={"100%"}
            gap={8}
          >
            {Object.keys(skillSet).map((skill) => {
              return (
                <VStack
                  flex={1}
                  align={"start"}
                  justify={"space-between"}
                  gap={4}
                  key={skill}
                >
                  <VStack align={"baseline"} gap={2}>
                    <HStack align={"center"}>
                      <Box fontWeight={600}>Skill: {skill}</Box>
                      {skillSet[skill].gits.map((git, index) => (
                        <Box key={index}>
                          <IconButton
                            variant="ghost"
                            onClick={() => window.open(git, "_blank")}
                          >
                            <FaGithub />
                          </IconButton>
                        </Box>
                      ))}
                    </HStack>
                    <Box>Description: {skillSet[skill].description}</Box>
                  </VStack>
                  <HStack gap={2}>
                    {skillSet[skill].skills.map((skill) => (
                      <Box>
                        <Tag
                          size="sm"
                          colorPalette={getColorBySkill(skill) || "transparent"}
                        >
                          {skill}
                        </Tag>
                      </Box>
                    ))}
                  </HStack>
                </VStack>
              );
            })}
            <Box></Box>
          </Flex>
        </Card.Body>
      </Card.Root>
    </Stack>
  );
};
export default ProjectCard;
