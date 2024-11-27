import React from "react";

import { Stack, Flex, Box, Text, HStack } from "@chakra-ui/react";
import { groupColorMap } from "@/utils/colorsMap";
import { Tag } from "@/components/ui/tag";

export default function ColorMap() {
  return (
      <Flex
        direction={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
          "2xl": "row",
        }}
        gap={4}
      >
        {Object.keys(groupColorMap).map((group, index) => (
          <HStack key={index}>
            <Stack key={group} align={"center"}>
              <Tag size="sm" colorPalette={groupColorMap[group]}>
                #
              </Tag>
            </Stack>
            <Box>
              <Text fontSize="sm">{group}</Text>
            </Box>
          </HStack>
        ))}
      </Flex>
  );
}
