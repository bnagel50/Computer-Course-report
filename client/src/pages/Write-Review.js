import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { ADD_REVIEW } from '../utils/mutations';
import Auth from '../utils/auth';
import CourseDropDown from '../components/WriteReview/CourseDropDown';
import './Write-Review.css';

const WriteReview = ({ userId }) => {
    const { data: user } = Auth.getProfile()
    const emptyReview = { courseId: '', experience: '', instructors: '', curriculum: '', jobAssistance: '', employment: '', commentBody: '', userId: user._id }

    const [reviewInput, setReview] = useState(emptyReview);

    console.log(reviewInput)

    const onChange = ev => {
      const { name, value, dataset: { number } } = ev.target
      console.log({ name, value, number})
      setReview({ ...reviewInput, [name]: number? parseInt(value, 10) : value })
    }
    
    const [addReview, {error}] = useMutation(ADD_REVIEW)

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        console.log('submitting', reviewInput)

        try {
            const data = await addReview({
                variables: { reviewInput },
            });

            setReview(emptyReview);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
          <h4 className="header">Write your review below!</h4>
    
          {Auth.loggedIn() ? (
            <form
              className="flex-row justify-center justify-space-between-md align-center"
              onSubmit={handleFormSubmit}
            >
              <div className="col-12 col-lg-9">
                <CourseDropDown onChange={onChange} courseId={reviewInput.courseId} />
              </div>
              <div className="col-12 col-lg-9">
                <input
                  name="experience"
                  placeholder="Experience 1-5"
                  data-number="true"
                  value={reviewInput.experience}
                  className="form-input w-100"
                  onChange={onChange}
                />
              </div>

              <div className="col-12 col-lg-9">
                <input
                  name="instructors"
                  placeholder="Instructors 1-5"
                  data-number="true"
                  value={reviewInput.instructors}
                  className="form-input w-100"
                  onChange={onChange}
                />
              </div>

              <div className="col-12 col-lg-9">
                <input
                  name="curriculum"
                  placeholder="Curriculum 1-5"
                  data-number="true"
                  value={reviewInput.curriculum}
                  className="form-input w-100"
                  onChange={onChange}
                />
              </div>

              <div className="col-12 col-lg-9">
                <input
                  name="jobAssistance"
                  placeholder="Job Assistance 1-5"
                  data-number="true"
                  value={reviewInput.jobAssistance}
                  className="form-input w-100"
                  onChange={onChange}
                />
              </div>

              <div className="col-12 col-lg-9">
                <input
                  name="employment"
                  placeholder="Did you find a job in the coding field?"
                  value={reviewInput.employment}
                  className="form-input w-100"
                  onChange={onChange}
                />
              </div>

              <div className="col-12 col-lg-9">
                <input
                  name="commentBody"
                  placeholder="How was your experience?"
                  value={reviewInput.commentBody}
                  className="form-input w-100"
                  onChange={onChange}
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