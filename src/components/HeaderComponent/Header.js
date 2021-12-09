import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

import './Header.css'

import { useAuthContext } from '../../contexts/authContext';

const Header = () => {

    let { user } = useAuthContext();

    let userNav = (
        <>
            <Nav.Link as={Link} to="/myphones">My phones</Nav.Link>
            <Nav.Link as={Link} to="/create">Create ad</Nav.Link>
            <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
        </>
    );

    let guestNav = (
        <>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="register">Register</Nav.Link>
        </>
    )


    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/" className="site-logo">Sell your phone</Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/allphones">All phones</Nav.Link>
                        <Nav.Link as={Link} to="howitworks">How it works</Nav.Link>
                        {
                            user.email
                                ? userNav
                                : guestNav
                        }
                    </Nav>
                    {
                        user.email
                            ? <p className="hello-message">Hello, {user.email}</p>
                            : null
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;