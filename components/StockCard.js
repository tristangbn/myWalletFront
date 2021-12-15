import React from "react";
import { Box, Text, VStack, HStack, Image, Flex } from "native-base";

import { LineChart } from "expo-chart-kit";

import numeral from "numeral";
import "numeral/locales";
numeral.locale("fr");

function StockCard(props) {
  const xAbs = props.data.prices.map((e) => "");
  const yAbs = props.data.prices.map((e) => e[1]);

  const data = {
    labels: xAbs,
    datasets: [{ data: yAbs }],
  };

  return (
    <>
      {props.mode ? (
        <Box _dark={{ bg: "blueGray.800" }} rounded="3xl" my="2" p="2">
          <HStack space="5" px="2">
            <VStack space="1" _dark={{ bg: "blueGray.800" }} w="24">
              <Text fontWeight="bold" fontSize="md" /* textAlign="center" */>
                {props.data.name}
              </Text>
              <HStack space="2">
                <Image
                  resizeMode="cover"
                  source={{
                    uri: props.data.image,
                  }}
                  alt={props.data.name}
                  size="xs"
                />
                <VStack>
                  <Text>
                    {numeral(props.data.currentPrice).format("0,0[.]00 $")}
                  </Text>
                  <Text
                    color={
                      props.data.price_change_24h > 0 ? "#20BF55" : "#EF233C"
                    }
                    shadow={{
                      shadowColor:
                        props.data.price_change_24h >= 0
                          ? "#20BF55"
                          : "#EF233C",
                      shadowOffset: {
                        width: -1,
                        height: 1,
                      },
                      shadowOpacity: 1,
                      shadowRadius: 5.0,
                      elevation: 1,
                    }}
                  >
                    {`${numeral(props.data.price_change_24h).format(
                      "+0,0[.]00"
                    )}%`}
                  </Text>
                </VStack>
              </HStack>
            </VStack>
            <Flex my="auto">
              <Flex mb="-2">
                <LineChart
                  data={data}
                  width={230}
                  height={70}
                  chartConfig={{
                    backgroundGradientFrom: "#1e293b",
                    backgroundGradientTo: "#1e293b",
                    color: () =>
                      props.data.price_change_24h >= 0
                        ? `rgba(32, 191, 85, 0.8)`
                        : `rgba(239, 35, 60, 0.8)`,
                  }}
                  bezier
                />
              </Flex>
            </Flex>
          </HStack>
        </Box>
      ) : (
        <Box _dark={{ bg: "blueGray.800" }} rounded="3xl" my="2" py="2" px="4">
          <HStack space="3" alignItems="center">
            <Flex position="absolute" right="0" top="1">
              <LineChart
                data={data}
                width={230}
                height={70}
                chartConfig={{
                  backgroundGradientFrom: "#1e293b",
                  backgroundGradientTo: "#1e293b",
                  color: () =>
                    props.data.price_change_24h >= 0
                      ? `rgba(32, 191, 85, 0.8)`
                      : `rgba(239, 35, 60, 0.8)`,
                }}
                bezier
              />
            </Flex>
            <VStack w="46%" space="1" _dark={{ bg: "blueGray.800" }}>
              <Text fontWeight="bold" fontSize="xl" /* textAlign="center" */>
                {props.data.name}
              </Text>
              <HStack space="2">
                <Image
                  resizeMode="cover"
                  source={{
                    uri: props.data.image,
                  }}
                  alt={props.data.name}
                  size="xs"
                />
                <VStack>
                  <Text>
                    {numeral(props.data.currentPrice).format("0,0[.]00 $")}
                  </Text>
                  <Text
                    color={
                      props.data.price_change_24h > 0 ? "#20BF55" : "#EF233C"
                    }
                    shadow={{
                      shadowColor:
                        props.data.price_change_24h >= 0
                          ? "#20BF55"
                          : "#EF233C",
                      shadowOffset: {
                        width: -1,
                        height: 1,
                      },
                      shadowOpacity: 1,
                      shadowRadius: 5.0,
                      elevation: 1,
                    }}
                  >
                    {`${numeral(props.data.price_change_24h).format(
                      "+0,0[.]00"
                    )}%`}
                  </Text>
                </VStack>
              </HStack>
            </VStack>
          </HStack>
        </Box>
      )}
    </>
  );
}

export default StockCard;
