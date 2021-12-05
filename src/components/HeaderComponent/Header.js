import { Navbar, Nav, Container } from 'react-bootstrap';


import './Header.css'

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/" className="site-logo">Sell your phone</Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/allphones">All phones</Nav.Link>
                        <Nav.Link href="/myphones">My phones</Nav.Link>
                        <Nav.Link href="/create">Create ad</Nav.Link>
                        <Nav.Link href="howitworks">How it works</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="register">Register</Nav.Link>
                        <Nav.Link href="#link">Logout</Nav.Link>
                    </Nav>
                    <p className="hello-message">Hello, user</p>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;