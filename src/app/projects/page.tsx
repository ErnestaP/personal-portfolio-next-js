"use client";
import React from "react";

import { VStack, Input, Flex, Box, Button, Text } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { Textarea } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

export default function Contact() {
  return (
    <Flex justify="center" align="center" height="100vh">
      <VStack gap="8" maxW="sm">
        <Text textStyle="3xl">Contact Me!</Text>
        <Field orientation="horizontal" label="Name" required>
          <Input placeholder="John Doe" flex="1" />
        </Field>
        <Field orientation="horizontal" label="Email" required>
          <Input placeholder="me@example.com" flex="1" />
        </Field>
        <Field orientation="horizontal" label="Message">
          <Textarea placeholder="Your message..." required />
        </Field>
        <Flex justifyContent="end" width="100%">
          <Button>Send</Button>
        </Flex>
      </VStack>
    </Flex>
  );
}
