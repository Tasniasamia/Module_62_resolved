import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { authdata } from '../../../AuthProvider/AuthProvider';
const Navbar2 = () => {
  const {user,signout}=useContext(authdata);
    return (
        <div>
             <Navbar collapseOnSelect expand="lg" bg="light" variant="light"className='my-4'>
      <Container>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto"id="navbarlink">
          <Link to="/catagory/0">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/Career">Career</Link>

          </Nav>
          <Nav>
            {
                user && <img src={user.photoURL}style={{height:"50px",width:"50px"}}alt="image"className='rounded-circle'/>

            }
            
           
            {
          user ?<><span className='me-2 my-auto'>{user.email}</span><Button variant="secondary"onClick={signout}>Logout</Button></>:<Button variant="secondary"><Link to="/Login">Login</Link></Button>
            }
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            
        </div>
    );
};

export default Navbar2;