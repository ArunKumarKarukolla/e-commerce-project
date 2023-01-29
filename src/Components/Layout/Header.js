import React,{Fragment} from "react";
import { NavLink } from "react-router-dom";
import HeaderCartButton from "./HeaderCartButton";

const Header=(props)=>{
    return(
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    {/* logo and side button */}
                    <NavLink tp='/store' className="navbar-brand">E-Commerce</NavLink>
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navBar1" aria-controls="navBar1" aria-label="Expand Navigation">
                        <div className="navbar-toggler-icon" />
                    </button>

                    {/* navbar menus */}

                    <div className="collapse navbar-collapse justify-content-center" id ="navBar1">
                        <ul className="navbar-nav">
                            <li className="navbar-item">
                                <NavLink to='/home' className="nav-link" aria-current="page">Home</NavLink>
                            </li>
                            <li className="navbar-item">
                                <NavLink to='/store' className="nav-link" aria-current="page">Store</NavLink>
                            </li>
                            <li className="navbar-item">
                                <NavLink to='/about' className="nav-link">About</NavLink>
                            </li>
                        </ul>
                    </div>

                    {/*Cart Button*/}
                    <HeaderCartButton onHide={props.onHide} onShow={props.onShow}/>
                </div>
            </nav>
        </Fragment>

    );

};
export default Header;