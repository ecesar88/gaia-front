import { extendTheme } from "@chakra-ui/react";
import input from "./input";

const theme = extendTheme({
  components: {
    Input: input,
  },
});

export default theme;
