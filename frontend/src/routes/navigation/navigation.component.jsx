import {Outlet, Link} from "react-router-dom";
import {Fragment} from "react";
import {ReactComponent as CrownLogo} from '../../assets/crown (1).svg';
import './navigation.styles.scss'


const Navigation= () => {
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
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;