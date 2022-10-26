import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Avatar, Dropdown } from 'flowbite-react';
import logoImg from '../../../assets/img/logo.png';

const Header = () => {
    return (
        <Navbar
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand href="https://flowbite.com/">
                <img
                    src={logoImg}
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                />
                <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                    InstructCROUSE
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Dropdown
                    arrowIcon={false}
                    inline={true}
                    label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
                >
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <NavLink
                    to="/"
                    className="text-base"
                >
                    Home
                </NavLink>
                <NavLink to="/course" className="text-base">
                    Course
                </NavLink>
                <NavLink to="/faq" className="text-base">
                    FAQ
                </NavLink>
                <NavLink to="/blog" className="text-base">
                    Blog
                </NavLink>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;