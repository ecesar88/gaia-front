import { extendTheme } from "@chakra-ui/react";
import input from "./input";
import button from "./button";

const theme = extendTheme({
  components: {
    Input: input,
    Button: button,
  },
});

export default theme;
