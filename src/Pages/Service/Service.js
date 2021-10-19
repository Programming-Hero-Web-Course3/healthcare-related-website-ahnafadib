import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';

const Service = (props) => {
    const { name, description, img } = props.service

    return (
        <div className="">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Button variant="danger">More Info</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;


