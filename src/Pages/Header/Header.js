import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'

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
    const { user, logout } = useAuth();
    return (
        <nav className=" bg-danger text-dark p-3">
            <div>
                <h1 className="mx-4 p-4 text-dark">Doctors' Diagnostic Center</h1>
                <h4 className="my-2 p-2 text-dark">For Your Reliable Medical Help</h4>
            </div>
            <div>
                <NavLink activeStyle={activeStyle}
                    className="mx-4 text-decoration-none text-dark" to="/home">Home</NavLink>
                <NavLink activeStyle={activeStyle}
                    className="mx-4 text-decoration-none text-dark" to="/services">Services</NavLink>
                <NavLink activeStyle={activeStyle}
                    className="mx-4 text-decoration-none text-dark" to="/doctors">Doctors</NavLink>
                <NavLink activeStyle={activeStyle}
                    className="mx-4 text-decoration-none text-dark" to="/about">About Us</NavLink>
                <NavLink activeStyle={activeStyle}
                    className="mx-4 text-decoration-none text-dark" to="/login">Log in</NavLink>
                <NavLink activeStyle={activeStyle}
                    className="mx-4 text-decoration-none text-dark" to="/register">Register</NavLink>
                <span>{user.displayName} </span>
                {user?.email && <button onClick={logout}>log out</button>}
            </div>
        </nav>

    );
};

export default Header;