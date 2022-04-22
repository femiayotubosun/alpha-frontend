import { HStack, Progress, VStack, Text } from "@chakra-ui/react";
import React from "react";
export interface IStatProgress {
  color: string;
  progress: number;
  total: number;
  title: string;
}

const StatProgress = (props: IStatProgress) => {
  const value = (props.progress / props.total) * props.total;
  return (
    <VStack w="full" h="25px">
      <HStack
        w="full"
        justifyContent="space-between"
        fontFamily="Gilda Display, serif"
        fontWeight="bold"
      >
        <Text
          fontSize="8.4px"
          lineHeight="13px"
          letterSpacing="letter-spacing: -0.28px"
          color="#171717"
        >
          {props.title}
        </Text>
        <Text
          fontSize="8.4px"
          lineHeight="13px"
          color="#171717"
        >{`${props.progress.toString()} / ${props.total.toString()}`}</Text>
      </HStack>
      <Progress
        colorScheme={props.color}
        w="full"
        value={value}
        height="3.26px"
      />
    </VStack>
  );
};

export default StatProgress;
