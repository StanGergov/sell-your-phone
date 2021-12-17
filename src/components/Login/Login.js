import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

import './Login.css';

import { useNotificationContext, types } from '../../contexts/notificationContext';
import { useAuthContext } from '../../contexts/authContext';
import * as authService from '../../services/authService';

const Login = () => {

    const { login } = useAuthContext();
    const { showNotification } = useNotificationContext();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const onLogin = (e) => {
        e.preventDefault();

        authService.login(email, password)
            .then((authData) => {
                if (authData.message) {
                    return (
                        showNotification('Wrong email or password!', types.error)
                    )
                }

                login(authData);
                showNotification(`Welcome ${email}.`, types.success);
                navigate('/');
            })
            .catch(err => {
                console.log(err);
            });
    };

    const onBlurValidationHandler = (e) => {
        e.preventDefault();

        let target = e.currentTarget.name;
        let value = e.currentTarget.value;

        const styleCorrect = "border-color: green";
        const styleNotCorrect = "border-color: red";

        if (target === 'email') {

            const emailRegex = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

            if (!emailRegex.test(value)) {
                return e.currentTarget.style = styleNotCorrect;
            } else {
                e.currentTarget.style = styleCorrect;
                return setEmail(value);
            }
        } else if (target === 'password') {
            if (value.length < 6) {
                return e.currentTarget.style = styleNotCorrect;
            } else {
                e.currentTarget.style = styleCorrect;
                return setPassword(value);
            }
        }
    }

    return (
        <>
            <h1 className="page-title">Login</h1>
            <Form className="login-form" onSubmit={onLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" onBlur={onBlurValidationHandler} placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" onBlur={onBlurValidationHandler} placeholder="Password" required />
                    <Form.Text>
                        You don't have any account? <Link to="/register">Register from here</Link>
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </>
    );
};

export default Login;