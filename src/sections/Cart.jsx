import { useSelector } from "react-redux";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.products);
  const totalPrice = cartItems.reduce(
    (prevPrice, item) => item.price + prevPrice,
    0
  );
  const totalQuantity = cartItems.reduce(
    (prevQuantity, item) => item.quantity + prevQuantity,
    0
  );

  return (
    <main className="py-16">
      <div className="container 2xl:px-8 px-2 mx-auto">
        <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div className="cartListContainer">
          <div className="space-y-6">
            {cartItems.length > 0 ? (
              cartItems.map((item) => {
                const { id, imgURL, title, category, price, quantity } = item;

                return (
                  <div key={id} className="cartCard">
                    <div className="flex items-center col-span-6 space-x-6">
                      {/* cart image */}
                      <img
                        className="lws-cartImage"
                        src={imgURL}
                        alt="product"
                      />
                      {/* cart item info */}
                      <div className="space-y-2">
                        <h4 className="lws-cartName">{title}</h4>
                        <p className="lws-cartCategory">{category}</p>
                        <p>
                          BDT <span className="lws-cartPrice">{price}</span>
                        </p>
                      </div>
                    </div>
                    <div
                      className="
            flex
            items-center
            justify-center
            col-span-4
            mt-4
            space-x-8
            md:mt-0
          "
                    >
                      {/* amount buttons */}
                      <div className="flex items-center space-x-4">
                        <button className="lws-incrementQuantity">
                          <i className="text-lg fa-solid fa-plus" />
                        </button>
                        <span className="lws-cartQuantity">{quantity}</span>
                        <button className="lws-decrementQuantity">
                          <i className="text-lg fa-solid fa-minus" />
                        </button>
                      </div>

                      {/* price */}
                      <p className="text-lg font-bold">
                        BDT{" "}
                        <span className="lws-calculatedPrice">
                          {price * quantity}
                        </span>
                      </p>
                    </div>
                    {/* delete button */}
                    <div
                      className="
            flex
            items-center
            justify-center
            col-span-2
            mt-4
            md:justify-end md:mt-0
          "
                    >
                      <button className="lws-removeFromCart">
                        <i className="text-lg text-red-400 fa-solid fa-trash" />
                      </button>
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

          {/* Bill Details */}
          <div>
            <div className="billDetailsCard">
              <h4 className="mt-2 mb-8 text-xl font-bold text-center">
                Bill Details
              </h4>
              <div className="space-y-4">
                {/* sub total */}
                <div className="flex items-center justify-between">
                  <p>Sub Total</p>
                  <p>
                    BDT{" "}
                    <span className="lws-subtotal">
                      {totalPrice * totalQuantity}
                    </span>
                  </p>
                </div>
                {/* Discount */}
                <div className="flex items-center justify-between">
                  <p>Discount</p>
                  <p>
                    BDT <span className="lws-discount">0</span>
                  </p>
                </div>
                {/* VAT */}
                <div className="flex items-center justify-between">
                  <p>VAT</p>
                  <p>
                    BDT <span className="vat">0</span>
                  </p>
                </div>
                {/* Total */}
                <div className="flex items-center justify-between pb-4">
                  <p className="font-bold">TOTAL</p>
                  <p className="font-bold">
                    BDT{" "}
                    <span className="lws-total">
                      {totalPrice * totalQuantity}
                    </span>
                  </p>
                </div>
                <button className="placeOrderbtn">place order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
