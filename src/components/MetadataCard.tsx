import { Box, Text, Flex } from "@chakra-ui/react";

interface MetadataCardProps {
  metadata: string;
}

const MetadataCard = (props: MetadataCardProps) => {
  return (
    <Box
      padding="1.5rem"
      fontFamily={"monospace"}
      fontSize={"1rem"}
      backgroundColor="#DEDEDE"
      borderRadius={"1rem"}
      boxShadow={"0px 0px 11px 9px rgba(0,0,0,0.18)"}
    >
      <Flex direction={"column"} gap="0.5rem">
        <Box>
          <Text>Metadados:</Text>
        </Box>

        <Box>
          {props.metadata.split("=").map((line) => (
            <p key={line}>{line}</p>
          ))}
        </Box>
      </Flex>
    </Box>
  );
};

export default MetadataCard;
