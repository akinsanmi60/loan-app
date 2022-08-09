import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { AuthProvider } from "Context/AuthProvider";
import { CryptoProvider } from "Context/Currencycontext";
import { ChakraProvider } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import GlobalStyle from "./global";
import App from "./App";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <CryptoProvider>
          <AuthProvider>
            <QueryClientProvider client={queryClient}>
              <GlobalStyle />
              <App />
              <ToastContainer />
              <ReactQueryDevtools
                initialIsOpen={false}
                position="bottom-right"
              />
            </QueryClientProvider>
          </AuthProvider>
        </CryptoProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
);
