import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const navigate = useNavigate();
    const { author, details, title, img, price, rating } = courseDetails;

    // const handleNavigate = () => {
    //     navigate(-1);
    // }

    return (
        <div className='grid grid-cols-12'>
            <div className='col-span-1'></div>
            <div className='col-span-10'>
                <div className="course-img h-[500px]">
                    <img className='h-full w-full' src={img} alt="" />
                </div>

                <div className="course-details">
                    <h1>{title}</h1>
                    <p>{details}</p>
                </div>
            </div>
            <div className='col-span-1'></div>
        </div>
    );
};

export default CourseDetails;