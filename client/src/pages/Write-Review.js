import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import ReviewAutoComplete from './Write-Review-Search';
import { Link } from 'react-router-dom';
import { QUERY_COURSES } from '../utils/queries';
import { ADD_REVIEW } from '../utils/mutations';
import Auth from '../utils/auth';
import './Write-Review.css';
import AutoComplete from '../components/NavBar/AutoComplete';

const WriteReview = ({ userId }) => {

    const [reviewInput, setReview] = useState({ courseId: '', experience: '', instructors: '', curriculum: '', jobAssistance: '', employment: '', commentBody: '' });
    
    const [addReview, {error}] = useMutation(ADD_REVIEW)

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const data = await addReview({
                variables: { ...reviewInput },
            });

            setReview('');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
          <h4 class="header">Write your review below!</h4>
    
          {Auth.loggedIn() ? (
            <form
              className="flex-row justify-center justify-space-between-md align-center"
              onSubmit={handleFormSubmit}
            >
                <ReviewAutoComplete />
              <div className="col-12 col-lg-9">
                <input
                  placeholder="Which course did you complete?"
                  value={reviewInput.courseId}
                  className="form-input w-100"
                  onChange={(event) => setReview(event.target.value)}
                />
              </div>
              <div className="col-12 col-lg-9">
                <input
                  placeholder="Experience 1-5"
                  value={reviewInput.experience}
                  className="form-input w-100"
                  onChange={(event) => setReview(event.target.value)}
                />
              </div>

              <div className="col-12 col-lg-9">
                <input
                  placeholder="Instructors 1-5"
                  value={reviewInput.instructors}
                  className="form-input w-100"
                  onChange={(event) => setReview(event.target.value)}
                />
              </div>

              <div className="col-12 col-lg-9">
                <input
                  placeholder="Curriculum 1-5"
                  value={reviewInput.curriculum}
                  className="form-input w-100"
                  onChange={(event) => setReview(event.target.value)}
                />
              </div>

              <div className="col-12 col-lg-9">
                <input
                  placeholder="Job Assistance 1-5"
                  value={reviewInput.jobAssistance}
                  className="form-input w-100"
                  onChange={(event) => setReview(event.target.value)}
                />
              </div>

              <div className="col-12 col-lg-9">
                <input
                  placeholder="Did you find a job in the coding field?"
                  value={reviewInput.employment}
                  className="form-input w-100"
                  onChange={(event) => setReview(event.target.value)}
                />
              </div>

              <div className="col-12 col-lg-9">
                <input
                  placeholder="How was your experience?"
                  value={reviewInput.commentBody}
                  className="form-input w-100"
                  onChange={(event) => setReview(event.target.value)}
                />
              </div>
    
              <div className="col-12 col-lg-3">
                <button className="btn btn-info btn-block py-3" type="submit">
                  Submit Review!
                </button>
              </div>
              {error && (
                <div className="col-12 my-3 bg-danger text-white p-3">
                  {error.message}
                </div>
              )}
            </form>
          ) : (
            <p>
              You need to be logged in to write reviews. Please{' '}
              <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
            </p>
          )}
        </div>
      );
    };
    
    export default WriteReview;