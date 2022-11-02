import React from 'react';
import { useContext, useRef } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const UpdateUserInfo = ({ setShowUpdatePage }) => {
    const { user, updateUserProfile } = useContext(AuthContext);
    const nameRef = useRef();
    const photoURLRef = useRef();

    const handleHiddenPage = () => {
        setShowUpdatePage(false);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const profile = {
            displayName: nameRef.current.value,
            photoURL: photoURLRef.current.value
        }

        updateUserProfile(profile)
            .then(() => toast('Your profile updated successfully'))
            .catch(e => console.error(e))
    }

    return (
        <div className='min-h-screen grid grid-cols-12 justify-center items-center '>
            <div className='md:col-span-2 lg:col-span-3'></div>
            <div className='col-span-12 md:col-span-8 lg:col-span-6 border border-slate-500 px-4 py-14 md:p-12 rounded-lg bg-purple-100 text-slate-700 relative'>
                <h1 className='text-xl lg:text-3xl font-extrabold text-center uppercase mb-10'>Update Your Profile Info</h1>
                <FontAwesomeIcon onClick={handleHiddenPage} className='bg-slate-700 text-white absolute h-5 w-5 p-1 rounded-full top-3 right-4' icon={faXmark} />
                <form onSubmit={(handleSubmit)}>
                    <label htmlFor="">Email</label>
                    <div className="form-control mb-4">
                        <input className='text-slate-500 rounded-md border-none' type="email" name='email' defaultValue={user?.email} title='You can not change email address' readOnly />
                    </div>

                    <label htmlFor="">Name</label>
                    <div className="form-control mb-4">
                        <input ref={nameRef} className='text-slate-800 border-none rounded-md' type="text" name='name' defaultValue={user?.displayName} />
                    </div>

                    <label htmlFor="">PhotoURL</label>
                    <div className="form-control mb-6">
                        <input ref={photoURLRef} className='text-slate-800 border-none rounded-md' type="text" name='photoURL' defaultValue={user?.photoURL} />
                    </div>

                    <button type='submit' className='bg-[#0EA5E9] rounded-md text-white w-full h-10'>Save Changed</button>
                </form>
            </div>

            <div className='md:col-span-2 lg:col-span-3'></div>
        </div>
    );
};

export default UpdateUserInfo;