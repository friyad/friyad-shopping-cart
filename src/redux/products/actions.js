import {
  ADDPRODUCT,
  ADD_TO_CART,
  UPDATE_CART_ITEM,
  UPDATE_PRODUCT,
  DELETE_CART_ITEM,
} from "./actionTypes";

export const handleAddProduct = (productData) => {
  return {
    type: ADDPRODUCT,
    payload: productData,
  };
};

export const handleUpdateProduct = (productData) => {
  return {
    type: UPDATE_PRODUCT,
    payload: productData,
  };
};

export const handleAddToCart = (itemData) => {
  return {
    type: ADD_TO_CART,
    payload: itemData,
  };
};

export const handleUpdateCartItem = (itemData) => {
  return {
    type: UPDATE_CART_ITEM,
    payload: itemData,
  };
};

export const handleDeleteCartItem = (id) => {
  return {
    type: DELETE_CART_ITEM,
    payload: id,
  };
};
