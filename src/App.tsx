import {
  Box,
  Button,
  ChakraProvider,
  Container,
  Flex,
  Input,
  Text,
} from "@chakra-ui/react";
import "./App.css";
import theme from "./theme/theme";

function App() {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Container
        height="100%"
        maxW={{ md: "100%", "2xl": "1800px" }}
        width="100%"
        display="flex"
        gap="1rem"
        justifyContent="space-between"
      >
        <Flex
          gap="1rem"
          direction="column"
          justifyContent={"center"}
          flex={4}
          backgroundColor={"red"}
        >
          <Box w="300px" h="80px">
            Logo
          </Box>

          <Flex direction="column" gap="0.5rem">
            <Text fontWeight="bold" fontSize="large">
              CNAE
            </Text>

            <Flex
              w="100%"
              gap="1rem"
              borderTop="2px"
              borderStyle="solid"
              borderColor="#DEDEDE"
              paddingTop="0.5rem"
            >
              <Input placeholder="IBGE" />
              <Button>PESQUISAR</Button>
            </Flex>
          </Flex>
        </Flex>

        <Flex direction="column" flex={7}>
          a
        </Flex>
      </Container>
    </ChakraProvider>
  );
}

export default App;
