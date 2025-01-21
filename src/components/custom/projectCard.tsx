'use client';

import React from 'react';

import {
  Card,
  Heading,
  HStack,
  Stack,
  Box,
  VStack,
  IconButton,
  Flex,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { Tag } from '@/components/ui/tag';

import { getColorBySkill } from '@/utils/colorsMap';
import { SkillSet } from '@/utils/interfaces';

export interface ProjectsData {
  id: string;
  title: string;
  employer?: string;
  role?: string;
  skillSet: SkillSet[];
}

const ProjectCard: React.FC<ProjectsData> = ({ title, role, skillSet }) => {
  return (
    <Stack
      align={'start'}
      width={'-webkit-fill-available'}
      data-testid="projects-card"
    >
      <Card.Root size="sm" fontFamily="cardFont" width={'100%'}>
        <Card.Header>
          <Heading fontFamily="cardFont">{title}</Heading>
        </Card.Header>
        <Card.Body
          color="fg.muted"
          textAlign={'justify'}
          fontSize={{
            base: '16px',
            sm: '16px',
            md: '16px',
            lg: '16px',
            xl: '18px',
            '2xl': '18px',
          }}
        >
          <HStack>{role && <Box fontWeight={600}>{role}</Box>}</HStack>
          <Flex
            direction={{
              base: 'column',
              sm: 'column',
              md: 'column',
              lg: 'row',
              xl: 'row',
              '2xl': 'row',
            }}
            align={'start'}
            alignItems={'stretch'}
            width={'100%'}
            gap={8}
          >
            {skillSet.map((skill, index) => {
              return (
                <VStack
                  data-testid={`skill-set-${index}`}
                  flex={1}
                  align={'start'}
                  justify={'space-between'}
                  gap={4}
                  key={index}
                  fontWeight={{
                    base: '300',
                    sm: '300',
                    md: '300',
                    lg: '300',
                    xl: '300',
                    '2xl': '400',
                  }}
                >
                  <VStack align={'baseline'} gap={2}>
                    <HStack align={'center'}>
                      <Box fontWeight={600}>{skill.title}</Box>
                      {skill.gits &&
                        skill.gits.map((git, index) => (
                          <Box key={index} data-testid="git-item">
                            <IconButton
                              variant="ghost"
                              onClick={() => window.open(git, '_blank')}
                            >
                              <FaGithub />
                            </IconButton>
                          </Box>
                        ))}
                    </HStack>
                    <Box>{skill.description}</Box>
                  </VStack>
                  <HStack gap={2}>
                    {skill.skills.map((skill, index) => (
                      <Box key={index} data-testid="skill-item">
                        <Tag
                          size={{
                            base: 'sm',
                            sm: 'sm',
                            md: 'sm',
                            lg: 'sm',
                            xl: 'lg',
                            '2xl': 'xl',
                          }}
                          width={'max-content'}
                          colorPalette={getColorBySkill(skill) || 'transparent'}
                        >
                          {skill}
                        </Tag>
                      </Box>
                    ))}
                  </HStack>
                </VStack>
              );
            })}
            <Box></Box>
          </Flex>
        </Card.Body>
      </Card.Root>
    </Stack>
  );
};
export default ProjectCard;
