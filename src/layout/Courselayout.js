import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSideNav from '../pages/shared/LeftSideNav/LeftSideNav';

const Courselayout = () => {
    return (
        <div className="container grid grid-cols-12 gap-10">
            <div className="left-side-nav col-span-3">
                <LeftSideNav />
            </div>
            <div className="course-content col-span-9">
                <Outlet />
            </div>
        </div>
    );
};

export default Courselayout;