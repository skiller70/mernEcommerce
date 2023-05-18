import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import Card from "../components/Card";

const Home = () => {
  // HOOKS
  const test = useSelector((state) => state.eCommerce.testReducer);

  // HOOKS

  // LIFE CYCLE
  useEffect(() => {
    fetchProduct();
  }, []);
  // LIFE CYCLE
  // STATE
  const [products, setProducts] = useState([]);
  // STATE

  //METHODS
  const fetchProduct = async () => {
    const result = await axios.get("/getProduct");
    setProducts(result.data);
 
  };
  //METHODS

  if (products.length !== 0) {
    return (
<>

<div className=" p-10 grid grid-cols-1 md:grid-cols-3 w-full gap-3">
          
          {products.map((items) => (
            <div key={items._id}>
              
              <Card description={items.description} imageUrl={items.imageUrl} name={items.name} price={items.price} _id={items._id} />
            </div>
          ))}
        </div>

</>


    );
  } else {
    return <>Loading</>;
  }
};

export default Home;
