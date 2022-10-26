import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {

    const allCourse = useLoaderData();

    return (
        <div>
            {allCourse.map(course => <h1>hi from courses</h1>)}
        </div>
    );
};

export default CourseDetails;