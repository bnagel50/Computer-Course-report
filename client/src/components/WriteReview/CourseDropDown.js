import React from 'react'
import { useQuery } from '@apollo/client';
import { QUERY_COURSES } from '../../utils/queries';

const CourseDropDown = ({ onChange, courseId }) => {
    const { data } = useQuery(QUERY_COURSES);

    const { courses = [] } = data || {}

    return <select name="courseId" value={courseId || 0} onChange={onChange}>
        <option value={0}>Which Course did you complete?</option>
        {courses.map(course => <option key={course._id} value={course._id}>{course.school}</option>)}
    </select>

}

export default CourseDropDown