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

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const bottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "ios-information-circle";
            // } else if (route.name === "AddCrypto") {
            //   iconName = "ios-options";
          }
          return <Ionicons name={iconName} size={25} color={color} />;
        },
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#3E363F",
        tabBarStyle: { backgroundColor: "#1e293b" },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
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
      },
      sizes: {},
    },
  },
});

function App() {
  return (
    <NativeBaseProvider theme={customTheme}>
      <StatusBar
        barStyle={Platform.OS === "android" && "light-content"}
        backgroundColor={"#0f172a"}
      />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false, animation: "slide_from_right" }}
        >
          <Stack.Screen name="Sign-in" component={SignInScreen} />
          <Stack.Screen name="Sign-up" component={SignUpScreen} />
          <Stack.Screen name="bottomNav" component={bottomNav} />
          <Stack.Screen name="AddCrypto" component={AddCryptoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
