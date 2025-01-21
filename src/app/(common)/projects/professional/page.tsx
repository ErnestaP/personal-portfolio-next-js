import React from 'react';

import { Box, Text } from '@chakra-ui/react';

import ProjectCard from '@/components/custom/projectCard';
import { fetchData } from '@/utils/helpers';
import { ProjectsData } from '@/utils/interfaces';
import CardWrapperWithColorMap from '@/components/custom/cardWrapperWithColorMap';
import NoDataAvailable from '@/components/custom/noDataAvailable';

export default async function Professional() {
  const data: ProjectsData[] = await fetchData('professional-projects');
  if (data.length === 0) {
    return (
      <NoDataAvailable>
        <Text>No professional projects data available.</Text>
      </NoDataAvailable>
    );
  }
  return (
    <CardWrapperWithColorMap>
      {data.map((project: ProjectsData, index) => (
        <Box key={index} width={'100%'}>
          <ProjectCard
            id={project.id}
            title={project.title}
            role={project.role}
            skillSet={project.skillSet}
          />
        </Box>
      ))}
    </CardWrapperWithColorMap>
  );
}
