import React from 'react';
import './Cover.css'
import img from '../../../asset/cover-2.jpg'
import { Col, Row } from 'react-bootstrap';

const Container = () => {
    return (
        <div className='container'>
           <Row  className='header-cover'>
           <Col lg="5" md xs={12}><h2  >Study From Home With Experts</h2></Col>
            <Col lg="7" md xs={12} className=""> <img  className='img' src={img} alt="" /></Col>
           </Row>
          
        </div>
    );
};

export default Container;