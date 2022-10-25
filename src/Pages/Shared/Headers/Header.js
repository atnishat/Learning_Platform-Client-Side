import React from 'react';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
             <Navbar className='mb-4' collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand> <Link to='/' className='header-title'>Learner's</Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">All News</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          <Nav.Link href="#deets">hi
            </Nav.Link>
           
          </Nav>

          <div className='d-lg-none'>
            <LeftSideNav></LeftSideNav>
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;