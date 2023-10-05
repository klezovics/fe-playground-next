import { StyledThemeProvider } from "@definitions/styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <StyledThemeProvider>
      <Component {...pageProps} />
    </StyledThemeProvider>
  );
}

export default MyApp;
