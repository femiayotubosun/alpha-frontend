import { HStack, Box, Image, Text, Icon } from "@chakra-ui/react";
import React from "react";

type SidebarItemProps = {
  icon: any;
  label: string;
};

const SidebarItem = (props: SidebarItemProps) => {
  return (
    <HStack w="full" h="31px" spacing={2} cursor="pointer">
      <Box w="25px" h="25px">
        <Icon color="#51459E" as={props.icon} objectFit="contain" />
      </Box>

      <Text
        color="#1B1C31"
        _hover={{
          opacity: 0.8,
        }}
        opacity={0.4}
        fontSize="13px"
        fontWeight="500"
      >
        {props.label}
      </Text>
    </HStack>
  );
};

export default SidebarItem;
