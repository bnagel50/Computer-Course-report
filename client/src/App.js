import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import Home from './pages/Home';
// import Profile from './pages/Profile';
// import Signup from './pages/Signup';
// import Login from './pages/Login';
// import Header from './components/Header';
import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// import { LinkContainer }from "react-router-bootstrap";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import { Link } from 'react-router-dom';
// import Footer from './components/Footer';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Navbar bg="dark" variant="dark">
          {/* <Container fixed="top"> */}
                {/* <LinkContainer to="/"> */}
                
                  <Navbar.Brand href="/" className='py-3 p-5'>NO BS BC</Navbar.Brand>
                {/* </LinkContainer> */}
               
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title="Browse Courses" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/">Full stack</NavDropdown.Item>
              <NavDropdown.Item href="/">
                UX/UI
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/write-review">Write Reviews</Nav.Link>
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>
          <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Signup</Nav.Link>
        </Navbar.Collapse>
              {/* </Container> */}
          </Navbar>
          
        </div>
      </Router>
      <LandingPage/>
      <Footer/>
    </ApolloProvider>
  );
}

export default App;

