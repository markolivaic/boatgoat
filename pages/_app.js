import "../styles/globals.css";
import Sidebar from "../components/Sidebar";

import { Provider } from "react-redux";
import { useStore } from "../redux/store";

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Sidebar />
      <Component {...pageProps}></Component>
    </Provider>
  );
}

export default MyApp;
