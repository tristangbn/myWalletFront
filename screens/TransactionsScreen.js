import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useIsFocused } from "@react-navigation/native";

import {
  Button,
  Box,
  Text,
  Center,
  Image,
  VStack,
  HStack,
  FlatList,
} from "native-base";

import { Entypo } from "@expo/vector-icons";
import { Platform } from "react-native";
import myWalletAPI from "../api/myWallet";

import TransactionCard from "../components/TransactionCard";

function TransactionsScreen(props) {
  const isFocused = useIsFocused();

  const token = props.authData[0].token;
  // console.log("PROPS", props.route.params);
  const [listTransactions, setListTransactions] = useState([]);
  // console.log("listTransactions", listTransactions);

  const dataList = [
    {
      date: new Date("2021-12-09T17:34:54.648+00:00"),
      type: "buy",
      buy_price: 0,
      pair: "EUR/BTC",
      quantity: 24,
      price: 60.0,
      value: 3,
      variation: 23,
      id: "1",
    },
    {
      date: new Date("2021-12-09T13:45:30.350+00:00"),
      type: "sell",
      sell_price: 0,
      pair: "EUR/BTC",
      quantity: 24,
      incomes: 265,
      id: "2",
    },
    {
      date: new Date("2021-12-09T13:45:30.350+00:00"),
      type: "transfer",
      from: "Coinbase",
      to: "Binance",
      amount: 2,
      price: 100,
      id: "3",
    },
    {
      date: new Date("2018-09-07T17:06:27.000Z"),
      type: "sell",
      sell_price: 0,
      pair: "EUR/BTC",
      quantity: 24,
      incomes: 265,
      id: "4",
    },
    {
      date: new Date("2021-12-09T17:34:54.648+00:00"),
      type: "transfer",
      from: "Coinbase",
      to: "Binance",
      amount: 2,
      price: 100,
      id: "5",
    },
  ];

  function dateSort(
    path = [],
    comparator = (a, b) => b.getTime() - a.getTime()
  ) {
    return (a, b) => {
      let _a = a;
      let _b = b;
      for (let key of path) {
        _a = _a[key];
        _b = _b[key];
      }
      return comparator(_a, _b);
    };
  }

  dataList.sort(dateSort(["date"]));

  useEffect(() => {}, []);

  return (
    <Box
      flex={1}
      alignItems="center"
      px="2"
      mb="0"
      _dark={{ bg: "blueGray.900" }}
      safeArea
    >
      <Center
        w="100%"
        py="4"
        mb="1"
        _dark={{ bg: "blueGray.800" }}
        rounded="2xl"
      >
        <HStack alignItems="center" space={5}>
          <Image
            source={{
              uri: props.route.params.image,
            }}
            alt="bitcoin"
            size="xs"
          />
          <Text fontWeight="bold" fontSize="4xl">
            Transactions
          </Text>
        </HStack>
        <HStack space={"15%"}>
          <Center
            _text={{
              fontSize: "lg",
              fontWeight: "light",
            }}
          >
            Average buy price
            <Text fontWeight="bold" fontSize="md">
              € 38 542
            </Text>
          </Center>
          <Center
            _text={{
              fontSize: "lg",
              fontWeight: "light",
            }}
          >
            Benefits
            <Text fontWeight="bold" fontSize="md">
              € 300.15
            </Text>
          </Center>
        </HStack>
      </Center>

      {dataList.length === 0 ? (
        <VStack alignItems="center" px="3" w="100%">
          <HStack mt="4" w="100%">
            <Button
              variant="addBtn"
              px="1"
              py="1"
              mr="3"
              ml="3.5%"
              leftIcon={
                <Entypo
                  name="plus"
                  size={50}
                  color="white"
                  onPress={() =>
                    props.navigation.navigate("AddTransaction", {
                      id: props.route.params.id,
                      symbol: props.route.params.symbol,
                    })
                  }
                />
              }
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
        </VStack>
      ) : (
        <FlatList
          px="2"
          data={dataList}
          renderItem={({ item }) => (
            <>
              {item.id === dataList[0].id && ( // Avant le premier élément de la liste, on affiche le bouton Add Transaction
                <VStack alignItems="center" w="100%">
                  <HStack mt="4" w="100%">
                    <Button
                      variant="addBtn"
                      px="1"
                      py="1"
                      mr="3"
                      ml="3.5%"
                      leftIcon={
                        <Entypo
                          name="plus"
                          size={50}
                          color="white"
                          onPress={() =>
                            props.navigation.navigate("AddTransaction", {
                              id: props.route.params.id,
                              symbol: props.route.params.symbol,
                            })
                          }
                        />
                      }
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
                </VStack>
              )}

              <TransactionCard
                key={item.id}
                date={
                  Platform.OS == "android"
                    ? `${item.date.getDate()}/${
                        item.date.getMonth() + 1
                      }/${item.date.getFullYear()}    ${item.date.getHours()}:${item.date.getMinutes()}:${item.date.getSeconds()}`
                    : item.date.toLocaleString("fr-FR", { timeZone: "UTC" })
                }
                type={item.type}
                content={{
                  buy_price: item.buy_price,
                  sell_price: item.sell_price,
                  pair: item.pair,
                  quantity: item.quantity,
                  price: item.price,
                  value: item.value,
                  variation: item.variation,
                  incomes: item.incomes,
                  from: item.from,
                  to: item.to,
                  amount: item.amount,
                }}
              />
              {item.id === dataList[dataList.length - 1].id && // Petit effet graphique en fin de liste
                Platform.OS === "ios" && (
                  <Box w="100%" h={10}>
                    <VStack space={1}>
                      <Box
                        h="2"
                        w="1"
                        rounded="full"
                        _dark={{ bg: "violet.800" }}
                        ml="10"
                        mt="-1"
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
                      <Box
                        h="2"
                        w="1"
                        rounded="full"
                        _dark={{ bg: "violet.800" }}
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
                      <Box
                        h="2"
                        w="1"
                        rounded="full"
                        _dark={{ bg: "violet.800" }}
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
                    </VStack>
                  </Box>
                )}
            </>
          )}
        />
      )}
    </Box>
  );
}

function mapStateToProps(state) {
  return { authData: state.authData };
}

export default connect(mapStateToProps, null)(TransactionsScreen);
