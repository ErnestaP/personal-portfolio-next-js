import React from "react";

import { Box, HStack, VStack } from "@chakra-ui/react";
import ExperienceCard from "@/components/custom/workExperienceCard";
import { examplesExperience } from "@/utils/data";
import ColorMap from "@/components/custom/colorMap";

export default function Experience() {
  return (
    <VStack>
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
      {examplesExperience.map((example: ExperienceCardProps) => (
        <Box flex={1}>
          <ExperienceCard
            employer={example.employer}
            team={example.team}
            title={example.title}
            date={example.date}
            location={example.location}
            description={example.description}
            image={example.image}
            skills={example.skills}
          />
        </Box>
      ))}
    </VStack>
  );
}
