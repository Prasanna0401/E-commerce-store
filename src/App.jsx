import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartModal from './components/CartModal';
import NoMatch from './components/NoMatch'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    if (cart.some((item) => item.id === product.id)) {
      alert('Item already added to the cart');
      return;
    }
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="App">

      <BrowserRouter>

        <Navbar cartCount={cart.length} onCartClick={() => setIsModalOpen(true)} />

        <Routes>

          <Route path='/' element={<ProductList products={products} addToCart={addToCart} />} />

          <Route path='/cart' element={
            isModalOpen && (<CartModal cartItems={cart} onClose={() => setIsModalOpen(false)} removeFromCart={removeFromCart} />)
            } />

          <Route path='*' element={<NoMatch />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;