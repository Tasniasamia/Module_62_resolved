import React from 'react';
import Button from 'react-bootstrap/Button';
import {BsGoogle} from "react-icons/bs";
import {AiFillGithub} from "react-icons/ai";
import ListGroup from 'react-bootstrap/ListGroup';
import {AiFillFacebook,AiOutlineTwitter,AiFillInstagram} from "react-icons/ai";
import Qzone from '../Qzone/Qzone';
import backpik from '../../../assets/bg1.png'

const Right = () => {
    return (
        <div>
            <div>
                <h5>Login With</h5>
                <Button variant="outline-success"size='lg'><BsGoogle></BsGoogle> Login With Google</Button>
                <Button variant="outline-info"size='lg'className='my-2'><AiFillGithub></AiFillGithub> Login With Github</Button>

            </div>
            <div>
                <h5>Find Us On</h5>
                <ListGroup>
      <ListGroup.Item><AiFillFacebook></AiFillFacebook>Facebook</ListGroup.Item>
      <ListGroup.Item><AiOutlineTwitter></AiOutlineTwitter>Twitter</ListGroup.Item>
      <ListGroup.Item><AiFillInstagram></AiFillInstagram>Instagram</ListGroup.Item>
     
    </ListGroup>
            </div>
            <div  className='my-2  p-3'style={{background:"gray"}}>
            <h4>Q-Zone</h4>

                <div className='d-flex justify-content-center'>
                <Qzone></Qzone>
                </div>
            </div>
            <div className='position-relative d-flex justify-content-center'>
                <img src={backpik} alt="backbanner" />
                <div className='text-center position-absolute top-0 text-white p-5'>
                    <h3 style={{fontSize:"35px"}}>Create an Amazing Newspaper</h3>
                    <p style={{fontSize:"20px"}}className='py-3'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button variant="danger"size='lg'>Latest</Button>
                </div>
            </div>
        </div>
    );
};

export default Right;