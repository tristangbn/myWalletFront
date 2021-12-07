import React, { useEffect, useState } from "react";
const axios = require("axios");
import {
  Button,
  Box,
  Text,
  Center,
  NativeBaseProvider,
  FormControl,
  Select,
  Container,
  CheckIcon,
  WarningOutlineIcon,
  VStack,
  Heading,
  Spacer,
  Typeahead,
  Icon,
} from "native-base";
import { connect } from "react-redux";
import coinGeckoAPI from "../api/coinGecko";
import myWalletAPI from "../api/myWallet";

function AddCrypto(props) {
  const [service, setService] = useState("");
  const [coinList, setCoinList] = useState([]);
  const token = props.authData[0].token;

  useEffect(() => {
    coinGeckoAPI
      .get(
        "/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then(async (response) => {
        setCoinList(response.data);
      });
    // .catch((error) => {console.log(error)})
  }, []);

  //Listing des principales cryptos pour affichage
  const listCoin = coinList.map((coin, i) => {
    return <Select.Item key={i} label={coin.name} value={coin.id} />;
  });


  //Valider l'ajout de la crypto et ajout dans une liste
  const addCrypto = async () => {
    console.log(service + " ajoutée");
    myWalletAPI
      .post("/add-crypto", {
        id : service,
        token,
      })
      .then(async function (response) {
        console.log(response.data);
      });

      props.navigation.navigate("bottomNav");
  };

  return (
    <Box
      alignItems="center"
      h="100"
      flex={1}
      px="3"
      width="100%"
      _dark={{ bg: "blueGray.900" }}
    >
      <Box
        p="10"
        pt="10"
        mt="40px"
        placement="top"
        justifyContent="center"
        alignItems="center"
        rounded="2xl"
        _dark={{ bg: "blueGray.800" }}
        bg="primary.500"
        width="98%"
        _text={{
          fontSize: "2xl",
          fontWeight: "medium",
          color: "#ffffff",
          letterSpacing: "lg",
        }}
      >
        Add a crypto
      </Box>

      <VStack mt="20px" alignItems="center" space={4}>
        <Select
          selectedValue={service}
          minWidth="90%"
          accessibilityLabel="Select a crypto"
          placeholder="Please select a crypto"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={(itemValue) => setService(itemValue)}
        >
          {listCoin}
        </Select>
      </VStack>

      <Spacer />
      <Button
        mb="10"
        placement="bottom"
        width="98%"
        _dark={{ bg: "#480CA8" }}
        rounded="lg"
        onPress={() => console.log("hello world")}
        _text={{
          fontSize: "xl",
          fontWeight: "medium",
          color: "#ffffff",
          letterSpacing: "lg",
        }}
        onPress={async () => addCrypto()}
      >
        Ajouter une crypto
      </Button>
    </Box>
  );
}

function mapStateToProps(state) {
  return { authData: state.authData };
}

export default connect(mapStateToProps, null)(AddCrypto);
