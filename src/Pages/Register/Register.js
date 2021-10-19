import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false)

    const auth = getAuth();



    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const handlePassChange = e => {
        setPassword(e.target.value)
    }
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;

            })
    }

    const handleRegistration = (e) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                setError("")
            })
            .catch(error => {
                setError(error.message)
            })
    }
    return (
        <div className="mx-5">
            <h2 className="m-2 p-4 text-danger">Please {isLogin ? "Login" : "Register"}</h2>
            <Form onSubmit={handleRegistration}>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Email
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control onChange={handleEmailChange} type="email" placeholder="Email" required />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} onChange={handlePassChange} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        Password
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="password" placeholder="Password" required />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="submit">{isLogin ? "Login" : "Register"}</Button>
                    </Col>
                </Form.Group>
            </Form>
            <Link to="/login">Already Registered?</Link>
        </div>
    );
};

export default Register;


