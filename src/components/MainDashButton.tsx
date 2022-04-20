import { Button, Text } from "@chakra-ui/react";
import React from "react";

export interface IMainDashButton {
  text: string;
  bg: string;
  borderColor: string;
  textColor: string;
}

const MainDashButton = (props: IMainDashButton) => {
  return (
    <Button
      w="136px"
      h="44px"
      borderRadius="50px"
      bg={props.bg}
      border={props.borderColor !== "none" ? "1px solid" : ""}
      borderColor={props.borderColor}
      _hover={{
        background: `${props.bg}`,
      }}
    >
      <Text
        color={props.textColor}
        fontSize="12px"
        lineHeight="15px"
        fontWeight="500"
      >
        {props.text}
      </Text>
    </Button>
  );
};

export default MainDashButton;
