import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'

import { useQuery } from '@apollo/client';
import { QUERY_COURSES } from '../../../utils/queries';

import './index.css';

// const testSchools = ['The Ohio State University', 'Ohio University', 'Miami', 'Toledo', 'Cincinasty'];


const AutoComplete = ({ history }) => {
  const [displaySchoolsList, setDisplaySchoolsList] = useState(false);
  const [courses, setCourses] = useState();
  const [currentSchool, setCurrentSchool] = useState('');
  const wrapperRef = useRef(null);
  const navigate = useNavigate();

  const { data } = useQuery(QUERY_COURSES);

  if(data && !courses) {
    setCourses(data.courses);
  }

  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('mouseover', handleClickOutside);
    
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('mouseover', handleClickOutside);
    };
  }, [courses]);

  const handleClickOutside = event => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplaySchoolsList(false);
    }
  };

  const onSchoolClick = courseId => {
    //setCurrentSchool(school);
    setDisplaySchoolsList(false);
    navigate(`/courses/${courseId}`)

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
          {courses
            .filter((course) => course.school.toLowerCase().indexOf(currentSchool.toLowerCase()) !== -1)
            .map((course, i) => {
              return (
                <div
                  onClick={() => onSchoolClick(course._id)}
                  className='option'
                  key={course._id}
                  tabIndex='0'
                >
                  <span>{course.school}</span>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default AutoComplete;