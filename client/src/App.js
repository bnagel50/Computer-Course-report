import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Home from './pages/Home';
import User from './pages/Profile';
import Signup from './pages/Signup';
import Login from './pages/Login';
// import Header from './components/Header';

// import Container from 'react-bootstrap/Container';
// import { LinkContainer }from "react-router-bootstrap";

// import Button from 'react-bootstrap/Button';
// import { Link } from 'react-router-dom';
// import Footer from './components/Footer';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
// import PostCourseList from './components/CourseList';
import Courses from './pages/Courses';
import './App.css';
// import { QUERY_COURSES } from './utils/queries';
// import './courses.css'
import './components/NavBar/index'
import NavigationBar from './components/NavBar'
import Course from './pages/CourseInfo';



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
      <NavigationBar />
        

        
        <Routes>
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/signup"
            element={<Signup />}
          />

          <Route
            path="/me"
            element={<User />}
          />
          <Route
            path="/users/:userId"
            element={<User />}
          />
          <Route
            path={`/courses/:courseId`}
            element={<Course />}
          />
          <Route
            path="/courses"
            element={<Courses />}
          />
           <Route
            path="/"
            element={<LandingPage />} />
            </Routes>
            
         
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;

