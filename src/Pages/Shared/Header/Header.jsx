import React from 'react';
import Button from 'react-bootstrap/Button';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Marquee from "react-fast-marquee";
const Header = () => {
    return (
        <div>
            <div className='text-center'>
                <img src={logo} alt="logo" />
                <p>Journalism Without Fear or Favour</p>
                <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>

            </div>
            <div>
            <Container className='d-flex'>      
            <Button variant="danger">Latest</Button>  
            <Marquee speed={20}>
            Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...    

  </Marquee>
             </Container>

            </div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light"className='my-4'>
      <Container>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Career">Career</Nav.Link>

          </Nav>
          <Nav>
            <Nav.Link href="#deets">Profile</Nav.Link>
            <Button variant="secondary">Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;