import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2 className="m-2 p-4">Please Register</h2>
            <form>
                <input type="email" placeholder="Your Email" />
                <br />
                <input type="password" placeholder="Your Password" />
                <br />
                <Button className="m-4 border-radiu" variant="outline-info">Register</Button>
                {/* <input type="submit" value="Submit" /> */}

            </form>
            <Link to="/login">Already Registered?</Link>
        </div>
    );
};

export default Register;