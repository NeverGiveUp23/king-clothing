import {createContext, useState} from "react";
import {
    onAuthStateChangedListener,
    createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils';

// value you want to access
export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
});


export const UserProvider = ({children}) => {
    // allow the children component to access the values useState
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser};
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}