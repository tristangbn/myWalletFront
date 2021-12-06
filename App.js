import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Code,
  Box,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";

import HomeScreen from "./screens/HomeScreen";
import AddCrypto from "./screens/AddCrypto";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
import { Ionicons } from "@expo/vector-icons";


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
    {/* <Tab.Screen name="AddCrypto" component={AddCrypto} /> */}
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
    // <NativeBaseProvider theme={theme}>
    //   <NavigationContainer>
    //     <Stack.Navigator screenOptions={{ headerShown: false }}>
    //       <Stack.Screen name="Home" component={HomeScreen} />
    //       <Stack.Screen name="AddCrypto" component={AddCrypto} />
    //       <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // </NativeBaseProvider>
    <NativeBaseProvider theme={customTheme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Sign-in"
            component={SignInScreen}
            options={{
              headerShown: false,
              animation: "slide_from_right",
            }}
          />
          <Stack.Screen
            name="Sign-up"
            component={SignUpScreen}
            options={{
              headerShown: false,
              animation: "slide_from_right",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>

    </NativeBaseProvider>
  );
}

export default App;
