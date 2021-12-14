import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Box } from "native-base";

import coinGeckoAPI from "../api/coinGecko";

function StocksScreen(props) {
  useEffect(() => {
    coinGeckoAPI
      .get(
        `/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      )
      .then((response) => console.log(response.data));
  }, []);

  return (
    <Box
      flex={1}
      alignItems="center"
      px="2"
      mb="0"
      _dark={{ bg: "blueGray.900" }}
      safeArea
    >
      <Box
        p="10"
        justifyContent="center"
        alignItems="center"
        rounded="2xl"
        _dark={{ bg: "blueGray.800" }}
        bg="primary.500"
        width="98%"
        _text={{
          fontSize: "2xl",
          fontWeight: "bold",
          color: "#ffffff",
        }}
      >
        Stocks
      </Box>
    </Box>
  );
}

function mapStateToProps(state) {
  return { authData: state.authData };
}

export default connect(mapStateToProps, null)(StocksScreen);
