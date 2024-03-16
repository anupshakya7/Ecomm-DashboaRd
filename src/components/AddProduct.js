import React, { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState("");

  async function addProductHandle(e) {
    e.preventDefault();
    console.warn(name, description, price, file);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);

    let result = await fetch("http://127.0.0.1:8000/api/add-products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: formData,
    });

    alert("Data has been saved");
  }

  return (
    <div className="card mt-4 p-3 text-start">
      <h1>Add Product Page</h1>
      <form onSubmit={addProductHandle}>
        <div className="mb-3">
          <label htmlFor="p_name" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="form-control"
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
            onChange={(e) => setDescription(e.target.value)}
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
            onChange={(e) => setPrice(e.target.value)}
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
            type="file"
            onChange={(e) => setFile(e.target.value)}
            className="form-control"
            id="p_image"
          />
        </div>
        <button className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default AddProduct;
