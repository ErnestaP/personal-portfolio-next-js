import InitialImage from "@/components/custom/InitialImage";
import { Flex, VStack, Text } from "@chakra-ui/react";
import Footer from "@/components/custom/footer";

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Flex
        direction={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
          "2xl": "row",
        }}
        justify="center"
        align="center"
      >
        <InitialImage />
        <VStack
          overflow={{ base: "visible", sm: "visible", lg: "auto", xl: "auto" }}
          flex="1"
          overflowY="auto"
          p={4}
          justify="space-between"
          align="baseline"
          height={"100%"}
        >
          {children}
          <VStack align="start" flex={3} justify="end">
            <Text
              fontSize={{
                base: "smallTitle",
                sm: "smallTitle",
                md: "mediumTitle",
                lg: "largeTitle",
                xl: "extraLargeTitle",
                "2xl": "extraExtraLargeTitle",
              }}
              fontFamily="initialTitle"
              fontWeight="100"
            >
              Hello, my name is
            </Text>
            <Text
              fontSize={{
                base: "smallTitle",
                sm: "smallTitle",
                md: "mediumTitle",
                lg: "largeTitle",
                xl: "extraLargeTitle",
                "2xl": "extraExtraLargeTitle",
              }}
              fontFamily="initialTitle"
              fontWeight="100"
              color="secondary"
              _dark={{ color: "active" }}
            >
              Ernesta
            </Text>
          </VStack>
          <Footer />
        </VStack>
      </Flex>
    </>
  );
}
