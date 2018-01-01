import React from "react";
// import { Link } from "react-router";
import { NavLink } from "react-router-dom";

export const Header = (props) => {
    return (

        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <p className="navbar-brand"><NavLink to={"/home"}>Get-Net</NavLink> | Telecommunications Operator</p>
                </div>
                <ul className="nav navbar-nav">
                    <li><NavLink to={"/home"} activeStyle={{ color: "red" }}>Get the Internet</NavLink></li>
                    <li><NavLink to={"/home"} activeStyle={{ color: "red" }}>Our Network</NavLink></li>
                    <li><NavLink to={"/home"} activeStyle={{ color: "red" }}>Our partners</NavLink></li>
                    <li><NavLink to={"/home"} activeStyle={{ color: "red" }}>Contact Us</NavLink></li>
                    <li><NavLink to={"/user/10"} activeClassName="active">EN</NavLink></li>
                    <li><NavLink to={"/user/10"} activeClassName="active">EN</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};