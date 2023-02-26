import React from 'react'
import { useState } from 'react';
import {useSelector} from "react-redux";
import { Spinner } from 'reactstrap';
import Header from '../../Components/Layout/Header';
import Meals from '../../Components/Meals/Meals';
import Cart from '../../Components/Cart/Cart';
import CartProvider from '../../Components/store/CartProvider';



function UserDashboard() {
  
  const [cartIsShown, setCartIsShown] = useState(false);
  const user=useSelector((state)=>state.authReducer.user)
  if (!user) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Spinner
          style={{ width: '3rem', height: '3rem', color: 'secondary' }}
          type="grow"
        />
      </div>
    );
  }

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };  

return (
    <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <main>
          <Meals />
        </main>
    </CartProvider>
    );
}

export default UserDashboard