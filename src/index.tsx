import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { AuthProvider } from "Context/AuthProvider";
import { ChakraProvider } from "@chakra-ui/react";
import { ConfigProvider } from "antd";

import App from "./App";

import "antd/dist/antd.less";
import GlobalStyle from "./global";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ConfigProvider>
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
    </ConfigProvider>
  </React.StrictMode>,
);
