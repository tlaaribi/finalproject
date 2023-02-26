import React,{useState} from 'react'

import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import CartProvider from './Components/store/CartProvider';
import { getFood } from './redux/actions/foodAction';
import {
   
    NavLink,
  } from 'reactstrap';

function PrincipalCard() {
    const [cartIsShown, setCartIsShown] = useState(false);
 


    const toggle=()=>{
      setCartIsShown(!cartIsShown)
    }
const showCartHandler = () => {
  setCartIsShown(true);
};
 
const hideCartHandler = () => {
  setCartIsShown(false);
};

  return (
    <div>
         <NavLink  href="#" onClick={toggle}>
      Show Food List 
    </NavLink>
       <CartProvider>
      {cartIsShown && 
      
      <main>
        <Meals />
      </main>}
    </CartProvider>
    </div>
  )
}

export default PrincipalCard
