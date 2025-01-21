import React from 'react';

import 'keen-slider/keen-slider.min.css';
import { Box, Flex, Text } from '@chakra-ui/react';

import PhotoGallery from '@/components/custom/photoGallery';
import { fetchData } from '@/utils/helpers';
import NoDataAvailable from '@/components/custom/noDataAvailable';
import { Hobbies as HobbiesProps } from '@/utils/interfaces';

export default async function Hobbies() {
  const hobbies: HobbiesProps[] = await fetchData('hobbies');
  if (hobbies.length === 0) {
    return (
      <NoDataAvailable>
        <Text>No hobbies data available.</Text>
      </NoDataAvailable>
    );
  }
  return (
    <Flex
      height={'100%'}
      direction={{
        base: 'column-reverse',
        sm: 'column-reverse',
        md: 'column-reverse',
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
          md: '100ch',
          lg: '120ch',
          xl: '130ch',
          '2xl': '130ch',
        }}
        overflow={{
          base: 'auto',
          sm: 'auto',
          md: 'auto',
          lg: 'hidden',
          xl: 'hidden',
          '2xl': 'hidden',
        }}
      >
        {hobbies && hobbies.length !== 0 && hobbies[0].description}
      </Box>
      <PhotoGallery />
    </Flex>
  );
}
