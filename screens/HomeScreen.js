import React, { useState, useEffect } from "react";
import {
  Button,
  Center,
  Box,
  Text,
  ScrollView,
  HStack,
  VStack,
  ZStack,
  Image,
} from "native-base";
import { Entypo } from "@expo/vector-icons";
import { connect } from "react-redux";
import myWalletAPI from "../api/myWallet";
import coinGeckoAPI from "../api/coinGecko";

function HomeScreen(props) {
  const [ownedCryptos, setOwnedCryptos] = useState([]);
  const [currentPrice, setCurrentPrice] = useState([]);
  // console.log(ownedCryptos);
  // console.log(currentPrice)
  console.log(props.authData);

  useEffect(() => {
    myWalletAPI
      .get(`/list-crypto/iMN5147zIkVux9Q6NUDStM48kLfFIV-K`) // Ajouter le token du store dans l'url
      .then((response) => {
        setOwnedCryptos(response.data.ownedCryptos);
      });
  }, []);

  // function printCurrentPrice(current_price) {
  //   console.log(current_price)
  //   return current_price
  // }

  // function getCurrentPrice(id, i) {
  //   coinGeckoAPI.get("/coins/markets", {
  //     params: { vs_currency: "eur", ids: id },
  //     })
  //     .then(async function (response) {
  //       // setCurrentPrice([...currentPrice, response.data[0].current_price])
  //     })
  // }

  const cryptos = ownedCryptos.map((crypto, i) => (
    <Box
      _dark={{ bg: "blueGray.800" }}
      // w="100%"
      rounded="xl"
      py="2"
      // mx="2"
      my="1"
      key={i}
    >
      <HStack justifyContent="space-around" alignItems="center">
        <Center w="15%">
          <Image
            resizeMode="cover"
            source={{
              uri: crypto.image,
            }}
            alt={crypto.name + " logo"}
            size="xs"
          />
        </Center>
        <Box w="45%">
          <Text fontSize="xl" fontWeight="medium">
            {crypto.symbol.toUpperCase() + " " + crypto.name}
          </Text>
          <Text fontSize="sm" fontWeight="light">
            {"0.0025"} | €{/* {getCurrentPrice(crypto.id, i)} */}
          </Text>
        </Box>
        <Box
          w="33%"
          mr="3"
          _text={{ fontSize: "xl", fontWeight: "medium", textAlign: "right" }}
        >
          €{" "}
          {/* {Math.round(crypto.ownedQty * crypto.currentPrice * 100) / 100}  */}
          <Box
            _text={{
              fontSize: "sm",
              fontWeight: "light",
              textAlign: "right",
              color: true ? "#20BF55" : "#EF233C",
            }}
            mt="-20px"
          >
            {" "}
            {/* Condition à remplacer [true] pour changer la couleur du texte (selon le signe de l'array affichée en dessous) */}
            {"+300 +30.75%"}
          </Box>
        </Box>
      </HStack>
    </Box>
  ));

  return (
    <Box flex={1} alignItems="center" _dark={{ bg: "blueGray.900" }} px="0">
      <Box
        _dark={{ bg: "blueGray.800" }}
        w="100%"
        rounded="xl"
        p="5"
        mb="5"
        // mt="5"
      >
        <Text fontSize="4xl" fontWeight="bold" textAlign="center">
          Portfolio
        </Text>
        <Text fontSize="3xl" fontWeight="bold" textAlign="center">
          € 1825.56
        </Text>
        <Text
          fontSize="md"
          fontWeight="light"
          textAlign="center"
          color="#20BF55"
        >
          +550,09 +44,12%
        </Text>
      </Box>
      {/* <ZStack alignItems="center"> */}
      <ScrollView
        _contentContainerStyle={{
          px: "0px",
          // mb: "4",
          // minW: "72",
        }}
      >
        {cryptos}
      </ScrollView>
      {/* </ZStack> */}
      <Box alignSelf="flex-end" m="3">
        <HStack>
          <Text fontSize="md" fontWeight="medium" textAlign="center" my="auto">
            Ajouter une cryptomonnaie{" "}
          </Text>
          <Button
            onPress={() => props.navigation.navigate("AddCrypto")}
            variant="rounded"
            leftIcon={<Entypo name="plus" size={40} color="white" />}
          />
        </HStack>
      </Box>
    </Box>
  );
}

function mapStateToProps(state) {
  return { authData: state.authData };
}

export default connect(mapStateToProps, null)(HomeScreen);
