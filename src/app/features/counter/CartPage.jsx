import React from "react";
import { useSelector } from "react-redux";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);

  return (
    <div className="container-fluid mx-10 ">
      <div className="col-lg-12 mt-6 mb-3 text-[20px] font-bold">
        Cart Items
      </div>
      <div>
        {cartItems.lenght === 0 ? (
          <p>No Item in your cart</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-64 h-auto"
                />
                <h3 className="text-xl font-semibold"> {item.title}</h3>{" "}
                <p className="mt-2 text-gray-900 font-semibold italic">
                  ${item.price}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CartPage;
