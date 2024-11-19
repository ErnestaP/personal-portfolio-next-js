"use client";
import React from "react";

import { VStack, Stack, Flex, Box, Text, HStack } from "@chakra-ui/react";
import SideMenu from "@/components/custom/sideMenu";
import ProjectCard from "@/components/custom/projectCard";
import { groupColorMap } from "@/utils/colorsMap";
import { Tag } from "@/components/ui/tag";

//propotionally have to be flex={1} flex={6}
export default function Professional() {
  const examples: ProjectCardProps[] = [
    {
      title: "SCOAP3",
      role: "Full-Stack Engineer",
      skillSet: {
        "Apache Airflow DAGs": {
          description:
            "Designed, developed, and maintained workflows for efficient data processing, integrating third-party APIs, and harvesting data from FTP and SFTP sources. Utilized Docker, contributed to GitHub workflows for CI/CD, and wrote unit and integration tests using pytest.",
          skills: ["Apache Airflow", "Python", "Pytest", "Docker"],
          gits: ["https://github.com/cern-sis/workflows"],
        },
        "Django Backend Development": {
          description:
            "Enhanced backend functionality by building features, creating REST APIs, and optimizing search performance using OpenSearch.",
          skills: ["Django", "OpenSearch", "PostgreSQL"],
          gits: ["https://github.com/SCOAP3/scoap3"],
        },
        "Frontend Development": {
          description:
            "Expanded full-stack skills by handling select frontend tasks, leveraging Next.js and Ant Design to improve user interfaces.",
          skills: ["NextJS", "AntDesign", "TypeScript"],
          gits: ["https://github.com/SCOAP3/scoap3"],
        },
      },
    },
    {
      title: "Team Inner Project: Data Monitoring",
      role: "Data Workflow Specialist & Stakeholder Partner",
      skillSet: {
        "Apache Airflow DAGs": {
          description:
            "Streamlined data collection and processing workflows by designing and managing Airflow DAGs.",
          skills: [
            "Apache Airflow",
            "PostgreSQL",
            "Python",
            "Pytest",
            "Docker",
          ],
          gits: ["https://github.com/cern-sis/bi-dags"],
        },
        "Stakeholder Collaboration & Data Visualization": {
          description:
            "Worked on a monitoring project, collaborating with stakeholders to gather requirements and create data visualizations using Apache Superset. Focused on clear communication, active listening, and effectively presenting ideas.",
          skills: [
            "Apache Superset",
            "Requirements Analysis",
            "Critical Thinking",
          ],
          gits: [],
        },
      },
    },
    {
      title: "DQM GUI",
      role: "Full-Stack Engineer",
      skillSet: {
        "Frontend Development": {
          description:
            "Redesigned and developed the CMS Data Quality Monitoring (DQM) GUI frontend using Next.js and JavaScript, enhancing user interaction and ensuring an intuitive experience for physicists monitoring particle collision data.",
          skills: ["NextJS", "AntDesign", "StyledComponents"],
          gits: [
            "https://github.com/cms-DQM/dqmgui_frontend",
            "https://github.com/cms-DQM/dqmgui",
          ],
        },
        "On-Call Support (DOC Role)": {
          description:
            "Served as the lead on-call support (DOC), troubleshooting and resolving issues across the CMS DQM system to minimize downtime and maintain smooth operations.",
          skills: ["Debugging", "Communication", "Problem Solving"],
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
          <VStack maxW={"-webkit-fill-available"}>
            {examples.map((example: ProjectCardProps) => (
              <Box key={example.title}>
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
