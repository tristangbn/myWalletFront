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
import TransactionCard from "../components/TransactionCard";

// const cardT = (
//   <Box w="95%" flex="1">
//     <Box
//       ml="10"
//       _dark={{ bg: "blueGray.900" }}
//       _text={{
//         textAlign: "left",
//       }}
//     >
//       <Text italic>21-11-2021 13:57</Text>
//     </Box>

//     <Center
//       position="relative"
//       w="96%"
//       p="3"
//       _dark={{ bg: "blueGray.800" }}
//       rounded="xl"
//       borderWidth={"0.1"}
//     >
//       <VStack w="100%">
//         <HStack mb="2">
//           <Box w="33%" alignItems="center">
//             <Text>Buy Price:</Text>
//             <Text fontWeight="bold">24 521.12$</Text>
//           </Box>
//           <Box w="33%" alignItems="center">
//             <Text>Pair:</Text>
//             <Text fontWeight="bold">BTC/EUR</Text>
//           </Box>
//           <Box w="33%" alignItems="center">
//             <Text>Quantity:</Text>
//             <Text fontWeight="bold">0.0025</Text>
//           </Box>
//         </HStack>
//         <HStack>
//           <Box w="33%" alignItems="center">
//             <Text>Price </Text>
//             <Text fontWeight="bold">60.00$</Text>
//           </Box>
//           <Box w="33%" alignItems="center">
//             <Text>Value</Text>
//             <Text fontWeight="bold">123.17$</Text>
//           </Box>
//           <Box w="33%" alignItems="center">
//             <Text>Variation:</Text>
//             <Text fontWeight="bold">105%</Text>
//           </Box>
//         </HStack>
//       </VStack>
//     </Center>
//     <Box
//       position="absolute"
//       ml="89%"
//       _dark={{ bg: "blueGray.800" }}
//       rounded="3xl"
//       py="2%"
//       px="3.5%"
//       borderColor={"blue.500"}
//       borderWidth={"2"}
//       //   _text={{ color: "error.700" }}
//     >
//       T
//     </Box>
//   </Box>
// );

// const cardA = (
//   <Box w="95%" flex="1">
//     <Box
//       ml="10"
//       _dark={{ bg: "blueGray.900" }}
//       _text={{
//         textAlign: "left",
//       }}
//     >
//       <Text italic>21-11-2021 13:57</Text>
//     </Box>

//     <Center
//       position="relative"
//       w="96%"
//       p="3"
//       _dark={{ bg: "blueGray.800" }}
//       rounded="xl"
//       borderWidth={"0.1"}
//     >
//       <VStack w="100%">
//         <HStack mb="2">
//           <Box w="33%" alignItems="center">
//             <Text>Buy Price:</Text>
//             <Text fontWeight="bold">24 521.12$</Text>
//           </Box>
//           <Box w="33%" alignItems="center">
//             <Text>Pair:</Text>
//             <Text fontWeight="bold">BTC/EUR</Text>
//           </Box>
//           <Box w="33%" alignItems="center">
//             <Text>Quantity:</Text>
//             <Text fontWeight="bold">0.0025</Text>
//           </Box>
//         </HStack>
//         <HStack>
//           <Box w="33%" alignItems="center">
//             <Text>Price </Text>
//             <Text fontWeight="bold">60.00$</Text>
//           </Box>
//           <Box w="33%" alignItems="center">
//             <Text>Value</Text>
//             <Text fontWeight="bold">123.17$</Text>
//           </Box>
//           <Box w="33%" alignItems="center">
//             <Text>Variation:</Text>
//             <Text fontWeight="bold">105%</Text>
//           </Box>
//         </HStack>
//       </VStack>
//     </Center>
//     <Box
//       position="absolute"
//       ml="89%"
//       _dark={{ bg: "blueGray.800" }}
//       rounded="3xl"
//       py="2%"
//       px="3.5%"
//       borderColor={"error.700"}
//       borderWidth={"2"}
//       //   _text={{ color: "error.700" }}
//     >
//       A
//     </Box>
//   </Box>
// );

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
        // shadow={{
        //   shadowColor: "#000000",
        //   shadowOffset: {
        //     width: -1,
        //     height: 2,
        //   },
        //   shadowOpacity: 1,
        //   shadowRadius: 1.0,
        //   elevation: 1,
        // }}
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
              // shadow={{
              //   shadowColor: "#5b21b6",
              //   shadowOffset: {
              //     width: 0,
              //     height: 0,
              //   },
              //   shadowOpacity: 1,
              //   shadowRadius: 5.0,
              //   elevation: 1,
              // }}
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
            }}
          />
        </VStack>
      </ScrollView>
    </Box>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsScreen);
