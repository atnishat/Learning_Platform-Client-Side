import React from 'react';
import { FaUser } from 'react-icons/fa';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button, Container, Image } from 'react-bootstrap';
import img from '../../../asset/logo.jpg'
import { Link } from 'react-router-dom';
import './Header.css'
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Header = () => {
  const { user , logOut} = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut()
    .then(() =>{ })
    .catch(error => console.error(error))

  }




  return (
    <div>
      <Navbar className='mb-4' collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand> <img src={img} alt="" className='logo-img'/> <Link to='/' className='header-title'>Learner's</Link> </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/course">Course</Nav.Link>
              <Nav.Link href="/faq">FAQ</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
             
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                {
                  user?.uid ?
                    <>
                      <span>{user?.displayName}</span>
                      <Button variant="light" onClick={handleLogOut} id='logout'>Log out</Button>
                    </>
                    :
                    <>
                      <Link className='log' to='/login'>Login</Link>
                      <Link className='reg' to='/register'>Register</Link>
                    </>
                }
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                {user?.photoURL ?
                  <Image
                    style={{ height: '30px' }}
                    roundedCircle
                    src={user?.photoURL}>
                  </Image>
                  : <FaUser></FaUser>
                }
              </Nav.Link>
              <Nav >
               
              </Nav>

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