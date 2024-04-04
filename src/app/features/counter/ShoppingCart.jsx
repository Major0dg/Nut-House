// ShoppingCart.js
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCartItems } from "../actions";

const Card = ({ item }) => {
  return (
    <div className="mt-7 p-4">
      <img src={item.image} alt={item.title} className="w-64 h-auto" />
      <div className="card-content">
        <h3 className="text-xl font-semibold">{item.title}</h3>
        <p className="text-gray-700 italic text-xs">
          Description: {item.description}
        </p>
        <p className="mt-2 text-gray-900 font-semibold italic">
          Price: - ${item.price}
        </p>
        <p className="text-gray-900">Category: {item.category}</p>
      </div>
    </div>
  );
};

const ShoppingCart = ({ items, loading, error, fetchCartItems }) => {
  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-7">
      {items.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.cart.items,
  loading: state.cart.loading,
  error: state.cart.error,
});

export default connect(mapStateToProps, { fetchCartItems })(ShoppingCart);
