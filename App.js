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
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";

import HomeScreen from "./screens/HomeScreen";
import AddCrypto from "./screens/AddCrypto";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
import { Ionicons } from "@expo/vector-icons";

// extend the theme
export const theme = extendTheme({
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

const BottomNavigator = () => {
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

function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="AddCrypto" component={AddCrypto} />
          <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
        </Stack.Navigator>
        {/* <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color }) => {
              let iconName;
              if (route.name === "Home") {
                iconName = "ios-information-circle";
              } else if (route.name === "AddCrypto") {
                iconName = "ios-options";
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
          <Tab.Screen name="AddCrypto" component={AddCrypto} />
        </Tab.Navigator> */}
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

// // Color Switch Component
// function ToggleDarkMode() {
//   const { colorMode, toggleColorMode } = useColorMode();
//   return (
//     <HStack space={2} alignItems="center">
//       <Text>Dark</Text>
//       <Switch
//         isChecked={colorMode === "light" ? true : false}
//         onToggle={toggleColorMode}
//         aria-label={
//           colorMode === "light" ? "switch to dark mode" : "switch to light mode"
//         }
//       />
//       <Text>Light</Text>
//     </HStack>
//   );
// }

// const theme = extendTheme({
//   components: {
//     Button: {
//       baseStyle: {},
//       defaultProps: {},
//       variants: {},
//       sizes: {},
//     },
//   },
// });

export default App;
