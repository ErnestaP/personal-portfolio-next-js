import React from "react";
import {
  Card,
  Heading,
  VStack,
  Stack,
  Box,
  Image,
  Flex,
  Separator,
} from "@chakra-ui/react";
import NextImage from "next/image";
import { EducationCardProps } from "@/utils/interfaces";

const EducationCard: React.FC<EducationCardProps> = ({
  title,
  degree,
  field,
  description,
  image,
  date,
}) => {

  return (
    <Stack align={"start"} width={"-webkit-fill-available"}>
      <Card.Root size="lg" fontFamily="cardFont" width={"100%"}>
        <Card.Header>
          <Heading>{title}</Heading>
          <Separator />
        </Card.Header>
        <Card.Body color="fg.muted" textAlign={"justify"}>
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
            fontSize={{
              base: "16px",
              sm: "16px",
              md: "16px",
              lg: "16px",
              xl: "18px",
              "2xl": "18px",
            }}
          >
            <Box
              flex={1}
              padding={4}
              borderRadius={8}
              filter={{ base: "invert(1)", _dark: "invert(0)" }}
            >
              <Image asChild alt="Picture of the author">
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
