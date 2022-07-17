import React, { useEffect, useState, useRef } from 'react';

import { useQuery } from '@apollo/client';
import { QUERY_COURSES } from '../../../utils/queries';

import './index.css';

// const testSchools = ['The Ohio State University', 'Ohio University', 'Miami', 'Toledo', 'Cincinasty'];


const AutoComplete = () => {
  const [displaySchoolsList, setDisplaySchoolsList] = useState(false);
  const [schools, setSchools] = useState([]);
  const [currentSchool, setCurrentSchool] = useState('');
  const wrapperRef = useRef(null);

  const { loading, data } = useQuery(QUERY_COURSES);

  useEffect(() => {
    debugger
    if (data) {
      const CourseInfo = data.courses.map(course => course.school);
    setSchools(CourseInfo);
    }
    // debugger

    window.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('mouseover', handleClickOutside);
    
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('mouseover', handleClickOutside);
    };
  });

  const handleClickOutside = event => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplaySchoolsList(false);
    }
  };

  const onSchoolClick = school => {
    setCurrentSchool(school);
    setDisplaySchoolsList(false);
  };

  const onSchoolChange = (e) => {
    e.preventDefault();
    const school = e.target.value;
    setCurrentSchool(school);
  };

  return (
    <div ref={wrapperRef} className='flex-container flex-column pos-rel'>
      <input
        id='auto'
        onClick={() => setDisplaySchoolsList(!displaySchoolsList)}
        placeholder='Type to search'
        value={currentSchool}
        onChange={event => onSchoolChange(event)}
      />
      {displaySchoolsList && (
        <div className='autoContainer'>
          {schools
            .filter((s) => s.toLowerCase().indexOf(currentSchool.toLowerCase()) !== -1)
            .map((value, i) => {
              return (
                <div
                  onClick={() => onSchoolClick(value)}
                  className='option'
                  key={i}
                  tabIndex='0'
                >
                  <span>{value}</span>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default AutoComplete;