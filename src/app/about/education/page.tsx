import React from "react";

import { Box, HStack } from "@chakra-ui/react";
import EducationCard from "@/components/custom/educationCard";
import { examplesUniversity } from "@/utils/data";

export default function Education() {
  return (
    <>
      {examplesUniversity.map((example: EducationCardProps) => (
        <Box key={example.university}>
          <EducationCard
            university={example.university}
            degree={example.degree}
            field={example.field}
            description={example.description}
            image={example.image}
            date={example.date}
          />
        </Box>
      ))}
    </>
  );
}
