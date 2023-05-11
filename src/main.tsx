import React from "react";
import ReactDOM from "react-dom/client";
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";



ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
