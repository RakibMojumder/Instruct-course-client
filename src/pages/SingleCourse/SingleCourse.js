import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SingleCourse = ({ course }) => {
    const { course_id, author, details, title, img, price, rating } = course;
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/courselayout/coursedetails/${course_id}`)
    }


    return (
        <div data-aos="fade-up" className='grid grid-cols-1 lg:grid-cols-12 lg:gap-7 lg:h-[250px] mb-7 rounded-md border border-slate-600'>
            <div className="course-img col-span-1 lg:col-span-4">
                <img className='h-[248px] w-full rounded-tl-md rounded-bl-md' src={img} alt="" />
            </div>
            <div className="course-details pb-6 lg:pb-0 col-span-1 lg:col-span-8 lg:pt-3 pr-2 md:pr-5 pl-3 lg:pl-0">
                <h1 className='text-2xl mt-2 lg:mt-0 mb-2 font-semibold'>{title}</h1>
                <div className='hidden md:flex items-center justify-between mb-2'>
                    <p className='my-2'>Author: {author}</p>
                    <p>Ratings: {rating}</p>
                    <p className='text-xl text-center'>Price: <span className='text-[#0EA5E9] font-bold lg:text-2xl'>${price}</span></p>
                </div>
                <div className='flex md:hidden justify-between items-center my-3'>
                    <p className='text-xl'>Price: <span className='text-[#0EA5E9] font-bold'>${price}</span></p>
                    <p>Ratings: {rating}</p>
                </div>
                <p className='md:mb-4 text-justify'>{details.length > 200 ? details.slice(0, 200) + '.....' : details}</p>

                <div className='text-right'><button onClick={handleNavigate} className='bg-[#0EA5E9] text-white mt-2 lg:mt-0 py-1 px-5 rounded-full'>Enroll Now <FaArrowRight className='inline-block ml-2' /> </button></div>
            </div>
        </div>
    );
};

export default SingleCourse; 