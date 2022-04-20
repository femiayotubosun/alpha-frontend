import { Flex } from "@chakra-ui/react";
import React from "react";
import MainDashboard from "../src/sections/MainDashboard";
import RightSidebar from "../src/sections/RightSidebar";
import Sidebar from "../src/sections/Sidebar";

const dashboard = () => {
  return (
    <Flex h="100vh" maxWidth="100vw" flexDir="row" overflow="auto">
      <Sidebar />
      <MainDashboard />
      <RightSidebar />
    </Flex>
  );
};

export default dashboard;
