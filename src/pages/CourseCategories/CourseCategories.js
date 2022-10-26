import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCourse from '../SingleCourse/SingleCourse';
const CourseCategories = () => {
    const courseCategories = useLoaderData();
    return (
        <div>
            {courseCategories.map((course, idx) => <SingleCourse key={idx} course={course}></SingleCourse>)}
        </div>
    );
};

export default CourseCategories;