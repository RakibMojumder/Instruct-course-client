import React from 'react';
import leftImg from '../../assets/img/home-left-side-img.png';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import homeLottie from '../../assets/lottie-animation/home.json';
import AnimatedText from 'react-animated-text-content';

const Home = () => {
    return (
        <div>
            <section className='h-screen grid grid-cols-1 lg:grid-cols-12 gap-6 items-center'>
                <div className="left-img lg:col-span-6" data-aos="fade-right" data-aos-duration="1500">
                    <Lottie animationData={homeLottie} loop={true} />
                </div>
                <div className="right-content lg:col-span-6 mt-6 lg:mt-0 text-center lg:text-left">

                    <AnimatedText
                        type="words"
                        animation={{
                            x: '200px',
                            y: '-20px',
                            scale: 1.1,
                            ease: 'ease-in-out',
                        }}
                        animationType="float"
                        interval={0.06}
                        duration={1}
                        tag="h1"
                        className="text-3xl lg:text-6xl uppercase font-extrabold"
                        includeWhiteSpaces
                        threshold={0.1}
                        rootMargin="20%"
                    >
                        Welcome To
                    </AnimatedText>

                    <AnimatedText
                        type="chars"
                        animation={{
                            x: '200px',
                            y: '-20px',
                            scale: 1.1,
                            ease: 'ease-in-out',
                        }}
                        animationType="float"
                        interval={0.06}
                        duration={1}
                        tag="h1"
                        className="text-3xl lg:text-6xl uppercase font-extrabold text-[#0EA5E9]"
                        includeWhiteSpaces
                        threshold={0.1}
                        rootMargin="20%"
                    >
                        InstructCourse
                    </AnimatedText>

                    <p className='mt-6 mb-10 text-gray-400 text-lg'>This is the best platform to learn your academic studies.there are best teacher and the best systematic way to learn anything. It will enhance your knowledge.</p>
                    <Link to='/courselayout' className='px-8 py-3 font-semibold uppercase rounded-lg bg-[#0EA5E9] text-white'>Go To Course <FaArrowRight className='inline-block ml-2' /></Link>
                </div>
            </section>
        </div>
    );
};

export default Home;