import React, { useState, useEffect } from "react";
import { RefreshControl } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import {
  Button,
  Center,
  Box,
  Text,
  ScrollView,
  HStack,
  VStack,
  Image,
  Flex,
  Pressable,
} from "native-base";
import { Entypo } from "@expo/vector-icons";
import { connect } from "react-redux";
import { Platform } from "react-native";

import myWalletAPI from "../api/myWallet";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

function HomeScreen(props) {
  const [refreshing, setRefreshing] = React.useState(false);
  const isFocused = useIsFocused();

  const [ownedCryptos, setOwnedCryptos] = useState([]);
  const [total, setTotal] = useState(0);

  const token = props.authData[0].token;
  const user = props.authData[0].firstName;

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    console.log("------------LOADING-----------");

    myWalletAPI.get(`/list-crypto/${token}`).then((response) => {
      let total = 0;

      if (response.data.ownedCryptos.length > 0) {
        for (let i = 0; i < response.data.ownedCryptos.length; i++) {
          total +=
            response.data.ownedCryptos[i].current_price *
            response.data.ownedCryptos[i].totalQuantity;
        }
      }

      setTotal(total);
      setOwnedCryptos(response.data.ownedCryptos);
    });
  }, [isFocused, refreshing]);

  let cryptos;
  if (isFocused) {
    cryptos = ownedCryptos.map((crypto, i) => (
      <Pressable
        key={i}
        onPress={() =>
          props.navigation.navigate("ListTransactions", {
            id: crypto.id,
            symbol: crypto.symbol,
          })
        }
      >
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
              m={1}
              rounded="3xl"
              style={{
                transform: [
                  {
                    scale: isPressed ? 0.96 : 1,
                  },
                ],
              }}
            >
              <Box rounded="2xl" py="2" pr="3" my="1" ml="1">
                <HStack justifyContent="space-around" alignItems="center">
                  <Center w="17%">
                    <Image
                      resizeMode="cover"
                      source={{
                        uri: crypto.image,
                      }}
                      alt={crypto.name + " logo"}
                      size="xs"
                    />
                  </Center>
                  <VStack w="80%">
                    <HStack>
                      <Text fontSize="xl" fontWeight="medium">
                        {crypto.symbol.toUpperCase() + " " + crypto.name}
                      </Text>
                      <Text
                        fontSize="xl"
                        fontWeight="medium"
                        style={{ flex: 1 }}
                        textAlign="right"
                      >
                        {"€ " +
                          Math.round(
                            crypto.totalQuantity * crypto.current_price * 100
                          ) /
                            100}
                      </Text>
                    </HStack>
                    <HStack>
                      <Text fontSize="sm" fontWeight="light">
                        {crypto.totalQuantity + " | € " + crypto.current_price}{" "}
                        {/*  */}
                      </Text>
                      <Text
                        fontSize="sm"
                        fontWeight="light"
                        style={{ flex: 1 }}
                        textAlign="right"
                        color={
                          true ? "#20BF55" : "#EF233C"
                        } /* Condition à remplacer [true] pour changer la couleur du texte (selon le signe de l'array affichée en dessous) */
                      >
                        +300 +30.75%
                      </Text>
                    </HStack>
                  </VStack>
                </HStack>
              </Box>
            </Box>
          );
        }}
      </Pressable>
    ));
  }

  return (
    <Box flex="1" _dark={{ bg: "blueGray.900" }} px="2">
      <Box
        _dark={{ bg: "blueGray.800" }}
        w="100%"
        rounded="xl"
        p="5"
        mb="2"
        pt={Platform.OS === "ios" ? "10" : "5"}
      >
        <Text fontSize="4xl" fontWeight="bold" textAlign="center">
          {user + "'s Portfolio"}
        </Text>
        <Text fontSize="3xl" fontWeight="bold" textAlign="center">
          {"€ " + Math.round(total * 100) / 100}
        </Text>
        <Text
          fontSize="md"
          fontWeight="light"
          textAlign="center"
          color={
            true ? "#20BF55" : "#EF233C"
          } /* Condition à remplacer [true] pour changer la couleur du texte (selon le signe de l'array affichée en dessous) */
          shadow={{
            shadowColor: true ? "#20BF55" : "#EF233C",
            shadowOffset: {
              width: -1,
              height: 1,
            },
            shadowOpacity: 1,
            shadowRadius: 5.0,
            elevation: 1,
          }}
        >
          {"+550,09 +44,12%"}
        </Text>
      </Box>
      <Box flex="1">
        <ScrollView
          _contentContainerStyle={{
            px: "0",
            pb: "75",
          }}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintcolor="#ffffff"
              title="Slide to refresh"
              titleColor="#ffffff"
            />
          }
        >
          {cryptos}
        </ScrollView>
        <Flex justifyContent="flex-end">
          <Button
            bottom="3"
            right="3"
            position="absolute"
            alignSelf="flex-end"
            onPress={() => props.navigation.navigate("AddCrypto")}
            variant="addBtn"
            px="1"
            py="1"
            leftIcon={<Entypo name="plus" size={50} color="white" />}
          />
        </Flex>
      </Box>
    </Box>
  );
}

function mapStateToProps(state) {
  return { authData: state.authData };
}

export default connect(mapStateToProps, null)(HomeScreen);
