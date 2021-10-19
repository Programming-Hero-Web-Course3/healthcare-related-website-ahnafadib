import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { name, description, img } = props.service

    return (
        <div className="">
            <div className="col border border-1 border-secondary rounded shadow-lg p-3 mb-5">
                <div className="card h-100">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body g-4 align-items-center">
                        <h4 className="card-title fst-italic">{name}</h4>
                        <Card.Text>{description}</Card.Text>
                        <Link className="text-decoration-none" to='/doctors'> {/****** */}
                            <button className="btn btn-danger text-white">More Info</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;


