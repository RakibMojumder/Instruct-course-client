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
        <div>
            <div className='list-none px-3 md:px-0'>
                {
                    categories.map(category => <li key={category.id}><Link onClick={handleColor} to={`/courselayout/${category.id}`} id={category.id} className={`${selectedButton === category.id ? "bg-[#7C53F5] text-white" : "bg-white text-[#7C53F5]"} border border-[#7C53F5] rounded-md mb-3 py-3 text-center block hover:bg-[#7C53F5] hover:text-white transition-all`}>{category.title}</Link></li>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;