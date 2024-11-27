import React from 'react';

import { Box } from '@chakra-ui/react';
import EducationCard from '@/components/custom/educationCard';
import { educationImagesMapping } from '@/utils/imagesMapping';
import { fetchData, normalizedData, sortData } from '@/utils/helpers';
import { NormalizedData, Data } from '@/utils/interfaces';

export default async function Education() {
  const data: Data[] = await fetchData('education');
  const normalizedAndSortedData: NormalizedData[] = sortData(
    normalizedData(data)
  );
  return (
    <>
      {normalizedAndSortedData.map((university: NormalizedData) => (
        <Box key={university.title}>
          <EducationCard
            title={university.title}
            degree={university.degree}
            field={university.field}
            description={university.description}
            image={educationImagesMapping[university.title]}
            date={university.date}
          />
        </Box>
      ))}
    </>
  );
}
