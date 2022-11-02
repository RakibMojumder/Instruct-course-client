import React from 'react';
import Lottie from "lottie-react";
import faqAnimation from '../../assets/lottie-animation/104452-tech-support (1).json';
import AnimatedText from 'react-animated-text-content';

const FAQ = () => {
    return (
        <>
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
                className="animated-paragraph text-5xl mt-20 font-bold text-center"
                includeWhiteSpaces
                threshold={0.1}
                rootMargin="20%"
            >
                Frequently Asked Question
            </AnimatedText>

            <div className='min-h-screen grid grid-cols-12 items-center md:gap-8'>
                <div className='col-span-12 md:col-span-6 mb-[50px]'>
                    <Lottie animationData={faqAnimation} loop={true} />
                </div>

                <div className='col-span-12 md:col-span-6' data-aos="fade-down" data-aos-duration="1000">
                    <div tabIndex={0} className="collapse collapse-plus border border-slate-600">
                        <div className="collapse-title text-slate-800 bg-purple-100 text-lg font-medium">
                            Is your content is free?
                        </div>
                        <div className="collapse-content bg-slate-600">
                            <p className="mt-2">
                                No, our content is not free. If your are want to learn from us you have to pay.
                            </p>
                        </div>
                    </div>

                    <div tabIndex={0} className="collapse collapse-plus border border-slate-600">
                        <div className="collapse-title text-slate-800 bg-purple-100 text-lg font-medium">
                            Is your content is free?
                        </div>
                        <div className="collapse-content bg-slate-600">
                            <p className="mt-2">
                                No, our content is not free. If your are want to learn from us you have to pay.
                            </p>
                        </div>
                    </div>

                    <div tabIndex={0} className="collapse collapse-plus border border-slate-600">
                        <div className="collapse-title text-slate-800 bg-purple-100 text-lg font-medium">
                            Is there web development or any other technology course available?
                        </div>
                        <div className="collapse-content bg-slate-600">
                            <p className="mt-2">
                                No, We don't have any technology courses right now. But we have a plan to bring it soon.
                            </p>
                        </div>
                    </div>

                    <div tabIndex={0} className="collapse collapse-plus border border-slate-600">
                        <div className="collapse-title text-slate-800 bg-purple-100 text-lg font-medium">
                            Is there web development or any other technology course available?
                        </div>
                        <div className="collapse-content bg-slate-600">
                            <p className="mt-2">
                                No, We don't have any technology courses right now. But we have a plan to bring it soon.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default FAQ;