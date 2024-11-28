import React from 'react';

import NextImage from 'next/image';
import {
  Card,
  Heading,
  HStack,
  Stack,
  Box,
  VStack,
  Flex,
  Separator,
  Image,
} from '@chakra-ui/react';
import { Tag } from '@/components/ui/tag';

import { getColorBySkill } from '@/utils/colorsMap';
import { ExperienceCardProps } from '@/utils/interfaces';

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  employer,
  team,
  title,
  date,
  location,
  description,
  skills,
  image,
}) => {
  return (
    <Stack
      align={'start'}
      width={'-webkit-fill-available'}
      fontSize={{
        base: '16px',
        sm: '16px',
        md: '16px',
        lg: '16px',
        xl: '18px',
        '2xl': '18px',
      }}
    >
      <Card.Root size="sm" fontFamily="cardFont" width={'100%'}>
        <Card.Header>
          <Heading>{employer}</Heading>
          <Separator />
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
          <Flex
            gap={4}
            direction={{
              base: 'column',
              sm: 'column',
              md: 'column',
              lg: 'row',
              xl: 'row',
              '2xl': 'row',
            }}
          >
            <Box
              flex={1}
              padding={4}
              borderRadius={8}
              filter={{ base: 'invert(1)', _dark: 'invert(0)' }}
            >
              <Image asChild alt="Picture of the author">
                <NextImage
                  quality={100}
                  width={300}
                  height={300}
                  priority
                  src={image}
                  alt="Picture of the author"
                />
              </Image>
            </Box>
            <VStack align={'start'} flex={5}>
              <HStack>
                <Box fontWeight={600}>{location},</Box>
                <Box fontWeight={600}>{date}</Box>
              </HStack>
              <Box fontWeight={600}>{title}</Box>
              <Box fontWeight={600}>{team}</Box>
              <Separator />
              <Box maxW="100ch">{description}</Box>
              <Separator />

              <Flex
                gap={2}
                wrap="wrap" // Enables wrapping for child elements
                direction={{
                  base: 'row',
                  sm: 'row',
                  md: 'row',
                  lg: 'row',
                  xl: 'row',
                  '2xl': 'row',
                }}
                justify="flex-start" // Align items on smaller screens
              >
                {skills.map((skill, index) => (
                  <Box
                    key={index}
                    flex={{
                      base: '1 1 calc(33.333% - 8px)', // Each tag takes up a third of the row minus the gap
                      sm: '1 1 calc(33.333% - 8px)',
                      md: '1 1 calc(33.333% - 8px)',
                      lg: '1 1 auto', // For larger screens, fallback to auto width
                      xl: '1 1 auto',
                      '2xl': '1 1 auto',
                    }}
                    maxWidth={{
                      base: 'calc(33.333% - 8px)', // Ensures a max of 3 tags per row
                      sm: 'calc(33.333% - 8px)',
                      md: 'calc(33.333% - 8px)',
                      lg: 'none',
                      xl: 'none',
                      '2xl': 'none',
                    }}
                  >
                    <Tag
                      size={{
                        base: 'sm',
                        sm: 'sm',
                        md: 'sm',
                        lg: 'sm',
                        xl: 'lg',
                        '2xl': 'xl',
                      }}
                      width="100%"
                      justifyContent={'center'} // Ensures the tag spans the width of its parent
                      colorPalette={getColorBySkill(skill) || 'transparent'}
                    >
                      {skill}
                    </Tag>
                  </Box>
                ))}
              </Flex>
            </VStack>
          </Flex>
        </Card.Body>
      </Card.Root>
    </Stack>
  );
};
export default ExperienceCard;
