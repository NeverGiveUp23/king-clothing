import {Outlet, Link} from "react-router-dom";
import {Fragment, useContext} from "react";
import {UserContext} from "../../context/user.context";
import {CartContext} from "../../context/cart.context";
import {ReactComponent as CrownLogo} from '../../assets/crown (1).svg';
import './navigation.styles.scss'
import {signOutUser} from "../../utils/firebase/firebase.utils";
import Cart from "../../components/cart-icon/cart.icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";


const Navigation= () => {
    const { currentUser} = useContext(UserContext); // tell to re-render the component on update when value gets updated
    const { isCartOpen } = useContext(CartContext);
    return (
        <Fragment>
            <div className={"navigation"}>
                <Link to={'/'} className={'logo-container'}>
                <div>
                    <CrownLogo className={'logo'}/>
                </div>
                </Link>
                <div className={'nav-links-container'}>
                    <Link to={'/shop'} className={'nav-link'}>
                        SHOP
                    </Link>
                        {
                            currentUser ? (
                                <span className={'nav-link'} onClick={signOutUser} >SIGN OUT</span> )
                                : ( <Link to={'/auth'} className={'nav-link'}>SIGN IN</Link>
                            )
                        }
                        <Cart/>
                </div>
                {/* this will find the truthy value to open cart -> if both are true */}
                {isCartOpen && <CartDropdown/>}
            </div>
            <Outlet />
        </Fragment>
    )
}



export default Navigation;