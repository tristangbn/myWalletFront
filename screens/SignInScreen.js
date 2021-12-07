import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
  Icon,
} from "native-base";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import myWalletAPI from "../api/myWallet";

const axios = require("axios").default;

const SignInScreen = (props) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem("userToken", function (err, data) {
      if (data) props.navigation.navigate("bottomNav");
    });
  }, []);

  const login = () => {
    axios
      .post("http://172.17.1.170:3000/sign-in", {
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.data.result) {
          AsyncStorage.setItem("userToken", response.data.userToken);
          navigation.navigate("bottomNav");
        }
      });
  };

  return (
    <Center
      flex={1}
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
    >
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="2xl"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
        >
          myWallet
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
        >
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl isRequired>
            <Input
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="mail" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                />
              }
              placeholder="E-mail"
              size="xl"
              value={email}
              onChangeText={(email) => setEmail(email)}
            />
          </FormControl>
          <FormControl isRequired>
            <Input
              type="password"
              InputLeftElement={
                <Icon
                  as={<Entypo name="key" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                />
              }
              placeholder="Password"
              size="xl"
              value={password}
              onChangeText={(password) => setPassword(password)}
            />
          </FormControl>
          <Button
            mt="2"
            _dark={{ bg: "violet.900" }}
            colorScheme="violet"
            onPress={() => login()}
          >
            Sign In
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              Are you a new user ?{" "}
            </Text>
            <Link
              _text={{
                color: "violet.500",
                fontWeight: "medium",
                fontSize: "sm",
              }}
              onPress={() => props.navigation.navigate("Sign-up")}
            >
              Sign up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default SignInScreen;
