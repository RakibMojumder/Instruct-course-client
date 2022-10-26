import React from 'react';
import leftImg from '../../assets/img/home-left-side-img.png';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {


    return (
        <div>
            <section className='h-screen grid grid-cols-12 gap-6 items-center'>
                <div className="left-img col-span-6">
                    <img className='h-[450px] w-full' src={leftImg} alt="" />
                </div>
                <div className="right-content col-span-6">
                    <h1 className='text-6xl uppercase font-extrabold'>Welcome To <span className='text-[#A78BFA]'>IntructCourse</span></h1>
                    <p className='mt-6 mb-10 text-gray-400 text-lg'>This is the best platform to learn your academic studies.there are best teacher and the best systematic way to learn anything. It will enhance your knowledge.</p>
                    <Link to='/courses' className='px-8 py-3 font-semibold uppercase rounded-lg bg-[#A78BFA] text-white'>Go To Course <FaArrowRight className='inline-block ml-2' /></Link>
                </div>
            </section>
        </div>
    );
};

export default Home;