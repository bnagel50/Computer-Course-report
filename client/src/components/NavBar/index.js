import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import AutoComplete from './AutoComplete';
import Auth from '../../utils/auth'

const NavigationBar = () => {
  return (
    <div className="flex-column justify-flex-start min-100-vh">
      <Navbar fixed='top' bg="dark" variant="dark navbar-div" expand="lg">
        <Navbar.Brand href="/" className='py-3 p-5'>NO BS BC</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 text-white "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Nav.Link href="/courses" className='text-white'>Browse Courses</Nav.Link>
          {Auth.loggedIn() ? (
             <Nav.Link href="/write-review" className='text-white'>Write Reviews</Nav.Link>
          ) : (
            <Nav.Link href="/login" className='text-white'>Write Reviews</Nav.Link>
          )}
         
          <AutoComplete />
          {Auth.loggedIn() ? (
            <>
              <Nav.Link onClick={Auth.logout} className="text-white">
                Logout
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link href="/login" className="text-white">
                Login
              </Nav.Link>
              <Nav.Link href="/signup" className="text-white">
                Signup
              </Nav.Link>
            </>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
