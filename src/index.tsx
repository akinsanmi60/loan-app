import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { AuthProvider } from "Context/AuthProvider";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import GlobalStyle from "./global";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <GlobalStyle />
            <App />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </AuthProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
);
