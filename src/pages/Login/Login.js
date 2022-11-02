import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { FaGoogle, FaGithub, FaFacebook } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Lottie from "lottie-react";
import logInAnimation from '../../assets/lottie-animation/72883-login-page.json';


const Login = () => {
    const { logIn, signInWithGoogle, signInWithFacebook, signInWithGithub, passwordReset } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const emailRef = useRef();

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
                toast("successfully log in");
                console.log(user)
            })
            .catch(e => console.error(e))
    }

    const handleFacebookSignIn = () => {
        signInWithFacebook()
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
                toast("successfully log in");
                console.log(user)
            })
            .catch(e => console.error(e))
    }

    const handleGithubSignIn = () => {
        signInWithGithub()
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
                toast("successfully log in");
                console.log(user)
            })
            .catch(e => console.error(e))
    }

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                setError('');
                navigate(from, { replace: true })
                console.log(user);
            })
            .catch(e => setError(e.message))
    }

    const handleResetPassword = () => {
        const email = emailRef.current.value;
        passwordReset(email)
            .then(() => { toast("successfully reset your password"); })
            .then(e => console.error(e))
    }

    return (
        <div className='min-h-screen grid grid-cols-12 items-center gap-6'>
            <div className="login-field order-last md:order-first col-span-12 md:col-span-6 lg:col-span-5 border border-slate-600 rounded-lg p-10">
                {/* <div className="div col-span-10 md:col-span-8 lg:col-span-6 my-14 p-4 md:p-8 lg:p-16 border border-slate-600 rounded-lg"> */}
                <h1 className='text-4xl font-bold text-center text-[#0EA5E9]'>Sign In</h1>
                <p className='text-center mb-12'>Sign in to access your account</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-control mb-4">
                        <input ref={emailRef} className='text-slate-800 rounded-md focus:border-none' type="email" name='email' id='email' placeholder='Your Email' />
                    </div>
                    <div className="form-control mb-1">
                        <input className='text-slate-800 rounded-md focus:border-none' type="password" name='password' id='password' placeholder='Your password' />
                    </div>

                    <button onClick={handleResetPassword} className='mb-6 text-sm hover:text-[#0EA5E9] hover:underline'>Forget Password?</button>

                    {error && <p className='text-red-500 mb-3'>{error}</p>}

                    <button type='submit' className='bg-[#0EA5E9] rounded-md text-white w-full h-10'>Log in</button>
                </form>

                <div className="flex justify-between items-center mt-6">
                    <div className="line w-[20%] md:w-[25%] bg-slate-400 h-[1px]"></div>
                    <div className="text-xs md:text-base">Sign in with social account</div>
                    <div className="line w-[20%] md:w-[25%] bg-slate-400 h-[1px]"></div>
                </div>

                <div className="login-with-social-account text-3xl flex items-center justify-center mt-5 text-[#0EA5E9]">
                    <FaGoogle onClick={handleGoogleSignIn} />
                    <FaGithub onClick={handleGithubSignIn} className='mx-4' />
                    <FaFacebook onClick={handleFacebookSignIn} />
                </div>
                <p className='text-center mt-6'>Don't have an account? <Link to='/register' className='text-[#0EA5E9] hover:underline'>Register</Link></p>
                {/* </div> */}
            </div>
            <div className="animation-field col-span-12 md:col-span-6 lg:col-span-7">
                <Lottie animationData={logInAnimation} loop={true} />
            </div>
        </div>
    );
};

export default Login;