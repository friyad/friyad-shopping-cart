import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleAddProduct } from "../redux/products/actions";

const AddNewProduct = () => {
  const dispatch = useDispatch();
  const { allProducts } = useSelector((state) => state.products);
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    const prevData = { ...formData };
    prevData[e.target.name] = e.target.value;
    setFormData(prevData);
  };

  const handleAddProductForm = (e) => {
    e.preventDefault();
    const newProduct = { id: allProducts.length + 1, ...formData };
    dispatch(handleAddProduct(newProduct));
    e.target.reset();
  };

  return (
    <div>
      {/* Product Input Form */}
      <div className="formContainer">
        <h4 className="formTitle">Add New Product</h4>
        <form
          onSubmit={handleAddProductForm}
          className="space-y-4 text-[#534F4F]"
          id="lws-addProductForm"
        >
          {/* product name */}
          <div className="space-y-2">
            <label htmlFor="lws-inputName">Product Name</label>
            <input
              onChange={handleInputChange}
              className="addProductInput"
              id="lws-inputName"
              type="text"
              name="title"
              required
            />
          </div>
          {/* product category */}
          <div className="space-y-2">
            <label htmlFor="lws-inputCategory">Category</label>
            <input
              onChange={handleInputChange}
              className="addProductInput"
              id="lws-inputCategory"
              type="text"
              name="category"
              required
            />
          </div>
          {/* product image url */}
          <div className="space-y-2">
            <label htmlFor="lws-inputImage">Image Url</label>
            <input
              onChange={handleInputChange}
              className="addProductInput"
              id="lws-inputImage"
              type="text"
              name="imgURL"
              required
            />
          </div>
          {/* price & quantity container */}
          <div className="grid grid-cols-2 gap-8 pb-4">
            {/* price */}
            <div className="space-y-2">
              <label htmlFor="ws-inputPrice">Price</label>
              <input
                onChange={handleInputChange}
                className="addProductInput"
                type="number"
                id="lws-inputPrice"
                name="price"
                required
              />
            </div>
            {/* quantity */}
            <div className="space-y-2">
              <label htmlFor="lws-inputQuantity">Quantity</label>
              <input
                onChange={handleInputChange}
                className="addProductInput"
                type="number"
                id="lws-inputQuantity"
                name="quantity"
                required
              />
            </div>
          </div>
          {/* submit button */}
          <button type="submit" id="lws-inputSubmit" className="submit">
            Add Product
          </button>
        </form>
      </div>
      {/* Product Input Form Ends */}
    </div>
  );
};

export default AddNewProduct;
