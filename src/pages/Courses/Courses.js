import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Course from '../Course/Course';
import LeftSideNav from '../shared/LeftSideNav/LeftSideNav';

const Courses = () => {
    const [courseData, setCourseData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/categories`)
            .then(res => res.json())
            .then(data => setCourseData(data))
    }, [])


    return (
        <div className="courses grid grid-cols-3 gap-10">
            {courseData.map(course => <Course key={course.id} course={course}></Course>)}
        </div>

    );
};

export default Courses;