'use client';
import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Box, Button, Flex } from '@chakra-ui/react';

import { FilterProps, SideMenuButtonsProps } from '@/utils/interfaces';

function SideMenuButtons(props: {
  buttons: SideMenuButtonsProps[];
  filter?: FilterProps;
}) {
  const pathname = usePathname();

  const fontSize = {
    base: '16px',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
    '2xl': '2xl',
  };
  return (
    <>
      {props.buttons.map((button, index) => (
        <Box key={index} filter={props.filter}>
          <Link href={button.href}>
            <Button
              fontSize={fontSize}
              fontWeight="light"
              variant="plain"
              color={pathname == button.href ? 'secondary' : 'default'}
              _dark={{
                color: pathname == button.href ? '#EFC946' : 'default',
              }}
            >
              {button.label}
            </Button>
          </Link>
        </Box>
      ))}
    </>
  );
}

export function SideMenu(props: { buttons: SideMenuButtonsProps[] }) {
  return (
    <Flex
      flexDir={{
        base: 'row',
        sm: 'row',
        md: 'row',
        lg: 'column',
        xl: 'column',
        '2xl': 'column',
      }}
      align={'center'}
      backgroundImage={{
        base: '',
        sm: '',
        md: '',
        lg: "url('/SideFaceInvert.png')",
        xl: "url('/SideFaceInvert.png')",
      }}
      backgroundPosition="center"
      filter={{ base: 'invert(0)', _dark: 'invert(1)' }}
      backgroundRepeat="no-repeat"
      backgroundColor={{
        base: 'transparent',
        sm: 'transparent',
        md: 'transparent',
        lg: 'rgba(255, 255, 255, 0.9)',
        xl: 'rgba(255, 255, 255, 0.9)',
      }}
      border={{
        base: 'none',
        sm: 'none',
        md: 'none',
        lg: '1px #ebedea solid',
        xl: '1px #ebedea solid',
      }}
      backgroundBlendMode="overlay"
      backgroundSize="cover"
      gap={{ base: '3', md: '3', lg: '5', xl: '5', '2xl': '5' }}
      padding={{ base: 2, md: 2, lg: 4, xl: 4, '2xl': 5 }}
      height={'100%'}
      width="auto"
      borderRadius={8}
    >
      <SideMenuButtons
        buttons={props.buttons}
        filter={{ base: 'invert(0)', _dark: 'invert(1)' }}
      />
    </Flex>
  );
}
