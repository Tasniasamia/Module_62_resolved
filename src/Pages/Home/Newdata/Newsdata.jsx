import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Rating from 'react-rating';
import {AiFillStar,AiOutlineStar} from "react-icons/ai";
// import { BsStarHalf } from "react-icons/bs";

const Newsdata = (props) => {
    const propsdata=props.data;
    console.log(propsdata);
    
    return (
        <div>
           <Card className="">
      <Card.Header> 
        <div className='d-flex align-items-center'>
        <img style={{height:"40px",width:"40px"}} src={propsdata.author.img} className='rounded-circle me-2' alt="author" />
      <div className='flex-grow-1'>
        <p className='mb-0'>{propsdata.author.name}</p>
        <p>{moment(propsdata.author.published_date).format('MMMM Do YYYY')}</p>
      </div>
      <div>
      <i className="fa-regular fa-bookmark"></i>        
      <i className="fa-solid fa-share-nodes ms-2"></i>

      </div>
      </div>
</Card.Header>
      <Card.Body>
        <Card.Title>{propsdata.title}</Card.Title>
        <Card.Img  src={propsdata.image_url} />
       
        <Card.Text>
{propsdata.details.length<250?propsdata.details:propsdata.details.slice(0,250)}<><Link to={`/New_layout/${propsdata._id}`}className='text-decoration-none ms-2'>Read More</Link> ...  </>   </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex">
        <div className='flex-grow-1'>
        <Rating
  placeholderRating={propsdata.rating.number}
  readonly
  emptySymbol={<AiOutlineStar/>}
  placeholderSymbol={<AiFillStar/>}
  fullSymbol={<AiFillStar/>}
/>{propsdata.rating.number}
      </div>
      <div>
      <i className="fa-solid fa-eye me-2"></i>{propsdata.total_view}
        </div></Card.Footer>
    </Card>   
        </div>
    );
};

export default Newsdata;