import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        padding: 10,
        margin: 5,
        borderStyle: "solid",
        borderColor: "silver",
        color: "red",
        borderRadius: 10

    }
    return (
        <nav className="bg-danger text-dark p-3">
            <div>
                <h1 className="mx-4 p-4 text-dark">Dr John Site</h1>
                <h4 className="my-2 p-2 text-dark">For Your Reliable Medical Help</h4>
            </div>
            <NavLink activeStyle={activeStyle}
                className="mx-4 text-decoration-none text-dark" to="/home">Home</NavLink>
            <NavLink activeStyle={activeStyle}
                className="mx-4 text-decoration-none text-dark" to="/services">Services</NavLink>
        </nav>

    );
};

export default Header; <h2>This is Header</h2>