import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import AutoComplete from './AutoComplete';

const NavigationBar = () => {
    return (
        <div className="flex-column justify-flex-start min-100-vh">
            <Navbar fixed='top' bg="dark" variant="dark">
                {/* <Container fixed="top"> */}
                {/* <LinkContainer to="/"> */}

                <Navbar.Brand href="/" className='py-3 p-5'>NO BS BC</Navbar.Brand>
                {/* </LinkContainer> */}

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 text-white "
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    {/* <NavDropdown title="Browse Courses" id="navbarScrollingDropdown" className='text-white'>
                        <NavDropdown.Item href="/" >Full stack</NavDropdown.Item>
                        <NavDropdown.Item href="/">
                            UX/UI
                        </NavDropdown.Item>
                    </NavDropdown> */}
                    <Nav.Link href="/courses" className='text-white'>Browse Courses</Nav.Link>
                    <Nav.Link href="/write-review" className='text-white'>Write Reviews</Nav.Link>
                    <AutoComplete />

          <Nav.Link href="/login" className="text-white">
            Login
          </Nav.Link>
          <Nav.Link href="/signup" className="text-white">
            Signup
          </Nav.Link>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </div>
  );
};

export default NavigationBar;
