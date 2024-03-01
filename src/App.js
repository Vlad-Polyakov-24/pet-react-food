import React, {useState} from "react";
import Header from "./components/Layout/Header/Header";
import Intro from "./components/Layout/Intro/Intro";
import Meals from "./components/Layout/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./store/CartContextProvider";

const App = () => {
  const [cartVisibility, setCartVisibility] = useState(false);

  const cartVisibilityHandler = (value) => setCartVisibility(value);
  
  return (
    <CartContextProvider>
      <Header onShowCart={cartVisibilityHandler}/>
      <main>
        <Intro/>
        <Meals/>
      </main>
      {cartVisibility && <Cart onHideCart={cartVisibilityHandler}/>}
    </CartContextProvider>
  );
}

export default App;
