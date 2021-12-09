import React, { useEffect, useState } from "react";
import { Box, Text, Center, VStack, HStack, Circle } from "native-base";
import { Platform } from "react-native";

function TransactionCard(props) {
  const cardHeight = 150;

  let transaction;
  if (props.type === "buy") {
    transaction = (
      <Box w="100%" h={cardHeight}>
        {Platform.OS === "ios" && (
          <Box
            h="100%"
            w="1"
            _dark={{ bg: "violet.800" }}
            position="absolute"
            ml="10"
            shadow={{
              shadowColor: "#5b21b6",
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 1,
              shadowRadius: 5.0,
              elevation: 1,
            }}
          />
        )}

        <Box
          ml="16"
          _text={{
            textAlign: "left",
            fontStyle: "italic",
          }}
        >
          {props.date}
        </Box>

        <Center
          position="relative"
          w="99%"
          py="2"
          _dark={{ bg: "blueGray.800" }}
          rounded="3xl"
        >
          <VStack w="100%" space="1">
            <HStack>
              <Box w="33%" alignItems="center">
                <Text fontWeight="light">Buy Price</Text>
                <Text fontWeight="bold">€ {props.content.buy_price}</Text>
              </Box>
              <Box w="33%" alignItems="center">
                <Text fontWeight="light">Pair</Text>
                <Text fontWeight="bold">{props.content.pair}</Text>
              </Box>
              <Box w="33%" alignItems="center">
                <Text fontWeight="light">Quantity</Text>
                <Text fontWeight="bold">{props.content.quantity}</Text>
              </Box>
            </HStack>
            <HStack>
              <Box w="33%" alignItems="center">
                <Text fontWeight="light">Price</Text>
                <Text fontWeight="bold">€ {props.content.price}</Text>
              </Box>
              <Box w="33%" alignItems="center">
                <Text fontWeight="light">Value</Text>
                <Text fontWeight="bold">€ {props.content.value}</Text>
              </Box>
              <Box w="33%" alignItems="center">
                <Text fontWeight="light">Variation</Text>
                <Text fontWeight="bold">{props.content.variation}%</Text>
              </Box>
            </HStack>
          </VStack>
        </Center>
        <Circle
          position="absolute"
          alignSelf="flex-end"
          _dark={{ bg: "blueGray.800" }}
          borderColor={"#20BF55"}
          borderWidth={"2"}
          size={8}
          _text={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#20BF55",
          }}
          shadow={{
            shadowColor: "#000000",
            shadowOffset: {
              width: -1,
              height: 2,
            },
            shadowOpacity: 1,
            shadowRadius: 1.0,
            elevation: 1,
          }}
        >
          B
        </Circle>
      </Box>
    );
  } else if (props.type === "sell") {
    transaction = (
      <Box w="100%" h={cardHeight}>
        {Platform.OS === "ios" && (
          <Box
            h="100%"
            w="1"
            _dark={{ bg: "violet.800" }}
            position="absolute"
            ml="10"
            shadow={{
              shadowColor: "#5b21b6",
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 1,
              shadowRadius: 5.0,
              elevation: 1,
            }}
          />
        )}

        <Box
          ml="16"
          _text={{
            textAlign: "left",
            fontStyle: "italic",
          }}
        >
          {props.date}
        </Box>

        <Center
          position="relative"
          w="99%"
          py="2"
          _dark={{ bg: "blueGray.800" }}
          rounded="3xl"
        >
          <VStack w="100%" space="1">
            <HStack>
              <Box w="33%" alignItems="center">
                <Text fontWeight="light">Sell Price</Text>
                <Text fontWeight="bold">€ {props.content.sell_price}</Text>
              </Box>
              <Box w="33%" alignItems="center">
                <Text fontWeight="light">Pair</Text>
                <Text fontWeight="bold">{props.content.pair}</Text>
              </Box>
              <Box w="33%" alignItems="center">
                <Text fontWeight="light">Quantity</Text>
                <Text fontWeight="bold">{props.content.quantity}</Text>
              </Box>
            </HStack>
            <HStack>
              <Box w="33%" alignItems="center">
                <Text fontWeight="light">Incomes</Text>
                <Text fontWeight="bold">€ {props.content.incomes}</Text>
              </Box>
            </HStack>
          </VStack>
        </Center>
        <Circle
          position="absolute"
          alignSelf="flex-end"
          _dark={{ bg: "blueGray.800" }}
          borderColor={"#EF233C"}
          borderWidth={"2"}
          size={8}
          _text={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#EF233C",
          }}
          shadow={{
            shadowColor: "#000000",
            shadowOffset: {
              width: -1,
              height: 2,
            },
            shadowOpacity: 1,
            shadowRadius: 1.0,
            elevation: 1,
          }}
        >
          S
        </Circle>
      </Box>
    );
  } else if (props.type === "transfer") {
    transaction = (
      <Box w="100%" h={cardHeight}>
        {Platform.OS === "ios" && (
          <Box
            h="100%"
            w="1"
            _dark={{ bg: "violet.800" }}
            position="absolute"
            ml="10"
            shadow={{
              shadowColor: "#5b21b6",
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 1,
              shadowRadius: 5.0,
              elevation: 1,
            }}
          />
        )}

        <Box
          ml="16"
          _text={{
            textAlign: "left",
            fontStyle: "italic",
          }}
        >
          {props.date}
        </Box>

        <Center
          position="relative"
          w="99%"
          py="2"
          _dark={{ bg: "blueGray.800" }}
          rounded="3xl"
        >
          <VStack w="100%" space="1">
            <HStack>
              <Box w="33%" alignItems="center">
                <Text fontWeight="light">From</Text>
                <Text fontWeight="bold">{props.content.from}</Text>
              </Box>
              <Box w="33%" alignItems="center">
                <Text fontWeight="light">To</Text>
                <Text fontWeight="bold">{props.content.to}</Text>
              </Box>
              <Box w="33%" alignItems="center">
                <Text fontWeight="light">Amount</Text>
                <Text fontWeight="bold">{props.content.amount}</Text>
              </Box>
            </HStack>
            <HStack>
              <Box w="33%" alignItems="center">
                <Text fontWeight="light">Price</Text>
                <Text fontWeight="bold">€ {props.content.price}</Text>
              </Box>
            </HStack>
          </VStack>
        </Center>
        <Circle
          position="absolute"
          alignSelf="flex-end"
          _dark={{ bg: "blueGray.800" }}
          borderColor={"blue.500"}
          borderWidth={"2"}
          size={8}
          _text={{
            textAlign: "center",
            fontWeight: "bold",
            color: "blue.500",
          }}
          shadow={{
            shadowColor: "#000000",
            shadowOffset: {
              width: -1,
              height: 2,
            },
            shadowOpacity: 1,
            shadowRadius: 1.0,
            elevation: 1,
          }}
        >
          T
        </Circle>
      </Box>
    );
  } else {
  }

  return <>{transaction}</>;
}

export default TransactionCard;
