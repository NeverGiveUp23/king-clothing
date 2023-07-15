import {createContext, useState} from "react";



export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [], // this will be an array of items
    addItemToCart: () => {},
    }
);

export const addCartItem = (cartItems, itemToAdd) => {

    // check if item already exists in cart
    const existingCartItems = cartItems.find((cartItem) => cartItem.id === itemToAdd.id)
    // if it exists, increase quantity by 1
    if ( existingCartItems){
        return cartItems.map((cartItem) =>
            cartItem.id === itemToAdd.id
                ? {...cartItem , quantity : cartItem.quantity + 1}
                : cartItem
        );
    }
    // return the updated cartItems array
    return [...cartItems, {...itemToAdd, quantity: 1}];
};


export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (item) => setCartItems(addCartItem(cartItems, item));

    const value = {isCartOpen, setIsCartOpen, cartItems, addItemToCart};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};