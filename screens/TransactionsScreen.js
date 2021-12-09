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
  FlatList,
} from "native-base";

import { Entypo } from "@expo/vector-icons";
import TransactionCard from "../components/TransactionCard";

const dataList = [
  {
    date: "21/10/2021 12:57",
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
    date: "21/10/2021 12:57",
    type: "sell",
    sell_price: 0,
    pair: "EUR/BTC",
    quantity: 24,
    incomes: 265,
    id: "2",
  },
  {
    date: "21/10/2021 12:57",
    type: "transfer",
    from: "Coinbase",
    to: "Binance",
    amount: 2,
    price: 100,
    id: "3",
  },
  {
    date: "21/10/2021 12:57",
    type: "sell",
    sell_price: 0,
    pair: "EUR/BTC",
    quantity: 24,
    incomes: 265,
    id: "4",
  },
  {
    date: "21/10/2021 12:57",
    type: "transfer",
    from: "Coinbase",
    to: "Binance",
    amount: 2,
    price: 100,
    id: "5",
  },
];

function TransactionsScreen(props) {
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
        py="3"
        mb="1"
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
          <Text fontWeight="bold" fontSize="4xl">
            Transactions
          </Text>
        </HStack>
        <HStack space={"15%"}>
          <Center
            _text={{
              fontSize: "lg",
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
            }}
          >
            Benefits
            <Text fontWeight="bold" fontSize="md">
              € 300.15
            </Text>
          </Center>
        </HStack>
      </Center>

<<<<<<< HEAD
      <ScrollView
        w="100%"
        _contentContainerStyle={{
          px: "3",
          pb: "5",
        }}
      >
        <VStack alignItems="center" w="100%">
          <HStack ml="-6" mt="7" w="100%">
            <Button
              variant="addBtn"
              px="1"
              py="1"
              mr="3"
              ml="6"
              leftIcon={
                <Entypo
                  name="plus"
                  size={50}
                  color="white"
                  onPress={() => props.navigation.navigate("BuyTransaction")}
                />
              }
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

          <TransactionCard
            date="21/12/2021 13:57"
            type="buy"
            content={{
              buy_price: 0,
              pair: "EUR/BTC",
              quantity: 24,
              price: 60.0,
              value: 3,
              variation: 23,
            }}
          />
          <TransactionCard
            date="21/10/2021 12:57"
            type="sell"
            content={{
              sell_price: 0,
              pair: "EUR/BTC",
              quantity: 24,
              incomes: 265,
            }}
          />
          <TransactionCard
            date="11/02/2020 23:17"
            type="transfer"
            content={{ from: "BTC", to: "EUR", amount: "EUR/BTC", price: 3 }}
          />
          <TransactionCard
            date="21/10/2021 12:57"
            type="sell"
            content={{
              sell_price: 0,
              pair: "EUR/BTC",
              quantity: 24,
              incomes: 265,
            }}
          />
          <TransactionCard
            date="21/12/2021 13:57"
            type="buy"
            content={{
              buy_price: 0,
              pair: "EUR/BTC",
              quantity: 24,
              price: 60.0,
              value: 3,
              variation: 23,
=======
      <VStack alignItems="center" w="100%">
        <HStack ml="-6" mt="4" w="100%">
          <Button
            variant="rounded"
            px="1"
            py="1"
            mr="3"
            ml="6"
            leftIcon={
              <Entypo
                name="plus"
                size={50}
                color="white"
                onPress={() => props.navigation.navigate("BuyTransaction")}
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
>>>>>>> FlatListTransactionScreen
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

      <FlatList
        px="2"
        data={dataList}
        keyExtractor={(item) => item.id}
        renderItem={({ item, i }) =>
          item.type == "buy" ? (
            <TransactionCard
              key={i}
              date={item.date}
              type={item.type}
              content={{
                buy_price: item.buy_price,
                pair: item.pair,
                quantity: item.quantity,
                price: item.price,
                value: item.value,
                variation: item.variation,
              }}
            />
          ) : item.type == "sell" ? (
            <TransactionCard
              key={i}
              date={item.date}
              type={item.type}
              content={{
                sell_price: item.sell_price,
                pair: item.pair,
                quantity: item.quantity,
                incomes: item.incomes,
              }}
            />
          ) : (
            <TransactionCard
              key={i}
              date={item.date}
              type={item.type}
              content={{
                from: item.from,
                to: item.to,
                amount: item.amount,
                price: item.price,
              }}
            />
          )
        }
      />
    </Box>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsScreen);
