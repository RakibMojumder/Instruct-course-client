import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import errorImg from '../../../assets/img/error-img.jpg'

const ErrorPage = () => {
    const navigete = useNavigate();

    const handleNavigate = () => {
        navigete('/')
    }
    return (
        <div className='bg-white h-screen'>
            <img className='h-[350px] mx-auto' src={errorImg} alt="" />
            <p className='text-7xl text-slate-700 text-center font-bold'>Opsss!</p>
            <h1 className='text-2xl text-center font-bold mt-8 text-slate-700'>This route is not found</h1>
            <div className='text-center mt-4'>
                <button onClick={handleNavigate} className='py-2 px-8 font-semibold rounded-md bg-[#7C53F5] text-white'>Go Back To Home</button>
            </div>
        </div>
    );
};

export default ErrorPage;