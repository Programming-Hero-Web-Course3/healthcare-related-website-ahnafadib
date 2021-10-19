import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import image from "../../images/1.jpg"

const Home = () => {
    const { user } = useAuth();
    return (
        <div className="d-flex justify-content-around align-items-center">
            <h5>User: {user.displayName}</h5>
            <img className="mx-4 p-2" src={image} alt="" />
            <div>
                <h1 className="mx-4 p-2">Our Aim is to deliver the best medical service</h1>
                <Link to="/services">
                    <button type="button">
                        Our Services
                    </button>
                </Link>

            </div>
        </div >
    );
};

export default Home; <h2>This is the home page</h2>