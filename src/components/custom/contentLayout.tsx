'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

import { VStack, Box, Text, HStack, Flex } from '@chakra-ui/react';
import { SideMenu } from '@/components/custom/sideMenu';
import { SideMenuConfigProps } from '@/utils/interfaces';
import ColorMap from '@/components/custom/colorMap';

export default function ContentLayout(props: { children: React.ReactNode }) {
  const pathname = usePathname();
  const basePage = pathname.split('/')[1];

  const sideMenuConfig: SideMenuConfigProps = {
    projects: {
      title: 'Projects',
      colorMap: true,
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
  const currentPage =
    basePage in sideMenuConfig ? sideMenuConfig[basePage] : null;
  return (
    <>
      {currentPage ? (
        <Flex gap={4} flexDir="column" width={'100%'} alignItems={'stretch'}>
          <HStack
            align={{
              base: 'center',
              sm: 'center',
              md: 'center',
              lg: 'start',
              xl: 'start',
              '2xl': 'start',
            }}
          >
            <VStack flex={1} align="center">
              <Box>
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
                  {currentPage.title}
                </Text>
              </Box>
              <HStack
                display={{
                  base: 'flex',
                  sm: 'flex',
                  md: 'flex',
                  lg: 'none',
                  xl: 'none',
                  '2xl': 'none',
                }}
              >
                <SideMenu buttons={currentPage.buttons} onlyButtons />
              </HStack>
            </VStack>
            <Flex
              flex={6}
              display={{
                base: 'none',
                sm: 'none',
                md: 'none',
                lg: 'flex',
                xl: 'flex',
                '2xl': 'flex',
              }}
              align={'center'}
              padding={4}
            >
              {currentPage.colorMap && <ColorMap />}
            </Flex>
          </HStack>
          <HStack height={'90%'} align={'start'}>
            <Box
              display={{
                base: 'none',
                sm: 'none',
                md: 'none',
                lg: 'block',
                xl: 'block',
                '2xl': 'block',
              }}
              flex={1}
              paddingBottom={2}
              height={'100%'}
            >
              <SideMenu buttons={currentPage.buttons} />
            </Box>
            <HStack
              flex={6}
              align={'start'}
              height={'100%'}
              overflow="hidden"
              paddingBottom={2}
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
          </HStack>
        </Flex>
      ) : (
        <>{props.children}</>
      )}
    </>
  );
}
