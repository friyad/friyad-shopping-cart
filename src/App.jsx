import { Provider } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./Pages/Main";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Main />
      </Provider>
    </>
  );
}

export default App;
