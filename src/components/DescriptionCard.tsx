import { Box } from "@chakra-ui/react";

const DescriptionCard = () => {
  return (
    <Box
      padding="1.5rem"
      fontFamily={"monospace"}
      fontSize={"1rem"}
      backgroundColor="#DEDEDE"
      borderRadius={"1rem"}
      boxShadow={"0px 0px 11px 9px rgba(0,0,0,0.18)"}
    >
      <p>id: string - Identificador da classe</p>
      <p>descricao: string - Descrição da classe</p>
      <p>observacoes: string[] - Array de observações da classe</p>
      <p>grupo: {"{"}</p>
      <p>&nbsp;&nbsp;id: string - Identificador do grupo </p>
      <p>&nbsp;&nbsp;descricao: string - Descrição da classe</p>
      <p>&nbsp;&nbsp;observacoes: string[] - Array de observações da classe</p>
      <p>{"}"}</p>
    </Box>
  );
};

export default DescriptionCard;
