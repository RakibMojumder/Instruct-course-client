import React from 'react';
import './Course.css';

const Course = ({ course }) => {

    console.log(course)


    return (
        <div>
            <div className="img-div h-full w-full relative">
                <img className='w-full h-full rounded-lg' src={course.img} alt="" />
                <div className="hover-div hidden h-full w-full absolute top-0 left-0 bg-[rgba(0,0,0,.2)]">
                    <h1 className='text-3xl text-center mt-28 font-bold text-[#A78BFA] uppercase'>{course.title}</h1>
                </div>
            </div>
        </div>
    );
};

export default Course;