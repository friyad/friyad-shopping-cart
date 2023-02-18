import { ADDPRODUCT } from "./actionTypes";

export const handleAddProduct = (productData) => {
  return {
    type: ADDPRODUCT,
    data: productData,
  };
};
