import { Circle, HStack, VStack, Text } from "@chakra-ui/react";
import React from "react";

type TopCustomerProps = {
  name: string;
  address: string;
};

const TopCustomer = (props: TopCustomerProps) => {
  return (
    <HStack w="262px" h="82px" spacing={4} cursor="pointer">
      <Circle
        size="60px"
        p={2}
        border="1px solid #EDF3FA;"
        alignSelf="flex-start"
      >
        <Circle size="full" bg="white" color="#51459E">
          <Text
            color="#51459E"
            fontWeight="500"
            fontSize="15px"
            lineHeight="19px"
          >
            MT
          </Text>
        </Circle>
      </Circle>
      <VStack
        w="full"
        spacing={2}
        alignItems="flex-start"
        justifyContent="flex-start"
        h="full"
        borderBottom="1px solid white"
      >
        <Text
          color="#43455E"
          fontWeight="500"
          fontSize="15px"
          lineHeight="19px"
        >
          {props.name}
        </Text>
        <Text
          color="#9698AB"
          fontWeight="400"
          fontSize="13px"
          lineHeight="17px"
        >
          {props.address}
        </Text>
      </VStack>
    </HStack>
  );
};

export default TopCustomer;
