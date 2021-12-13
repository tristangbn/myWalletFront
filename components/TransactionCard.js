import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Center,
  VStack,
  HStack,
  Circle,
  Pressable,
} from "native-base";
import { Platform } from "react-native";

function TransactionCard(props) {
  const cardHeight = 150;

  let positive = props.content.variation >= 0;

  let transaction;
  if (props.type === "buy") {
    transaction = (
      <Box w="100%" h={cardHeight}>
        {/* {Platform.OS === "ios" && (
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
        )} */}

        <Box
          ml="16"
          _text={{
            textAlign: "left",
            fontStyle: "italic",
          }}
        >
          {props.date}
        </Box>

        <Pressable>
          {({ isHovered, isPressed }) => {
            return (
              <Box
                bg={
                  isPressed
                    ? "blueGray.700"
                    : isHovered
                    ? "cyan.800"
                    : "blueGray.800"
                }
                rounded="3xl"
                style={{
                  transform: [
                    {
                      scale: isPressed ? 0.96 : 1,
                    },
                  ],
                }}
              >
                <Center position="relative" w="99%" py="2" rounded="3xl">
                  <VStack w="100%" space="1">
                    <HStack>
                      <Box w="33%" alignItems="center">
                        <Text fontWeight="light">Buy Price</Text>
                        <Text fontWeight="bold">
                          {Math.round(props.content.price * 100) / 100} €
                        </Text>
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
                        <Text fontWeight="light">Total Cost</Text>
                        <Text fontWeight="bold">
                          {Math.round(props.content.cost * 100) / 100} €
                        </Text>
                      </Box>
                      <Box w="33%" alignItems="center">
                        <Text fontWeight="light">Value</Text>
                        <Text fontWeight="bold">
                          {Math.round(props.content.value * 100) / 100} €
                        </Text>
                      </Box>
                      <Box w="33%" alignItems="center">
                        <Text fontWeight="light">Variation</Text>
                        <Text
                          fontWeight="bold"
                          color={positive ? "#20BF55" : "#EF233C"}
                          shadow={{
                            shadowColor: positive ? "#20BF55" : "#EF233C",
                            shadowOffset: {
                              width: -1,
                              height: 1,
                            },
                            shadowOpacity: 1,
                            shadowRadius: 5.0,
                            elevation: 1,
                          }}
                        >
                          {positive
                            ? `+${
                                Math.round(props.content.variation * 100) / 100
                              }`
                            : Math.round(props.content.variation * 100) / 100}
                          %
                        </Text>
                      </Box>
                    </HStack>
                  </VStack>
                </Center>
              </Box>
            );
          }}
        </Pressable>
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
            shadowColor: "#20BF55",
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 1,
            shadowRadius: 2.0,
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
        {/* {Platform.OS === "ios" && (
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
        )} */}

        <Box
          ml="16"
          _text={{
            textAlign: "left",
            fontStyle: "italic",
          }}
        >
          {props.date}
        </Box>
        <Pressable>
          {({ isHovered, isPressed }) => {
            return (
              <Box
                bg={
                  isPressed
                    ? "blueGray.700"
                    : isHovered
                    ? "cyan.800"
                    : "blueGray.800"
                }
                rounded="3xl"
                style={{
                  transform: [
                    {
                      scale: isPressed ? 0.96 : 1,
                    },
                  ],
                }}
              >
                <Center position="relative" w="99%" py="2" rounded="3xl">
                  <VStack w="100%" space="1">
                    <HStack>
                      <Box w="33%" alignItems="center">
                        <Text fontWeight="light">Sell Price</Text>
                        <Text fontWeight="bold">{props.content.price} €</Text>
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
                        <Text fontWeight="light">Revenue</Text>
                        <Text fontWeight="bold">{props.content.income} €</Text>
                      </Box>
                    </HStack>
                  </VStack>
                </Center>
              </Box>
            );
          }}
        </Pressable>
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
            shadowColor: "#EF233C",
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 1,
            shadowRadius: 2.0,
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
        {/* {Platform.OS === "ios" && (
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
        )} */}

        <Box
          ml="16"
          _text={{
            textAlign: "left",
            fontStyle: "italic",
          }}
        >
          {props.date}
        </Box>
        <Pressable>
          {({ isHovered, isPressed }) => {
            return (
              <Box
                bg={
                  isPressed
                    ? "blueGray.700"
                    : isHovered
                    ? "cyan.800"
                    : "blueGray.800"
                }
                rounded="3xl"
                style={{
                  transform: [
                    {
                      scale: isPressed ? 0.96 : 1,
                    },
                  ],
                }}
              >
                <Center position="relative" w="99%" py="2" rounded="3xl">
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
                        <Text fontWeight="light">Quantity</Text>
                        <Text fontWeight="bold">{props.content.quantity}</Text>
                      </Box>
                    </HStack>
                    <HStack>
                      <Box w="33%" alignItems="center">
                        <Text fontWeight="light">Fees</Text>
                        <Text fontWeight="bold">{props.content.fees} </Text>
                        {/* Voir si on ne mettrait pas props.content.price */}
                      </Box>
                    </HStack>
                  </VStack>
                </Center>
              </Box>
            );
          }}
        </Pressable>
        <Circle
          position="absolute"
          alignSelf="flex-end"
          _dark={{ bg: "blueGray.800" }}
          borderColor={"#3b82f6"}
          borderWidth={"2"}
          size={8}
          _text={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#3b82f6",
          }}
          shadow={{
            shadowColor: "#3b82f6",
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 1,
            shadowRadius: 2.0,
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
