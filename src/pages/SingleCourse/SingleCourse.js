import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Pdf from 'react-to-pdf';



const ref = React.createRef();

const SingleCourse = ({ course }) => {
    const { course_id, author, details, title, img, price, rating } = course;
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/courselayout/coursedetails/${course_id}`)
    }
    const options = {
        orientation: 'landscape'
    }

    return (
        <div ref={ref} className='grid grid-cols-1 lg:grid-cols-12 lg:gap-7 lg:h-[260px] mb-7 rounded-md border border-slate-500'>
            <div className="course-img col-span-1 lg:col-span-4">
                <img className='h-[258px] w-full' src={img} alt="" />
            </div>
            <div className="course-details pb-6 lg:pb-0 col-span-1 lg:col-span-8 lg:pt-3 pr-5 pl-3 lg:pl-0">
                <div className='md:flex justify-between md:mt-2 lg:mt-0'>
                    <h1 className='text-2xl mt-2 lg:mt-0 mb-2 font-semibold'>{title}</h1>
                    <Pdf x={30} y={50} targetRef={ref} filename={`${title}.pdf`} options={options}>
                        {({ toPdf }) => <button className='text-sm border border-slate-500 px-5 rounded-full' onClick={toPdf}>Download Pdf</button>}
                    </Pdf>
                </div>
                <div className='flex items-center justify-between mb-2'>
                    <p className='my-2'>Author: {author}</p>
                    <p>Ratings: {rating}</p>
                    <p className='text-xl'>Price: <span className='text-[#7c53f5] font-bold text-2xl'>${price}</span></p>
                </div>
                <p className='md:mb-4'>{details.length > 250 ? details.slice(0, 250) + '.....' : details}</p>

                <div className='text-right'><button onClick={handleNavigate} className='bg-[#7c53f5] text-white mt-2 lg:mt-0 py-1 px-5 rounded-full'>Enroll Now <FaArrowRight className='inline-block ml-2' /> </button></div>
            </div>
        </div>
    );
};

export default SingleCourse;