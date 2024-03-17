import "./App.css";
import { Button } from "react-bootstrap";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateProduct";
import Login from "./components/Login";
import Register from "./components/Register";
import { useEffect } from "react";
import ProtectedRoutes from "./Services/ProtectedRoutes";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route element={<ProtectedRoutes />}>
              <Route path="/" element={<ProductList/>}>Home</Route>
            </Route>
            <Route element={<ProtectedRoutes />}>
              <Route path="/add" element={<AddProduct />}>
                Add
              </Route>
            </Route>
            <Route element={<ProtectedRoutes />}>
              <Route path="/update" element={<UpdateProduct />}>
                Update
              </Route>
            </Route>
            <Route path="/login" element={<Login />}>
              Login
            </Route>
            <Route path="/register" element={<Register />}>
              Register
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
