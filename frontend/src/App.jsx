import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import CartItem from "./pages/CartItem";
import Order from "./pages/Order";
import { Navbar } from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminDash from "./pages/AdminDash";

function App() {
  // HOOKS
  const dispatch = useDispatch();
  // HOOKS



  useEffect(() => {
    setToken();
  }, []);

  // METHODS
  const setToken = () => {
    const token = localStorage.getItem("isUser");
    if (token !== null) {
      const decode = jwt_decode(token);
      console.log(decode);
      dispatch({type:"setUserDetail",payload:decode})
    }else{
      return false
    }
  };
  // METHODS
  return (
    <>
    <ToastContainer/> 
      <div className=" h-[100vw]  w-100% ">
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/cart" Component={CartItem} />
          <Route path="/order" Component={Order} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/create" Component={AdminDash} />
        </Routes>
      </div>
    </>
  );
}

export default App;
