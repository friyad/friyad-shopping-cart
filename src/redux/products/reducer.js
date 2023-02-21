import {
  ADDPRODUCT,
  ADD_TO_CART,
  UPDATE_CART_ITEM,
  UPDATE_PRODUCT,
} from "./actionTypes";

const initialState = {
  allProducts: [
    {
      id: "nopqrstuvwxyzABC2",
      imgURL: "https://i.dummyjson.com/data/products/59/thumbnail.jpg",
      title: "Spring and summershoes",
      category: "Mens shoes",
      price: 29,
      quantity: 5,
    },
    {
      id: "nopqrstuvwxyzABC3",
      imgURL: "https://i.dummyjson.com/data/products/59/thumbnail.jpg",
      title: "Spring and summershoes",
      category: "Mens shoes",
      price: 310,
      quantity: 10,
    },
    {
      id: "nopqrstuvwxyzABC4",
      imgURL: "https://i.dummyjson.com/data/products/59/thumbnail.jpg",
      title: "Spring and summershoes",
      category: "Mens shoes",
      price: 411,
      quantity: 8,
    },
  ],
  cartItems: [],
};

const reducer = (state = initialState, action) => {
  const updatedState = {
    ...state,
    allProducts: [...state.allProducts],
    cartItems: [...state.cartItems],
  };

  switch (action.type) {
    case ADDPRODUCT:
      updatedState.allProducts = [...updatedState.allProducts, action.payload];
      return updatedState;

    case UPDATE_PRODUCT: {
      const { id, imgURL, title, category, price, quantity } = action.payload;
      const findItem = updatedState.allProducts.find(
        (item) => item.id === action.payload.id
      );
      findItem.id = id;
      findItem.imgURL = imgURL;
      findItem.title = title;
      findItem.category = category;
      findItem.price = price;
      findItem.quantity = quantity;

      return updatedState;
    }

    case ADD_TO_CART:
      updatedState.cartItems = [...updatedState.cartItems, action.payload];
      return updatedState;

    case UPDATE_CART_ITEM: {
      const { id, imgURL, title, category, price, quantity } = action.payload;
      const findItem = updatedState.cartItems.find(
        (item) => item.id === action.payload.id
      );
      findItem.id = id;
      findItem.imgURL = imgURL;
      findItem.title = title;
      findItem.category = category;
      findItem.price = price;
      findItem.quantity = quantity;

      return updatedState;
    }

    default:
      return state;
  }
};
export default reducer;
