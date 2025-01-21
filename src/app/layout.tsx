import React from 'react';

import { Flex, Text, VStack } from '@chakra-ui/react';
import Header from '@/components/custom/header';
import { Provider } from '@/components/ui/provider';
import SideBar from '@/components/custom/sideBar';

export const metadata = {
  title: 'EP',
  description: 'Ernesta Petraityte Portfolio',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Flex height="95vh" direction="column">
            <Header />
            <Flex flex={1} overflow="hidden">
              <SideBar />
              {children}
            </Flex>
            <VStack p={4} textAlign="center">
              <Text fontSize="sm">Ernesta Petraityte © 2024</Text>
            </VStack>
          </Flex>
        </Provider>
      </body>
    </html>
  );
}
