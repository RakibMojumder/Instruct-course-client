import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/shared/Header/Header';
import LeftSideNav from '../pages/shared/LeftSideNav/LeftSideNav';

const Courselayout = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="left-side-nav">
                    <LeftSideNav />
                </div>
                <div className="course-content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Courselayout;