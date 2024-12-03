import React from 'react';

import { Box } from '@chakra-ui/react';

import ProjectCard from '@/components/custom/projectCard';
import { fetchData } from '@/utils/helpers';
import { ProjectsData } from '@/utils/interfaces';
import CardWrapperWithColorMap from '@/components/custom/cardWrapperWithColorMap';

export default async function Personal() {
  const data: ProjectsData[] = await fetchData('personal-projects');

  return (
    <CardWrapperWithColorMap>
      {data.map((project: ProjectsData) => (
        <Box key={project.id} width={'100%'}>
          <ProjectCard
            id={project.id}
            title={project.title}
            skillSet={project.skillSet}
          />
        </Box>
      ))}
    </CardWrapperWithColorMap>
  );
}
