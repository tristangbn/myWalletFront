import React, { useEffect, useState } from "react";
import {
  Box,
  FlatList,
  HStack,
  Avatar,
  VStack,
  Text,
  Input,
  Icon,
  Pressable,
} from "native-base";
import { connect } from "react-redux";
import coinGeckoAPI from "../api/coinGecko";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import myWalletAPI from "../api/myWallet";

const AddCryptoScreen = (props) => {
  const [coinList, setCoinList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [query, setQuery] = useState("");
  const token = props.authData[0].token;

  useEffect(() => {
    coinGeckoAPI
      .get("/coins/markets", {
        params: {
          vs_currency: "eur",
          order: "market_cap_desc",
          per_page: 100,
          page: 1,
          sparkline: false,
        },
      })
      .then((response) => {
        setCoinList(response.data);
      });
  }, []);

  const handleSearch = (query) => {
    const formattedQuery = query.toLowerCase();
    let filteredData = [];
    if (query === "") {
      filteredData = [];
    } else {
      filteredData = coinList.filter((crypto) => {
        return crypto.id.includes(formattedQuery);
      });
    }

    setFilteredList(filteredData);
    setQuery(query);
  };

  const addCrypto = (id) => {
    myWalletAPI
      .post("/add-crypto", {
        id: id,
        token,
      })
      .then((response) => {
        props.navigation.navigate("bottomNav");
      });
  };

  const searchBar = () => {
    return (
      <VStack width="100%" space={5} alignItems="center" mb="5">
        <Input
          defaultValue={query}
          onChangeText={(queryText) => handleSearch(queryText)}
          placeholder="Search"
          variant="filled"
          width="100%"
          bg="blueGray.800"
          borderRadius="10"
          py="1"
          px="2"
          placeholderTextColor="white"
          _hover={{ bg: "gray.200", borderWidth: 0 }}
          borderWidth="0"
          _web={{
            _focus: { style: { boxShadow: "none" } },
          }}
          InputLeftElement={
            <Icon
              ml="2"
              size="5"
              color="white"
              as={<Ionicons name="ios-search" />}
            />
          }
        />
      </VStack>
    );
  };

  return (
    <Box
      safeArea
      alignItems="center"
      h="100"
      flex={1}
      px="3"
      // width="100%"
      _dark={{ bg: "blueGray.900" }}
    >
      <Box
        p="10"
        pt="10"
        mt="5"
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
      <Box my="10" width="98%">
        {searchBar()}

        <FlatList
          data={filteredList}
          renderItem={({ item }) => (
            <Pressable onPress={() => addCrypto(item.id)}>
              {({ isHovered, isPressed }) => {
                return (
                  <Box
                    bg={
                      isPressed
                        ? "blueGray.800"
                        : isHovered
                        ? "cyan.800"
                        : "blueGray.900"
                    }
                    p="3"
                    rounded="8"
                    style={{
                      transform: [
                        {
                          scale: isPressed ? 0.96 : 1,
                        },
                      ],
                    }}
                  >
                    <HStack space={3} alignItems="center">
                      <Avatar
                        size="30px"
                        source={{
                          uri: item.image,
                        }}
                      />
                      <VStack>
                        <Text
                          _dark={{
                            color: "white",
                          }}
                          color="coolGray.800"
                          bold
                        >
                          {item.name}
                        </Text>
                      </VStack>
                    </HStack>
                  </Box>
                );
              }}
            </Pressable>
          )}
          keyExtractor={(item) => item.id}
        />
      </Box>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return { authData: state.authData };
};

export default connect(mapStateToProps, null)(AddCryptoScreen);
