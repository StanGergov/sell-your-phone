import { Link, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

import './Login.css';

import { useNotificationContext, types } from '../../contexts/notificationContext';
import { useAuthContext } from '../../contexts/authContext';
import * as authService from '../../services/authService';

const Login = () => {

    const { login } = useAuthContext();
    const { addNotification } = useNotificationContext()
    const navigate = useNavigate();

    const onLogin = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');
        let password = formData.get('password');

        authService.login(email, password)
            .then((authData) => {
                login(authData);
                navigate('/allphones');
                addNotification(`Welcome ${email}.`, types.success);
            })
            .catch(err => {
                console.log(err);
            });
    }


    return (
        <>
            <h1 className="page-title">Login</h1>
            <Form className="login-form" onSubmit={onLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
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