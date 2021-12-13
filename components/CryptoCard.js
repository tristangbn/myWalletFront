import React from "react";
import { Center, Box, Text, HStack, VStack, Image } from "native-base";

function CryptoCard(props) {
  const variationInFiat =
    Math.round(
      (props.crypto.totalQuantity * props.crypto.currentPrice -
        props.crypto.totalInvestment) *
        100
    ) / 100;

  const variationInPercent = props.crypto.totalInvestment
    ? Math.round(
        ((variationInFiat * 100) / props.crypto.totalInvestment) * 100
      ) / 100
    : 0;

  const crypto = (
    <Box rounded="2xl" py="2" pr="3" my="1" ml="1">
      <HStack justifyContent="space-around" alignItems="center">
        <Center w="17%">
          <Image
            resizeMode="cover"
            source={{
              uri: props.crypto.image,
            }}
            alt={props.crypto.name + " logo"}
            size="xs"
          />
        </Center>
        <VStack w="80%">
          <HStack>
            <Text fontSize="xl" fontWeight="medium">
              {props.crypto.symbol.toUpperCase() + " " + props.crypto.name}
            </Text>
            <Text
              fontSize="xl"
              fontWeight="medium"
              style={{ flex: 1 }}
              textAlign="right"
            >
              {Math.round(
                props.crypto.totalQuantity * props.crypto.currentPrice * 100
              ) /
                100 +
                " €"}
            </Text>
          </HStack>
          <HStack>
            <Text fontSize="sm" fontWeight="light">
              {Math.round(props.crypto.totalQuantity * 100) / 100 +
                " | " +
                props.crypto.currentPrice +
                " €"}
            </Text>
            <Text
              fontSize="sm"
              fontWeight="light"
              style={{ flex: 1 }}
              textAlign="right"
              color={variationInFiat >= 0 ? "#20BF55" : "#EF233C"}
              shadow={{
                shadowColor: variationInFiat >= 0 ? "#20BF55" : "#EF233C",
                shadowOffset: {
                  width: -1,
                  height: 1,
                },
                shadowOpacity: 1,
                shadowRadius: 5.0,
                elevation: 1,
              }}
            >
              {variationInFiat + " € | "}
              {variationInPercent > 0
                ? `+${variationInPercent}%`
                : `${variationInPercent}%`}
            </Text>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );

  return <>{crypto}</>;
}

export default CryptoCard;
