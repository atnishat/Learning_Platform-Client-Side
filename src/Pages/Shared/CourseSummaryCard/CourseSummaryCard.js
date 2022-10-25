import React from 'react';
import './Cousesummary.css'
import { Link } from 'react-router-dom';
import { Col, Image, Row } from 'react-bootstrap';

const CourseSummaryCard = ({ news }) => {
    const { _id, title, course,  details  } = news;
    console.log(course.img);

    return (
       
        <div className='course-detail'>
            <img src={course.img} alt="" />
          {/* <Image>{course.img}</Image> */}
          <h4>{title}</h4>
          {/* <p>{
                  details.length > 80 ?
                      <p>{details.slice(0, 80) + '...'} <Link to="">Read More</Link> </p>
                      :
                      <p>{details}</p>
              }</p> */}

              <button><Link to={`/news/${_id}`}>Details</Link></button>
      </div>
    
          

    );
};

export default CourseSummaryCard;