import React from 'react';
import 'keen-slider/keen-slider.min.css';
import { Box, Flex } from '@chakra-ui/react';
import PhotoLibrary from '@/components/custom/photoLibrary';
import { fetchData } from '@/utils/helpers';

export default async function Hobbies() {
  const hobbies = await fetchData('hobbies');
  return (
    <Flex
      height="-webkit-fit-content"
      direction={{
        base: 'column',
        sm: 'column',
        md: 'column',
        lg: 'row',
        xl: 'row',
        '2xl': 'row',
      }}
      width={'100%'}
      gap={3}
      overflow={'hidden'}
    >
      <Box
        p={4}
        flex={1}
        fontSize={'16px'}
        textAlign={'justify'}
        maxW={{
          base: '100ch',
          sm: '100ch',
          md: '120ch',
          lg: '120ch',
          xl: '130ch',
          '2xl': '130ch',
        }}
      >
        {hobbies && hobbies.length !== 0 && hobbies[0].description}
      </Box>
      <PhotoLibrary />
    </Flex>
  );
}
