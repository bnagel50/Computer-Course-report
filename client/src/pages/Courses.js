import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
// var json = require('../../../server/seeders/courseList.json')

// import courses from './../../seeders/courseList.json'

// import  from '../components/ProfileList';

import { QUERY_COURSES } from '../utils/queries';
import '../pages/courses.css'

const Courses = () => {
  const { loading, data } = useQuery(QUERY_COURSES);

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
              {data.courses.map(course => (<div key={course._id} className="course-item card">
                <Link to={course._id} className='course-name' >{course.school}</Link>
                <div className='col'>
                <p className='course-curriculum'>Curriculum: {course.curriculum.join(', ')}</p>
                <p className='course-cost'>Cost: ${course.cost}</p>
                <p className='course-length'>Length: {course.length}-weeks</p>
                <p className='course-location'>Location: {course.location}</p>
                
                <p className='course-rating'>Rating: {course.rating}</p>
                </div>
              </div>))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Courses;
