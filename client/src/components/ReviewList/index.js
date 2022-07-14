import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

// Add or chaning any of these const to match with what we specifically need
const ReviewList= () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [login, {error}] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const response = await login(userFormData);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { token, user } = await response.json();
      console.log(user);
      Auth.login(token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };
//Need to know if this is the right way to fetch and display said data
  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your login credentials!
        </Alert>
        <Form.Group>
          <Form.Label htmlFor='cost'>Cost of Course</Form.Label>
          <Form.Control
            type='text'
            placeholder=''
            name='cost'
            onChange={handleInputChange}
            value={userFormData.cost}
            required
          />
          <Form.Control.Feedback type='invalid'>Entering Cost is Required</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='length'>Length of Course</Form.Label>
          <Form.Control
            type='string'
            placeholder=''
            name='length'
            onChange={handleInputChange}
            value={userFormData.length}
            required
          />
          <Form.Control.Feedback type='invalid'>The Length of the Course is Required</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='location'>Location of Course</Form.Label>
          <Form.Control
            type='string'
            placeholder=''
            name='location'
            onChange={handleInputChange}
            value={userFormData.location}
            required
          />
          <Form.Control.Feedback type='invalid'>Location is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='numberOfReviews'>Number of Reviews</Form.Label>
          <Form.Control
            type='number'
            placeholder=''
            name='numberOfReviews'
            onChange={handleInputChange}
            value={userFormData.numberOfReviews}
            />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='curriculum'>Curriculum rating</Form.Label>
          <Form.Control
            type='rating'
            placeholder=''
            name='rating'
            onChange={handleInputChange}
            value={userFormData.rating}
          />
        </Form.Group>


{/* this button needs to change to be a submit rating type thing */}
        <Button
          disabled={!(userFormData.email && userFormData.password)}
          type='submit'
          variant='success'>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default ReviewList;