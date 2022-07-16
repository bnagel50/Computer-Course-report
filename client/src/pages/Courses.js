import React from 'react';
import { useQuery } from '@apollo/client';
// var json = require('../../../server/seeders/courseList.json')

// import courses from './../../seeders/courseList.json'

// import  from '../components/ProfileList';

import { QUERY_COURSES } from '../utils/queries';

const Courses = () => {
  const { loading, data } = useQuery(QUERY_COURSES);
  const profiles = data?.profiles || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {/* {loading ? (
            <div>Loading...</div>
          ) : (
            (<div >{JSON.stringify(courses)}</div>
        )
          )} */}
        </div>
      </div>
    </main>
  );
};

export default Courses;
