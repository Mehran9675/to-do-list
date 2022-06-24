import "common/styles/globals.scss";
import type { AppProps } from "next/app";
import MainLayout from "../common/layout/main-layout";
import TodosContext from "../common/context/todos-context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <TodosContext>
        <Component {...pageProps} />
      </TodosContext>
    </MainLayout>
  );
}

export default MyApp;
