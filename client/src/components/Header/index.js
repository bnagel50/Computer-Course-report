import React from 'react';
import { Link } from 'react-router-dom';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

import Auth from '../../utils/auth'

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-info text-dark mb-4 py-3 display-flex align-center ">
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
        <Link className="text-dark text-start  " to="/">
          <h1 className="m-0 " style={{ fontSize: '2rem' }}>
            NO BS BC
          </h1>
        </Link>
        {/* <p className="m-0" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
          Browse Schools
        </p> */}
        <div className='align-center text-end '>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-primary m-2" to="/me">
                View My Profile
              </Link>
              <button className="btn btn-lg outline-dark m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg outline-dark m-2 " to="/courses">
                  Browse Courses
              </Link>

              <Link className="btn btn-lg outline-dark m-2" to="/write-review">
                  Write Reviews
              </Link>

              <Link className="btn btn-lg outline-dark m-2" to="/login">
                Login
              </Link>

              <Link className="btn btn-lg outline-dark m-2" to="/signup">
                Signup
              </Link>

              

              {/* <Form className="d-flex">
              <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
            </Form> */}
            </>
          )}
        </div>
      </div>
    </header>
  );
};


export default Header;