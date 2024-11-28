'use client';
import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { VStack, Box, Button } from '@chakra-ui/react';

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

export function SideMenu(props: {
  buttons: SideMenuButtonsProps[];
  onlyButtons?: boolean;
}) {
  return (
    <>
      {props.onlyButtons ? (
        <SideMenuButtons buttons={props.buttons} />
      ) : (
        <VStack
          backgroundImage={"url('/SideFaceInvert.png')"}
          backgroundPosition="center"
          filter={{ base: 'invert(0)', _dark: 'invert(1)' }}
          backgroundRepeat="no-repeat"
          backgroundColor={'rgba(255, 255, 255, 0.9)'}
          border={"1px #ebedea solid"}
          backgroundBlendMode="overlay"
          backgroundSize="cover"
          gap={{ base: '3', md: '3', lg: '5', xl: '5', '2xl': '5' }}
          padding={4}
          height={'100%'}
          width="auto"
          borderRadius={8}
        >
          <SideMenuButtons
            buttons={props.buttons}
            filter={{ base: 'invert(0)', _dark: 'invert(1)' }}
          />
        </VStack>
      )}
    </>
  );
}
