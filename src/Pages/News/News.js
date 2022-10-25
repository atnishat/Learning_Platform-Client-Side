import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './News.css'

const News = () => {
    const news = useLoaderData();
    const { title, details, course } = news;
    return (
        <div >
            
            <Card  className='card'>
            <img src={course.img} alt="" />
                <Card.Body>
                   
                    <Card.Title> <h3>{title}</h3> </Card.Title>

                    <Card.Text> <p>{ details }</p> </Card.Text>

                </Card.Body>
            </Card>
        </div>
    );
};

export default News;