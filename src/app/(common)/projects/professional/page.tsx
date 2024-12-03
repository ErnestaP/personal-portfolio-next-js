import React from 'react';

import { Box } from '@chakra-ui/react';

import ProjectCard from '@/components/custom/projectCard';
import { fetchData } from '@/utils/helpers';
import { ProjectsData } from '@/utils/interfaces';
import CardWrapperWithColorMap from '@/components/custom/cardWrapperWithColorMap';

export default async function Professional() {
  const data: ProjectsData[] = await fetchData('professional-projects');
  return (
    <CardWrapperWithColorMap>
      {data.map((project: ProjectsData) => (
        <Box key={project.id}>
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
