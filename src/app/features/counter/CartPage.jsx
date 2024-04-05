import React from "react";
import { useSelector } from "react-redux";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);

  return <div>CartPage</div>;
};

export default CartPage;
