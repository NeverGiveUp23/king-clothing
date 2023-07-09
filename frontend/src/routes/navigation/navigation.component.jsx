import {Outlet, Link} from "react-router-dom";
import {Fragment, useContext} from "react";
import {UserContext} from "../../context/user.context";
import {ReactComponent as CrownLogo} from '../../assets/crown (1).svg';
import './navigation.styles.scss'
import {signOutUser} from "../../utils/firebase/firebase.utils";


const Navigation= () => {
    const { currentUser, setCurrentUser} = useContext(UserContext); // tell to re-render the component on update when value gets updated

    const signOutHandler = async () => {
        await signOutUser();
        setCurrentUser(null)
    }

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
                                <span className={'nav-link'} onClick={signOutHandler} >SIGN OUT</span> )
                                : ( <Link to={'/auth'} className={'nav-link'}>SIGN IN</Link>
                            )
                        }
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}



export default Navigation;