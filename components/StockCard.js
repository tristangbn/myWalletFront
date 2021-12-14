import React from "react";
import {
  Box,
  Text,
  Center,
  VStack,
  HStack,
  Image,
  Flex,
  Circle,
  Pressable,
} from "native-base";
import { Platform } from "react-native";

import numeral from "numeral";
import "numeral/locales";
numeral.locale("fr");

function StockCard(props) {
  // console.log("props", props.data);
  return (
    <Box _dark={{ bg: "blueGray.800" }} rounded="2xl" my="2" p="2">
      <HStack space="3" my="auto" alignItems="center">
        <Image
          resizeMode="cover"
          source={{
            uri: props.data.image,
          }}
          alt={props.data.name}
          size="xs"
        />
        <VStack>
          <Text fontWeight="bold" fontSize="lg">
            {props.data.name}
          </Text>
          <Text>{numeral(props.data.currentPrice).format("0,0[.]00 $")}</Text>
        </VStack>
        <Flex>
          <Text
            color={props.data.price_change_24h > 0 ? "#20BF55" : "#EF233C"}
            shadow={{
              shadowColor:
                props.data.price_change_24h >= 0 ? "#20BF55" : "#EF233C",
              shadowOffset: {
                width: -1,
                height: 1,
              },
              shadowOpacity: 1,
              shadowRadius: 5.0,
              elevation: 1,
            }}
          >
            {`${numeral(props.data.price_change_24h).format("+0,0[.]00")}%`}
          </Text>
        </Flex>
      </HStack>
    </Box>
  );
}

export default StockCard;
