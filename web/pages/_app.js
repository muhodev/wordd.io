import { QueryClient, QueryClientProvider } from "react-query";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";

import { LoginView } from "containers";
import "styles/index.css";

const client = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false, retry: false } },
});

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={client}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "light",
        }}
      >
        <ColorSchemeProvider>
          <ModalsProvider modals={{ login: LoginView }}>
            <Component {...pageProps} />
          </ModalsProvider>
        </ColorSchemeProvider>
      </MantineProvider>
    </QueryClientProvider>
  );
}
export default MyApp;
