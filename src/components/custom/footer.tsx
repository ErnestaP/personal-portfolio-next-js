import React from 'react';

import { VStack, Text, Box, HStack } from '@chakra-ui/react';

import Icons from '@/components/custom/icons';

export default function Footer() {
  return (
    <VStack flex={1} justify="end" p={4}>
      <Box
        p={1}
        display={{ base: 'block', sm: 'block', lg: 'none', xl: 'none' }}
      >
        <HStack align="baseline" justify="center" height="100%" spaceY={2}>
          <Icons />
        </HStack>
      </Box>
      <Text
        fontSize={{
          sm: 'sm',
          md: 'md',
          lg: 'lg',
          xl: 'xl',
          '2xl': '2xl',
        }}
        fontFamily="initialTitle"
        fontWeight="100"
      >
        Ernesta Petraityte, Full-Stack Software Engineer
      </Text>
    </VStack>
  );
}
