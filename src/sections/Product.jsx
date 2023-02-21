import { useDispatch, useSelector } from "react-redux";
import {
  handleAddToCart,
  handleUpdateCartItem,
  handleUpdateProduct,
} from "../redux/products/actions";

const Product = (item) => {
  const { id, imgURL, title, category, price, quantity } = item.item;
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.products);

  const updateProductItem = (item) => {
    const updateProductItem = {
      ...item,
      quantity: item.quantity - 1,
    };
    dispatch(handleUpdateProduct(updateProductItem));
  };

  const handleAddtoCartClick = (id) => {
    const isExist = cartItems.find((item) => item.id === id);
    const productItem = item.item;

    if (productItem.quantity <= 0) {
      return;
    }

    if (isExist) {
      const updateCartItem = {
        ...isExist,
        quantity: isExist.quantity + 1,
      };
      updateProductItem(productItem);
      dispatch(handleUpdateCartItem(updateCartItem));
    } else {
      const newCartItem = {
        ...productItem,
        quantity: 1,
      };
      updateProductItem(productItem);
      dispatch(handleAddToCart(newCartItem));
    }
  };

  return (
    <div className="lws-productCard">
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
        <button
          disabled={quantity <= 0 ? true : false}
          onClick={() => handleAddtoCartClick(id)}
          className="lws-btnAddToCart"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
