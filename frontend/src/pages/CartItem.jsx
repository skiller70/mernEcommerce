import React, { useEffect } from "react";
import CardTable from "../components/CardTable";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";
function CartItem() {
  // HOOKS

  const dispatch = useDispatch();
  const { cartItem } = useSelector((state) => state.eCommerce);
  const { totalAmount } = useSelector((state) => state.eCommerce);
  const { userDetail } = useSelector((state) => state.eCommerce);

  // HOOKS
  // LIFE CYCLE
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    dispatch({ type: "subTotal" });
  }, [cartItem]);
  // LIFE CYCLE

  //METHODS
  //ERROR AND SUCCESS MESSAGE
  const successPayment = () => toast("Payment Successful", { type: "success" });
  const failedPayment = () => toast("Payment Failed ", { type: "error" });
  //ERROR AND SUCCESS MESSAGE

  const handleToken = async (token, addresses) => {
    try {
      const result = await axios.post("/order", {
        token,
        cartItem,
        totalAmount,
        auth:userDetail.id
      });
      if (result.status == 200) {
        successPayment()
        dispatch({type:"clearCart"})
      }else{
        return false
      }
    } catch (error) {
      failedPayment();
    }
  };

  //METHODS

  return (
    <>
      <div className="bg-gray-100 h-[100%] py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-3/4">
              <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                {cartItem.length !== 0 ? (
                  <>
                    {cartItem.map((items) => (
                      <table className="w-full" key={items._id}>
                        <CardTable
                          name={items.name}
                          _id={items._id}
                          imageUrl={items.imageUrl}
                          price={items.price}
                          totalPrice={items.totalPrice}
                          qty={items.Qty}
                        />
                      </table>
                    ))}
                  </>
                ) : (
                  <h2 className="text-center font-mono  font-medium text-3xl">
                    Your Bag
                  </h2>
                )}
              </div>
            </div>
            <div className="md:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">Summary</h2>
                <div className="flex justify-between mb-2"></div>
                <div className="flex justify-between mb-2">
                  <span>Taxes</span>
                  <span>15</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span>5</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">{totalAmount}</span>
                </div>
                {userDetail.name ? (
                  <StripeCheckout
                    className="w-full"
                    stripeKey="pk_test_51ISzS4G5oLdqdp8tUjrHUAbmIi06GhEexKVGTZsCodhgQFQgRiaHsW7SvBJ58PUm70uZH1aOdfFBm3UZ5Hm8S9WF0024ulihav"
                    currency="INR"
                    token={handleToken}
                    billingAddress
                    shippingAddress
                    amount={totalAmount * 100}
                    allowRememberMe
                  />
                ) : (
                  //   <button

                  //   className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full"
                  // >
                  //   Checkout
                  // </button>
                  <Link to="/login">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">
                      Login to Checkout
                    </button>
                  </Link>
                )}
                <button
                  onClick={() => {
                    dispatch({ type: "clearCart" });
                  }}
                  className="bg-red-500 text-white py-2 px-4 rounded-lg mt-4 w-full"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
