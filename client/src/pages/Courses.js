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
            <h1 className='about'>Choosing a Bootcamp</h1>
            <p>With the vast assortment of bootcamps available today, it is easy to be overwhelmed with choices. We aim to make it easy for you with real user reviews and information that will give you what you need to find the perfect course to help you reach your goals!</p>
            <h2 className='cost'>Cost</h2>
            <p>While these courses are a large investment of your money, it is important to consider the benefits available to graduates of many of these programs. Some only accept tuition payments after you accept a job, and many will work with you in-depth to ensure that you land the job you deserve to get into the blossoming tech field. It is understandable to be concerned about the price tag, but remember this is only a fraction of what a degree would cost while still providing a path to career success.</p>
            <h2 className='cost'>Licensing</h2>
            <p>No matter which course you attend, it should be licensed by official regulatory agencies to ensure that it is an accredited bootcamp. Additionally, sources such as our website can help you verify that the course content and career services are what you should be receiving, especially considering the investment you will be making. Always ask questions before committing to a bootcamp.</p>
          </div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            
            <div className="main-stuff">
              {data.courses.map(course => (<div key={course._id} className="course-item card">
                <Link to={course._id} className='course-name' >{course.school}</Link>
                <div className='col'>
                <p className='course-curriculum'><strong>Curriculum:</strong> {course.curriculum.join(', ')}</p>
                <p className='course-cost'><strong>Cost:</strong> ${course.cost}</p>
                <p className='course-length'><strong>Length:</strong> {course.length}-weeks</p>
                <p className='course-location'><strong>Location:</strong> {course.location}</p>
                {/* <p className='course-rating'>Rating: {course.avgRating}</p> */}
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
