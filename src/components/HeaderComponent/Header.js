import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';


import './Header.css'

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/" className="site-logo">Sell your phone</Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/allphones">All phones</Nav.Link>
                        <Nav.Link as={Link} to="/myphones">My phones</Nav.Link>
                        <Nav.Link as={Link} to="/create">Create ad</Nav.Link>
                        <Nav.Link as={Link} to="howitworks">How it works</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        <Nav.Link as={Link} to="register">Register</Nav.Link>
                        <Nav.Link as={Link} to="#link">Logout</Nav.Link>
                    </Nav>
                    <p className="hello-message">Hello, user</p>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;