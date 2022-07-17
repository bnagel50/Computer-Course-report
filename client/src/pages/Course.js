import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_COURSE } from '../utils/queries';

const Course = () => {
    const { loading, data } = useQuery(QUERY_COURSE);

    console.log({ loading, data })

    return (
        <main>
        <div className="flex-row justify-center">
          <div className="col-12 col-md-10 my-3">
          <div>
                <h1>Check out this course!</h1>
          </div>
            {loading ? (
              <div>Loading...</div>
            ) : (
              
              <div className="">
                {data.course.map(course => (<div className="course-item card">
                  <p>Course {course.school}</p>
                  <p>Location: {course.location}</p>
                  <p>Curriculum: {course.curriculum.join(', ')}</p>
                  <p>Cost: ${course.cost}</p>
                  <p>Length: {course.length}-weeks</p>
                </div>))}
              </div>
            )}
          </div>
        </div>
      </main>
    );
};

export default Course;