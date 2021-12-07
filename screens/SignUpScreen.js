import React, { useState } from "react";
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
  KeyboardAvoidingView,
} from "native-base";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import myWalletAPI from "../api/myWallet";

// const axios = require("axios").default;

const SignUpScreen = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = () => {
    myWalletAPI
      .post("/sign-up", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      })
      .then((response) => {
        AsyncStorage.setItem("userToken", response.data.userToken);
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
          Sign up to continue!
        </Heading>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <VStack space={3} mt="5">
            <FormControl isRequired>
              <Input
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="person" />}
                    size={5}
                    ml="2"
                    color="muted.400"
                  />
                }
                placeholder="First name"
                size="xl"
                value={firstName}
                onChangeText={(firstName) => setFirstName(firstName)}
              />
            </FormControl>
            <FormControl isRequired>
              <Input
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="person" />}
                    size={5}
                    ml="2"
                    color="muted.400"
                  />
                }
                placeholder="Last name"
                size="xl"
                value={lastName}
                onChangeText={(lastName) => setLastName(lastName)}
              />
            </FormControl>
            <FormControl isRequired>
              <Input
                type="email"
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
              onPress={() => signUp()}
            >
              Sign Up
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text
                fontSize="sm"
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
              >
                Already have an account ?{" "}
              </Text>
              <Link
                _text={{
                  color: "violet.500",
                  fontWeight: "medium",
                  fontSize: "sm",
                }}
                onPress={() => props.navigation.navigate("Sign-in")}
              >
                Sign in
              </Link>
            </HStack>
          </VStack>
        </KeyboardAvoidingView>
      </Box>
    </Center>
  );
};

export default SignUpScreen;
