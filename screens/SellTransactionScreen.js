import React, { useEffect, useState } from "react";
import { Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
const axios = require("axios");
import {
  Button,
  Box,
  Text,
  Center,
  Select,
  Container,
  CheckIcon,
  VStack,
  Spacer,
  Icon,
  Input,
  ScrollView,
} from "native-base";
import { connect } from "react-redux";
import coinGeckoAPI from "../api/coinGecko";
import myWalletAPI from "../api/myWallet";

function SellTransactionScreen(props) {
  const [plateforme, setPlateforme] = useState("");
  const [paire, setPaire] = useState("");
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [buyingPrice, setBuyingPrice] = useState("");
  const [qty, setQty] = useState("");
  const [fees, setFees] = useState("");

  const [show, setShow] = useState(false);

  const token = props.authData[0].token;

  useEffect(() => {}, []);

  const exchanges = [
    { name: "Binance", id: "binance" },
    { name: "Coinbase Exchange", id: "coinbase_exchange" },
    { name: "Crypto.com Exchange", id: "binance" },
    { name: "Huobi Global", id: "huobi_global" },
    { name: "KuCoin", id: "kucoin" },
    { name: "FTX", id: "ftx" },
    { name: "Gate.io", id: "gateio" },
    { name: "Kraken", id: "kraken" },
    { name: "Bitfinex", id: "bitfinex" },
    { name: "Binance US", id: "binance_us" },
  ];

  const listExchanges = exchanges.map((exchange, i) => {
    return <Select.Item key={i} label={exchange.name} value={exchange.id} />;
  });

  const paires = ["EUR/BTC", "EUR/ADA"];

  const listPaires = paires.map((paire, i) => {
    return <Select.Item key={i} label={paire} value={paire} />;
  });

  console.log(date);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <Box flex={1} _dark={{ bg: "blueGray.900" }} safeArea w="100%" px="0">
      <Center
        py="4"
        alignItems="center"
        rounded="3xl"
        _dark={{ bg: "blueGray.800" }}
        _text={{
          fontSize: "4xl",
          fontWeight: "bold",
          color: "#ffffff",
        }}
        mx="2"
      >
        Add a transaction
        <Button.Group
          colorScheme="blue"
          mx={{
            base: "auto",
            md: 0,
          }}
          size="lg"
          mt="1"
        >
          <Button
            w="30%"
            variant="inactive"
            onPress={() => props.navigation.navigate("BuyTransaction")}
          >
            Buy
          </Button>
          <Button
            w="30%"
            variant="rounded"
            onPress={() => props.navigation.navigate("SellTransaction")}
          >
            Sell
          </Button>
          <Button
            w="30%"
            variant="inactive"
            onPress={() => props.navigation.navigate("TransferTransaction")}
          >
            Transfer
          </Button>
        </Button.Group>
      </Center>

      <ScrollView>
        <VStack mt="20px" alignItems="center" space={4}>
          <Select
            selectedValue={plateforme}
            minW="90%"
            height="12"
            placeholder="Platform"
            _selectedItem={{
              bg: "violet.900",
              endIcon: <CheckIcon size="5" />,
            }}
            onValueChange={(itemValue) => setPlateforme(itemValue)}
          >
            {listExchanges}
          </Select>
          <Select
            selectedValue={paire}
            minW="90%"
            height="12"
            placeholder="Exchange pair"
            _selectedItem={{
              bg: "violet.900",
              endIcon: <CheckIcon size="5" />,
            }}
            onValueChange={(itemValue) => setPaire(itemValue)}
          >
            {listPaires}
          </Select>

          <Input
            placeholder="Buying Price"
            minW="90%"
            height="12"
            value={buyingPrice}
            onChangeText={(itemValue) => setBuyingPrice(itemValue)}
          />

          <Input
            placeholder="Quantity"
            minW="90%"
            height="12"
            value={qty}
            onChangeText={(itemValue) => setQty(itemValue)}
          />

          <Input
            placeholder="Platform fees"
            minW="90%"
            height="12"
            value={fees}
            onChangeText={(itemValue) => setFees(itemValue)}
          />
        </VStack>

        {Platform.OS === "ios" ? (
          <Center style={{ flexDirection: "row", marginTop: "5%" }}>
            <Button
              w="40%"
              mx="5%"
              _dark={{ bg: "blueGray.800" }}
              rounded="sm"
              py="3"
              _text={{
                fontSize: "sm",
                fontWeight: "light",
                // color: "#fff",
              }}
              variant="bordered"
              onPress={() => showDatepicker()}
            >
              Indicate date
            </Button>

            <Button
              w="40%"
              mx="5%"
              _dark={{ bg: "blueGray.800" }}
              rounded="sm"
              py="3"
              _text={{
                fontSize: "sm",
                fontWeight: "light",
              }}
              variant="bordered"
              onPress={() => showTimepicker()}
            >
              Indicate time
            </Button>
            {/* <Text>{date}</Text> */}
          </Center>
        ) : (
          <Box style={{ flexDirection: "row", marginLeft: "3%" }}>
            <DateTimePicker
              testID="datePicker"
              value={date}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={() => onChange()}
              themeVariant="dark"
              style={{
                width: "30%",
                marginBottom: "-1%",
                marginTop: "5%",
              }}
            />
            <DateTimePicker
              testID="datePicker"
              value={date}
              mode="time"
              is24Hour={true}
              display="default"
              onChange={() => onChange()}
              themeVariant="dark"
              style={{
                width: "20%",
                marginBottom: "-1%",
                marginTop: "5%",
              }}
            />
          </Box>
        )}

        {show && Platform.OS !== "ios" && (
          <DateTimePicker
            testID="datePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={() => onChange()}
            themeVariant="dark"
            style={{
              width: "34%",
              marginBottom: "-1%",
              marginTop: "5%",
            }}
          />
        )}
      </ScrollView>

      <Center>
        <Button
          w="95%"
          my="2%"
          _dark={{ bg: "violet.900" }}
          rounded="lg"
          py="3"
          _text={{
            fontSize: "xl",
            fontWeight: "medium",
            color: "#ffffff",
          }}
          onPress={() => console.log("Add transaction")}
        >
          Add transaction
        </Button>
      </Center>
    </Box>
  );
}

function mapStateToProps(state) {
  return { authData: state.authData };
}

export default connect(mapStateToProps, null)(SellTransactionScreen);
