import React from 'react';
import { useQuery } from '@apollo/client';
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
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
        <div>
              <h1>hello</h1>
        </div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            
            <div className="main-stuff">
              {data.courses.map(course => (<div className="course-item card">
                <p className='course-name'>Course: {course.school}</p>
                <p className='course-curriculum'>curriculum: {course.curriculum.join(', ')}</p>
                <p className='course-cost'>cost: ${course.cost}</p>
                <p className='course-length'>length: {course.length}-weeks</p>
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

export default Courses;
