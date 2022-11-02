import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Navbar } from 'flowbite-react';
import logoImg from '../../../assets/img/logo.png';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/');
                toast("successfully Log out");
            })
            .catch(e => console.error(e))
    }

    const handleUserProfile = () => {
        navigate('/userprofile')
    }


    return (
        <Navbar
            fluid={true}
            rounded={true}
            className="bg-[#272935] py-5"
        >
            <NavLink className='flex items-center' to='/'>
                <img
                    src={logoImg}
                    className="mr-3 h-6 md:h-9"
                    alt="courseInstruct Logo"
                />
                <p className="self-center tracking-wider whitespace-nowrap text-lg md:text-xl font-bold text-[#0EA5E9] dark:text-white">
                    <span className='inline-block md:text-2xl -mb-2'> Instruct CROUSE</span>
                </p>
            </NavLink>
            <div className="flex md:order-2 items-center">
                <span className='mt-2'>
                    <label htmlFor="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer">
                        <span className="relative">
                            <input id="Toggle1" type="checkbox" className="hidden peer" />
                            <div className="w-10 h-6 rounded-full shadow-inner bg-gray-400 peer-checked:bg-cyan-400"></div>
                            <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-800"></div>
                        </span>
                    </label>
                </span>

                <div onClick={handleUserProfile}>
                    {user ? user?.photoURL ? <img className='h-7 md:h-10 w-7 md:w-10 ml-3 rounded-full' src={user?.photoURL} alt="" title={user?.displayName} /> : <FaUserCircle className='text-3xl ml-3' /> : ""}
                </div>


                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <NavLink
                    to="/courselayout"
                    className={({ isActive }) => isActive ? "text-base text-[#0EA5E9] underline"
                        : "text-base"}>
                    Courses
                </NavLink>
                <NavLink
                    to="/faq"
                    className={({ isActive }) => isActive ? "text-base text-[#0EA5E9] underline"
                        : "text-base"}
                >
                    FAQ
                </NavLink>
                <NavLink
                    to="/blog"
                    className={({ isActive }) => isActive ? "text-base text-[#0EA5E9] underline"
                        : "text-base"}>
                    Blog
                </NavLink>

                {
                    user && user.uid ?
                        <span onClick={handleLogOut} className='cursor-pointer text-base'>Log out</span>
                        :
                        <>
                            <NavLink to="/register" className={({ isActive }) => isActive ? "text-base text-[#0EA5E9] underline"
                                : "text-base"}>
                                Register
                            </NavLink>
                            <NavLink to="/login" className={({ isActive }) => isActive ? "text-base text-[#0EA5E9] underline"
                                : "text-base"}>
                                Log in
                            </NavLink>
                        </>
                }
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;