import './App.css';
import { useState } from 'react';
import { Footer } from './components/Footer.js';
import { Header } from "./components/Header.js";
import { NavBar } from "./components/NavBar.js";
import { Products } from "./components/Products.js";

function App() {
  // To maintain items in cart
  const [cart, setCart] = useState([]);

  // To add item to cart
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // To remove item from cart
  const removeFromCart = (itemToRemove) => {
    const updatedCart = cart.filter((item) => item.id !== itemToRemove);
    setCart(updatedCart);
  };

  return (
    <>
      <NavBar numItems={cart.length} />
      <Header />
      <Products cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />
      <Footer />
    </>
  );
}

export default App;