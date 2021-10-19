import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Doctor = (props) => {
    const { name, fees, dept, img } = props.doctor
    return (
        <div className="">
            <div className="col border border-1 border-secondary rounded shadow-lg p-3 mb-5">
                <div className="card h-100">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body g-4 align-items-center">
                        <h2 className="card-title fst-italic">Name: {name}</h2>
                        <h3 className="card-title fst-italic">{dept}</h3>
                        <h4 className="card-title fst-italic">Fee: {fees}</h4>

                        <Link className="text-decoration-none">
                            <button className="btn btn-danger text-white">Appointment</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctor;