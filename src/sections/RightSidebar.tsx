import { HStack, VStack, Heading, Circle, Text } from "@chakra-ui/react";
import React from "react";
import OrderCard from "../components/OrderCard";
import TopCustomer from "../components/TopCustomer";

const RightSidebar = () => {
  return (
    <VStack
      w="24%"
      h="100vh"
      bg="rgba(245, 249, 255, 0.9)"
      backdropFilter="blur(104px)"
      pt={8}
      spacing={8}
    >
      <VStack w="full" spacing={8}>
        <HStack
          w="full"
          h="64px"
          alignItems="flex-start"
          borderBottom="1px solid #EDF3FA"
          px={8}
        >
          <HStack w="full" h="40px" justifyContent="space-between">
            <Heading
              fontSize="21.925px"
              lineHeight="26px"
              letterSpacing="-0.03em"
              color="#1B1C31"
            >
              Top Customers
            </Heading>
            <Circle size="40px" bg="green.300" />
          </HStack>
        </HStack>
        <VStack w="full" spacing={4}>
          <TopCustomer name="Mike Taylor" address="Cinceniti, OH" />
          <TopCustomer name="Mike Taylor" address="Cinceniti, OH" />
          <TopCustomer name="Mike Taylor" address="Cinceniti, OH" />
        </VStack>
      </VStack>

      <VStack w="full" spacing={4}>
        <VStack spacing={2} alignItems="flex-start" w="full" pl={8}>
          <Heading
            fontSize="21.925px"
            color="#1B1C31"
            letterSpacing="-0.03em"
            lineHeight="26px"
          >
            Today’s Orders
          </Heading>
          <Text
            fontSize="9.84981px"
            fontWeight="500"
            color="#000000"
            opacity={0.4}
          >
            Latest orders for today
          </Text>
        </VStack>
        <HStack w="full" pl={8}>
          <OrderCard />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default RightSidebar;
