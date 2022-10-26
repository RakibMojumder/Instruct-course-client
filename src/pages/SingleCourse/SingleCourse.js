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
        <div className='grid grid-cols-12 gap-7 h-[260px] mb-7 rounded-md border border-slate-500'>
            <div className="course-img col-span-4">
                <img className='h-[258px] w-full' src={img} alt="" />
            </div>
            <div className="course-details col-span-8 pt-3 pr-5">
                <h1 className='text-2xl text-white mb-2 font-semibold'>{title}</h1>
                <div className='flex items-center justify-between mb-2'>
                    <p className='my-2'>Author: {author}</p>
                    <p>Ratings: {rating}</p>
                    <p className='text-xl'>Price: <span className='text-[#A78BFA] font-bold text-2xl'>${price}</span></p>
                </div>
                <p>{details.length > 250 ? details.slice(0, 250) + '.....' : details}</p>

                <div className='text-right'><button onClick={handleNavigate} className='bg-[#A78BFA] text-white py-1 px-5 rounded-full'>Enroll Now <FaArrowRight className='inline-block ml-2' /> </button></div>
                {/* {
                    details.length > 280 ?
                        <p className='text-white'>{details.slice(0, 280)} <Link to={`/courselayout/coursedetails/${course_id}`} className='text-[#A78BFA]'>... see more</Link></p>
                        : <p className='text-white'>{details}</p>
                } */}
            </div>
        </div>
    );
};

export default SingleCourse;