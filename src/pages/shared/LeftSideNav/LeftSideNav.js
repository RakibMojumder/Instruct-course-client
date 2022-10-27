import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`https://instruct-course-server-side.vercel.app/categories`)
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <div>
            <div className='list-none'>
                {
                    categories.map(category => <li key={category.id}><Link to={`/courselayout/${category.id}`} className='bg-white mb-3 py-3 border border-[#7c53f5] rounded-md text-[#7c53f5] text-center block hover:bg-[#7c53f5] hover:text-white transition-all'>{category.title}</Link></li>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;