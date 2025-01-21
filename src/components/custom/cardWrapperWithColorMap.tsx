import React from 'react';

import { Flex, HStack, VStack } from '@chakra-ui/react';
import ColorMap from '@/components/custom/colorMap';

export default async function CardWrapperWithColorMap(props: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Flex
        flex={{
          base: 0,
          sm: 0,
          md: 0,
          lg: 1,
          xl: 1,
          '2xl': 1,
        }}
        align={'center'}
        justify={'start'}
        paddingBottom={0}
      >
        <ColorMap />
      </Flex>
      <HStack
        flex={10}
        align={'start'}
        height={'100%'}
        overflow="hidden"
        paddingRight={2}
        paddingLeft={2}
      >
        <VStack
          width={'-webkit-fill-available'}
          overflow={'auto'}
          overflowX={'hidden'}
          height={'100%'}
        >
          {props.children}
        </VStack>
      </HStack>
    </>
  );
}
