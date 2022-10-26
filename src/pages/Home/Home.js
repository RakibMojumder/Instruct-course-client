import React from 'react';
import leftImg from '../../assets/img/3d-render-online-education-survey-test-concept.jpg';

const Home = () => {


    return (
        <div>
            <h1>This is home page</h1>
            <section className='grid grid-cols-12'>
                <div className="left-img col-span-6">
                    <img src={leftImg} alt="" />
                </div>
                <div className="right-content col-span-6">

                </div>
            </section>
        </div>
    );
};

export default Home;