import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSideNav from '../pages/shared/LeftSideNav/LeftSideNav';

const Courselayout = () => {
    return (
        <div className="container grid grid-cols-1 md:grid-cols-12 md:mx-auto lg:mx-0 md:gap-10 my-14">
            <div className="left-side-nav md:col-span-5 lg:col-span-3">
                <LeftSideNav />
            </div>
            <div className="course-content md:col-span-7 lg:col-span-9">
                <Outlet />
            </div>
        </div>
    );
};

export default Courselayout;