import Button from '@restart/ui/esm/Button';
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-danger text-dark p-3 color-">
            <div className="d-flex justify-content-around ">
                <div>
                    <h1>Contact Us</h1>
                    <p>Chattogram,Bangladesh</p>
                    <p>Phone: 0183*********</p>
                </div>
                <div>
                    <h1>NewsLetter</h1>
                    <textarea name="Name" id="" placeholder="Your Name" cols="20" rows="1"></textarea>
                    <br />
                    <textarea name="Email" id="" placeholder="Your Email Address" cols="20" rows="1"></textarea>
                    <br />
                    <Button variant="danger">Submit</Button>{' '}
                </div>
            </div>
            <div>
                <i className="fab fa-facebook m-4 "></i>
                <i className="fab fa-instagram m-4 "></i>
                <i className="far fa-envelope m-4"></i>
                <i className="fab fa-linkedin m-4"></i>
            </div>
        </footer>
    );
};
<h2>This is the footer of the Site</h2>
export default Footer;