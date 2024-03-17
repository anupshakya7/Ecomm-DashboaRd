import React, { useEffect, useState } from 'react'

const ProductList = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        async function fetchProduct(){
            try{
            let result = await fetch('http://127.0.0.1:8000/api/products');
            result = await result.json();
            setData(result);
            }catch(e){
                console.error(e);
            }
        }
        fetchProduct();
        
    },[]);
    console.log(data);
    return (
        <div className="card p-4 mt-4 shadow">
            <h2>Product List</h2>
            <table className="table table-bordered mt-3">
                <thead>
                    <tr className='table-dark'>
                        <th style={{width:"50px"}}>ID</th>
                        <th style={{width:"300px"}}>Name</th>
                        <th style={{width:"200px"}}>Image</th>
                        <th style={{width:"500px"}}>Description</th>
                        <th style={{width:"150px"}}>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item)=>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td><img style={{width:"140px"}} src={`http://127.0.0.1:8000/`+item.file_path} alt={item.name} /></td>
                            <td>{item.description}</td>
                            <td>{item.price}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default ProductList
