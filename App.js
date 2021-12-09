import React, { useEffect } from "react";
import { NativeBaseProvider, extendTheme, StatusBar } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./screens/HomeScreen";
import AddCryptoScreen from "./screens/AddCryptoScreen";
import TransactionsScreen from "./screens/TransactionsScreen";
import BuyTransactionsScreen from "./screens/BuyTransactionScreen";
import SellTransactionsScreen from "./screens/SellTransactionScreen";
import TransferTransactionsScreen from "./screens/TransferTransactionScreen";

import { connect } from "react-redux";
import authData from "./reducers/auth.reducer";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const store = createStore(combineReducers({ authData }));

const bottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
          if (route.name === "Wallet") {
            iconName = "wallet";
            // } else if (route.name === "AddCrypto") {
            //   iconName = "ios-options";
          } else if (route.name === "Transactions") {
            iconName = "ios-options";
          // } else if (route.name === "BuyTransaction") {
          //   iconName = "ios-options";
          }
          return <Ionicons name={iconName} size={25} color={color} />;
        },

        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#3E363F",
        tabBarStyle: {
          backgroundColor: "#0f172a",
          borderTopWidth: 3,
          borderTopColor: "#1e293b",
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Wallet" component={HomeScreen} />
      <Tab.Screen name="Transactions" component={TransactionsScreen} />
      {/* <Tab.Screen name="BuyTransaction" component={BuyTransactionsScreen} /> */}
    </Tab.Navigator>
  );
};

// extend the theme
const customTheme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "dark",
  },
  components: {
    Button: {
      baseStyle: {},
      defaultProps: {},
      variants: {
        rounded: () => {
          return {
            bg: "violet.900",
            rounded: "full",
            colorScheme: "violet",
          };
        },
        active: () => {
          return {
            bg: "violet.900",
            rounded: "full",
            colorScheme: "violet",
            py: 0
          };
        },
        inactive: () => {
          return {
            bg: "blueGray.900",
            rounded: "full",
            colorScheme: "violet",
          };
        },
        bordered: () => {
          return {
            bg: "blueGray.900",
            rounded: "sm",
            colorScheme: "violet",
            // border: "1px solid",
          };
        },
      },
      sizes: {},
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={customTheme}>
        <StatusBar
          barStyle={Platform.OS === "android" && "light-content"}
          backgroundColor={"#0f172a"}
        />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              animation: "slide_from_right",
            }}
          >
            <Stack.Screen name="Sign-in" component={SignInScreen} />
            <Stack.Screen name="Sign-up" component={SignUpScreen} />
            <Stack.Screen name="bottomNav" component={bottomNav} />
            <Stack.Screen name="AddCrypto" component={AddCryptoScreen} />
            <Stack.Screen
              name="BuyTransaction"
              component={BuyTransactionsScreen}
            />
            <Stack.Screen
              name="SellTransaction"
              component={SellTransactionsScreen}
            />
            <Stack.Screen
              name="TransferTransaction"
              component={TransferTransactionsScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}

export default App;
