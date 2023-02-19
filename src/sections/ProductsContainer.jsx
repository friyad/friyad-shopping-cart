import { useSelector } from "react-redux";

const ProductsContainer = () => {
  const { allProducts } = useSelector((state) => state.products);

  return (
    <div className="productContainer" id="lws-productContainer">
      {allProducts.length > 0 ? (
        allProducts.map((item) => {
          const { id, imgURL, title, category, price, quantity } = item;
          return (
            <div key={id} className="lws-productCard">
              <img className="lws-productImage" src={imgURL} alt="product" />
              <div className="p-4 space-y-2">
                <h4 className="lws-productName">{title}</h4>
                <p className="lws-productCategory">{category}</p>
                <div className="flex items-center justify-between pb-2">
                  <p className="productPrice">
                    BDT <span className="lws-price">{price}</span>
                  </p>
                  <p className="productQuantity">
                    QTY <span className="lws-quantity">{quantity}</span>
                  </p>
                </div>
                <button className="lws-btnAddToCart">Add To Cart</button>
              </div>
            </div>
          );
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
