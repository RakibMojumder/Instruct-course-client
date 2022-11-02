import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {
    const [courseData, setCourseData] = useState([]);

    useEffect(() => {
        fetch(`https://instruct-course-server-side.vercel.app/categories`)
            .then(res => res.json())
            .then(data => setCourseData(data))
    }, [])


    return (
        <div className="courses grid grid-cols-1 lg:grid-cols-3 px-3 md:px-0 gap-8">
            {courseData.map(course => <Course key={course.id} course={course}></Course>)}
        </div>

    );
};

export default Courses;