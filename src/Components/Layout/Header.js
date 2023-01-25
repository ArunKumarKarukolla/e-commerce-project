import React,{Fragment} from "react";
import { NavLink } from "react-bootstrap";
import HeaderCartButton from "./HeaderCartButton";

const Header=(props)=>{
    return(
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    {/* logo and side button */}
                    <NavLink href="#" className="navbar-brand">E-Commerce</NavLink>
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navBar1" aria-controls="navBar1" aria-label="Expand Navigation">
                        <div className="navbar-toggler-icon" />
                    </button>

                    {/* navbar menus */}

                    <div className="collapse navbar-collapse justify-content-center" id ="navBar1">
                        <ul className="navbar-nav">
                            <li className="navbar-item">
                                <a href="#" className="nav-link active" aria-aria-current="page">Home</a>
                            </li>
                            <li className="navbar-item">
                                <a href="#" className="nav-link active" aria-current="page">Store</a>
                            </li>
                            <li className="navbar-item">
                                <a href="#" className="nav-link active" aria-current="page">About</a>
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