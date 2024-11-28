import React from 'react';

import { VStack, Box } from '@chakra-ui/react';

import Icons from '@/components/custom/icons';

export default function SideBar() {
  return (
    <Box
      width="100px"
      p={4}
      display={{ base: 'none', sm: 'none', lg: 'block', xl: 'block' }}
    >
      <VStack align="center" justify="center" height="100%" spaceY={2}>
        <Icons />
      </VStack>
    </Box>
  );
}
