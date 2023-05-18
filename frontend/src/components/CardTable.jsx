import React from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
function CardTable(props) {
  //   HOOKS
  const { imageUrl, name, price, _id, qty, totalPrice } = props;

  const dispatch = useDispatch();
  //   HOOKS

  return (
    <>
      {" "}
      {/* <table className="w-full"> */}
        <thead>
          <tr>
            <th className="text-left font-semibold">Product</th>
            <th className="text-left font-semibold">Price</th>
            <th className="text-left font-semibold">Quantity</th>
            <th className="text-left font-semibold">Remove</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-4 flex items-center flex-1">
              <img className="h-16 w-16 mr-4" src={imageUrl} alt={_id} />
              <span className="font-semibold"> {name}</span>
            </td>

            <td className="py-4 ">{totalPrice}</td>
            <td className="py-4">
              <button
                onClick={() => {
                  dispatch({
                    type: "decreaseCart",
                    payload: { price, _id },
                  });
                }}
                className="border rounded-md py-2 px-4 mr-2"
              >
                -
              </button>
              <span className="text-center w-8">{qty}</span>
              <button
                onClick={() => {
                  dispatch({
                    type: "increaseCart",
                    payload: { price, _id },
                  });
                }}
                className="border rounded-md py-2 px-4 ml-2"
              >
                +
              </button>
            </td>

            <td className="py-4 pl-5 text-red-500 ">
              <button
                onClick={() => {
                  dispatch({ type: "removeCart", payload: _id });
                }}
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </td>
          </tr>
        </tbody>
      {/* </table> */}
    </>
  );
}

export default CardTable;
