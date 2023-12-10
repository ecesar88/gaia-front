import { Box, Flex, Spinner, Text } from "@chakra-ui/react";

interface ResultListProps {
  name: string;
  description?: string;
  isLoading: boolean;
  onClick: () => void;
}

const ResultList = (props: ResultListProps) => {
  return props.isLoading ? (
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
    <Flex
      direction="column"
      gap="8px"
      backgroundColor="black"
      padding="0.5rem"
      borderRadius="0.5rem"
      color="white"
      cursor={"pointer"}
      onClick={props.onClick}
    >
      <Box>
        <Text fontWeight="bold" fontSize="x-large" lineHeight="normal">
          {props.name}
        </Text>
      </Box>

      {props.description ? (
        <Box>
          <Text fontWeight="bold" fontSize="medium" lineHeight={"normal"}>
            {props.description}
          </Text>
        </Box>
      ) : null}
    </Flex>
  );
};

export default ResultList;
