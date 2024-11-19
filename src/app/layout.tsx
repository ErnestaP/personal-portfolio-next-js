import React from "react";

import { Flex, Text, VStack } from "@chakra-ui/react";
import Header from "@/components/custom/header";
import { Provider } from "@/components/ui/provider";
import SideBar from "@/components/custom/sideBar";

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html suppressHydrationWarning>
      <head></head>
      <body>
        <Provider>
          <Flex height="100vh" direction="column">
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
