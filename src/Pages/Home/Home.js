import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import image from "../../images/1.jpg"
import 'animate.css';

const Home = () => {
    const { user } = useAuth();
    return (
        <div>
            <div className="d-flex justify-content-around align-items-center">
                <img className="m-4 p-4" src={image} alt="" />
                <div>
                    <h1 className="mx-4 p-2">Our Aim is to deliver the best medical service</h1>
                    <Link to="/services">
                        <button className="btn btn-outline-danger rounded" type="button">
                            Our Services
                        </button>
                    </Link>
                </div>
            </div >
            <div className="mx-4 my-4 p-4 ">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 align-items-center"
                            src="https://cdn.hswstatic.com/gif/becoming-doctor.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3 className="text-danger font-bold font-weight-bold">Specialist Doctors</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 align-items-center"
                            src="https://st.depositphotos.com/1518767/1415/i/600/depositphotos_14156552-stock-photo-side-view-of-a-surgical.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className="text-danger font-bold font-weight-bold">Operation Facilities</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 align-items-center"
                            src="https://diagnosticsmarketing.net/blog/wp-content/uploads/2019/03/visitprep02.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3 className="text-danger font-bold font-weight-bold" >Diagnostic Center</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </div>
        </div>
    );
};

export default Home;