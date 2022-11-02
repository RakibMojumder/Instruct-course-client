
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';
import Header from '../pages/shared/Header/Header';

const Main = () => {
    return (
        <>
            <div className="App w-[90%] mx-auto lg:w-[1200px]">
                <Header />
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default Main;