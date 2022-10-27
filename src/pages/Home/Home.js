import React from 'react';
import leftImg from '../../assets/img/home-left-side-img.png';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <section className='h-screen grid grid-cols-1 lg:grid-cols-12 gap-6 items-center'>
                <div className="left-img lg:col-span-6">
                    <img className='h-[450px] w-full' src={leftImg} alt="" />
                </div>
                <div className="right-content lg:col-span-6 mt-6 lg:mt-0 text-center lg:text-left">
                    <h1 className='text-3xl lg:text-6xl uppercase font-extrabold'>Welcome To <span className='text-[#7c53f5]'>IntructCourse</span></h1>
                    <p className='mt-6 mb-10 text-gray-400 text-lg'>This is the best platform to learn your academic studies.there are best teacher and the best systematic way to learn anything. It will enhance your knowledge.</p>
                    <Link to='/courselayout' className='px-8 py-3 font-semibold uppercase rounded-lg bg-[#7c53f5] text-white'>Go To Course <FaArrowRight className='inline-block ml-2' /></Link>
                </div>
            </section>
        </div>
    );
};

export default Home;