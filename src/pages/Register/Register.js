import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { FaGoogle, FaGithub, FaFacebook } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Lottie from "lottie-react";
import logInAnimation from '../../assets/lottie-animation/11067-registration-animation.json';

const Register = () => {
    const { signInWithGoogle, signInWithFacebook, signInWithGithub, createUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
                toast("successfully Register");
                console.log(user);
            })
            .catch(e => console.error(e));
    }

    const handleFacebookSignIn = () => {
        signInWithFacebook()
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
                toast("successfully Register");
                console.log(user);
            })
            .catch(e => console.error(e))
    }

    const handleGithubSignIn = () => {
        signInWithGithub()
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
                toast("successfully Register");
                console.log(user)
            })
            .catch(e => console.error(e))
    }

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const fname = form.fname.value;
        const lname = form.lname.value;
        const fullName = fname + " " + lname;
        const photoURL = form.photoURL.value;
        const phoneNumber = form.phoneNumber.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                setError('');
                handleUpdateUserProfile(fullName, photoURL, phoneNumber);
                navigate(from, { replace: true });
                console.log(user)
            })
            .catch(e => setError(e.message))
    }


    const handleUpdateUserProfile = (displayName, photoURL, phoneNumber) => {
        const profile = {
            displayName,
            photoURL,
            phoneNumber
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(e => console.error(e))
    }

    return (
        <div className='min-h-screen grid grid-cols-12 items-center gap-6 mt-20'>
            <div className="login-field order-last md:order-first col-span-12 md:col-span-6 lg:col-span-5 border border-slate-600 rounded-lg p-10">
                <h1 className='text-4xl font-bold text-center text-[#0EA5E9]'>Register</h1>
                <p className='text-center mb-12'>Create an account</p>
                <form onSubmit={handleSubmit}>
                    <div className="user-name md:flex justify-between">
                        <div className="form-control mb-4 md:w-[47%]">
                            <input className='rounded-md focus:border-none text-slate-800' type="text" name='fname' id='fname' placeholder='Your first name' required />
                        </div>

                        <div className="form-control mb-4 md:w-[47%]">
                            <input className='rounded-md focus:border-none text-slate-800' type="text" name='lname' id='lname' placeholder='Your last name' required />
                        </div>
                    </div>

                    <div className="form-control mb-4">
                        <input className='rounded-md focus:border-none text-slate-800' type="text" name='photoURL' id='photoURL' placeholder='Your photoURL' />
                    </div>
                    <div className="form-control mb-4">
                        <input className='rounded-md focus:border-none text-slate-800' type="text" name='phoneNumber' id='phoneNumber' placeholder='Your Phone Number' />
                    </div>
                    <div className="form-control mb-4">
                        <input className='rounded-md focus:border-none text-slate-800' type="email" name='email' id='email' placeholder='Your Email' />
                    </div>
                    <div className="form-control mb-6">
                        <input className='rounded-md focus:border-none text-slate-800' type="password" name='password' id='password' placeholder='Your password' />
                    </div>

                    {
                        error && <p className='text-red-500'>{error}</p>
                    }

                    <button className='bg-[#0EA5E9] rounded-md text-white w-full h-10' type='submit'>Register</button>
                </form>

                <div className="flex justify-between items-center mt-6">
                    <div className="line w-[20%] md:w-[24%] bg-slate-400 h-[1px]"></div>
                    <div className="text-xs md:text-base">Sign up with social account</div>
                    <div className="line w-[20%] md:w-[24%] bg-slate-400 h-[1px]"></div>
                </div>

                <div className="register-with-social-account text-3xl flex items-center justify-center mt-5 text-[#0EA5E9]">
                    <FaGoogle onClick={handleGoogleSignIn} />
                    <FaGithub onClick={handleGithubSignIn} className='mx-4' />
                    <FaFacebook onClick={handleFacebookSignIn} />
                </div>
                <p className='text-center mt-6'>Already have an account? <Link to='/login' className='text-[#0EA5E9] hover:underline'>log in</Link></p>
            </div>
            <div className="animation-field col-span-12 md:col-span-6 lg:col-span-7">
                <Lottie animationData={logInAnimation} loop={true} />
            </div>
        </div>
    );
};

export default Register;