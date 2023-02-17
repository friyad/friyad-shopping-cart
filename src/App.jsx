import { Provider } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar";
import store from "./redux/store";
import AddNewProduct from "./sections/AddNewProduct";
// import Cart from "./sections/Cart";
import ProductsContainer from "./sections/ProductsContainer";

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />

        <main className="py-16">
          <div className="productWrapper">
            <ProductsContainer />
            <AddNewProduct />
          </div>
        </main>

        {/* <Cart /> */}
      </Provider>
    </>
  );
}

export default App;
