import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Resume from "../documents/resume.pdf";

const link = {
    width: "100px",
    padding: "8px",
    margin: "8px",
    color: "#767171",
    fontSize: "8px",
    textAlign: "center",
    textDecoration: "none"
};

const activestyle = {
    color: "#8e9295",
    boxSizing: "borderBox",
    border: "0.25px solid #8e9295"
};

class Navbar extends Component {
    render() {
        return (
            <div className="navbar" style={{ color: "#6d6868" }}>
                <span className="navLink">
                    <NavLink
                        to="/"
                        exact
                        style={link}
                        activeStyle={activestyle}
                    >
                        Home
                    </NavLink>
                </span>
                <span className="navLink">
                    <a href={Resume} target="_blank" style={link}>
                        Resume
                    </a>
                </span>
                <span className="navLink">
                    <NavLink
                        to="/portfolio"
                        exact
                        style={link}
                        activeStyle={activestyle}
                    >
                        Portfolio
                    </NavLink>
                </span>
            </div>
        );
    }
}

export default Navbar;
