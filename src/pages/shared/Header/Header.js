import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Navbar } from 'flowbite-react';
import logoImg from '../../../assets/img/logo.png';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';

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

    return (
        <Navbar
            fluid={true}
            rounded={true}
            style={{ "background": "transparent", "padding": "20px 0" }}
        >
            <Navbar.Brand href="https://flowbite.com/">
                <img
                    src={logoImg}
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                />
                <span className="self-center whitespace-nowrap text-2xl font-bold text-[#A78BFA] dark:text-white">
                    InstructCROUSE
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                {/* <Dropdown
                    arrowIcon={false}
                    inline={true}
                    label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
                >
                </Dropdown> */}


                {
                    user && user.uid ?
                        <FaUser className='text-2xl' title={user?.displayName ? user.displayName : 'user not logged in'} /> : 'user nai'
                }

                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? 'text-white' : undefined}

                >
                    Home
                </NavLink>
                <NavLink to="/courselayout" >
                    Courses
                </NavLink>
                <NavLink to="/faq" >
                    FAQ
                </NavLink>
                <NavLink to="/blog" >
                    Blog
                </NavLink>
                {
                    user ?
                        <span onClick={handleLogOut} className='cursor-pointer'>log out</span>
                        :
                        <>
                            <NavLink to="/register" >
                                Register
                            </NavLink>
                            <NavLink to="/login" >
                                Log in
                            </NavLink>
                        </>
                }
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;