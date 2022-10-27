import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Course.css';

const Course = ({ course }) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/courselayout/${course.id}`)
    }

    return (
        <div onClick={handleNavigate} className="img-div h-full w-full relative">
            <img className='w-full h-full rounded-lg' src={course.img} alt="" />
            <div className="hover-div hidden h-full w-full absolute top-0 left-0 bg-[rgba(0,0,0,.3)]">
                <h1 className='text-3xl text-center mt-28 font-bold text-white uppercase'>{course?.title}</h1>
                <p>{course?.total_Lecture}</p>
            </div>
        </div>
    );
};

export default Course;