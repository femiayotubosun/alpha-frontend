import { VStack, Text, HStack } from "@chakra-ui/react";
import React from "react";

const MainDashboard = () => {
  return (
    <VStack w="58%" minHeight="100vh" left="calc(18vw)" position="fixed">
      <HStack w="full" h="56px" bg="blue"></HStack>
      <Text>stuff</Text>
    </VStack>
  );
};

export default MainDashboard;
