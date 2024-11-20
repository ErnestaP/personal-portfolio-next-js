"use client";

import React from "react";
import {
  Card,
  Heading,
  VStack,
  Stack,
  Box,
  HStack,
  Image,
  Flex,
  Separator,
} from "@chakra-ui/react";
import NextImage from "next/image";
import { useTheme } from "next-themes";

const EducationCard: React.FC<EducationCardProps> = ({
  university,
  degree,
  field,
  description,
  image,
  date,
}) => {
  const { resolvedTheme } = useTheme();

  return (
    <Stack
      fontSize={{
        base: "16px",
        sm: "16px",
        md: "16px",
        lg: "16px",
        xl: "18px",
        "2xl": "18px",
      }}
      align={"start"}
      width={"-webkit-fill-available"}
    >
      <Card.Root size="lg" fontFamily="cardFont" width={"100%"}>
        <Card.Header>
          <Heading>{university}</Heading>
          <Separator />
        </Card.Header>
        <Card.Body color="fg.muted">
          <Flex
            gap={4}
            direction={{
              base: "column",
              sm: "column",
              md: "column",
              lg: "row",
              xl: "row",
              "2xl": "row",
            }}
          >
            <Box
              flex={1}
              padding={4}
              borderRadius={8}
              filter={`invert(${resolvedTheme === "light" ? "1" : "0"})`}
            >
              <Image asChild>
                <NextImage
                  quality={100}
                  width={300}
                  height={300}
                  src={image}
                  alt="Picture of the author"
                />
              </Image>
            </Box>
            <VStack align={"start"} flex={5}>
              <Box fontWeight={600}>{degree}</Box>
              <Box fontWeight={600}>{field}</Box>
              <Box fontWeight={600}>{date}</Box>
              <Separator />
              <Box maxW="100ch">{description}</Box>
            </VStack>
          </Flex>
        </Card.Body>
      </Card.Root>
    </Stack>
  );
};
export default EducationCard;
