import React from "react";
// import { Link } from "react-router";
import { NavLink } from "react-router-dom";

export const Header = (props) => {
    return (

        <nav className="navbar">
            <div className="container-fluid">
                <div className="navbar-header">
                    <p className="navbar-identity">
                        <NavLink to={"/home"}>
                            <img className="nav-logo" src={require('../../img/get-net-logo.png')} />
                        </NavLink> | <span className="nav-brandname"> Telecommunications Operator </span>
                    </p>
                </div>
                <ul className="nav nav-pills pull-right">
                    <li><NavLink to={"/GetInternet"} activeStyle={{ color: "red" }}>Get the Internet</NavLink></li>
                    <li><NavLink to={"/OurNetwork"} activeStyle={{ color: "red" }}>Our Network</NavLink></li>
                    <li><NavLink to={"/OurPartners"} activeStyle={{ color: "red" }}>Our partners</NavLink></li>
                    <li><NavLink to={"/ContactUs"} activeStyle={{ color: "red" }}>Contact Us</NavLink></li>
                    <li>EN</li>
                    <li><NavLink to={"/Call"} activeClassName="active"><img className="nav-phone" src={require('../../img/get-net-phone-icon.png')} /></NavLink></li>
                </ul>
            </div>
        </nav>
    );
};