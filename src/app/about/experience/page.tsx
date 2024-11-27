import React from "react";

import { Box, HStack, VStack } from "@chakra-ui/react";
import ExperienceCard from "@/components/custom/workExperienceCard";
import ColorMap from "@/components/custom/colorMap";
import { fetchData, normalizedData, sortData } from "@/utils/helpers";
import { experienceImagesMapping } from "@/utils/imagesMapping";
import { ExperienceNormalizedData } from "@/utils/interfaces";

export default async function Experience() {
  const data = await fetchData("experience");
  const normalizedAndSortedData: ExperienceNormalizedData[] = sortData(
    normalizedData(data)
  );

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
      {normalizedAndSortedData.map((experience: ExperienceNormalizedData) => (
        <Box flex={1} key={experience.id}>
          <ExperienceCard
            employer={experience.employer}
            team={experience.team}
            title={experience.title}
            date={experience.date}
            location={experience.location}
            description={experience.description}
            image={experienceImagesMapping[experience.employer]}
            skills={experience.skills}
          />
        </Box>
      ))}
    </VStack>
  );
}
