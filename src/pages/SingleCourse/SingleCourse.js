import React from 'react';
import { Link } from 'react-router-dom';

const SingleCourse = ({ course }) => {
    console.log(course)
    const { author, details, title, img, price, rating } = course;
    return (
        <div className='grid grid-cols-12 gap-7 h-[225px] mb-7 rounded-md border border-slate-500'>
            <div className="course-img col-span-4">
                <img className='h-[225px] w-full' src={img} alt="" />
            </div>
            <div className="course-details col-span-8 py-3 pr-5">
                <h1 className='text-2xl text-white mb-2 font-semibold'>{title}</h1>
                <div className='flex items-center justify-between mb-2'>
                    <p className='my-2'>Author: {author}</p>
                    <p>Ratings: {rating}</p>
                    <p className='text-xl'>Price: <span className='text-[#A78BFA] font-bold text-2xl'>${price}</span></p>
                </div>
                {
                    details.length > 280 ?
                        <p className='text-white'>{details.slice(0, 280)} <Link className='text-[#A78BFA]'>... see more</Link></p>
                        : <p className='text-white'>{details}</p>
                }
                {/* <p className='text-justify mt-3'>{details.length > 250 ? details.slice(0, 250) + '...see more' : details}</p> */}
            </div>
        </div>
    );
};

export default SingleCourse;