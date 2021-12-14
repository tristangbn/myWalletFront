import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Box, Flex, HStack, Text } from "native-base";
import { useIsFocused } from "@react-navigation/native";

import coinGeckoAPI from "../api/coinGecko";
import myWalletAPI from "../api/myWallet";
import StockCard from "../components/StockCard";
import { SwipeListView } from "react-native-swipe-list-view";

function StocksScreen(props) {
  const token = props.authData[0].token;
  const [cryptoStocks, setCryptoStocks] = useState([]);
  const isFocused = useIsFocused();
  // console.log("cryptoStocks", cryptoStocks);

  useEffect(() => {
    if (isFocused) {
      console.log("<--------STOCKSCREEN-------->");
      myWalletAPI.get(`/stocks/${token}`).then((response) => {
        console.log(response.data.cryptos[0].prices);
        setCryptoStocks(response.data.cryptos);
      });
      // setCryptoStocks([
      //   {
      //     currentPrice: 51.73,
      //     id: "terra-luna",
      //     image:
      //       "https://assets.coingecko.com/coins/images/8284/large/luna1557227471663.png?1567147072",
      //     name: "Terra",
      //     price_change_24h: 2.54,
      //   },
      //   {
      //     currentPrice: 71.54,
      //     id: "avalanche-2",
      //     image:
      //       "https://assets.coingecko.com/coins/images/12559/large/coin-round-red.png?1604021818",
      //     name: "Avalanche",
      //     price_change_24h: 0.563881,
      //   },
      //   {
      //     currentPrice: 0.00002968,
      //     id: "shiba-inu",
      //     image:
      //       "https://assets.coingecko.com/coins/images/11939/large/shiba.png?1622619446",
      //     name: "Shiba Inu",
      //     price_change_24h: -5.05053e-7,
      //   },
      //   {
      //     currentPrice: 0.885804,
      //     id: "binance-usd",
      //     image:
      //       "https://assets.coingecko.com/coins/images/9576/large/BUSD.png?1568947766",
      //     name: "Binance USD",
      //     price_change_24h: 0.00088932,
      //   },
      //   {
      //     currentPrice: 0.467584,
      //     id: "crypto-com-chain",
      //     image:
      //       "https://assets.coingecko.com/coins/images/7310/large/cypto.png?1547043960",
      //     name: "Crypto.com Coin",
      //     price_change_24h: -0.018505358867,
      //   },
      //   {
      //     currentPrice: 1.62,
      //     id: "matic-network",
      //     image:
      //       "https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png?1624446912",
      //     name: "Polygon",
      //     price_change_24h: -0.010662170057,
      //   },
      //   {
      //     currentPrice: 41460,
      //     id: "wrapped-bitcoin",
      //     image:
      //       "https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png?1548822744",
      //     name: "Wrapped Bitcoin",
      //     price_change_24h: -526.817365316776,
      //   },
      //   {
      //     currentPrice: 130.95,
      //     id: "litecoin",
      //     image:
      //       "https://assets.coingecko.com/coins/images/2/large/litecoin.png?1547033580",
      //     name: "Litecoin",
      //     price_change_24h: -0.469554642169,
      //   },
      //   {
      //     currentPrice: 0.885086,
      //     id: "dai",
      //     image:
      //       "https://assets.coingecko.com/coins/images/9956/large/4943.png?1636636734",
      //     name: "Dai",
      //     price_change_24h: 0.00095069,
      //   },
      //   {
      //     currentPrice: 0.076203,
      //     id: "tron",
      //     image:
      //       "https://assets.coingecko.com/coins/images/1094/large/tron-logo.png?1547035066",
      //     name: "TRON",
      //     price_change_24h: -0.00084893774,
      //   },
      // ]);
    }
  }, [isFocused]);

  function SwipeableList() {
    // const deleteRow = (id) => {
    //   // myWalletAPI.delete(`/delete-crypto/${id}/${token}`).then((response) => {
    //   //   if (response.data) {
    //   //     LoadCryptoList();
    //   //   }
    //   // });
    // };

    // const renderHiddenItem = (data) => (
    // <HStack flex="1" py="1" mx="2">
    //   <Pressable
    //     w="100%"
    //     pl="75%"
    //     bg="red.500"
    //     rounded="3xl"
    //     justifyContent="center"
    //     // onPress={() => deleteRow(data.item.id)}
    //     _pressed={{
    //       opacity: 0.5,
    //     }}
    //   >
    //     <VStack alignItems="center" space={2}>
    //       <Icon
    //         as={<MaterialIcons name="delete" />}
    //         color="white"
    //         size="md"
    //       />
    //       <Text color="white" fontSize="xs" fontWeight="medium">
    //         Delete
    //       </Text>
    //     </VStack>
    //   </Pressable>
    // </HStack>
    // );

    return (
      <SwipeListView
        data={cryptoStocks}
        renderItem={({ item }) => <StockCard key={item.id} data={item} />}
        // renderHiddenItem={renderHiddenItem}
        rightOpenValue={-90}
        previewRowKey={"0"}
        previewOpenValue={-40}
        previewOpenDelay={3000}
      />
    );
  }

  return (
    <Box flex={1} _dark={{ bg: "blueGray.900" }} safeArea>
      <Box
        p="10"
        alignItems="center"
        rounded="2xl"
        _dark={{ bg: "blueGray.800" }}
        mb="3"
      >
        <Text fontSize="3xl" fontWeight="bold">
          Stocks
        </Text>
        {/* <HStack space="3">
          <Text>Nom</Text>
          <Text>Prix</Text>
          <Text style={{ flex: 1 }} textAlign="right">
            Variations
          </Text>
        </HStack> */}
      </Box>
      <Flex px="4">
        <SwipeableList />
      </Flex>
    </Box>
  );
}

function mapStateToProps(state) {
  return { authData: state.authData };
}

export default connect(mapStateToProps, null)(StocksScreen);
