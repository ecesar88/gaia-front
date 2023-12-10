import {
  Box,
  Button,
  ChakraProvider,
  Container,
  Flex,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import mock from "./api/mock";
import MetadataCard from "./components/MetadataCard";
import ResultList from "./components/ResultList";
import SampleCard from "./components/SampleCard";
import theme from "./theme/theme";
import logo from "./assets/logo.png";
import { DownloadIcon } from "@chakra-ui/icons";
import useApi from "./hooks/useApi";
import endpoints from "./api/endpoints";

function App() {
  const { data, error, execute } = useApi({
    url: endpoints.SELECT("IBGE"),
  });

  const [response, setResponse] = useState<typeof mock>();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedSample, setSelectedSample] = useState<
    (typeof mock.response.docs)[number] | undefined
  >();

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

  const handleSearchButtonOnClick = async () => {
    getData();

    const res = await execute();

    console.log({ res });
  };

  const handleSelectSample = (sample: (typeof mock.response.docs)[number]) => {
    setSelectedSample(sample);
  };

  const handleDownloadGitOnClick = (linkGit: string) => {
    window.open(linkGit, "_blank")?.focus();
  };

  return (
    <ChakraProvider theme={theme} resetCSS>
      <Container
        height="100%"
        maxW={{ sm: "100%", "2xl": "1800px" }}
        flexDirection={{ base: "column", lg: "row" }}
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
          marginTop={{ base: "9rem", md: "none" }}
        >
          <Box h="150px">
            <Flex
              justifyContent={"flex-start"}
              alignItems={"center"}
              gap="0.5rem"
            >
              <Image src={logo} boxSize="120px" objectFit="scale-down" />

              <Box>
                <Text
                  fontWeight="bold"
                  fontSize={{ base: "large", xl: "x-large" }}
                >
                  GAIA
                </Text>

                <Text
                  fontWeight="bold"
                  fontSize={{ base: "large", xl: "x-large" }}
                >
                  Plataforma de governança e recorvenção de dados
                </Text>
              </Box>
            </Flex>
          </Box>

          <Flex direction="column" gap="0.5rem">
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
                  maxHeight={"350px"}
                  direction={"column"}
                  gap="0.5rem"
                  overflowY={"scroll"}
                  paddingRight={"1rem"}
                >
                  {response?.response.docs.map((doc) => (
                    <ResultList
                      key={doc.id}
                      name={doc.dominio}
                      description={doc.descricao}
                      isLoading={isLoading}
                      onClick={() => handleSelectSample(doc)}
                    />
                  ))}
                </Flex>
              </Flex>

              <Button
                top="10px"
                isLoading={isLoading}
                backgroundColor="black"
                color="white"
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
          maxWidth={{ base: "100%", xl: "45%" }}
        >
          {selectedSample !== undefined ? (
            <>
              <MetadataCard metadata={selectedSample.metadados} />
              <SampleCard
                sample={selectedSample.amostra}
                isLoading={isLoading}
              />

              <Flex
                backgroundColor="white"
                padding="1rem"
                width={"100%"}
                borderRadius="1rem"
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Flex
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap="0.5rem"
                  cursor={"pointer"}
                  onClick={() =>
                    handleDownloadGitOnClick(selectedSample.linkgit)
                  }
                >
                  <Text fontSize={"large"} fontWeight={"bold"}>
                    Download Git
                  </Text>

                  <DownloadIcon />
                </Flex>
              </Flex>
            </>
          ) : null}
        </Flex>
      </Container>
    </ChakraProvider>
  );
}

export default App;
