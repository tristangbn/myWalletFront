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

import {
  LineChart,
  // BarChart,
  // PieChart,
  // ProgressChart,
  // ContributionGraph
} from "expo-chart-kit";

import numeral from "numeral";
import "numeral/locales";
numeral.locale("fr");

function StockCard(props) {
  const xAbs = props.data.prices.map((e) => e[0]);
  const yAbs = props.data.prices.map((e) => e[1]);

  const data = {
    labels: xAbs,
    datasets: [{ data: yAbs }],
  };

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
        </VStack>
        <Flex>
          <LineChart
            data={data}
            width={230}
            height={150}
            chartConfig={{
              backgroundGradientFrom: "#1e293b",
              backgroundGradientTo: "#1e293b",
              color: () =>
                props.data.price_change_24h >= 0
                  ? `rgba(32, 191, 85, 0.8)`
                  : `rgba(239, 35, 60, 0.8)`,
              style: {
                borderRadius: 0,
              },
            }}
            bezier
            style={{
              marginVertical: 0,
              borderRadius: 0,
            }}
          />
        </Flex>
      </HStack>
    </Box>
  );
}

export default StockCard;
