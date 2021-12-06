import React from "react";
import {
  Button,
  Box,
  Text,
  Center,
  NativeBaseProvider,
  FormControl,
  Select,
  Container,
  CheckIcon,
  WarningOutlineIcon,
  VStack,
  Heading,
  Spacer,
} from "native-base";

function AddCrypto(props) {
  let [service, setService] = React.useState("");
  return (
    <Box
      alignItems="center"
      h="100"
      flex={1}
      px="3"
      width="100%"
      _dark={{ bg: "blueGray.900" }}
    >
      <Box
        p="10"
        pt="10"
        mt="40px"
        placement="top"
        justifyContent="center"
        alignItems="center"
        rounded="2xl"
        _dark={{ bg: "blueGray.800" }}
        bg="primary.500"
        width="98%"
        _text={{
          fontSize: "2xl",
          fontWeight: "medium",
          color: "#ffffff",
          letterSpacing: "lg",
        }}
      >
        Add a crypto
      </Box>

      <VStack mt="20px" alignItems="center" space={4}>
        <Select
          selectedValue={service}
          minWidth="90%"
          accessibilityLabel="Select a crypto"
          placeholder="Please select a crypto"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={(itemValue) => setService(itemValue)}
        >
          <Select.Item label="Bitcoin" value="ux" />
          <Select.Item label="Ethereum" value="web" />
          <Select.Item label="Cardano" value="cross" />
          <Select.Item label="Polkadot" value="ui" />
          <Select.Item label="Elrond" value="backend" />
        </Select>
      </VStack>

      <Spacer />
      <Button
        mb="10"
        placement="bottom"
        width="98%"
        _dark={{ bg: "#480CA8" }}
        rounded="lg"
        onPress={() => console.log("hello world")}
        _text={{
          fontSize: "xl",
          fontWeight: "medium",
          color: "#ffffff",
          letterSpacing: "lg",
        }}
      >
        Ajouter une crypto
      </Button>
    </Box>
  );
}

export default AddCrypto;
