import {createContext, useState} from "react";
import CartDropdown from "../components/cart-dropdown/cart-dropdown";


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {}
    }
);


export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const value = {isCartOpen, setIsCartOpen};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};