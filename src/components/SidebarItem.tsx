import { HStack, Box, Image, Text, Icon } from "@chakra-ui/react";
import React, { useState } from "react";

export interface ISidebarItemProps {
  icon: any;
  label: string;
}

const SidebarItem = (props: ISidebarItemProps) => {
  const [hover, setHover] = useState(false);

  return (
    <HStack
      w="full"
      h="31px"
      spacing={2}
      cursor="pointer"
      as="div"
      _hover={{
        color: "#51459E",
      }}
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      className="alpha__sidebar-item"
    >
      <Box w="25px" h="25px">
        <Icon
          color="#514594"
          opacity={hover ? "1" : "0.8"}
          as={props.icon}
          objectFit="contain"
        />
      </Box>

      <Text
        color="#514594"
        opacity={hover ? "1" : "0.8"}
        fontSize="13px"
        fontWeight="500"
      >
        {props.label}
      </Text>
    </HStack>
  );
};

export default SidebarItem;
