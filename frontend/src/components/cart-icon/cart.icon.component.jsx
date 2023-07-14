import './cart.icon.scss'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import {useContext} from "react";
import {CartContext} from "../../context/cart.context";


const Cart = () => {
    const {isCartOpen, setIsCartOpen} = useContext(CartContext);
    const toggleIsCartOpen = () => {
        setIsCartOpen(!isCartOpen); // this will toggle the value of isCartOpen
    };


  return (
      <div className={'cart-icon-container'} onClick={toggleIsCartOpen}>
          <ShoppingIcon className={'shopping-icon'}/>
          <span className={'item-count'}>
              10
          </span>
      </div>
  )
}


export default Cart;