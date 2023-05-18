import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export const Navbar = () => {
// HOOKS

const dispatch = useDispatch()
const navigate = useNavigate()
const {cartItem} = useSelector((state)=>state.eCommerce)
const {userDetail} = useSelector((state)=>state.eCommerce)
// HOOKS


// METHODS

const logoutUser = ()=>{
  localStorage.removeItem("isUser")
  dispatch({type:"logoutUser"})
  navigate("/login")
}
// METHODS


  return (
    <div className=" w-[100%] flex items-center h-16 bg-[#A5C0DD] sticky top-0 z-20">
      {/* NAV BRAND */}
      <div className=" text-lg md:text-2xl sm-text-lg flex-1 text-center "><Link to="/">E-commerce</Link></div>
      {/* NAV BRAND */}
      {/* NAV LINK */}
      <div className="items-center flex-1 justify-evenly flex ">
        <Link to="/"> Home</Link>
        <Link to="/order"> Your Order</Link>
        <div className="flex">
        <Link to="/cart">
          <FontAwesomeIcon icon={faCartShopping} />
        </Link>
       <Link to="/cart" className="mx-2">{cartItem.length}</Link>
        </div>
      </div >
      {/* NAV LINK */}
      <div className=" md:flex-1  md:flex md:justify-center">
    <div>
      {userDetail.name?<>{userDetail.name} <button onClick={logoutUser} className=" ml-2">Logout</button></>:<Link to="/login">
      Login   
      </Link>}
  
     
    </div>


      </div>
    </div>
  );
};
