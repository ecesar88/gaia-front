import {
  Box,
  Button,
  ChakraProvider,
  Container,
  Flex,
  Input,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import mock from "./api/mock";
import DescriptionCard from "./components/DescriptionCard";
import ResultList from "./components/ResultList";
import SampleCard from "./components/SampleCard";
import theme from "./theme/theme";

function App() {
  // const { data, error, execute } = useApi({
  //   url: endpoints.SELECT("IBGE"),
  // });

  const [response, setResponse] = useState<typeof mock>();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedSample, setSelectedSample] = useState<string>();

  const dataMock = async () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve(mock);
      }, 1500)
    );
  };

  function getData() {
    setIsLoading(true);

    dataMock()
      .then((data) => {
        setResponse(() => {
          return data as typeof mock;
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  console.log({ response });

  const handleSearchButtonOnClick = () => getData();

  const handleSelectSample = (sample: string) => {
    setSelectedSample(sample);
  };

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
          flex={6}
          padding={"1rem"}
        >
          <Box w="300px" h="80px">
            Logo
          </Box>

          <Flex direction="column" gap="0.5rem">
            <Text fontWeight="bold" fontSize="large">
              CNAE
            </Text>

            <Flex w="100%" gap="1rem" alignItems={"flex-start"}>
              <Flex
                direction={"column"}
                gap="1rem"
                width={"100%"}
                borderTop="2px"
                borderStyle="solid"
                borderColor="#DEDEDE"
                paddingTop="0.5rem"
              >
                <Input placeholder="Pesquisar" />

                <Flex
                  maxHeight={"500px"}
                  direction={"column"}
                  gap="0.5rem"
                  overflow={"scroll"}
                  paddingRight={"1rem"}
                >
                  {response?.response.docs.map((doc) => (
                    <ResultList
                      key={doc.id}
                      name={doc.dominio}
                      description={doc.descricao}
                      isLoading={isLoading}
                      onClick={() => handleSelectSample(doc.amostra)}
                    />
                  ))}
                </Flex>
              </Flex>

              <Button
                top="10px"
                isLoading={isLoading}
                onClick={handleSearchButtonOnClick}
              >
                <Text fontWeight="bold" fontSize="small">
                  PESQUISAR
                </Text>
              </Button>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          direction="column"
          flex={6}
          gap="1rem"
          padding="1rem"
          maxWidth={"45%"}
        >
          {selectedSample?.length ? (
            <>
              <DescriptionCard />
              <SampleCard
                sample={selectedSample as string}
                isLoading={isLoading}
              />
            </>
          ) : null}
        </Flex>
      </Container>
    </ChakraProvider>
  );
}

export default App;
