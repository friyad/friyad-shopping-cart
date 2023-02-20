import { ADDPRODUCT } from "./actionTypes";

const initialState = {
  allProducts: [
    // {
    //   id: 1,
    //   imgURL: "https://i.dummyjson.com/data/products/59/thumbnail.jpg",
    //   title: "Spring and summershoes",
    //   category: "Mens shoes",
    //   price: 400,
    //   quantity: 10,
    // },
    // {
    //   id: 2,
    //   imgURL: "https://i.dummyjson.com/data/products/59/thumbnail.jpg",
    //   title: "Spring and summershoes",
    //   category: "Mens shoes",
    //   price: 400,
    //   quantity: 10,
    // },
    // {
    //   id: 3,
    //   imgURL: "https://i.dummyjson.com/data/products/59/thumbnail.jpg",
    //   title: "Spring and summershoes",
    //   category: "Mens shoes",
    //   price: 400,
    //   quantity: 10,
    // },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDPRODUCT:
      return {
        ...state,
        allProducts: [...state.allProducts, action.data],
      };

    default:
      return state;
  }
};
export default reducer;
