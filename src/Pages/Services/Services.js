import React, { useEffect, useState } from 'react';
import Service from "../../../src/Pages/Service/Service";
const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])

    return (
        <div className="bg-dark">
            <h2 className="m-4">Our Services</h2>
            <div className="row row-cols-1 row-cols-md-3 g-2 m-4">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>
                    )
                }
            </div>
        </div>
    );
};

export default Services;