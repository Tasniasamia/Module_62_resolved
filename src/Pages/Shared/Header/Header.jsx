import Button from 'react-bootstrap/Button';
import logo from '../../../assets/logo.png'
import moment from 'moment';

import Container from 'react-bootstrap/Container';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import './Header.css'
import { useContext } from 'react';
import { authdata } from '../../../AuthProvider/AuthProvider';
const Header = () => {
  const {user,signout}=useContext(authdata);
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
           
        </div>
    );
};

export default Header;