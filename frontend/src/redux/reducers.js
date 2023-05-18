import { createReducer } from "@reduxjs/toolkit";

const initialState = { cartItem: [], totalAmount: 0, userDetail: {} };
export const eCommerce = createReducer(initialState, {
  setUserDetail: (stat, action) => {
    stat.userDetail = action.payload;
  },

  // ADD TO CART LOGIC
  addToCart: (state, action) => {
    const cartItem = state.cartItem.find(
      (item) => item._id === action.payload._id
    );
    if (cartItem) {
      cartItem.totalPrice = cartItem.totalPrice + action.payload.price;
      cartItem.Qty = cartItem.Qty + 1;
    } else {
      state.cartItem.push(action.payload);
    }
  },
  // ADD TO CART LOGIC

  //CLEAR CART
  clearCart: (state, action) => {
    state.cartItem = [];
  },

  //CLEAR CART

  //REMOVE CART
  removeCart: (state, action) => {
    state.cartItem = state.cartItem.filter(
      (item) => item._id !== action.payload
    );
    console.log(action.payload);
  },

  //REMOVE CART

  //INCREASE CART
  increaseCart: (state, action) => {
    console.log(action.payload);
    const cartItem = state.cartItem.find(
      (item) => item._id === action.payload._id
    );
    if (cartItem.Qty !== 10) {
      cartItem.Qty = cartItem.Qty + 1;
      cartItem.totalPrice = cartItem.totalPrice + action.payload.price;
    }
  },

  //INCREASE CART

  //DECREASE CART
  decreaseCart: (state, action) => {
    console.log(action.payload);
    const cartItem = state.cartItem.find(
      (item) => item._id === action.payload._id
    );

    if (cartItem.Qty !== 1) {
      cartItem.Qty = cartItem.Qty - 1;
      cartItem.totalPrice = cartItem.totalPrice - action.payload.price;
    }
  },

  //DECREASE CART

  //SUBTOTAL
  subTotal: (state, action) => {
    let qty = 0;
    let price = 0;
    let tax = 20;
    state.cartItem.forEach((item) => {
      qty += item.Qty;
      price += item.Qty * item.price;
    });
    state.totalAmount = price + tax;
  },

  //SUBTOTAL

  //LOGOUT
  logoutUser: (state,action) => {

    state.userDetail = {}


  },

  //LOGOUT
});
