import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Headers/Header';
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>

                <Row>
                    <Col lg="5"><LeftSideNav></LeftSideNav></Col>
                    <Col lg="7"><Outlet></Outlet></Col>
                </Row>
                <Footer></Footer>
            </Container>

        </div>
    );
};

export default Main;