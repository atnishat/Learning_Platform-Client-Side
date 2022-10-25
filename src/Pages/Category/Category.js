import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../Shared/CourseSummaryCard/CourseSummaryCard';
import './Category.css'

const Category = () => {
    const fullCourse = useLoaderData();
    return (
        <div className='category'>
            <h6>Course: {fullCourse.length}</h6>

          
           {
                fullCourse.map(news => <CourseSummaryCard
                key={news._id}
                news={news}
                ></CourseSummaryCard>)
            }
          
        </div>
    );
};

export default Category;