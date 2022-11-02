import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser, faCircleInfo, faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import UpdateUserInfo from '../UpdateUserInfo/UpdateUserInfo';
import { useState } from 'react';


const UserProfile = () => {
    const { user } = useContext(AuthContext);
    const [showUpdatePage, setShowUpdatePage] = useState(false);

    const handleUpdateUserInfo = () => {
        setShowUpdatePage(!showUpdatePage);
    }

    console.log(user)

    return (
        <section className='min-h-screen flex justify-center items-center relative'>
            <div className={`${showUpdatePage ? "block" : "hidden"} absolute`}>
                <UpdateUserInfo setShowUpdatePage={setShowUpdatePage} />
            </div>

            <div className={`'w-[550px] rounded-xl relative bg-purple-100 px-2 py-4 md:p-8 rounded-md' ${showUpdatePage ? "hidden" : "block"}`}>

                <span onClick={handleUpdateUserInfo}><FontAwesomeIcon className='h-6 w-6 text-slate-700 border border-slate-500 rounded-full absolute top-4 right-4' icon={faCircleInfo} title='Edit user info' /></span>

                <div className="user-img">
                    <img className='h-36 w-36 rounded-full mx-auto' src={user?.photoURL} alt="" />
                </div>

                <div className="user-details ml-10 md:ml-0">
                    <div className='flex items-center mt-6 text-slate-700'>
                        <span><FontAwesomeIcon className='h-5 w-5' icon={faUser} /></span>
                        <h1 className='ml-3 text-xl font-semibold'>{user?.displayName ? user.displayName : "--"}</h1>
                    </div>
                    <div className='flex items-center text-slate-700 my-1'>
                        <span><FontAwesomeIcon className='h-5 w-5' icon={faEnvelope} /></span>
                        <p className='ml-3 text-slate-700'>Email: {user.email}</p>
                    </div>
                    <div className='flex text-slate-700'>
                        {/* <img className='h-5 w-5' src={user.emailVerified ? checkImg : notVerifiedImg} alt="" /> */}
                        <span>{user.emailVerified ? <FontAwesomeIcon className='h-5 w-5' icon={faCircleCheck} /> : <FontAwesomeIcon className='h-5 w-5' icon={faCircleXmark} />}</span>
                        <p className='ml-3'>Verified Status: <span className={`${user.emailVerified ? 'text-green-500' : 'text-red-500'}`}>{user.emailVerified ? "Verified" : "Not verified"}</span></p>
                    </div>
                    {/* <p className='text-sm md:text-base text-slate-700 font-medium'>User ID: {user.uid}</p> */}
                </div>
            </div>
        </section>
    );
};

export default UserProfile;