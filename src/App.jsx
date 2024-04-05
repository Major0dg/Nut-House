import React from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartPage from "./app/features/counter/CartPage";
import Products from "./app/features/counter/Products";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/cartPage" element={<CartPage />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
