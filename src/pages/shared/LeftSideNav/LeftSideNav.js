import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/categories`)
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])


    return (
        <div>
            <div className='list-none'>
                {
                    categories.map(category => <li key={category.id}><Link to={`/courselayout/${category.id}`} className='bg-[#A78BFA] mb-3 py-3 rounded-md text-white text-center block'>{category.title}</Link></li>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;