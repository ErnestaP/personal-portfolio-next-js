import React from "react";

import { Box, Flex, Text, HStack, Button } from "@chakra-ui/react";
import Header from "@/components/custom/header";
import { Provider } from "@/components/ui/provider";
import SideBar from "@/components/custom/SideBar";

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html suppressHydrationWarning>
      <head></head>
      <body>
        <Provider>
          <Flex height="100vh" direction="column">
            <Header />
            <Flex flex="1" overflow="hidden">
              <SideBar />
              {children}
            </Flex>
            <Box p={4} textAlign="center">
              <Text fontSize="sm">Ernesta Petraityte © 2024</Text>
            </Box>
          </Flex>
        </Provider>
      </body>
    </html>
  );
}
