// eslint-disable-next-line no-unused-vars
import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Rating from 'react-rating';
import {AiFillStar,AiOutlineStar} from "react-icons/ai";
// import { BsStarHalf } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
const Newsdata = ({data}) => {
    // const propsdata=props.data;
    
    // console.log(propsdata);
    
    return (
        <div>
           <Card className="">
      <Card.Header> 
        <div className='d-flex align-items-center'>
         {/* eslint-disable-next-line react/prop-types */}
        <img style={{height:"40px",width:"40px"}} src={data.author.img} className='rounded-circle me-2' alt="author" />
      <div className='flex-grow-1'>
        {/* eslint-disable-next-line react/prop-types */}
        <p className='mb-0'>{data.author.name}</p>
         {/* eslint-disable-next-line react/prop-types */}
        <p>{moment(data.author.published_date).format('MMMM Do YYYY')}</p>
      </div>
      <div>
      <i className="fa-regular fa-bookmark"></i>        
      <i className="fa-solid fa-share-nodes ms-2"></i>

      </div>
      </div>
</Card.Header>
      <Card.Body>
         {/* eslint-disable-next-line react/prop-types */}
        <Card.Title>{data.title}</Card.Title>
         {/* eslint-disable-next-line react/prop-types */}
        <Card.Img  src={data.image_url} />
       
        <Card.Text>
{/* eslint-disable-next-line react/prop-types */}
{data.details.length<250?data.details:data.details.slice(0,250)}<><Link to={`/New_layout/${data._id}`}className='text-decoration-none ms-2'>Read More</Link> ...  </>   </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex">
        <div className='flex-grow-1'>
        <Rating
  // eslint-disable-next-line react/prop-types
  placeholderRating={data.rating.number}
  readonly
  emptySymbol={<AiOutlineStar/>}
  placeholderSymbol={<AiFillStar/>}
  fullSymbol={<AiFillStar/>}
// eslint-disable-next-line react/prop-types
/>{data.rating.number}
      </div>
      <div>
       {/* eslint-disable-next-line react/prop-types */}
      <i className="fa-solid fa-eye me-2"></i>{data.total_view}
        </div></Card.Footer>
    </Card>   
        </div>
    );
};

export default Newsdata;