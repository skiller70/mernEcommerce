import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function Order() {
  // HOOKS
  const test = useSelector((state) => state.eCommerce.testReducer);
  const { userDetail } = useSelector((state) => state.eCommerce);
  // HOOKS

  // LIFE CYCLE
  useEffect(() => {
    fetchOrder();
  }, [userDetail]);
  // LIFE CYCLE
  // STATE
  const [orders, setOrders] = useState([]);
  // STATE

  //METHODS
  const fetchOrder = async () => {
    const result = await axios.get(
      `/getOrder/${userDetail.id}`
    );
    if (result.status == 201) {
      setOrders(result.data);
      console.log(result.data);
    } else {
      console.log("something went wrong");
    }
  };
  //METHODS

  return (
    <div className=" p-10 grid grid-cols-1 md:grid-cols-3 w-full gap-3 ">
      
      {orders.map((item) => ( <div key={item._id}>
          <OrderCard
            id={item._id}
            name={item.product.name}
            description={item.product.description}
            img={item.product.imageUrl}
            qty={item.qty}
          />
        </div>))}
    </div>
  );
}

const OrderCard = (props) => {
  const {id,name,description,img,qty } = props
  
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full aspect-square"
          src={img}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">
            {description}
          </p>
          <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Quantity <span>{qty}</span></span>
  
  </div>
        </div>
      </div>
    </>
  );
};

export default Order;
