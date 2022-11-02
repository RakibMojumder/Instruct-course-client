import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);
    const [selectedButton, setSelectedButton] = useState()

    const handleColor = (e) => {
        setSelectedButton(e.target.id)
    }

    useEffect(() => {
        fetch(`https://instruct-course-server-side.vercel.app/categories`)
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <div className='list-none px-3 mb-8 md:mb-0 md:px-4'>
            {
                categories.map(category => <li key={category.id}><Link onClick={handleColor} to={`/courselayout/${category.id}`} id={category.id} className={`${selectedButton === category.id ? "bg-[#0EA5E9] text-white" : "bg-white text-[#0EA5E9]"} border-b border-b-slate-200 py-2 text-center block hover:bg-[#0EA5E9] hover:text-white transition-all`}>{category.title}</Link></li>)
            }
        </div>
    );
};

export default LeftSideNav;