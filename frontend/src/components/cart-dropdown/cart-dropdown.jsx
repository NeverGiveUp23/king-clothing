import './cart-dropdown.scss';
import Button from "../button/button.component";

// Dropdown component for cart
const CartDropdown = () => {
  return (
      <div className={'cart-dropdown-container'}>
          <div className={'cart-items'}></div>
          <Button >CHECKOUT</Button>
      </div>
  )
}


export default CartDropdown;