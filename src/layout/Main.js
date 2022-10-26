import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/shared/Header/Header';
import LeftSideNav from '../pages/shared/LeftSideNav/LeftSideNav';

const Main = () => {
    return (
        <div className="lg:w-[1200px] mx-auto">
            {/* <Header />
            <div className="container grid grid-cols-12 gap-5">
                <div className="left-side-nav col-span-3">
                    <LeftSideNav />
                </div>
                <div className="outlet-section col-span-9">
                    <Outlet />
                </div>
            </div> */}

            <Header />
            <Outlet />
        </div>
    );
};

export default Main;