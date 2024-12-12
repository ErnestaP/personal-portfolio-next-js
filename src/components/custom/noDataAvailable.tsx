import { Box, Flex, Image } from '@chakra-ui/react';
import NextImage from 'next/image';
import React from 'react';

export default function NoDataAvailable(props: { children: React.ReactNode }) {
  return (
    <Flex
      height={'100%'}
      align={'center'}
      justify={'center'}
      direction={'column'}
    >
      <Image
        asChild
        filter={{ base: 'invert(1)', _dark: 'invert(0)' }}
        alt="No Data Image"
      >
        <NextImage
          quality={100}
          width={400}
          height={400}
          priority
          alt="No Data Image"
          src="/cubist_portrait_transparent.png"
        ></NextImage>
      </Image>
      <Box textStyle="lg" fontWeight={'bold'} color={'fg.error'}>
        {props.children}
      </Box>
    </Flex>
  );
}
