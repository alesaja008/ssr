import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/css/bootstrap.min.css";

// componnent
import AppShell from "@/components/layouts/AppSheel";
// batas

import { Provider } from "react-redux";
import store from "@/store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AppShell>
        <Component {...pageProps} />
      </AppShell>
    </Provider>
  );
}
