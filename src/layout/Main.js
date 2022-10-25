import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Headers/Header';
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav';
import Cover from '../Pages/Shared/Container/Cover'

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Cover></Cover>
            <Container>

                <Row>
                    <Col lg="3" className='d-none d-lg-block'><LeftSideNav></LeftSideNav></Col>
                    <Col lg="9"><Outlet></Outlet></Col>
                </Row>
                <Footer></Footer>
            </Container>

        </div>
    );
};

export default Main;