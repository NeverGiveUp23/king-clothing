import './cart-dropdown.scss';
import Button from "../button/button.component";
import CartItem from "../cart-item/caft-item.component";
import {useContext} from "react";
import {CartContext} from "../../context/cart.context";
// Dropdown component for cart
const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
  return (
      <div className={'cart-dropdown-container'}>
          <div className={'cart-items'}>
              {
                  cartItems.map((cartItem) => (
                      <CartItem key={cartItem.id} cartItem={cartItem}/>
                  ))
              }
          </div>
          <Button >CHECKOUT</Button>
      </div>
  )
}


export default CartDropdown;