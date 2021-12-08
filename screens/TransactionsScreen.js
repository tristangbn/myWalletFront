import React from "react";
import { connect } from "react-redux";
import {
  Button,
  Box,
  Text,
  Center,
  Image,
  VStack,
  HStack,
  ScrollView,
} from "native-base";

import { Entypo } from "@expo/vector-icons";

const cardT = (
  <Box w="95%" flex="1">
    <Box
      ml="10"
      _dark={{ bg: "blueGray.900" }}
      _text={{
        textAlign: "left",
      }}
    >
      <Text italic>21-11-2021 13:57</Text>
    </Box>

    <Center
      position="relative"
      w="96%"
      p="3"
      _dark={{ bg: "blueGray.800" }}
      rounded="xl"
      borderWidth={"0.1"}
    >
      <VStack w="100%">
        <HStack mb="2">
          <Box w="33%" alignItems="center">
            <Text>Buy Price:</Text>
            <Text fontWeight="bold">24 521.12$</Text>
          </Box>
          <Box w="33%" alignItems="center">
            <Text>Pair:</Text>
            <Text fontWeight="bold">BTC/EUR</Text>
          </Box>
          <Box w="33%" alignItems="center">
            <Text>Quantity:</Text>
            <Text fontWeight="bold">0.0025</Text>
          </Box>
        </HStack>
        <HStack>
          <Box w="33%" alignItems="center">
            <Text>Price </Text>
            <Text fontWeight="bold">60.00$</Text>
          </Box>
          <Box w="33%" alignItems="center">
            <Text>Value</Text>
            <Text fontWeight="bold">123.17$</Text>
          </Box>
          <Box w="33%" alignItems="center">
            <Text>Variation:</Text>
            <Text fontWeight="bold">105%</Text>
          </Box>
        </HStack>
      </VStack>
    </Center>
    <Box
      position="absolute"
      ml="89%"
      _dark={{ bg: "blueGray.800" }}
      rounded="3xl"
      py="2%"
      px="3.5%"
      borderColor={"blue.500"}
      borderWidth={"2"}
      //   _text={{ color: "error.700" }}
    >
      T
    </Box>
  </Box>
);

const cardA = (
  <Box w="95%" flex="1">
    <Box
      ml="10"
      _dark={{ bg: "blueGray.900" }}
      _text={{
        textAlign: "left",
      }}
    >
      <Text italic>21-11-2021 13:57</Text>
    </Box>

    <Center
      position="relative"
      w="96%"
      p="3"
      _dark={{ bg: "blueGray.800" }}
      rounded="xl"
      borderWidth={"0.1"}
    >
      <VStack w="100%">
        <HStack mb="2">
          <Box w="33%" alignItems="center">
            <Text>Buy Price:</Text>
            <Text fontWeight="bold">24 521.12$</Text>
          </Box>
          <Box w="33%" alignItems="center">
            <Text>Pair:</Text>
            <Text fontWeight="bold">BTC/EUR</Text>
          </Box>
          <Box w="33%" alignItems="center">
            <Text>Quantity:</Text>
            <Text fontWeight="bold">0.0025</Text>
          </Box>
        </HStack>
        <HStack>
          <Box w="33%" alignItems="center">
            <Text>Price </Text>
            <Text fontWeight="bold">60.00$</Text>
          </Box>
          <Box w="33%" alignItems="center">
            <Text>Value</Text>
            <Text fontWeight="bold">123.17$</Text>
          </Box>
          <Box w="33%" alignItems="center">
            <Text>Variation:</Text>
            <Text fontWeight="bold">105%</Text>
          </Box>
        </HStack>
      </VStack>
    </Center>
    <Box
      position="absolute"
      ml="89%"
      _dark={{ bg: "blueGray.800" }}
      rounded="3xl"
      py="2%"
      px="3.5%"
      borderColor={"error.700"}
      borderWidth={"2"}
      //   _text={{ color: "error.700" }}
    >
      A
    </Box>
  </Box>
);

function TransactionsScreen(props) {
  return (
    <Box flex={1} alignItems="center" _dark={{ bg: "blueGray.900" }} safeArea>
      <Box
        flex={1}
        alignItems="center"
        _text={{
          fontSize: "md",
          fontWeight: "medium",
          color: "white",
          letterSpacing: "lg",
        }}
        w="100%"
      >
        <Center
          w="95%"
          p="3"
          mt="2"
          _dark={{ bg: "blueGray.800" }}
          rounded="2xl"
        >
          <HStack alignItems="center">
            <Image
              source={{
                uri: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
              }}
              alt="bitcoin"
              size="xs"
              mr="2"
            />
            <Text fontSize="3xl">Transactions</Text>
          </HStack>
          <HStack w="100%">
            <Center
              w="50%"
              justifyContent="center"
              rounded="xl"
              _text={{
                fontSize: "lg",
              }}
            >
              Average Buy price:
              <Text fontWeight="bold" fontSize="md">
                38 542$
              </Text>
            </Center>
            <Center
              w="50%"
              rounded="xl"
              _text={{
                fontSize: "lg",
              }}
            >
              Benefits:
              <Text fontWeight="bold">300.15$</Text>
            </Center>
          </HStack>
        </Center>

        <Box m="4" w="100%">
          <HStack>
            <Button
              variant="rounded"
              px="1"
              py="1"
              mr="3"
              ml="6"
              leftIcon={<Entypo name="plus" size={50} color="white" />}
            />
            <Text
              fontSize="md"
              fontWeight="medium"
              textAlign="center"
              my="auto"
              mr="20"
            >
              Add transaction
            </Text>
          </HStack>
        </Box>

        <ScrollView
          w="100%"
          _contentContainerStyle={{
            px: "3%",
            mb: "3",
            minW: "72",
            pb: "5",
          }}
        >
          <VStack space={4} alignItems="center" w="100%">
            {cardT}
            {cardA}
            {cardT}
            {cardT}
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsScreen);
