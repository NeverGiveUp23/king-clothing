import {createContext, useEffect, useState} from "react";
import {createUserDocumentFromAuth, onAuthStateChangeListener} from "../utils/firebase/firebase.utils";
// value you want to access
export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
});

export const UserProvider = ({children}) => {
    // allow the children component to access the values useState
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser};


    useEffect(() => {
        return onAuthStateChangeListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });
    }, []);


    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}