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
} from "native-base";
import coinGeckoAPI from "../api/coinGecko";

function AddCrypto(props) {
  let [service, setService] = React.useState("");
const [coinList, setCoinList] = useState([])

useEffect(() => {
  coinGeckoAPI.get("/coins/list").then((response) => {
    console.log(response.data[0].name + " réponse API" );
    setCoinList(response.data[0]);
  });

}, [])

console.log(coinList);

  // .catch((error) => {console.log(error)})

  //Valider l'ajout de la crypto et ajout dans une liste
  const addCrypto = async () => {
    console.log("crypto ajoutée")
  };

  /* ----Test ----
  let coinList = response.map((),i) => {
    return(
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
          onValueChange={(itemValue) => addCrypto(itemValue)}
        >
          <Select.Item key={i} label="Bitcoin" value="ux" />
        </Select>
      </VStack>
    )
  }
*/

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
          <Select.Item label="Bitcoin" value="bitcoin" />
          <Select.Item label="Ethereum" value="ethereum" />
          <Select.Item label="Cardano" value="cardano" />
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

export default AddCrypto;
