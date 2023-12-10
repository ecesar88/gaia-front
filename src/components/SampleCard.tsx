import { Box, Text, Flex, Spinner } from "@chakra-ui/react";

const SampleCard = (props: { sample: string; isLoading: boolean }) => {
  return (
    <Box
      border="2px solid white"
      padding="1.5rem"
      fontFamily={"monospace"}
      fontSize={"1rem"}
      backgroundColor="black"
      height={"100%"}
      color="white"
      borderRadius={"1rem"}
      boxShadow={"0px 0px 11px 9px rgba(0,0,0,0.18)"}
    >
      {props.isLoading ? (
        <Flex
          width={"100%"}
          height={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Flex>
      ) : (
        <Flex direction={"column"} gap="0.5rem">
          <Box>
            <Text>Amostra:</Text>
          </Box>

          <Box>{props.sample}</Box>
        </Flex>
      )}
    </Box>
  );
};

export default SampleCard;
