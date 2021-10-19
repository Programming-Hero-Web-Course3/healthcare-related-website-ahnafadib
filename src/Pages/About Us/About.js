import React from 'react';

const About = () => {
    return (
        <div>
            <div className="d-flex justify-content-around align-items-center p-4 mx-4 row row-cols-1 row-cols-md-3">
                <div>
                    <p className="mx-4 p-2">Our team strives to achieve excellence in every aspect of the process, from the preliminary to final treatment</p>
                    <h2>Our Vision--------------</h2>
                    <p>Personalized patient care is what sets California Pacific Medical Center apart. When you visit one of our four San Francisco campus locations you can expect to receive world class care. Expert physician specialists and caring clinical staff provide you with an exceptional health care experience.</p>
                </div>
                <div>
                    <iframe className="row row-cols-1 row-cols-md-3" width="560" height="315" src="https://www.youtube.com/embed/qm6c7KDIQq0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default About;