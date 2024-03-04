import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { useEffect, useState } from 'react';

import './Header.css'

import { useAuthContext } from '../../contexts/authContext';

const Header = () => {

    let { user } = useAuthContext();

    let [navbar, setNavbar] = useState('');

    const userNav = (
        <>
            <Nav.Link as={Link} to="/my-phones">My phones</Nav.Link>
            <Nav.Link as={Link} to="/create">Create ad</Nav.Link>
            <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
        </>
    );

    const guestNav = (
        <>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="register">Register</Nav.Link>
        </>
    );

    const desktopNavbar = (


        <Navbar.Collapse id="basic-navbar-nav" >

            <Nav className="header-buttons">
                <Nav.Link as={Link} to="/all-phones">All phones</Nav.Link>
                {
                    user.email
                        ? userNav
                        : guestNav
                }

                {/* <div className='search-bar'>
                            
                            <button id='search-button'><img src='../../../magnifying-glass-solid.svg'/>Search</button>
                            <input id='search-text' />
                        </div> */}
            </Nav>

            {
                user.email
                    ? <p className="hello-message">Hello, {user.name === undefined ? user.email : user.name}</p>
                    : null
            }
        </Navbar.Collapse>

    );

    const mobileNavbar = (
        <>

            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Menu
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Nav className="header-buttons">
                        <Nav.Link as={Link} to="/all-phones">All phones</Nav.Link>
                        {
                            user.email
                                ? userNav
                                : guestNav
                        }
                    </Nav>
                </Dropdown.Menu>
            </Dropdown>
        </>
    );

    const maxWidth = 602;
    let windowWidth = window.innerWidth;

    let neededNavbar = windowWidth > maxWidth ? desktopNavbar : mobileNavbar;


    useEffect(() => {
        return window.addEventListener('resize', () => {
            windowWidth = window.innerWidth;
            return setNavbar(windowWidth > maxWidth ? desktopNavbar : mobileNavbar);
        });
    }, [])



    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/all-phones" className="logo">Sell your phone</Navbar.Brand>


                {navbar ? navbar : neededNavbar}

            </Container>
        </Navbar>
    )


}

export default Header;