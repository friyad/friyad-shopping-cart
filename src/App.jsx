import "./App.css";
import Navbar from "./components/Navbar";
import AddNewProduct from "./sections/AddNewProduct";
// import Cart from "./sections/Cart";
import ProductsContainer from "./sections/ProductsContainer";

function App() {
  return (
    <>
      <div>
        <Navbar />

        <main className="py-16">
          <div className="productWrapper">
            <ProductsContainer />
            <AddNewProduct />
          </div>
        </main>

        {/* <Cart /> */}
      </div>
    </>
  );
}

export default App;
