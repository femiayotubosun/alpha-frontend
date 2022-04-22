import { Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

export interface IStatCard {
  bg: string;
  stat: string;
  text: string;
}

const StatCard = (props: IStatCard) => {
  return (
    <VStack
      w="full"
      h="87px"
      borderRadius="11.2px"
      bg={props.bg}
      alignItems="center"
      justifyContent="center"
    >
      <Heading
        color="#171717"
        fontSize="21px"
        fontWeight="500"
        lineHeight="25px"
        letterSpacing="tighter"
        fontFamily="Tomorrow, sans-serif"
        textAlign="center"
      >
        {props.stat}
      </Heading>
      <Text
        fontSize="8.4px"
        lineHeight="13px"
        letterSpacing="tight"
        color="#8F92A1"
        fontFamily="Gilda Display, serif"
        textAlign="center"
      >
        {props.text}
      </Text>
    </VStack>
  );
};

export default StatCard;
