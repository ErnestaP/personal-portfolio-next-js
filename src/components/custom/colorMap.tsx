import React from 'react';

import { Stack, Flex, Box, Text, HStack } from '@chakra-ui/react';

import { groupColorMap } from '@/utils/colorsMap';
import { Tag } from '@/components/ui/tag';
import ColorExplanationDialog from './colorsExplanationDialog';

export default function ColorMap() {
  return (
    <Flex align={'center'} p={1}>
      <Flex
        direction={{
          lg: 'row',
          xl: 'row',
          '2xl': 'row',
        }}
        display={{
          base: 'none',
          sm: 'none',
          md: 'none',
          lg: 'flex',
          xl: 'flex',
          '2xl': 'flex',
        }}
        gap={4}
      >
        {Object.keys(groupColorMap).map((group, index) => (
          <HStack key={index}>
            <Stack key={group} align={'center'}>
              <Tag size="sm" colorPalette={groupColorMap[group]}>
                #
              </Tag>
            </Stack>
            <Box>
              <Text fontSize="sm">{group}</Text>
            </Box>
          </HStack>
        ))}
      </Flex>
      <Flex
        display={{
          base: 'flex',
          lg: 'none',
          xl: 'none',
          '2xl': 'none',
        }}
      >
        <ColorExplanationDialog>
          {Object.keys(groupColorMap).map((group, index) => (
            <HStack key={index}>
              <Stack key={group} align={'center'}>
                <Tag size="sm" colorPalette={groupColorMap[group]}>
                  #
                </Tag>
              </Stack>
              <Box>
                <Text fontSize="sm">{group}</Text>
              </Box>
            </HStack>
          ))}
        </ColorExplanationDialog>
      </Flex>
    </Flex>
  );
}
