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
        <div className='grid grid-cols-12 gap-10 py-14'>
            <div className="left-side-nav col-span-3">
                <LeftSideNav />
            </div>
            <div className="courses col-span-9 grid grid-cols-3 gap-10">
                {courseData.map(course => <Course key={course.id} course={course}></Course>)}
            </div>
        </div>
    );
};

export default Courses;