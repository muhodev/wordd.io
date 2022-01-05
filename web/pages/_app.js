import { QueryClient, QueryClientProvider } from "react-query";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";

import { LoginView, RegisterView } from "containers";
import "styles/index.css";
import { AuthProvider } from "providers";

const client = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false, retry: false } },
});

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={client}>
      <AuthProvider>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme: "light",
          }}
        >
          <ColorSchemeProvider>
            <NotificationsProvider>
              <ModalsProvider
                modals={{ login: LoginView, signup: RegisterView }}
              >
                <Component {...pageProps} />
              </ModalsProvider>
            </NotificationsProvider>
          </ColorSchemeProvider>
        </MantineProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
export default MyApp;
