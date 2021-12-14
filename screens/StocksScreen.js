import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Box, Flex, HStack, Text, Pressable, FlatList } from "native-base";
import { useIsFocused } from "@react-navigation/native";

import myWalletAPI from "../api/myWallet";
import StockCard from "../components/StockCard";
import { SwipeListView } from "react-native-swipe-list-view";

function StocksScreen(props) {
  const token = props.authData[0].token;
  const [cryptoStocks, setCryptoStocks] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      console.log("<--------STOCKSCREEN-------->");
      myWalletAPI.get(`/stocks/${token}`).then((response) => {
        console.log(response.data.cryptos[0].prices);
        setCryptoStocks(response.data.cryptos);
      });
    }
  }, [isFocused]);

  function FlatList() {
    return (
      <FlatList
        data={cryptoStocks}
        renderItem={({ item }) => (
          <StockCard key={item.id} data={item} prices={item.prices} />
        )}
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
      </Box>
      <Flex px="4">
        <FlatList />
      </Flex>
    </Box>
  );
}

function mapStateToProps(state) {
  return { authData: state.authData };
}

export default connect(mapStateToProps, null)(StocksScreen);
