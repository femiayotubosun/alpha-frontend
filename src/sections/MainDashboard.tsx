import {
  HStack,
  Flex,
  Box,
  Text,
  VStack,
  Image,
  Heading,
  Input,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import MainDashButton from "../components/MainDashButton";
import MyChart from "../components/MyChart";
import StatCard from "../components/StatCard";
import StatProgress from "../components/StatProgress";

const MainDashboard = () => {
  return (
    <Flex
      w="58%"
      flexDir="column"
      overflow="auto"
      height="100vh"
      css={{
        "&::-webkit-scrollbar": {
          width: "7px",
        },
        "&::-webkit-scrollbar-track": {
          width: "12px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#8F92A1",
          borderRadius: "14px",
        },

        scrollbarColor: "#8f92A1 #fff",
        scrollbarTrackColor: "transparent",
        scrollbarWidth: "thin",
      }}
    >
      <HStack w="100%" minH="68px" borderBottom="1px solid #EDF3FA" pl="36px">
        <HStack h="full" w="80%" spacing={4}>
          <Input
            variant="unstyled"
            placeholder="Search..."
            color="#8F92A1"
            fontSize="14px"
          />
          <Icon as={RiSearch2Line} color="#8F92A1" cursor="pointer" />
        </HStack>
      </HStack>
      <VStack w="100%" px="49px" pt="42px" spacing={12}>
        <Box
          bg="#51459E"
          boxShadow="0px 14px 44px rgba(81, 69, 158, 0.2)"
          borderRadius="10px"
          width="full"
          height="220px"
          display="flex"
          p={0}
        >
          <VStack h="full" w="55%" pl="28px" pt="32px" spacing={8}>
            <VStack alignItems="flex-start">
              <Heading
                textAlign="left"
                fontSize="33px"
                fontWeight="500"
                color="#84E8F4"
              >
                Upgrade your plan
              </Heading>
              <Text textAlign="left" color="#DEE1E6" mb="24px">
                70% discount for 1 year of subscription
              </Text>
            </VStack>

            <HStack spacing={4} mt={24}>
              <MainDashButton
                text="Go Premium"
                textColor="#51459E"
                bg="#84E8F4"
                borderColor="none"
              />
              <MainDashButton
                text="Try for free"
                textColor="#fff"
                bg="transparent"
                borderColor="#fff"
              />
            </HStack>
          </VStack>
          <VStack h="full" w="45%">
            <Image
              src="/assets/images/illustration.png"
              objectFit="cover"
              h="full"
              w="full"
            />
          </VStack>
        </Box>

        <HStack w="full" h="290px" spacing={6}>
          <VStack w="65%" h="full" spacing={2} alignItems="flex-start">
            <VStack alignItems="flex-start" spacing={1}>
              <Heading fontSize="22px" color="#1B1C31" letterSpacing="tight">
                Daily Visitors
              </Heading>
              <Text
                fontSize="10px"
                color="black"
                opacity={0.4}
                fontWeight="500"
              >
                Today vs Yesterday
              </Text>
            </VStack>
            <Box w="full" h="full">
              <MyChart />
            </Box>
          </VStack>

          <VStack w="30%" h="full" pt={10} spacing={4} alignItems="flex-start">
            <Text
              fontSize="9.8px"
              fontWeight="500"
              lineHeight="12.53px"
              color="#000"
              opacity={0.4}
              fontFamily="'Noto Sans', sans-serif"
            >
              Overview
            </Text>
            <HStack w="full" justifyContent="space-around" alignItems="center">
              <StatCard bg="#ECE9FF" stat="560" text="Deals" />
              <StatCard bg="#E8FCFF" stat="$21K" text="Order Value" />
            </HStack>
            <VStack w="full" h="full" justifyContent="space-around">
              <StatProgress
                title="Meetings"
                color="progress-green"
                progress={20}
                total={100}
              />
              <StatProgress
                title="Deals"
                color="progress-purple"
                progress={60}
                total={100}
              />
              <StatProgress
                title="Order Value"
                color="progress-black"
                progress={40}
                total={100}
              />
            </VStack>
          </VStack>
        </HStack>
        <HStack w="full" bg="green.100">
          <VStack h="355px"></VStack>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default MainDashboard;

// NOTE scroll
