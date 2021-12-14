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


    const onRegister = (e) => {
        e.preventDefault();

        let { email, password, rePassword, name, phoneNumber } = Object.fromEntries(new FormData(e.currentTarget));

        if (password !== rePassword) {
            throw new Error('Passwords missmatch');
        }

        authService.register(email, password, name, phoneNumber)
            .then(authData => {
                login(authData);
                showNotification(`You have successfully registered`, types.success);
                navigate('/allphones');
            })
            .catch(err => console.log(err))
    };


    return (
        <>
            <h1 className="page-title">Register</h1>
            <Form className="register-form" onSubmit={onRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter your name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="number" name="phoneNumber" placeholder="Enter phone number" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicRePassword">
                    <Form.Label>Repeat password</Form.Label>
                    <Form.Control type="password" name="rePassword" placeholder="Repat password" required />
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