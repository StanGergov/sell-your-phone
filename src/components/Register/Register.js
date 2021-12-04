import { Form, Button } from 'react-bootstrap';

import './Register.css';


const Register = () => {
    return (
        <Form className="register-form">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Repeat password</Form.Label>
                <Form.Control type="password" placeholder="Repat password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Register
            </Button>
        </Form>
    );
};

export default Register;