import { useSelector } from "react-redux";
import Product from "./Product";

const ProductsContainer = () => {
  const { allProducts } = useSelector((state) => state.products);

  return (
    <div className="productContainer" id="lws-productContainer">
      {allProducts.length > 0 ? (
        allProducts.map((item) => {
          return <Product key={item.id} item={item} />;
        })
      ) : (
        <div>
          <p>No product found</p>
        </div>
      )}
    </div>
  );
};

export default ProductsContainer;
