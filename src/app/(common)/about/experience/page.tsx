import React from 'react';

import { Box, Text } from '@chakra-ui/react';

import ExperienceCard from '@/components/custom/workExperienceCard';
import { fetchData, normalizedData, sortData } from '@/utils/helpers';
import { experienceImagesMapping } from '@/utils/imagesMapping';
import { ExperienceData } from '@/utils/interfaces';
import CardWrapperWithColorMap from '@/components/custom/cardWrapperWithColorMap';
import NoDataAvailable from '@/components/custom/noDataAvailable';

export default async function Experience() {
  const data: ExperienceData[] = await fetchData('experience');
  if (data.length === 0) {
    return (
      <NoDataAvailable>
        <Text>No experience data available.</Text>
      </NoDataAvailable>
    );
  }
  const normalizedAndSortedData = sortData(normalizedData(data));
  return (
    <CardWrapperWithColorMap>
      {normalizedAndSortedData.map((experience) => (
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
