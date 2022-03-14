import { VStack, HStack, Text, Box, Image } from "@chakra-ui/react";
import React from "react";
import SidebarItem from "./SidebarItem";
import {
  RiDashboardFill,
  RiShoppingCartFill,
  RiFeedbackFill,
} from "react-icons/ri";
import { HiGift, HiCog, HiUser } from "react-icons/hi";

const Sidebar = () => {
  return (
    <VStack
      w="18%"
      h="100vh"
      bg="rgba(255, 255, 255, 0.6)"
      opacity={0.6}
      p={8}
      spacing={24}
      left="0"
      position="fixed"
      backdropFilter="blur(34px)"
      borderRight="1px solid #EDF3FA"
    >
      <HStack w="full">
        <Box w="22px" h="22px">
          <Image src="/assets/images/alpha-icon.png" objectFit="contain" />
        </Box>

        <Text
          color="#51459E"
          fontWeight="500"
          fontSize="17px"
          filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
        >
          Alpha Store
        </Text>
      </HStack>

      <VStack w="full" spacing={4}>
        <SidebarItem icon={RiDashboardFill} label="Dashboard" />
        <SidebarItem icon={RiShoppingCartFill} label="Orders" />
        <SidebarItem icon={HiUser} label="Customers" />
        <SidebarItem icon={HiGift} label="Products" />
        <SidebarItem icon={RiFeedbackFill} label="Feedback" />
        <SidebarItem icon={HiCog} label="Settings" />
      </VStack>

      {/* Sidebar Item */}
    </VStack>
  );
};

export default Sidebar;
