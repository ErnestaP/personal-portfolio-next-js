import React from 'react';

import { Box, HStack } from '@chakra-ui/react';

import ProjectCard from '@/components/custom/projectCard';
import ColorMap from '@/components/custom/colorMap';
import { fetchData } from '@/utils/helpers';
import { ProjectsData } from '@/utils/interfaces';

export default async function Personal() {
  const data: ProjectsData[] = await fetchData('personal-projects');

  return (
    <>
      <HStack
        display={{
          base: 'flex',
          sm: 'flex',
          md: 'flex',
          lg: 'none',
          xl: 'none',
          '2xl': 'none',
        }}
        gap={4}
        p={2}
        paddingBottom={4}
        alignItems={'baseline'}
        alignSelf={'baseline'}
      >
        <ColorMap />
      </HStack>
      {data.map((project: ProjectsData) => (
        <Box key={project.id} width={'100%'}>
          <ProjectCard
            id={project.id}
            title={project.title}
            skillSet={project.skillSet}
          />
        </Box>
      ))}
    </>
  );
}
