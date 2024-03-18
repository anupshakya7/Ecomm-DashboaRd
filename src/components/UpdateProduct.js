import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [name,setName] = useState("");
  const [description,setDescription] = useState("");
  const [price,setPrice] = useState("");
  const [file,setFile] = useState("");

  useEffect(() => {
    getFetch();
  }, []);

  async function getFetch() {
    let result = await fetch("http://127.0.0.1:8000/api/get-product/" + id);
    result = await result.json();
    setData(result);
    setName(result.name);
    setDescription(result.description);
    setPrice(result.price);
    setFile(result.file);
  }

  async function updateHandle(e){
    e.preventDefault()
    const formData = new FormData();
    formData.append('image',file);
    formData.append('name',name);
    formData.append('price',price);
    formData.append('description',description);
    let result = await fetch('http://127.0.0.1:8000/api/update-products/'+data.id+'?_method=PUT',{
      method:"POST",
      body:formData
    });

    alert("Updated Successfully");

    
  }
  return (
    <div className="card mt-4 p-3 text-start">
      <h1>Update Product Page</h1>
      <form onSubmit={updateHandle}>
        <div className="mb-3">
          <label htmlFor="p_name" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e)=>setName(e.target.value)}
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
            onChange={(e)=>setDescription(e.target.value)}
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
            onChange={(e)=>setPrice(e.target.value)}
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
            onChange={(e)=>setFile(e.target.files[0])}
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
