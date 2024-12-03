import React from 'react';

import { Box } from '@chakra-ui/react';

import ExperienceCard from '@/components/custom/workExperienceCard';
import { fetchData, normalizedData, sortData } from '@/utils/helpers';
import { experienceImagesMapping } from '@/utils/imagesMapping';
import { ExperienceNormalizedData } from '@/utils/interfaces';
import CardWrapperWithColorMap from '@/components/custom/cardWrapperWithColorMap';

export default async function Experience() {
  const data = await fetchData('experience');
  const normalizedAndSortedData: ExperienceNormalizedData[] = sortData(
    normalizedData(data)
  );

  return (
    <CardWrapperWithColorMap>
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
    </CardWrapperWithColorMap>
  );
}
