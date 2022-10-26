import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { FaGoogle, FaGithub, FaFacebook } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

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
                console.log(user);
            })
            .catch(e => console.error(e));
    }

    const handleFacebookSignIn = () => {
        signInWithFacebook()
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
                console.log(user);
            })
            .catch(e => console.error(e))
    }

    const handleGithubSignIn = () => {
        signInWithGithub()
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
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
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                setError('');
                handleUpdateUserProfile(fullName, photoURL);
                navigate(from, { replace: true });
                console.log(user)
            })
            .catch(e => setError(e.message))
    }

    const handleUpdateUserProfile = (displayName, photoURL) => {
        const profile = {
            displayName,
            photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(e => console.error(e))
    }

    return (
        <div className='grid grid-cols-12'>
            <div className="div col-span-3"></div>
            <div className="div col-span-6 my-14 p-16 border">
                <h1 className='text-4xl font-bold text-center text-[#A78BFA]'>Register</h1>
                <p className='text-center mb-12'>Create an account</p>
                <form onSubmit={handleSubmit}>
                    <div className="user-name flex justify-between">
                        <div className="form-control mb-4 w-[47%]">
                            <label className='text-white' htmlFor="fname">Your First Name</label>
                            <input className='text-slate-800' type="text" name='fname' id='fname' placeholder='Your first name' />
                        </div>

                        <div className="form-control mb-4 w-[47%]">
                            <label className='text-white' htmlFor="lname">Your Last Name</label>
                            <input className='text-slate-800' type="text" name='lname' id='lname' placeholder='Your last name' />
                        </div>
                    </div>

                    <div className="form-control mb-4">
                        <label className='text-white' htmlFor="photoURL">Your photoURL</label>
                        <input className='text-slate-800' type="text" name='photoURL' id='photoURL' placeholder='Your photoURL' />
                    </div>
                    <div className="form-control mb-4">
                        <label className='text-white' htmlFor="email">Your Email</label>
                        <input className='text-slate-800' type="email" name='email' id='email' placeholder='Your Email' />
                    </div>
                    <div className="form-control mb-6">
                        <label className='text-white' htmlFor="password">Your Password</label>
                        <input className='text-slate-800' type="password" name='password' id='password' placeholder='Your password' />
                    </div>

                    {
                        error && <p className='text-red-500'>{error}</p>
                    }

                    <button className='bg-[#A78BFA] text-white w-full h-10' type='submit'>Register</button>
                </form>

                <div className="flex justify-between items-center mt-6">
                    <div className="line w-[27%] bg-white h-[1px]"></div>
                    <div className="">Signup with social account</div>
                    <div className="line w-[27%] bg-white h-[1px]"></div>
                </div>

                <div className="register-with-social-account text-3xl flex items-center justify-center mt-5 text-[#A78BFA]">
                    <FaGoogle onClick={handleGoogleSignIn} />
                    <FaGithub onClick={handleGithubSignIn} className='mx-4' />
                    <FaFacebook onClick={handleFacebookSignIn} />
                </div>
                <p className='text-center mt-6'>Already have an account? <Link to='/login' className='text-[#A78BFA] hover:underline'>log in</Link></p>
            </div>
            <div className="div col-span-3"></div>
        </div>
    );
};

export default Register;