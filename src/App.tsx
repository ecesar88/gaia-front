import {
  Box,
  Button,
  ButtonGroup,
  ChakraProvider,
  Container,
  Flex,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { useId, useState } from "react";
import "./App.css";
import MetadataCard from "./components/MetadataCard";
import ResultList from "./components/ResultList";
import SampleCard from "./components/SampleCard";
import theme from "./theme/theme";
import logo from "./assets/logo.png";
import { DownloadIcon } from "@chakra-ui/icons";
import useApi from "./hooks/useApi";
import endpoints from "./api/endpoints";
import { ResponseType } from "./api/types";

function App() {
  const [search, setSearch] = useState("");
  const [response, setResponse] = useState<ResponseType>();

  const [selectedSample, setSelectedSample] =
    useState<ResponseType["response"]["docs"][number]>();

  const { execute, isLoading, data } = useApi<ResponseType>({
    url: endpoints.SELECT(search),
    onComplete: (data) => {
      setResponse(data);
    },
  });

  console.log(data);

  const handleSearchButtonOnClick = async () => {
    await execute();
  };

  const key = useId();

  const handleSelectSample = (
    sample: ResponseType["response"]["docs"][number]
  ) => {
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
                <Input
                  placeholder="Pesquisar"
                  value={search}
                  onKeyDown={async (evt) => {
                    if (evt.key !== "Enter") return;
                    await execute();
                  }}
                  onChange={(evt) => {
                    setResponse(undefined);
                    setSearch(evt.target.value);
                  }}
                />

                <Flex
                  maxHeight={"350px"}
                  direction={"column"}
                  gap="0.5rem"
                  overflowY={"scroll"}
                  paddingRight={"1rem"}
                >
                  {response?.response?.docs?.length ? (
                    response?.response?.docs?.map((doc, idx) => (
                      <ResultList
                        key={`${key}-${idx}`}
                        name={doc.dominio}
                        description={doc.descricao}
                        isLoading={isLoading}
                        onClick={() => handleSelectSample(doc)}
                      />
                    ))
                  ) : data?.response !== undefined &&
                    data?.response?.numFound != 0 ? (
                    <>Nenhum resultado encontrado</>
                  ) : null}
                </Flex>
              </Flex>

              <ButtonGroup>
                <Button
                  top="10px"
                  isLoading={isLoading}
                  backgroundColor="black"
                  color="white"
                  onClick={handleSearchButtonOnClick}
                >
                  <Text fontWeight="bold" fontSize="small">
                    Pesquisar
                  </Text>
                </Button>

                {response !== undefined ? (
                  <Button
                    top="10px"
                    backgroundColor="white"
                    color="black"
                    border="2px solid"
                    variant="ghost"
                    onClick={() => {
                      setResponse(undefined);
                      setSelectedSample(undefined);
                      setSearch("");
                    }}
                  >
                    <Text fontWeight="bold" fontSize="small">
                      Limpar
                    </Text>
                  </Button>
                ) : null}
              </ButtonGroup>
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
