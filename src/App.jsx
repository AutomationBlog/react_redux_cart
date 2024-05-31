import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/menu/menu.jsx";
import Header from "./components/header/header.jsx";
import Product from "./components/product/product.jsx";
import Footer from "./components/footer/footer.jsx";
import Cart from "./components/cart/cart.jsx";
import CartFooter from "./components/cart/cartFooter.jsx";

export const cartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const [cardAmount, setCardAmount] = useState(0);
  const [cardQuantity, setCardQuantity] = useState(cart.length);

  return (
    <>
      <cartContext.Provider
        value={{
          cart,
          setCart,
          cardAmount,
          setCardAmount,
          cardQuantity,
          setCardQuantity,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<ViewCart />} />
          </Routes>
        </BrowserRouter>
      </cartContext.Provider>
    </>
  );
}

function HomePage() {
  return (
    <>
      <Menu />
      <Header />
      <Product />
      <Footer />
    </>
  );
}

function ViewCart() {
  return (
    <>
      <Menu />
      <Cart />
      <CartFooter />
    </>
  );
}

export default App;
