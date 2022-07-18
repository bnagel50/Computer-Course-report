import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_COURSE } from '../utils/queries';
import '../pages/courses.css';

const Course = () => {
  const { loading, data } = useQuery(QUERY_COURSE);

  console.log({ loading, data })

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
              {data.courses.map(course => (<div className="course-item card">
                <p className='course-curriculum'>Curriculum: {course.curriculum.join(', ')}</p>
                <p className='course-cost'>Cost: ${course.cost}</p>
                <p className='course-length'>Length: {course.length}-weeks</p>
                <p className='course-location'>Location: {course.location}</p>
                
                <p className='course-rating'>Rating: {course.rating}</p>
              </div>))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Course;