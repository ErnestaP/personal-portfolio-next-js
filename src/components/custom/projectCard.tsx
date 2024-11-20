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
    <Stack align={"start"} width={"-webkit-fill-available"}>
      <Card.Root size="sm" fontFamily="cardFont" width={"100%"}>
        <Card.Header>
          <Heading size="md">{title}</Heading>
        </Card.Header>
        <Card.Body color="fg.muted">
          <HStack>{role && <Box fontWeight={600}>Role: {role}</Box>}</HStack>
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
                  fontWeight={{
                    base: "300",
                    sm: "300",
                    md: "300",
                    lg: "300",
                    xl: "300",
                    "2xl": "400",
                  }}
                  fontSize={{
                    base: "16px",
                    sm: "16px",
                    md: "16px",
                    lg: "16px",
                    xl: "18px",
                    "2xl": "18px",
                  }}
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
                    <Box>{skillSet[skill].description}</Box>
                  </VStack>
                  <HStack gap={2}>
                    {skillSet[skill].skills.map((skill) => (
                      <Box>
                        <Tag
                          size={{
                            base: "sm",
                            sm: "sm",
                            md: "sm",
                            lg: "sm",
                            xl: "lg",
                            "2xl": "xl",
                          }}
                          width={"max-content"}
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
