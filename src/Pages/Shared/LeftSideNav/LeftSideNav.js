import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftSideNav.css'

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/course-categories')
        .then(res => res.json())
        .then(data => setCategories(data));
    },[])

    return (
        <div className='leftside-div'>
            <h6 className='leftside-title'>Total_Course: {categories.length}</h6>
            {
                categories.map(category => <p className='link' key={category.id}>

                   <Link to={`/category/${category.id}`}>{category.name}</Link>

                </p>)
            }
        </div>
    );
};

export default LeftSideNav;