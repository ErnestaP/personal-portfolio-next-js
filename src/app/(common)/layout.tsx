'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

import { VStack, Box, Text, Flex } from '@chakra-ui/react';
import { SideMenu } from '@/components/custom/sideMenu';
import { SideMenuConfigProps } from '@/utils/interfaces';

const sideMenuConfig: SideMenuConfigProps = {
  projects: {
    title: 'Projects',
    buttons: [
      {
        label: 'Professional',
        href: '/projects/professional',
      },
      {
        label: 'Personal',
        href: '/projects/personal',
      },
    ],
  },
  about: {
    title: 'About Me',
    buttons: [
      {
        label: 'Experience',
        href: '/about/experience',
      },
      {
        label: 'Education',
        href: '/about/education',
      },
      {
        label: 'Hobbies',
        href: '/about/hobbies',
      },
    ],
  },
};

export default function ContentPageLayout(props: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const basePage = pathname.split('/')[1];
  const { children } = props;
  const { title, buttons } = sideMenuConfig[basePage];

  return (
    <Flex
      gap={2}
      flexDir={{
        base: 'column',
        sm: 'column',
        md: 'column',
        lg: 'row',
        xl: 'row',
        '2xl': 'row',
      }}
      width={'100%'}
      alignItems={'stretch'}
    >
      <VStack align="center" flex={1}>
        <Box flex={1}>
          <Text
            textAlign={'center'}
            fontSize={{
              base: '25px',
              sm: '25px',
              md: '25px',
              lg: '30px',
              xl: '35px',
              '2xl': '40px',
            }}
            textDecoration="underline"
            whiteSpace="nowrap"
            overflow="visible"
            textOverflow="clip"
          >
            {title}
          </Text>
        </Box>
        <Flex
          flexDir={{
            base: 'column',
            sm: 'column',
            md: 'column',
            lg: 'row',
            xl: 'row',
            '2xl': 'row',
          }}
          display={{
            base: 'flex',
            sm: 'flex',
            md: 'flex',
            lg: 'block',
            xl: 'block',
            '2xl': 'block',
          }}
          flex={10}
          height={'100%'}
        >
          <SideMenu buttons={buttons} />
        </Flex>
      </VStack>
      <VStack
        overflowY={'scroll'}
        overflowX={'hidden'}
        flex={6}
        paddingRight={{
          base: 0,
          sm: 0,
          md: 0,
          lg: 4,
          xl: 4,
          '2xl': 4,
        }}
      >
        {children}
      </VStack>
    </Flex>
  );
}
