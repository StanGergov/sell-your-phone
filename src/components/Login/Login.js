import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

import './Login.css';


const Login = () => {
    return (
        <>
            <h1 className="page-title">Login</h1>
            <Form className="login-form">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
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