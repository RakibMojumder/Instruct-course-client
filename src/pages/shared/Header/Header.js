import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Avatar, Navbar } from 'flowbite-react';
import logoImg from '../../../assets/img/logo.png';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/')
            })
            .catch(e => console.error(e))
    }

    const handleUserProfile = () => {
        console.log('profile')
    }


    return (
        <Navbar
            fluid={true}
            rounded={true}
            style={{ "background": "transparent", "padding": "20px 0" }}
        >
            <Navbar.Brand href="https://instruct-course.web.app/">
                <img
                    src={logoImg}
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                />
                <span className="self-center whitespace-nowrap text-2xl font-bold text-[#7c53f5] dark:text-white">
                    InstructCROUSE
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2 items-center">
                <span className='mt-2 hidden md:block'>
                    <label htmlFor="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer text-gray-100">
                        <span className="relative">
                            <input id="Toggle1" type="checkbox" className="hidden peer" />
                            <div className="w-10 h-6 rounded-full shadow-inner bg-gray-400 peer-checked:bg-violet-400"></div>
                            <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-800"></div>
                        </span>
                    </label>
                </span>

                <div onClick={handleUserProfile}>
                    {user ? user?.photoURL ? <img className='h-10 w-10 ml-3 rounded-full' src={user?.photoURL} alt="" title={user?.displayName} /> : <FaUserCircle className='text-3xl ml-3' /> : ""}
                </div>


                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <span className='md:ml-6 md:hidden'>
                    <label htmlFor="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer text-gray-100">
                        <span className="relative">
                            <input id="Toggle1" type="checkbox" className="hidden peer" />
                            <div className="w-10 h-6 rounded-full shadow-inner bg-gray-400 peer-checked:bg-violet-400"></div>
                            <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-800"></div>
                        </span>
                    </label>
                </span>

                <NavLink
                    to="/courselayout"
                    className={({ isActive }) => isActive ? "text-base text-[#7c53f5] border-b border-b-[#7c53f5]"
                        : "text-base"}>
                    Courses
                </NavLink>
                <NavLink
                    to="/faq"
                    className={({ isActive }) => isActive ? "text-base text-[#7c53f5] border-b border-b-[#7c53f5]"
                        : "text-base"}
                >
                    FAQ
                </NavLink>
                <NavLink to="/blog" className={({ isActive }) => isActive ? "text-base text-[#7c53f5] border-b border-b-[#7c53f5]"
                    : "text-base"}>
                    Blog
                </NavLink>

                {
                    user ?
                        <span onClick={handleLogOut} className='cursor-pointer text-base'>log out</span>
                        :
                        <>
                            <NavLink to="/register" className={({ isActive }) => isActive ? "text-base text-[#7c53f5] border-b border-b-[#7c53f5]"
                                : "text-base"}>
                                Register
                            </NavLink>
                            <NavLink to="/login" className={({ isActive }) => isActive ? "text-base text-[#7c53f5] border-b border-b-[#7c53f5]"
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