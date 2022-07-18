import React from 'react';
import { useParams } from 'react-router'
import { useQuery } from '@apollo/client';
import { QUERY_COURSE } from '../utils/queries';
import '../pages/courses.css';

const Course = () => {
  const { courseId } = useParams()
  const variables = { courseId }
  const { loading, data = {} } = useQuery(QUERY_COURSE, { variables });

  const { course = {} } = data;

  console.log({ course })


  return (
    <main className='main-courses'>
      <div className="flex-row justify-center first-div">
        <div className="col-12 col-md-10 my-3 second-div">
          <div>
            <h1>hello</h1>
          </div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div className="main-stuff">
              <div className="course-item card">
              <p className='course-name'>Name: {course.school}</p>
                <p className='course-curriculum'>Curriculum: {course.curriculum.join(', ')}</p>
                <p className='course-cost'>Cost: ${course.cost}</p>
                <p className='course-length'>Length: {course.length}-weeks</p>
                <p className='course-location'>Location: {course.location}</p>
                
                <p className='course-rating'>Rating: {course.rating}</p>
              </div>
              <div className="reviews">
                {course.reviews.map(review => (
                <div>
                  <div>{review.user.name}</div>
                  <div key={review._id}>Experience: {review.experience}</div>
                  <div key={review._id}>Instructors: {review.instructors}</div>
                  <div key={review._id}>Curriculum: {review.curriculum}</div>
                  <div key={review._id}>Job Assistance: {review.jobAssistance}</div>
                  <div key={review._id}>Employment: {review.employment}</div>
                  <div key={review._id}>Review: {review.commentBody}</div>
                </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Course;