import React from "react";
import { Center, Box, Text, HStack, VStack, Image } from "native-base";

function CryptoCard(props) {
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
              {"€ " +
                Math.round(
                  props.crypto.totalQuantity * props.crypto.current_price * 100
                ) /
                  100}
            </Text>
          </HStack>
          <HStack>
            <Text fontSize="sm" fontWeight="light">
              {Math.round(props.crypto.totalQuantity * 100) / 100 +
                " | € " +
                props.crypto.current_price}
            </Text>
            <Text
              fontSize="sm"
              fontWeight="light"
              style={{ flex: 1 }}
              textAlign="right"
              color={
                true ? "#20BF55" : "#EF233C"
              } /* Condition à remplacer [true] pour changer la couleur du texte (selon le signe de l'array affichée en dessous) */
            >
              +300 +30.75%
            </Text>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );

  return <>{crypto}</>;
}

export default CryptoCard;
