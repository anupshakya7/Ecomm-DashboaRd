import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchProduct();
  }, []);
  const deleteHandle = async (id) => {
    let result = await fetch(
      "http://127.0.0.1:8000/api/delete-products/" + id,
      {
        method: "DELETE",
      }
    );
    result = await result.json();
    fetchProduct();
  };
  async function fetchProduct() {
    try {
      let result = await fetch("http://127.0.0.1:8000/api/products");
      result = await result.json();
      setData(result);
    } catch (e) {
      console.error(e);
    }
  }

  async function search(key){
    if(key !== ""){
        let result = await fetch("http://127.0.0.1:8000/api/search/"+key)
        result = await result.json();
        setData(result);
    }else{
        fetchProduct();
    }
  }
  return (
    <div className="card p-4 mt-4 shadow">
      <h2>Product List</h2>
      <input
            type="text"
            className="form-control"
            onChange={(e)=>search(e.target.value)}
            placeholder="Search Product..."
            id="p_name"
          />
      <table className="table table-bordered mt-3 align-middle">
        <thead>
          <tr className="table-dark">
            <th style={{ width: "50px" }}>ID</th>
            <th style={{ width: "300px" }}>Name</th>
            <th style={{ width: "200px" }}>Image</th>
            <th style={{ width: "500px" }}>Description</th>
            <th style={{ width: "150px" }}>Price</th>
            <th style={{ width: "250px" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <img
                  style={{ width: "140px" }}
                  src={`http://127.0.0.1:8000/` + item.file_path}
                  alt={item.name}
                />
              </td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>
                <Link to={"/update/" + item.id}>
                  <span className="btn btn-outline-primary mx-1">Update</span>
                </Link>
                <span
                  onClick={() => {
                    deleteHandle(item.id);
                  }}
                  className="btn btn-outline-danger mx-1"
                >
                  Delete
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
