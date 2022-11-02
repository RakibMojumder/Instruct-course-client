import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const Course = ({ course }) => {
    const { img, title, total_Lecture } = course;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/courselayout/${course.id}`)
    }


    return (
        <div className='border border-slate-600 rounded-lg' data-aos="fade-up" data-aos-duration="1000">
            <div className="img-div h-[140px] lg:h-[180px]">
                <img className='rounded-t-lg h-full w-full' src={img} alt="" />
            </div>
            <div className="course-description px-2 py-3">
                <h1 className='text-2xl font-bold lg:mb-2'>{title}</h1>
                <div className='flex justify-between items-center'>
                    <p className='mb-2 lg:mb-0'>Total Lecture: <span className='text-xl font-bold text-[#0EA5E9]'>{total_Lecture}</span></p>
                    <button onClick={handleNavigate} className='px-6 py-1 lg:mt-0 rounded-full bg-[#0EA5E9]'>Go <FontAwesomeIcon className='ml-1' icon={faArrowRightLong} /></button>
                </div>
            </div>
        </div>
    );
};

export default Course;