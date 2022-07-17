import React from 'react';
import { useQuery } from '@apollo/client';
// var json = require('../../../server/seeders/courseList.json')

// import courses from './../../seeders/courseList.json'

// import  from '../components/ProfileList';

import { QUERY_COURSES } from '../utils/queries';
import './courses.css'

const Courses = () => {
  const { loading, data } = useQuery(QUERY_COURSES);

  console.log({ loading, data })

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
        <div>
              <h1>hello</h1>
        </div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            
            <div className="">
              {data.courses.map(course => (<div className="course-item card">
                <p>Course {course.school}</p>
                <p>Location: {course.location}</p>
                <p>curriculum: {course.curriculum.join(', ')}</p>
                <p>cost: ${course.cost}</p>
                <p>length: {course.length}-weeks</p>
              </div>))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Courses;
