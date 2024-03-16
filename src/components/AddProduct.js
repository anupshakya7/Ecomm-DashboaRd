import React, { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState("");

  async function addProductHandle(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);

    //console.log(formData);
    let result = await fetch("http://127.0.0.1:8000/api/add-products", {
      method: "POST",
      body: formData,
    });

    if (result.status === 201) {
      alert("Data has been saved");
    } else {
      alert("Error");
    }
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
            onChange={(e) => setFile(e.target.files[0])}
            className="form-control"
            id="p_image"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
