import Button from 'react-bootstrap/Button';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import './Header.css'
import { useContext } from 'react';
import { authdata } from '../../../AuthProvider/AuthProvider';
const Header = () => {
  const receiveproperty=useContext(authdata);
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
          <Nav className="mx-auto"id="navbarlink">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Career">Career</Link>

          </Nav>
          <Nav>
            {
              receiveproperty.user &&  <Nav.Link href="#deets">Profile</Nav.Link>
            }
           
            {
              receiveproperty.user ?<><span className='me-2 my-auto'>{receiveproperty.user.email}</span><Button variant="secondary"onClick={receiveproperty.signout}>Logout</Button></>:<Button variant="secondary"><Link to="/Login">Login</Link></Button>
            }
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;