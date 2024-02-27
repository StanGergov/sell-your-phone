import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

import './Register.css';

import * as authService from '../../services/authService';
import { useAuthContext } from '../../contexts/authContext';
import { useNotificationContext, types } from '../../contexts/notificationContext';

const Register = () => {

    const { login } = useAuthContext();
    const { showNotification } = useNotificationContext();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');


    const onRegister = (e) => {
        e.preventDefault();

        const { rePassword } = Object.fromEntries(new FormData(e.currentTarget));

        if (password !== rePassword) {
            showNotification('Passwords missmatch', types.error);
            return console.error('Passwords missmatch');
        }

        authService.register(email, password, name, phoneNumber)
            .then(authData => {
                login(authData);
                showNotification(`You have successfully registered`, types.success);
                navigate('/all-phones');
            })
            .catch(err => console.error(err))
    };

    const onBlurValidationHandler = (e) => {
        e.preventDefault();
        let target = e.currentTarget.name;
        let value = e.currentTarget.value;

        const styleCorrect = "border-color: green"
        const styleNotCorrect = "border-color: red"


        if (target === 'email') {

            const emailRegex = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

            if (!emailRegex.test(value)) {
                return e.currentTarget.style = styleNotCorrect;
            } else {
                e.currentTarget.style = styleCorrect;
                return setEmail(value);
            }

        } else if (target === 'name') {
            if (value.length < 3) {
                return e.currentTarget.style = styleNotCorrect;
            } else {
                e.currentTarget.style = styleCorrect;
                return setName(value);
            }

        } else if (target === 'phoneNumber') {
            if (value.length !== 10) {
                return e.currentTarget.style = styleNotCorrect;
            } else {
                e.currentTarget.style = styleCorrect;
                return setPhoneNumber(value);
            }
        } else if (target === 'password') {
            if (value.length < 6) {
                return e.currentTarget.style = styleNotCorrect;
            } else {
                e.currentTarget.style = styleCorrect;
                return setPassword(value);
            }
        } else if (target === 'rePassword') {
            if (value !== password || value.length < 6) {
                return e.currentTarget.style = styleNotCorrect;
            } else {
                return e.currentTarget.style = styleCorrect;
            }
        }
    };

    return (
        <>
            <h1 className="page-title">Register</h1>
            <Form className="register-form" onSubmit={onRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" onBlur={onBlurValidationHandler} placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" onBlur={onBlurValidationHandler} placeholder="Enter your name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="number" name="phoneNumber" onBlur={onBlurValidationHandler} placeholder="Enter phone number" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" onBlur={onBlurValidationHandler} placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicRePassword">
                    <Form.Label>Repeat password</Form.Label>
                    <Form.Control type="password" name="rePassword" onBlur={onBlurValidationHandler} placeholder="Repeat password" required />
                    <Form.Text>
                        You already have an account? <Link to="/login">Login from here</Link>
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </>
    );
};

export default Register;