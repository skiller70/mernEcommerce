import React, { useState } from "react";
import { useDispatch } from "react-redux";

function Card(props) {
  //   HOOKS
  const { imageUrl, name, price, _id ,description} = props;
  const dispatch = useDispatch();
  //   HOOKS
  //   STATE
  const [qty, setQty] = useState(1);
  //   STATE
  //METHODS

  // const incQty = ()=>{
  // if(qty !== 10){
  //     setQty(qty + 1)
  // }else{
  //     return false
  // }

  // }

  // const dicQty = ()=>{
  //     if(qty !== 1){
  //         setQty(qty - 1)
  //     }else{
  //         return false
  //     }

  //     }

  //METHODS
  return (
    <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="p-8  rounded-t-lg aspect-square "
          src={imageUrl}
          alt="product image"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-light tracking-tight text-gray-900 dark:text-white">
          {description}
          </h5>
        </a>

        {/* <div className="mt-2">Qty <button onClick={dicQty} className=" px-2 rounded-md bg-red-100 mx-2">-</button>{qty}<button onClick={incQty} className=" px-2 rounded-md bg-blue-100 mx-2">+</button> </div> */}
        <div className="flex items-center mt-2.5 mb-5"></div>
        <div className="flex items-center justify-between">
          <span className="text-3xl   font-medium text-gray-900 dark:text-white">
           {`${price} rs`}
          </span>
          <button
            onClick={() => {  
              dispatch({
                type: "addToCart",
                payload: {
                  name,
                  imageUrl,
                  _id,
                  price,
                  Qty: 1,
                  totalPrice: price,
                },
              });
            }}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
