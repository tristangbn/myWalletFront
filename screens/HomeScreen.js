import React from "react";
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

function HomeScreen(props) {
  const data = [
    {
      uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1024px-Bitcoin.svg.png",
      cryptoTitle: "BTC Bitcoin",
      ownedQty: 0.0025,
      currentPrice: 50000.23,
      variation: "+300 +30.75%",
    },
    {
      uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1024px-Bitcoin.svg.png",
      cryptoTitle: "BTC Bitcoin",
      ownedQty: 0.0025,
      currentPrice: 50000.23,
      variation: "+300 +30.75%",
    },
    {
      uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1024px-Bitcoin.svg.png",
      cryptoTitle: "BTC Bitcoin",
      ownedQty: 0.0025,
      currentPrice: 50000.23,
      variation: "+300 +30.75%",
    },
    {
      uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1024px-Bitcoin.svg.png",
      cryptoTitle: "BTC Bitcoin",
      ownedQty: 0.0025,
      currentPrice: 50000.23,
      variation: "+300 +30.75%",
    },
    {
      uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1024px-Bitcoin.svg.png",
      cryptoTitle: "BTC Bitcoin",
      ownedQty: 0.0025,
      currentPrice: 50000.23,
      variation: "+300 +30.75%",
    },
    {
      uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1024px-Bitcoin.svg.png",
      cryptoTitle: "BTC Bitcoin",
      ownedQty: 0.0025,
      currentPrice: 50000.23,
      variation: "+300 +30.75%",
    },
    {
      uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1024px-Bitcoin.svg.png",
      cryptoTitle: "BTC Bitcoin",
      ownedQty: 0.0025,
      currentPrice: 50000.23,
      variation: "+300 +30.75%",
    },
  ];

  const cartes = data.map((crypto, i) => (
    <Box
      _dark={{ bg: "blueGray.800" }}
      // width="95%"
      rounded="xl"
      py="7"
      my="1"
      key={i}
    >
      <HStack space={3} justifyContent="space-around" alignItems="center">
        <Center w="16" px="0" ml="5">
          <Image
            source={{
              uri: crypto.uri,
            }}
            alt={crypto.cryptoTitle}
            size="sm"
          />
        </Center>
        <Center w="40" px="0" mx="0">
          <Text fontSize="xl" fontWeight="medium">
            {crypto.cryptoTitle}
          </Text>
          <Text fontSize="sm">
            {crypto.ownedQty} | € {crypto.currentPrice}
          </Text>
        </Center>
        <Center w="32" px="0" mx="0">
          <Text fontSize="xl" fontWeight="medium">
            € {Math.round(crypto.ownedQty * crypto.currentPrice * 100) / 100}
          </Text>
          <Text fontSize="sm" color="#20BF55">
            {crypto.variation}
          </Text>
        </Center>
      </HStack>
    </Box>
  ));

  return (
    <Box flex={1} alignItems="center" _dark={{ bg: "blueGray.900" }} px="0">
      <Box
        _dark={{ bg: "blueGray.800" }}
        width="100%"
        rounded="xl"
        py="7"
        mb="10"
        mt="5"
      >
        <Text fontSize="4xl" fontWeight="bold" textAlign="center">
          Portfolio
        </Text>
        <Text fontSize="xl" fontWeight="medium" textAlign="center">
          € 1825.56
        </Text>
        <Text
          fontSize="md"
          fontWeight="medium"
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
        {cartes}
      </ScrollView>
      {/* </ZStack> */}
      <Box alignSelf="flex-end" m="6">
        <HStack>
          <Text fontSize="md" fontWeight="medium" textAlign="center" my='auto'>Ajouter une cryptomonnaie  </Text>
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

export default HomeScreen;
