import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { FaGoogle, FaGithub, FaFacebook } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const Login = () => {
    const { logIn, signInWithGoogle, signInWithFacebook, signInWithGithub, } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true })
                console.log(user)
            })
            .catch(e => console.error(e))
    }

    const handleFacebookSignIn = () => {
        signInWithFacebook()
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true })
                console.log(user)
            })
            .catch(e => console.error(e))
    }

    const handleGithubSignIn = () => {
        signInWithGithub()
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true })
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
    return (
        <div className='grid grid-cols-12'>
            <div className="div col-span-1 md:col-span-2 lg:col-span-3"></div>
            <div className="div col-span-10 md:col-span-8 lg:col-span-6 my-14 p-4 md:p-8 lg:p-16 border">
                <h1 className='text-4xl font-bold text-center text-[#7c53f5]'>Sign In</h1>
                <p className='text-center mb-12'>Sign in to access your account</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-control mb-4">
                        <label className='' htmlFor="email">Your Email</label>
                        <input className='text-slate-800' type="email" name='email' id='email' placeholder='Your Email' />
                    </div>
                    <div className="form-control mb-6">
                        <label className='' htmlFor="password">Your Password</label>
                        <input className='text-slate-800' type="password" name='password' id='password' placeholder='Your password' />
                    </div>

                    {error && <p className='text-red-500 mb-3'>{error}</p>}

                    <button type='submit' className='bg-[#7c53f5] text-white w-full h-10'>Log in</button>
                </form>

                <div className="flex justify-between items-center mt-6">
                    <div className="line w-[25%] md:w-[27%] bg-slate-400 h-[1px]"></div>
                    <div className="text-xs md:text-base">Sign in with social account</div>
                    <div className="line w-[25%] md:w-[27%] bg-slate-400 h-[1px]"></div>
                </div>

                <div className="login-with-social-account text-3xl flex items-center justify-center mt-5 text-[#7c53f5]">
                    <FaGoogle onClick={handleGoogleSignIn} />
                    <FaGithub onClick={handleGithubSignIn} className='mx-4' />
                    <FaFacebook onClick={handleFacebookSignIn} />
                </div>
                <p className='text-center mt-6'>Don't have an account? <Link to='/register' className='text-[#7c53f5] hover:underline'>Register</Link></p>
            </div>
            <div className="div col-span-1 md:col-span-2 lg:col-span-3"></div>
        </div>
    );
};

export default Login;