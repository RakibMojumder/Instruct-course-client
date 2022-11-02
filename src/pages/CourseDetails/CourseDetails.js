import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Pdf from 'react-to-pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const ref = React.createRef();

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const navigate = useNavigate();
    const { author, details, title, img, price, rating } = courseDetails;

    const handleNavigate = () => {
        navigate(-1);
    }

    const options = {
        orientation: 'landscape'
    }

    return (
        <div ref={ref} className='grid grid-cols-12'>
            <div className='col-span-1'></div>
            <div className='col-span-10'>
                <h1 className='text-3xl my-5'>{title}</h1>
                <div className="course-img h-[500px]">
                    <img className='h-full w-full' src={img} alt="" />
                </div>

                <div className="course-details">
                    <div className='flex justify-between items-center my-7'>
                        <h4>Author: <span className='font-bold'>{author}</span></h4>
                        <p>Ratings: {rating}</p>
                        <p className='text-right'>
                            <Pdf x={30} y={50} targetRef={ref} filename={`${title}.pdf`} options={options}>
                                {({ toPdf }) => <button className='text-sm border border-slate-500 py-1 px-6 rounded-full' onClick={toPdf}><FontAwesomeIcon className='inline-block mr-2' icon={faDownload} /> Download Pdf</button>}
                            </Pdf>
                        </p>
                    </div>

                    <p>{details}</p>
                    <div className='text-right mt-3'>
                        <button onClick={handleNavigate} className='px-5 py-1 rounded-full bg-[#0EA5E9] text-white'><FaArrowLeft className='inline-block mr-2' />Back</button>
                    </div>
                </div>
            </div>
            <div className='col-span-1'></div>
        </div>
    );
};

export default CourseDetails; 