import { Container, HStack, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import MainDashboard from "../src/components/MainDashboard";
import RightSidebar from "../src/components/RightSidebar";
import Sidebar from "../src/components/Sidebar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Container maxW="100vw" p={0}>
      <HStack w="full" h="100vh" p={0} spacing={0}>
        <Sidebar />
        <MainDashboard />
        <RightSidebar />
      </HStack>
    </Container>
  );
};

export default Home;
