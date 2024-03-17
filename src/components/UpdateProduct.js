import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    getFetch();
  }, []);

  async function getFetch() {
    let result = await fetch("http://127.0.0.1:8000/api/get-product/" + id);
    result = await result.json();
    setData(result);
  }
  return (
    <div className="card mt-4 p-3 text-start">
      <h1>Update Product Page</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="p_name" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            defaultValue={data.name}
            placeholder="Enter Product Name"
            id="p_name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="p_description" className="form-label">
            Product Description
          </label>
          <input
            type="text"
            defaultValue={data.description}
            className="form-control"
            placeholder="Enter Product Description"
            id="p_description"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="p_price" className="form-label">
            Product Price
          </label>
          <input
            type="text"
            defaultValue={data.price}
            className="form-control"
            placeholder="Enter Product Price"
            id="p_price"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="p_image" className="form-label">
            Product Image
          </label>
          <input
            defaultValue={data.file_path}
            type="file"
            className="form-control"
            id="p_image"
          />
          <img
            className="mt-3"
            style={{ width: 100 }}
            src={`http://127.0.0.1:8000/` + data.file_path}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
