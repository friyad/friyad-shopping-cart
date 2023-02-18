import { useSelector } from "react-redux";
import AddNewProduct from "../sections/AddNewProduct";
import Cart from "../sections/Cart";
import ProductsContainer from "../sections/ProductsContainer";

const Main = () => {
  const { shownPage } = useSelector((state) => state.globals);

  return (
    <main>
      {shownPage === "home" ? (
        <div className="productWrapper py-16">
          <ProductsContainer />
          <AddNewProduct />
        </div>
      ) : (
        <Cart />
      )}
    </main>
  );
};

export default Main;
