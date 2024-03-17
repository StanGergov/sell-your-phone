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

    // function hideShowToggle(e) {


    //     let dropDownMenuParentElement = e.currentTarget.parentElement.parentElement;
    //     dropDownMenuParentElement.className = 'dropdown show' ? 'dropdown' : 'dropdown show';
    //     let dropDownBasicElement = dropDownMenuParentElement.querySelector('#dropdown-basic'); 
    //     dropDownBasicElement['aria-expanded'] = 'false' ? '' : 'false';

    //     let dropDownMenuElement = dropDownMenuParentElement.querySelector('.dropdown-menu');

    //     console.log(dropDownMenuParentElement);

    //     if (dropDownMenuElement) {
    //         dropDownMenuElement.className = 'dropdown-menu show' ? 'dropdown-menu' : 'dropdown-menu show';
    //     }
    // }

    const mobileNavbar = (
        <>

            <Dropdown >
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Menu
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <div className="header-buttons">
                        <Dropdown.Item as={Link} to="/all-phones">All phones</Dropdown.Item>
                        {
                            user.email
                                ? <>
                                    <Dropdown.Item as={Link} to="/my-phones">My phones</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/create">Create ad</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/logout">Logout</Dropdown.Item>
                                </>
                                : <>
                                    <Dropdown.Item as={Link} to="/login">Login</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="register">Register</Dropdown.Item>
                                </>
                        }
                    </div>
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