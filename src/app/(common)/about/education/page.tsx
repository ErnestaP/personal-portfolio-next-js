import React from 'react';

import { Box, Text } from '@chakra-ui/react';
import EducationCard from '@/components/custom/educationCard';
import { educationImagesMapping } from '@/utils/imagesMapping';
import { fetchData, normalizedData, sortData } from '@/utils/helpers';
import { EducationData } from '@/utils/interfaces';
import NoDataAvailable from '@/components/custom/noDataAvailable';

export default async function Education() {
  const data: EducationData[] = await fetchData('education');
  if (data.length === 0) {
    return (
      <NoDataAvailable>
        <Text>No education data available.</Text>
      </NoDataAvailable>
    );
  }
  const normalizedAndSortedData = sortData(normalizedData(data));

  return (
    <>
      {normalizedAndSortedData.map((university, index) => (
        <Box key={index}>
          <EducationCard
            title={university.title}
            degree={university.degree}
            field={university.field}
            description={university.description}
            image={
              educationImagesMapping[university.title] ||
              educationImagesMapping.default
            }
            date={university.date}
          />
        </Box>
      ))}
    </>
  );
}
