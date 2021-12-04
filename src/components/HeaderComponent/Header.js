import { Navbar, Nav, Container } from 'react-bootstrap';


import './Header.css'

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home" className="site-logo">Sell your phone</Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">All phones</Nav.Link>
                        <Nav.Link href="#link">My phones</Nav.Link>
                        <Nav.Link href="#link">How it works</Nav.Link>
                        <Nav.Link href="#link">Login</Nav.Link>
                        <Nav.Link href="#link">Register</Nav.Link>
                        <Nav.Link href="#link">Logout</Nav.Link>
                    </Nav>
                    <p className="hello-message">Hello, user</p>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;