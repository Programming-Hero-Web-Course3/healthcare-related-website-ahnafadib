import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {

    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        fetch('./doctor.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div className="bg-dark">
            <h2 className="m-4">Our Doctors</h2>
            <div className="row row-cols-1 row-cols-md-3 g-2 m-4">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    ></Doctor>
                    )
                }
            </div>
        </div>
    );
};

export default Doctors;